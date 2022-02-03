import { defineConfig } from 'vite'
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineConfig({
  resolve: {
    alias: {
      path: 'rollup-plugin-polyfill-node/polyfills/path',
    },
  },
  build: {
    lib: {
      name: 'rollup-plugin-css-hmr',
      entry: 'src/index.js',
    },
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
  },
})
