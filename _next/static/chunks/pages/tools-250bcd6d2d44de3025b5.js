(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{1749:function(e,n,t){"use strict";var i=t(5987),r=t(7462),o=t(7294),a=(t(5697),t(6010)),s=t(8786),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var x=o.forwardRef((function(e,n){var t=e.alignContent,s=void 0===t?"stretch":t,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,x=e.className,f=e.component,m=void 0===f?"div":f,u=e.container,g=void 0!==u&&u,h=e.direction,p=void 0===h?"row":h,v=e.item,j=void 0!==v&&v,w=e.justify,y=e.justifyContent,Z=void 0===y?"flex-start":y,b=e.lg,N=void 0!==b&&b,C=e.md,S=void 0!==C&&C,W=e.sm,k=void 0!==W&&W,_=e.spacing,E=void 0===_?0:_,G=e.wrap,M=void 0===G?"wrap":G,z=e.xl,T=void 0!==z&&z,B=e.xs,D=void 0!==B&&B,I=e.zeroMinWidth,L=void 0!==I&&I,P=(0,i.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=(0,a.Z)(d.root,x,g&&[d.container,0!==E&&d["spacing-xs-".concat(String(E))]],j&&d.item,L&&d.zeroMinWidth,"row"!==p&&d["direction-xs-".concat(String(p))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(w||Z)&&d["justify-content-xs-".concat(String(w||Z))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==S&&d["grid-md-".concat(String(S))],!1!==N&&d["grid-lg-".concat(String(N))],!1!==T&&d["grid-xl-".concat(String(T))]);return o.createElement(m,(0,r.Z)({className:R,ref:n},P))})),f=(0,s.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return c.forEach((function(i){var r=e.spacing(i);0!==r&&(t["spacing-".concat(n,"-").concat(i)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),t}(e,"xs"),e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var i={};l.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?(0,r.Z)(e,i):e[n.breakpoints.up(t)]=i}(n,e,t),n}),{}))}),{name:"MuiGrid"})(x);n.Z=f},2926:function(e,n,t){"use strict";t.r(n);t(7294);var i=t(663),r=t(9008),o=t(1664),a=t(1749),s=t(9895),c=t(2318),l=t(3749),d=t(5893),x=(0,i.Z)((function(e){return{root:{margin:"1em"},paper:{margin:"1rem",padding:"1rem"},link:{textDecoration:"none"},text:{fontSize:"1.44em"}}}));n.default=function(e){var n=x();return(0,d.jsxs)(l.Z,{children:[(0,d.jsxs)(r.default,{children:[(0,d.jsx)("title",{children:"Tools"}),(0,d.jsx)("meta",{name:"description",content:"Description of Tools"})]}),(0,d.jsx)(a.Z,{container:!0,justify:"center",className:n.root,children:(0,d.jsx)(a.Z,{item:!0,md:11,children:(0,d.jsx)(a.Z,{container:!0,children:(0,d.jsxs)(a.Z,{item:!0,md:4,children:[(0,d.jsx)(s.Z,{className:n.paper,children:(0,d.jsx)(o.default,{href:"/tools/vultr-latency",children:(0,d.jsx)("a",{children:(0,d.jsx)(c.Z,{className:n.text,component:"h3",children:"Vultr Networks Latency"})})})}),(0,d.jsx)(s.Z,{className:n.paper,children:(0,d.jsx)(o.default,{href:"/tools/elixir-nodes",children:(0,d.jsx)("a",{children:(0,d.jsx)(c.Z,{className:n.text,component:"h3",children:"Elixir Nodes"})})})})]})})})})]})}},3749:function(e,n,t){"use strict";var i=t(7294),r=t(663),o=t(5258),a=t(8358),s=t(2318),c=t(282),l=t(7812),d=t(8884),x=t(1664),f=t(5893),m=(0,r.Z)((function(e){return{root:{display:"flex",minHeight:"100vh",width:"100vw",flexDirection:"column",flex:"1 1 auto"},flex:{display:"flex",flex:1},footer:{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:e.palette.getContrastText(e.palette.primary.main),backgroundColor:e.palette.primary.main},menuButton:{marginLeft:-12,marginRight:20},raised:{},icp:{fontWeight:"bold",marginRight:20,marginLeft:20},copyright:{}}})),u=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"},{name:"Game",href:"/games"}],g=function(e,n){var t=e.children,r=m(),g=i.useCallback((function(){Notification.requestPermission()}),[]);return(0,f.jsxs)("section",{className:r.root,ref:n,children:[(0,f.jsx)(o.Z,{position:"static",children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(l.Z,{onClick:g,className:r.menuButton,color:"inherit","aria-label":"Menu",children:(0,f.jsx)(d.Z,{})}),(0,f.jsx)(s.Z,{type:"title",color:"inherit",className:r.flex,children:u.map((function(e){var n=e.name,t=e.href;return(0,f.jsx)(c.Z,{color:"inherit",children:(0,f.jsx)(x.default,{href:t,children:n})},n)}))})]})}),(0,f.jsx)("section",{className:r.flex,children:t}),(0,f.jsx)("footer",{className:r.footer,children:(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("span",{className:r.copyright,children:"Copyright \xa9 2017-2021 GSMLG - Powered by GSMLG Web."})})})]})};n.Z=i.forwardRef(g)},3519:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools",function(){return t(2926)}])}},function(e){e.O(0,[562,774,888,179],(function(){return n=3519,e(e.s=n);var n}));var n=e.O();_N_E=n}]);