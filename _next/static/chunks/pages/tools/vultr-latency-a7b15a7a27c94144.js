(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{685:function(e,n,t){"use strict";var r=t(5318);n.ZP=void 0;var a=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p(n);if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(t(7294)),i=r(t(9376)),o=r(t(4297)),s=r(t(3537)),u=r(t(961)),c=r(t(5727)),l=r(t(9589)),f=r(t(9540)),d=t(5893);function p(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(p=function(e){return e?t:n})(e)}const h=a.forwardRef((({host:e,...n},t)=>(0,d.jsx)(i.default,{...n,ref:t,children:(0,d.jsxs)(o.default,{children:[(0,d.jsx)(s.default,{avatar:(0,d.jsx)(c.default,{"aria-label":"Recipe",children:e.name[0]}),title:e.name,subheader:e.host}),(0,d.jsx)(f.default,{}),(0,d.jsx)(u.default,{children:(0,d.jsxs)(l.default,{component:"div",children:[(0,d.jsx)("span",{children:"Delay: "}),(0,d.jsxs)("span",{children:[e.delay,"ms"]}),(0,d.jsx)(f.default,{}),(0,d.jsx)("span",{children:"Min Delay: "}),(0,d.jsxs)("span",{children:[e.minDelay,"ms"]}),(0,d.jsx)(f.default,{}),(0,d.jsx)("span",{children:"Max Delay: "}),(0,d.jsxs)("span",{children:[e.maxDelay,"ms"]}),(0,d.jsx)(f.default,{}),(0,d.jsx)("span",{children:"Average Delay: "}),(0,d.jsxs)("span",{children:[e.averageDelay,"ms"]}),(0,d.jsx)(f.default,{}),(0,d.jsx)("span",{children:"Package Lost: "}),(0,d.jsxs)("span",{children:[e.lost,"%"]}),(0,d.jsx)(f.default,{}),(0,d.jsx)("span",{children:"Times: "}),(0,d.jsx)("span",{children:e.times})]})})]})})));h.displayName="NodeCard";var m=h;n.ZP=m},5727:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r.Z},avatarClasses:function(){return a.Z},getAvatarUtilityClass:function(){return a.$}});var r=t(7952),a=t(4801)},4297:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r.Z},cardClasses:function(){return a.Z},getCardUtilityClass:function(){return a.y}});var r=t(2623),a=t(975)},961:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r.Z},cardContentClasses:function(){return a.Z},getCardContentUtilityClass:function(){return a.N}});var r=t(8492),a=t(567)},3537:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r.Z},cardHeaderClasses:function(){return a.Z},getCardHeaderUtilityClass:function(){return a.J}});var r=t(6867),a=t(968)},9540:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r.Z},dividerClasses:function(){return a.Z},getDividerUtilityClass:function(){return a.V}});var r=t(7720),a=t(5097)},9376:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r.Z},paperClasses:function(){return a.Z},getPaperUtilityClass:function(){return a.J}});var r=t(1987),a=t(3160)},9589:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r.Z},typographyClasses:function(){return a.Z},getTypographyUtilityClass:function(){return a.f}});var r=t(3972),a=t(716)},8951:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/vultr-latency",function(){return t(2421)}])},2421:function(e,n,t){"use strict";t.r(n);var r=t(4051),a=t.n(r),i=t(5893),o=t(7294),s=t(2151),u=t(9008),c=t(6886),l=t(2458),f=t(685);function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n,t,r,a,i,o){try{var s=e[i](o),u=s.value}catch(c){return void t(c)}s.done?n(u):Promise.resolve(u).then(r,a)}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}function v(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=[{host:"fra-de-ping.vultr.com",name:"\u6cd5\u5170\u514b\u798f"},{host:"ams-nl-ping.vultr.com",name:"\u963f\u59c6\u65af\u7279\u4e39"},{host:"par-fr-ping.vultr.com",name:"\u5df4\u9ece"},{host:"lon-gb-ping.vultr.com",name:"\u4f26\u6566"},{host:"sgp-ping.vultr.com",name:"\u65b0\u52a0\u5761"},{host:"hnd-jp-ping.vultr.com",name:"\u4e1c\u4eac"},{host:"nj-us-ping.vultr.com",name:"\u65b0\u6cfd\u897f"},{host:"il-us-ping.vultr.com",name:"\u829d\u52a0\u54e5"},{host:"ga-us-ping.vultr.com",name:"\u4e9a\u7279\u5170\u5927"},{host:"wa-us-ping.vultr.com",name:"\u897f\u96c5\u56fe"},{host:"fl-us-ping.vultr.com",name:"\u8fc8\u963f\u5bc6"},{host:"tx-us-ping.vultr.com",name:"\u8fbe\u62c9\u65af"},{host:"sjo-ca-us-ping.vultr.com",name:"\u7845\u8c37"},{host:"lax-ca-us-ping.vultr.com",name:"\u6d1b\u6749\u77f6"},{host:"syd-au-ping.vultr.com",name:"\u6089\u5c3c"}].map((function(e){var n=e.name,t=e.host;return{id:t.replace("-ping.vultr.com",""),ping:[],pending:!1,name:n,host:t,times:0,lost:0,delay:-1,minDelay:-1,maxDelay:-1,averageDelay:-1}})),g=(0,s.ZP)(c.ZP)((function(e){return{padding:e.theme.spacing(3)}}));n.default=function(){var e=(0,o.useState)(y),n=e[0],t=e[1];return(0,o.useEffect)((function(){var e=!1,r=function(){var r,i=(r=a().mark((function r(){var i,o,s,u,c,l,f,d,p,h,g,x,j;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=!0,o=!1,s=void 0,r.prev=2,u=y[Symbol.iterator]();case 4:if(i=(c=u.next()).done){r.next=30;break}if(l=c.value,!e){r.next=8;break}return r.abrupt("break",46);case 8:return f=l.host,d=l.id,r.prev=10,h=new Request("//".concat(f),{method:"HEAD"}),g=Date.now(),r.next=15,fetch(h);case 15:x=Date.now()-g,p=n.reduce((function(e,n){return d===n.id&&(n.pending=!1,n.ping.push(x)),e.concat(n)}),[]),r.next=22;break;case 19:r.prev=19,r.t0=r.catch(10),p=n.reduce((function(e,n){return d===n.id&&(n.pending=!1,n.ping.push(NaN)),e.concat(n)}),[]);case 22:return(j=p.map((function(e){var n,t,r=e.ping,a=r[r.length-1],i=r.filter((function(e){return!Number.isNaN(e)})),o=i.reduce((function(e,n){return e+n}),0)/i.length;return m({},e,{delay:null==a?NaN:a,lost:((r.length-i.length)/r.length*100).toFixed(),times:r.length,minDelay:(n=Math).min.apply(n,v(i)),maxDelay:(t=Math).max.apply(t,v(i)),averageDelay:Number.isNaN(o)?NaN:Math.round(o)})}))).sort((function(e,n){var t=e.averageDelay,r=n.averageDelay;return Number.isNaN(t)?1:t===r?0:t>r?1:-1})),t(j),r.next=27,new Promise((function(e,n){setTimeout(e,1e3)}));case 27:i=!0,r.next=4;break;case 30:r.next=36;break;case 32:r.prev=32,r.t1=r.catch(2),o=!0,s=r.t1;case 36:r.prev=36,r.prev=37,i||null==u.return||u.return();case 39:if(r.prev=39,!o){r.next=42;break}throw s;case 42:return r.finish(39);case 43:return r.finish(36);case 44:r.next=0;break;case 46:case"end":return r.stop()}}),r,null,[[2,32,36,44],[10,19],[37,,39,43]])})),function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(e){p(i,t,a,o,s,"next",e)}function s(e){p(i,t,a,o,s,"throw",e)}o(void 0)}))});return function(){return i.apply(this,arguments)}}();return r(),function(){e=!0}}),[]),(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(u.default,{children:[(0,i.jsx)("title",{children:"VultrNetworks"}),(0,i.jsx)("meta",{name:"description",content:"Description of VultrNetworks"})]}),(0,i.jsx)(g,{container:!0,justifyContent:"center",spacing:6,children:(0,i.jsx)(c.ZP,{item:!0,md:11,sm:2,children:(0,i.jsx)(c.ZP,{container:!0,spacing:6,justifyContent:"center",children:n.map((function(e){return(0,i.jsx)(c.ZP,{item:!0,md:3,sm:4,children:(0,i.jsx)(f.ZP,{host:e})},e.host)}))})})})]})}},2458:function(e,n,t){"use strict";var r=t(5944),a=t(7294),i=t(2151),o=t(917),s=t(2293),u=t(155),c=t(3972),l=t(3321),f=t(3946),d=t(326),p=t(4353),h=t(1664),m=t(6127),v=t(4209);function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(u){s=!0,a=u}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(){var e,n,t=(e=["\n              margin: 0 2em;\n              display: ","\n            "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return x=function(){return t},t}var j=(0,i.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),b=(0,i.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),w=(0,i.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),C=(0,i.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),Z=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],P=function(e,n){var t=e.children,i=g(a.useState(!0),2),y=i[0],P=i[1];a.useEffect((function(){P("www.gsmlg.cn"===window.location.hostname)}),[]);var k=(0,m.sV)(),N=g(a.useState({color:"transperant"}),2),O=N[0],D=N[1],S=(0,v.p3)(),A=(0,v.dU)();a.useEffect((function(){if(S(),k){var e=function(){switch(k.connectionState()){case"connecting":D({color:"#ff0"});break;case"open":D({color:"#0f0"});break;case"closing":D({color:"#0ff"});break;default:D({color:"#f00"})}};e();var n=[k.onOpen(e),k.onClose(e),k.onError(e),k.onMessage(e)];return function(){k.off(n)}}}),[k]);var M=a.useCallback((function(){Notification.requestPermission()}),[]);return(0,r.jsxs)(j,{ref:n,children:[(0,r.jsx)(s.Z,{position:"static",children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(C,{status:O}),(0,r.jsx)(f.Z,{onClick:M,color:"inherit","aria-label":"Menu",size:"large",children:(0,r.jsx)(p.Z,{badgeContent:A,children:(0,r.jsx)(d.Z,{})})}),(0,r.jsx)(c.Z,{type:"title",color:"inherit",children:Z.map((function(e){var n=e.name,t=e.href;return(0,r.jsx)(l.Z,{color:"inherit",children:(0,r.jsx)(h.default,{href:t,children:n})},n)}))})]})}),(0,r.jsx)(b,{children:t}),(0,r.jsx)(w,{style:{marginTop:0},children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("span",{id:"icp-info",css:(0,o.css)(x(),y?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,r.jsx)("span",{children:"Copyright \xa9 2017-2022 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=a.forwardRef(P)}},function(e){e.O(0,[912,821,774,888,179],(function(){return n=8951,e(e.s=n);var n}));var n=e.O();_N_E=n}]);