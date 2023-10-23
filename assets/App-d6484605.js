import{C as we,D as Ie,E as ve,e as Fe,f as G,_ as h,g as V,v as Oe,T as ge,y as q,F as ce,G as de,B as ue,j as ye,n as Te,i as ke,H as Re,I as De,s as se,l as Se,J as Be,K as Ae}from"./TransitionGroupContext-63719ffe.js";import{r as d,j as D,d as J,R as Q,a as Ce,c as Le}from"./index-2a8b4762.js";function fe(...e){return e.reduce((o,s)=>s==null?o:function(...r){o.apply(this,r),s.apply(this,r)},()=>{})}function H(e){return e&&e.ownerDocument||document}function ie(e){return H(e).defaultView||window}function $e(e){const o=e.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}const _e=["className","component"];function He(e={}){const{themeId:o,defaultTheme:s,defaultClassName:t="MuiBox-root",generateClassName:r}=e,n=we("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(Ie);return d.forwardRef(function(l,c){const u=ve(s),m=Fe(l),{className:E,component:v="div"}=m,f=G(m,_e);return D(n,h({as:v,ref:c,className:V(E,r?r(t):t),theme:o&&u[o]||u},f))})}const pe={disabled:!1};var Ue=function(o){return o.scrollTop},X="unmounted",K="exited",W="entering",z="entered",oe="exiting",$=function(e){Oe(o,e);function o(t,r){var n;n=e.call(this,t,r)||this;var i=r,a=i&&!i.isMounting?t.enter:t.appear,l;return n.appearStatus=null,t.in?a?(l=K,n.appearStatus=W):l=z:t.unmountOnExit||t.mountOnEnter?l=X:l=K,n.state={status:l},n.nextCallback=null,n}o.getDerivedStateFromProps=function(r,n){var i=r.in;return i&&n.status===X?{status:K}:null};var s=o.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(r){var n=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==W&&i!==z&&(n=W):(i===W||i===z)&&(n=oe)}this.updateStatus(!1,n)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var r=this.props.timeout,n,i,a;return n=i=a=r,r!=null&&typeof r!="number"&&(n=r.exit,i=r.enter,a=r.appear!==void 0?r.appear:i),{exit:n,enter:i,appear:a}},s.updateStatus=function(r,n){if(r===void 0&&(r=!1),n!==null)if(this.cancelNextCallback(),n===W){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:J.findDOMNode(this);i&&Ue(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===K&&this.setState({status:X})},s.performEnter=function(r){var n=this,i=this.props.enter,a=this.context?this.context.isMounting:r,l=this.props.nodeRef?[a]:[J.findDOMNode(this),a],c=l[0],u=l[1],m=this.getTimeouts(),E=a?m.appear:m.enter;if(!r&&!i||pe.disabled){this.safeSetState({status:z},function(){n.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:W},function(){n.props.onEntering(c,u),n.onTransitionEnd(E,function(){n.safeSetState({status:z},function(){n.props.onEntered(c,u)})})})},s.performExit=function(){var r=this,n=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:J.findDOMNode(this);if(!n||pe.disabled){this.safeSetState({status:K},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:oe},function(){r.props.onExiting(a),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:K},function(){r.props.onExited(a)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(r,n){n=this.setNextCallback(n),this.setState(r,n)},s.setNextCallback=function(r){var n=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,n.nextCallback=null,r(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},s.onTransitionEnd=function(r,n){this.setNextCallback(n);var i=this.props.nodeRef?this.props.nodeRef.current:J.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}r!=null&&setTimeout(this.nextCallback,r)},s.render=function(){var r=this.state.status;if(r===X)return null;var n=this.props,i=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=G(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Q.createElement(ge.Provider,{value:null},typeof i=="function"?i(r,a):Q.cloneElement(Q.Children.only(i),a))},o}(Q.Component);$.contextType=ge;$.propTypes={};function j(){}$.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j};$.UNMOUNTED=X;$.EXITED=K;$.ENTERING=W;$.ENTERED=z;$.EXITING=oe;const Ke=$;function Pe(e){return typeof e=="string"}function We(e,o,s){return e===void 0||Pe(e)?o:h({},o,{ownerState:h({},o.ownerState,s)})}const Ge={disableDefaultClasses:!1},je=d.createContext(Ge);function ze(e){const{disableDefaultClasses:o}=d.useContext(je);return s=>o?"":e(s)}function Ne(e,o=[]){if(e===void 0)return{};const s={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!o.includes(t)).forEach(t=>{s[t]=e[t]}),s}function re(e,o,s){return typeof e=="function"?e(o,s):e}function he(e){if(e===void 0)return{};const o={};return Object.keys(e).filter(s=>!(s.match(/^on[A-Z]/)&&typeof e[s]=="function")).forEach(s=>{o[s]=e[s]}),o}function Ve(e){const{getSlotProps:o,additionalProps:s,externalSlotProps:t,externalForwardedProps:r,className:n}=e;if(!o){const v=V(r==null?void 0:r.className,t==null?void 0:t.className,n,s==null?void 0:s.className),f=h({},s==null?void 0:s.style,r==null?void 0:r.style,t==null?void 0:t.style),R=h({},s,r,t);return v.length>0&&(R.className=v),Object.keys(f).length>0&&(R.style=f),{props:R,internalRef:void 0}}const i=Ne(h({},r,t)),a=he(t),l=he(r),c=o(i),u=V(c==null?void 0:c.className,s==null?void 0:s.className,n,r==null?void 0:r.className,t==null?void 0:t.className),m=h({},c==null?void 0:c.style,s==null?void 0:s.style,r==null?void 0:r.style,t==null?void 0:t.style),E=h({},c,s,l,a);return u.length>0&&(E.className=u),Object.keys(m).length>0&&(E.style=m),{props:E,internalRef:c.ref}}const Xe=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function me(e){var o;const{elementType:s,externalSlotProps:t,ownerState:r,skipResolvingSlotProps:n=!1}=e,i=G(e,Xe),a=n?{}:re(t,r),{props:l,internalRef:c}=Ve(h({},i,{externalSlotProps:a})),u=q(c,a==null?void 0:a.ref,(o=e.additionalProps)==null?void 0:o.ref);return We(s,h({},l,{ref:u}),r)}const Ye=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function qe(e){const o=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(o)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:o}function Ze(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const o=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let s=o(`[name="${e.name}"]:checked`);return s||(s=o(`[name="${e.name}"]`)),s!==e}function Je(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ze(e))}function Qe(e){const o=[],s=[];return Array.from(e.querySelectorAll(Ye)).forEach((t,r)=>{const n=qe(t);n===-1||!Je(t)||(n===0?o.push(t):s.push({documentOrder:r,tabIndex:n,node:t}))}),s.sort((t,r)=>t.tabIndex===r.tabIndex?t.documentOrder-r.documentOrder:t.tabIndex-r.tabIndex).map(t=>t.node).concat(o)}function et(){return!0}function tt(e){const{children:o,disableAutoFocus:s=!1,disableEnforceFocus:t=!1,disableRestoreFocus:r=!1,getTabbable:n=Qe,isEnabled:i=et,open:a}=e,l=d.useRef(!1),c=d.useRef(null),u=d.useRef(null),m=d.useRef(null),E=d.useRef(null),v=d.useRef(!1),f=d.useRef(null),R=q(o.ref,f),S=d.useRef(null);d.useEffect(()=>{!a||!f.current||(v.current=!s)},[s,a]),d.useEffect(()=>{if(!a||!f.current)return;const p=H(f.current);return f.current.contains(p.activeElement)||(f.current.hasAttribute("tabIndex")||f.current.setAttribute("tabIndex","-1"),v.current&&f.current.focus()),()=>{r||(m.current&&m.current.focus&&(l.current=!0,m.current.focus()),m.current=null)}},[a]),d.useEffect(()=>{if(!a||!f.current)return;const p=H(f.current),y=M=>{const{current:F}=f;if(F!==null){if(!p.hasFocus()||t||!i()||l.current){l.current=!1;return}if(!F.contains(p.activeElement)){if(M&&E.current!==M.target||p.activeElement!==E.current)E.current=null;else if(E.current!==null)return;if(!v.current)return;let I=[];if((p.activeElement===c.current||p.activeElement===u.current)&&(I=n(f.current)),I.length>0){var A,w;const B=!!((A=S.current)!=null&&A.shiftKey&&((w=S.current)==null?void 0:w.key)==="Tab"),L=I[0],b=I[I.length-1];typeof L!="string"&&typeof b!="string"&&(B?b.focus():L.focus())}else F.focus()}}},T=M=>{S.current=M,!(t||!i()||M.key!=="Tab")&&p.activeElement===f.current&&M.shiftKey&&(l.current=!0,u.current&&u.current.focus())};p.addEventListener("focusin",y),p.addEventListener("keydown",T,!0);const N=setInterval(()=>{p.activeElement&&p.activeElement.tagName==="BODY"&&y(null)},50);return()=>{clearInterval(N),p.removeEventListener("focusin",y),p.removeEventListener("keydown",T,!0)}},[s,t,r,i,a,n]);const P=p=>{m.current===null&&(m.current=p.relatedTarget),v.current=!0,E.current=p.target;const y=o.props.onFocus;y&&y(p)},C=p=>{m.current===null&&(m.current=p.relatedTarget),v.current=!0};return Ce(d.Fragment,{children:[D("div",{tabIndex:a?0:-1,onFocus:C,ref:c,"data-testid":"sentinelStart"}),d.cloneElement(o,{ref:R,onFocus:P}),D("div",{tabIndex:a?0:-1,onFocus:C,ref:u,"data-testid":"sentinelEnd"})]})}function nt(e){return typeof e=="function"?e():e}const ot=d.forwardRef(function(o,s){const{children:t,container:r,disablePortal:n=!1}=o,[i,a]=d.useState(null),l=q(d.isValidElement(t)?t.ref:null,s);if(ce(()=>{n||a(nt(r)||document.body)},[r,n]),ce(()=>{if(i&&!n)return de(s,i),()=>{de(s,null)}},[s,i,n]),n){if(d.isValidElement(t)){const c={ref:l};return d.cloneElement(t,c)}return D(d.Fragment,{children:t})}return D(d.Fragment,{children:i&&Le.createPortal(t,i)})});function rt(e){const o=H(e);return o.body===e?ie(e).innerWidth>o.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Y(e,o){o?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ee(e){return parseInt(ie(e).getComputedStyle(e).paddingRight,10)||0}function st(e){const s=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,t=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return s||t}function xe(e,o,s,t,r){const n=[o,s,...t];[].forEach.call(e.children,i=>{const a=n.indexOf(i)===-1,l=!st(i);a&&l&&Y(i,r)})}function ne(e,o){let s=-1;return e.some((t,r)=>o(t)?(s=r,!0):!1),s}function it(e,o){const s=[],t=e.container;if(!o.disableScrollLock){if(rt(t)){const i=$e(H(t));s.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${Ee(t)+i}px`;const a=H(t).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{s.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Ee(l)+i}px`})}let n;if(t.parentNode instanceof DocumentFragment)n=H(t).body;else{const i=t.parentElement,a=ie(t);n=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:t}s.push({value:n.style.overflow,property:"overflow",el:n},{value:n.style.overflowX,property:"overflow-x",el:n},{value:n.style.overflowY,property:"overflow-y",el:n}),n.style.overflow="hidden"}return()=>{s.forEach(({value:n,el:i,property:a})=>{n?i.style.setProperty(a,n):i.style.removeProperty(a)})}}function at(e){const o=[];return[].forEach.call(e.children,s=>{s.getAttribute("aria-hidden")==="true"&&o.push(s)}),o}class lt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(o,s){let t=this.modals.indexOf(o);if(t!==-1)return t;t=this.modals.length,this.modals.push(o),o.modalRef&&Y(o.modalRef,!1);const r=at(s);xe(s,o.mount,o.modalRef,r,!0);const n=ne(this.containers,i=>i.container===s);return n!==-1?(this.containers[n].modals.push(o),t):(this.containers.push({modals:[o],container:s,restore:null,hiddenSiblings:r}),t)}mount(o,s){const t=ne(this.containers,n=>n.modals.indexOf(o)!==-1),r=this.containers[t];r.restore||(r.restore=it(r,s))}remove(o,s=!0){const t=this.modals.indexOf(o);if(t===-1)return t;const r=ne(this.containers,i=>i.modals.indexOf(o)!==-1),n=this.containers[r];if(n.modals.splice(n.modals.indexOf(o),1),this.modals.splice(t,1),n.modals.length===0)n.restore&&n.restore(),o.modalRef&&Y(o.modalRef,s),xe(n.container,o.mount,o.modalRef,n.hiddenSiblings,!1),this.containers.splice(r,1);else{const i=n.modals[n.modals.length-1];i.modalRef&&Y(i.modalRef,!1)}return t}isTopModal(o){return this.modals.length>0&&this.modals[this.modals.length-1]===o}}function ct(e){return typeof e=="function"?e():e}function dt(e){return e?e.props.hasOwnProperty("in"):!1}const ut=new lt;function ft(e){const{container:o,disableEscapeKeyDown:s=!1,disableScrollLock:t=!1,manager:r=ut,closeAfterTransition:n=!1,onTransitionEnter:i,onTransitionExited:a,children:l,onClose:c,open:u,rootRef:m}=e,E=d.useRef({}),v=d.useRef(null),f=d.useRef(null),R=q(f,m),[S,P]=d.useState(!u),C=dt(l);let p=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(p=!1);const y=()=>H(v.current),T=()=>(E.current.modalRef=f.current,E.current.mount=v.current,E.current),N=()=>{r.mount(T(),{disableScrollLock:t}),f.current&&(f.current.scrollTop=0)},M=ue(()=>{const x=ct(o)||y().body;r.add(T(),x),f.current&&N()}),F=d.useCallback(()=>r.isTopModal(T()),[r]),A=ue(x=>{v.current=x,x&&(u&&F()?N():f.current&&Y(f.current,p))}),w=d.useCallback(()=>{r.remove(T(),p)},[p,r]);d.useEffect(()=>()=>{w()},[w]),d.useEffect(()=>{u?M():(!C||!n)&&w()},[u,w,C,n,M]);const I=x=>g=>{var O;(O=x.onKeyDown)==null||O.call(x,g),!(g.key!=="Escape"||!F())&&(s||(g.stopPropagation(),c&&c(g,"escapeKeyDown")))},B=x=>g=>{var O;(O=x.onClick)==null||O.call(x,g),g.target===g.currentTarget&&c&&c(g,"backdropClick")};return{getRootProps:(x={})=>{const g=Ne(e);delete g.onTransitionEnter,delete g.onTransitionExited;const O=h({},g,x);return h({role:"presentation"},O,{onKeyDown:I(O),ref:R})},getBackdropProps:(x={})=>{const g=x;return h({"aria-hidden":!0},g,{onClick:B(g),open:u})},getTransitionProps:()=>{const x=()=>{P(!1),i&&i()},g=()=>{P(!0),a&&a(),n&&w()};return{onEnter:fe(x,l.props.onEnter),onExited:fe(g,l.props.onExited)}},rootRef:R,portalRef:A,isTopModal:F,exited:S,hasTransition:C}}function pt(e){return ye("MuiModal",e)}Te("MuiModal",["root","hidden","backdrop"]);const ht=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],mt=e=>{const{open:o,exited:s}=e;return ke({root:["root",!o&&s&&"hidden"],backdrop:["backdrop"]},ze(pt))},Et=d.forwardRef(function(o,s){var t;const{children:r,closeAfterTransition:n=!1,container:i,disableAutoFocus:a=!1,disableEnforceFocus:l=!1,disableEscapeKeyDown:c=!1,disablePortal:u=!1,disableRestoreFocus:m=!1,disableScrollLock:E=!1,hideBackdrop:v=!1,keepMounted:f=!1,onBackdropClick:R,open:S,slotProps:P={},slots:C={}}=o,p=G(o,ht),y=h({},o,{closeAfterTransition:n,disableAutoFocus:a,disableEnforceFocus:l,disableEscapeKeyDown:c,disablePortal:u,disableRestoreFocus:m,disableScrollLock:E,hideBackdrop:v,keepMounted:f}),{getRootProps:T,getBackdropProps:N,getTransitionProps:M,portalRef:F,isTopModal:A,exited:w,hasTransition:I}=ft(h({},y,{rootRef:s})),B=h({},y,{exited:w,hasTransition:I}),L=mt(B),b={};if(r.props.tabIndex===void 0&&(b.tabIndex="-1"),I){const{onEnter:_,onExited:U}=M();b.onEnter=_,b.onExited=U}const k=(t=C.root)!=null?t:"div",x=me({elementType:k,externalSlotProps:P.root,externalForwardedProps:p,getSlotProps:T,className:L.root,ownerState:B}),g=C.backdrop,O=me({elementType:g,externalSlotProps:P.backdrop,getSlotProps:_=>N(h({},_,{onClick:U=>{R&&R(U),_!=null&&_.onClick&&_.onClick(U)}})),className:L.backdrop,ownerState:B});return!f&&!S&&(!I||w)?null:D(ot,{ref:F,container:i,disablePortal:u,children:Ce(k,h({},x,{children:[!v&&g?D(g,h({},O)):null,D(tt,{disableEnforceFocus:l,disableAutoFocus:a,disableRestoreFocus:m,isEnabled:A,open:S,children:d.cloneElement(r,b)})]}))})});function xt(){const e=ve(De);return e[Re]||e}const bt=e=>e.scrollTop;function be(e,o){var s,t;const{timeout:r,easing:n,style:i={}}=e;return{duration:(s=i.transitionDuration)!=null?s:typeof r=="number"?r:r[o.mode]||0,easing:(t=i.transitionTimingFunction)!=null?t:typeof n=="object"?n[o.mode]:n,delay:i.transitionDelay}}const vt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],gt={entering:{opacity:1},entered:{opacity:1}},yt=d.forwardRef(function(o,s){const t=xt(),r={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:n,appear:i=!0,children:a,easing:l,in:c,onEnter:u,onEntered:m,onEntering:E,onExit:v,onExited:f,onExiting:R,style:S,timeout:P=r,TransitionComponent:C=Ke}=o,p=G(o,vt),y=d.useRef(null),T=q(y,a.ref,s),N=b=>k=>{if(b){const x=y.current;k===void 0?b(x):b(x,k)}},M=N(E),F=N((b,k)=>{bt(b);const x=be({style:S,timeout:P,easing:l},{mode:"enter"});b.style.webkitTransition=t.transitions.create("opacity",x),b.style.transition=t.transitions.create("opacity",x),u&&u(b,k)}),A=N(m),w=N(R),I=N(b=>{const k=be({style:S,timeout:P,easing:l},{mode:"exit"});b.style.webkitTransition=t.transitions.create("opacity",k),b.style.transition=t.transitions.create("opacity",k),v&&v(b)}),B=N(f);return D(C,h({appear:i,in:c,nodeRef:y,onEnter:F,onEntered:A,onEntering:M,onExit:I,onExited:B,onExiting:w,addEndListener:b=>{n&&n(y.current,b)},timeout:P},p,{children:(b,k)=>d.cloneElement(a,h({style:h({opacity:0,visibility:b==="exited"&&!c?"hidden":void 0},gt[b],S,a.props.style),ref:T},k))}))}),Tt=yt;function kt(e){return ye("MuiBackdrop",e)}Te("MuiBackdrop",["root","invisible"]);const Rt=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],St=e=>{const{classes:o,invisible:s}=e;return ke({root:["root",s&&"invisible"]},kt,o)},Ct=se("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.invisible&&o.invisible]}})(({ownerState:e})=>h({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Pt=d.forwardRef(function(o,s){var t,r,n;const i=Se({props:o,name:"MuiBackdrop"}),{children:a,className:l,component:c="div",components:u={},componentsProps:m={},invisible:E=!1,open:v,slotProps:f={},slots:R={},TransitionComponent:S=Tt,transitionDuration:P}=i,C=G(i,Rt),p=h({},i,{component:c,invisible:E}),y=St(p),T=(t=f.root)!=null?t:m.root;return D(S,h({in:v,timeout:P},C,{children:D(Ct,h({"aria-hidden":!0},T,{as:(r=(n=R.root)!=null?n:u.Root)!=null?r:c,className:V(y.root,l,T==null?void 0:T.className),ownerState:h({},p,T==null?void 0:T.ownerState),classes:y,ref:s,children:a}))}))}),Nt=Pt,Mt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],wt=se("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,!s.open&&s.exited&&o.hidden]}})(({theme:e,ownerState:o})=>h({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!o.open&&o.exited&&{visibility:"hidden"})),It=se(Nt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,o)=>o.backdrop})({zIndex:-1}),Ft=d.forwardRef(function(o,s){var t,r,n,i,a,l;const c=Se({name:"MuiModal",props:o}),{BackdropComponent:u=It,BackdropProps:m,classes:E,className:v,closeAfterTransition:f=!1,children:R,container:S,component:P,components:C={},componentsProps:p={},disableAutoFocus:y=!1,disableEnforceFocus:T=!1,disableEscapeKeyDown:N=!1,disablePortal:M=!1,disableRestoreFocus:F=!1,disableScrollLock:A=!1,hideBackdrop:w=!1,keepMounted:I=!1,onBackdropClick:B,onClose:L,open:b,slotProps:k,slots:x,theme:g}=c,O=G(c,Mt),[_,U]=d.useState(!0),ae={container:S,closeAfterTransition:f,disableAutoFocus:y,disableEnforceFocus:T,disableEscapeKeyDown:N,disablePortal:M,disableRestoreFocus:F,disableScrollLock:A,hideBackdrop:w,keepMounted:I,onBackdropClick:B,onClose:L,open:b},Z=h({},c,ae,{exited:_}),le=(t=(r=x==null?void 0:x.root)!=null?r:C.Root)!=null?t:wt,Me=(n=(i=x==null?void 0:x.backdrop)!=null?i:C.Backdrop)!=null?n:u,ee=(a=k==null?void 0:k.root)!=null?a:p.root,te=(l=k==null?void 0:k.backdrop)!=null?l:p.backdrop;return D(Et,h({slots:{root:le,backdrop:Me},slotProps:{root:()=>h({},re(ee,Z),!Pe(le)&&{as:P,theme:g},{className:V(v,ee==null?void 0:ee.className,E==null?void 0:E.root,!Z.open&&Z.exited&&(E==null?void 0:E.hidden))}),backdrop:()=>h({},m,re(te,Z),{className:V(te==null?void 0:te.className,m==null?void 0:m.className,E==null?void 0:E.backdrop)})},onTransitionEnter:()=>U(!1),onTransitionExited:()=>U(!0),ref:s},O,ae,{children:R}))}),Lt=Ft,Ot=Be(),Dt=He({themeId:Re,defaultTheme:Ot,defaultClassName:"MuiBox-root",generateClassName:Ae.generate}),$t=Dt;export{$t as B,Lt as M,Ke as T,be as g,ie as o,bt as r,xt as u};
