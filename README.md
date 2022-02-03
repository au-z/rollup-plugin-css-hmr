# rollup-plugin-css-hmr

> A small CSS helper plugin for Vite/Rollup to trigger hot module reloading of dependent tracked modules.

## Usage

```js
// CommonJS import is supported if necessary
// const CssHmr = require('rollup-plugin-css-hmr')
import CssHmr from 'rollup-plugin-css-hmr'

export default {
  plugins: [CssHmr('.ts')],
}
```

When a CSS [name] file change is made, any [name].ts file will also be hot reloaded.

## Documentation

```js
/**
 * Triggers a page reload when a matching CSS filename is changed
 * @param {Function} ext an extension to hot reload if its matching css changes
 */
export default function CssHmr(ext) {
  // ...
}
```

## Contributing

PRs welcome!
