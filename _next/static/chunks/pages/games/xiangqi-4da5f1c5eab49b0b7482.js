(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{9787:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return P}});var r=n(5893),t=n(7294),o=n(1120),s=n(9008),a=n(1749),c=n(9895),l=n(282),u=n(3749),p=n(7865),x=n(2001),f=n(1365);var d=(0,n(4387).G)("Piece",{canDrop:function(e,i){var n=i.getItem(),r=e.x,t=e.y,o=e.pieces;return e.canDrop(n,{x:r,y:t},o)},hover:function(e,i,n){i.isOver({shallow:!0}),i.canDrop()},drop:function(e,i,n){if(!i.didDrop()){var r=i.getItem(),t=e.x,o=e.y;return e.movePiece({item:r,position:{x:t,y:o}}),e.kill(),{moved:!0}}}},(function(e,i){return{connectDropTarget:e.dropTarget(),isOver:i.isOver(),isOverCurrent:i.isOver({shallow:!0}),isDropable:i.canDrop(),itemType:i.getItemType()}}))((function(e){var i=e.x,n=e.y,t=e.isDropable,o=e.connectDropTarget,s=e.piece,a=e.children,c=t?s?"red":"green":"transparent";return o((0,r.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:c},children:[(0,r.jsx)("div",{style:{height:"1px",width:[0,8].includes(i)?"50%":"100%",backgroundColor:"black",transform:"translate(".concat(0===i?"30px":0,", 30px)")}}),(0,r.jsx)("div",{style:{height:[0,9].includes(n)||[4,5].includes(n)&&![0,8].includes(i)?"50%":"100%",width:"1px",backgroundColor:"black",transform:"translate(30px, ".concat(0===n||5===n&&![0,8].includes(i)?"30px":0,")")}}),a]}))}));var h,y,g=(0,n(6436).E)("Piece",{canDrag:function(e){return e.item.color===e.turn},isDragging:function(e,i){return i.getItem().id===e.item.id},beginDrag:function(e,i,n){return e.item},endDrag:function(e,i,n){if(i.didDrop())i.getItem(),i.getDropResult()}},(function(e,i){return{connectDragSource:e.dragSource(),isDragging:i.isDragging()}}))((function(e){var i=e.connectDragSource,n=e.item;e.turn;return i((0,r.jsx)("div",{style:{width:"50px",height:"50px",position:"absolute",left:"50%",top:"50%",marginTop:"-25px",marginLeft:"-25px",fontSize:"30px",textAlign:"center",lineHeight:"50px",border:"1px solid black",borderRadius:"50%",backgroundColor:"white",userSelect:"none",color:n.color},children:n.name}))})),m=function(e){for(var i=e.blackPieces,n=e.redPieces,t=e.movePiece,o=e.turn,s=e.kill,a=e.canDrop,c=n.concat(i),l=function(e){var i=e%9,n=Math.floor(e/9),l=c.filter((function(e){return!0===e.live})),u=l.find((function(e){var r=e.position,t=r.x,o=r.y;return t===i&&o===n})),p=null!=u?(0,r.jsx)(g,{item:u,turn:o}):null;return(0,r.jsx)("div",{style:{width:"60px",height:"60px",position:"relative",backgroundColor:"transparent"},children:(0,r.jsx)(d,{piece:u,x:i,y:n,movePiece:t,pieces:l,kill:function(){u&&s(u)},canDrop:a,children:p})},e)},u=[],p=0;p<90;p+=1)u.push(l(p));return(0,r.jsxs)("div",{style:{width:"540px",height:"600px",display:"flex",flexWrap:"wrap",position:"relative"},children:[u,(0,r.jsx)("div",{style:{position:"absolute",top:"50%",left:"25%",marginTop:"-30px",height:"60px",lineHeight:"60px",fontSize:"24px",userSelect:"none"},children:"\u695a \u6cb3"}),(0,r.jsx)("div",{style:{position:"absolute",top:"50%",right:"25%",marginTop:"-30px",height:"60px",lineHeight:"60px",fontSize:"24px",userSelect:"none"},children:"\u6f22 \u754c"})]})},v=function(e,i){var n=i.position;return e.find((function(e){var i=e.position,r=i.x,t=i.y;return n.x===r&&n.y===t}))},b=function(e,i,n){var r=e.position.x,t=e.position.y,o=i.x,s=i.y,a=v(n,{position:i});if(a&&a.color===e.color)return!1;var c=function(e){return!v(n,{position:e})},l=v(n,{color:"red",type:0}),u=v(n,{color:"black",type:0});if(!l||!u)return!1;if(0!==e.type&&l.position.x===u.position.x&&r===l.position.x){for(var p=0,x=l.position.y+1;x<u.position.y;x++)c({x:r,y:x})||p++;if(1===p&&o!==r)return!1}switch(e.type){case 0:if(o<3||o>5)return!1;if("red"===e.color&&s>2)return!1;if("black"===e.color&&s<7)return!1;if("red"===e.color){if(o===u.position.x){for(var f=0,d=l.position.y+1;d<u.position.y;d++)c({x:o,y:d})||f++;if(0===f)return!1}}else if(o===l.position.x){for(var h=0,y=l.position.y+1;y<u.position.y;y++)c({x:o,y:y})||h++;if(0===h)return!1}return o===r&&(s===t+1||s===t-1)||s===t&&(o===r+1||o===r-1);case 1:return!(o<3||o>5)&&(!("red"===e.color&&s>2)&&(!("black"===e.color&&s<7)&&(o===r+1&&(s===t+1||s===t-1)||o===r-1&&(s===t+1||s===t-1))));case 2:return!("red"===e.color&&s>4)&&(!("black"===e.color&&s<5)&&(!(!c({x:r-1,y:t-1})||o!==r-2||s!==t-2)||(!(!c({x:r-1,y:t+1})||o!==r-2||s!==t+2)||(!(!c({x:r+1,y:t-1})||o!==r+2||s!==t-2)||!(!c({x:r+1,y:t+1})||o!==r+2||s!==t+2)))));case 3:return!(!c({x:r-1,y:t})||o!==r-2||s!==t+1&&s!==t-1)||(!(!c({x:r+1,y:t})||o!==r+2||s!==t+1&&s!==t-1)||(!(!c({x:r,y:t-1})||s!==t-2||o!==r+1&&o!==r-1)||!(!c({x:r,y:t+1})||s!==t+2||o!==r+1&&o!==r-1)));case 4:if(r===o){var g=0;if(s>t)for(var m=t+1;m<=s;m++)v(n,{position:{x:r,y:m}})&&g++;else for(var b=t-1;b>=s;b--)v(n,{position:{x:r,y:b}})&&g++;return 0===g||1===g&&a}if(t===s){var j=0;if(o>r)for(var k=r+1;k<=o;k++)v(n,{position:{x:k,y:t}})&&j++;else for(var P=r-1;P>=o;P--)v(n,{position:{x:P,y:t}})&&j++;return 0===j||1===j&&a}return!1;case 5:if(r===o){var w=0;if(s>t)for(var D=t+1;D<=s;D++)v(n,{position:{x:r,y:D}})&&w++;else for(var C=t-1;C>=s;C--)v(n,{position:{x:r,y:C}})&&w++;return 0===w||2===w&&a}if(t===s){var N=0;if(o>r)for(var Z=r+1;Z<=o;Z++)v(n,{position:{x:Z,y:t}})&&N++;else for(var S=r-1;S>=o;S--)v(n,{position:{x:S,y:t}})&&N++;return 0===N||2===N&&a}return!1;case 6:return"red"===e.color?e.position.y>4?i.x===e.position.x&&i.y===e.position.y+1||i.x===e.position.x+1&&i.y===e.position.y||i.x===e.position.x-1&&i.y===e.position.y:i.x===e.position.x&&i.y===e.position.y+1:e.position.y<5?i.x===e.position.x&&i.y===e.position.y-1||i.x===e.position.x+1&&i.y===e.position.y||i.x===e.position.x-1&&i.y===e.position.y:i.x===e.position.x&&i.y===e.position.y-1}return!1},j=function(e){var i=(0,t.useState)(!1),n=i[0],o=i[1];(0,t.useEffect)((function(){var e=!1;"ontouchstart"in window.document.documentElement&&(e=!0),window.navigator.msPointerEnabled&&(e=!0),o(e)}),[]);var s=e.redPieces,a=e.blackPieces,c=e.kill,l=e.movePiece,u=e.turn;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.W,{backend:n?x.zr:p.PD,children:(0,r.jsx)(m,{redPieces:s,blackPieces:a,kill:c,movePiece:l,canDrop:b,turn:u})})})};!function(e){e.Black="black",e.Red="red"}(h||(h={})),function(e){e[e.General=0]="General",e[e.Advisor=1]="Advisor",e[e.Elephant=2]="Elephant",e[e.Horse=3]="Horse",e[e.Chariot=4]="Chariot",e[e.Cannon=5]="Cannon",e[e.Soldier=6]="Soldier"}(y||(y={}));var k=(0,o.Z)((function(e){return{grid:{display:"flex",justifyContent:"center"},boardPaper:{width:"540px",height:"600px"},paper:{width:"320px",height:"600px",display:"flex",justifyContent:"center",flexDirection:"column"},button:{margin:e.spacing(1)}}}));var P=function(e){var i=k(),n={turn:h.Red,redPieces:[],blackPieces:[]};return(0,t.useEffect)((function(){return function(){}}),[]),(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Xiangqi"}),(0,r.jsx)("meta",{name:"description",content:"Description of Xiangqi"})]}),(0,r.jsx)(a.Z,{container:!0,children:(0,r.jsxs)(a.Z,{item:!0,xs:12,sm:12,className:i.grid,children:[(0,r.jsx)(c.Z,{className:i.boardPaper,children:(0,r.jsx)(j,{redPieces:n.redPieces,blackPieces:n.blackPieces,turn:n.turn,kill:function(){},movePiece:function(){}})}),(0,r.jsxs)(c.Z,{className:i.paper,children:[(0,r.jsxs)(l.Z,{variant:"contained",color:"primary",className:i.button,children:["\u56de\u5408\uff1a ",n.turn]}),(0,r.jsx)(l.Z,{variant:"contained",color:"primary",className:i.button,onClick:function(){},children:"Start Game"})]})]})})]})}},3749:function(e,i,n){"use strict";var r=n(5893),t=n(7294),o=n(8961),s=n(5258),a=n(8358),c=n(2318),l=n(282),u=n(7812),p=n(8884),x=n(1664),f=(0,o.Z)((function(e){return{root:{display:"flex",minHeight:"100vh",width:"100vw",flexDirection:"column",flex:"1 1 auto"},flex:{display:"flex",flex:1},footer:{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:e.palette.getContrastText(e.palette.primary.main),backgroundColor:e.palette.primary.main},menuButton:{marginLeft:-12,marginRight:20},raised:{},icp:{fontWeight:"bold",marginRight:20,marginLeft:20},copyright:{}}})),d=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],h=function(e,i){var n=e.children,o=f(),h=t.useCallback((function(){Notification.requestPermission()}),[]);return(0,r.jsxs)("section",{className:o.root,ref:i,children:[(0,r.jsx)(s.Z,{position:"static",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(u.Z,{onClick:h,className:o.menuButton,color:"inherit","aria-label":"Menu",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(c.Z,{type:"title",color:"inherit",className:o.flex,children:d.map((function(e){var i=e.name,n=e.href;return(0,r.jsx)(l.Z,{color:"inherit",children:(0,r.jsx)(x.default,{href:n,children:i})},i)}))})]})}),(0,r.jsx)("section",{className:o.flex,children:n}),(0,r.jsx)("footer",{className:o.footer,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("span",{className:o.copyright,children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})})})]})};i.Z=t.forwardRef(h)},9173:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/xiangqi",function(){return n(9787)}])}},function(e){e.O(0,[562,15,774,888,179],(function(){return i=9173,e(e.s=i);var i}));var i=e.O();_N_E=i}]);