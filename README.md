# rollup-plugin-css-hmr

> A small CSS helper plugin for Vite/Rollup to trigger hot module reloading of dependent tracked modules.

## Usage

```js
import CssHmr from "rollup-plugin-css-hmr";

export default {
  plugins: [CssHmr(".ts")],
};
```

When a CSS [name] file change is made, any [name].ts file will also be hot reloaded.

### ESM/UMD

Optionally, you may specify a specific build of the lib:

```js
import CssHmrESM from "rollup-plugin-css-hmr/esm";
// or
const CssHmrUMD = require("rollup-plugin-css-hmr/umd");
```

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
