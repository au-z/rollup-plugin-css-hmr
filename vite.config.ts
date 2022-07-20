import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: "./src/index.ts",
      name: "CssHMR",
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      external: ["path"],
    },
  },
});
