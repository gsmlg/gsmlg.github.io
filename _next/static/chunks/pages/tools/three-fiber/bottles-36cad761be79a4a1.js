(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{7469:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/three-fiber/bottles",function(){return r(8564)}])},8564:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return C}});var t=r(5944),o=r(917),i=r(7294),s=r(9008),a=r(2458),c=r(5893),l=r(2212),u=r(6135),f=r(897),h=r(2849),p=r(4207),d=r(8626),m=r(4834),x={sphere:new l.MeshStandardMaterial({color:new l.Color("#151515")}),inner:new l.MeshPhysicalMaterial({color:new l.Color("#eF5C00").convertSRGBToLinear(),transparent:!0,side:l.BackSide,transmission:.5,metalness:1,roughness:0}),outer:new l.MeshPhysicalMaterial({color:new l.Color("#5E2C00").convertSRGBToLinear(),transparent:!0,transmission:.7,metalness:1,roughness:0}),cap:new l.MeshStandardMaterial({color:new l.Color("#040404")}),liquid:new l.MeshPhysicalMaterial({color:new l.Color("black"),transparent:!0,transmission:.5})};new l.SphereBufferGeometry(1,32,32);function j(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){j(e,n,r[n])}))}return e}function b(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=new l.MeshPhysicalMaterial({color:"#efefef",transmission:1,roughness:.35,thickness:500,envMapIntensity:4});function w(e){var n=e.glas,r=e.cap,t=(e.children,b(e,["glas","cap","children"])),o=(0,i.useRef)(),s=(0,d.L)("/webgl/draco.glb").nodes,a=(0,i.useState)(!1),l=a[0],u=a[1];return(0,m.j)(l),(0,c.jsx)("group",g({rotation:[Math.PI/2,0,3]},t,{onPointerOver:function(e){return u(!0)},onPointerOut:function(){return u(!1)},children:(0,c.jsxs)("group",{ref:o,children:[(0,c.jsx)("mesh",{castShadow:!0,geometry:s[n].geometry,material:y}),(0,c.jsx)("mesh",{castShadow:!0,geometry:s[r].geometry,material:x.cap,"material-color":"white"})]})}))}function v(e){return(0,c.jsxs)("group",g({},e,{dispose:null,scale:[.1,.1,.1],children:[(0,c.jsx)(w,{position:[140,0,0],glas:"Untitled018",cap:"Untitled018_1"}),(0,c.jsx)(w,{position:[80,0,0],glas:"Untitled078",cap:"Untitled078_1"}),(0,c.jsx)(w,{position:[-2,0,0],glas:"Untitled064",cap:"Untitled064_1"}),(0,c.jsx)(w,{position:[-90,0,0],glas:"Untitled052",cap:"Untitled052_1"}),(0,c.jsx)(w,{position:[-140,0,0],glas:"Untitled072",cap:"Untitled072_1"}),(0,c.jsx)(w,{position:[-180,0,0],glas:"Untitled007",cap:"Untitled007_1"})]}))}function O(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function P(e){return(0,c.jsxs)("mesh",function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){O(e,n,r[n])}))}return e}({castShadow:!0},e,{renderOrder:-2e6,children:[(0,c.jsx)("sphereGeometry",{args:[1,64,64]}),(0,c.jsx)("meshStandardMaterial",{color:"white",roughness:1})]}))}function M(e){var n=e.vec,r=void 0===n?new l.Vector3(0,0,100):n;return(0,u.xQ)((function(e){e.camera.position.lerp(r.set(10*e.mouse.x,0,100),.075),e.camera.fov=l.MathUtils.lerp(e.camera.fov,22,.075),e.camera.updateProjectionMatrix()}))}function S(){var e=(0,i.useRef)();return(0,u.xQ)((function(n){e.current.children[0].position.x=l.MathUtils.lerp(e.current.children[0].position.x,-18-3*n.mouse.x,.02),e.current.children[1].position.x=l.MathUtils.lerp(e.current.children[1].position.x,-10-10*n.mouse.x,.01),e.current.children[2].position.x=l.MathUtils.lerp(e.current.children[2].position.x,18-5*n.mouse.x,.03),e.current.children[3].position.x=l.MathUtils.lerp(e.current.children[3].position.x,10-6*n.mouse.x,.04)})),(0,c.jsxs)("group",{ref:e,children:[(0,c.jsx)(P,{position:[-40,1,10]}),(0,c.jsx)(P,{position:[-20,10,-20],scale:10}),(0,c.jsx)(P,{position:[40,3,-4],scale:3}),(0,c.jsx)(P,{position:[30,.75,10],scale:.75})]})}function k(){return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsxs)(u.Xz,{dpr:[1,1.5],shadows:!0,camera:{position:[0,0,100],fov:22},children:[(0,c.jsx)("fog",{attach:"fog",args:["#f0f0f0",100,150]}),(0,c.jsx)("color",{attach:"background",args:["#f0f0f0"]}),(0,c.jsx)("spotLight",{penumbra:1,angle:1,castShadow:!0,position:[10,60,-5],intensity:8,"shadow-mapSize":[512,512]}),(0,c.jsxs)(i.Suspense,{fallback:null,children:[(0,c.jsxs)("group",{position:[2.5,-12,0],children:[(0,c.jsx)(v,{}),(0,c.jsx)(S,{}),(0,c.jsxs)("mesh",{"rotation-x":-Math.PI/2,position:[0,.01,0],scale:[200,200,200],receiveShadow:!0,renderOrder:1e5,children:[(0,c.jsx)("planeGeometry",{}),(0,c.jsx)("shadowMaterial",{transparent:!0,color:"#251005",opacity:.25})]})]}),(0,c.jsx)("hemisphereLight",{intensity:.2}),(0,c.jsx)("ambientLight",{intensity:.5}),(0,c.jsx)(f.q,{preset:"warehouse"}),(0,c.jsx)(M,{}),(0,c.jsx)(h.x,{position:[0,-2.5,-50],letterSpacing:-.05,font:"/Ki-Medium.ttf",fontSize:30,color:"white","material-toneMapped":!1,"material-fog":!1,anchorX:"center",anchorY:"middle",children:"Poimandres"})]})]}),(0,c.jsx)(p.a,{})]})}function _(){var e,n,r=(e=["\n          flex: 1 1 auto;\n        "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return _=function(){return r},r}var C=function(e){return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:"Three Fiber Bottles"}),(0,t.jsx)("meta",{name:"description",content:"Description of Bottles"})]}),(0,t.jsx)("div",{css:(0,o.css)(_()),children:(0,t.jsx)(k,{})})]})}},2458:function(e,n,r){"use strict";var t=r(5944),o=r(7294),i=r(2151),s=r(917),a=r(2293),c=r(155),l=r(3972),u=r(3321),f=r(3946),h=r(326),p=r(1664),d=r(6127);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(t=(s=a.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(c){o=!0,i=c}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(){var e,n,r=(e=["\n              margin: 0 2em;\n              display: ","\n            "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return x=function(){return r},r}var j=(0,i.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),g=(0,i.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),b=(0,i.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),y=(0,i.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),w=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],v=function(e,n){var r=e.children,i=m(o.useState(!0),2),v=i[0],O=i[1];o.useEffect((function(){O("www.gsmlg.cn"===window.location.hostname)}),[]);var P=(0,d.sV)(),M=m(o.useState({color:"transperant"}),2),S=M[0],k=M[1];o.useEffect((function(){if(P){var e=function(){switch(P.connectionState()){case"connecting":k({color:"#ff0"});break;case"open":k({color:"#0f0"});break;case"closing":k({color:"#0ff"});break;default:k({color:"#f00"})}};e();var n=[P.onOpen(e),P.onClose(e),P.onError(e),P.onMessage(e)];return function(){P.off(n)}}}),[P]);var _=o.useCallback((function(){Notification.requestPermission()}),[]);return(0,t.jsxs)(j,{ref:n,children:[(0,t.jsx)(a.Z,{position:"static",children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(y,{status:S}),(0,t.jsx)(f.Z,{onClick:_,color:"inherit","aria-label":"Menu",size:"large",children:(0,t.jsx)(h.Z,{})}),(0,t.jsx)(l.Z,{type:"title",color:"inherit",children:w.map((function(e){var n=e.name,r=e.href;return(0,t.jsx)(u.Z,{color:"inherit",children:(0,t.jsx)(p.default,{href:r,children:n})},n)}))})]})}),(0,t.jsx)(g,{children:r}),(0,t.jsx)(b,{style:{marginTop:0},children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("span",{id:"icp-info",css:(0,s.css)(x(),v?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,t.jsx)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=o.forwardRef(v)}},function(e){e.O(0,[737,947,135,234,52,774,888,179],(function(){return n=7469,e(e.s=n);var n}));var n=e.O();_N_E=n}]);