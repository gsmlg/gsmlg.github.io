(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7552],{7050:function(e,t,n){"use strict";var r=n(5034);t.ZP=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(3981)),i=r(n(4768)),l=r(n(314)),s=r(n(1459)),o=r(n(5173)),u=r(n(4218)),c=r(n(6532)),d=r(n(4740)),f=n(9541);function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}let h=a.forwardRef(({host:e,...t},n)=>(0,f.jsx)(i.default,{...t,ref:n,children:(0,f.jsxs)(l.default,{children:[(0,f.jsx)(s.default,{avatar:(0,f.jsx)(u.default,{"aria-label":"Recipe",children:e.name[0]}),title:e.name,subheader:e.host}),(0,f.jsx)(d.default,{}),(0,f.jsx)(o.default,{children:(0,f.jsxs)(c.default,{component:"div",children:[(0,f.jsx)("span",{children:"Delay: "}),(0,f.jsxs)("span",{children:[e.delay,"ms"]}),(0,f.jsx)(d.default,{}),(0,f.jsx)("span",{children:"Min Delay: "}),(0,f.jsxs)("span",{children:[e.minDelay,"ms"]}),(0,f.jsx)(d.default,{}),(0,f.jsx)("span",{children:"Max Delay: "}),(0,f.jsxs)("span",{children:[e.maxDelay,"ms"]}),(0,f.jsx)(d.default,{}),(0,f.jsx)("span",{children:"Average Delay: "}),(0,f.jsxs)("span",{children:[e.averageDelay,"ms"]}),(0,f.jsx)(d.default,{}),(0,f.jsx)("span",{children:"Package Lost: "}),(0,f.jsxs)("span",{children:[e.lost,"%"]}),(0,f.jsx)(d.default,{}),(0,f.jsx)("span",{children:"Times: "}),(0,f.jsx)("span",{children:e.times})]})})]})}));h.displayName="NodeCard",t.ZP=h},4218:function(e,t,n){"use strict";n.r(t),n.d(t,{avatarClasses:function(){return a.Z},default:function(){return r.Z},getAvatarUtilityClass:function(){return a.$}});var r=n(1651),a=n(4799)},314:function(e,t,n){"use strict";n.r(t),n.d(t,{cardClasses:function(){return a.Z},default:function(){return r.Z},getCardUtilityClass:function(){return a.y}});var r=n(5829),a=n(416)},5173:function(e,t,n){"use strict";n.r(t),n.d(t,{cardContentClasses:function(){return a.Z},default:function(){return r.Z},getCardContentUtilityClass:function(){return a.N}});var r=n(8656),a=n(319)},1459:function(e,t,n){"use strict";n.r(t),n.d(t,{cardHeaderClasses:function(){return a.Z},default:function(){return r.Z},getCardHeaderUtilityClass:function(){return a.J}});var r=n(5141),a=n(2462)},4740:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r.Z},dividerClasses:function(){return a.Z},getDividerUtilityClass:function(){return a.V}});var r=n(9073),a=n(8919)},4768:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r.Z},getPaperUtilityClass:function(){return a.J},paperClasses:function(){return a.Z}});var r=n(4169),a=n(3080)},6532:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r.Z},getTypographyUtilityClass:function(){return a.f},typographyClasses:function(){return a.Z}});var r=n(2681),a=n(5042)},8056:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/vultr-latency",function(){return n(7976)}])},7976:function(e,t,n){"use strict";n.r(t);var r=n(9541),a=n(3981),i=n(4544),l=n(8506),s=n.n(l),o=n(425),u=n(6672),c=n(7050);let d=[{host:"fra-de-ping.vultr.com",name:"法兰克福"},{host:"ams-nl-ping.vultr.com",name:"阿姆斯特丹"},{host:"par-fr-ping.vultr.com",name:"巴黎"},{host:"lon-gb-ping.vultr.com",name:"伦敦"},{host:"sgp-ping.vultr.com",name:"新加坡"},{host:"hnd-jp-ping.vultr.com",name:"东京"},{host:"nj-us-ping.vultr.com",name:"新泽西"},{host:"il-us-ping.vultr.com",name:"芝加哥"},{host:"ga-us-ping.vultr.com",name:"亚特兰大"},{host:"wa-us-ping.vultr.com",name:"西雅图"},{host:"fl-us-ping.vultr.com",name:"迈阿密"},{host:"tx-us-ping.vultr.com",name:"达拉斯"},{host:"sjo-ca-us-ping.vultr.com",name:"硅谷"},{host:"lax-ca-us-ping.vultr.com",name:"洛杉矶"},{host:"syd-au-ping.vultr.com",name:"悉尼"}].map(e=>{let{name:t,host:n}=e;return{id:n.replace("-ping.vultr.com",""),ping:[],pending:!1,name:t,host:n,times:0,lost:0,delay:-1,minDelay:-1,maxDelay:-1,averageDelay:-1}}),f=(0,i.ZP)(o.ZP)(e=>{let{theme:t}=e;return{padding:t.spacing(3)}});t.default=function(){let[e,t]=(0,a.useState)(d);return(0,a.useEffect)(()=>{let n=!1,r=async()=>{e:for(;;)for(let r of d){let a;if(n)break e;let{host:i,id:l}=r;try{let t=new Request("//".concat(i),{method:"HEAD"}),n=Date.now();await fetch(t);let r=Date.now()-n;a=e.reduce((e,t)=>(l===t.id&&(t.pending=!1,t.ping.push(r)),e.concat(t)),[])}catch(t){a=e.reduce((e,t)=>(l===t.id&&(t.pending=!1,t.ping.push(NaN)),e.concat(t)),[])}let s=a.map(e=>{let{ping:t}=e,n=t[t.length-1],r=t.filter(e=>!Number.isNaN(e)),a=r.reduce((e,t)=>e+t,0)/r.length;return{...e,delay:null==n?NaN:n,lost:Math.round((t.length-r.length)/t.length*100),times:t.length,minDelay:Math.min(...r),maxDelay:Math.max(...r),averageDelay:Number.isNaN(a)?NaN:Math.round(a)}});s.sort((e,t)=>{let{averageDelay:n}=e,{averageDelay:r}=t;return Number.isNaN(n)?1:n===r?0:n>r?1:-1}),t(s),await new Promise(e=>{setTimeout(e,1e3)})}};return r(),()=>{n=!0}},[]),(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"VultrNetworks"}),(0,r.jsx)("meta",{name:"description",content:"Description of VultrNetworks"})]}),(0,r.jsx)(f,{container:!0,justifyContent:"center",spacing:6,children:(0,r.jsx)(o.ZP,{item:!0,md:11,sm:2,children:(0,r.jsx)(o.ZP,{container:!0,spacing:6,justifyContent:"center",children:e.map(e=>(0,r.jsx)(o.ZP,{item:!0,md:3,sm:4,children:(0,r.jsx)(c.ZP,{host:e})},e.host))})})})]})}},6672:function(e,t,n){"use strict";var r=n(3833),a=n(8409),i=n(3981),l=n(4544),s=n(4982),o=n(8490),u=n(3472),c=n(2681),d=n(6862),f=n(7262),p=n(2531),h=n(9469),m=n(6676),g=n.n(m),y=n(8718),v=n(1785);function x(){let e=(0,r.Z)(["\n        display: flex;\n        min-height: 100vh;\n        width: 100%;\n        flex: 1 1 auto;\n        flex-direction: column;\n      "]);return x=function(){return e},e}function Z(){let e=(0,r.Z)(["\n              display: inline-block;\n              width: 16px;\n              height: 16px;\n              borderradius: 8px;\n              margin: 0 8px;\n              backgroundcolor: ",";\n            "]);return Z=function(){return e},e}function j(){let e=(0,r.Z)(["\n          display: flex;\n          flex: 1 1 auto;\n        "]);return j=function(){return e},e}let b=(0,l.ZP)("footer")(e=>{let{theme:t}=e;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:t.palette.getContrastText(t.palette.primary.main),backgroundColor:t.palette.primary.main}});(0,l.ZP)("div")(e=>{let{status:t}=e;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:t.color}});let C=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"}],w=(e,t)=>{let{children:r}=e,l=(0,y.sV)(),[m,w]=i.useState({color:"transperant"}),N=(0,v.p3)(),P=(0,v.dU)();i.useEffect(()=>{if(N(),l){let e=()=>{let e=l.connectionState();switch(e){case"connecting":w({color:"#ff0"});break;case"open":w({color:"#0f0"});break;case"closing":w({color:"#0ff"});break;default:w({color:"#f00"})}};e();let t=[l.onOpen(e),l.onClose(e),l.onError(e),l.onMessage(e)];return()=>{l.off(t)}}return()=>{}},[l,N]);let D=i.useCallback(()=>{Notification.requestPermission(),n.e(7990).then(n.bind(n,7990)).then(e=>{let{figlet:t}=e;console.log(t("Best in the World!"))})},[]);return(0,a.BX)("main",{ref:t,css:(0,s.iv)(x()),children:[(0,a.tZ)(o.Z,{position:"static",children:(0,a.BX)(u.Z,{children:[(0,a.tZ)("div",{css:(0,s.iv)(Z(),m.color)}),(0,a.tZ)(f.Z,{onClick:D,color:"inherit","aria-label":"Menu",size:"large",children:(0,a.tZ)(h.Z,{badgeContent:P,children:(0,a.tZ)(p.Z,{})})}),(0,a.tZ)(c.Z,{type:"title",color:"inherit",children:C.map(e=>{let{name:t,href:n}=e;return(0,a.tZ)(d.Z,{color:"inherit",children:(0,a.tZ)(g(),{href:n,children:t})},t)})})]})}),(0,a.tZ)("div",{css:(0,s.iv)(j()),children:r}),(0,a.tZ)(b,{style:{marginTop:0},children:(0,a.tZ)("div",{className:"container",children:(0,a.tZ)("span",{children:"Copyright \xa9 2017-2023 GSMLG - Powered by GSMLG Web."})})})]})};t.Z=i.forwardRef(w)}},function(e){e.O(0,[9187,425,4722,9774,2888,179],function(){return e(e.s=8056)}),_N_E=e.O()}]);