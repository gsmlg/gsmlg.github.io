(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{6886:function(n,e,r){"use strict";r.d(e,{ZP:function(){return $}});var t=r(3366),i=r(7462),o=r(7294),a=r(6010),s=r(5408),c=r(9707),l=r(7192),u=r(2151),d=r(3616);var m=o.createContext(),f=r(8979);function p(n){return(0,f.Z)("MuiGrid",n)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var h=(0,r(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>`spacing-xs-${n}`)),...["column-reverse","column","row-reverse","row"].map((n=>`direction-xs-${n}`)),...["nowrap","wrap-reverse","wrap"].map((n=>`wrap-xs-${n}`)),...g.map((n=>`grid-xs-${n}`)),...g.map((n=>`grid-sm-${n}`)),...g.map((n=>`grid-md-${n}`)),...g.map((n=>`grid-lg-${n}`)),...g.map((n=>`grid-xl-${n}`))]),x=r(5893);const w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(n){const e=parseFloat(n);return`${e}${String(n).replace(String(e),"")||"px"}`}function b(n,e,r={}){if(!e||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:t,sm:i,md:o,lg:a,xl:s}=n;return[Number(t)>0&&(r[`spacing-xs-${String(t)}`]||`spacing-xs-${String(t)}`),Number(i)>0&&(r[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(r[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(r[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(r[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const v=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,e)=>{const{container:r,direction:t,item:i,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:u,xs:d,zeroMinWidth:m}=n.ownerState;return[e.root,r&&e.container,i&&e.item,m&&e.zeroMinWidth,...b(c,r,e),"row"!==t&&e[`direction-xs-${String(t)}`],"wrap"!==l&&e[`wrap-xs-${String(l)}`],!1!==d&&e[`grid-xs-${String(d)}`],!1!==s&&e[`grid-sm-${String(s)}`],!1!==a&&e[`grid-md-${String(a)}`],!1!==o&&e[`grid-lg-${String(o)}`],!1!==u&&e[`grid-xl-${String(u)}`]]}})((({ownerState:n})=>(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})),(function({theme:n,ownerState:e}){const r=(0,s.P$)({values:e.direction,breakpoints:n.breakpoints.values});return(0,s.k9)({theme:n},r,(n=>{const e={flexDirection:n};return 0===n.indexOf("column")&&(e[`& > .${h.item}`]={maxWidth:"none"}),e}))}),(function({theme:n,ownerState:e}){const{container:r,rowSpacing:t}=e;let i={};if(r&&0!==t){const e=(0,s.P$)({values:t,breakpoints:n.breakpoints.values});i=(0,s.k9)({theme:n},e,(e=>{const r=n.spacing(e);return"0px"!==r?{marginTop:`-${S(r)}`,[`& > .${h.item}`]:{paddingTop:S(r)}}:{}}))}return i}),(function({theme:n,ownerState:e}){const{container:r,columnSpacing:t}=e;let i={};if(r&&0!==t){const e=(0,s.P$)({values:t,breakpoints:n.breakpoints.values});i=(0,s.k9)({theme:n},e,(e=>{const r=n.spacing(e);return"0px"!==r?{width:`calc(100% + ${S(r)})`,marginLeft:`-${S(r)}`,[`& > .${h.item}`]:{paddingLeft:S(r)}}:{}}))}return i}),(function({theme:n,ownerState:e}){let r;return n.breakpoints.keys.reduce(((t,o)=>{let a={};if(e[o]&&(r=e[o]),!r)return t;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:e.columns,breakpoints:n.breakpoints.values}),l="object"===typeof c?c[o]:c;if(void 0===l||null===l)return t;const u=Math.round(r/l*1e8)/1e6+"%";let d={};if(e.container&&e.item&&0!==e.columnSpacing){const r=n.spacing(e.columnSpacing);if("0px"!==r){const n=`calc(${u} + ${S(r)})`;d={flexBasis:n,maxWidth:n}}}a=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},d)}return 0===n.breakpoints.values[o]?Object.assign(t,a):t[n.breakpoints.up(o)]=a,t}),{})}));var $=o.forwardRef((function(n,e){const r=(0,d.Z)({props:n,name:"MuiGrid"}),s=(0,c.Z)(r),{className:u,columns:f,columnSpacing:g,component:h="div",container:S=!1,direction:$="row",item:j=!1,lg:y=!1,md:Z=!1,rowSpacing:k,sm:P=!1,spacing:N=0,wrap:M="wrap",xl:W=!1,xs:z=!1,zeroMinWidth:C=!1}=s,G=(0,t.Z)(s,w),T=k||N,_=g||N,E=o.useContext(m),O=f||E||12,A=(0,i.Z)({},s,{columns:O,container:S,direction:$,item:j,lg:y,md:Z,sm:P,rowSpacing:T,columnSpacing:_,wrap:M,xl:W,xs:z,zeroMinWidth:C}),B=(n=>{const{classes:e,container:r,direction:t,item:i,lg:o,md:a,sm:s,spacing:c,wrap:u,xl:d,xs:m,zeroMinWidth:f}=n,g={root:["root",r&&"container",i&&"item",f&&"zeroMinWidth",...b(c,r),"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==u&&`wrap-xs-${String(u)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,l.Z)(g,p,e)})(A);return L=(0,x.jsx)(v,(0,i.Z)({ownerState:A,className:(0,a.Z)(B.root,u),as:h,ref:e},G)),12!==O?(0,x.jsx)(m.Provider,{value:O,children:L}):L;var L}))},3519:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools",function(){return r(9274)}])},9274:function(n,e,r){"use strict";r.r(e);var t=r(5893),i=(r(7294),r(2151)),o=r(9008),a=r(1664),s=r(6886),c=r(1987),l=r(3972),u=r(2458),d=(0,i.ZP)(c.Z)((function(n){var e=n.theme;return{padding:e.spacing(3),margin:e.spacing(3)}})),m=(0,i.ZP)(l.Z)((function(n){n.theme;return{fontSize:"1.44rem",fontWeight:400}}));e.default=function(n){return(0,t.jsxs)(u.Z,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{children:"Tools"}),(0,t.jsx)("meta",{name:"description",content:"Description of Tools"})]}),(0,t.jsx)(s.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(s.ZP,{item:!0,md:11,children:(0,t.jsx)(s.ZP,{container:!0,children:(0,t.jsxs)(s.ZP,{item:!0,md:4,children:[(0,t.jsx)(d,{children:(0,t.jsx)(a.default,{href:"/tools/vultr-latency",children:(0,t.jsx)("a",{children:(0,t.jsx)(m,{children:"Vultr Networks Latency"})})})}),(0,t.jsx)(d,{children:(0,t.jsx)(a.default,{href:"/tools/elixir-nodes",children:(0,t.jsx)("a",{children:(0,t.jsx)(m,{children:"Elixir Nodes"})})})}),(0,t.jsx)(d,{children:(0,t.jsx)(a.default,{href:"/tools/three-fiber",children:(0,t.jsx)("a",{children:(0,t.jsx)(m,{children:"Three Fiber"})})})})]})})})})]})}},2458:function(n,e,r){"use strict";var t=r(5944),i=r(7294),o=r(2151),a=r(917),s=r(2293),c=r(155),l=r(3972),u=r(3321),d=r(3946),m=r(326),f=r(1664),p=r(6127);function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function h(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o=[],a=!0,s=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return g(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(){var n,e,r=(n=["\n              margin: 0 2em;\n              display: ","\n            "],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return x=function(){return r},r}var w=(0,o.ZP)("section")((function(n){n.theme;return{display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"}})),S=(0,o.ZP)("section")((function(n){n.theme;return{display:"flex",flex:"1 1 auto"}})),b=(0,o.ZP)("footer")((function(n){var e=n.theme;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:e.palette.getContrastText(e.palette.primary.main),backgroundColor:e.palette.primary.main}})),v=(0,o.ZP)("div")((function(n){n.theme;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:n.status.color}})),$=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],j=function(n,e){var r=n.children,o=h(i.useState(!0),2),g=o[0],j=o[1];i.useEffect((function(){j("www.gsmlg.cn"===window.location.hostname)}),[]);var y=(0,p.sV)(),Z=h(i.useState({color:"transperant"}),2),k=Z[0],P=Z[1];i.useEffect((function(){if(y){var n=function(){switch(y.connectionState()){case"connecting":P({color:"#ff0"});break;case"open":P({color:"#0f0"});break;case"closing":P({color:"#0ff"});break;default:P({color:"#f00"})}};n();var e=[y.onOpen(n),y.onClose(n),y.onError(n),y.onMessage(n)];return function(){y.off(e)}}}),[y]);var N=i.useCallback((function(){Notification.requestPermission()}),[]);return(0,t.jsxs)(w,{ref:e,children:[(0,t.jsx)(s.Z,{position:"static",children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(v,{status:k}),(0,t.jsx)(d.Z,{onClick:N,color:"inherit","aria-label":"Menu",size:"large",children:(0,t.jsx)(m.Z,{})}),(0,t.jsx)(l.Z,{type:"title",color:"inherit",children:$.map((function(n){var e=n.name,r=n.href;return(0,t.jsx)(u.Z,{color:"inherit",children:(0,t.jsx)(f.default,{href:r,children:e})},e)}))})]})}),(0,t.jsx)(S,{children:r}),(0,t.jsx)(b,{style:{marginTop:0},children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("span",{id:"icp-info",css:(0,a.css)(x(),g?"inline":"none"),children:"\u4eacICP\u590720014476\u53f7-2"}),(0,t.jsx)("span",{children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})]})})]})};e.Z=i.forwardRef(j)}},function(n){n.O(0,[947,774,888,179],(function(){return e=3519,n(n.s=e);var e}));var e=n.O();_N_E=e}]);