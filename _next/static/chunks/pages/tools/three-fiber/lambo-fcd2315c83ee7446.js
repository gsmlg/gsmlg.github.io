(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{7407:function(e,t,n){"use strict";n.d(t,{j:function(){return c}});var r=n(7462),i=n(7294),a=n(9477),o=n(4232);const s={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "},u={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",fragmentShader:"\n  \n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "},c=i.forwardRef((({scale:e,frames:t=1/0,opacity:n=1,width:c=1,height:l=1,blur:f=1,far:v=10,resolution:m=256,smooth:h=!0,...d},p)=>{const x=(0,o.Ky)((({scene:e})=>e)),g=(0,o.Ky)((({gl:e})=>e)),y=i.useRef(null);c*=Array.isArray(e)?e[0]:e||1,l*=Array.isArray(e)?e[1]:e||1;const[b,w,j,D,U,M,S]=i.useMemo((()=>{const e=new a.WebGLRenderTarget(m,m),t=new a.WebGLRenderTarget(m,m);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;const n=new a.PlaneBufferGeometry(c,l).rotateX(Math.PI/2),r=new a.Mesh(n),i=new a.MeshDepthMaterial;i.depthTest=i.depthWrite=!1,i.onBeforeCompile=e=>e.fragmentShader=e.fragmentShader.replace("1.0 - fragCoordZ ), opacity );","0.0 ), ( 1.0 - fragCoordZ ) * 1.0 );");const o=new a.ShaderMaterial(s),f=new a.ShaderMaterial(u);return f.depthTest=o.depthTest=!1,[e,n,i,r,o,f,t]}),[m,c,l,e]),P=i.useCallback((e=>{D.visible=!0,D.material=U,U.uniforms.tDiffuse.value=b.texture,U.uniforms.h.value=1*e/256,g.setRenderTarget(S),g.render(D,y.current),D.material=M,M.uniforms.tDiffuse.value=S.texture,M.uniforms.v.value=1*e/256,g.setRenderTarget(b),g.render(D,y.current),D.visible=!1}),[]);let E=0;return(0,o.xQ)((()=>{if(y.current&&(t===1/0||E<t)){const e=x.background;x.background=null,x.overrideMaterial=j,g.setRenderTarget(b),g.render(x,y.current),x.overrideMaterial=null,P(f),h&&P(.4*f),g.setRenderTarget(null),x.background=e,E++}})),i.createElement("group",(0,r.Z)({"rotation-x":Math.PI/2},d,{ref:p}),i.createElement("mesh",{geometry:w,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},i.createElement("meshBasicMaterial",{map:b.texture,transparent:!0,opacity:n})),i.createElement("orthographicCamera",{ref:y,args:[-c/2,c/2,l/2,-l/2,0,v]}))}))},8654:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/three-fiber/lambo",function(){return n(3225)}])},3225:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5944),i=n(917),a=n(7294),o=n(9008),s=n(2458),u=n(5893),c=n(9477),l=n(4232),f=n(8626),v=n(897),m=n(7462),h=n(7407);const d={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}};function p({children:e,controls:t,shadows:n=!0,adjustCamera:r=!0,environment:i="city",intensity:o=1,preset:s="rembrandt",shadowBias:u=0,contactShadow:f={blur:2,opacity:.5,position:[0,0,0]},...p}){const x=d[s],g=(0,l.Ky)((e=>e.camera)),y=(0,l.Ky)((e=>e.controls)),b=a.useRef(null),w=a.useRef(null),[{radius:j,width:D,height:U},M]=a.useState({radius:0,width:0,height:0});return a.useLayoutEffect((()=>{b.current.position.set(0,0,0),b.current.updateWorldMatrix(!0,!0);const e=(new c.Box3).setFromObject(w.current),t=new c.Vector3,n=new c.Sphere,r=e.max.y-e.min.y,i=e.max.x-e.min.x;e.getCenter(t),e.getBoundingSphere(n),M({radius:n.radius,width:i,height:r}),b.current.position.set(-t.x,-t.y+r/2,-t.z)}),[e]),a.useLayoutEffect((()=>{if(r){const e=j/(U>D?1.5:2.5);g.position.set(0,.5*j,2.5*j),g.near=.1,g.far=Math.max(5e3,4*j),g.lookAt(0,e,0);const n=y||(null==t?void 0:t.current);n&&(n.target.set(0,e,0),n.update())}}),[y,j,U,D,r]),a.createElement("group",p,a.createElement("group",{ref:b},a.createElement("group",{ref:w},e)),f&&a.createElement(h.j,(0,m.Z)({width:2*j,height:2*j,far:j/2},f)),i&&a.createElement(v.q,{preset:i}),a.createElement("ambientLight",{intensity:o/3}),a.createElement("spotLight",{penumbra:1,position:[x.main[0]*j,x.main[1]*j,x.main[2]*j],intensity:2*o,castShadow:n,"shadow-bias":u}),a.createElement("pointLight",{position:[x.fill[0]*j,x.fill[1]*j,x.fill[2]*j],intensity:o}))}var x=n(9888);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=(0,f.L)("/webgl/lambo.glb"),n=t.scene,r=t.nodes,i=t.materials;return(0,a.useLayoutEffect)((function(){n.traverse((function(e){return"Mesh"===e.type&&(e.receiveShadow=e.castShadow=!0)})),Object.assign(r.wheel003_020_2_Chrome_0.material,{metalness:1,roughness:.4,color:new c.Color("black")}),Object.assign(i.WhiteCar,{roughness:0,metalness:.25,emissive:new c.Color("#500000"),envMapIntensity:.5})}),[n,r,i]),(0,u.jsx)("primitive",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({object:n},e))}function b(){return(0,u.jsxs)(l.Xz,{dpr:[1,2],shadows:!0,camera:{fov:45},children:[(0,u.jsx)("color",{attach:"background",args:["#101010"]}),(0,u.jsx)("fog",{attach:"fog",args:["#101010",10,50]}),(0,u.jsxs)(a.Suspense,{fallback:null,children:[(0,u.jsx)(v.q,{path:"/webgl/cube"}),(0,u.jsx)(p,{environment:null,intensity:1,contactShadowOpacity:1,shadowBias:-.0015,children:(0,u.jsx)(y,{scale:.01})})]}),(0,u.jsxs)("mesh",{"rotation-x":-Math.PI/2,scale:100,children:[(0,u.jsx)("planeGeometry",{}),(0,u.jsx)("meshStandardMaterial",{color:"#101010",transparent:!0,depthWrite:!1})]}),(0,u.jsx)(x.z,{autoRotate:!0,enableZoom:!1,enablePan:!1,minPolarAngle:Math.PI/2.8,maxPolarAngle:Math.PI/2.8})]})}function w(){var e,t,n=(e=["\n          flex: 1 1 auto;\n        "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return w=function(){return n},n}var j=function(e){return(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Three Fiber Lambo"}),(0,r.jsx)("meta",{name:"description",content:"Description of Lambo"})]}),(0,r.jsx)("div",{css:(0,i.css)(w()),children:(0,r.jsx)(b,{})})]})}},2458:function(e,t,n){"use strict";var r=n(5944),i=n(7294),a=n(2151),o=n(917),s=n(2293),u=n(155),c=n(3972),l=n(3321),f=n(3946),v=n(326),m=n(1664),h=n(6127);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(u){s=!0,i=u}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(){var e,t,n=(e=["\n              margin: 0 2em;\n              display: ","\n            "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return x=function(){return n},n}var g=(0,a.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),y=(0,a.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),b=(0,a.ZP)("footer")((function(e){var t=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:t.palette.getContrastText(t.palette.primary.main),backgroundColor:t.palette.primary.main}})),w=(0,a.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),j=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],D=function(e,t){var n=e.children,a=p(i.useState(!0),2),d=a[0],D=a[1];i.useEffect((function(){D("www.gsmlg.cn"===window.location.hostname)}),[]);var U=(0,h.sV)(),M=p(i.useState({color:"transperant"}),2),S=M[0],P=M[1];i.useEffect((function(){if(U){var e=function(){switch(U.connectionState()){case"connecting":P({color:"#ff0"});break;case"open":P({color:"#0f0"});break;case"closing":P({color:"#0ff"});break;default:P({color:"#f00"})}};e();var t=[U.onOpen(e),U.onClose(e),U.onError(e),U.onMessage(e)];return function(){U.off(t)}}}),[U]);var E=i.useCallback((function(){Notification.requestPermission()}),[]);return(0,r.jsxs)(g,{ref:t,children:[(0,r.jsx)(s.Z,{position:"static",children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(w,{status:S}),(0,r.jsx)(f.Z,{onClick:E,color:"inherit","aria-label":"Menu",size:"large",children:(0,r.jsx)(v.Z,{})}),(0,r.jsx)(c.Z,{type:"title",color:"inherit",children:j.map((function(e){var t=e.name,n=e.href;return(0,r.jsx)(l.Z,{color:"inherit",children:(0,r.jsx)(m.default,{href:n,children:t})},t)}))})]})}),(0,r.jsx)(y,{children:n}),(0,r.jsx)(b,{style:{marginTop:0},children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("span",{id:"icp-info",css:(0,o.css)(x(),d?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,r.jsx)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})]})})]})};t.Z=i.forwardRef(D)}},function(e){e.O(0,[737,947,232,759,234,774,888,179],(function(){return t=8654,e(e.s=t);var t}));var t=e.O();_N_E=t}]);