(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{1120:function(e,n,t){"use strict";var r=t(7462),a=t(8961),o=t(9700);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.Z)(e,(0,r.Z)({defaultTheme:o.Z},n))}},4938:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r=t(5893),a=t(809),o=t.n(a);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t(2809);function u(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,a)}var l=t(7294),f=t(1120),m=t(9008),h=t(1749),p=t(3749),d=t(9895),v=t(8463),g=t(4697),y=t(9912),x=t(3901),j=t(2318),b=t(5517),w=(0,f.Z)((function(e){return{card:{},avatar:{}}}));var N=function(e){var n=e.host,t=w();return(0,r.jsx)(d.Z,{children:(0,r.jsxs)(v.Z,{className:t.card,children:[(0,r.jsx)(g.Z,{avatar:(0,r.jsx)(x.Z,{"aria-label":"Recipe",className:t.avatar,children:n.name[0]}),title:n.name,subheader:n.host}),(0,r.jsx)(b.Z,{}),(0,r.jsx)(y.Z,{children:(0,r.jsxs)(j.Z,{component:"div",children:[(0,r.jsx)("span",{children:"Delay: "}),(0,r.jsxs)("span",{children:[n.delay,"ms"]}),(0,r.jsx)(b.Z,{}),(0,r.jsx)("span",{children:"Min Delay: "}),(0,r.jsxs)("span",{children:[n.minDelay,"ms"]}),(0,r.jsx)(b.Z,{}),(0,r.jsx)("span",{children:"Max Delay: "}),(0,r.jsxs)("span",{children:[n.maxDelay,"ms"]}),(0,r.jsx)(b.Z,{}),(0,r.jsx)("span",{children:"Average Delay: "}),(0,r.jsxs)("span",{children:[n.averageDelay,"ms"]}),(0,r.jsx)(b.Z,{}),(0,r.jsx)("span",{children:"Package Lost: "}),(0,r.jsxs)("span",{children:[n.lost,"%"]}),(0,r.jsx)(b.Z,{}),(0,r.jsx)("span",{children:"Times: "}),(0,r.jsx)("span",{children:n.times})]})})]})})},Z=[{host:"fra-de-ping.vultr.com",name:"\u6cd5\u5170\u514b\u798f"},{host:"ams-nl-ping.vultr.com",name:"\u963f\u59c6\u65af\u7279\u4e39"},{host:"par-fr-ping.vultr.com",name:"\u5df4\u9ece"},{host:"lon-gb-ping.vultr.com",name:"\u4f26\u6566"},{host:"sgp-ping.vultr.com",name:"\u65b0\u52a0\u5761"},{host:"hnd-jp-ping.vultr.com",name:"\u4e1c\u4eac"},{host:"nj-us-ping.vultr.com",name:"\u65b0\u6cfd\u897f"},{host:"il-us-ping.vultr.com",name:"\u829d\u52a0\u54e5"},{host:"ga-us-ping.vultr.com",name:"\u4e9a\u7279\u5170\u5927"},{host:"wa-us-ping.vultr.com",name:"\u897f\u96c5\u56fe"},{host:"fl-us-ping.vultr.com",name:"\u8fc8\u963f\u5bc6"},{host:"tx-us-ping.vultr.com",name:"\u8fbe\u62c9\u65af"},{host:"sjo-ca-us-ping.vultr.com",name:"\u7845\u8c37"},{host:"lax-ca-us-ping.vultr.com",name:"\u6d1b\u6749\u77f6"},{host:"syd-au-ping.vultr.com",name:"\u6089\u5c3c"}].map((function(e){var n=e.name,t=e.host;return{id:t.replace("-ping.vultr.com",""),ping:[],pending:!1,name:n,host:t}}));function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var A=(0,f.Z)((function(e){return{root:{marginTop:"1em"}}}));var S=function(e){var n=A(),t=(0,l.useState)(Z),a=t[0],i=t[1];return(0,l.useEffect)((function(){var e;return function(){var n,t=(n=o().mark((function n(){var t,r,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=k(Z),n.prev=2,c=o().mark((function n(){var t,c,u,l,f,m,h,p;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.value,c=t.host,u=t.id,l=void 0,n.prev=3,f=new Request("//".concat(c),{method:"HEAD"}),m=Date.now(),n.next=8,fetch(f);case 8:h=Date.now()-m,l=a.reduce((function(e,n){return u===n.id&&(n.pending=!1,n.ping.push(h)),e.concat(n)}),[]),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(3),l=a.reduce((function(e,n){return u===n.id&&(n.pending=!1,n.ping.push(NaN)),e.concat(n)}),[]);case 15:return(p=l.map((function(e){var n=e.ping,t=n[n.length-1],r=n.filter((function(e){return!Number.isNaN(e)})),a=r.reduce((function(e,n){return e+n}),0)/r.length;return D(D({},e),{},{delay:null==t?NaN:t,lost:((n.length-r.length)/n.length*100).toFixed(),times:n.length,minDelay:Math.min.apply(Math,s(r)),maxDelay:Math.max.apply(Math,s(r)),averageDelay:Number.isNaN(a)?NaN:Math.round(a)})}))).sort((function(e,n){var t=e.averageDelay,r=n.averageDelay;return Number.isNaN(t)?1:t===r?0:t>r?1:-1})),i(p),n.next=20,new Promise((function(n,t){e=t,setTimeout(n,1e3)}));case 20:case"end":return n.stop()}}),n,null,[[3,12]])})),t.s();case 5:if((r=t.n()).done){n.next=9;break}return n.delegateYield(c(),"t0",7);case 7:n.next=5;break;case 9:n.next=14;break;case 11:n.prev=11,n.t1=n.catch(2),t.e(n.t1);case 14:return n.prev=14,t.f(),n.finish(14);case 17:n.next=0;break;case 19:case"end":return n.stop()}}),n,null,[[2,11,14,17]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(e){u(o,r,a,i,s,"next",e)}function s(e){u(o,r,a,i,s,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}()(),function(){return e&&e()}}),[]),(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)(m.default,{children:[(0,r.jsx)("title",{children:"VultrNetworks"}),(0,r.jsx)("meta",{name:"description",content:"Description of VultrNetworks"})]}),(0,r.jsx)(h.Z,{container:!0,justify:"center",spacing:6,className:n.root,children:(0,r.jsx)(h.Z,{item:!0,md:11,sm:2,children:(0,r.jsx)(h.Z,{container:!0,spacing:6,justify:"center",children:a.map((function(e){return(0,r.jsx)(h.Z,{item:!0,md:3,sm:4,children:(0,r.jsx)(N,{host:e})},e.host)}))})})})]})}},3749:function(e,n,t){"use strict";var r=t(5893),a=t(7294),o=t(8961),i=t(5258),s=t(8358),c=t(2318),u=t(282),l=t(7812),f=t(8884),m=t(1664),h=(0,o.Z)((function(e){return{root:{display:"flex",minHeight:"100vh",width:"100vw",flexDirection:"column",flex:"1 1 auto"},flex:{display:"flex",flex:1},footer:{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:e.palette.getContrastText(e.palette.primary.main),backgroundColor:e.palette.primary.main},menuButton:{marginLeft:-12,marginRight:20},raised:{},icp:{fontWeight:"bold",marginRight:20,marginLeft:20},copyright:{}}})),p=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],d=function(e,n){var t=e.children,o=h(),d=a.useCallback((function(){Notification.requestPermission()}),[]);return(0,r.jsxs)("section",{className:o.root,ref:n,children:[(0,r.jsx)(i.Z,{position:"static",children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{onClick:d,className:o.menuButton,color:"inherit","aria-label":"Menu",children:(0,r.jsx)(f.Z,{})}),(0,r.jsx)(c.Z,{type:"title",color:"inherit",className:o.flex,children:p.map((function(e){var n=e.name,t=e.href;return(0,r.jsx)(u.Z,{color:"inherit",children:(0,r.jsx)(m.default,{href:t,children:n})},n)}))})]})}),(0,r.jsx)("section",{className:o.flex,children:t}),(0,r.jsx)("footer",{className:o.footer,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("span",{className:o.copyright,children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})})})]})};n.Z=a.forwardRef(d)},8951:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/vultr-latency",function(){return t(4938)}])}},function(e){e.O(0,[562,121,774,888,179],(function(){return n=8951,e(e.s=n);var n}));var n=e.O();_N_E=n}]);