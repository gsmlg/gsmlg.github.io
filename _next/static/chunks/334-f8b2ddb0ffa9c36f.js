"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{6334:function(e,t,n){n.d(t,{qA:function(){return v}});var r=n(7462),o=n(7294),a=n(4917),i=n(9477);class s extends i.DataTextureLoader{constructor(e){super(e),this.type=i.HalfFloatType}parse(e){const t=function(e,t){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(t||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(t||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(t||""));break;default:console.error("THREE.RGBELoader: Error: "+(t||""))}return-1},n=function(e,t,n){t=t||1024;let r=e.pos,o=-1,a=0,i="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(o=s.indexOf("\n"))&&a<t&&r<e.byteLength;)i+=s,a+=s.length,r+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<o&&(!1!==n&&(e.pos+=a+o+1),i+s.slice(0,o))},r=function(e,t,n,r){const o=e[t+3],a=Math.pow(2,o-128)/255;n[r+0]=e[t+0]*a,n[r+1]=e[t+1]*a,n[r+2]=e[t+2]*a,n[r+3]=1},o=function(e,t,n,r){const o=e[t+3],a=Math.pow(2,o-128)/255;n[r+0]=i.DataUtils.toHalfFloat(Math.min(e[t+0]*a,65504)),n[r+1]=i.DataUtils.toHalfFloat(Math.min(e[t+1]*a,65504)),n[r+2]=i.DataUtils.toHalfFloat(Math.min(e[t+2]*a,65504)),n[r+3]=i.DataUtils.toHalfFloat(1)},a=new Uint8Array(e);a.pos=0;const s=function(e){const r=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*FORMAT=(\S+)\s*$/,i=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,s={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let c,l;if(e.pos>=e.byteLength||!(c=n(e)))return t(1,"no header found");if(!(l=c.match(/^#\?(\S+)/)))return t(3,"bad initial token");for(s.valid|=1,s.programtype=l[1],s.string+=c+"\n";c=n(e),!1!==c;)if(s.string+=c+"\n","#"!==c.charAt(0)){if((l=c.match(r))&&(s.gamma=parseFloat(l[1])),(l=c.match(o))&&(s.exposure=parseFloat(l[1])),(l=c.match(a))&&(s.valid|=2,s.format=l[1]),(l=c.match(i))&&(s.valid|=4,s.height=parseInt(l[1],10),s.width=parseInt(l[2],10)),2&s.valid&&4&s.valid)break}else s.comments+=c+"\n";return 2&s.valid?4&s.valid?s:t(3,"missing image size specifier"):t(3,"missing format specifier")}(a);if(-1!==s){const e=s.width,n=s.height,c=function(e,n,r){const o=n;if(o<8||o>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(o!==(e[2]<<8|e[3]))return t(3,"wrong scanline width");const a=new Uint8Array(4*n*r);if(!a.length)return t(4,"unable to allocate buffer space");let i=0,s=0;const c=4*o,l=new Uint8Array(4),u=new Uint8Array(c);let d=r;for(;d>0&&s<e.byteLength;){if(s+4>e.byteLength)return t(1);if(l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],2!=l[0]||2!=l[1]||(l[2]<<8|l[3])!=o)return t(3,"bad rgbe scanline format");let n,r=0;for(;r<c&&s<e.byteLength;){n=e[s++];const o=n>128;if(o&&(n-=128),0===n||r+n>c)return t(3,"bad scanline data");if(o){const t=e[s++];for(let e=0;e<n;e++)u[r++]=t}else u.set(e.subarray(s,s+n),r),r+=n,s+=n}const f=o;for(let e=0;e<f;e++){let t=0;a[i]=u[e+t],t+=o,a[i+1]=u[e+t],t+=o,a[i+2]=u[e+t],t+=o,a[i+3]=u[e+t],i+=4}d--}return a}(a.subarray(a.pos),e,n);if(-1!==c){let t,a,l,u;switch(this.type){case i.FloatType:u=c.length/4;const e=new Float32Array(4*u);for(let t=0;t<u;t++)r(c,4*t,e,4*t);t=e,l=i.FloatType;break;case i.HalfFloatType:u=c.length/4;const n=new Uint16Array(4*u);for(let t=0;t<u;t++)o(c,4*t,n,4*t);t=n,l=i.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:e,height:n,data:t,header:s.string,gamma:s.gamma,exposure:s.exposure,format:a,type:l}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,r){return super.load(e,(function(e,n){switch(e.type){case i.FloatType:case i.HalfFloatType:e.encoding=i.LinearEncoding,e.minFilter=i.LinearFilter,e.magFilter=i.LinearFilter,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,n)}),n,r)}}const c={sunset:"venice/venice_sunset_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",night:"dikhololo/dikhololo_night_1k.hdr",warehouse:"empty-wharehouse/empty_warehouse_01_1k.hdr",forest:"forrest-slope/forest_slope_1k.hdr",apartment:"lebombo/lebombo_1k.hdr",studio:"studio-small-3/studio_small_03_1k.hdr",city:"potsdamer-platz/potsdamer_platz_1k.hdr",park:"rooitou/rooitou_park_1k.hdr",lobby:"st-fagans/st_fagans_interior_1k.hdr"};function l(e){const t=e+"BufferGeometry";return o.forwardRef((({args:e,children:n,...a},i)=>o.createElement("mesh",(0,r.Z)({ref:i},a),o.createElement(t,{attach:"geometry",args:e}),n)))}l("box"),l("circle"),l("cone"),l("cylinder"),l("sphere"),l("plane"),l("tube"),l("torus"),l("torusKnot"),l("tetrahedron"),l("ring"),l("polyhedron");const u=l("icosahedron"),d=(l("octahedron"),l("dodecahedron"),l("extrude"),l("lathe"),l("capsule"),e=>{return(t=e).current&&t.current.isScene?e.current:e;var t});function f({scene:e,background:t=!1,map:n}){const r=(0,a.w)((e=>e.scene));return o.useLayoutEffect((()=>{if(n){const o=d(e||r),a=o.background,i=o.environment;return"only"!==t&&(o.environment=n),t&&(o.background=n),()=>{"only"!==t&&(o.environment=i),t&&(o.background=a)}}}),[r,e,n,t]),null}function m({files:e=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:t="",preset:n,encoding:r,extensions:o}){if(n){if(!(n in c))throw new Error("Preset must be one of: "+Object.keys(c).join(", "));e=c[n],t="https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/"}const l=Array.isArray(e),u=l?i.CubeTextureLoader:s,d=(0,a.z)(u,l?[e]:e,(e=>{e.setPath(t),o&&o(e)})),f=l?d[0]:d;return f.mapping=l?i.CubeReflectionMapping:i.EquirectangularReflectionMapping,f.encoding=(null!==r&&void 0!==r?r:l)?i.sRGBEncoding:i.LinearEncoding,f}function p({background:e=!1,scene:t,...n}){const r=m(n),i=(0,a.w)((e=>e.scene));return o.useLayoutEffect((()=>{const n=d(t||i),o=n.background,a=n.environment;return"only"!==e&&(n.environment=r),e&&(n.background=r),()=>{"only"!==e&&(n.environment=a),e&&(n.background=o)}}),[r,e,t,i]),null}function h({children:e,near:t=1,far:n=1e3,resolution:r=256,frames:s=1,map:c,background:l=!1,scene:u,files:m,path:h,preset:g,extensions:v}){const E=(0,a.w)((e=>e.gl)),b=(0,a.w)((e=>e.scene)),y=o.useRef(null),[k]=o.useState((()=>new i.Scene)),_=o.useMemo((()=>{const e=new i.WebGLCubeRenderTarget(r);return e.texture.type=i.HalfFloatType,e}),[r]);o.useLayoutEffect((()=>{1===s&&y.current.update(E,k);const e=d(u||b),t=e.background,n=e.environment;return"only"!==l&&(e.environment=_.texture),l&&(e.background=_.texture),()=>{"only"!==l&&(e.environment=n),l&&(e.background=t)}}),[e,k,_.texture,u,b,l,s,E]);let w=1;return(0,a.x)((()=>{(s===1/0||w<s)&&(y.current.update(E,k),w++)})),o.createElement(o.Fragment,null,(0,a.g)(o.createElement(o.Fragment,null,e,o.createElement("cubeCamera",{ref:y,args:[t,n,_]}),m||g?o.createElement(p,{background:!0,files:m,preset:g,path:h,extensions:v}):c?o.createElement(f,{background:!0,map:c,extensions:v}):null),k))}function g(e){var t,n,a,s;const c=m(e),l=e.map||c,d=(p=l)&&p.isCubeTexture;var p;const h=o.useMemo((()=>{var e,t;const n=(null!==(e=d?null==(t=l.image[0])?void 0:t.width:l.image.width)&&void 0!==e?e:1024)/4,r=Math.floor(Math.log2(n)),o=Math.pow(2,r),a=3*Math.max(o,112);return[d?"#define ENVMAP_TYPE_CUBE":"","#define CUBEUV_TEXEL_WIDTH "+1/a,"#define CUBEUV_TEXEL_HEIGHT "+1/(4*o),`#define CUBEUV_MAX_MIP ${r}.0`,""]}),[]),g=o.useMemo((()=>h.join("\n")+"#define GLSLIFY 1\n#define ENVMAP_TYPE_CUBE_UV\nvarying vec3 vWorldPosition;uniform float radius;uniform float height;\n#ifdef ENVMAP_TYPE_CUBE\nuniform samplerCube cubemap;\n#else\nuniform sampler2D cubemap;\n#endif\nfloat diskIntersectWithBackFaceCulling(in vec3 ro,in vec3 rd,vec3 c,vec3 n,float r){float d=dot(rd,n);if(d>0.0)return 1e6;vec3 o=ro-c;float t=-dot(n,o)/d;vec3 q=o+rd*t;return(dot(q,q)<r*r)? t : 1e6;}float sphereIntersect(in vec3 ro,in vec3 rd,in vec3 ce,float ra){vec3 oc=ro-ce;float b=dot(oc,rd);float c=dot(oc,oc)-ra*ra;float h=b*b-c;if(h<0.0)-1.0;h=sqrt(h);return-b+h;}vec3 project(){vec3 p=normalize(vWorldPosition);vec3 camPos=cameraPosition;camPos.y-=height;float intersection=sphereIntersect(camPos,p,vec3(0.),radius);if(intersection>0.){vec3 h=vec3(0.0,-height,0.0);float intersection2=diskIntersectWithBackFaceCulling(camPos,p,h,vec3(0.0,1.0,0.0),radius);p=(camPos+min(intersection,intersection2)*p)/radius;}else{p=vec3(0.0,1.0,0.0);}return p;}\n#include <common>\n#include <cube_uv_reflection_fragment>\nvoid main(){vec3 projectedWorldPosition=project();\n#ifdef ENVMAP_TYPE_CUBE\nvec3 outcolor=textureCube(cubemap,projectedWorldPosition).rgb;\n#else\nvec3 direction=normalize(projectedWorldPosition);vec2 uv=equirectUv(direction);vec3 outcolor=texture2D(cubemap,uv).rgb;\n#endif\ngl_FragColor=vec4(outcolor,1.0);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}"),[h]),v=o.useMemo((()=>({cubemap:{value:null},height:{value:15},radius:{value:60}})),[]),E=o.useRef(null),b=null==(t=e.ground)?void 0:t.height,y=null==(n=e.ground)?void 0:n.radius,k=null!==(a=null==(s=e.ground)?void 0:s.scale)&&void 0!==a?a:1e3;return o.useEffect((()=>{b&&(E.current.uniforms.height.value=b)}),[b]),o.useEffect((()=>{y&&(E.current.uniforms.radius.value=y)}),[y]),o.useEffect((()=>{E.current.uniforms.cubemap.value=l}),[l]),o.createElement(o.Fragment,null,o.createElement(f,(0,r.Z)({},e,{map:l})),o.createElement(u,{scale:k,args:[1,16]},o.createElement("shaderMaterial",{ref:E,side:i.BackSide,vertexShader:"#define GLSLIFY 1\nvarying vec3 vWorldPosition;void main(){vec4 worldPosition=modelMatrix*vec4(position,1.0);vWorldPosition=worldPosition.xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:g,uniforms:v})))}function v(e){return e.ground?o.createElement(g,e):e.map?o.createElement(f,e):e.children?o.createElement(h,e):o.createElement(p,e)}}}]);