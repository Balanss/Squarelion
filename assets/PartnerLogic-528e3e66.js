import{r as l,_ as w,d as H,R as q,e as g,j as S,b as ie,z as se,s as G,c as ae,g as Ee,a as Ye,f as Ce,i as he}from"./index-4da4f493.js";import{_ as qe,T as me,u as be,a as W}from"./TransitionGroupContext-0c17a92f.js";import{f as We}from"./Nav-8bc21691.js";let J=!0,oe=!1,ve;const He={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Ge(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&He[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Je(e){e.metaKey||e.altKey||e.ctrlKey||(J=!0)}function ne(){J=!1}function Qe(){this.visibilityState==="hidden"&&oe&&(J=!0)}function Ze(e){e.addEventListener("keydown",Je,!0),e.addEventListener("mousedown",ne,!0),e.addEventListener("pointerdown",ne,!0),e.addEventListener("touchstart",ne,!0),e.addEventListener("visibilitychange",Qe,!0)}function et(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return J||Ge(t)}function tt(){const e=l.useCallback(o=>{o!=null&&Ze(o.ownerDocument)},[]),t=l.useRef(!1);function n(){return t.current?(oe=!0,window.clearTimeout(ve),ve=window.setTimeout(()=>{oe=!1},100),t.current=!1,!0):!1}function s(o){return et(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:s,onBlur:n,ref:e}}function nt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e,t){var n=function(r){return t&&l.isValidElement(r)?t(r):r},s=Object.create(null);return e&&l.Children.map(e,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function ot(e,t){e=e||{},t=t||{};function n(f){return f in t?t[f]:e[f]}var s=Object.create(null),o=[];for(var r in e)r in t?o.length&&(s[r]=o,o=[]):o.push(r);var i,c={};for(var u in t){if(s[u])for(i=0;i<s[u].length;i++){var p=s[u][i];c[s[u][i]]=n(p)}c[u]=n(u)}for(i=0;i<o.length;i++)c[o[i]]=n(o[i]);return c}function N(e,t,n){return n[t]!=null?n[t]:e.props[t]}function rt(e,t){return le(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:N(n,"appear",e),enter:N(n,"enter",e),exit:N(n,"exit",e)})})}function it(e,t,n){var s=le(e.children),o=ot(t,s);return Object.keys(o).forEach(function(r){var i=o[r];if(l.isValidElement(i)){var c=r in t,u=r in s,p=t[r],f=l.isValidElement(p)&&!p.props.in;u&&(!c||f)?o[r]=l.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:N(i,"exit",e),enter:N(i,"enter",e)}):!u&&c&&!f?o[r]=l.cloneElement(i,{in:!1}):u&&c&&l.isValidElement(p)&&(o[r]=l.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:N(i,"exit",e),enter:N(i,"enter",e)}))}}),o}var st=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},at={component:"div",childFactory:function(t){return t}},ue=function(e){qe(t,e);function t(s,o){var r;r=e.call(this,s,o)||this;var i=r.handleExited.bind(nt(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var i=r.children,c=r.handleExited,u=r.firstRender;return{children:u?rt(o,c):it(o,i,c),firstRender:!1}},n.handleExited=function(o,r){var i=le(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var u=w({},c.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,r=o.component,i=o.childFactory,c=H(o,["component","childFactory"]),u=this.state.contextValue,p=st(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?q.createElement(me.Provider,{value:u},p):q.createElement(me.Provider,{value:u},q.createElement(r,c,p))},t}(q.Component);ue.propTypes={};ue.defaultProps=at;const lt=ue;function ut(e){const{className:t,classes:n,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:c,onExited:u,timeout:p}=e,[f,m]=l.useState(!1),v=g(t,n.ripple,n.rippleVisible,s&&n.ripplePulsate),C={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},h=g(n.child,f&&n.childLeaving,s&&n.childPulsate);return!c&&!f&&m(!0),l.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),S("span",{className:v,style:C,children:S("span",{className:h})})}const ct=ie("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),b=ct,pt=["center","classes","className"];let Q=e=>e,ge,Re,ye,Me;const re=550,dt=80,ft=se(ge||(ge=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ht=se(Re||(Re=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),mt=se(ye||(ye=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),bt=G("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),vt=G(ut,{name:"MuiTouchRipple",slot:"Ripple"})(Me||(Me=Q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),b.rippleVisible,ft,re,({theme:e})=>e.transitions.easing.easeInOut,b.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,b.child,b.childLeaving,ht,re,({theme:e})=>e.transitions.easing.easeInOut,b.childPulsate,mt,({theme:e})=>e.transitions.easing.easeInOut),gt=l.forwardRef(function(t,n){const s=ae({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i}=s,c=H(s,pt),[u,p]=l.useState([]),f=l.useRef(0),m=l.useRef(null);l.useEffect(()=>{m.current&&(m.current(),m.current=null)},[u]);const v=l.useRef(!1),C=l.useRef(0),h=l.useRef(null),R=l.useRef(null);l.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const K=l.useCallback(d=>{const{pulsate:y,rippleX:M,rippleY:L,rippleSize:_,cb:z}=d;p(T=>[...T,S(vt,{classes:{ripple:g(r.ripple,b.ripple),rippleVisible:g(r.rippleVisible,b.rippleVisible),ripplePulsate:g(r.ripplePulsate,b.ripplePulsate),child:g(r.child,b.child),childLeaving:g(r.childLeaving,b.childLeaving),childPulsate:g(r.childPulsate,b.childPulsate)},timeout:re,pulsate:y,rippleX:M,rippleY:L,rippleSize:_},f.current)]),f.current+=1,m.current=z},[r]),I=l.useCallback((d={},y={},M=()=>{})=>{const{pulsate:L=!1,center:_=o||y.pulsate,fakeElement:z=!1}=y;if((d==null?void 0:d.type)==="mousedown"&&v.current){v.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(v.current=!0);const T=z?null:R.current,$=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,B,k;if(_||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)x=Math.round($.width/2),B=Math.round($.height/2);else{const{clientX:D,clientY:P}=d.touches&&d.touches.length>0?d.touches[0]:d;x=Math.round(D-$.left),B=Math.round(P-$.top)}if(_)k=Math.sqrt((2*$.width**2+$.height**2)/3),k%2===0&&(k+=1);else{const D=Math.max(Math.abs((T?T.clientWidth:0)-x),x)*2+2,P=Math.max(Math.abs((T?T.clientHeight:0)-B),B)*2+2;k=Math.sqrt(D**2+P**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{K({pulsate:L,rippleX:x,rippleY:B,rippleSize:k,cb:M})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},dt)):K({pulsate:L,rippleX:x,rippleY:B,rippleSize:k,cb:M})},[o,K]),O=l.useCallback(()=>{I({},{pulsate:!0})},[I]),U=l.useCallback((d,y)=>{if(clearTimeout(C.current),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{U(d,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),m.current=y},[]);return l.useImperativeHandle(n,()=>({pulsate:O,start:I,stop:U}),[O,I,U]),S(bt,w({className:g(b.root,r.root,i),ref:R},c,{children:S(lt,{component:null,exit:!0,children:u})}))}),Rt=gt;function yt(e){return Ee("MuiButtonBase",e)}const Mt=ie("MuiButtonBase",["root","disabled","focusVisible"]),Tt=Mt,Et=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Ct=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:s,classes:o}=e,i=Ce({root:["root",t&&"disabled",n&&"focusVisible"]},yt,o);return n&&s&&(i.root+=` ${s}`),i},xt=G("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Tt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Pt=l.forwardRef(function(t,n){const s=ae({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:m=!1,focusRipple:v=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:K,onDragLeave:I,onFocus:O,onFocusVisible:U,onKeyDown:d,onKeyUp:y,onMouseDown:M,onMouseLeave:L,onMouseUp:_,onTouchEnd:z,onTouchMove:T,onTouchStart:$,tabIndex:x=0,TouchRippleProps:B,touchRippleRef:k,type:D}=s,P=H(s,Et),A=l.useRef(null),E=l.useRef(null),xe=be(E,k),{isFocusVisibleRef:ce,onFocus:Pe,onBlur:Ve,ref:we}=tt(),[F,X]=l.useState(!1);p&&F&&X(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{X(!0),A.current.focus()}}),[]);const[Z,$e]=l.useState(!1);l.useEffect(()=>{$e(!0)},[]);const Be=Z&&!f&&!p;l.useEffect(()=>{F&&v&&!f&&Z&&E.current.pulsate()},[f,v,F,Z]);function V(a,de,Xe=m){return W(fe=>(de&&de(fe),!Xe&&E.current&&E.current[a](fe),!0))}const ke=V("start",M),Le=V("stop",K),De=V("stop",I),Fe=V("stop",_),Ne=V("stop",a=>{F&&a.preventDefault(),L&&L(a)}),Se=V("start",$),Ie=V("stop",z),Ue=V("stop",T),_e=V("stop",a=>{Ve(a),ce.current===!1&&X(!1),h&&h(a)},!1),Ke=W(a=>{A.current||(A.current=a.currentTarget),Pe(a),ce.current===!0&&(X(!0),U&&U(a)),O&&O(a)}),ee=()=>{const a=A.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},te=l.useRef(!1),Oe=W(a=>{v&&!te.current&&F&&E.current&&a.key===" "&&(te.current=!0,E.current.stop(a,()=>{E.current.start(a)})),a.target===a.currentTarget&&ee()&&a.key===" "&&a.preventDefault(),d&&d(a),a.target===a.currentTarget&&ee()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),ze=W(a=>{v&&a.key===" "&&E.current&&F&&!a.defaultPrevented&&(te.current=!1,E.current.stop(a,()=>{E.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&ee()&&a.key===" "&&!a.defaultPrevented&&R(a)});let Y=u;Y==="button"&&(P.href||P.to)&&(Y=C);const j={};Y==="button"?(j.type=D===void 0?"button":D,j.disabled=p):(!P.href&&!P.to&&(j.role="button"),p&&(j["aria-disabled"]=p));const Ae=be(n,we,A),pe=w({},s,{centerRipple:r,component:u,disabled:p,disableRipple:f,disableTouchRipple:m,focusRipple:v,tabIndex:x,focusVisible:F}),je=Ct(pe);return Ye(xt,w({as:Y,className:g(je.root,c),ownerState:pe,onBlur:_e,onClick:R,onContextMenu:Le,onFocus:Ke,onKeyDown:Oe,onKeyUp:ze,onMouseDown:ke,onMouseLeave:Ne,onMouseUp:Fe,onDragLeave:De,onTouchEnd:Ie,onTouchMove:Ue,onTouchStart:Se,ref:Ae,tabIndex:p?-1:x,type:D},j,P,{children:[i,Be?S(Rt,w({ref:xe,center:r},B)):null]}))}),It=Pt,Vt=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Te=Vt;function wt(e){return Ee("MuiPaper",e)}ie("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const $t=["className","component","elevation","square","variant"],Bt=e=>{const{square:t,elevation:n,variant:s,classes:o}=e,r={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${n}`]};return Ce(r,wt,o)},kt=G("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return w({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&w({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${he("#fff",Te(t.elevation))}, ${he("#fff",Te(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Lt=l.forwardRef(function(t,n){const s=ae({props:t,name:"MuiPaper"}),{className:o,component:r="div",elevation:i=1,square:c=!1,variant:u="elevation"}=s,p=H(s,$t),f=w({},s,{component:r,elevation:i,square:c,variant:u}),m=Bt(f);return S(kt,w({as:r,ownerState:f,className:g(m.root,o),ref:n},p))}),Ut=Lt;function _t({setPartner:e}){const t=async()=>{try{return We.collection("partner").onSnapshot(s=>{const o=s.docs.map(r=>({id:r.id,...r.data()}));o.sort((r,i)=>r.id-i.id),e(o)})}catch(n){console.error("Error fetching partner data:",n)}};l.useEffect(()=>{t()},[])}export{It as B,Ut as P,_t as a};
