(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{8695:function(e,n,t){"use strict";var i=t(99);n.Z=void 0;var r=i(t(3853)),o=t(9541),l=(0,r.default)((0,o.jsx)("path",{d:"m22 10-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5 5.5 5.5H15V5.5z"}),"Note");n.Z=l},6187:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/presentations",function(){return t(6835)}])},6835:function(e,n,t){"use strict";t.r(n);var i=t(9541);t(3981);var r=t(5725),o=t(7636),l=t.n(o),a=t(7999),s=t(7978),c=t(9703),u=t(3347),d=t(6403),h=t(8695),m=t(9594);let p=(0,r.ZP)(a.Z)(e=>{let{theme:n}=e;return{flex:1,padding:n.spacing(3),margin:n.spacing(3)}}),f=()=>{let e=[{id:1,name:"BIG WEB APP? COMPILE IT!",author:"ALON ZAKAI / MOZILLA",link:"https://kripken.github.io/mloc_emscripten_talk"},{id:2,name:"Debug in Webpack",author:"gsmlg",link:"https://gsmlg.github.io/Reveal/debug-module/"},{id:3,name:"Promise A Plus",author:"gsmlg",link:"https://gsmlg.github.io/Reveal/promise-a-plus/dist/"},{id:4,name:"Dynamic Import",author:"gsmlg",link:"https://gsmlg.github.io/Reveal/dynamic-import/dist/"}].reverse();return(0,i.jsxs)(m.Z,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:"Presentation"}),(0,i.jsx)("meta",{name:"description",content:"Description of Presentation"})]}),(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{children:e.map(e=>(0,i.jsxs)(c.ZP,{component:"a",href:e.link,target:"_blank",children:[(0,i.jsx)(u.Z,{children:(0,i.jsx)(h.Z,{})}),(0,i.jsx)(d.Z,{primary:e.name}),(0,i.jsx)(d.Z,{secondary:e.author})]},e.name))})})]})};n.default=f},9594:function(e,n,t){"use strict";var i=t(3833),r=t(8526),o=t(3981),l=t(5725),a=t(3775),s=t(5412),c=t(8440),u=t(1522),d=t(1169),h=t(3825),m=t(4237),p=t(8692),f=t(4026),g=t.n(f),Z=t(2866),b=t(7741);function k(){let e=(0,i.Z)(["\n              margin: 0 2em;\n              display: ",";\n            "]);return k=function(){return e},e}let x=(0,l.ZP)("section")(()=>({display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"})),P=(0,l.ZP)("section")(()=>({display:"flex",flex:"1 1 auto"})),v=(0,l.ZP)("footer")(e=>{let{theme:n}=e;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}}),w=(0,l.ZP)("div")(e=>{let{status:n}=e;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:n.color}}),_=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"}],y=(e,n)=>{let{children:t}=e,[i,l]=o.useState(!0);o.useEffect(()=>{l("www.gsmlg.cn"===window.location.hostname)},[]);let f=(0,Z.sV)(),[y,j]=o.useState({color:"transperant"}),C=(0,b.p3)(),E=(0,b.dU)();o.useEffect(()=>{if(C(),f){let e=()=>{let e=f.connectionState();switch(e){case"connecting":j({color:"#ff0"});break;case"open":j({color:"#0f0"});break;case"closing":j({color:"#0ff"});break;default:j({color:"#f00"})}};e();let n=[f.onOpen(e),f.onClose(e),f.onError(e),f.onMessage(e)];return()=>{f.off(n)}}return()=>{}},[f,C]);let N=o.useCallback(()=>{Notification.requestPermission()},[]);return(0,r.BX)(x,{ref:n,children:[(0,r.tZ)(s.Z,{position:"static",children:(0,r.BX)(c.Z,{children:[(0,r.tZ)(w,{status:y}),(0,r.tZ)(h.Z,{onClick:N,color:"inherit","aria-label":"Menu",size:"large",children:(0,r.tZ)(p.Z,{badgeContent:E,children:(0,r.tZ)(m.Z,{})})}),(0,r.tZ)(u.Z,{type:"title",color:"inherit",children:_.map(e=>{let{name:n,href:t}=e;return(0,r.tZ)(d.Z,{color:"inherit",children:(0,r.tZ)(g(),{href:t,children:n})},n)})})]})}),(0,r.tZ)(P,{children:t}),(0,r.tZ)(v,{style:{marginTop:0},children:(0,r.BX)("div",{className:"container",children:[(0,r.tZ)("span",{id:"icp-info",css:(0,a.iv)(k(),i?"inline":"none"),children:"京ICP备20014476号-2"}),(0,r.tZ)("span",{children:"Copyright \xa9 2017-2022 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=o.forwardRef(y)}},function(e){e.O(0,[483,956,774,888,179],function(){return e(e.s=6187)}),_N_E=e.O()}]);