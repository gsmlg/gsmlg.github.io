(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1055],{3816:function(e,n,t){"use strict";var r=t(5034);n.Z=void 0;var i=r(t(1189)),o=t(9541),l=(0,i.default)((0,o.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web");n.Z=l},4830:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return t(4587)}])},4587:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return m}});var r=t(9541),i=t(8506),o=t.n(i),l=t(4544),c=t(6676),a=t.n(c),s=t(4169),d=t(5240),h=t(238),u=t(7875),f=t(3516),p=t(3816),Z=t(6672);let g=(0,l.ZP)(s.Z)(e=>{let{theme:n}=e;return{flex:1,padding:n.spacing(3),margin:n.spacing(3)}}),x=(0,l.ZP)(h.ZP)(e=>{let{theme:n}=e;return{transition:"all 1s","&:hover":{boxShadow:"0 0 4px 4px ".concat(n.palette.primary.main)}}});var m=!0;n.default=function(e){let{blogs:n=[]}=e;return(0,r.jsxs)(Z.Z,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Blog List"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(g,{elevation:4,children:(0,r.jsx)(d.Z,{children:n.map(e=>(0,r.jsxs)(x,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(f.Z,{primary:(0,r.jsx)(a(),{href:"/blogs/".concat(e.slug),children:e.title})}),(0,r.jsx)(f.Z,{secondary:e.date})]},e.slug))})})]})}},6672:function(e,n,t){"use strict";var r=t(3833),i=t(8409),o=t(3981),l=t(4544),c=t(4982),a=t(8490),s=t(3472),d=t(2681),h=t(6862),u=t(7262),f=t(2531),p=t(9469),Z=t(6676),g=t.n(Z),x=t(8718),m=t(1785);function b(){let e=(0,r.Z)(["\n        display: flex;\n        min-height: 100vh;\n        width: 100%;\n        flex: 1 1 auto;\n        flex-direction: column;\n      "]);return b=function(){return e},e}function v(){let e=(0,r.Z)(["\n              display: inline-block;\n              width: 16px;\n              height: 16px;\n              borderradius: 8px;\n              margin: 0 8px;\n              backgroundcolor: ",";\n            "]);return v=function(){return e},e}function k(){let e=(0,r.Z)(["\n          display: flex;\n          flex: 1 1 auto;\n        "]);return k=function(){return e},e}let _=(0,l.ZP)("footer")(e=>{let{theme:n}=e;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}});(0,l.ZP)("div")(e=>{let{status:n}=e;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:n.color}});let j=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"}],w=(e,n)=>{let{children:r}=e,l=(0,x.sV)(),[Z,w]=o.useState({color:"transperant"}),y=(0,m.p3)(),C=(0,m.dU)();o.useEffect(()=>{if(y(),l){let e=()=>{let e=l.connectionState();switch(e){case"connecting":w({color:"#ff0"});break;case"open":w({color:"#0f0"});break;case"closing":w({color:"#0ff"});break;default:w({color:"#f00"})}};e();let n=[l.onOpen(e),l.onClose(e),l.onError(e),l.onMessage(e)];return()=>{l.off(n)}}return()=>{}},[l,y]);let P=o.useCallback(()=>{Notification.requestPermission(),t.e(7990).then(t.bind(t,7990)).then(e=>{let{figlet:n}=e;console.log(n("Best in the World!"))})},[]);return(0,i.BX)("main",{ref:n,css:(0,c.iv)(b()),children:[(0,i.tZ)(a.Z,{position:"static",children:(0,i.BX)(s.Z,{children:[(0,i.tZ)("div",{css:(0,c.iv)(v(),Z.color)}),(0,i.tZ)(u.Z,{onClick:P,color:"inherit","aria-label":"Menu",size:"large",children:(0,i.tZ)(p.Z,{badgeContent:C,children:(0,i.tZ)(f.Z,{})})}),(0,i.tZ)(d.Z,{type:"title",color:"inherit",children:j.map(e=>{let{name:n,href:t}=e;return(0,i.tZ)(h.Z,{color:"inherit",children:(0,i.tZ)(g(),{href:t,children:n})},n)})})]})}),(0,i.tZ)("div",{css:(0,c.iv)(k()),children:r}),(0,i.tZ)(_,{style:{marginTop:0},children:(0,i.tZ)("div",{className:"container",children:(0,i.tZ)("span",{children:"Copyright \xa9 2017-2023 GSMLG - Powered by GSMLG Web."})})})]})};n.Z=o.forwardRef(w)}},function(e){e.O(0,[9187,520,9774,2888,179],function(){return e(e.s=4830)}),_N_E=e.O()}]);