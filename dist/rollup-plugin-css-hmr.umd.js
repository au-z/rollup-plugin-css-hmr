(function(e,s){typeof exports=="object"&&typeof module!="undefined"?module.exports=s():typeof define=="function"&&define.amd?define(s):(e=typeof globalThis!="undefined"?globalThis:e||self,e["rollup-plugin-css-hmr"]=s())})(this,function(){"use strict";var e={};function s(f){console.log("path",e);const m=t=>{var n;return((n=e.basename(t))==null?void 0:n.indexOf(f))>-1};return{name:"css-hmr",handleHotUpdate({file:t,modules:n,server:a}){const o=e.extname(t),u=e.basename(t,o);o===".css"&&a.ws.send({type:"custom",event:u,data:{}})},transform(t,n){if(!m(n))return;const a=e.extname(n),o=e.basename(n,a);return{code:t+`


					// -----
					//  HMR
					// -----
					if(false) {
						false.on('${o}', () => {
							false.invalidate();
						})
					}
				`,map:null,enforce:"post"}}}}return s});
