(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{30:function(e,n,t){"use strict";var r=t(99);n.Z=void 0;var i=r(t(3853)),o=t(9541),l=(0,i.default)((0,o.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web");n.Z=l},7247:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return t(8365)}])},8365:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return x}});var r=t(9541),i=t(7636),o=t.n(i),l=t(5725),c=t(4026),a=t.n(c),s=t(7999),h=t(7978),d=t(9703),u=t(3347),f=t(6403),p=t(30),Z=t(9594);let m=(0,l.ZP)(s.Z)(e=>{let{theme:n}=e;return{flex:1,padding:n.spacing(3),margin:n.spacing(3)}}),g=(0,l.ZP)(d.ZP)(e=>{let{theme:n}=e;return{transition:"all 1s","&:hover":{boxShadow:"0 0 4px 4px ".concat(n.palette.primary.main)}}});var x=!0;n.default=function(e){let{blogs:n=[]}=e;return(0,r.jsxs)(Z.Z,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Blog List"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(m,{elevation:4,children:(0,r.jsx)(h.Z,{children:n.map(e=>(0,r.jsxs)(g,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(f.Z,{primary:(0,r.jsx)(a(),{href:"/blogs/".concat(e.slug),children:e.title})}),(0,r.jsx)(f.Z,{secondary:e.date})]},e.slug))})})]})}},9594:function(e,n,t){"use strict";var r=t(3833),i=t(8526),o=t(3981),l=t(5725),c=t(3775),a=t(5412),s=t(8440),h=t(1522),d=t(1169),u=t(3825),f=t(4237),p=t(8692),Z=t(4026),m=t.n(Z),g=t(2866),x=t(7741);function b(){let e=(0,r.Z)(["\n              margin: 0 2em;\n              display: ",";\n            "]);return b=function(){return e},e}let v=(0,l.ZP)("section")(()=>({display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"})),w=(0,l.ZP)("section")(()=>({display:"flex",flex:"1 1 auto"})),_=(0,l.ZP)("footer")(e=>{let{theme:n}=e;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}}),j=(0,l.ZP)("div")(e=>{let{status:n}=e;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:n.color}}),k=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"}],y=(e,n)=>{let{children:t}=e,[r,l]=o.useState(!0);o.useEffect(()=>{l("www.gsmlg.cn"===window.location.hostname)},[]);let Z=(0,g.sV)(),[y,P]=o.useState({color:"transperant"}),C=(0,x.p3)(),E=(0,x.dU)();o.useEffect(()=>{if(C(),Z){let e=()=>{let e=Z.connectionState();switch(e){case"connecting":P({color:"#ff0"});break;case"open":P({color:"#0f0"});break;case"closing":P({color:"#0ff"});break;default:P({color:"#f00"})}};e();let n=[Z.onOpen(e),Z.onClose(e),Z.onError(e),Z.onMessage(e)];return()=>{Z.off(n)}}return()=>{}},[Z,C]);let N=o.useCallback(()=>{Notification.requestPermission()},[]);return(0,i.BX)(v,{ref:n,children:[(0,i.tZ)(a.Z,{position:"static",children:(0,i.BX)(s.Z,{children:[(0,i.tZ)(j,{status:y}),(0,i.tZ)(u.Z,{onClick:N,color:"inherit","aria-label":"Menu",size:"large",children:(0,i.tZ)(p.Z,{badgeContent:E,children:(0,i.tZ)(f.Z,{})})}),(0,i.tZ)(h.Z,{type:"title",color:"inherit",children:k.map(e=>{let{name:n,href:t}=e;return(0,i.tZ)(d.Z,{color:"inherit",children:(0,i.tZ)(m(),{href:t,children:n})},n)})})]})}),(0,i.tZ)(w,{children:t}),(0,i.tZ)(_,{style:{marginTop:0},children:(0,i.BX)("div",{className:"container",children:[(0,i.tZ)("span",{id:"icp-info",css:(0,c.iv)(b(),r?"inline":"none"),children:"京ICP备20014476号-2"}),(0,i.tZ)("span",{children:"Copyright \xa9 2017-2022 GSMLG - Powered by GSMLG Web."})]})})]})};n.Z=o.forwardRef(y)}},function(e){e.O(0,[483,956,774,888,179],function(){return e(e.s=7247)}),_N_E=e.O()}]);