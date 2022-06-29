import { defineConfig } from "vite";
import CssHMR from "rollup-plugin-css-hmr";

export default defineConfig(() => {
  return {
    plugins: [CssHMR(".ts")],
    root: "test",
  };
});
