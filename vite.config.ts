import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "CssHmr",
      fileName: "rollup-plugin-css-hmr",
    },
    rollupOptions: {
      external: ["path"],
      output: {
        globals: {
          path: "path",
        },
      },
    },
  },
});
