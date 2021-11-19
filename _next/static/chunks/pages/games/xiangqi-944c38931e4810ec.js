(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{9173:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/xiangqi",function(){return t(681)}])},681:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7294),o=t(2151),c=t(9008),a=t(6886),s=t(1987),l=t(3321),u=t(2458),f=t(2793),h=t(5915),d=t(6127);function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}var b=(0,o.ZP)(a.ZP)((function(e){e.theme;return{display:"flex",justifyContent:"center",alignItems:"center"}})),v=(0,o.ZP)(s.Z)((function(e){e.theme;return{width:"540px",height:"600px"}})),g=(0,o.ZP)(s.Z)((function(e){e.theme;return{width:"320px",height:"600px",display:"flex",justifyContent:"center",flexDirection:"column"}})),P=(0,o.ZP)(l.Z)((function(e){return{margin:e.theme.spacing(1)}}));n.default=function(e){var n=(0,d.sV)(),t=(0,d.EM)("room:chess"),o=(0,i.useState)({redPieces:[],blackPieces:[]}),s=o[0],l=o[1],Z=(0,i.useState)(h.ChessColor.Red),y=Z[0],C=Z[1],x=(0,i.useCallback)((function(){t&&t.isJoined()&&t.push("start")}),[t]),k=(0,i.useCallback)((function(e){var n=e.redPieces,t=e.blackPieces;l(p({},s,{redPieces:n,blackPieces:t}))}),[s]),w=(0,i.useCallback)((function(e,n){var t=e.color===h.ChessColor.Red?h.ChessColor.Black:h.ChessColor.Red,r=e.color===h.ChessColor.Red?"redPieces":"blackPieces",i=Number(e.id.slice(1)),o=s[r].slice();o[i].position=n,l(p({},s,m({},r,o))),C(t)}),[s]);return(0,i.useEffect)((function(){if(t)return t.isJoined()||t.join(),function(){t.leave(),n.remove(t)}}),[t,n]),(0,i.useEffect)((function(){if(t)return t.on("init_pieces",(function(e){var n=e.pieces,t=e.turn;k({redPieces:n.filter((function(e){return e.color===h.ChessColor.Red})),blackPieces:n.filter((function(e){return e.color===h.ChessColor.Black}))}),C(t)})),t.on("move_chess_remote",(function(e){var n=e.item,t=e.position,r=e.pieces;w(n,t),k(r)})),function(){t.off()}}),[t,s,w,k]),(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:"Xiangqi"}),(0,r.jsx)("meta",{name:"description",content:"Description of Xiangqi"})]}),(0,r.jsx)(a.ZP,{container:!0,children:(0,r.jsxs)(b,{item:!0,xs:12,sm:12,children:[(0,r.jsx)(v,{children:(0,r.jsx)(f.Z,{redPieces:s.redPieces,blackPieces:s.blackPieces,turn:y,kill:function(e){return e.live=!1,e},movePiece:function(e,n){null===t||void 0===t||t.push("move_chess",{item:e,position:n})}})}),(0,r.jsxs)(g,{children:[(0,r.jsxs)(P,{variant:"contained",color:"primary",children:["\u56de\u5408\uff1a ",y]}),(0,r.jsx)(P,{variant:"contained",color:"primary",onClick:x,children:"Start Game"})]})]})})]})}},2458:function(e,n,t){"use strict";var r=t(5944),i=t(7294),o=t(2151),c=t(917),a=t(2293),s=t(155),l=t(3972),u=t(3321),f=t(3946),h=t(326),d=t(1664),m=t(6127);function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(){var e,n,t=(e=["\n              margin: 0 2em;\n              display: ","\n            "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return b=function(){return t},t}var v=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),g=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),P=(0,o.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),Z=(0,o.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),y=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],C=function(e,n){var t=e.children,o=p(i.useState(!0),2),C=o[0],x=o[1];i.useEffect((function(){x("www.gsmlg.cn"===window.location.hostname)}),[]);var k=(0,m.sV)(),w=p(i.useState({color:"transperant"}),2),j=w[0],_=w[1];i.useEffect((function(){if(k){var e=function(){switch(k.connectionState()){case"connecting":_({color:"#ff0"});break;case"open":_({color:"#0f0"});break;case"closing":_({color:"#0ff"});break;default:_({color:"#f00"})}};e();var n=[k.onOpen(e),k.onClose(e),k.onError(e),k.onMessage(e)];return function(){k.off(n)}}}),[k]);var O=i.useCallback((function(){Notification.requestPermission()}),[]);return(0,r.BX)(v,{ref:n,children:[(0,r.tZ)(a.Z,{position:"static",children:(0,r.BX)(s.Z,{children:[(0,r.tZ)(Z,{status:j}),(0,r.tZ)(f.Z,{onClick:O,color:"inherit","aria-label":"Menu",size:"large",children:(0,r.tZ)(h.Z,{})}),(0,r.tZ)(l.Z,{type:"title",color:"inherit",children:y.map((function(e){var n=e.name,t=e.href;return(0,r.tZ)(u.Z,{color:"inherit",children:(0,r.tZ)(d.default,{href:t,children:n})},n)}))})]})}),(0,r.tZ)(g,{children:t}),(0,r.tZ)(P,{style:{marginTop:0},children:(0,r.BX)("div",{className:"container",children:[(0,r.tZ)("span",{id:"icp-info",css:(0,c.iv)(b(),C?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,r.tZ)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=i.forwardRef(C)}},function(e){e.O(0,[947,166,774,888,179],(function(){return n=9173,e(e.s=n);var n}));var n=e.O();_N_E=n}]);