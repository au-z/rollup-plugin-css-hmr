const regex = new RegExp('^[\\/](.+[\\//])*((.+).(.+))$', 'gi')
function basename(str) {
  const match = regex.exec(str)
  console.log('match: ', match)
  return match == null ? void 0 : match[2]
}
function extname(str) {
  const match = regex.exec(str)
  console.log('match: ', match)
  return match == null ? void 0 : match[4]
}
function CssHmr(ext) {
  const matchFn = (id) => {
    var _a
    return ((_a = basename(id)) == null ? void 0 : _a.indexOf(ext)) > -1
  }
  return {
    name: 'css-hmr',
    handleHotUpdate({ file, modules, server }) {
      console.log('HOT')
      const ext2 = extname(file)
      const name = basename(file)
      if (ext2 === '.css') {
        server.ws.send({ type: 'custom', event: name, data: {} })
      }
    },
    transform(src, id) {
      console.log('trans', src, id)
      if (!matchFn(id)) return
      extname(id)
      const name = basename(id)
      return {
        code:
          src +
          `


          // -----
          //  HMR
          // -----
          if(false) {
            false.on('${name}', () => {
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
export { CssHmr as default }
