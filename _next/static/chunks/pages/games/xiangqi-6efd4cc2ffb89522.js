(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{9173:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/xiangqi",function(){return r(9210)}])},9210:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _}});var i=r(5893),t=r(7294),o=r(2151),c=r(9008),a=r(6886),s=r(5113),l=r(3321),u=r(2458),f=r(2043),p=r(4321),d=r(4043);var h=(0,r(2917).G)("Piece",{canDrop:function(e,n){var r=n.getItem(),i=e.x,t=e.y,o=e.pieces;return e.canDrop(r,{x:i,y:t},o)},hover:function(e,n,r){n.isOver({shallow:!0}),n.canDrop()},drop:function(e,n,r){if(!n.didDrop()){var i=n.getItem(),t=e.x,o=e.y;return e.movePiece({item:i,position:{x:t,y:o}}),e.kill(),{moved:!0}}}},(function(e,n){return{connectDropTarget:e.dropTarget(),isOver:n.isOver(),isOverCurrent:n.isOver({shallow:!0}),isDropable:n.canDrop(),itemType:n.getItemType()}}))((function(e){var n=e.x,r=e.y,t=e.isDropable,o=e.connectDropTarget,c=e.piece,a=e.children,s=t?c?"red":"green":"transparent";return o((0,i.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:s},children:[(0,i.jsx)("div",{style:{height:"1px",width:[0,8].includes(n)?"50%":"100%",backgroundColor:"black",transform:"translate(".concat(0===n?"30px":0,", 30px)")}}),(0,i.jsx)("div",{style:{height:[0,9].includes(r)||[4,5].includes(r)&&![0,8].includes(n)?"50%":"100%",width:"1px",backgroundColor:"black",transform:"translate(30px, ".concat(0===r||5===r&&![0,8].includes(n)?"30px":0,")")}}),a]}))}));var x,v,y,m,g=(0,r(1921).E)("Piece",{canDrag:function(e){return e.item.color===e.turn},isDragging:function(e,n){return n.getItem().id===e.item.id},beginDrag:function(e,n,r){return e.item},endDrag:function(e,n,r){if(n.didDrop())n.getItem(),n.getDropResult()}},(function(e,n){return{connectDragSource:e.dragSource(),isDragging:n.isDragging()}}))((function(e){var n=e.connectDragSource,r=e.item;e.turn;return n((0,i.jsx)("div",{style:{width:"50px",height:"50px",position:"absolute",left:"50%",top:"50%",marginTop:"-25px",marginLeft:"-25px",fontSize:"30px",textAlign:"center",lineHeight:"50px",border:"1px solid black",borderRadius:"50%",backgroundColor:"white",userSelect:"none",color:r.color},children:r.name}))})),b=function(e){for(var n=e.blackPieces,r=e.redPieces,t=e.movePiece,o=e.turn,c=e.kill,a=e.canDrop,s=r.concat(n),l=function(e){var n=e%9,r=Math.floor(e/9),l=s.filter((function(e){return!0===e.live})),u=l.find((function(e){var i=e.position,t=i.x,o=i.y;return t===n&&o===r})),f=null!=u?(0,i.jsx)(g,{item:u,turn:o}):null;return(0,i.jsx)("div",{style:{width:"60px",height:"60px",position:"relative",backgroundColor:"transparent"},children:(0,i.jsx)(h,{piece:u,x:n,y:r,movePiece:t,pieces:l,kill:function(){u&&c(u)},canDrop:a,children:f})},e)},u=[],f=0;f<90;f+=1)u.push(l(f));return(0,i.jsxs)("div",{style:{width:"540px",height:"600px",display:"flex",flexWrap:"wrap",position:"relative"},children:[u,(0,i.jsx)("div",{style:{position:"absolute",top:"50%",left:"25%",marginTop:"-30px",height:"60px",lineHeight:"60px",fontSize:"24px",userSelect:"none"},children:"\u695a \u6cb3"}),(0,i.jsx)("div",{style:{position:"absolute",top:"50%",right:"25%",marginTop:"-30px",height:"60px",lineHeight:"60px",fontSize:"24px",userSelect:"none"},children:"\u6f22 \u754c"})]})},P=function(e,n){var r=n.position;return e.find((function(e){var n=e.position,i=n.x,t=n.y;return(null===r||void 0===r?void 0:r.x)===i&&(null===r||void 0===r?void 0:r.y)===t}))},k=function(e,n,r){var i=e.position.x,t=e.position.y,o=n.x,c=n.y,a=P(r,{position:n});if(a&&a.color===e.color)return!1;var s=function(e){return!P(r,{position:e})},l=P(r,{color:"red",type:0}),u=P(r,{color:"black",type:0});if(!l||!u)return!1;if(0!==e.type&&l.position.x===u.position.x&&i===l.position.x){for(var f=0,p=l.position.y+1;p<u.position.y;p++)s({x:i,y:p})||f++;if(1===f&&o!==i)return!1}switch(e.type){case 0:if(o<3||o>5)return!1;if("red"===e.color&&c>2)return!1;if("black"===e.color&&c<7)return!1;if("red"===e.color){if(o===u.position.x){for(var d=0,h=l.position.y+1;h<u.position.y;h++)s({x:o,y:h})||d++;if(0===d)return!1}}else if(o===l.position.x){for(var x=0,v=l.position.y+1;v<u.position.y;v++)s({x:o,y:v})||x++;if(0===x)return!1}return o===i&&(c===t+1||c===t-1)||c===t&&(o===i+1||o===i-1);case 1:return!(o<3||o>5)&&(!("red"===e.color&&c>2)&&(!("black"===e.color&&c<7)&&(o===i+1&&(c===t+1||c===t-1)||o===i-1&&(c===t+1||c===t-1))));case 2:return!("red"===e.color&&c>4)&&(!("black"===e.color&&c<5)&&(!(!s({x:i-1,y:t-1})||o!==i-2||c!==t-2)||(!(!s({x:i-1,y:t+1})||o!==i-2||c!==t+2)||(!(!s({x:i+1,y:t-1})||o!==i+2||c!==t-2)||!(!s({x:i+1,y:t+1})||o!==i+2||c!==t+2)))));case 3:return!(!s({x:i-1,y:t})||o!==i-2||c!==t+1&&c!==t-1)||(!(!s({x:i+1,y:t})||o!==i+2||c!==t+1&&c!==t-1)||(!(!s({x:i,y:t-1})||c!==t-2||o!==i+1&&o!==i-1)||!(!s({x:i,y:t+1})||c!==t+2||o!==i+1&&o!==i-1)));case 4:if(i===o){var y=0;if(c>t)for(var m=t+1;m<=c;m++)P(r,{position:{x:i,y:m}})&&y++;else for(var g=t-1;g>=c;g--)P(r,{position:{x:i,y:g}})&&y++;return 0===y||1===y&&a}if(t===c){var b=0;if(o>i)for(var k=i+1;k<=o;k++)P(r,{position:{x:k,y:t}})&&b++;else for(var w=i-1;w>=o;w--)P(r,{position:{x:w,y:t}})&&b++;return 0===b||1===b&&a}return!1;case 5:if(i===o){var j=0;if(c>t)for(var Z=t+1;Z<=c;Z++)P(r,{position:{x:i,y:Z}})&&j++;else for(var C=t-1;C>=c;C--)P(r,{position:{x:i,y:C}})&&j++;return 0===j||2===j&&a}if(t===c){var D=0;if(o>i)for(var S=i+1;S<=o;S++)P(r,{position:{x:S,y:t}})&&D++;else for(var O=i-1;O>=o;O--)P(r,{position:{x:O,y:t}})&&D++;return 0===D||2===D&&a}return!1;case 6:return"red"===e.color?e.position.y>4?n.x===e.position.x&&n.y===e.position.y+1||n.x===e.position.x+1&&n.y===e.position.y||n.x===e.position.x-1&&n.y===e.position.y:n.x===e.position.x&&n.y===e.position.y+1:e.position.y<5?n.x===e.position.x&&n.y===e.position.y-1||n.x===e.position.x+1&&n.y===e.position.y||n.x===e.position.x-1&&n.y===e.position.y:n.x===e.position.x&&n.y===e.position.y-1}return!1},w=function(e){var n=(0,t.useState)(!1),r=n[0],o=n[1];(0,t.useEffect)((function(){var e=!1;"ontouchstart"in window.document.documentElement&&(e=!0),(window.navigator.hasOwnProperty("pointerEnabled")||window.navigator.hasOwnProperty("msPointerEnabled"))&&(e=!0),o(e)}),[]);var c=e.redPieces,a=e.blackPieces,s=e.kill,l=e.movePiece,u=e.turn;return(0,i.jsx)(d.W,{backend:r?p.zr:f.PD,children:(0,i.jsx)(b,{redPieces:c,blackPieces:a,kill:s,movePiece:l,canDrop:k,turn:u})})};(v=x||(x={})).Black="black",v.Red="red",(m=y||(y={}))[m.General=0]="General",m[m.Advisor=1]="Advisor",m[m.Elephant=2]="Elephant",m[m.Horse=3]="Horse",m[m.Chariot=4]="Chariot",m[m.Cannon=5]="Cannon",m[m.Soldier=6]="Soldier";var j=r(6127);function Z(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function C(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){Z(e,n,r[n])}))}return e}var D=(0,o.ZP)(a.ZP)((function(e){e.theme;return{display:"flex",justifyContent:"center",alignItems:"center"}})),S=(0,o.ZP)(s.Z)((function(e){e.theme;return{width:"540px",height:"600px"}})),O=(0,o.ZP)(s.Z)((function(e){e.theme;return{width:"320px",height:"600px",display:"flex",justifyContent:"center",flexDirection:"column"}})),E=(0,o.ZP)(l.Z)((function(e){return{margin:e.theme.spacing(1)}}));var _=function(e){var n=(0,j.sV)(),r=(0,j.EM)("room:chess"),o=(0,t.useState)({redPieces:[],blackPieces:[]}),s=o[0],l=o[1],f=(0,t.useState)(x.Red),p=f[0],d=f[1],h=(0,t.useCallback)((function(){null===r||void 0===r||r.push("start")}),[r]),v=(0,t.useCallback)((function(e){null===r||void 0===r||r.push("move_chess",e)}),[r]),y=(0,t.useCallback)((function(e){var n=e.redPieces,r=e.blackPieces;l(C({},s,{redPieces:n,blackPieces:r}))}),[s]),m=(0,t.useCallback)((function(e,n){var r=e.color===x.Red?x.Black:x.Red,i=e.color===x.Red?"redPieces":"blackPieces",t=Number(e.id.slice(1)),o=s[i].slice();o[t].position=n,l(C({},s,Z({},i,o))),d(r)}),[s]);return(0,t.useEffect)((function(){if(r)return r.on("init_pieces",(function(e){var n=e.pieces,r=e.turn;y({redPieces:n.filter((function(e){return e.color===x.Red})),blackPieces:n.filter((function(e){return e.color===x.Black}))}),d(r)})),r.on("move_chess_remote",(function(e){var n=e.item,r=e.position,i=e.pieces;m(n,r),y(i)})),function(){r.off(),r.leave(),n.remove(r)}}),[r,n,y,m]),(0,i.jsxs)(u.Z,{children:[(0,i.jsxs)(c.default,{children:[(0,i.jsx)("title",{children:"Xiangqi"}),(0,i.jsx)("meta",{name:"description",content:"Description of Xiangqi"})]}),(0,i.jsx)(a.ZP,{container:!0,children:(0,i.jsxs)(D,{item:!0,xs:12,sm:12,children:[(0,i.jsx)(S,{children:(0,i.jsx)(w,{redPieces:s.redPieces,blackPieces:s.blackPieces,turn:p,kill:function(){},movePiece:v})}),(0,i.jsxs)(O,{children:[(0,i.jsxs)(E,{variant:"contained",color:"primary",children:["\u56de\u5408\uff1a ",p]}),(0,i.jsx)(E,{variant:"contained",color:"primary",onClick:h,children:"Start Game"})]})]})})]})}},2458:function(e,n,r){"use strict";var i=r(5944),t=r(7294),o=r(2151),c=r(917),a=r(2293),s=r(155),l=r(5861),u=r(3321),f=r(3946),p=r(326),d=r(1664),h=r(6127);function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],i=!0,t=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(i=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);i=!0);}catch(s){t=!0,o=s}finally{try{i||null==a.return||a.return()}finally{if(t)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(){var e,n,r=(e=["\n              margin: 0 2em;\n              display: ","\n            "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return v=function(){return r},r}var y=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),m=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),g=(0,o.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),b=(0,o.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),P=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],k=function(e,n){var r=e.children,o=x(t.useState(!0),2),k=o[0],w=o[1];t.useEffect((function(){w("www.gsmlg.cn"===window.location.hostname)}),[]);var j=(0,h.sV)(),Z=x(t.useState({color:"transperant"}),2),C=Z[0],D=Z[1];t.useEffect((function(){if(j){var e=function(){switch(j.connectionState()){case"connecting":D({color:"#ff0"});break;case"open":D({color:"#0f0"});break;case"closing":D({color:"#0ff"});break;default:D({color:"#f00"})}};e();var n=[j.onOpen(e),j.onClose(e),j.onError(e),j.onMessage(e)];return function(){j.off(n)}}}),[j]);var S=t.useCallback((function(){Notification.requestPermission()}),[]);return(0,i.BX)(y,{ref:n,children:[(0,i.tZ)(a.Z,{position:"static",children:(0,i.BX)(s.Z,{children:[(0,i.tZ)(b,{status:C}),(0,i.tZ)(f.Z,{onClick:S,color:"inherit","aria-label":"Menu",size:"large",children:(0,i.tZ)(p.Z,{})}),(0,i.tZ)(l.Z,{type:"title",color:"inherit",children:P.map((function(e){var n=e.name,r=e.href;return(0,i.tZ)(u.Z,{color:"inherit",children:(0,i.tZ)(d.default,{href:r,children:n})},n)}))})]})}),(0,i.tZ)(m,{children:r}),(0,i.tZ)(g,{style:{marginTop:0},children:(0,i.BX)("div",{className:"container",children:[(0,i.tZ)("span",{id:"icp-info",css:(0,c.iv)(v(),k?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,i.tZ)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=t.forwardRef(k)}},function(e){e.O(0,[650,153,774,888,179],(function(){return n=9173,e(e.s=n);var n}));var n=e.O();_N_E=n}]);