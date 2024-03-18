import{r as f,a as he,f as de,R as v}from"./index-1894bab0.js";import{U as Ee}from"./Nav-8bc968d1.js";function pe(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(o=pe(e[t]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o);return s}function F(){for(var e,t,o=0,s="",a=arguments.length;o<a;o++)(e=arguments[o])&&(t=pe(e))&&(s&&(s+=" "),s+=t);return s}function Me({}){const[e,t]=f.useState(""),[o,s]=f.useState(""),[a,c]=f.useState(""),[n,h]=f.useState([]),p=async()=>{try{return de.collection("DesignerPage").onSnapshot(_=>{const C=_.docs.map(L=>({id:L.id,...L.data()}));h(C)})}catch(l){console.error("Error fetching message data:",l)}};f.useEffect(()=>{p()},[]);const b=n.filter((l,_)=>l.SendTo===e);return f.useEffect(()=>{b.length>0?document.title=`Squarelion Agency (${b.length})`:document.title="Squarelion Agency"},[b]),he(Ee,{setUser:t,user:e,setUuid:s,setLevel:c})}function xe({setDesignerData:e,user:t,noti:o}){return f.useEffect(()=>{const s=de.collection("DesignerPage").orderBy("prio","desc").onSnapshot(a=>{const c=a.docs.map(n=>({id:n.id,...n.data()}));e(c)});return()=>s()},[]),null}const J=e=>typeof e=="number"&&!isNaN(e),V=e=>typeof e=="string",w=e=>typeof e=="function",ne=e=>V(e)||w(e)?e:null,ie=e=>f.isValidElement(e)||V(e)||w(e)||J(e);function Te(e,t,o){o===void 0&&(o=300);const{scrollHeight:s,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=s+"px",a.transition=`all ${o}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,o)})})}function se(e){let{enter:t,exit:o,appendPosition:s=!1,collapse:a=!0,collapseDuration:c=300}=e;return function(n){let{children:h,position:p,preventExitTransition:b,done:l,nodeRef:_,isIn:C,playToast:L}=n;const g=s?`${t}--${p}`:t,d=s?`${o}--${p}`:o,I=f.useRef(0);return f.useLayoutEffect(()=>{const m=_.current,u=g.split(" "),r=y=>{y.target===_.current&&(L(),m.removeEventListener("animationend",r),m.removeEventListener("animationcancel",r),I.current===0&&y.type!=="animationcancel"&&m.classList.remove(...u))};m.classList.add(...u),m.addEventListener("animationend",r),m.addEventListener("animationcancel",r)},[]),f.useEffect(()=>{const m=_.current,u=()=>{m.removeEventListener("animationend",u),a?Te(m,l,c):l()};C||(b?u():(I.current=1,m.className+=` ${d}`,m.addEventListener("animationend",u)))},[C]),v.createElement(v.Fragment,null,h)}}function ce(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const $=new Map;let K=[];const le=new Set,be=e=>le.forEach(t=>t(e)),fe=()=>$.size>0;function me(e,t){var o;if(t)return!((o=$.get(t))==null||!o.isToastActive(e));let s=!1;return $.forEach(a=>{a.isToastActive(e)&&(s=!0)}),s}function ge(e,t){ie(e)&&(fe()||K.push({content:e,options:t}),$.forEach(o=>{o.buildToast(e,t)}))}function ue(e,t){$.forEach(o=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===o.id&&o.toggle(e,t==null?void 0:t.id):o.toggle(e,t==null?void 0:t.id)})}function Ie(e){const{subscribe:t,getSnapshot:o,setProps:s}=f.useRef(function(c){const n=c.containerId||1;return{subscribe(h){const p=function(l,_,C){let L=1,g=0,d=[],I=[],m=[],u=_;const r=new Map,y=new Set,S=()=>{m=Array.from(r.values()),y.forEach(i=>i())},D=i=>{I=i==null?[]:I.filter(E=>E!==i),S()},N=i=>{const{toastId:E,onOpen:P,updateId:R,children:O}=i.props,U=R==null;i.staleId&&r.delete(i.staleId),r.set(E,i),I=[...I,i.props.toastId].filter(z=>z!==i.staleId),S(),C(ce(i,U?"added":"updated")),U&&w(P)&&P(f.isValidElement(O)&&O.props)};return{id:l,props:u,observe:i=>(y.add(i),()=>y.delete(i)),toggle:(i,E)=>{r.forEach(P=>{E!=null&&E!==P.props.toastId||w(P.toggle)&&P.toggle(i)})},removeToast:D,toasts:r,clearQueue:()=>{g-=d.length,d=[]},buildToast:(i,E)=>{if((M=>{let{containerId:k,toastId:A,updateId:x}=M;const X=k?k!==l:l!==1,W=r.has(A)&&x==null;return X||W})(E))return;const{toastId:P,updateId:R,data:O,staleId:U,delay:z}=E,Y=()=>{D(P)},Z=R==null;Z&&g++;const B={...u,style:u.toastStyle,key:L++,...Object.fromEntries(Object.entries(E).filter(M=>{let[k,A]=M;return A!=null})),toastId:P,updateId:R,data:O,closeToast:Y,isIn:!1,className:ne(E.className||u.toastClassName),bodyClassName:ne(E.bodyClassName||u.bodyClassName),progressClassName:ne(E.progressClassName||u.progressClassName),autoClose:!E.isLoading&&(H=E.autoClose,j=u.autoClose,H===!1||J(H)&&H>0?H:j),deleteToast(){const M=r.get(P),{onClose:k,children:A}=M.props;w(k)&&k(f.isValidElement(A)&&A.props),C(ce(M,"removed")),r.delete(P),g--,g<0&&(g=0),d.length>0?N(d.shift()):S()}};var H,j;B.closeButton=u.closeButton,E.closeButton===!1||ie(E.closeButton)?B.closeButton=E.closeButton:E.closeButton===!0&&(B.closeButton=!ie(u.closeButton)||u.closeButton);let Q=i;f.isValidElement(i)&&!V(i.type)?Q=f.cloneElement(i,{closeToast:Y,toastProps:B,data:O}):w(i)&&(Q=i({closeToast:Y,toastProps:B,data:O}));const q={content:Q,props:B,staleId:U};u.limit&&u.limit>0&&g>u.limit&&Z?d.push(q):J(z)?setTimeout(()=>{N(q)},z):N(q)},setProps(i){u=i},setToggle:(i,E)=>{r.get(i).toggle=E},isToastActive:i=>I.some(E=>E===i),getSnapshot:()=>u.newestOnTop?m.reverse():m}}(n,c,be);$.set(n,p);const b=p.observe(h);return K.forEach(l=>ge(l.content,l.options)),K=[],()=>{b(),$.delete(n)}},setProps(h){var p;(p=$.get(n))==null||p.setProps(h)},getSnapshot(){var h;return(h=$.get(n))==null?void 0:h.getSnapshot()}}}(e)).current;s(e);const a=f.useSyncExternalStore(t,o,o);return{getToastToRender:function(c){if(!a)return[];const n=new Map;return a.forEach(h=>{const{position:p}=h.props;n.has(p)||n.set(p,[]),n.get(p).push(h)}),Array.from(n,h=>c(h[0],h[1]))},isToastActive:me,count:a==null?void 0:a.length}}function _e(e){const[t,o]=f.useState(!1),[s,a]=f.useState(!1),c=f.useRef(null),n=f.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:p,closeToast:b,onClick:l,closeOnClick:_}=e;var C,L;function g(){o(!0)}function d(){o(!1)}function I(r){const y=c.current;n.canDrag&&y&&(n.didMove=!0,t&&d(),n.delta=e.draggableDirection==="x"?r.clientX-n.start:r.clientY-n.start,n.start!==r.clientX&&(n.canCloseOnClick=!1),y.style.transform=`translate3d(${e.draggableDirection==="x"?`${n.delta}px, var(--y)`:`0, calc(${n.delta}px + var(--y))`},0)`,y.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function m(){document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",m);const r=c.current;if(n.canDrag&&n.didMove&&r){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return a(!0),e.closeToast(),void e.collapseAll();r.style.transition="transform 0.2s, opacity 0.2s",r.style.removeProperty("transform"),r.style.removeProperty("opacity")}}(L=$.get((C={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))==null||L.setToggle(C.id,C.fn),f.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||d(),window.addEventListener("focus",g),window.addEventListener("blur",d),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",d)}},[e.pauseOnFocusLoss]);const u={onPointerDown:function(r){if(e.draggable===!0||e.draggable===r.pointerType){n.didMove=!1,document.addEventListener("pointermove",I),document.addEventListener("pointerup",m);const y=c.current;n.canCloseOnClick=!0,n.canDrag=!0,y.style.transition="none",e.draggableDirection==="x"?(n.start=r.clientX,n.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(n.start=r.clientY,n.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(r){const{top:y,bottom:S,left:D,right:N}=c.current.getBoundingClientRect();r.nativeEvent.type!=="touchend"&&e.pauseOnHover&&r.clientX>=D&&r.clientX<=N&&r.clientY>=y&&r.clientY<=S?d():g()}};return h&&p&&(u.onMouseEnter=d,e.stacked||(u.onMouseLeave=g)),_&&(u.onClick=r=>{l&&l(r),n.canCloseOnClick&&b()}),{playToast:g,pauseToast:d,isRunning:t,preventExitTransition:s,toastRef:c,eventHandlers:u}}function Ce(e){let{delay:t,isRunning:o,closeToast:s,type:a="default",hide:c,className:n,style:h,controlledProgress:p,progress:b,rtl:l,isIn:_,theme:C}=e;const L=c||p&&b===0,g={...h,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused"};p&&(g.transform=`scaleX(${b})`);const d=F("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${C}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":l}),I=w(n)?n({rtl:l,type:a,defaultClassName:d}):F(d,n),m={[p&&b>=1?"onTransitionEnd":"onAnimationEnd"]:p&&b<1?null:()=>{_&&s()}};return v.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":L},v.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${C} Toastify__progress-bar--${a}`}),v.createElement("div",{role:"progressbar","aria-hidden":L?"true":"false","aria-label":"notification timer",className:I,style:g,...m}))}let Le=1;const ye=()=>""+Le++;function Ne(e){return e&&(V(e.toastId)||J(e.toastId))?e.toastId:ye()}function G(e,t){return ge(e,t),t.toastId}function oe(e,t){return{...t,type:t&&t.type||e,toastId:Ne(t)}}function ee(e){return(t,o)=>G(t,oe(e,o))}function T(e,t){return G(e,oe("default",t))}T.loading=(e,t)=>G(e,oe("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),T.promise=function(e,t,o){let s,{pending:a,error:c,success:n}=t;a&&(s=V(a)?T.loading(a,o):T.loading(a.render,{...o,...a}));const h={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},p=(l,_,C)=>{if(_==null)return void T.dismiss(s);const L={type:l,...h,...o,data:C},g=V(_)?{render:_}:_;return s?T.update(s,{...L,...g}):T(g.render,{...L,...g}),C},b=w(e)?e():e;return b.then(l=>p("success",n,l)).catch(l=>p("error",c,l)),b},T.success=ee("success"),T.info=ee("info"),T.error=ee("error"),T.warning=ee("warning"),T.warn=T.warning,T.dark=(e,t)=>G(e,oe("default",{theme:"dark",...t})),T.dismiss=function(e){(function(t){var o;if(fe()){if(t==null||V(o=t)||J(o))$.forEach(a=>{a.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){var s;(s=$.get(t.containerId))!=null&&s.removeToast(t.id)||$.forEach(a=>{a.removeToast(t.id)})}}else K=K.filter(a=>t!=null&&a.options.toastId!==t)})(e)},T.clearWaitingQueue=function(e){e===void 0&&(e={}),$.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},T.isActive=me,T.update=function(e,t){t===void 0&&(t={});const o=((s,a)=>{var c;let{containerId:n}=a;return(c=$.get(n||1))==null?void 0:c.toasts.get(s)})(e,t);if(o){const{props:s,content:a}=o,c={delay:100,...s,...t,toastId:t.toastId||e,updateId:ye()};c.toastId!==e&&(c.staleId=e);const n=c.render||a;delete c.render,G(n,c)}},T.done=e=>{T.update(e,{progress:1})},T.onChange=function(e){return le.add(e),()=>{le.delete(e)}},T.play=e=>ue(!0,e),T.pause=e=>ue(!1,e);const $e=typeof window<"u"?f.useLayoutEffect:f.useEffect,te=e=>{let{theme:t,type:o,isLoading:s,...a}=e;return v.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...a})},re={info:function(e){return v.createElement(te,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(te,{...e},v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(te,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(te,{...e},v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}},Pe=e=>{const{isRunning:t,preventExitTransition:o,toastRef:s,eventHandlers:a,playToast:c}=_e(e),{closeButton:n,children:h,autoClose:p,onClick:b,type:l,hideProgressBar:_,closeToast:C,transition:L,position:g,className:d,style:I,bodyClassName:m,bodyStyle:u,progressClassName:r,progressStyle:y,updateId:S,role:D,progress:N,rtl:i,toastId:E,deleteToast:P,isIn:R,isLoading:O,closeOnClick:U,theme:z}=e,Y=F("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${l}`,{"Toastify__toast--rtl":i},{"Toastify__toast--close-on-click":U}),Z=w(d)?d({rtl:i,position:g,type:l,defaultClassName:Y}):F(Y,d),B=function(q){let{theme:M,type:k,isLoading:A,icon:x}=q,X=null;const W={theme:M,type:k};return x===!1||(w(x)?X=x({...W,isLoading:A}):f.isValidElement(x)?X=f.cloneElement(x,W):A?X=re.spinner():(ve=>ve in re)(k)&&(X=re[k](W))),X}(e),H=!!N||!p,j={closeToast:C,type:l,theme:z};let Q=null;return n===!1||(Q=w(n)?n(j):f.isValidElement(n)?f.cloneElement(n,j):function(q){let{closeToast:M,theme:k,ariaLabel:A="close"}=q;return v.createElement("button",{className:`Toastify__close-button Toastify__close-button--${k}`,type:"button",onClick:x=>{x.stopPropagation(),M(x)},"aria-label":A},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(j)),v.createElement(L,{isIn:R,done:P,position:g,preventExitTransition:o,nodeRef:s,playToast:c},v.createElement("div",{id:E,onClick:b,"data-in":R,className:Z,...a,style:I,ref:s},v.createElement("div",{...R&&{role:D},className:w(m)?m({type:l}):F("Toastify__toast-body",m),style:u},B!=null&&v.createElement("div",{className:F("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},B),v.createElement("div",null,h)),Q,v.createElement(Ce,{...S&&!H?{key:`pb-${S}`}:{},rtl:i,theme:z,delay:p,isRunning:t,isIn:R,closeToast:C,hide:_,type:l,style:y,className:r,controlledProgress:H,progress:N||0})))},ae=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},we=se(ae("bounce",!0));se(ae("slide",!0));se(ae("zoom"));se(ae("flip"));const ke={position:"top-right",transition:we,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function De(e){let t={...ke,...e};const o=e.stacked,[s,a]=f.useState(!0),c=f.useRef(null),{getToastToRender:n,isToastActive:h,count:p}=Ie(t),{className:b,style:l,rtl:_,containerId:C}=t;function L(d){const I=F("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":_});return w(b)?b({position:d,rtl:_,defaultClassName:I}):F(I,ne(b))}function g(){o&&(a(!0),T.play())}return $e(()=>{if(o){var d;const I=c.current.querySelectorAll('[data-in="true"]'),m=12,u=(d=t.position)==null?void 0:d.includes("top");let r=0,y=0;Array.from(I).reverse().forEach((S,D)=>{const N=S;N.classList.add("Toastify__toast--stacked"),D>0&&(N.dataset.collapsed=`${s}`),N.dataset.pos||(N.dataset.pos=u?"top":"bot");const i=r*(s?.2:1)+(s?0:m*D);N.style.setProperty("--y",`${u?i:-1*i}px`),N.style.setProperty("--g",`${m}`),N.style.setProperty("--s",""+(1-(s?y:0))),r+=N.offsetHeight,y+=.025})}},[s,p,o]),v.createElement("div",{ref:c,className:"Toastify",id:C,onMouseEnter:()=>{o&&(a(!1),T.pause())},onMouseLeave:g},n((d,I)=>{const m=I.length?{...l}:{...l,pointerEvents:"none"};return v.createElement("div",{className:L(d),style:m,key:`container-${d}`},I.map(u=>{let{content:r,props:y}=u;return v.createElement(Pe,{...y,stacked:o,collapseAll:g,isIn:h(y.toastId,y.containerId),style:y.style,key:`toast-${y.key}`},r)}))}))}export{T as B,xe as D,De as Q,Me as T,F as c};
