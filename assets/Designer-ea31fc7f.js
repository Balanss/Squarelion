import{r as p,j as h,F as j,a,h as V,n as Ee,Q as Se,m as ne,f as Re,_,k as ce,i as ee,y as Je,R as $e,U as Xe,L as qe}from"./index-dbee5ba0.js";import{r as De,g as Ce,u as Ze,a as _e,d as et,N as tt,m as Ne}from"./Nav-376dafed.js";import{Q as st,T as at,D as rt}from"./ReactToastify-7debe767.js";import{u as ot,t as R,s as lt,v as nt,h as ct,A as it}from"./unseen-4158e864.js";function dt(){const[e,t]=p.useState(!1);return h(j,{children:[h("div",{className:" border-yellow-500 border-t-2 mt-3 bg-slate-700 flex items-center w-full justify-center gap-10 p-5",children:[a("h1",{className:"text-4xl font-sans font-bold text-slate-200 text-center ",children:"Squarelion Designer Page"}),a("div",{className:"phones:hidden text-center bg-slate-700 ",children:a("button",{onClick:()=>t(!e),style:{backgroundColor:"#f8f9fa",color:"#333",border:"1px solid #ced4da",borderRadius:"4px",padding:"10px 20px",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease"},onMouseOver:s=>s.currentTarget.style.backgroundColor="#e9ecef",onMouseOut:s=>s.currentTarget.style.backgroundColor="#f8f9fa",children:e?"Close tooltip":"Open tooltip"})}),a("h6",{className:"fixed bottom-1 left-2 text-[10px] text-white",children:"V 0.6"})]}),a("div",{children:e&&h("article",{className:"flex flex-row items-stretch justify-around w-full h-full p-10 bg-gray-100  dark:bg-slate-700",children:[h("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[a("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click upload image"}),a("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 1"})]}),h("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[a("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click finish to complete"}),a("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 2"})]}),h("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[a("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"To see the instructions click on the view button"}),a("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"For now you can only upload 4 image at a time and 1 pdf file"}),a("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Note"})]})]})})]})}function pt({name:e,user:t,dPost:s,dMonth:o,dPage:r,setSuccessfully:l,setImageUrls:i,setFiles:d}){return h("label",{children:[a(st,{}),a("input",{type:"file",accept:"image/*",multiple:!0,onChange:async n=>{const f=n.target.files||[],b=f.length?Array.from(f).map(w=>{const L=De(Ce(),`products/${e}/${w.name}`),I=Ze(L,w);return new Promise((H,B)=>{I.on("state_changed",N=>{const F=N.bytesTransferred/N.totalBytes*100;l(`Uploading ${F}%`)},N=>{console.error("Upload Error:",N),B(N)},async()=>{const N=await _e(I.snapshot.ref);H({url:N,type:w.type,name:w.name}),l("Upload successful")})})}):[],m=await Promise.all(b),x=V(Re,"DesignerPage",s+o+r),y=await Ee(x);let v=y.exists()&&y.data().files?y.data().files:[];if((v?v.length:0)+(f?f.length:0)>4){alert("You can only upload a maximum of 4 files");return}Array.isArray(v)?[...v,...m]:typeof v=="object"&&{...v,...m};try{const w={DesignedUploadedBy:t,files:Se(...m)};await ne(x,w,{merge:!0})}catch(w){console.error("Error adding document: ",w)}setTimeout(()=>{l(""),i(""),d("")},5e3)}}),a("img",{src:ot,alt:"upload",className:"w-8 h-8 cursor-pointer hover:scale-[1.1]",title:"Upload files"})]})}function ut({user:e,message:t,setMessage:s,dPost:o,dMonth:r,setContent:l,dPage:i,arrayUnion:d}){return h("form",{onSubmit:async n=>{n.preventDefault();const f=_(ee,"DesignerPage"),b=V(f,o+r+i);ce(b,{subject:d(t+" - "+e),New:!1});const m=_(ee,i),x=V(m,r);ne(x,{[o+r]:{color:"#FF4500",status:"Feedback",statusText:"Feedback"}},{merge:!0}).catch(y=>console.error("Error updating document:",y)),l(y=>[...y,t+" - "+e]),setTimeout(()=>{s("")},2e3)},className:"mt-10",children:[a("input",{type:"text",value:t,onChange:n=>s(n.target.value),placeholder:"Enter your message here",className:"border-2 border-black text-black p-2 rounded-md"}),a("button",{className:"bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800  ml-1 cursor-pointer",children:"Send"})]})}const ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABP0lEQVR4nO2Yy07DMBBF8yksiHiIHbXdXYUd+P8/YAGitN30xkEsQZaChAKJnHTsTKq5Uraec2QnnkxRSCQSiUQSmdrqW1SmLBLluFlfhhpJFq+f7q+91W/e6W1dmRvq9VGZ0jv12li184+ruyTwjdNf4aGWwA98uz6pRBeeWgJdeGqJz4258E49/ylAIIE+eOpdTiGRDT6FRHZ4SonZ4CkkZoc/RYIN/BQJdvBjJNjCx0g0Tu8bp97ZwkdK8IYfK8ES/rdE3XPeW/gDW/iQ8MJ+WL0d2AG+Ahj42rA/QoiEZymBIXir9wGWrQQiLqnwn+udemEngRE3LDsJTGgP2EjghN5mdgkQNGatRP7mDoRdZfYOFQkKZpNAwkLIIYGH1dWiB1v/SSxqtNiVWORwN9d4HZUpk43XJRKJRHKW+QaUqwzfL9sYYwAAAABJRU5ErkJggg==";let ft={data:""},mt=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ft,xt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,yt=/\/\*[^]*?\*\/|  +/g,Ae=/\n+/g,D=(e,t)=>{let s="",o="",r="";for(let l in e){let i=e[l];l[0]=="@"?l[1]=="i"?s=l+" "+i+";":o+=l[1]=="f"?D(i,l):l+"{"+D(i,l[1]=="k"?"":t)+"}":typeof i=="object"?o+=D(i,t?t.replace(/([^,])+/g,d=>l.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,d):d?d+" "+u:u)):l):i!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=D.p?D.p(l,i):l+":"+i+";")}return s+(t&&r?t+"{"+r+"}":r)+o},k={},Ie=e=>{if(typeof e=="object"){let t="";for(let s in e)t+=s+Ie(e[s]);return t}return e},bt=(e,t,s,o,r)=>{let l=Ie(e),i=k[l]||(k[l]=(u=>{let n=0,f=11;for(;n<u.length;)f=101*f+u.charCodeAt(n++)>>>0;return"go"+f})(l));if(!k[i]){let u=l!==e?e:(n=>{let f,b,m=[{}];for(;f=xt.exec(n.replace(yt,""));)f[4]?m.shift():f[3]?(b=f[3].replace(Ae," ").trim(),m.unshift(m[0][b]=m[0][b]||{})):m[0][f[1]]=f[2].replace(Ae," ").trim();return m[0]})(e);k[i]=D(r?{["@keyframes "+i]:u}:u,s?"":"."+i)}let d=s&&k.g?k.g:null;return s&&(k.g=k[i]),((u,n,f,b)=>{b?n.data=n.data.replace(b,u):n.data.indexOf(u)===-1&&(n.data=f?u+n.data:n.data+u)})(k[i],t,o,d),i},wt=(e,t,s)=>e.reduce((o,r,l)=>{let i=t[l];if(i&&i.call){let d=i(s),u=d&&d.props&&d.props.className||/^go/.test(d)&&d;i=u?"."+u:d&&typeof d=="object"?d.props?"":D(d,""):d===!1?"":d}return o+r+(i??"")},"");function se(e){let t=this||{},s=e.call?e(t.p):e;return bt(s.unshift?s.raw?wt(s,[].slice.call(arguments,1),t.p):s.reduce((o,r)=>Object.assign(o,r&&r.call?r(t.p):r),{}):s,mt(t.target),t.g,t.o,t.k)}let Fe,re,oe;se.bind({g:1});let E=se.bind({k:1});function gt(e,t,s,o){D.p=t,Fe=e,re=s,oe=o}function C(e,t){let s=this||{};return function(){let o=arguments;function r(l,i){let d=Object.assign({},l),u=d.className||r.className;s.p=Object.assign({theme:re&&re()},d),s.o=/ *go\d+/.test(u),d.className=se.apply(s,o)+(u?" "+u:""),t&&(d.ref=i);let n=e;return e[0]&&(n=d.as||e,delete d.as),oe&&n[0]&&oe(d),Fe(n,d)}return t?t(r):r}}var vt=e=>typeof e=="function",te=(e,t)=>vt(e)?e(t):e,Nt=(()=>{let e=0;return()=>(++e).toString()})(),Oe=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),At=20,X=new Map,kt=1e3,ke=e=>{if(X.has(e))return;let t=setTimeout(()=>{X.delete(e),T({type:4,toastId:e})},kt);X.set(e,t)},Et=e=>{let t=X.get(e);t&&clearTimeout(t)},le=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,At)};case 1:return t.toast.id&&Et(t.toast.id),{...e,toasts:e.toasts.map(l=>l.id===t.toast.id?{...l,...t.toast}:l)};case 2:let{toast:s}=t;return e.toasts.find(l=>l.id===s.id)?le(e,{type:1,toast:s}):le(e,{type:0,toast:s});case 3:let{toastId:o}=t;return o?ke(o):e.toasts.forEach(l=>{ke(l.id)}),{...e,toasts:e.toasts.map(l=>l.id===o||o===void 0?{...l,visible:!1}:l)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(l=>l.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(l=>({...l,pauseDuration:l.pauseDuration+r}))}}},q=[],Z={toasts:[],pausedAt:void 0},T=e=>{Z=le(Z,e),q.forEach(t=>{t(Z)})},St={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Rt=(e={})=>{let[t,s]=p.useState(Z);p.useEffect(()=>(q.push(s),()=>{let r=q.indexOf(s);r>-1&&q.splice(r,1)}),[t]);let o=t.toasts.map(r=>{var l,i;return{...e,...e[r.type],...r,duration:r.duration||((l=e[r.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||St[r.type],style:{...e.style,...(i=e[r.type])==null?void 0:i.style,...r.style}}});return{...t,toasts:o}},Dt=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(s==null?void 0:s.id)||Nt()}),W=e=>(t,s)=>{let o=Dt(t,e,s);return T({type:2,toast:o}),o.id},g=(e,t)=>W("blank")(e,t);g.error=W("error");g.success=W("success");g.loading=W("loading");g.custom=W("custom");g.dismiss=e=>{T({type:3,toastId:e})};g.remove=e=>T({type:4,toastId:e});g.promise=(e,t,s)=>{let o=g.loading(t.loading,{...s,...s==null?void 0:s.loading});return e.then(r=>(g.success(te(t.success,r),{id:o,...s,...s==null?void 0:s.success}),r)).catch(r=>{g.error(te(t.error,r),{id:o,...s,...s==null?void 0:s.error})}),e};var Ct=(e,t)=>{T({type:1,toast:{id:e,height:t}})},It=()=>{T({type:5,time:Date.now()})},Ft=e=>{let{toasts:t,pausedAt:s}=Rt(e);p.useEffect(()=>{if(s)return;let l=Date.now(),i=t.map(d=>{if(d.duration===1/0)return;let u=(d.duration||0)+d.pauseDuration-(l-d.createdAt);if(u<0){d.visible&&g.dismiss(d.id);return}return setTimeout(()=>g.dismiss(d.id),u)});return()=>{i.forEach(d=>d&&clearTimeout(d))}},[t,s]);let o=p.useCallback(()=>{s&&T({type:6,time:Date.now()})},[s]),r=p.useCallback((l,i)=>{let{reverseOrder:d=!1,gutter:u=8,defaultPosition:n}=i||{},f=t.filter(x=>(x.position||n)===(l.position||n)&&x.height),b=f.findIndex(x=>x.id===l.id),m=f.filter((x,y)=>y<b&&x.visible).length;return f.filter(x=>x.visible).slice(...d?[m+1]:[0,m]).reduce((x,y)=>x+(y.height||0)+u,0)},[t]);return{toasts:t,handlers:{updateHeight:Ct,startPause:It,endPause:o,calculateOffset:r}}},Ot=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Tt=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Bt=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Pt=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ot} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Tt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Bt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ut=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,jt=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ut} 1s linear infinite;
`,Vt=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Lt=E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ht=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Vt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Lt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Mt=C("div")`
  position: absolute;
`,Kt=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Yt=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Wt=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Yt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,zt=({toast:e})=>{let{icon:t,type:s,iconTheme:o}=e;return t!==void 0?typeof t=="string"?p.createElement(Wt,null,t):t:s==="blank"?null:p.createElement(Kt,null,p.createElement(jt,{...o}),s!=="loading"&&p.createElement(Mt,null,s==="error"?p.createElement(Pt,{...o}):p.createElement(Ht,{...o})))},Qt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Gt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Jt="0%{opacity:0;} 100%{opacity:1;}",$t="0%{opacity:1;} 100%{opacity:0;}",Xt=C("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,qt=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Zt=(e,t)=>{let s=e.includes("top")?1:-1,[o,r]=Oe()?[Jt,$t]:[Qt(s),Gt(s)];return{animation:t?`${E(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},_t=p.memo(({toast:e,position:t,style:s,children:o})=>{let r=e.height?Zt(e.position||t||"top-center",e.visible):{opacity:0},l=p.createElement(zt,{toast:e}),i=p.createElement(qt,{...e.ariaProps},te(e.message,e));return p.createElement(Xt,{className:e.className,style:{...r,...s,...e.style}},typeof o=="function"?o({icon:l,message:i}):p.createElement(p.Fragment,null,l,i))});gt(p.createElement);var es=({id:e,className:t,style:s,onHeightUpdate:o,children:r})=>{let l=p.useCallback(i=>{if(i){let d=()=>{let u=i.getBoundingClientRect().height;o(e,u)};d(),new MutationObserver(d).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return p.createElement("div",{ref:l,className:t,style:s},r)},ts=(e,t)=>{let s=e.includes("top"),o=s?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Oe()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...o,...r}},ss=se`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,ie=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:o,children:r,containerStyle:l,containerClassName:i})=>{let{toasts:d,handlers:u}=Ft(s);return p.createElement("div",{style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...l},className:i,onMouseEnter:u.startPause,onMouseLeave:u.endPause},d.map(n=>{let f=n.position||t,b=u.calculateOffset(n,{reverseOrder:e,gutter:o,defaultPosition:t}),m=ts(f,b);return p.createElement(es,{id:n.id,key:n.id,onHeightUpdate:u.updateHeight,className:n.visible?ss:"",style:m},n.type==="custom"?te(n.message,n):r?r(n):p.createElement(_t,{toast:n,position:f}))}))},Y=g;function as({name:e,image:t,image1:s,image2:o,image3:r,setImage:l,setImage1:i,setImage2:d,setImage3:u,content:n,user:f,message:b,setMessage:m,dPost:x,dMonth:y,dPage:v,setContent:w,arrayUnion:L,exampleImg:I,exampleImg1:H,exampleImg2:B,exampleImg3:N,setShow:F}){const ae={user:f,message:b,setMessage:m,dPost:x,dMonth:y,dPage:v,setContent:w,arrayUnion:L,setShow:F},M=()=>F(!1);p.useEffect(()=>{const S=O=>{O.key==="Escape"&&M()};return window.addEventListener("keydown",S),()=>{window.removeEventListener("keydown",S)}},[]);const A=async S=>{const O=De(Ce(),`products/${e}/${S.name}`);await et(O);const z=V(Re,"DesignerPage",x+y+v),Q=await Ee(z);if(Q.exists()){const K={...Q.data().files};Object.keys(K).forEach(P=>{K[P].url===S.url&&delete K[P]});try{await ce(z,{files:K}),Y.success("File successfully deleted")}catch(P){Y.error(`Error updating document: ${P.message}`)}}};return h(j,{children:[a("div",{className:" absolute right-4 top-4 ",children:a("img",{src:ht,className:"w-8 h-8 cursor-pointer hover:scale-[1.1]",onClick:M})}),h("section",{className:"flex flex-row  items-start  gap-10  m-auto w-[50vw]",children:[h("div",{className:"flex flex-col w-[50vw] mt-3  ",children:[a("p",{children:"My work"}),a("hr",{className:"bg-white w-full mb-2"}),(t==null?void 0:t.url)&&(t.type!=="application/pdf"||(t==null?void 0:t.url)==="")&&h("span",{className:"flex flex-row items-center",children:[" ",a("img",{className:" ",src:t==null?void 0:t.url}),"  ",a("img",{src:R,className:"w-10 h-10 hover:scale-[1.1]",onClick:()=>{A(t),l("")}}),"  "]}),(s==null?void 0:s.url)&&(s.type!=="application/pdf"||(s==null?void 0:s.url)==="")&&h("span",{className:"flex flex-row items-center",children:[" ",a("img",{className:" ",src:s==null?void 0:s.url}),"  ",a("img",{src:R,className:"w-10 h-10 hover:scale-[1.1]",onClick:()=>{A(s),i("")}}),"  "]}),(o==null?void 0:o.url)&&(o.type!=="application/pdf"||(o==null?void 0:o.url)==="")&&h("span",{className:"flex flex-row items-center",children:[" ",a("img",{className:"",src:o==null?void 0:o.url}),"  ",a("img",{src:R,className:"w-10 h-10 hover:scale-[1.1]",onClick:()=>{A(o),d("")}}),"  "]}),(r==null?void 0:r.url)&&(r.type!=="application/pdf"||(r==null?void 0:r.url)==="")&&h("span",{className:"flex flex-row items-center",children:[" ",a("img",{className:"",src:r==null?void 0:r.url}),"  ",a("img",{src:R,className:"w-10 h-10 hover:scale-[1.1]",onClick:()=>{A(r),u("")}}),"  "]}),(t==null?void 0:t.url)&&(t.type===""||t.type==="application/pdf")&&h("span",{className:"flex flex-row items-center",children:[h("a",{title:"Click to download",href:t==null?void 0:t.url,download:!0,children:["Download ",t.name]})," ",a("img",{src:R,className:"w-10 h-10 hover:scale-[1.1]",onClick:()=>{A(t)}})," "]}),(s==null?void 0:s.url)&&(s.type===""||s.type==="application/pdf")&&h("span",{className:"flex flex-row items-center",children:[" ",h("a",{title:"Click to download",href:s==null?void 0:s.url,download:!0,children:["Download ",s.name]})," ",a("img",{src:R,className:"w-10 h-10 hover:scale-[1.1]",onClick:()=>{A(s),i("")}})," "]}),(o==null?void 0:o.url)&&(o.type===""||o.type==="application/pdf")&&h("span",{className:"flex flex-row items-center",children:[" ",h("a",{title:"Click to download",href:o==null?void 0:o.url,download:!0,children:["Download ",o.name]})," ",a("img",{src:R,className:"w-10 h-10 hover:scale-[1.1]",onClick:()=>{A(o),d("")}})]}),(r==null?void 0:r.url)&&(r.type===""||r.type==="application/pdf")&&h("span",{className:"flex flex-row items-center",children:[" ",h("a",{title:"Click to download",href:r==null?void 0:r.url,download:!0,children:["Download ",r.name]})," ",a("img",{src:R,className:"w-10 h-10 hover:scale-[1.1]",onClick:()=>{A(r),u("")}})," "]})]}),h("div",{className:"flex flex-col items-start mt-3 w-[50vw] border-l-2",children:[a("p",{children:"Examples"}),a("hr",{className:"bg-white w-full mb-2"}),a("img",{className:"",src:I}),a("img",{className:"",src:H}),a("img",{className:"",src:B}),a("img",{className:"",src:N})]})]}),a("hr",{className:"w-screen bg-white mt-4"}),a("div",{className:"mt-20 rounded text-left p-10 phones:w-[40vw] pc:min-w-[40vw] w-[40vw] pc:max-w-[40vw]  bg-white border-primary",children:n.map((S,O)=>h("div",{className:"text-left break-words text-black  rounded px-3  ",children:[h("p",{className:"w-[80%] m-auto whitespace-pre-wrap ",children:[" ",S]}),a("hr",{}),a("br",{})]},O))}),a(ut,{...ae}),a(ie,{})]})}function rs({newDesigner:e,db:t,id:s,collection:o,doc:r,setDoc:l,user:i,setImageUrl:d}){return h(j,{children:[a(ie,{}),a("img",{src:lt,className:"w-8 h-8 cursor-pointer hover:scale-[1.1] }",onClick:async()=>{await e.map((n,f)=>{if(s===f&&n.files.length>0){if(n.month.includes("2023")){const x=o(t,n.page),y=r(x,n.post+n.month);l(y,{designer:n.designer||"",designer1:n.designer1||"",designer2:n.designer2||"",designer3:n.designer3||"",pdf:n.pdf||"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:i},{merge:!0})}else{Y.success("Design send successfully");const x=o(t,n.page),y=r(x,n.month);try{l(y,{[n.post+n.month]:{designer:n.files[0]?n.files[0].url:"",designer1:n.files[1]?n.files[1].url:"",designer2:n.files[2]?n.files[2].url:"",designer3:n.files[3]?n.files[3].url:"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:i,Time:new Date().toLocaleString()}},{merge:!0})}catch{Y.error("Issue with completing the design")}}const b=o(t,"DesignerPage"),m=r(b,n.post+n.month+n.page);Je(m),d("")}})},title:"Send"})]})}const os="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEKElEQVR4nO1YW4ibVRD+zomtl1YRryDogwUvIAXRein45JNvotsnhdVSW9n1n0k2SKsooWjBtoh98GVVfFAoqBV90Ir4tKgU1itVWiy2UHFpvWxrEW2q0E/OnzSb//x/8l+SbBbJB4dAkpn5Zs45M3MGGGGEEXoG16FExd0UPE3FHiq+o+IEFfXm+p2KWSo2YSmBU7iWghco+JkKpi7Bs1gKYIArqZim4Ewm4gvr/mFzB8t4iIL5nMQbq4zrI7rUHqHYwxTzCdVMU+1mamkdBbdxAiv7S3wjllHwaheCpyjYzTI2ULAm3CUnU8UKTuEGlnEPARPRKWYv1bLDOku1c1T7KdW8QTFbKaUHi5K/iIqPOpzrH6hY7/6TW6+abV0ciC6xJ12iKEJ+WSJ5wd8UVFnDebmVntNdLo1ldOAEK7ijmBHFawmRP0TBLUWJt3QHWNWduHGfxylYXcyA4OEE8l+7890r+VA/YCj2j2TyLXtSTLm7hPFsc6hf5Ft2xM7Eox6x+SuruKqAYryScOZ7PjYxO2p2JUT/rOfEdF7y18WKlKDab/IOFDvuOXCQip2eA6cpuBpZQcX2WKrsIdt0tSVY3ZYqvwmPbg3LKfjJ4/BcnsZszovA+kGQd3CBodrTVPslJ3F5m2MVj8MxvxAmIuwq/QpboEjlAcW8xACXRL6bwEoq/vR2IT2dNlvidqHdgyTfDRR84AVzKovQu14DtgFDAgXqBfO9LELfe0JrFoVtAhhgrcfli3Qhv3hN4QoMCQxbjcgROpou5Of/GpYvCtsENC9yuwP1dCHFPxGhKlZgSGCA8/1uIF1IcDIiFGDVorBNgOuBvB04nv8SB1iLIYEB7vIcmE0XUrzvCRVrZ/sAKjZ5XN7MIvSMJ/ThorBNABVve3dgIl3IPb6jDvzlX+QwO4jZgQGCbhjgtxKKG7M1c4JfPM8rrd8Vl1LtPqqtu/fywBxQPOaR/za7sOBFT3iO47iAFVxGtbML7W/Bt2qa/VrYTh/uFMRsFVDwr6dgB8Xu90Yd4wNxQLDFsz3PJ3Fxb9MIcc+82NRg14D6n7pne0t+RZO4JlbUGmOO9h2Y6fuwWHHMO74HC7czVGzuSL6xTmV6JWUlL9jvRf5MLwOtmxuzSdOJfGP1odVg4xXoR969RSaLKQxwK8X+lmnsVy6N9ZRtFE/FznxjbS+mtIzbKXY+89BVzbZCRUqwMZYqF47O84WPphthh6PscKRtP2uOuBMy0LmLbPbGCqGr5m6k7oi6KDe6yjspeJyKtxIqLFtVX/BoIeJdnXJF7AncRC3dR7ETVLOTavZQ7FcUeyDyX0c8mVza2jeIyV9usIyxnMR/pOIR1mCxFEDB1gyk6822/YFBTfx62wHByxS8Q8EMFZ9T8TEVr4d1RXAvK7hw2DxHGOH/gv8AaBxzFy6b5N0AAAAASUVORK5CYII=";function ls({setFiles:e,setSureToReset:t,designerPostReset:s,designerMonthReset:o,designerPageReset:r}){return h(j,{children:[a("div",{className:"fixed top-0 z-[1000] left-0 w-full h-full bg-slate-400/20 gap-4  flex justify-center items-center",children:h("div",{className:"flex gap-3 flex-col bg-white p-5 rounded-md",children:[a("p",{className:"text-black font-semibold text-xl",children:"Are you sure you want to reset this?"}),a("button",{onClick:()=>{const l=_(ee,"DesignerPage"),i=V(l,s+o+r);ce(i,{files:""},{merge:!0}),Y.success("Reset successful"),setTimeout(()=>{t(!1),e([])},1e3)},className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer",children:"Yes"}),a("button",{onClick:()=>t(!1),className:"bg-green-700 text-white p-2 rounded-md hover:bg-green-800 cursor-pointer",children:"No"})]})}),a(ie,{})]})}function hs(){const{user:e,uuid:t,level:s}=$e.useContext(Xe),[o,r]=p.useState(!1),[l,i]=p.useState([]),[d,u]=p.useState([]),[n,f]=p.useState([]),[b,m]=p.useState([]),[x,y]=p.useState([]),[v,w]=p.useState([]),[L,I]=p.useState(""),[H,B]=p.useState(""),[N,F]=p.useState(""),[ae,M]=p.useState(""),[A,S]=p.useState(""),[O,z]=p.useState(""),[Q,G]=p.useState([]),[K,P]=p.useState([]),[ns,de]=p.useState([]),[Te,Be]=p.useState(""),[cs,Pe]=p.useState(),[pe,ue]=p.useState(""),[he,fe]=p.useState(""),[me,xe]=p.useState(""),[ye,be]=p.useState(!1),[Ue,je]=p.useState(""),[Ve,Le]=p.useState(""),[He,Me]=p.useState(""),we=l.filter(c=>s!==11?!c.id.endsWith("Test"):!0);function Ke(){be(!0)}const[ge,Ye]=p.useState(!0);p.useEffect(()=>{setTimeout(()=>{Ye(!1)},1e3)});const We={name,user:e,dPost:pe,dMonth:he,dPage:me,setSuccessfully:z,setImageUrls:P,setFiles:de},ze={initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.3,delay:.3}},[U,ve]=p.useState(JSON.parse(localStorage.getItem("hiddenRows"))||[]);p.useEffect(()=>{localStorage.setItem("hiddenRows",JSON.stringify(U))},[U]);const Qe=c=>{f(c.files&&c.files[0]?c.files[0]:"nothing"),m(c.files&&c.files[1]?c.files[1]:"nothing"),y(c.files&&c.files[2]?c.files[2]:"nothing"),w(c.files&&c.files[3]?c.files[3]:"nothing"),G(c.subject),I(c.img1),B(c.img2),F(c.img3),M(c.img4),ue(c.post),fe(c.month),xe(c.page),r(!0)},Ge=c=>{f(c.files&&c.files[0]?c.files[0]:"nothing"),m(c.files&&c.files[1]?c.files[1]:"nothing"),y(c.files&&c.files[2]?c.files[2]:"nothing"),w(c.files&&c.files[3]?c.files[3]:"nothing"),G(c.subject),I(c.img1),B(c.img2),F(c.img3),M(c.img4),ue(c.post),fe(c.month),xe(c.page)};return h(j,{children:[ge&&a(j,{children:a(qe,{})}),h("div",{className:" min-h-[100vh]  pb-10 bg-primary laptop:overflow-x-hidden",children:[a(tt,{}),h("div",{className:"",children:[a(at,{}),a("section",{className:"",children:a(dt,{level:s})}),h("div",{className:" pt-[75px] phones:w-screen phones:p-2  phones:overflow-auto  w-fit m-auto p-10  flex flex-col",children:[h("h1",{className:"text-white text-2xl font-bold tracking-wide",children:[" ",e," "]}),a("hr",{className:" mt-2"}),h("div",{className:"flex flex-col items-start  laptop:overflow-x-hidden",children:[a(rt,{setDesignerData:i,designerData:l,user:e,setNoti:Pe}),a("div",{className:"mb-5",children:U.length>0&&h("button",{onClick:()=>ve([]),className:"bg-blue-700 mt-2 text-white p-2 rounded-md hover:bg-blue-800 cursor-pointer relative z-[2]",children:["Show ",U.length," hidden rows"]})}),!ge&&a(Ne.section,{...ze,children:h("table",{className:"w-full text-sm text-left text-gray-300 shadow-md shadow-slate-800",children:[a("thead",{className:"text-xs  uppercase  bg-gray-700 text-gray-200",children:h("tr",{className:"text-center !text-xs",children:[a("th",{className:"p-[1px]",children:" "}),a("th",{className:"px-4 py-2",children:"Image"}),a("th",{className:"px-4 py-2",children:"Date"}),a("th",{className:"px-4 py-2",children:"Client"}),a("th",{className:"laptop:px-4 laptop:py-2 px-2",children:"Priority"}),a("th",{className:"px py-2",children:"View"}),a("th",{className:"px-4 py-2",children:"Upload"}),a("th",{className:"px-4 py-2",children:"Send"}),a("th",{className:"px-4 py-2",children:"Reset"}),a("th",{className:"px-4 py-2",children:"Hide"}),s>8&&a("th",{className:"px-4 py-2",children:"Assigned"})]})}),h("tbody",{children:[we.map((c,J)=>(c.SendTo===e||s>9||e==="Saskia")&&c.hide!==!0?h("tr",{className:`border-b bg-gray-600 border-gray-700 shadow-md shadow-black ${U.includes(J)?"hidden":""}`,children:[a("td",{className:`${c.New?"border-l-[5px] border-blue-700  animate-pulse animate-thrice animate-duration-[3000ms] animate-ease-out ":""} `}),a("td",{className:"border  px-2 py-1",children:a("img",{src:c.img,className:"w-[50px]  h-[50px] m-auto rounded-md "})}),a("td",{className:"border px-2 py-2",children:c.newDate}),a("td",{className:"border px-4 py-2",children:c.page}),a("td",{className:`border text-center laptop:px-4 laptop:py-2 ${c.prio==="Prio"?"bg-red-600":"bg-gray-600"}`,children:c.prio}),a("td",{className:"border laptop:px-4 laptop:py-2",children:a("img",{src:nt,className:"w-8 h-8 cursor-pointer hover:scale-[1.1]",onClick:()=>{Qe(c)},title:"View content"})}),a("td",{className:"border px-4 py-2",onMouseEnter:()=>Ge(c),children:a(pt,{...We})}),a("td",{className:`border px-4 py-2  ${c.files&&c.files[0]?"opacity-100":"opacity-20"}`,children:a(rs,{newDesigner:we,id:J,db:ee,collection:_,doc:V,setDoc:ne,user:e,setImageUrl:u})}),a("td",{className:"border px-4 py-2",children:c.files&&c.files[0]&&a("img",{src:os,onClick:()=>{Ke(),je(c.post),Le(c.month),Me(c.page)},className:"w-8 h-8 cursor-pointer hover:scale-[1.1]",title:"Reset"})}),a("td",{className:"border px-4 py-2",children:a("img",{src:ct,className:"w-8 h-8 cursor-pointer hover:scale-[1.1]",onClick:()=>ve([...U,J]),title:"Hide"})}),s>8&&a("td",{className:"border px-4 py-2 text-xs",children:c.SendTo})]},J):null),ye&&a(ls,{sureToReset:ye,setSureToReset:be,designerPostReset:Ue,designerMonthReset:Ve,designerPageReset:He,setFiles:de})]})]})})]}),h("div",{className:"fixed bottom-0 left-0 bg-slate-200 w-full  ",children:[a("h2",{className:"text-xl ml-4",children:A}),a("h2",{className:"text-xl ml-4",children:O})]})]}),a(it,{children:o&&a(Ne.div,{initial:{x:-2e3},animate:{opacity:1,x:0},exit:{x:-2e3},transition:{duration:.5},className:"fixed top-0 left-0 bg-secondary p-10 text-white overflow-y-auto h-full overflow-x-hidden w-screen laptop:w-[60vw] flex flex-col items-start justify-start border-r-2",children:a(as,{setImage:f,setImage1:m,setImage2:y,setImage3:w,setShow:r,name,image:n,image1:b,image2:x,image3:v,content:Q,user:e,message:Te,setMessage:Be,dPost:pe,dMonth:he,dPage:me,setContent:G,arrayUnion:Se,exampleImg:L,exampleImg1:H,exampleImg2:N,exampleImg3:ae})})})]})," "]})]})}export{hs as default};
