(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8196],{2517:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[slug]",function(){return t(266)}])},266:function(e,n,t){"use strict";t.a(e,async function(e,r){try{t.r(n),t.d(n,{__N_SSG:function(){return x}});var i=t(3833),o=t(8409),l=t(3981),c=t(8506),a=t.n(c),d=t(4169),s=t(2681),u=t(9073),f=t(4982),h=t(3042),m=t(4120),p=t(3570);t(2112);var Z=t(2751),g=t(6672),b=t(8222),v=t(2287);t(3671);var y=e([g]);function k(){let e=(0,i.Z)(["\n              ","\n            "]);return k=function(){return e},e}g=(y.then?(await y)():y)[0];var x=!0;n.default=function(e){let{blog:n,darkCss:t,lightCss:r,slug:i}=e,c=l.useRef(),y=(0,v.tJ)(),x="dark"===y;return l.useEffect(()=>{console.log((0,b.e)(i))},[i]),l.useEffect(()=>{Z.Z.initialize({theme:x?"dark":"default",startOnLoad:!1})},[x]),l.useEffect(()=>{if(c.current){let e=e=>e.replace("&gt;",">").replace("&lt;","<"),n=c.current.querySelectorAll("code.language-mermaid"),t=document.createElement("div");document.body.appendChild(t),t.style.display="none",t.id="mermaid-wrap";for(let r=0,i=n.length;r<i;r+=1){let i=document.createElement("div");i.id="mermaid-".concat(r),t.appendChild(i);let o=n[r],l=o.innerText;Z.Z.mermaidAPI.render("mermaid-".concat(r),e(l),o)}document.body.removeChild(t)}},[c]),(0,o.BX)(g.Z,{children:[(0,o.BX)(a(),{children:[(0,o.tZ)("title",{children:null==n?void 0:n.title}),(0,o.tZ)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.BX)(d.Z,{elevation:4,css:e=>({flex:1,padding:e.spacing(3),margin:e.spacing(3)}),children:[(0,o.BX)("header",{children:[(0,o.tZ)(s.Z,{component:"h1",children:n.title}),(0,o.BX)(s.Z,{component:"div",children:["Author:",n.author]}),(0,o.BX)(s.Z,{component:"div",children:["Created At:",n.date]})]}),(0,o.tZ)(u.Z,{}),(0,o.tZ)(s.Z,{className:"blog-content",component:"section",ref:c,children:(0,o.tZ)(h.D,{css:(0,f.iv)(k(),"dark"===y?t:r),remarkPlugins:[m.Z],rehypePlugins:[[p.Z,{ignoreMissing:!0}]],children:n.content})})]})]})},r()}catch(e){r(e)}})},6672:function(e,n,t){"use strict";t.a(e,async function(e,r){try{var i=t(3833),o=t(8409),l=t(3981),c=t(4544),a=t(4982),d=t(8490),s=t(3472),u=t(2681),f=t(6862),h=t(7262),m=t(2531),p=t(9469),Z=t(6676),g=t.n(Z),b=t(8222),v=t(8718),y=t(1785);function k(){let e=(0,i.Z)(["\n        display: flex;\n        min-height: 100vh;\n        width: 100%;\n        flex: 1 1 auto;\n        flex-direction: column;\n      "]);return k=function(){return e},e}function x(){let e=(0,i.Z)(["\n              display: inline-block;\n              width: 16px;\n              height: 16px;\n              borderradius: 8px;\n              margin: 0 8px;\n              backgroundcolor: ",";\n            "]);return x=function(){return e},e}function _(){let e=(0,i.Z)(["\n          display: flex;\n          flex: 1 1 auto;\n        "]);return _=function(){return e},e}let e=(0,c.ZP)("footer")(e=>{let{theme:n}=e;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:n.palette.getContrastText(n.palette.primary.main),backgroundColor:n.palette.primary.main}});(0,c.ZP)("div")(e=>{let{status:n}=e;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:n.color}});let w=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"}],C=(n,t)=>{let{children:r}=n,i=(0,v.sV)(),[c,Z]=l.useState({color:"transperant"}),C=(0,y.p3)(),E=(0,y.dU)();l.useEffect(()=>{if(console.log((0,b.e)("Best in the World!")),C(),i){let e=()=>{let e=i.connectionState();switch(e){case"connecting":Z({color:"#ff0"});break;case"open":Z({color:"#0f0"});break;case"closing":Z({color:"#0ff"});break;default:Z({color:"#f00"})}};e();let n=[i.onOpen(e),i.onClose(e),i.onError(e),i.onMessage(e)];return()=>{i.off(n)}}return()=>{}},[i,C]);let B=l.useCallback(()=>{Notification.requestPermission()},[]);return(0,o.BX)("main",{ref:t,css:(0,a.iv)(k()),children:[(0,o.tZ)(d.Z,{position:"static",children:(0,o.BX)(s.Z,{children:[(0,o.tZ)("div",{css:(0,a.iv)(x(),c.color)}),(0,o.tZ)(h.Z,{onClick:B,color:"inherit","aria-label":"Menu",size:"large",children:(0,o.tZ)(p.Z,{badgeContent:E,children:(0,o.tZ)(m.Z,{})})}),(0,o.tZ)(u.Z,{type:"title",color:"inherit",children:w.map(e=>{let{name:n,href:t}=e;return(0,o.tZ)(f.Z,{color:"inherit",children:(0,o.tZ)(g(),{href:t,children:n})},n)})})]})}),(0,o.tZ)("div",{css:(0,a.iv)(_()),children:r}),(0,o.tZ)(e,{style:{marginTop:0},children:(0,o.tZ)("div",{className:"container",children:(0,o.tZ)("span",{children:"Copyright \xa9 2017-2023 GSMLG - Powered by GSMLG Web."})})})]})};n.Z=l.forwardRef(C),r()}catch(e){r(e)}})}},function(e){e.O(0,[2709,6215,9774,2888,179],function(){return e(e.s=2517)}),_N_E=e.O()}]);