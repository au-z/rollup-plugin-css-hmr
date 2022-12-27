import path from "path";
import minimatch from "minimatch";

/**
 * Workaround for aggressive static string replacement (vite)
 * https://vitejs.dev/guide/env-and-mode.html#production-replacement
 */
const import_meta_hot = ["import", "meta", "hot"].join(".");

export interface CssHmrRules {
  [glob: string]: {
    // extension filter to hot reload
    ext?: string;
    // glob to filter reloading
    glob?: string;
    // a function returning the ws hmr event name
    event?: (
      id: string,
      { ext, name }: { ext: string; name: string }
    ) => string;
    // whether to enable page reloads (false)
    page?: boolean;
  };
}

/**
 * Triggers a page reload when a matching CSS filename is changed
 * @param {Function} ext an extension to hot reload if its matching css changes
 */
export default function CssHmr(rules: CssHmrRules = {}) {
  let root = "";

  return {
    name: "css-hmr",
    configureServer(server) {
      root = server.config.root;
    },
    handleHotUpdate({ file, modules, server }) {
      const id = path.relative(root, file);
      const ext = path.extname(id);
      // only apply rules to CSS modules
      if (ext !== ".css") return;

      const [glob, rule] =
        Object.entries(rules).find(([glob]) => minimatch(id, glob)) ?? [];
      if (!glob) return;

      const name = path.basename(id, ext);
      const event = rule.event?.(id, { ext, name }) ?? name;

      // send an HMR update
      server.ws.send(event, {});
    },
    // transform files
    transform(src, id) {
      id = path.relative(root, id);
      // use rule.glob over key glob to separate css and ts files
      const ruleIdx = Object.entries(rules).findIndex(([glob, rule]) =>
        minimatch(id, rule.glob ?? glob)
      );
      if (ruleIdx < 0) return;

      const [glob, rule] = Object.entries(rules)[ruleIdx];
      const ext = path.extname(id);

      // early exit if no rule found or extension does not match
      if (!rule || (rule.ext && ext !== ext)) {
        return { code: src };
      }

      const name = path.basename(id, ext);
      const event = rule.event?.(id, { ext, name }) ?? name;

      return {
        code: `${src}\n\n
// -----
//  HMR
// -----
if(${import_meta_hot}) {
  ${
    rule.page
      ? `${import_meta_hot}.on('vite:beforeFullReload', () => {
      throw new Error('(avoiding full reload)');
    })`
      : ""
  }
  ${import_meta_hot}.accept((module) => {
    ${import_meta_hot}.on('${event}', () => {})
  })
}`,
        map: null,
        enforce: "post",
      };
    },
  };
}
