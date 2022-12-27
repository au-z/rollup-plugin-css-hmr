import { defineConfig } from "vite";
import CssHmr from "rollup-plugin-css-hmr";

export default defineConfig(() => {
  return {
    plugins: [
      CssHmr({
        "*": { ext: ".ts" },
      }),
    ],
    root: "test",
  };
});
