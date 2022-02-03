import {defineConfig} from 'vite'

export default defineConfig({
	build: {
		lib: {
			name: "rollup-plugin-css-hmr",
			entry: 'src/index.js',
		},
	}
})