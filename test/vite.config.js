import { defineConfig } from 'vite'
import CssHmr from '../src/index.js'

export default defineConfig({
  plugins: [CssHmr('.ts')],
})
