(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{9806:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[slug]",function(){return r(6982)}])},6982:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return m}});var t=r(5893),i=r(2151),o=r(9008),c=r(1987),a=r(3972),l=r(7720),s=r(6357),u=r(8125),f=r(8659),h=r(2458),d=(r(6491),(0,i.ZP)(c.Z)((function(e){var n=e.theme;return{flex:1,padding:n.spacing(3),margin:n.spacing(3)}})));var m=!0;n.default=function(e){var n=e.blog;return(0,t.jsxs)(h.Z,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{children:n&&n.title}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)(d,{elevation:4,children:[(0,t.jsxs)("header",{children:[(0,t.jsx)(a.Z,{component:"h1",children:n.title}),(0,t.jsxs)(a.Z,{component:"div",children:["Author:",n.author]}),(0,t.jsxs)(a.Z,{component:"div",children:["Created At:",n.date]})]}),(0,t.jsx)(l.Z,{}),(0,t.jsx)(a.Z,{className:"blog-content",component:"section",children:(0,t.jsx)(s.D,{remarkPlugins:[u.Z],rehypePlugins:[[f.Z,{ignoreMissing:!0}]],children:n.content})})]})]})}},2458:function(e,n,r){"use strict";var t=r(5944),i=r(7294),o=r(2151),c=r(917),a=r(2293),l=r(155),s=r(3972),u=r(3321),f=r(3946),h=r(326),d=r(1664),m=r(6127);function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(t=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(l){i=!0,o=l}finally{try{t||null==a.return||a.return()}finally{if(i)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(){var e,n,r=(e=["\n              margin: 0 2em;\n              display: ","\n            "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return g=function(){return r},r}var Z=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),v=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),b=(0,o.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),x=(0,o.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),w=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],y=function(e,n){var r=e.children,o=p(i.useState(!0),2),y=o[0],j=o[1];i.useEffect((function(){j("www.gsmlg.cn"===window.location.hostname)}),[]);var _=(0,m.sV)(),k=p(i.useState({color:"transperant"}),2),P=k[0],C=k[1];i.useEffect((function(){if(_){var e=function(){switch(_.connectionState()){case"connecting":C({color:"#ff0"});break;case"open":C({color:"#0f0"});break;case"closing":C({color:"#0ff"});break;default:C({color:"#f00"})}};e();var n=[_.onOpen(e),_.onClose(e),_.onError(e),_.onMessage(e)];return function(){_.off(n)}}}),[_]);var E=i.useCallback((function(){Notification.requestPermission()}),[]);return(0,t.BX)(Z,{ref:n,children:[(0,t.tZ)(a.Z,{position:"static",children:(0,t.BX)(l.Z,{children:[(0,t.tZ)(x,{status:P}),(0,t.tZ)(f.Z,{onClick:E,color:"inherit","aria-label":"Menu",size:"large",children:(0,t.tZ)(h.Z,{})}),(0,t.tZ)(s.Z,{type:"title",color:"inherit",children:w.map((function(e){var n=e.name,r=e.href;return(0,t.tZ)(u.Z,{color:"inherit",children:(0,t.tZ)(d.default,{href:r,children:n})},n)}))})]})}),(0,t.tZ)(v,{children:r}),(0,t.tZ)(b,{style:{marginTop:0},children:(0,t.BX)("div",{className:"container",children:[(0,t.tZ)("span",{id:"icp-info",css:(0,c.iv)(g(),y?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,t.tZ)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=i.forwardRef(y)}},function(e){e.O(0,[947,721,774,888,179],(function(){return n=9806,e(e.s=n);var n}));var n=e.O();_N_E=n}]);