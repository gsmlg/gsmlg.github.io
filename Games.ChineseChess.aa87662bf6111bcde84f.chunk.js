(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./app/containers/ChineseChess/index.js":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"init",function(){return ce}),n.d(r,"mount",function(){return ae}),n.d(r,"unmount",function(){return se}),n.d(r,"initChannel",function(){return ue}),n.d(r,"unsetChannel",function(){return pe}),n.d(r,"setPieces",function(){return le}),n.d(r,"movePiece",function(){return fe}),n.d(r,"movePieceRemote",function(){return de}),n.d(r,"kill",function(){return ye}),n.d(r,"changeTurn",function(){return he}),n.d(r,"start",function(){return be});var o,i=n("./node_modules/react/index.js"),c=n.n(i),a=(n("./node_modules/prop-types/index.js"),n("./node_modules/redux/lib/redux.js")),s=n("./node_modules/react-redux/lib/index.js"),u=n("./node_modules/react-helmet/lib/Helmet.js"),p=n.n(u),l=n("./node_modules/reselect/es/index.js"),f=n("./app/utils/injectReducer.js"),d=n("./app/utils/injectSaga.js"),y=n("./node_modules/react-dnd-html5-backend/lib/index.js"),h=n.n(y),b=n("./node_modules/react-dnd-touch-backend/dist/Touch.js"),m=n.n(b),v=n("./node_modules/react-dnd/lib/index.js"),x=n("./node_modules/lodash/lodash.js"),g=n.n(x),j=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,r){var i=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===c)t.children=r;else if(c>1){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),O(t,[{key:"render",value:function(){var e=this.props,t=e.x,n=e.y,r=this.props,o=(r.isOver,r.canDrop),i=r.connectDropTarget,c=r.piece;return i(j("div",{style:{width:"100%",height:"100%",backgroundColor:o?c?"red":"green":"transparent"}},void 0,j("div",{style:{height:"1px",width:[0,8].includes(t)?"50%":"100%",backgroundColor:"black",transform:"translate("+(0===t?"30px":0)+", 30px)"}}),j("div",{style:{height:[0,9].includes(n)||[4,5].includes(n)&&![0,8].includes(t)?"50%":"100%",width:"1px",backgroundColor:"black",transform:"translate(30px, "+(0===n||5==n&&![0,8].includes(t)?"30px":0)+")"}}),this.props.children))}}]),t}();w.displayName="Square";var k=Object(v.DropTarget)("Piece",{canDrop:function(e,t){var n=t.getItem(),r=e.x,o=e.y,i=e.pieces;return e.canDrop(n,{x:r,y:o},i)},hover:function(e,t,n){t.isOver({shallow:!0}),t.canDrop()},drop:function(e,t,n){if(!t.didDrop()){var r=t.getItem(),o=e.x,i=e.y;return e.movePiece(r,{x:o,y:i}),e.kill(),{moved:!0}}}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),isOverCurrent:t.isOver({shallow:!0}),canDrop:t.canDrop(),itemType:t.getItemType()}})(w),P=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===c)n.children=o;else if(c>1){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),S(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.item;return t(P("div",{style:{width:"50px",height:"50px",position:"absolute",left:"50%",top:"50%",marginTop:"-25px",marginLeft:"-25px",fontSize:"30px",textAlign:"center",lineHeight:"50px",border:"1px solid black",borderRadius:"50%",backgroundColor:"white",userSelect:"none",color:n.color}},void 0,n.name))}}]),t}();C.displayName="Piece";var T=Object(v.DragSource)("Piece",{canDrag:function(e){return e.item.color===e.turn},isDragging:function(e,t){return t.getItem().id===e.item.id},beginDrag:function(e,t,n){return e.item},endDrag:function(e,t,n){t.didDrop()&&(t.getItem(),t.getDropResult())}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(C),D=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===c)n.children=o;else if(c>1){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.a.PureComponent),E(t,[{key:"renderSquare",value:function(e){var t=this,n=e%9,r=Math.floor(e/9),o=this.props.movePiece,i=this.props,c=i.blackPieces,a=i.redPieces,s=g.a.filter(a.concat(c),{live:!0}),u=g.a.find(s,{position:{x:n,y:r}}),p=null!=u?D(T,{item:u,turn:this.props.turn}):null;return D("div",{style:{width:"60px",height:"60px",position:"relative",backgroundColor:"transparent"}},e,D(k,{piece:u,x:n,y:r,movePiece:o,canDrop:this.props.canDrop,pieces:s,kill:function(){return u&&t.props.kill(u)}},void 0,p))}},{key:"render",value:function(){for(var e=[],t=0;t<90;t++)e.push(this.renderSquare(t));return D("div",{style:{width:"540px",height:"600px",display:"flex",flexWrap:"wrap",position:"relative"}},void 0,e,D("div",{style:{position:"absolute",top:"50%",left:"25%",marginTop:"-30px",height:"60px",lineHeight:"60px",fontSize:"24px",userSelect:"none"}},void 0,"楚 河"),D("div",{style:{position:"absolute",top:"50%",right:"25%",marginTop:"-30px",height:"60px",lineHeight:"60px",fontSize:"24px",userSelect:"none"}},void 0,"漢 界"))}}]),t}();N.displayName="ChessBoard";var R="ontouchstart"in document.documentElement||window.navigator.msPointerEnabled,I=Object(v.DragDropContext)(R?m.a:h.a)(N),A=n("./node_modules/@material-ui/core/styles/index.js"),M=n("./node_modules/@material-ui/core/Grid/index.js"),$=n.n(M),H=n("./node_modules/@material-ui/core/Paper/index.js"),J=n.n(H),L=n("./node_modules/@material-ui/core/Button/index.js"),U=n.n(L),q=n("./app/components/Layout/index.js"),z=n("./node_modules/immutable/dist/immutable.js"),G="app/chinesechess",W=G+"/INIT",B=G+"/MOUNT",V=G+"/UNMOUNT",K=G+"/INIT_CHANNEL",F=G+"/UNSET_CHANNEL",Q=G+"/SET_PIECES",X=G+"/MOVE_POSITION",Y=G+"/MOVE_POSITION_REMOTE",Z=G+"/KILL",ee=G+"/CHANGE_TURN",te=G+"/START",ne=Object(z.fromJS)({redPieces:[],blackPieces:[],turn:"red",channel:null});var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments[1],n=t.type,r=t.payload,o=void 0;switch(n){case K:return e.set("channel",r.channel);case F:return e.set("channel",null);case Q:return e.set("redPieces",Object(z.fromJS)(r.redPieces)).set("blackPieces",Object(z.fromJS)(r.blackPieces));case Y:case X:return o=Number(r.item.id.slice(1)),"red"===r.item.color?e.mergeIn(["redPieces",o,"position"],r.position).set("turn","black"):e.mergeIn(["blackPieces",o,"position"],r.position).set("turn","red");case Z:return o=Number(r.item.id.slice(1)),"red"===r.item.color?e.setIn(["redPieces",o,"live"],!1):e.setIn(["blackPieces",o,"live"],!1);case ee:return e.set("turn",r.turn);default:return e}},oe=n("./node_modules/redux-saga/es/effects.js"),ie=n("./node_modules/redux-saga/es/index.js"),ce=(n("./node_modules/phoenix/priv/static/phoenix.js"),function(){return{type:W,payload:{}}}),ae=function(){return{type:B,payload:{}}},se=function(){return{type:V,payload:{}}},ue=function(e){return{type:K,payload:{channel:e}}},pe=function(){return{type:F,payload:{}}};function le(e){return{type:Q,payload:{pieces:e,redPieces:e.filter(function(e){return"red"===e.color}),blackPieces:e.filter(function(e){return"black"===e.color})}}}var fe=function(e,t){return{type:X,payload:{item:e,position:t}}},de=function(e,t){return{type:Y,payload:{item:e,position:t}}},ye=function(e){return{type:Z,payload:{item:e}}},he=function(e){return{type:ee,payload:{turn:e}}},be=function(){return{type:te,payload:{}}},me=n("./app/containers/App/selectors.js"),ve=function(){return Object(l.a)(function(e){return e.get("chineseChess")},function(e){return e.get("channel")})},xe=function(){return Object(l.a)(function(e){return e.get("chineseChess")},function(e){return e.toJS()})},ge=regeneratorRuntime.mark(Pe),je=regeneratorRuntime.mark(Se),Oe=regeneratorRuntime.mark(Ce),_e=regeneratorRuntime.mark(De),we=regeneratorRuntime.mark(Ee),ke=regeneratorRuntime.mark(Ne);function Pe(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.c)(ve());case 2:e.sent.push("start");case 4:case"end":return e.stop()}},ge,this)}function Se(e){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(oe.c)(ve());case 2:t=r.sent,n=e.payload,t.push("move_chess",n);case 5:case"end":return r.stop()}},je,this)}function Ce(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(oe.c)(Object(me.a)());case 3:return e=n.sent,t=e.channel("room:chess",{}),n.next=7,Object(oe.b)(ue(t));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}},Oe,this,[[0,9]])}function Te(e){return Object(ie.b)(function(t){return e.on("init_pieces",function(e){t(le(e.pieces)),t(he(e.turn))}),e.on("move_chess_remote",function(e){t(de(e.item,e.position)),t(le(e.pieces))}),function(){return e.off()}})}function De(e){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(oe.c)(ve());case 3:return(t=e.sent).join(),e.next=7,Object(oe.a)(Te,t);case 7:n=e.sent;case 8:return e.next=11,Object(oe.d)(n);case 11:return r=e.sent,e.next=14,Object(oe.b)(r);case 14:e.next=8;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0);case 21:case"end":return e.stop()}},_e,this,[[0,18]])}function Ee(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(oe.c)(ve());case 3:return(e=t.sent).off(),e.leave(),t.next=8,Object(oe.b)(pe());case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}},we,this,[[0,10]])}function Ne(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.e)(W,Ce);case 2:return e.next=4,Object(oe.e)(B,De);case 4:return e.next=6,Object(oe.e)(V,Ee);case 6:return e.next=8,Object(oe.e)(te,Pe);case 8:return e.next=10,Object(oe.e)(X,Se);case 10:case"end":return e.stop()}},ke,this)}var Re=function(e,t,n){var r=e.position.x,o=e.position.y,i=t.x,c=t.y,a=_.find(n,{position:t});if(a&&a.color===e.color)return!1;var s=function(e){return!_.find(n,{position:e})},u=_.find(n,{color:"red",type:0}),p=_.find(n,{color:"black",type:0});if(!u||!p)return!1;if(0!==e.type&&u.position.x===p.position.x&&r===u.position.x){for(var l=0,f=u.position.y+1;f<p.position.y;f++)s({x:r,y:f})||l++;if(1===l&&i!==r)return!1}switch(e.type){case 0:if(i<3||i>5)return!1;if("red"===e.color&&c>2)return!1;if("black"===e.color&&c<7)return!1;if("red"==e.color){if(i===p.position.x){for(var d=0,y=u.position.y+1;y<p.position.y;y++)s({x:i,y:y})||d++;if(0===d)return!1}}else if(i===u.position.x){for(var h=0,b=u.position.y+1;b<p.position.y;b++)s({x:i,y:b})||h++;if(0===h)return!1}return i===r&&(c===o+1||c===o-1)||c===o&&(i===r+1||i===r-1);case 1:return!(i<3||i>5||"red"===e.color&&c>2||"black"===e.color&&c<7||(i!==r+1||c!==o+1&&c!==o-1)&&(i!==r-1||c!==o+1&&c!==o-1));case 2:return!!(!("red"===e.color&&c>4)&&!("black"===e.color&&c<5)&&(s({x:r-1,y:o-1})&&i===r-2&&c===o-2||s({x:r-1,y:o+1})&&i===r-2&&c===o+2||s({x:r+1,y:o-1})&&i===r+2&&c===o-2||s({x:r+1,y:o+1})&&i===r+2&&c===o+2));case 3:return!!(s({x:r-1,y:o})&&i===r-2&&(c===o+1||c===o-1)||s({x:r+1,y:o})&&i===r+2&&(c===o+1||c===o-1)||s({x:r,y:o-1})&&c===o-2&&(i===r+1||i===r-1)||s({x:r,y:o+1})&&c===o+2&&(i===r+1||i===r-1));case 4:if(r===i){var m=0;if(c>o)for(var v=o+1;v<=c;v++)_.find(n,{position:{x:r,y:v}})&&m++;else for(var x=o-1;x>=c;x--)_.find(n,{position:{x:r,y:x}})&&m++;return 0==m||1==m&&a}if(o===c){var g=0;if(i>r)for(var j=r+1;j<=i;j++)_.find(n,{position:{x:j,y:o}})&&g++;else for(var O=r-1;O>=i;O--)_.find(n,{position:{x:O,y:o}})&&g++;return 0==g||1==g&&a}return!1;case 5:if(r===i){var w=0;if(c>o)for(var k=o+1;k<=c;k++)_.find(n,{position:{x:r,y:k}})&&w++;else for(var P=o-1;P>=c;P--)_.find(n,{position:{x:r,y:P}})&&w++;return 0==w||2==w&&a}if(o===c){var S=0;if(i>r)for(var C=r+1;C<=i;C++)_.find(n,{position:{x:C,y:o}})&&S++;else for(var T=r-1;T>=i;T--)_.find(n,{position:{x:T,y:o}})&&S++;return 0==S||2==S&&a}return!1;case 6:return"red"===e.color?e.position.y>4?t.x===e.position.x&&t.y===e.position.y+1||t.x===e.position.x+1&&t.y===e.position.y||t.x===e.position.x-1&&t.y===e.position.y:t.x===e.position.x&&t.y===e.position.y+1:e.position.y<5?t.x===e.position.x&&t.y===e.position.y-1||t.x===e.position.x+1&&t.y===e.position.y||t.x===e.position.x-1&&t.y===e.position.y:t.x===e.position.x&&t.y===e.position.y-1}return!1};n.d(t,"ChineseChess",function(){return $e});var Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ae=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===c)n.children=o;else if(c>1){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Me=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var $e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.a.Component),Me(t,[{key:"componentWillMount",value:function(){this.props.init()}},{key:"componentDidMount",value:function(){this.props.mount()}},{key:"componentWillUnmount",value:function(){this.props.unmount()}},{key:"render",value:function(){var e=this.props,t=e.chess,n=e.movePiece,r=e.kill,o=(e.connectRoom,e.start),i=e.classes;return Ae(q.a,{},void 0,Ae(p.a,{title:"中国象棋",meta:[{name:"description",content:"中国象棋游戏"}]}),Ae($.a,{container:!0},void 0,Ae($.a,{item:!0,xs:12,sm:12,className:i.grid},void 0,Ae(J.a,{className:i.boardPaper},void 0,c.a.createElement(I,Ie({},t,{kill:r,movePiece:n,canDrop:Re}))),Ae(J.a,{className:i.paper},void 0,Ae(U.a,{variant:"raised",color:"primary",className:i.button},void 0,"回合： ",t.turn),Ae(U.a,{variant:"raised",color:"primary",className:i.button,onClick:o},void 0,"Start Game")))))}}]),t}();$e.displayName="ChineseChess";var He=Object(l.b)({chess:xe()}),Je=Object(s.connect)(He,function(e){return Object(a.bindActionCreators)(Ie({},r),e)}),Le=Object(f.a)({key:"chineseChess",reducer:re}),Ue=Object(d.a)({key:"chineseChess",saga:Ne});t.default=Object(a.compose)(Le,Ue,Je,Object(A.withStyles)(function(e){return{grid:{display:"flex",justifyContent:"center"},boardPaper:{width:"540px",height:"600px"},paper:{width:"320px",height:"600px",display:"flex",justifyContent:"center",flexDirection:"column"},button:{margin:e.spacing.unit}}}))($e)}}]);