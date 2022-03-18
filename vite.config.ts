import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["path"],
    },
  },
});
