(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{5778:function(e,t,r){"use strict";r.d(t,{j:function(){return c}});var a=r(1346),n=r(3981),i=r(2035),o=r(3202);let s={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},l={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},c=n.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:c=1,height:u=1,blur:m=1,far:h=10,resolution:f=512,smooth:v=!0,color:d="#000000",depthWrite:p=!1,renderOrder:g,...x},y)=>{let M=(0,o.z)(e=>e.scene),b=(0,o.z)(e=>e.gl),w=n.useRef(null);c*=Array.isArray(e)?e[0]:e||1,u*=Array.isArray(e)?e[1]:e||1;let[U,D,E,S,z,C,Z]=n.useMemo(()=>{let e=new i.WebGLRenderTarget(f,f),t=new i.WebGLRenderTarget(f,f);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new i.PlaneGeometry(c,u).rotateX(Math.PI/2),a=new i.Mesh(r),n=new i.MeshDepthMaterial;n.depthTest=n.depthWrite=!1,n.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new i.Color(d)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let o=new i.ShaderMaterial(s),m=new i.ShaderMaterial(l);return m.depthTest=o.depthTest=!1,[e,r,n,a,o,m,t]},[f,c,u,e,d]),P=e=>{S.visible=!0,S.material=z,z.uniforms.tDiffuse.value=U.texture,z.uniforms.h.value=1*e/256,b.setRenderTarget(Z),b.render(S,w.current),S.material=C,C.uniforms.tDiffuse.value=Z.texture,C.uniforms.v.value=1*e/256,b.setRenderTarget(U),b.render(S,w.current),S.visible=!1},j=0;return(0,o.A)(()=>{if(w.current&&(t===1/0||j<t)){let e=M.background;M.background=null;let r=M.overrideMaterial;M.overrideMaterial=E,b.setRenderTarget(U),b.render(M,w.current),M.overrideMaterial=r,P(m),v&&P(.4*m),b.setRenderTarget(null),M.background=e,j++}}),n.createElement("group",(0,a.Z)({"rotation-x":Math.PI/2},x,{ref:y}),n.createElement("mesh",{renderOrder:g,geometry:D,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},n.createElement("meshBasicMaterial",{map:U.texture,"map-encoding":b.outputEncoding,transparent:!0,opacity:r,depthWrite:p})),n.createElement("orthographicCamera",{ref:w,args:[-c/2,c/2,u/2,-u/2,0,h]}))})},4627:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/three-fiber/lambo",function(){return r(6739)}])},6739:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var a=r(3833),n=r(8526),i=r(3775),o=r(7636),s=r.n(o),l=r(9594),c=r(9541),u=r(2035),m=r(3981),h=r(8648),f=r(3442),v=r(4613),d=r(1346),p=r(5778);let g=m.forwardRef(function({children:e,disableX:t,disableY:r,disableZ:a,left:n,right:i,top:o,bottom:s,front:l,back:c,onCentered:h,precise:f=!0,...v},p){let g=m.useRef(null),x=m.useRef(null),y=m.useRef(null);return m.useLayoutEffect(()=>{x.current.matrixWorld.identity();let e=new u.Box3().setFromObject(y.current,f),m=new u.Vector3,v=new u.Sphere,d=e.max.x-e.min.x,p=e.max.y-e.min.y,M=e.max.z-e.min.z;e.getCenter(m),e.getBoundingSphere(v);let b=o?p/2:s?-p/2:0,w=n?-d/2:i?d/2:0,U=l?M/2:c?-M/2:0;x.current.position.set(t?0:-m.x+w,r?0:-m.y+b,a?0:-m.z+U),void 0!==h&&h({parent:g.current.parent,container:g.current,width:d,height:p,depth:M,boundingBox:e,boundingSphere:v,center:m,verticalAlignment:b,horizontalAlignment:w,depthAlignment:U})},[e]),m.useImperativeHandle(p,()=>g.current,[]),m.createElement("group",(0,d.Z)({ref:g},v),m.createElement("group",{ref:x},m.createElement("group",{ref:y},e)))});var x=r(3202);function y(e,t,r,a){let n=class extends u.ShaderMaterial{constructor(n={}){let i=Object.entries(e);super({uniforms:i.reduce((e,[t,r])=>{let a=u.UniformsUtils.clone({[t]:{value:r}});return{...e,...a}},{}),vertexShader:t,fragmentShader:r,...n}),this.key="",i.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),a&&a(this)}};return n.key=u.MathUtils.generateUUID(),n}let M=m.createContext(null),b=y({color:new u.Color,blend:2,alphaTest:.75,opacity:0,map:null},`varying vec2 vUv;
   void main() {
     gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
     vUv = uv;
   }`,`varying vec2 vUv;
   uniform sampler2D map;
   uniform vec3 color;
   uniform float opacity;
   uniform float alphaTest;
   uniform float blend;
   void main() {
     vec4 sampledDiffuseColor = texture2D(map, vUv);
     gl_FragColor = vec4(color * sampledDiffuseColor.r * blend, max(0.0, (1.0 - (sampledDiffuseColor.r + sampledDiffuseColor.g + sampledDiffuseColor.b) / alphaTest)) * opacity);
     #include <tonemapping_fragment>
     #include <encodings_fragment>
   }`),w=y({},"void main() { gl_Position = vec4((uv - 0.5) * 2.0, 1.0, 1.0); }","void main() { discard; }"),U=m.forwardRef(({children:e,temporal:t,frames:r=40,limit:a=1/0,blend:n=20,scale:i=10,opacity:o=1,alphaTest:s=.75,color:l="black",colorBlend:c=2,resolution:u=1024,toneMapped:h=!0,...f},v)=>{(0,x.e)({SoftShadowMaterial:b});let d=(0,x.z)(e=>e.gl),p=(0,x.z)(e=>e.scene),g=(0,x.z)(e=>e.camera),y=m.useRef(null),w=m.useRef(null),[U]=m.useState(()=>new E(d,p,u));m.useLayoutEffect(()=>{U.configure(y.current)},[]);let D=m.useMemo(()=>({lights:new Map,temporal:!!t,frames:Math.max(2,r),blend:Math.max(2,r===1/0?n:r),count:0,getMesh:()=>y.current,reset(){U.clear();let e=y.current.material;e.opacity=0,e.alphaTest=0,D.count=0},update(e=1){let t=y.current.material;D.temporal?(t.opacity=Math.min(o,t.opacity+o/D.blend),t.alphaTest=Math.min(s,t.alphaTest+s/D.blend)):(t.opacity=o,t.alphaTest=s),w.current.visible=!0,U.prepare();for(let r=0;r<e;r++)D.lights.forEach(e=>e.update()),U.update(g,D.blend);w.current.visible=!1,U.finish()}}),[U,g,p,t,r,n,o,s]);return m.useLayoutEffect(()=>{D.reset(),D.temporal||D.frames===1/0||D.update(D.blend)}),m.useImperativeHandle(v,()=>D,[D]),(0,x.A)(()=>{(D.temporal||D.frames===1/0)&&D.count<D.frames&&D.count<a&&(D.update(),D.count++)}),m.createElement("group",f,m.createElement("group",{traverse:()=>null,ref:w},m.createElement(M.Provider,{value:D},e)),m.createElement("mesh",{receiveShadow:!0,ref:y,scale:i,rotation:[-Math.PI/2,0,0]},m.createElement("planeGeometry",null),m.createElement("softShadowMaterial",{transparent:!0,depthWrite:!1,toneMapped:h,color:l,blend:c,map:U.progressiveLightMap2.texture})))}),D=m.forwardRef(({castShadow:e=!0,bias:t=.001,mapSize:r=512,size:a=5,near:n=.5,far:i=500,frames:o=1,position:s=[0,0,0],radius:l=1,amount:c=8,intensity:h=1,ambient:f=.5,...v},p)=>{let g=m.useRef(null),x=new u.Vector3(...s).length(),y=m.useContext(M),b=m.useCallback(()=>{let e;if(g.current)for(let t=0;t<g.current.children.length;t++)if(e=g.current.children[t],Math.random()>f)e.position.set(s[0]+u.MathUtils.randFloatSpread(l),s[1]+u.MathUtils.randFloatSpread(l),s[2]+u.MathUtils.randFloatSpread(l));else{let r=Math.acos(2*Math.random()-1)-Math.PI/2,a=2*Math.PI*Math.random();e.position.set(Math.cos(r)*Math.cos(a)*x,Math.abs(Math.cos(r)*Math.sin(a)*x),Math.sin(r)*x)}},[l,f,x,...s]),w=m.useMemo(()=>({update:b}),[b]);return m.useImperativeHandle(p,()=>w,[w]),m.useLayoutEffect(()=>{let e=g.current;return y&&y.lights.set(e.uuid,w),()=>void y.lights.delete(e.uuid)},[y,w]),m.createElement("group",(0,d.Z)({ref:g},v),Array.from({length:c},(o,s)=>m.createElement("directionalLight",{key:s,castShadow:e,"shadow-bias":t,"shadow-mapSize":[r,r],intensity:h/c},m.createElement("orthographicCamera",{attach:"shadow-camera",args:[-a,a,a,-a,n,i]}))))});class E{constructor(e,t,r=1024){this.renderer=e,this.res=r,this.scene=t,this.buffer1Active=!1,this.lights=[],this.meshes=[],this.object=null;let a=/(Android|iPad|iPhone|iPod)/g.test(navigator.userAgent)?u.HalfFloatType:u.FloatType;this.progressiveLightMap1=new u.WebGLRenderTarget(this.res,this.res,{type:a,encoding:e.outputEncoding}),this.progressiveLightMap2=new u.WebGLRenderTarget(this.res,this.res,{type:a,encoding:e.outputEncoding}),this.discardMat=new w,this.targetMat=new u.MeshPhongMaterial({shininess:0}),this.previousShadowMap={value:this.progressiveLightMap1.texture},this.averagingWindow={value:100},this.targetMat.onBeforeCompile=e=>{e.vertexShader="varying vec2 vUv;\n"+e.vertexShader.slice(0,-1)+"vUv = uv; gl_Position = vec4((uv - 0.5) * 2.0, 1.0, 1.0); }";let t=e.fragmentShader.indexOf("void main() {");e.fragmentShader=e.fragmentShader.replace("#include <clipping_planes_pars_fragment>","#include <clipping_planes_pars_fragment>\n#include <shadowmask_pars_fragment>\n"),e.fragmentShader="varying vec2 vUv;\n"+e.fragmentShader.slice(0,t)+"	uniform sampler2D previousShadowMap;\n	uniform float averagingWindow;\n"+e.fragmentShader.slice(t-1,-1)+`
vec3 texelOld = texture2D(previousShadowMap, vUv).rgb;
        gl_FragColor.rgb = mix(texelOld, gl_FragColor.rgb, 1.0/averagingWindow);
      }`,e.uniforms.previousShadowMap=this.previousShadowMap,e.uniforms.averagingWindow=this.averagingWindow}}clear(){this.renderer.setRenderTarget(this.progressiveLightMap1),this.renderer.clear(),this.renderer.setRenderTarget(this.progressiveLightMap2),this.renderer.clear(),this.lights=[],this.meshes=[],this.scene.traverse(e=>{e.geometry?this.meshes.push({object:e,material:e.material}):e.isLight&&this.lights.push({object:e,intensity:e.intensity})})}prepare(){this.lights.forEach(e=>e.object.intensity=0),this.meshes.forEach(e=>e.object.material=this.discardMat)}finish(){this.lights.forEach(e=>e.object.intensity=e.intensity),this.meshes.forEach(e=>e.object.material=e.material)}configure(e){this.object=e}update(e,t=100){if(!this.object)return;this.averagingWindow.value=t,this.object.material=this.targetMat;let r=this.buffer1Active?this.progressiveLightMap1:this.progressiveLightMap2,a=this.buffer1Active?this.progressiveLightMap2:this.progressiveLightMap1,n=this.scene.background;this.scene.background=null,this.renderer.setRenderTarget(r),this.previousShadowMap.value=a.texture,this.buffer1Active=!this.buffer1Active,this.renderer.render(this.scene,e),this.renderer.setRenderTarget(null),this.scene.background=n}}let S=e=>e&&e.isOrthographicCamera,z=e=>e&&e.isBox3,C=m.createContext(null);function Z({children:e,damping:t=6,fit:r,clip:a,observe:n,margin:i=1.2,eps:o=.01,onFit:s}){let l=m.useRef(null),{camera:c,invalidate:h,size:f,controls:v}=(0,x.z)(),d=v,p=m.useRef(s);function g(e,t){return Math.abs(e.x-t.x)<o&&Math.abs(e.y-t.y)<o&&Math.abs(e.z-t.z)<o}function y(e,t,r,a){e.x=u.MathUtils.damp(e.x,t.x,r,a),e.y=u.MathUtils.damp(e.y,t.y,r,a),e.z=u.MathUtils.damp(e.z,t.z,r,a)}p.current=s;let[M]=m.useState(()=>({animating:!1,focus:new u.Vector3,camera:new u.Vector3,zoom:1})),[b]=m.useState(()=>({focus:new u.Vector3,camera:new u.Vector3,zoom:1})),[w]=m.useState(()=>new u.Box3),U=m.useMemo(()=>{function e(){let e=w.getSize(new u.Vector3),t=w.getCenter(new u.Vector3),r=Math.max(e.x,e.y,e.z),a=S(c)?4*r:r/(2*Math.atan(Math.PI*c.fov/360)),n=S(c)?4*r:a/c.aspect;return{box:w,size:e,center:t,distance:i*Math.max(a,n)}}return{getSize:e,refresh(t){if(z(t))w.copy(t);else{let r=t||l.current;r.updateWorldMatrix(!0,!0),w.setFromObject(r)}if(w.isEmpty()){let a=c.position.length()||10;w.setFromCenterAndSize(new u.Vector3,new u.Vector3(a,a,a))}if((null==d?void 0:d.constructor.name)==="OrthographicTrackballControls"){let{distance:n}=e(),i=c.position.clone().sub(d.target).normalize().multiplyScalar(n),o=d.target.clone().add(i);c.position.copy(o)}return this},clip(){let{distance:t}=e();return d&&(d.maxDistance=10*t),c.near=t/100,c.far=100*t,c.updateProjectionMatrix(),d&&d.update(),h(),this},to({position:r,target:a}){M.camera.copy(c.position);let{center:n}=e();return b.camera.set(...r),a?b.focus.set(...a):b.focus.copy(n),t?M.animating=!0:c.position.set(...r),this},fit(){M.camera.copy(c.position),d&&M.focus.copy(d.target);let{center:r,distance:a}=e(),n=r.clone().sub(c.position).normalize().multiplyScalar(a);if(b.camera.copy(r).sub(n),b.focus.copy(r),S(c)){M.zoom=c.zoom;let o=0,s=0,l=[new u.Vector3(w.min.x,w.min.y,w.min.z),new u.Vector3(w.min.x,w.max.y,w.min.z),new u.Vector3(w.min.x,w.min.y,w.max.z),new u.Vector3(w.min.x,w.max.y,w.max.z),new u.Vector3(w.max.x,w.max.y,w.max.z),new u.Vector3(w.max.x,w.max.y,w.min.z),new u.Vector3(w.max.x,w.min.y,w.max.z),new u.Vector3(w.max.x,w.min.y,w.min.z)];for(let m of(r.applyMatrix4(c.matrixWorldInverse),l))m.applyMatrix4(c.matrixWorldInverse),o=Math.max(o,Math.abs(m.y-r.y)),s=Math.max(s,Math.abs(m.x-r.x));o*=2,s*=2;let f=(c.top-c.bottom)/o,v=(c.right-c.left)/s;b.zoom=Math.min(f,v)/i,t||(c.zoom=b.zoom,c.updateProjectionMatrix())}return t?M.animating=!0:(c.position.copy(b.camera),c.lookAt(b.focus),d&&(d.target.copy(b.focus),d.update())),p.current&&p.current(this.getSize()),h(),this}}},[w,c,d,i,t,h]);m.useLayoutEffect(()=>{if(d){let e=()=>M.animating=!1;return d.addEventListener("start",e),()=>d.removeEventListener("start",e)}},[d]);let D=m.useRef(0);return m.useLayoutEffect(()=>{(n||0==D.current++)&&(U.refresh(),r&&U.fit(),a&&U.clip())},[f,a,r,n,c,d]),(0,x.A)((e,r)=>{M.animating&&(y(M.focus,b.focus,t,r),y(M.camera,b.camera,t,r),M.zoom=u.MathUtils.damp(M.zoom,b.zoom,t,r),c.position.copy(M.camera),S(c)&&(c.zoom=M.zoom,c.updateProjectionMatrix()),d?(d.target.copy(M.focus),d.update()):c.lookAt(M.focus),h(),(!S(c)||Math.abs(M.zoom-b.zoom)<o)&&(S(c)||g(M.camera,b.camera))&&(!d||g(M.focus,b.focus))&&(M.animating=!1))}),m.createElement("group",{ref:l},m.createElement(C.Provider,{value:U},e))}let P={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}};function j({radius:e,adjustCamera:t}){let r=m.useContext(C);return m.useEffect(()=>{t&&r.refresh().clip().fit()},[e,t]),null}function _({children:e,adjustCamera:t=!0,intensity:r=.5,shadows:a="contact",environment:n="city",preset:i="rembrandt",...o}){var s,l,c,u,h,f,x,y;let M="string"==typeof i?P[i]:i,[{radius:b,height:w},E]=m.useState({radius:0,width:0,height:0,depth:0}),S=null!==(s=null==a?void 0:a.bias)&&void 0!==s?s:-.0001,z=null!==(l=null==a?void 0:a.normalBias)&&void 0!==l?l:0,C=null!==(c=null==a?void 0:a.size)&&void 0!==c?c:1024,_=null!==(u=null==a?void 0:a.offset)&&void 0!==u?u:0,T="contact"===a||(null==a?void 0:a.type)==="contact",L="accumulative"===a||(null==a?void 0:a.type)==="accumulative",k={..."object"==typeof a?a:{}};return m.createElement(m.Fragment,null,m.createElement("ambientLight",{intensity:r/3}),m.createElement("spotLight",{penumbra:1,position:[M.main[0]*b,M.main[1]*b,M.main[2]*b],intensity:2*r,castShadow:!!a,"shadow-bias":S,"shadow-normalBias":z,"shadow-mapSize":C}),m.createElement("pointLight",{position:[M.fill[0]*b,M.fill[1]*b,M.fill[2]*b],intensity:r}),m.createElement(Z,(0,d.Z)({fit:!!t,clip:!!t,margin:Number(t),observe:!0},o),m.createElement(j,{radius:b,adjustCamera:t}),m.createElement(g,{position:[0,_/2,0],onCentered:({width:e,height:t,depth:r,boundingSphere:a,...n})=>E({radius:a.radius,width:e,height:t,depth:r})},e)),m.createElement("group",{position:[0,-w/2-_/2,0]},T&&m.createElement(p.j,(0,d.Z)({scale:4*b,far:b,blur:2},k)),L&&m.createElement(U,(0,d.Z)({temporal:!0,frames:100,alphaTest:.9,toneMapped:!0,scale:4*b},k),m.createElement(D,{amount:null!==(h=k.amount)&&void 0!==h?h:8,radius:null!==(f=k.radius)&&void 0!==f?f:b,ambient:null!==(x=k.ambient)&&void 0!==x?x:.5,intensity:null!==(y=k.intensity)&&void 0!==y?y:1,position:[M.main[0]*b,M.main[1]*b,M.main[2]*b],size:4*b,bias:-S,mapSize:C}))),n&&m.createElement(v.qA,n?"string"==typeof n?{preset:n}:n:null))}var T=r(9851);function L(e){let{scene:t,nodes:r,materials:a}=(0,f.L)("/webgl/lambo.glb");return(0,m.useEffect)(()=>{t.traverse(e=>"Mesh"===e.type&&(e.receiveShadow=!0,e.castShadow=!0,!0)),Object.assign(r.wheel003_020_2_Chrome_0.material,{metalness:1,roughness:.4,color:new u.Color("black")}),Object.assign(a.WhiteCar,{roughness:0,metalness:.25,emissive:new u.Color("#500000"),envMapIntensity:.5})},[t,r,a]),(0,c.jsx)("primitive",{object:t,...e})}function k(){return(0,c.jsxs)(h.Xz,{dpr:[1,2],shadows:!0,camera:{fov:45},children:[(0,c.jsx)("color",{attach:"background",args:["#101010"]}),(0,c.jsx)("fog",{attach:"fog",args:["#101010",10,50]}),(0,c.jsxs)(m.Suspense,{fallback:null,children:[(0,c.jsx)(v.qA,{path:"/webgl/cube"}),(0,c.jsx)(_,{environment:null,intensity:1,contactShadowOpacity:1,shadowBias:-.0015,children:(0,c.jsx)(L,{scale:.01})})]}),(0,c.jsxs)("mesh",{"rotation-x":-Math.PI/2,scale:100,children:[(0,c.jsx)("planeGeometry",{}),(0,c.jsx)("meshStandardMaterial",{color:"#101010",transparent:!0,depthWrite:!1})]}),(0,c.jsx)(T.z,{autoRotate:!0,enableZoom:!1,enablePan:!1,minPolarAngle:Math.PI/2.8,maxPolarAngle:Math.PI/2.8})]})}function R(){let e=(0,a.Z)(["\n          flex: 1 1 auto;\n        "]);return R=function(){return e},e}var A=function(){return(0,n.BX)(l.Z,{children:[(0,n.BX)(s(),{children:[(0,n.tZ)("title",{children:"Three Fiber Lambo"}),(0,n.tZ)("meta",{name:"description",content:"Description of Lambo"})]}),(0,n.tZ)("div",{css:(0,i.iv)(R()),children:(0,n.tZ)(k,{})})]})}},9594:function(e,t,r){"use strict";var a=r(3833),n=r(8526),i=r(3981),o=r(5725),s=r(3775),l=r(5412),c=r(8440),u=r(1522),m=r(1169),h=r(3825),f=r(4237),v=r(8692),d=r(4026),p=r.n(d),g=r(2866),x=r(7741);function y(){let e=(0,a.Z)(["\n              margin: 0 2em;\n              display: ",";\n            "]);return y=function(){return e},e}let M=(0,o.ZP)("section")(()=>({display:"flex",minHeight:"100vh",flexDirection:"column",flex:"1 1 auto"})),b=(0,o.ZP)("section")(()=>({display:"flex",flex:"1 1 auto"})),w=(0,o.ZP)("footer")(e=>{let{theme:t}=e;return{lineHeight:"2em",textAlign:"center",marginTop:"0.5em",color:t.palette.getContrastText(t.palette.primary.main),backgroundColor:t.palette.primary.main}}),U=(0,o.ZP)("div")(e=>{let{status:t}=e;return{display:"inline-block",width:16,height:16,borderRadius:8,margin:"0 8px",backgroundColor:t.color}}),D=[{name:"Home",href:"/"},{name:"Blog",href:"/blogs"},{name:"Presentation",href:"/presentations"},{name:"Tool",href:"/tools"}],E=(e,t)=>{let{children:r}=e,[a,o]=i.useState(!0);i.useEffect(()=>{o("www.gsmlg.cn"===window.location.hostname)},[]);let d=(0,g.sV)(),[E,S]=i.useState({color:"transperant"}),z=(0,x.p3)(),C=(0,x.dU)();i.useEffect(()=>{if(z(),d){let e=()=>{let e=d.connectionState();switch(e){case"connecting":S({color:"#ff0"});break;case"open":S({color:"#0f0"});break;case"closing":S({color:"#0ff"});break;default:S({color:"#f00"})}};e();let t=[d.onOpen(e),d.onClose(e),d.onError(e),d.onMessage(e)];return()=>{d.off(t)}}return()=>{}},[d,z]);let Z=i.useCallback(()=>{Notification.requestPermission()},[]);return(0,n.BX)(M,{ref:t,children:[(0,n.tZ)(l.Z,{position:"static",children:(0,n.BX)(c.Z,{children:[(0,n.tZ)(U,{status:E}),(0,n.tZ)(h.Z,{onClick:Z,color:"inherit","aria-label":"Menu",size:"large",children:(0,n.tZ)(v.Z,{badgeContent:C,children:(0,n.tZ)(f.Z,{})})}),(0,n.tZ)(u.Z,{type:"title",color:"inherit",children:D.map(e=>{let{name:t,href:r}=e;return(0,n.tZ)(m.Z,{color:"inherit",children:(0,n.tZ)(p(),{href:r,children:t})},t)})})]})}),(0,n.tZ)(b,{children:r}),(0,n.tZ)(w,{style:{marginTop:0},children:(0,n.BX)("div",{className:"container",children:[(0,n.tZ)("span",{id:"icp-info",css:(0,s.iv)(y(),a?"inline":"none"),children:"京ICP备20014476号-2"}),(0,n.tZ)("span",{children:"Copyright \xa9 2017-2022 GSMLG - Powered by GSMLG Web."})]})})]})};t.Z=i.forwardRef(E)}},function(e){e.O(0,[564,483,648,851,823,774,888,179],function(){return e(e.s=4627)}),_N_E=e.O()}]);