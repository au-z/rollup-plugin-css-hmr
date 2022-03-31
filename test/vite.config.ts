import { defineConfig } from "vite";
import CssHmr from "../dist/rollup-plugin-css-hmr.es";
const CssHmrCJS = require("../dist/rollup-plugin-css-hmr.cjs");

export default defineConfig(() => {
  return {
    plugins: [process.env.VITE_PLUGINS_ESM ? CssHmr(".ts") : CssHmrCJS(".ts")],
    root: "test",
  };
});
