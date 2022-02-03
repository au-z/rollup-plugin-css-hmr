var path = {};
function CssHmr(ext) {
  console.log("path", path);
  const matchFn = (id) => {
    var _a;
    return ((_a = path.basename(id)) == null ? void 0 : _a.indexOf(ext)) > -1;
  };
  return {
    name: "css-hmr",
    handleHotUpdate({ file, modules, server }) {
      const ext2 = path.extname(file);
      const name = path.basename(file, ext2);
      if (ext2 === ".css") {
        server.ws.send({ type: "custom", event: name, data: {} });
      }
    },
    transform(src, id) {
      if (!matchFn(id))
        return;
      const ext2 = path.extname(id);
      const name = path.basename(id, ext2);
      return {
        code: src + `


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
        enforce: "post"
      };
    }
  };
}
export { CssHmr as default };
