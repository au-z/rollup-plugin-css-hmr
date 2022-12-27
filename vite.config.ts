import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: "src/index.ts",
      name: "CssHmr",
      fileName: "rollup-plugin-css-hmr",
    },
    minify: false,
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
