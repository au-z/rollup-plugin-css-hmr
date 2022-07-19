import { defineConfig } from "vite";
import CssHmr from "rollup-plugin-css-hmr/esm";

export default defineConfig(() => {
  return {
    plugins: [CssHmr(".ts")],
    root: "test",
  };
});
