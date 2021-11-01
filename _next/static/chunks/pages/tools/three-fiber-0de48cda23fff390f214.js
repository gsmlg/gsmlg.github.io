(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{558:function(e,n,r){"use strict";r.d(n,{ZP:function(){return Z}});var i=r(3366),t=r(7462),o=r(7294),a=(r(5697),r(6010)),s=r(5408),c=r(9707),l=r(7463),d=r(1861),u=r(6122);var m=o.createContext(),p=r(1420);function f(e){return(0,p.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var x=(0,r(1271).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),h=r(5893);const w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}const $=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{container:r,direction:i,item:t,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:d,xs:u,zeroMinWidth:m}=e.ownerState;return[n.root,r&&n.container,t&&n.item,m&&n.zeroMinWidth,r&&0!==c&&n[`spacing-xs-${String(c)}`],"row"!==i&&n[`direction-xs-${String(i)}`],"wrap"!==l&&n[`wrap-xs-${String(l)}`],!1!==u&&n[`grid-xs-${String(u)}`],!1!==s&&n[`grid-sm-${String(s)}`],!1!==a&&n[`grid-md-${String(a)}`],!1!==o&&n[`grid-lg-${String(o)}`],!1!==d&&n[`grid-xl-${String(d)}`]]}})((({ownerState:e})=>(0,t.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:n}){return(0,s.k9)({theme:e},n.direction,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${x.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:r,rowSpacing:i}=n;let t={};return r&&0!==i&&(t=(0,s.k9)({theme:e},i,(n=>{const r=e.spacing(n);return"0px"!==r?{marginTop:`-${S(r)}`,[`& > .${x.item}`]:{paddingTop:S(r)}}:{}}))),t}),(function({theme:e,ownerState:n}){const{container:r,columnSpacing:i}=n;let t={};return r&&0!==i&&(t=(0,s.k9)({theme:e},i,(n=>{const r=e.spacing(n);return"0px"!==r?{width:`calc(100% + ${S(r)})`,marginLeft:`-${S(r)}`,[`& > .${x.item}`]:{paddingLeft:S(r)}}:{}}))),t}),(({theme:e,ownerState:n})=>e.breakpoints.keys.reduce(((r,i)=>(function(e,n,r,i){const o=i[r];if(!o)return;let a={};if(!0===o)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===o)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const e=(0,s.P$)({values:i.columns,base:n.breakpoints.values}),c=Math.round(o/e[r]*1e8)/1e6+"%";let l={};if(i.container&&i.item&&0!==i.columnSpacing){const e=n.spacing(i.columnSpacing);if("0px"!==e){const n=`calc(${c} + ${S(e)})`;l={flexBasis:n,maxWidth:n}}}a=(0,t.Z)({flexBasis:c,flexGrow:0,maxWidth:c},l)}0===n.breakpoints.values[r]?Object.assign(e,a):e[n.breakpoints.up(r)]=a}(r,e,i,n),r)),{})));var Z=o.forwardRef((function(e,n){const r=(0,u.Z)({props:e,name:"MuiGrid"}),s=(0,c.Z)(r),{className:d,columns:p,columnSpacing:g,component:x="div",container:S=!1,direction:Z="row",item:v=!1,lg:j=!1,md:b=!1,rowSpacing:k,sm:W=!1,spacing:P=0,wrap:M="wrap",xl:C=!1,xs:z=!1,zeroMinWidth:G=!1}=s,_=(0,i.Z)(s,w),y=k||P,N=g||P,T=o.useContext(m),E=p||T||12,B=(0,t.Z)({},s,{columns:E,container:S,direction:Z,item:v,lg:j,md:b,sm:W,rowSpacing:y,columnSpacing:N,wrap:M,xl:C,xs:z,zeroMinWidth:G}),O=(e=>{const{classes:n,container:r,direction:i,item:t,lg:o,md:a,sm:s,spacing:c,wrap:d,xl:u,xs:m,zeroMinWidth:p}=e,g={root:["root",r&&"container",t&&"item",p&&"zeroMinWidth",r&&0!==c&&`spacing-xs-${String(c)}`,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==d&&`wrap-xs-${String(d)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==u&&`grid-xl-${String(u)}`]};return(0,l.Z)(g,f,n)})(B);return R=(0,h.jsx)($,(0,t.Z)({ownerState:B,className:(0,a.Z)(O.root,d),as:x,ref:n},_)),12!==E?(0,h.jsx)(m.Provider,{value:E,children:R}):R;var R}))},4860:function(e,n,r){"use strict";r.r(n);r(7294);var i=r(1861),t=r(9008),o=r(1664),a=r(558),s=r(6501),c=r(2658),l=r(3749),d=r(5893),u=(0,i.ZP)(s.Z)((function(e){var n=e.theme;return{padding:n.spacing(3),margin:n.spacing(3)}})),m=(0,i.ZP)(c.Z)((function(e){e.theme;return{fontSize:"1.44rem",fontWeight:400}}));n.default=function(e){return(0,d.jsxs)(l.Z,{children:[(0,d.jsxs)(t.default,{children:[(0,d.jsx)("title",{children:"ThreeFiber"}),(0,d.jsx)("meta",{name:"description",content:"Description of ThreeFiber"})]}),(0,d.jsx)(a.ZP,{container:!0,justifyContent:"center",children:(0,d.jsx)(a.ZP,{item:!0,md:11,children:(0,d.jsx)(a.ZP,{container:!0,children:(0,d.jsx)(a.ZP,{item:!0,md:4,children:(0,d.jsx)(u,{children:(0,d.jsx)(o.default,{href:"/tools/three-fiber/cloud",children:(0,d.jsx)("a",{children:(0,d.jsx)(m,{children:"Cloud"})})})})})})})})]})}},3749:function(e,n,r){"use strict";var i=r(318),t=r(7294),o=r(1861),a=r(3720),s=r(4386),c=r(2658),l=r(2642),d=r(6867),u=r(326),m=r(1664),p=r(6127),f=r(5893),g=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),x=(0,o.ZP)("section")((function(e){e.theme;return{display:"flex",flex:"1 1 auto"}})),h=(0,o.ZP)("footer")((function(e){var n=e.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}})),w=(0,o.ZP)("div")((function(e){e.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:e.status.color}})),S=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],$=function(e,n){var r=e.children,o=(0,p.sV)(),$=t.useState({color:"transperant"}),Z=(0,i.Z)($,2),v=Z[0],j=Z[1];t.useEffect((function(){if(o){var e=function(){switch(o.connectionState()){case"connecting":j({color:"#ff0"});break;case"open":j({color:"#0f0"});break;case"closing":j({color:"#0ff"});break;default:j({color:"#f00"})}};e();var n=[o.onOpen(e),o.onClose(e),o.onError(e),o.onMessage(e)];return function(){o.off(n)}}}),[o]);var b=t.useCallback((function(){Notification.requestPermission()}),[]);return(0,f.jsxs)(g,{ref:n,children:[(0,f.jsx)(a.Z,{position:"static",children:(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(w,{status:v}),(0,f.jsx)(d.Z,{onClick:b,color:"inherit","aria-label":"Menu",size:"large",children:(0,f.jsx)(u.Z,{})}),(0,f.jsx)(c.Z,{type:"title",color:"inherit",children:S.map((function(e){var n=e.name,r=e.href;return(0,f.jsx)(l.Z,{color:"inherit",children:(0,f.jsx)(m.default,{href:r,children:n})},n)}))})]})}),(0,f.jsx)(x,{children:r}),(0,f.jsx)(h,{children:(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})})})]})};n.Z=t.forwardRef($)},1205:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/three-fiber",function(){return r(4860)}])}},function(e){e.O(0,[880,774,888,179],(function(){return n=1205,e(e.s=n);var n}));var n=e.O();_N_E=n}]);