# rollup-plugin-css-hmr

> A small CSS helper plugin for Vite/Rollup to trigger hot module reloading of dependent tracked modules.

## Usage

```js
import CssHmr from "rollup-plugin-css-hmr";

export default {
  plugins: [
    CssHmr({
      // minimally
      '*': {}
      // defaults
      "*": {
        ext: ".ts",
        glob: "*",
        event: (id, { ext, name }) => name,
        page: false,
      },
      // customized
      "src/css/**/*": {
        ext: '.ts',
        glob: 'src/**/*',
        event: (id, {ex, name}) => `${name}${ext}`,
        page: true, // allow page reloads
      }
    }),
  ],
};
```

When a CSS [name] file change is made, any [name].ts file will also be hot reloaded.

### ESM/UMD/CJS

Optionally, you may specify a specific build of the lib:

```js
import CssHmrESM from "rollup-plugin-css-hmr/esm";
// or
import CssHmrUMD from "rollup-plugin-css-hmr/umd";
// or
const CssHmrCJS = require("rollup-plugin-css-hmr/cjs");
```

## Contributing

PRs welcome!
