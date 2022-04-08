(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{9173:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/xiangqi",function(){return r(681)}])},681:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(7294),o=r(2151),c=r(9008),s=r(6886),a=r(1987),l=r(3321),u=r(2458),f=r(2793),h=r(5915),d=r(6127),m=(0,o.ZP)(s.ZP)((function(e){e.theme;return{display:"flex",justifyContent:"center",alignItems:"center"}})),p=(0,o.ZP)(a.Z)((function(e){e.theme;return{width:"540px",height:"600px"}})),x=(0,o.ZP)(a.Z)((function(e){e.theme;return{width:"320px",height:"600px",display:"flex",justifyContent:"center",flexDirection:"column"}})),v=(0,o.ZP)(l.Z)((function(e){return{margin:e.theme.spacing(1)}}));n.default=function(e){var n=(0,d.sV)(),r=(0,d.EM)("room:chess"),o=(0,i.useState)({redPieces:[],blackPieces:[]}),a=o[0],l=o[1],b=(0,i.useState)(h.ChessColor.Red),g=b[0],j=b[1],C=(0,i.useCallback)((function(){r&&r.isJoined()&&r.push("start")}),[r]),y=(0,i.useCallback)((function(e){var n=e.redPieces,r=e.blackPieces;l({redPieces:n,blackPieces:r})}),[]),P=(0,i.useCallback)((function(e,n){var r=e.color===h.ChessColor.Red?h.ChessColor.Black:h.ChessColor.Red;j(r)}),[]);return(0,i.useEffect)((function(){if(r)return r.isJoined()||r.join(),function(){r.leave(),n.remove(r)}}),[r,n]),(0,i.useEffect)((function(){if(r)return r.on("init_pieces",(function(e){var n=e.pieces,r=e.turn;y({redPieces:n.filter((function(e){return e.color===h.ChessColor.Red})),blackPieces:n.filter((function(e){return e.color===h.ChessColor.Black}))}),j(r)})),r.on("move_chess_remote",(function(e){var n=e.item,r=e.position,t=e.pieces;P(n,r),y({redPieces:t.filter((function(e){return e.color===h.ChessColor.Red})),blackPieces:t.filter((function(e){return e.color===h.ChessColor.Black}))})})),function(){r.off()}}),[r,a,P,y]),(0,t.jsxs)(u.Z,{children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:"Xiangqi"}),(0,t.jsx)("meta",{name:"description",content:"Description of Xiangqi"})]}),(0,t.jsx)(s.ZP,{container:!0,children:(0,t.jsxs)(m,{item:!0,xs:12,sm:12,children:[(0,t.jsx)(p,{children:(0,t.jsx)(f.Z,{redPieces:a.redPieces,blackPieces:a.blackPieces,turn:g,kill:function(e){return e.live=!1,e},movePiece:function(e,n){null===r||void 0===r||r.push("move_chess",{item:e,position:n})}})}),(0,t.jsxs)(x,{children:[(0,t.jsxs)(v,{variant:"contained",color:"primary",children:["\u56de\u5408\uff1a ",g]}),(0,t.jsx)(v,{variant:"contained",color:"primary",onClick:C,children:"Start Game"})]})]})})]})}},2458:function(e,n,r){"use strict";var t=r(5944),i=r(7294),o=r(2151),c=r(917),s=r(2293),a=r(155),l=r(3972),u=r(3321),f=r(3946),h=r(326),d=r(4353),m=r(1664),p=r(6127),x=r(4209);function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);c=!0);}catch(a){s=!0,i=a}finally{try{c||null==r.return||r.return()}finally{if(s)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return v(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(){var e,n,r=(e=["\n              margin: 0 2em;\n              display: ","\n            "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return g=function(){return r},r}var j=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),C=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),y=(0,o.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),P=(0,o.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),k=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],Z=function(e,n){var r=e.children,o=b(i.useState(!0),2),v=o[0],Z=o[1];i.useEffect((function(){Z("www.gsmlg.cn"===window.location.hostname)}),[]);var w=(0,p.sV)(),_=b(i.useState({color:"transperant"}),2),S=_[0],E=_[1],O=(0,x.p3)(),A=(0,x.dU)();i.useEffect((function(){if(O(),w){var e=function(){switch(w.connectionState()){case"connecting":E({color:"#ff0"});break;case"open":E({color:"#0f0"});break;case"closing":E({color:"#0ff"});break;default:E({color:"#f00"})}};e();var n=[w.onOpen(e),w.onClose(e),w.onError(e),w.onMessage(e)];return function(){w.off(n)}}}),[w]);var N=i.useCallback((function(){Notification.requestPermission()}),[]);return(0,t.jsxs)(j,{ref:n,children:[(0,t.jsx)(s.Z,{position:"static",children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(P,{status:S}),(0,t.jsx)(f.Z,{onClick:N,color:"inherit","aria-label":"Menu",size:"large",children:(0,t.jsx)(d.Z,{badgeContent:A,children:(0,t.jsx)(h.Z,{})})}),(0,t.jsx)(l.Z,{type:"title",color:"inherit",children:k.map((function(e){var n=e.name,r=e.href;return(0,t.jsx)(u.Z,{color:"inherit",children:(0,t.jsx)(m.default,{href:r,children:n})},n)}))})]})}),(0,t.jsx)(C,{children:r}),(0,t.jsx)(y,{style:{marginTop:0},children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("span",{id:"icp-info",css:(0,c.css)(g(),v?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,t.jsx)("span",{children:"Copyright \xa9 2017-2022 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=i.forwardRef(Z)}},function(e){e.O(0,[912,166,774,888,179],(function(){return n=9173,e(e.s=n);var n}));var n=e.O();_N_E=n}]);