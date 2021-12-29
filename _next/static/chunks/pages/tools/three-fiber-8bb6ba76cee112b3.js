(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{6886:function(e,n,r){"use strict";r.d(n,{ZP:function(){return $}});var t=r(3366),i=r(7462),o=r(7294),a=r(6010),s=r(5408),c=r(9707),l=r(7192),u=r(2151),d=r(3616);var m=o.createContext(),f=r(8979);function p(e){return(0,f.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var h=(0,r(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),x=r(5893);const w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function b(e,n,r={}){if(!n||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:t,sm:i,md:o,lg:a,xl:s}=e;return[Number(t)>0&&(r[`spacing-xs-${String(t)}`]||`spacing-xs-${String(t)}`),Number(i)>0&&(r[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(r[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(r[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(r[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const v=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{container:r,direction:t,item:i,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:u,xs:d,zeroMinWidth:m}=e.ownerState;return[n.root,r&&n.container,i&&n.item,m&&n.zeroMinWidth,...b(c,r,n),"row"!==t&&n[`direction-xs-${String(t)}`],"wrap"!==l&&n[`wrap-xs-${String(l)}`],!1!==d&&n[`grid-xs-${String(d)}`],!1!==s&&n[`grid-sm-${String(s)}`],!1!==a&&n[`grid-md-${String(a)}`],!1!==o&&n[`grid-lg-${String(o)}`],!1!==u&&n[`grid-xl-${String(u)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:n}){const r=(0,s.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${h.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:r,rowSpacing:t}=n;let i={};if(r&&0!==t){const n=(0,s.P$)({values:t,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},n,(n=>{const r=e.spacing(n);return"0px"!==r?{marginTop:`-${S(r)}`,[`& > .${h.item}`]:{paddingTop:S(r)}}:{}}))}return i}),(function({theme:e,ownerState:n}){const{container:r,columnSpacing:t}=n;let i={};if(r&&0!==t){const n=(0,s.P$)({values:t,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},n,(n=>{const r=e.spacing(n);return"0px"!==r?{width:`calc(100% + ${S(r)})`,marginLeft:`-${S(r)}`,[`& > .${h.item}`]:{paddingLeft:S(r)}}:{}}))}return i}),(function({theme:e,ownerState:n}){let r;return e.breakpoints.keys.reduce(((t,o)=>{let a={};if(n[o]&&(r=n[o]),!r)return t;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:n.columns,breakpoints:e.breakpoints.values}),l="object"===typeof c?c[o]:c;if(void 0===l||null===l)return t;const u=Math.round(r/l*1e8)/1e6+"%";let d={};if(n.container&&n.item&&0!==n.columnSpacing){const r=e.spacing(n.columnSpacing);if("0px"!==r){const e=`calc(${u} + ${S(r)})`;d={flexBasis:e,maxWidth:e}}}a=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},d)}return 0===e.breakpoints.values[o]?Object.assign(t,a):t[e.breakpoints.up(o)]=a,t}),{})}));var $=o.forwardRef((function(e,n){const r=(0,d.Z)({props:e,name:"MuiGrid"}),s=(0,c.Z)(r),{className:u,columns:f,columnSpacing:g,component:h="div",container:S=!1,direction:$="row",item:j=!1,lg:Z=!1,md:k=!1,rowSpacing:y,sm:P=!1,spacing:W=0,wrap:N="wrap",xl:M=!1,xs:z=!1,zeroMinWidth:C=!1}=s,G=(0,t.Z)(s,w),_=y||W,T=g||W,E=o.useContext(m),O=f||E||12,B=(0,i.Z)({},s,{columns:O,container:S,direction:$,item:j,lg:Z,md:k,sm:P,rowSpacing:_,columnSpacing:T,wrap:N,xl:M,xs:z,zeroMinWidth:C}),L=(e=>{const{classes:n,container:r,direction:t,item:i,lg:o,md:a,sm:s,spacing:c,wrap:u,xl:d,xs:m,zeroMinWidth:f}=e,g={root:["root",r&&"container",i&&"item",f&&"zeroMinWidth",...b(c,r),"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==u&&`wrap-xs-${String(u)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,l.Z)(g,p,n)})(B);return R=(0,x.jsx)(v,(0,i.Z)({ownerState:B,className:(0,a.Z)(L.root,u),as:h,ref:n},G)),12!==O?(0,x.jsx)(m.Provider,{value:O,children:R}):R;var R}))},1205:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/three-fiber",function(){return r(452)}])},452:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=(r(7294),r(2151)),o=r(9008),a=r(1664),s=r(6886),c=r(1987),l=r(3972),u=r(2458),d=(0,i.ZP)(c.Z)((function(e){var n=e.theme;return{padding:n.spacing(3),margin:n.spacing(3)}})),m=(0,i.ZP)(l.Z)((function(e){e.theme;return{fontSize:"1.44rem",fontWeight:400}}));n.default=function(e){return(0,t.jsxs)(u.Z,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{children:"ThreeFiber"}),(0,t.jsx)("meta",{name:"description",content:"Description of ThreeFiber"})]}),(0,t.jsx)(s.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(s.ZP,{item:!0,md:11,children:(0,t.jsx)(s.ZP,{container:!0,children:(0,t.jsxs)(s.ZP,{item:!0,md:4,children:[(0,t.jsx)(d,{children:(0,t.jsx)(a.default,{href:"/tools/three-fiber/cloud",children:(0,t.jsx)("a",{children:(0,t.jsx)(m,{children:"Cloud"})})})}),(0,t.jsx)(d,{children:(0,t.jsx)(a.default,{href:"/tools/three-fiber/bottles",children:(0,t.jsx)("a",{children:(0,t.jsx)(m,{children:"Bottles"})})})}),(0,t.jsx)(d,{children:(0,t.jsx)(a.default,{href:"/tools/three-fiber/lambo",children:(0,t.jsx)("a",{children:(0,t.jsx)(m,{children:"Lambo"})})})})]})})})})]})}},2458:function(e,n,r){"use strict";var t=r(5944),i=r(7294),o=r(2151),a=r(917),s=r(2293),c=r(155),l=r(3972),u=r(3321),d=r(3946),m=r(326),f=r(1664),p=r(6127);function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(c){i=!0,o=c}finally{try{t||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(){var e,n,r=(e=["\n              margin: 0 2em;\n              display: ","\n            "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return h=function(){return r},r}var x=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),w=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),S=(0,o.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),b=(0,o.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),v=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],$=function(e,n){var r=e.children,o=g(i.useState(!0),2),$=o[0],j=o[1];i.useEffect((function(){j("www.gsmlg.cn"===window.location.hostname)}),[]);var Z=(0,p.sV)(),k=g(i.useState({color:"transperant"}),2),y=k[0],P=k[1];i.useEffect((function(){if(Z){var e=function(){switch(Z.connectionState()){case"connecting":P({color:"#ff0"});break;case"open":P({color:"#0f0"});break;case"closing":P({color:"#0ff"});break;default:P({color:"#f00"})}};e();var n=[Z.onOpen(e),Z.onClose(e),Z.onError(e),Z.onMessage(e)];return function(){Z.off(n)}}}),[Z]);var W=i.useCallback((function(){Notification.requestPermission()}),[]);return(0,t.jsxs)(x,{ref:n,children:[(0,t.jsx)(s.Z,{position:"static",children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(b,{status:y}),(0,t.jsx)(d.Z,{onClick:W,color:"inherit","aria-label":"Menu",size:"large",children:(0,t.jsx)(m.Z,{})}),(0,t.jsx)(l.Z,{type:"title",color:"inherit",children:v.map((function(e){var n=e.name,r=e.href;return(0,t.jsx)(u.Z,{color:"inherit",children:(0,t.jsx)(f.default,{href:r,children:n})},n)}))})]})}),(0,t.jsx)(w,{children:r}),(0,t.jsx)(S,{style:{marginTop:0},children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("span",{id:"icp-info",css:(0,a.css)(h(),$?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,t.jsx)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=i.forwardRef($)}},function(e){e.O(0,[947,774,888,179],(function(){return n=1205,e(e.s=n);var n}));var n=e.O();_N_E=n}]);