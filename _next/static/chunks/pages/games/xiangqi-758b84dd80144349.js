(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{9173:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/xiangqi",function(){return r(681)}])},681:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(7294),o=r(2151),c=r(9008),a=r(6886),s=r(1987),l=r(3321),u=r(2458),f=r(2793),h=r(5915),d=r(6127);function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){m(e,n,r[n])}))}return e}var v=(0,o.ZP)(a.ZP)((function(e){e.theme;return{display:"flex",justifyContent:"center",alignItems:"center"}})),b=(0,o.ZP)(s.Z)((function(e){e.theme;return{width:"540px",height:"600px"}})),g=(0,o.ZP)(s.Z)((function(e){e.theme;return{width:"320px",height:"600px",display:"flex",justifyContent:"center",flexDirection:"column"}})),P=(0,o.ZP)(l.Z)((function(e){return{margin:e.theme.spacing(1)}}));n.default=function(e){var n=(0,d.sV)(),r=(0,d.EM)("room:chess"),o=(0,i.useState)({redPieces:[],blackPieces:[]}),s=o[0],l=o[1],Z=(0,i.useState)(h.ChessColor.Red),y=Z[0],x=Z[1],C=(0,i.useCallback)((function(){r&&r.isJoined()&&r.push("start")}),[r]),k=(0,i.useCallback)((function(e){return null===r||void 0===r||r.push("move_chess",e),e}),[r]),w=function(e){var n=e.redPieces,r=e.blackPieces;l(p({},s,{redPieces:n,blackPieces:r}))};return(0,i.useEffect)((function(){if(r)return r.isJoined()||r.join(),r.on("init_pieces",(function(e){var n=e.pieces,r=e.turn;w({redPieces:n.filter((function(e){return e.color===h.ChessColor.Red})),blackPieces:n.filter((function(e){return e.color===h.ChessColor.Black}))}),x(r)})),r.on("move_chess_remote",(function(e){var n=e.item,r=e.position,t=e.pieces;!function(e,n){var r=e.color===h.ChessColor.Red?h.ChessColor.Black:h.ChessColor.Red,t=e.color===h.ChessColor.Red?"redPieces":"blackPieces",i=Number(e.id.slice(1)),o=s[t].slice();o[i].position=n,l(p({},s,m({},t,o))),x(r)}(n,r),w(t)})),function(){r.off(),r.leave(),n.remove(r)}}),[r,n]),(0,t.jsxs)(u.Z,{children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:"Xiangqi"}),(0,t.jsx)("meta",{name:"description",content:"Description of Xiangqi"})]}),(0,t.jsx)(a.ZP,{container:!0,children:(0,t.jsxs)(v,{item:!0,xs:12,sm:12,children:[(0,t.jsx)(b,{children:(0,t.jsx)(f.Z,{redPieces:s.redPieces,blackPieces:s.blackPieces,turn:y,kill:function(e){return e.live=!1,e},movePiece:k})}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(P,{variant:"contained",color:"primary",children:["\u56de\u5408\uff1a ",y]}),(0,t.jsx)(P,{variant:"contained",color:"primary",onClick:C,children:"Start Game"})]})]})})]})}},2458:function(e,n,r){"use strict";var t=r(5944),i=r(7294),o=r(2151),c=r(917),a=r(2293),s=r(155),l=r(3972),u=r(3321),f=r(3946),h=r(326),d=r(1664),m=r(6127);function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(t=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(s){i=!0,o=s}finally{try{t||null==a.return||a.return()}finally{if(i)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(){var e,n,r=(e=["\n              margin: 0 2em;\n              display: ","\n            "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return v=function(){return r},r}var b=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),g=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),P=(0,o.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),Z=(0,o.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),y=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],x=function(e,n){var r=e.children,o=p(i.useState(!0),2),x=o[0],C=o[1];i.useEffect((function(){C("www.gsmlg.cn"===window.location.hostname)}),[]);var k=(0,m.sV)(),w=p(i.useState({color:"transperant"}),2),j=w[0],_=w[1];i.useEffect((function(){if(k){var e=function(){switch(k.connectionState()){case"connecting":_({color:"#ff0"});break;case"open":_({color:"#0f0"});break;case"closing":_({color:"#0ff"});break;default:_({color:"#f00"})}};e();var n=[k.onOpen(e),k.onClose(e),k.onError(e),k.onMessage(e)];return function(){k.off(n)}}}),[k]);var O=i.useCallback((function(){Notification.requestPermission()}),[]);return(0,t.BX)(b,{ref:n,children:[(0,t.tZ)(a.Z,{position:"static",children:(0,t.BX)(s.Z,{children:[(0,t.tZ)(Z,{status:j}),(0,t.tZ)(f.Z,{onClick:O,color:"inherit","aria-label":"Menu",size:"large",children:(0,t.tZ)(h.Z,{})}),(0,t.tZ)(l.Z,{type:"title",color:"inherit",children:y.map((function(e){var n=e.name,r=e.href;return(0,t.tZ)(u.Z,{color:"inherit",children:(0,t.tZ)(d.default,{href:r,children:n})},n)}))})]})}),(0,t.tZ)(g,{children:r}),(0,t.tZ)(P,{style:{marginTop:0},children:(0,t.BX)("div",{className:"container",children:[(0,t.tZ)("span",{id:"icp-info",css:(0,c.iv)(v(),x?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,t.tZ)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=i.forwardRef(x)}},function(e){e.O(0,[947,166,774,888,179],(function(){return n=9173,e(e.s=n);var n}));var n=e.O();_N_E=n}]);