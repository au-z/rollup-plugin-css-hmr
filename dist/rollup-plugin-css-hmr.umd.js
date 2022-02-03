;(function (s, o) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? (module.exports = o())
    : typeof define == 'function' && define.amd
    ? define(o)
    : ((s = typeof globalThis != 'undefined' ? globalThis : s || self),
      (s['rollup-plugin-css-hmr'] = o()))
})(this, function () {
  'use strict'
  const s = new RegExp('^[\\/](.+[\\//])*((.+).(.+))$', 'gi')
  function o(c) {
    const e = s.exec(c)
    return console.log('match: ', e), e == null ? void 0 : e[2]
  }
  function u(c) {
    const e = s.exec(c)
    return console.log('match: ', e), e == null ? void 0 : e[4]
  }
  function l(c) {
    const e = (t) => {
      var n
      return ((n = o(t)) == null ? void 0 : n.indexOf(c)) > -1
    }
    return {
      name: 'css-hmr',
      handleHotUpdate({ file: t, modules: n, server: f }) {
        console.log('HOT')
        const r = u(t),
          i = o(t)
        r === '.css' && f.ws.send({ type: 'custom', event: i, data: {} })
      },
      transform(t, n) {
        if ((console.log('trans', t, n), !e(n))) return
        u(n)
        const f = o(n)
        return {
          code:
            t +
            `


          // -----
          //  HMR
          // -----
          if(false) {
            false.on('${f}', () => {
              false.invalidate();
            })
          }
        `,
          map: null,
          enforce: 'post',
        }
      },
    }
  }
  return l
})
