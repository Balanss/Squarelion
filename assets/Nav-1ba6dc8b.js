import{r as y,w as cb,_ as D,d as oe,c as Te,j as M,x as ub,g as Bt,a as It,i as cn,R as Qt,y as Bo,z as Kl,s as $e,b as qt,n as Wl,o as st,m as Yt,A as lb,t as hb,T as db,B as fb,C as pb,D as mb,u as gb,k as Zi}from"./index-ad0cde8e.js";function Bu(...n){return n.reduce((e,t)=>t==null?e:function(...i){e.apply(this,i),t.apply(this,i)},()=>{})}function $m(n,e=166){let t;function r(...i){const s=()=>{n.apply(this,i)};clearTimeout(t),t=setTimeout(s,e)}return r.clear=()=>{clearTimeout(t)},r}function yb(n,e){return()=>null}function vb(n,e){return y.isValidElement(n)&&e.indexOf(n.type.muiName)!==-1}function Tt(n){return n&&n.ownerDocument||document}function gi(n){return Tt(n).defaultView||window}function wb(n,e){return()=>null}function pa(n,e){typeof n=="function"?n(e):n&&(n.current=e)}const Ib=typeof window<"u"?y.useLayoutEffect:y.useEffect,yi=Ib;let af=0;function bb(n){const[e,t]=y.useState(n),r=n||e;return y.useEffect(()=>{e==null&&(af+=1,t(`mui-${af}`))},[e]),r}const cf=cb["useId".toString()];function Eb(n){if(cf!==void 0){const e=cf();return n??e}return bb(n)}function _b(n,e,t,r,i){return null}function Tb({controlled:n,default:e,name:t,state:r="value"}){const{current:i}=y.useRef(n!==void 0),[s,o]=y.useState(e),a=i?n:s,c=y.useCallback(u=>{i||o(u)},[]);return[a,c]}function fr(n){const e=y.useRef(n);return yi(()=>{e.current=n}),y.useCallback((...t)=>(0,e.current)(...t),[])}function Nt(...n){return y.useMemo(()=>n.every(e=>e==null)?null:e=>{n.forEach(t=>{pa(t,e)})},n)}let Qa=!0,qu=!1,uf;const Sb={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Cb(n){const{type:e,tagName:t}=n;return!!(t==="INPUT"&&Sb[e]&&!n.readOnly||t==="TEXTAREA"&&!n.readOnly||n.isContentEditable)}function kb(n){n.metaKey||n.altKey||n.ctrlKey||(Qa=!0)}function ru(){Qa=!1}function Ab(){this.visibilityState==="hidden"&&qu&&(Qa=!0)}function Rb(n){n.addEventListener("keydown",kb,!0),n.addEventListener("mousedown",ru,!0),n.addEventListener("pointerdown",ru,!0),n.addEventListener("touchstart",ru,!0),n.addEventListener("visibilitychange",Ab,!0)}function xb(n){const{target:e}=n;try{return e.matches(":focus-visible")}catch{}return Qa||Cb(e)}function Vm(){const n=y.useCallback(i=>{i!=null&&Rb(i.ownerDocument)},[]),e=y.useRef(!1);function t(){return e.current?(qu=!0,window.clearTimeout(uf),uf=window.setTimeout(()=>{qu=!1},100),e.current=!1,!0):!1}function r(i){return xb(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:t,ref:n}}function Um(n){const e=n.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Hl(n){return typeof n=="string"}function Nb(n,e,t){return n===void 0||Hl(n)?e:D({},e,{ownerState:D({},e.ownerState,t)})}const Db={disableDefaultClasses:!1},Pb=y.createContext(Db);function Ob(n){const{disableDefaultClasses:e}=y.useContext(Pb);return t=>e?"":n(t)}function Mb(n,e=[]){if(n===void 0)return{};const t={};return Object.keys(n).filter(r=>r.match(/^on[A-Z]/)&&typeof n[r]=="function"&&!e.includes(r)).forEach(r=>{t[r]=n[r]}),t}function ju(n,e){return typeof n=="function"?n(e):n}function lf(n){if(n===void 0)return{};const e={};return Object.keys(n).filter(t=>!(t.match(/^on[A-Z]/)&&typeof n[t]=="function")).forEach(t=>{e[t]=n[t]}),e}function Lb(n){const{getSlotProps:e,additionalProps:t,externalSlotProps:r,externalForwardedProps:i,className:s}=n;if(!e){const f=oe(i==null?void 0:i.className,r==null?void 0:r.className,s,t==null?void 0:t.className),p=D({},t==null?void 0:t.style,i==null?void 0:i.style,r==null?void 0:r.style),v=D({},t,i,r);return f.length>0&&(v.className=f),Object.keys(p).length>0&&(v.style=p),{props:v,internalRef:void 0}}const o=Mb(D({},i,r)),a=lf(r),c=lf(i),u=e(o),l=oe(u==null?void 0:u.className,t==null?void 0:t.className,s,i==null?void 0:i.className,r==null?void 0:r.className),h=D({},u==null?void 0:u.style,t==null?void 0:t.style,i==null?void 0:i.style,r==null?void 0:r.style),d=D({},u,t,c,a);return l.length>0&&(d.className=l),Object.keys(h).length>0&&(d.style=h),{props:d,internalRef:u.ref}}const Fb=["elementType","externalSlotProps","ownerState"];function ma(n){var e;const{elementType:t,externalSlotProps:r,ownerState:i}=n,s=Te(n,Fb),o=ju(r,i),{props:a,internalRef:c}=Lb(D({},s,{externalSlotProps:o})),u=Nt(c,o==null?void 0:o.ref,(e=n.additionalProps)==null?void 0:e.ref);return Nb(t,D({},a,{ref:u}),i)}const $b=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Vb(n){const e=parseInt(n.getAttribute("tabindex")||"",10);return Number.isNaN(e)?n.contentEditable==="true"||(n.nodeName==="AUDIO"||n.nodeName==="VIDEO"||n.nodeName==="DETAILS")&&n.getAttribute("tabindex")===null?0:n.tabIndex:e}function Ub(n){if(n.tagName!=="INPUT"||n.type!=="radio"||!n.name)return!1;const e=r=>n.ownerDocument.querySelector(`input[type="radio"]${r}`);let t=e(`[name="${n.name}"]:checked`);return t||(t=e(`[name="${n.name}"]`)),t!==n}function Bb(n){return!(n.disabled||n.tagName==="INPUT"&&n.type==="hidden"||Ub(n))}function qb(n){const e=[],t=[];return Array.from(n.querySelectorAll($b)).forEach((r,i)=>{const s=Vb(r);s===-1||!Bb(r)||(s===0?e.push(r):t.push({documentOrder:i,tabIndex:s,node:r}))}),t.sort((r,i)=>r.tabIndex===i.tabIndex?r.documentOrder-i.documentOrder:r.tabIndex-i.tabIndex).map(r=>r.node).concat(e)}function jb(){return!0}function zb(n){const{children:e,disableAutoFocus:t=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:s=qb,isEnabled:o=jb,open:a}=n,c=y.useRef(!1),u=y.useRef(null),l=y.useRef(null),h=y.useRef(null),d=y.useRef(null),f=y.useRef(!1),p=y.useRef(null),v=Nt(e.ref,p),b=y.useRef(null);y.useEffect(()=>{!a||!p.current||(f.current=!t)},[t,a]),y.useEffect(()=>{if(!a||!p.current)return;const w=Tt(p.current);return p.current.contains(w.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),f.current&&p.current.focus()),()=>{i||(h.current&&h.current.focus&&(c.current=!0,h.current.focus()),h.current=null)}},[a]),y.useEffect(()=>{if(!a||!p.current)return;const w=Tt(p.current),I=N=>{const{current:q}=p;if(q!==null){if(!w.hasFocus()||r||!o()||c.current){c.current=!1;return}if(!q.contains(w.activeElement)){if(N&&d.current!==N.target||w.activeElement!==d.current)d.current=null;else if(d.current!==null)return;if(!f.current)return;let W=[];if((w.activeElement===u.current||w.activeElement===l.current)&&(W=s(p.current)),W.length>0){var H,U;const he=!!((H=b.current)!=null&&H.shiftKey&&((U=b.current)==null?void 0:U.key)==="Tab"),ge=W[0],G=W[W.length-1];typeof ge!="string"&&typeof G!="string"&&(he?G.focus():ge.focus())}else q.focus()}}},S=N=>{b.current=N,!(r||!o()||N.key!=="Tab")&&w.activeElement===p.current&&N.shiftKey&&(c.current=!0,l.current&&l.current.focus())};w.addEventListener("focusin",I),w.addEventListener("keydown",S,!0);const k=setInterval(()=>{w.activeElement&&w.activeElement.tagName==="BODY"&&I(null)},50);return()=>{clearInterval(k),w.removeEventListener("focusin",I),w.removeEventListener("keydown",S,!0)}},[t,r,i,o,a,s]);const C=w=>{h.current===null&&(h.current=w.relatedTarget),f.current=!0,d.current=w.target;const I=e.props.onFocus;I&&I(w)},P=w=>{h.current===null&&(h.current=w.relatedTarget),f.current=!0};return M.jsxs(y.Fragment,{children:[M.jsx("div",{tabIndex:a?0:-1,onFocus:P,ref:u,"data-testid":"sentinelStart"}),y.cloneElement(e,{ref:v,onFocus:C}),M.jsx("div",{tabIndex:a?0:-1,onFocus:P,ref:l,"data-testid":"sentinelEnd"})]})}function Gb(n){return typeof n=="function"?n():n}const Kb=y.forwardRef(function(e,t){const{children:r,container:i,disablePortal:s=!1}=e,[o,a]=y.useState(null),c=Nt(y.isValidElement(r)?r.ref:null,t);if(yi(()=>{s||a(Gb(i)||document.body)},[i,s]),yi(()=>{if(o&&!s)return pa(t,o),()=>{pa(t,null)}},[t,o,s]),s){if(y.isValidElement(r)){const u={ref:c};return y.cloneElement(r,u)}return M.jsx(y.Fragment,{children:r})}return M.jsx(y.Fragment,{children:o&&ub.createPortal(r,o)})}),Wb=Kb;function Hb(n){const e=Tt(n);return e.body===n?gi(n).innerWidth>e.documentElement.clientWidth:n.scrollHeight>n.clientHeight}function Es(n,e){e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden")}function hf(n){return parseInt(gi(n).getComputedStyle(n).paddingRight,10)||0}function Qb(n){const t=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(n.tagName)!==-1,r=n.tagName==="INPUT"&&n.getAttribute("type")==="hidden";return t||r}function df(n,e,t,r,i){const s=[e,t,...r];[].forEach.call(n.children,o=>{const a=s.indexOf(o)===-1,c=!Qb(o);a&&c&&Es(o,i)})}function iu(n,e){let t=-1;return n.some((r,i)=>e(r)?(t=i,!0):!1),t}function Yb(n,e){const t=[],r=n.container;if(!e.disableScrollLock){if(Hb(r)){const o=Um(Tt(r));t.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${hf(r)+o}px`;const a=Tt(r).querySelectorAll(".mui-fixed");[].forEach.call(a,c=>{t.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${hf(c)+o}px`})}let s;if(r.parentNode instanceof DocumentFragment)s=Tt(r).body;else{const o=r.parentElement,a=gi(r);s=(o==null?void 0:o.nodeName)==="HTML"&&a.getComputedStyle(o).overflowY==="scroll"?o:r}t.push({value:s.style.overflow,property:"overflow",el:s},{value:s.style.overflowX,property:"overflow-x",el:s},{value:s.style.overflowY,property:"overflow-y",el:s}),s.style.overflow="hidden"}return()=>{t.forEach(({value:s,el:o,property:a})=>{s?o.style.setProperty(a,s):o.style.removeProperty(a)})}}function Xb(n){const e=[];return[].forEach.call(n.children,t=>{t.getAttribute("aria-hidden")==="true"&&e.push(t)}),e}class Jb{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let r=this.modals.indexOf(e);if(r!==-1)return r;r=this.modals.length,this.modals.push(e),e.modalRef&&Es(e.modalRef,!1);const i=Xb(t);df(t,e.mount,e.modalRef,i,!0);const s=iu(this.containers,o=>o.container===t);return s!==-1?(this.containers[s].modals.push(e),r):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:i}),r)}mount(e,t){const r=iu(this.containers,s=>s.modals.indexOf(e)!==-1),i=this.containers[r];i.restore||(i.restore=Yb(i,t))}remove(e,t=!0){const r=this.modals.indexOf(e);if(r===-1)return r;const i=iu(this.containers,o=>o.modals.indexOf(e)!==-1),s=this.containers[i];if(s.modals.splice(s.modals.indexOf(e),1),this.modals.splice(r,1),s.modals.length===0)s.restore&&s.restore(),e.modalRef&&Es(e.modalRef,t),df(s.container,e.mount,e.modalRef,s.hiddenSiblings,!1),this.containers.splice(i,1);else{const o=s.modals[s.modals.length-1];o.modalRef&&Es(o.modalRef,!1)}return r}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}function Zb(n){return Bt("MuiModal",n)}It("MuiModal",["root","hidden","backdrop"]);const eE=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],tE=n=>{const{open:e,exited:t}=n;return cn({root:["root",!e&&t&&"hidden"],backdrop:["backdrop"]},Ob(Zb))};function nE(n){return typeof n=="function"?n():n}function rE(n){return n?n.props.hasOwnProperty("in"):!1}const iE=new Jb,sE=y.forwardRef(function(e,t){var r,i;const{children:s,closeAfterTransition:o=!1,container:a,disableAutoFocus:c=!1,disableEnforceFocus:u=!1,disableEscapeKeyDown:l=!1,disablePortal:h=!1,disableRestoreFocus:d=!1,disableScrollLock:f=!1,hideBackdrop:p=!1,keepMounted:v=!1,manager:b=iE,onBackdropClick:C,onClose:P,onKeyDown:w,open:I,onTransitionEnter:S,onTransitionExited:k,slotProps:N={},slots:q={}}=e,H=Te(e,eE),U=b,[W,he]=y.useState(!I),ge=y.useRef({}),G=y.useRef(null),$=y.useRef(null),Y=Nt($,t),de=rE(s),fe=(r=e["aria-hidden"])!=null?r:!0,qe=()=>Tt(G.current),ke=()=>(ge.current.modalRef=$.current,ge.current.mountNode=G.current,ge.current),ut=()=>{U.mount(ke(),{disableScrollLock:f}),$.current&&($.current.scrollTop=0)},Mt=fr(()=>{const ye=nE(a)||qe().body;U.add(ke(),ye),$.current&&ut()}),jt=y.useCallback(()=>U.isTopModal(ke()),[U]),lt=fr(ye=>{G.current=ye,!(!ye||!$.current)&&(I&&jt()?ut():Es($.current,fe))}),Je=y.useCallback(()=>{U.remove(ke(),fe)},[U,fe]);y.useEffect(()=>()=>{Je()},[Je]),y.useEffect(()=>{I?Mt():(!de||!o)&&Je()},[I,Je,de,o,Mt]);const nt=D({},e,{closeAfterTransition:o,disableAutoFocus:c,disableEnforceFocus:u,disableEscapeKeyDown:l,disablePortal:h,disableRestoreFocus:d,disableScrollLock:f,exited:W,hideBackdrop:p,keepMounted:v}),nr=tE(nt),Qi=()=>{he(!1),S&&S()},ht=()=>{he(!0),k&&k(),o&&Je()},Yi=ye=>{ye.target===ye.currentTarget&&(C&&C(ye),P&&P(ye,"backdropClick"))},Xi=ye=>{w&&w(ye),!(ye.key!=="Escape"||!jt())&&(l||(ye.stopPropagation(),P&&P(ye,"escapeKeyDown")))},re={};s.props.tabIndex===void 0&&(re.tabIndex="-1"),de&&(re.onEnter=Bu(Qi,s.props.onEnter),re.onExited=Bu(ht,s.props.onExited));const Ae=(i=q.root)!=null?i:"div",je=ma({elementType:Ae,externalSlotProps:N.root,externalForwardedProps:H,additionalProps:{ref:Y,role:"presentation",onKeyDown:Xi},className:nr.root,ownerState:nt}),Sn=q.backdrop,zt=ma({elementType:Sn,externalSlotProps:N.backdrop,additionalProps:{"aria-hidden":!0,onClick:Yi,open:I},className:nr.backdrop,ownerState:nt});return!v&&!I&&(!de||W)?null:M.jsx(Wb,{ref:lt,container:a,disablePortal:h,children:M.jsxs(Ae,D({},je,{children:[!p&&Sn?M.jsx(Sn,D({},zt)):null,M.jsx(zb,{disableEnforceFocus:u,disableAutoFocus:c,disableRestoreFocus:d,isEnabled:jt,open:I,children:y.cloneElement(s,re)})]}))})}),oE=sE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},aE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):aE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new cE;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(n){const e=Bm(n);return qm.encodeByteArray(e,!0)},ga=function(n){return uE(n).replace(/\./g,"")},jm=function(n){try{return qm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ya(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lE(t)||(n[t]=ya(n[t],e[t]));return n}function lE(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=()=>hE().__FIREBASE_DEFAULTS__,fE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jm(n[1]);return e&&JSON.parse(e)},Ya=()=>{try{return dE()||fE()||pE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mE=n=>{var e,t;return(t=(e=Ya())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},gE=n=>{const e=mE(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zm=()=>{var n;return(n=Ya())===null||n===void 0?void 0:n.config},yE=n=>{var e;return(e=Ya())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ga(JSON.stringify(t)),ga(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Ql(){var n;const e=(n=Ya())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bE(){return typeof self=="object"&&self.self===self}function Yl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Xl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gm(){const n=ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function EE(){return!Ql()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vi(){try{return typeof indexedDB=="object"}catch{return!1}}function Km(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function _E(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="FirebaseError";class We extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=TE,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new We(i,a,r)}}function SE(n,e){return n.replace(CE,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const CE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function kE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function va(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(pf(s)&&pf(o)){if(!va(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function pf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wm(n,e){const t=new AE(n,e);return t.subscribe.bind(t)}class AE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");RE(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=su),i.error===void 0&&(i.error=su),i.complete===void 0&&(i.complete=su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function su(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=1e3,NE=2,DE=4*60*60*1e3,PE=.5;function mf(n,e=xE,t=NE){const r=e*Math.pow(t,n),i=Math.round(PE*r*(Math.random()-.5)*2);return Math.min(DE,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n){return n&&n._delegate?n._delegate:n}class vt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new vE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LE(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ME(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ME(n){return n===ir?void 0:n}function LE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new OE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=[];var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Hm={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},$E=J.INFO,VE={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},UE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=VE[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class co{constructor(e){this.name=e,this._logLevel=$E,this._logHandler=UE,this._userLogHandler=null,Jl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}function BE(n){Jl.forEach(e=>{e.setLogLevel(n)})}function qE(n,e){for(const t of Jl){let r=null;e&&e.level&&(r=Hm[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:J[s].toLowerCase(),message:a,args:o,type:i.name})}}}const jE=(n,e)=>e.some(t=>n instanceof t);let gf,yf;function zE(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GE(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qm=new WeakMap,zu=new WeakMap,Ym=new WeakMap,ou=new WeakMap,Zl=new WeakMap;function KE(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(On(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Qm.set(t,n)}).catch(()=>{}),Zl.set(e,n),e}function WE(n){if(zu.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});zu.set(n,e)}let Gu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ym.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return On(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function HE(n){Gu=n(Gu)}function QE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(au(this),e,...t);return Ym.set(r,e.sort?e.sort():[e]),On(r)}:GE().includes(n)?function(...e){return n.apply(au(this),e),On(Qm.get(this))}:function(...e){return On(n.apply(au(this),e))}}function YE(n){return typeof n=="function"?QE(n):(n instanceof IDBTransaction&&WE(n),jE(n,zE())?new Proxy(n,Gu):n)}function On(n){if(n instanceof IDBRequest)return KE(n);if(ou.has(n))return ou.get(n);const e=YE(n);return e!==n&&(ou.set(n,e),Zl.set(e,n)),e}const au=n=>Zl.get(n);function XE(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=On(o);return r&&o.addEventListener("upgradeneeded",c=>{r(On(o.result),c.oldVersion,c.newVersion,On(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const JE=["get","getKey","getAll","getAllKeys","count"],ZE=["put","add","delete","clear"],cu=new Map;function vf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cu.get(e))return cu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ZE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JE.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return cu.set(e,s),s}HE(n=>({...n,get:(e,t,r)=>vf(e,t)||n.get(e,t,r),has:(e,t)=>!!vf(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(t_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function t_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ku="@firebase/app",wf="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new co("@firebase/app"),n_="@firebase/app-compat",r_="@firebase/analytics-compat",i_="@firebase/analytics",s_="@firebase/app-check-compat",o_="@firebase/app-check",a_="@firebase/auth",c_="@firebase/auth-compat",u_="@firebase/database",l_="@firebase/database-compat",h_="@firebase/functions",d_="@firebase/functions-compat",f_="@firebase/installations",p_="@firebase/installations-compat",m_="@firebase/messaging",g_="@firebase/messaging-compat",y_="@firebase/performance",v_="@firebase/performance-compat",w_="@firebase/remote-config",I_="@firebase/remote-config-compat",b_="@firebase/storage",E_="@firebase/storage-compat",__="@firebase/firestore",T_="@firebase/firestore-compat",S_="firebase",C_="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]",k_={[Ku]:"fire-core",[n_]:"fire-core-compat",[i_]:"fire-analytics",[r_]:"fire-analytics-compat",[o_]:"fire-app-check",[s_]:"fire-app-check-compat",[a_]:"fire-auth",[c_]:"fire-auth-compat",[u_]:"fire-rtdb",[l_]:"fire-rtdb-compat",[h_]:"fire-fn",[d_]:"fire-fn-compat",[f_]:"fire-iid",[p_]:"fire-iid-compat",[m_]:"fire-fcm",[g_]:"fire-fcm-compat",[y_]:"fire-perf",[v_]:"fire-perf-compat",[w_]:"fire-rc",[I_]:"fire-rc-compat",[b_]:"fire-gcs",[E_]:"fire-gcs-compat",[__]:"fire-fst",[T_]:"fire-fst-compat","fire-js":"fire-js",[S_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Map,Os=new Map;function wa(n,e){try{n.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xm(n,e){n.container.addOrOverwriteComponent(e)}function Dt(n){const e=n.name;if(Os.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Os.set(e,n);for(const t of Fn.values())wa(t,n);return!0}function Br(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function A_(n,e,t=Ln){Br(n,e).clearInstance(t)}function R_(){Os.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new vn("app","Firebase",x_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N_=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=C_;function eh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ln,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(t||(t=zm()),!t)throw fn.create("no-options");const s=Fn.get(i);if(s){if(va(t,s.options)&&va(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new FE(i);for(const c of Os.values())o.addComponent(c);const a=new N_(t,r,o);return Fn.set(i,a),a}function th(n=Ln){const e=Fn.get(n);if(!e&&n===Ln&&zm())return eh();if(!e)throw fn.create("no-app",{appName:n});return e}function D_(){return Array.from(Fn.values())}async function Jm(n){const e=n.name;Fn.has(e)&&(Fn.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function at(n,e,t){var r;let i=(r=k_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}Dt(new vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Zm(n,e){if(n!==null&&typeof n!="function")throw fn.create("invalid-log-argument");qE(n,e)}function eg(n){BE(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="firebase-heartbeat-database",O_=1,Ms="firebase-heartbeat-store";let uu=null;function tg(){return uu||(uu=XE(P_,O_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ms)}}}).catch(n=>{throw fn.create("idb-open",{originalErrorMessage:n.message})})),uu}async function M_(n){try{return await(await tg()).transaction(Ms).objectStore(Ms).get(ng(n))}catch(e){if(e instanceof We)Cr.warn(e.message);else{const t=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function If(n,e){try{const r=(await tg()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(e,ng(n)),await r.done}catch(t){if(t instanceof We)Cr.warn(t.message);else{const r=fn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(r.message)}}}function ng(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=1024,F_=30*24*60*60*1e3;class $_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new U_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=F_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bf(),{heartbeatsToSend:t,unsentEntries:r}=V_(this._heartbeatsCache.heartbeats),i=ga(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bf(){return new Date().toISOString().substring(0,10)}function V_(n,e=L_){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ef(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ef(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class U_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vi()?Km().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await M_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return If(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return If(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ef(n){return ga(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n){Dt(new vt("platform-logger",e=>new e_(e),"PRIVATE")),Dt(new vt("heartbeat",e=>new $_(e),"PRIVATE")),at(Ku,wf,n),at(Ku,wf,"esm2017"),at("fire-js","")}B_("");const q_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:We,SDK_VERSION:Hn,_DEFAULT_ENTRY_NAME:Ln,_addComponent:wa,_addOrOverwriteComponent:Xm,_apps:Fn,_clearComponents:R_,_components:Os,_getProvider:Br,_registerComponent:Dt,_removeServiceInstance:A_,deleteApp:Jm,getApp:th,getApps:D_,initializeApp:eh,onLog:Zm,registerVersion:at,setLogLevel:eg},Symbol.toStringTag,{value:"Module"}));var j_="firebase",z_="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(j_,z_,"app");const G_=(n,e)=>e.some(t=>n instanceof t);let _f,Tf;function K_(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W_(){return Tf||(Tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rg=new WeakMap,Wu=new WeakMap,ig=new WeakMap,lu=new WeakMap,nh=new WeakMap;function H_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Mn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&rg.set(t,n)}).catch(()=>{}),nh.set(e,n),e}function Q_(n){if(Wu.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Wu.set(n,e)}let Hu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ig.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Y_(n){Hu=n(Hu)}function X_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hu(this),e,...t);return ig.set(r,e.sort?e.sort():[e]),Mn(r)}:W_().includes(n)?function(...e){return n.apply(hu(this),e),Mn(rg.get(this))}:function(...e){return Mn(n.apply(hu(this),e))}}function J_(n){return typeof n=="function"?X_(n):(n instanceof IDBTransaction&&Q_(n),G_(n,K_())?new Proxy(n,Hu):n)}function Mn(n){if(n instanceof IDBRequest)return H_(n);if(lu.has(n))return lu.get(n);const e=J_(n);return e!==n&&(lu.set(n,e),nh.set(e,n)),e}const hu=n=>nh.get(n);function Z_(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const eT=["get","getKey","getAll","getAllKeys","count"],tT=["put","add","delete","clear"],du=new Map;function Sf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(du.get(e))return du.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=tT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eT.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return du.set(e,s),s}Y_(n=>({...n,get:(e,t,r)=>Sf(e,t)||n.get(e,t,r),has:(e,t)=>!!Sf(e,t)||n.has(e,t)}));const sg="@firebase/installations",rh="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=1e4,ag=`w:${rh}`,cg="FIS_v2",nT="https://firebaseinstallations.googleapis.com/v1",rT=60*60*1e3,iT="installations",sT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},kr=new vn(iT,sT,oT);function ug(n){return n instanceof We&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg({projectId:n}){return`${nT}/projects/${n}/installations`}function hg(n){return{token:n.token,requestStatus:2,expiresIn:cT(n.expiresIn),creationTime:Date.now()}}async function dg(n,e){const r=(await e.json()).error;return kr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fg({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function aT(n,{refreshToken:e}){const t=fg(n);return t.append("Authorization",uT(e)),t}async function pg(n){const e=await n();return e.status>=500&&e.status<600?n():e}function cT(n){return Number(n.replace("s","000"))}function uT(n){return`${cg} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=lg(n),i=fg(n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:t,authVersion:cg,appId:n.appId,sdkVersion:ag},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await pg(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:hg(u.authToken)}}else throw await dg("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=/^[cdef][\w-]{21}$/,Qu="";function fT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=pT(n);return dT.test(t)?t:Qu}catch{return Qu}}function pT(n){return hT(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new Map;function yg(n,e){const t=Xa(n);vg(t,e),mT(t,e)}function vg(n,e){const t=gg.get(n);if(t)for(const r of t)r(e)}function mT(n,e){const t=gT();t&&t.postMessage({key:n,fid:e}),yT()}let pr=null;function gT(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=n=>{vg(n.data.key,n.data.fid)}),pr}function yT(){gg.size===0&&pr&&(pr.close(),pr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebase-installations-database",wT=1,Ar="firebase-installations-store";let fu=null;function ih(){return fu||(fu=Z_(vT,wT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ar)}}})),fu}async function Ia(n,e){const t=Xa(n),i=(await ih()).transaction(Ar,"readwrite"),s=i.objectStore(Ar),o=await s.get(t);return await s.put(e,t),await i.done,(!o||o.fid!==e.fid)&&yg(n,e.fid),e}async function wg(n){const e=Xa(n),r=(await ih()).transaction(Ar,"readwrite");await r.objectStore(Ar).delete(e),await r.done}async function Ja(n,e){const t=Xa(n),i=(await ih()).transaction(Ar,"readwrite"),s=i.objectStore(Ar),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&yg(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(n){let e;const t=await Ja(n.appConfig,r=>{const i=IT(r),s=bT(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Qu?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function IT(n){const e=n||{fid:fT(),registrationStatus:0};return Ig(e)}function bT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(kr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ET(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_T(n)}:{installationEntry:e}}async function ET(n,e){try{const t=await lT(n,e);return Ia(n.appConfig,t)}catch(t){throw ug(t)&&t.customData.serverCode===409?await wg(n.appConfig):await Ia(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _T(n){let e=await Cf(n.appConfig);for(;e.registrationStatus===1;)await mg(100),e=await Cf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await sh(n);return r||t}return e}function Cf(n){return Ja(n,e=>{if(!e)throw kr.create("installation-not-found");return Ig(e)})}function Ig(n){return TT(n)?{fid:n.fid,registrationStatus:0}:n}function TT(n){return n.registrationStatus===1&&n.registrationTime+og<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST({appConfig:n,heartbeatServiceProvider:e},t){const r=CT(n,t),i=aT(n,t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:ag,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await pg(()=>fetch(r,a));if(c.ok){const u=await c.json();return hg(u)}else throw await dg("Generate Auth Token",c)}function CT(n,{fid:e}){return`${lg(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(n,e=!1){let t;const r=await Ja(n.appConfig,s=>{if(!bg(s))throw kr.create("not-registered");const o=s.authToken;if(!e&&RT(o))return s;if(o.requestStatus===1)return t=kT(n,e),s;{if(!navigator.onLine)throw kr.create("app-offline");const a=NT(s);return t=AT(n,a),a}});return t?await t:r.authToken}async function kT(n,e){let t=await kf(n.appConfig);for(;t.authToken.requestStatus===1;)await mg(100),t=await kf(n.appConfig);const r=t.authToken;return r.requestStatus===0?oh(n,e):r}function kf(n){return Ja(n,e=>{if(!bg(e))throw kr.create("not-registered");const t=e.authToken;return DT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function AT(n,e){try{const t=await ST(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ia(n.appConfig,r),t}catch(t){if(ug(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await wg(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ia(n.appConfig,r)}throw t}}function bg(n){return n!==void 0&&n.registrationStatus===2}function RT(n){return n.requestStatus===2&&!xT(n)}function xT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+rT}function NT(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function DT(n){return n.requestStatus===1&&n.requestTime+og<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(n){const e=n,{installationEntry:t,registrationPromise:r}=await sh(e);return r?r.catch(console.error):oh(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(n,e=!1){const t=n;return await MT(t),(await oh(t,e)).token}async function MT(n){const{registrationPromise:e}=await sh(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n){if(!n||!n.options)throw pu("App Configuration");if(!n.name)throw pu("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw pu(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function pu(n){return kr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="installations",FT="installations-internal",$T=n=>{const e=n.getProvider("app").getImmediate(),t=LT(e),r=Br(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},VT=n=>{const e=n.getProvider("app").getImmediate(),t=Br(e,Eg).getImmediate();return{getId:()=>PT(t),getToken:i=>OT(t,i)}};function UT(){Dt(new vt(Eg,$T,"PUBLIC")),Dt(new vt(FT,VT,"PRIVATE"))}UT();at(sg,rh);at(sg,rh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="analytics",BT="firebase_id",qT="origin",jT=60*1e3,zT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ah="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new co("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},St=new vn("analytics","Analytics",GT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n){if(!n.startsWith(ah)){const e=St.create("invalid-gtag-resource",{gtagURL:n});return yt.warn(e.message),""}return n}function _g(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function WT(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function HT(n,e){const t=WT("firebase-js-sdk-policy",{createScriptURL:KT}),r=document.createElement("script"),i=`${ah}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function QT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function YT(n,e,t,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await _g(t)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){yt.error(a)}n("config",i,s)}async function XT(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await _g(t);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){yt.error(s)}}function JT(n,e,t,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await XT(n,e,t,a,c)}else if(s==="config"){const[a,c]=o;await YT(n,e,t,r,a,c)}else if(s==="consent"){const[a]=o;n("consent","update",a)}else if(s==="get"){const[a,c,u]=o;n("get",a,c,u)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){yt.error(a)}}return i}function ZT(n,e,t,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=JT(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function e0(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ah)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=30,n0=1e3;class r0{constructor(e={},t=n0){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tg=new r0;function i0(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function s0(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:i0(r)},s=zT.replace("{app-id}",t),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw St.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function o0(n,e=Tg,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw St.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw St.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new u0;return setTimeout(async()=>{a.abort()},t!==void 0?t:jT),Sg({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Sg(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Tg){var s;const{appId:o,measurementId:a}=n;try{await a0(r,e)}catch(c){if(a)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await s0(n);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!c0(u)){if(i.deleteThrottleMetadata(o),a)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?mf(t,i.intervalMillis,t0):mf(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return i.setThrottleMetadata(o,h),yt.debug(`Calling attemptFetch again in ${l} millis`),Sg(n,h,r,i)}}function a0(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(St.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function c0(n){if(!(n instanceof We)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class u0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function l0(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(){if(vi())try{await Km()}catch(n){return yt.warn(St.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return yt.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function d0(n,e,t,r,i,s,o){var a;const c=o0(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>yt.error(f)),e.push(c);const u=h0().then(f=>{if(f)return r.getId()}),[l,h]=await Promise.all([c,u]);e0(s)||HT(s,l.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[qT]="firebase",d.update=!0,h!=null&&(d[BT]=h),i("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.app=e}_delete(){return delete _s[this.app.options.appId],Promise.resolve()}}let _s={},Af=[];const Rf={};let mu="dataLayer",p0="gtag",xf,Cg,Nf=!1;function m0(){const n=[];if(Yl()&&n.push("This is a browser extension environment."),_E()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=St.create("invalid-analytics-context",{errorInfo:e});yt.warn(t.message)}}function g0(n,e,t){m0();const r=n.options.appId;if(!r)throw St.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw St.create("no-api-key");if(_s[r]!=null)throw St.create("already-exists",{id:r});if(!Nf){QT(mu);const{wrappedGtag:s,gtagCore:o}=ZT(_s,Af,Rf,mu,p0);Cg=s,xf=o,Nf=!0}return _s[r]=d0(n,Af,Rf,e,xf,mu,t),new f0(n)}function y0(n=th()){n=V(n);const e=Br(n,ba);return e.isInitialized()?e.getImmediate():v0(n)}function v0(n,e={}){const t=Br(n,ba);if(t.isInitialized()){const i=t.getImmediate();if(va(e,t.getOptions()))return i;throw St.create("already-initialized")}return t.initialize({options:e})}function w0(n,e,t,r){n=V(n),l0(Cg,_s[n.app.options.appId],e,t,r).catch(i=>yt.error(i))}const Df="@firebase/analytics",Pf="0.10.0";function I0(){Dt(new vt(ba,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return g0(r,i,t)},"PUBLIC")),Dt(new vt("analytics-internal",n,"PRIVATE")),at(Df,Pf),at(Df,Pf,"esm2017");function n(e){try{const t=e.getProvider(ba).getImmediate();return{logEvent:(r,i,s)=>w0(t,r,i,s)}}catch(t){throw St.create("interop-component-reg-failed",{reason:t})}}}I0();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,t){this._delegate=e,this.firebase=t,wa(e,new vt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Jm(this._delegate)))}_getService(e,t=Ln){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ln){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){wa(this._delegate,e)}_addOrOverwriteComponent(e){Xm(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Of=new vn("app-compat","Firebase",E0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:at,setLogLevel:eg,onLog:Zm,apps:null,SDK_VERSION:Hn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:q_}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Ln,!ff(e,u))throw Of.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=eh(u,l);if(ff(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Dt(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Of.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&ya(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){const n=_0(b0);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:kg,extendNamespace:e,createSubscribe:Wm,ErrorFactory:vn,deepExtend:ya});function e(t){ya(n,t)}return n}const T0=kg();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new co("@firebase/app-compat"),S0="@firebase/app-compat",C0="0.2.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(n){at(S0,C0,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(bE()&&self.firebase!==void 0){Mf.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Mf.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const un=T0;k0();var A0="firebase",R0="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.registerVersion(A0,R0,"app-compat");function ch(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const es={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Xr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Ag(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const N0=x0,D0=Ag,Rg=new vn("auth","Firebase",Ag());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new co("@firebase/auth");function P0(n,...e){Ea.logLevel<=J.WARN&&Ea.warn(`Auth (${Hn}): ${n}`,...e)}function na(n,...e){Ea.logLevel<=J.ERROR&&Ea.error(`Auth (${Hn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw uh(n,...e)}function He(n,...e){return uh(n,...e)}function xg(n,e,t){const r=Object.assign(Object.assign({},D0()),{[e]:t});return new vn("auth","Firebase",r).create(e,{appName:n.name})}function Mi(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(n,"argument-error"),xg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Rg.create(n,...e)}function T(n,e,...t){if(!n)throw uh(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw na(e),new Error(e)}function $t(n,e){n||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function lh(){return Lf()==="http:"||Lf()==="https:"}function Lf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lh()||Yl()||"connection"in navigator)?navigator.onLine:!0}function M0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.shortDelay=e,this.longDelay=t,$t(t>e,"Short delay should be less than long delay!"),this.isMobile=IE()||Xl()}get(){return O0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,e){$t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=new uo(3e4,6e4);function Ne(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pe(n,e,t,r,i={}){return Dg(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Oi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Ng.fetch()(Pg(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Dg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},L0),e);try{const i=new $0(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ps(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ps(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ps(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ps(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xg(n,l,u);Ye(n,l)}}catch(i){if(i instanceof We)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function wn(n,e,t,r,i={}){const s=await Pe(n,e,t,r,i);return"mfaPendingCredential"in s&&Ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Pg(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?hh(n.config,i):`${n.config.apiScheme}://${i}`}class $0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),F0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ps(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=He(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(n,e){return Pe(n,"POST","/v1/accounts:delete",e)}async function U0(n,e){return Pe(n,"POST","/v1/accounts:update",e)}async function B0(n,e){return Pe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q0(n,e=!1){const t=V(n),r=await t.getIdToken(e),i=Za(r);T(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ts(gu(i.auth_time)),issuedAtTime:Ts(gu(i.iat)),expirationTime:Ts(gu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gu(n){return Number(n)*1e3}function Za(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const i=jm(t);return i?JSON.parse(i):(na("Failed to decode base64 JWT payload"),null)}catch(i){return na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function j0(n){const e=Za(n);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof We&&z0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function z0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(n){var e;const t=n.auth,r=await n.getIdToken(),i=await mn(n,B0(t,{idToken:r}));T(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?H0(s.providerUserInfo):[],a=W0(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Og(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function K0(n){const e=V(n);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function W0(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function H0(n){return n.map(e=>{var{providerId:t}=e,r=ch(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(n,e){const t=await Dg(n,{},async()=>{const r=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Pg(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ng.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):j0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Q0(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new $s;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(T(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n,e){T(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class br{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Og(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await mn(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q0(this,e)}reload(){return K0(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mn(this,V0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=t.createdAt)!==null&&u!==void 0?u:void 0,P=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:w,emailVerified:I,isAnonymous:S,providerData:k,stsTokenManager:N}=t;T(w&&N,e,"internal-error");const q=$s.fromJSON(this.name,N);T(typeof w=="string",e,"internal-error"),Cn(h,e.name),Cn(d,e.name),T(typeof I=="boolean",e,"internal-error"),T(typeof S=="boolean",e,"internal-error"),Cn(f,e.name),Cn(p,e.name),Cn(v,e.name),Cn(b,e.name),Cn(C,e.name),Cn(P,e.name);const H=new br({uid:w,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:S,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:q,createdAt:C,lastLoginAt:P});return k&&Array.isArray(k)&&(H.providerData=k.map(U=>Object.assign({},U))),b&&(H._redirectEventId=b),H}static async _fromIdTokenResponse(e,t,r=!1){const i=new $s;i.updateFromServerResponse(t);const s=new br({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fs(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new Map;function _t(n){$t(n instanceof Function,"Expected a class definition");let e=Ff.get(n);return e?($t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ff.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mg.type="NONE";const wi=Mg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,e,t){return`firebase:${n}:${e}:${t}`}class ci{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Er(this.userKey,i.apiKey,s),this.fullPersistenceKey=Er("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ci(_t(wi),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_t(wi);const o=Er(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=br._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ci(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ci(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($g(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vg(e))return"Blackberry";if(Ug(e))return"Webos";if(dh(e))return"Safari";if((e.includes("chrome/")||Fg(e))&&!e.includes("edge/"))return"Chrome";if(lo(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lg(n=ve()){return/firefox\//i.test(n)}function dh(n=ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fg(n=ve()){return/crios\//i.test(n)}function $g(n=ve()){return/iemobile/i.test(n)}function lo(n=ve()){return/android/i.test(n)}function Vg(n=ve()){return/blackberry/i.test(n)}function Ug(n=ve()){return/webos/i.test(n)}function Li(n=ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Y0(n=ve()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function X0(n=ve()){var e;return Li(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J0(){return Gm()&&document.documentMode===10}function Bg(n=ve()){return Li(n)||lo(n)||Ug(n)||Vg(n)||/windows phone/i.test(n)||$g(n)}function Z0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n,e=[]){let t;switch(n){case"Browser":t=$f(ve());break;case"Worker":t=`${$f(ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hn}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(n){return(await Pe(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function jg(n,e){return Pe(n,"GET","/v2/recaptchaConfig",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n){return n!==void 0&&n.getResponse!==void 0}function Uf(n){return n!==void 0&&n.enterprise!==void 0}class zg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function fh(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=He("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",tS().appendChild(r)})}function Gg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const nS="https://www.google.com/recaptcha/enterprise.js?render=",rS="recaptcha-enterprise",iS="NO_RECAPTCHA";class Kg{constructor(e){this.type=rS,this.auth=Ce(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zg(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Uf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(iS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Uf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}fh(nS+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $n(n,e,t,r=!1){const i=new Kg(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bf(this),this.idTokenSubscription=new Bf(this),this.beforeStateQueue=new sS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=M0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?V(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}async initializeRecaptchaConfig(){const e=await jg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new zg(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Kg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&P0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ce(n){return V(n)}class Bf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wm(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aS(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cS(n,e,t){const r=Ce(n);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Wg(e),{host:o,port:a}=uS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lS()}function Wg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uS(n){const e=Wg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qf(o)}}}function qf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(n,e){return Pe(n,"POST","/v1/accounts:resetPassword",Ne(n,e))}async function Qg(n,e){return Pe(n,"POST","/v1/accounts:update",e)}async function hS(n,e){return Pe(n,"POST","/v1/accounts:update",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(n,e){return wn(n,"POST","/v1/accounts:signInWithPassword",Ne(n,e))}async function ec(n,e){return Pe(n,"POST","/v1/accounts:sendOobCode",Ne(n,e))}async function dS(n,e){return ec(n,e)}async function vu(n,e){return ec(n,e)}async function wu(n,e){return ec(n,e)}async function fS(n,e){return ec(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(n,e){return wn(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}async function mS(n,e){return wn(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Fi{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Vs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Vs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await $n(e,r,"signInWithPassword");return yu(e,i)}else return yu(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await $n(e,r,"signInWithPassword");return yu(e,s)}else return Promise.reject(i)});case"emailLink":return pS(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Qg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mS(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n,e){return wn(n,"POST","/v1/accounts:signInWithIdp",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="http://localhost";class sn extends Fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ch(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:gS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Oi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(n,e){return Pe(n,"POST","/v1/accounts:sendVerificationCode",Ne(n,e))}async function vS(n,e){return wn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e))}async function wS(n,e){const t=await wn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e));if(t.temporaryProof)throw ps(n,"account-exists-with-different-credential",t);return t}const IS={USER_NOT_FOUND:"user-not-found"};async function bS(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return wn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,t),IS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Fi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new _r({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _r({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return vS(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return wS(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new _r({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _S(n){const e=oi(fs(n)).link,t=e?oi(fs(e)).deep_link_id:null,r=oi(fs(n)).deep_link_id;return(r?oi(fs(r)).link:null)||r||t||e||n}class tc{constructor(e){var t,r,i,s,o,a;const c=oi(fs(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ES((i=c.mode)!==null&&i!==void 0?i:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=_S(e);try{return new tc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,t){return Vs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=tc.parseLink(t);return T(r,"argument-error"),Vs._fromEmailAndCode(e,r.code,r.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends In{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ui extends $i{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),sn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),sn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ui.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ui.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new ui(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends $i{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Lt.credential(t,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends $i{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="http://localhost";class Ii extends Fi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Ii(r,s)}static _create(e,t){return new Ii(e,t)}buildRequest(){return{requestUri:TS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="saml.";class _a extends In{constructor(e){T(e.startsWith(SS),"argument-error"),super(e)}static credentialFromResult(e){return _a.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _a.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ii.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Ii._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends $i{constructor(){super("twitter.com")}static credential(e,t){return sn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wt.credential(t,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(n,e){return wn(n,"POST","/v1/accounts:signUp",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await br._fromIdTokenResponse(e,r,i),o=jf(r);return new Pt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=jf(r);return new Pt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function jf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(n){var e;const t=Ce(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Pt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await ra(t,{returnSecureToken:!0}),i=await Pt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends We{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ta(e,t,r,i)}}function Yg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(n,e){const t=V(n);await nc(!0,t,e);const{providerUserInfo:r}=await U0(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Xg(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function ph(n,e,t=!1){const r=await mn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Pt._forOperation(n,"link",r)}async function nc(n,e,t){await Fs(e);const r=Xg(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";T(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await mn(n,Yg(r,i,e,n),t);T(s.idToken,r,"internal-error");const o=Za(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(n.uid===a,r,"user-mismatch"),Pt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(n,e,t=!1){const r="signIn",i=await Yg(n,r,e),s=await Pt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function rc(n,e){return Zg(Ce(n),e)}async function ey(n,e){const t=V(n);return await nc(!1,t,e.providerId),ph(t,e)}async function ty(n,e){return Jg(V(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(n,e){return wn(n,"POST","/v1/accounts:signInWithCustomToken",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(n,e){const t=Ce(n),r=await AS(t,{token:e,returnSecureToken:!0}),i=await Pt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?mh._fromServerResponse(e,t):"totpInfo"in t?gh._fromServerResponse(e,t):Ye(e,"internal-error")}}class mh extends ho{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new mh(t)}}class gh extends ho{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new gh(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e,t){var r;T(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),T(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(T(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(T(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(n,e,t){var r;const i=Ce(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await $n(i,s,"getOobCode",!0);t&&li(i,o,t),await vu(i,o)}else t&&li(i,s,t),await vu(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await $n(i,s,"getOobCode",!0);t&&li(i,a,t),await vu(i,a)}else return Promise.reject(o)})}async function NS(n,e,t){await Hg(V(n),{oobCode:e,newPassword:t})}async function DS(n,e){await hS(V(n),{oobCode:e})}async function ny(n,e){const t=V(n),r=await Hg(t,{oobCode:e}),i=r.requestType;switch(T(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,t,"internal-error");default:T(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ho._fromServerResponse(Ce(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function PS(n,e){const{data:t}=await ny(V(n),e);return t.email}async function OS(n,e,t){var r;const i=Ce(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await $n(i,s,"signUpPassword");o=ra(i,u)}else o=ra(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await $n(i,s,"signUpPassword");return ra(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await Pt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function MS(n,e,t){return rc(V(n),Qn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(n,e,t){var r;const i=Ce(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){T(c.handleCodeInApp,i,"argument-error"),c&&li(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await $n(i,s,"getOobCode",!0);o(a,t),await wu(i,a)}else o(s,t),await wu(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await $n(i,s,"getOobCode",!0);o(c,t),await wu(i,c)}else return Promise.reject(a)})}function FS(n,e){const t=tc.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function $S(n,e,t){const r=V(n),i=Qn.credentialWithLink(e,t||Ls());return T(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),rc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(n,e){return Pe(n,"POST","/v1/accounts:createAuthUri",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(n,e){const t=lh()?Ls():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await VS(V(n),r);return i||[]}async function BS(n,e){const t=V(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&li(t.auth,i,e);const{email:s}=await dS(t.auth,i);s!==n.email&&await n.reload()}async function qS(n,e,t){const r=V(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&li(r.auth,s,t);const{email:o}=await fS(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(n,e){return Pe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=V(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await mn(r,jS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function GS(n,e){return ry(V(n),e,null)}function KS(n,e){return ry(V(n),null,e)}async function ry(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await mn(n,Qg(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Za(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new hi(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new HS(s,i);case"github.com":return new QS(s,i);case"google.com":return new YS(s,i);case"twitter.com":return new XS(s,i,n.screenName||null);case"custom":case"anonymous":return new hi(s,null);default:return new hi(s,r,i)}}class hi{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class iy extends hi{constructor(e,t,r,i){super(e,t,r),this.username=i}}class HS extends hi{constructor(e,t){super(e,"facebook.com",t)}}class QS extends iy{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class YS extends hi{constructor(e,t){super(e,"google.com",t)}}class XS extends iy{constructor(e,t,r){super(e,"twitter.com",t,r)}}function JS(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:WS(t)}class mr{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new mr("enroll",e,t)}static _fromMfaPendingCredential(e){return new mr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return mr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return mr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Ce(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ho._fromServerResponse(r,a));T(i.mfaPendingCredential,r,"internal-error");const o=mr._fromMfaPendingCredential(i.mfaPendingCredential);return new yh(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Pt._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return T(t.user,r,"internal-error"),Pt._forOperation(t.user,t.operationType,u);default:Ye(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ZS(n,e){var t;const r=V(n),i=e;return T(e.customData.operationType,r,"argument-error"),T((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),yh._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(n,e){return Pe(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function tC(n,e){return Pe(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}function nC(n,e){return Pe(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Ne(n,e))}class vh{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ho._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new vh(e)}async getSession(){return mr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await mn(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await mn(this.user,nC(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Iu=new WeakMap;function rC(n){const e=V(n);return Iu.has(e)||Iu.set(e,vh._fromUser(e)),Iu.get(e)}const Sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){const n=ve();return dh(n)||Li(n)}const sC=1e3,oC=10;class oy extends sy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iC()&&Z0(),this.fallbackToPolling=Bg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);J0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oC):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},sC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oy.type="LOCAL";const wh=oy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay extends sy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ay.type="SESSION";const Rr=ay;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await aC(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=fo("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return window}function uC(n){xe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function lC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function dC(){return Ih()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="firebaseLocalStorageDb",fC=1,Ca="firebaseLocalStorage",uy="fbase_key";class po{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sc(n,e){return n.transaction([Ca],e?"readwrite":"readonly").objectStore(Ca)}function pC(){const n=indexedDB.deleteDatabase(cy);return new po(n).toPromise()}function Yu(){const n=indexedDB.open(cy,fC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ca,{keyPath:uy})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ca)?e(r):(r.close(),await pC(),e(await Yu()))})})}async function zf(n,e,t){const r=sc(n,!0).put({[uy]:e,value:t});return new po(r).toPromise()}async function mC(n,e){const t=sc(n,!1).get(e),r=await new po(t).toPromise();return r===void 0?null:r.value}function Gf(n,e){const t=sc(n,!0).delete(e);return new po(t).toPromise()}const gC=800,yC=3;class ly{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>yC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ih()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(dC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await lC(),!this.activeServiceWorker)return;this.sender=new cC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yu();return await zf(e,Sa,"1"),await Gf(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>mC(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sc(i,!1).getAll();return new po(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ly.type="LOCAL";const Us=ly;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n,e){return Pe(n,"POST","/v2/accounts/mfaSignIn:start",Ne(n,e))}function wC(n,e){return Pe(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=500,bC=6e4,qo=1e12;class EC{constructor(e){this.auth=e,this.counter=qo,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new _C(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||qo;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||qo;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||qo;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class _C{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;T(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=TC(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},bC)},IC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function TC(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=Gg("rcb"),SC=new uo(3e4,6e4),CC="https://www.google.com/recaptcha/api.js?";class kC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return T(AC(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Vf(xe().grecaptcha)?Promise.resolve(xe().grecaptcha):new Promise((r,i)=>{const s=xe().setTimeout(()=>{i(He(e,"network-request-failed"))},SC.get());xe()[bu]=()=>{xe().clearTimeout(s),delete xe()[bu];const a=xe().grecaptcha;if(!a||!Vf(a)){i(He(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${CC}?${Oi({onload:bu,render:"explicit",hl:t})}`;fh(o).catch(()=>{clearTimeout(s),i(He(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=xe().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function AC(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class RC{async load(e){return new EC(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="recaptcha",xC={theme:"light",type:"image"};let NC=class{constructor(e,t=Object.assign({},xC),r){this.parameters=t,this.type=hy,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ce(r),this.isInvisible=this.parameters.size==="invisible",T(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;T(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new RC:new kC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=xe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(lh()&&!Ih(),this.auth,"internal-error"),await DC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await eS(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function DC(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=_r._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function PC(n,e,t){const r=Ce(n),i=await oc(r,e,V(t));return new bh(i,s=>rc(r,s))}async function OC(n,e,t){const r=V(n);await nc(!1,r,"phone");const i=await oc(r.auth,e,V(t));return new bh(i,s=>ey(r,s))}async function MC(n,e,t){const r=V(n),i=await oc(r.auth,e,V(t));return new bh(i,s=>ty(r,s))}async function oc(n,e,t){var r;const i=await t.verify();try{T(typeof i=="string",n,"argument-error"),T(t.type===hy,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return T(o.type==="enroll",n,"internal-error"),(await eC(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{T(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return T(a,n,"missing-multi-factor-info"),(await vC(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await yS(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function LC(n,e){await ph(V(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr=class ia{constructor(e){this.providerId=ia.PROVIDER_ID,this.auth=Ce(e)}verifyPhoneNumber(e,t){return oc(this.auth,e,V(t))}static credential(e,t){return _r._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ia.credentialFromTaggedObject(t)}static credentialFromError(e){return ia.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?_r._fromTokenResponse(t,r):null}};xr.PROVIDER_ID="phone";xr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e){return e?_t(e):(T(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function FC(n){return Zg(n.auth,new Eh(n),n.bypassAuthState)}function $C(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Jg(t,new Eh(n),n.bypassAuthState)}async function VC(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),ph(t,new Eh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return $C;default:Ye(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new uo(2e3,1e4);async function BC(n,e,t){const r=Ce(n);Mi(n,e,In);const i=qr(r,t);return new ln(r,"signInViaPopup",e,i).executeNotNull()}async function qC(n,e,t){const r=V(n);Mi(r.auth,e,In);const i=qr(r.auth,t);return new ln(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function jC(n,e,t){const r=V(n);Mi(r.auth,e,In);const i=qr(r.auth,t);return new ln(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ln extends dy{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=fo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UC.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="pendingRedirect",Ss=new Map;class GC extends dy{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ss.get(this.auth._key());if(!e){try{const r=await KC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ss.set(this.auth._key(),e)}return this.bypassAuthState||Ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KC(n,e){const t=py(e),r=fy(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function _h(n,e){return fy(n)._set(py(e),"true")}function WC(){Ss.clear()}function Th(n,e){Ss.set(n._key(),e)}function fy(n){return _t(n._redirectPersistence)}function py(n){return Er(zC,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n,e,t){return QC(n,e,t)}async function QC(n,e,t){const r=Ce(n);Mi(n,e,In),await r._initializationPromise;const i=qr(r,t);return await _h(i,r),i._openRedirect(r,e,"signInViaRedirect")}function YC(n,e,t){return XC(n,e,t)}async function XC(n,e,t){const r=V(n);Mi(r.auth,e,In),await r.auth._initializationPromise;const i=qr(r.auth,t);await _h(i,r.auth);const s=await my(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function JC(n,e,t){return ZC(n,e,t)}async function ZC(n,e,t){const r=V(n);Mi(r.auth,e,In),await r.auth._initializationPromise;const i=qr(r.auth,t);await nc(!1,r,e.providerId),await _h(i,r.auth);const s=await my(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function ek(n,e){return await Ce(n)._initializationPromise,ac(n,e,!1)}async function ac(n,e,t=!1){const r=Ce(n),i=qr(r,e),o=await new GC(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function my(n){const e=fo(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=10*60*1e3;class gy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!yy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(He(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kf(e))}saveEventToCache(e){this.cachedEventUids.add(Kf(e)),this.lastProcessedEventTime=Date.now()}}function Kf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yy({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yy(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(n,e={}){return Pe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ik=/^https?/;async function sk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vy(n);for(const t of e)try{if(ok(t))return}catch{}Ye(n,"unauthorized-domain")}function ok(n){const e=Ls(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ik.test(t))return!1;if(rk.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=new uo(3e4,6e4);function Wf(){const n=xe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ck(n){return new Promise((e,t)=>{var r,i,s;function o(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),t(He(n,"network-request-failed"))},timeout:ak.get()})}if(!((i=(r=xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xe().gapi)===null||s===void 0)&&s.load)o();else{const a=Gg("iframefcb");return xe()[a]=()=>{gapi.load?o():t(He(n,"network-request-failed"))},fh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw sa=null,e})}let sa=null;function uk(n){return sa=sa||ck(n),sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new uo(5e3,15e3),hk="__/auth/iframe",dk="emulator/auth/iframe",fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mk(n){const e=n.config;T(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hh(e,dk):`https://${n.config.authDomain}/${hk}`,r={apiKey:e.apiKey,appName:n.name,v:Hn},i=pk.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Oi(r).slice(1)}`}async function gk(n){const e=await uk(n),t=xe().gapi;return T(t,n,"internal-error"),e.open({where:document.body,url:mk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=He(n,"network-request-failed"),a=xe().setTimeout(()=>{s(o)},lk.get());function c(){xe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vk=500,wk=600,Ik="_blank",bk="http://localhost";class Hf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ek(n,e,t,r=vk,i=wk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ve().toLowerCase();t&&(a=Fg(u)?Ik:t),Lg(u)&&(e=e||bk,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(X0(u)&&a!=="_self")return _k(e||"",a),new Hf(null);const h=window.open(e||"",a,l);T(h,n,"popup-blocked");try{h.focus()}catch{}return new Hf(h)}function _k(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="__/auth/handler",Sk="emulator/auth/handler",Ck=encodeURIComponent("fac");async function Xu(n,e,t,r,i,s){T(n.config.authDomain,n,"auth-domain-config-required"),T(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Hn,eventId:i};if(e instanceof In){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",kE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof $i){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${Ck}=${encodeURIComponent(c)}`:"";return`${kk(n)}?${Oi(a).slice(1)}${u}`}function kk({config:n}){return n.emulator?hh(n,Sk):`https://${n.authDomain}/${Tk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="webStorageSupport";class Ak{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rr,this._completeRedirectFn=ac,this._overrideRedirectResult=Th}async _openPopup(e,t,r,i){var s;$t((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xu(e,t,r,Ls(),i);return Ek(e,o,fo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Xu(e,t,r,Ls(),i);return uC(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):($t(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await gk(e),r=new gy(e);return t.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Eu,{type:Eu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Eu];o!==void 0&&t(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bg()||dh()||Li()}}const Rk=Ak;class xk{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Xt("unexpected MultiFactorSessionType")}}}class Sh extends xk{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Sh(e)}_finalizeEnroll(e,t,r){return tC(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return wC(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wy{constructor(){}static assertion(e){return Sh._fromCredential(e)}}wy.FACTOR_ID="phone";var Qf="@firebase/auth",Yf="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pk(n){Dt(new vt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qg(n)},u=new oS(r,i,s,c);return aS(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Dt(new vt("auth-internal",e=>{const t=Ce(e.getProvider("auth").getImmediate());return(r=>new Nk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Qf,Yf,Dk(n)),at(Qf,Yf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=5*60;yE("authIdTokenMaxAge");Pk("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=2e3;async function Lk(n,e,t){var r;const{BuildInfo:i}=Nr();$t(e.sessionId,"AuthEvent did not contain a session ID");const s=await Bk(e.sessionId),o={};return Li()?o.ibi=i.packageName:lo()?o.apn=i.packageName:Ye(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Xu(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Fk(n){const{BuildInfo:e}=Nr(),t={};Li()?t.iosBundleId=e.packageName:lo()?t.androidPackageName=e.packageName:Ye(n,"operation-not-supported-in-this-environment"),await vy(n,t)}function $k(n){const{cordova:e}=Nr();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,Y0()?"_blank":"_system","location=yes"),t(i)})})}async function Vk(n,e,t){const{cordova:r}=Nr();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(He(n,"redirect-cancelled-by-user"))},Mk))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),lo()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Uk(n){var e,t,r,i,s,o,a,c,u,l;const h=Nr();T(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Bk(n){const e=qk(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function qk(n){if($t(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=20;class zk extends gy{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Gk(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Hk(),postBody:null,tenantId:n.tenantId,error:He(n,"no-auth-event")}}function Kk(n,e){return Ju()._set(Zu(n),e)}async function Xf(n){const e=await Ju()._get(Zu(n));return e&&await Ju()._remove(Zu(n)),e}function Wk(n,e){var t,r;const i=Yk(e);if(i.includes("/__/auth/callback")){const s=oa(i),o=s.firebaseError?Qk(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?He(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function Hk(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<jk;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Ju(){return _t(wh)}function Zu(n){return Er("authEvent",n.config.apiKey,n.name)}function Qk(n){try{return JSON.parse(n)}catch{return null}}function Yk(n){const e=oa(n),t=e.link?decodeURIComponent(e.link):void 0,r=oa(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return oa(i).link||i||r||t||n}function oa(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return oi(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=500;class Jk{constructor(){this._redirectPersistence=Rr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ac,this._overrideRedirectResult=Th}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new zk(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ye(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){Uk(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),WC(),await this._originValidation(e);const o=Gk(e,r,i);await Kk(e,o);const a=await Lk(e,o,t),c=await $k(a);return Vk(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fk(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Nr(),o=setTimeout(async()=>{await Xf(e),t.onEvent(Jf())},Xk),a=async l=>{clearTimeout(o);const h=await Xf(e);let d=null;h&&(l!=null&&l.url)&&(d=Wk(h,l.url)),t.onEvent(d||Jf())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Nr().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const Zk=Jk;function Jf(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:He("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(n,e){Ce(n)._logFramework(e)}var tA="@firebase/auth-compat",nA="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=1e3;function Cs(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function iA(){return Cs()==="http:"||Cs()==="https:"}function Iy(n=ve()){return!!((Cs()==="file:"||Cs()==="ionic:"||Cs()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function sA(){return Xl()||Ql()}function oA(){return Gm()&&(document==null?void 0:document.documentMode)===11}function aA(n=ve()){return/Edge\/\d+/.test(n)}function cA(n=ve()){return oA()||aA(n)}function by(){try{const n=self.localStorage,e=fo();if(n)return n.setItem(e,"1"),n.removeItem(e),cA()?vi():!0}catch{return Ch()&&vi()}return!1}function Ch(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function _u(){return(iA()||Yl()||Iy())&&!sA()&&by()&&!Ch()}function Ey(){return Iy()&&typeof document<"u"}async function uA(){return Ey()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},rA);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function lA(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={LOCAL:"local",NONE:"none",SESSION:"session"},ts=T,_y="persistence";function hA(n,e){if(ts(Object.values(Et).includes(e),n,"invalid-persistence-type"),Xl()){ts(e!==Et.SESSION,n,"unsupported-persistence-type");return}if(Ql()){ts(e===Et.NONE,n,"unsupported-persistence-type");return}if(Ch()){ts(e===Et.NONE||e===Et.LOCAL&&vi(),n,"unsupported-persistence-type");return}ts(e===Et.NONE||by(),n,"unsupported-persistence-type")}async function el(n){await n._initializationPromise;const e=Ty(),t=Er(_y,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function dA(n,e){const t=Ty();if(!t)return[];const r=Er(_y,n,e);switch(t.getItem(r)){case Et.NONE:return[wi];case Et.LOCAL:return[Us,Rr];case Et.SESSION:return[Rr];default:return[]}}function Ty(){var n;try{return((n=lA())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=T;class Dn{constructor(){this.browserResolver=_t(Rk),this.cordovaResolver=_t(Zk),this.underlyingResolver=null,this._redirectPersistence=Rr,this._completeRedirectFn=ac,this._overrideRedirectResult=Th}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Ey()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return fA(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await uA();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){return n.unwrap()}function pA(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(n){return Cy(n)}function gA(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new yA(n,ZS(n,e))}else if(r){const i=Cy(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Cy(n){const{_tokenResponse:e}=n instanceof We?n.customData:n;if(!e)return null;if(!(n instanceof We)&&"temporaryProof"in e&&"phoneNumber"in e)return xr.credentialFromResult(n);const t=e.providerId;if(!t||t===es.PASSWORD)return null;let r;switch(t){case es.GOOGLE:r=Lt;break;case es.FACEBOOK:r=Gt;break;case es.GITHUB:r=Kt;break;case es.TWITTER:r=Wt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Ii._create(t,a):sn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new ui(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof We?r.credentialFromError(n):r.credentialFromResult(n)}function dt(n,e){return e.catch(t=>{throw t instanceof We&&gA(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:mA(t),additionalUserInfo:JS(t),user:cc.getOrCreate(i)}})}async function tl(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>dt(n,t.confirm(r))}}class yA{constructor(e,t){this.resolver=t,this.auth=pA(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return dt(Sy(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc=class ms{constructor(e){this._delegate=e,this.multiFactor=rC(e)}static getOrCreate(e){return ms.USER_MAP.has(e)||ms.USER_MAP.set(e,new ms(e)),ms.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return dt(this.auth,ey(this._delegate,e))}async linkWithPhoneNumber(e,t){return tl(this.auth,OC(this._delegate,e,t))}async linkWithPopup(e){return dt(this.auth,jC(this._delegate,e,Dn))}async linkWithRedirect(e){return await el(Ce(this.auth)),JC(this._delegate,e,Dn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return dt(this.auth,ty(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return tl(this.auth,MC(this._delegate,e,t))}reauthenticateWithPopup(e){return dt(this.auth,qC(this._delegate,e,Dn))}async reauthenticateWithRedirect(e){return await el(Ce(this.auth)),YC(this._delegate,e,Dn)}sendEmailVerification(e){return BS(this._delegate,e)}async unlink(e){return await kS(this._delegate,e),this}updateEmail(e){return GS(this._delegate,e)}updatePassword(e){return KS(this._delegate,e)}updatePhoneNumber(e){return LC(this._delegate,e)}updateProfile(e){return zS(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return qS(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};cc.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=T;class nl{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ns(r,"invalid-api-key",{appName:e.name}),ns(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Dn:void 0;this._delegate=t.initialize({options:{persistence:vA(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(N0),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?cc.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){cS(this._delegate,e,t)}applyActionCode(e){return DS(this._delegate,e)}checkActionCode(e){return ny(this._delegate,e)}confirmPasswordReset(e,t){return NS(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return dt(this._delegate,OS(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return US(this._delegate,e)}isSignInWithEmailLink(e){return FS(this._delegate,e)}async getRedirectResult(){ns(_u(),this._delegate,"operation-not-supported-in-this-environment");const e=await ek(this._delegate,Dn);return e?dt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){eA(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Zf(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Zf(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return LS(this._delegate,e,t)}sendPasswordResetEmail(e,t){return xS(this._delegate,e,t||void 0)}async setPersistence(e){hA(this._delegate,e);let t;switch(e){case Et.SESSION:t=Rr;break;case Et.LOCAL:t=await _t(Us)._isAvailable()?Us:wh;break;case Et.NONE:t=wi;break;default:return Ye("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return dt(this._delegate,CS(this._delegate))}signInWithCredential(e){return dt(this._delegate,rc(this._delegate,e))}signInWithCustomToken(e){return dt(this._delegate,RS(this._delegate,e))}signInWithEmailAndPassword(e,t){return dt(this._delegate,MS(this._delegate,e,t))}signInWithEmailLink(e,t){return dt(this._delegate,$S(this._delegate,e,t))}signInWithPhoneNumber(e,t){return tl(this._delegate,PC(this._delegate,e,t))}async signInWithPopup(e){return ns(_u(),this._delegate,"operation-not-supported-in-this-environment"),dt(this._delegate,BC(this._delegate,e,Dn))}async signInWithRedirect(e){return ns(_u(),this._delegate,"operation-not-supported-in-this-environment"),await el(this._delegate),HC(this._delegate,e,Dn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return PS(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}nl.Persistence=Et;function Zf(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&cc.getOrCreate(o)),error:e,complete:t}}function vA(n,e){const t=dA(n,e);if(typeof self<"u"&&!t.includes(Us)&&t.push(Us),typeof window<"u")for(const r of[wh,Rr])t.includes(r)||t.push(r);return t.includes(wi)||t.push(wi),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.providerId="phone",this._delegate=new xr(Sy(un.auth()))}static credential(e,t){return xr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}kh.PHONE_SIGN_IN_METHOD=xr.PHONE_SIGN_IN_METHOD;kh.PROVIDER_ID=xr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=T;class IA{constructor(e,t,r=un.app()){var i;wA((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new NC(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="auth-compat";function EA(n){n.INTERNAL.registerComponent(new vt(bA,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new nl(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Xr.EMAIL_SIGNIN,PASSWORD_RESET:Xr.PASSWORD_RESET,RECOVER_EMAIL:Xr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Xr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Xr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Xr.VERIFY_EMAIL}},EmailAuthProvider:Qn,FacebookAuthProvider:Gt,GithubAuthProvider:Kt,GoogleAuthProvider:Lt,OAuthProvider:ui,SAMLAuthProvider:_a,PhoneAuthProvider:kh,PhoneMultiFactorGenerator:wy,RecaptchaVerifier:IA,TwitterAuthProvider:Wt,Auth:nl,AuthCredential:Fi,Error:We}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(tA,nA)}EA(un);var _A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Ah=Ah||{},B=_A||self;function uc(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function mo(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function TA(n){return Object.prototype.hasOwnProperty.call(n,Tu)&&n[Tu]||(n[Tu]=++SA)}var Tu="closure_uid_"+(1e9*Math.random()>>>0),SA=0;function CA(n,e,t){return n.call.apply(n.bind,arguments)}function kA(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function et(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=CA:et=kA,et.apply(null,arguments)}function jo(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Ve(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Yn(){this.s=this.s,this.o=this.o}var AA=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),AA!=0)&&TA(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ky=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Rh(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function ep(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(uc(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function tt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var RA=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{B.addEventListener("test",()=>{},e),B.removeEventListener("test",()=>{},e)}catch{}return n}();function Bs(n){return/^[\s\xa0]*$/.test(n)}function lc(){var n=B.navigator;return n&&(n=n.userAgent)?n:""}function Ht(n){return lc().indexOf(n)!=-1}function xh(n){return xh[" "](n),n}xh[" "]=function(){};function xA(n,e){var t=ER;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var NA=Ht("Opera"),bi=Ht("Trident")||Ht("MSIE"),Ay=Ht("Edge"),rl=Ay||bi,Ry=Ht("Gecko")&&!(lc().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),DA=lc().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function xy(){var n=B.document;return n?n.documentMode:void 0}var il;e:{var Su="",Cu=function(){var n=lc();if(Ry)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ay)return/Edge\/([\d\.]+)/.exec(n);if(bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(DA)return/WebKit\/(\S+)/.exec(n);if(NA)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Cu&&(Su=Cu?Cu[1]:""),bi){var ku=xy();if(ku!=null&&ku>parseFloat(Su)){il=String(ku);break e}}il=Su}var sl;if(B.document&&bi){var tp=xy();sl=tp||parseInt(il,10)||void 0}else sl=void 0;var PA=sl;function qs(n,e){if(tt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ry){e:{try{xh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:OA[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&qs.$.h.call(this)}}Ve(qs,tt);var OA={2:"touch",3:"pen",4:"mouse"};qs.prototype.h=function(){qs.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var go="closure_listenable_"+(1e6*Math.random()|0),MA=0;function LA(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++MA,this.fa=this.ia=!1}function hc(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Nh(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function FA(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Ny(n){const e={};for(const t in n)e[t]=n[t];return e}const np="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dy(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<np.length;s++)t=np[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function dc(n){this.src=n,this.g={},this.h=0}dc.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=al(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new LA(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function ol(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=ky(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(hc(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function al(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Dh="closure_lm_"+(1e6*Math.random()|0),Au={};function Py(n,e,t,r,i){if(r&&r.once)return My(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Py(n,e[s],t,r,i);return null}return t=Mh(t),n&&n[go]?n.O(e,t,mo(r)?!!r.capture:!!r,i):Oy(n,e,t,!1,r,i)}function Oy(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=mo(i)?!!i.capture:!!i,a=Oh(n);if(a||(n[Dh]=a=new dc(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=$A(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)RA||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Fy(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function $A(){function n(t){return e.call(n.src,n.listener,t)}const e=VA;return n}function My(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)My(n,e[s],t,r,i);return null}return t=Mh(t),n&&n[go]?n.P(e,t,mo(r)?!!r.capture:!!r,i):Oy(n,e,t,!0,r,i)}function Ly(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ly(n,e[s],t,r,i);else r=mo(r)?!!r.capture:!!r,t=Mh(t),n&&n[go]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=al(s,t,r,i),-1<t&&(hc(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Oh(n))&&(e=n.g[e.toString()],n=-1,e&&(n=al(e,t,r,i)),(t=-1<n?e[n]:null)&&Ph(t))}function Ph(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[go])ol(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Fy(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Oh(e))?(ol(t,n),t.h==0&&(t.src=null,e[Dh]=null)):hc(n)}}}function Fy(n){return n in Au?Au[n]:Au[n]="on"+n}function VA(n,e){if(n.fa)n=!0;else{e=new qs(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Ph(n),n=t.call(r,e)}return n}function Oh(n){return n=n[Dh],n instanceof dc?n:null}var Ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mh(n){return typeof n=="function"?n:(n[Ru]||(n[Ru]=function(e){return n.handleEvent(e)}),n[Ru])}function Fe(){Yn.call(this),this.i=new dc(this),this.S=this,this.J=null}Ve(Fe,Yn);Fe.prototype[go]=!0;Fe.prototype.removeEventListener=function(n,e,t,r){Ly(this,n,e,t,r)};function Qe(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new tt(e,n);else if(e instanceof tt)e.target=e.target||n;else{var i=e;e=new tt(r,n),Dy(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=zo(o,r,!0,e)&&i}if(o=e.g=n,i=zo(o,r,!0,e)&&i,i=zo(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=zo(o,r,!1,e)&&i}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)hc(t[r]);delete n.g[e],n.h--}}this.J=null};Fe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};Fe.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function zo(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&ol(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lh=B.JSON.stringify;class UA{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function BA(){var n=Fh;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class qA{constructor(){this.h=this.g=null}add(e,t){const r=$y.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var $y=new UA(()=>new jA,n=>n.reset());class jA{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function zA(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function GA(n){B.setTimeout(()=>{throw n},0)}let js,zs=!1,Fh=new qA,Vy=()=>{const n=B.Promise.resolve(void 0);js=()=>{n.then(KA)}};var KA=()=>{for(var n;n=BA();){try{n.h.call(n.g)}catch(t){GA(t)}var e=$y;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}zs=!1};function fc(n,e){Fe.call(this),this.h=n||1,this.g=e||B,this.j=et(this.qb,this),this.l=Date.now()}Ve(fc,Fe);x=fc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&($h(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $h(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}x.N=function(){fc.$.N.call(this),$h(this),delete this.g};function Vh(n,e,t){if(typeof n=="function")t&&(n=et(n,t));else if(n&&typeof n.handleEvent=="function")n=et(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(n,e||0)}function Uy(n){n.g=Vh(()=>{n.g=null,n.i&&(n.i=!1,Uy(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class WA extends Yn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Uy(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gs(n){Yn.call(this),this.h=n,this.g={}}Ve(Gs,Yn);var rp=[];function By(n,e,t,r){Array.isArray(t)||(t&&(rp[0]=t.toString()),t=rp);for(var i=0;i<t.length;i++){var s=Py(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function qy(n){Nh(n.g,function(e,t){this.g.hasOwnProperty(t)&&Ph(e)},n),n.g={}}Gs.prototype.N=function(){Gs.$.N.call(this),qy(this)};Gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pc(){this.g=!0}pc.prototype.Ea=function(){this.g=!1};function HA(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function QA(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function ai(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+XA(n,t)+(r?" "+r:"")})}function YA(n,e){n.info(function(){return"TIMEOUT: "+e})}pc.prototype.info=function(){};function XA(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lh(t)}catch{return e}}var jr={},ip=null;function mc(){return ip=ip||new Fe}jr.Ta="serverreachability";function jy(n){tt.call(this,jr.Ta,n)}Ve(jy,tt);function Ks(n){const e=mc();Qe(e,new jy(e))}jr.STAT_EVENT="statevent";function zy(n,e){tt.call(this,jr.STAT_EVENT,n),this.stat=e}Ve(zy,tt);function ot(n){const e=mc();Qe(e,new zy(e,n))}jr.Ua="timingevent";function Gy(n,e){tt.call(this,jr.Ua,n),this.size=e}Ve(Gy,tt);function yo(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){n()},e)}var gc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ky={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Uh(){}Uh.prototype.h=null;function sp(n){return n.h||(n.h=n.i())}function Wy(){}var vo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Bh(){tt.call(this,"d")}Ve(Bh,tt);function qh(){tt.call(this,"c")}Ve(qh,tt);var cl;function yc(){}Ve(yc,Uh);yc.prototype.g=function(){return new XMLHttpRequest};yc.prototype.i=function(){return{}};cl=new yc;function wo(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Gs(this),this.P=JA,n=rl?125:void 0,this.V=new fc(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Hy}function Hy(){this.i=null,this.g="",this.h=!1}var JA=45e3,ul={},ka={};x=wo.prototype;x.setTimeout=function(n){this.P=n};function ll(n,e,t){n.L=1,n.v=wc(gn(e)),n.s=t,n.S=!0,Qy(n,null)}function Qy(n,e){n.G=Date.now(),Io(n),n.A=gn(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),rv(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Hy,n.g=Tv(n.l,t?e:null,!n.s),0<n.O&&(n.M=new WA(et(n.Pa,n,n.g),n.O)),By(n.U,n.g,"readystatechange",n.nb),e=n.I?Ny(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Ks(),HA(n.j,n.u,n.A,n.m,n.W,n.s)}x.nb=function(n){n=n.target;const e=this.M;e&&Jt(n)==3?e.l():this.Pa(n)};x.Pa=function(n){try{if(n==this.g)e:{const l=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||rl||this.g&&(this.h.h||this.g.ja()||up(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Ks(3):Ks(2)),vc(this);var t=this.g.da();this.ca=t;t:if(Yy(this)){var r=up(this.g);n="";var i=r.length,s=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),ks(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,QA(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bs(a)){var u=a;break t}}u=null}if(t=u)ai(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hl(this,t);else{this.i=!1,this.o=3,ot(12),gr(this),ks(this);break e}}this.S?(Xy(this,l,o),rl&&this.i&&l==3&&(By(this.U,this.V,"tick",this.mb),this.V.start())):(ai(this.j,this.m,o,null),hl(this,o)),l==4&&gr(this),this.i&&!this.J&&(l==4?Iv(this.l,this):(this.i=!1,Io(this)))}else wR(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),gr(this),ks(this)}}}catch{}finally{}};function Yy(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Xy(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=ZA(n,t),i==ka){e==4&&(n.o=4,ot(14),r=!1),ai(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ul){n.o=4,ot(15),ai(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else ai(n.j,n.m,i,null),hl(n,i);Yy(n)&&i!=ka&&i!=ul&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ot(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Hh(e),e.M=!0,ot(11))):(ai(n.j,n.m,t,"[Invalid Chunked Response]"),gr(n),ks(n))}x.mb=function(){if(this.g){var n=Jt(this.g),e=this.g.ja();this.C<e.length&&(vc(this),Xy(this,n,e),this.i&&n!=4&&Io(this))}};function ZA(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?ka:(t=Number(e.substring(t,r)),isNaN(t)?ul:(r+=1,r+t>e.length?ka:(e=e.slice(r,r+t),n.C=r+t,e)))}x.cancel=function(){this.J=!0,gr(this)};function Io(n){n.Y=Date.now()+n.P,Jy(n,n.P)}function Jy(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=yo(et(n.lb,n),e)}function vc(n){n.B&&(B.clearTimeout(n.B),n.B=null)}x.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(YA(this.j,this.A),this.L!=2&&(Ks(),ot(17)),gr(this),this.o=2,ks(this)):Jy(this,this.Y-n)};function ks(n){n.l.H==0||n.J||Iv(n.l,n)}function gr(n){vc(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,$h(n.V),qy(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function hl(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||dl(t.i,n))){if(!n.K&&dl(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)xa(t),Ec(t);else break e;Wh(t),ot(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=yo(et(t.ib,t),6e3));if(1>=ov(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else yr(t,11)}else if((n.K||t.g==n)&&xa(t),!Bs(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(jh(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ae(r.I,r.F,v))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=_v(r,r.J?r.pa:null,r.Y),o.K){av(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(vc(a),Io(a)),r.g=o}else vv(r);0<t.j.length&&_c(t)}else u[0]!="stop"&&u[0]!="close"||yr(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?yr(t,7):Kh(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Ks(4)}catch{}}function eR(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(uc(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function tR(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(uc(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Zy(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(uc(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=tR(n),r=eR(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var ev=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nR(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Tr(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Tr){this.h=n.h,Aa(this,n.j),this.s=n.s,this.g=n.g,Ra(this,n.m),this.l=n.l;var e=n.i,t=new Ws;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),op(this,t),this.o=n.o}else n&&(e=String(n).match(ev))?(this.h=!1,Aa(this,e[1]||"",!0),this.s=gs(e[2]||""),this.g=gs(e[3]||"",!0),Ra(this,e[4]),this.l=gs(e[5]||"",!0),op(this,e[6]||"",!0),this.o=gs(e[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}Tr.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ys(e,ap,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ys(e,ap,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ys(t,t.charAt(0)=="/"?sR:iR,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ys(t,aR)),n.join("")};function gn(n){return new Tr(n)}function Aa(n,e,t){n.j=t?gs(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ra(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function op(n,e,t){e instanceof Ws?(n.i=e,cR(n.i,n.h)):(t||(e=ys(e,oR)),n.i=new Ws(e,n.h))}function ae(n,e,t){n.i.set(e,t)}function wc(n){return ae(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function gs(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ys(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,rR),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function rR(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ap=/[#\/\?@]/g,iR=/[#\?:]/g,sR=/[#\?]/g,oR=/[#\?@]/g,aR=/#/g;function Ws(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Xn(n){n.g||(n.g=new Map,n.h=0,n.i&&nR(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}x=Ws.prototype;x.add=function(n,e){Xn(this),this.i=null,n=Vi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function tv(n,e){Xn(n),e=Vi(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function nv(n,e){return Xn(n),e=Vi(n,e),n.g.has(e)}x.forEach=function(n,e){Xn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};x.ta=function(){Xn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};x.Z=function(n){Xn(this);let e=[];if(typeof n=="string")nv(this,n)&&(e=e.concat(this.g.get(Vi(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};x.set=function(n,e){return Xn(this),this.i=null,n=Vi(this,n),nv(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};x.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function rv(n,e,t){tv(n,e),0<t.length&&(n.i=null,n.g.set(Vi(n,e),Rh(t)),n.h+=t.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Vi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function cR(n,e){e&&!n.j&&(Xn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(tv(this,r),rv(this,i,t))},n)),n.j=e}var uR=class{constructor(n,e){this.g=n,this.map=e}};function iv(n){this.l=n||lR,B.PerformanceNavigationTiming?(n=B.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lR=10;function sv(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ov(n){return n.h?1:n.g?n.g.size:0}function dl(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function jh(n,e){n.g?n.g.add(e):n.h=e}function av(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}iv.prototype.cancel=function(){if(this.i=cv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function cv(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Rh(n.i)}var hR=class{stringify(n){return B.JSON.stringify(n,void 0)}parse(n){return B.JSON.parse(n,void 0)}};function dR(){this.g=new hR}function fR(n,e,t){const r=t||"";try{Zy(n,function(i,s){let o=i;mo(i)&&(o=Lh(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pR(n,e){const t=new pc;if(B.Image){const r=new Image;r.onload=jo(Go,t,r,"TestLoadImage: loaded",!0,e),r.onerror=jo(Go,t,r,"TestLoadImage: error",!1,e),r.onabort=jo(Go,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=jo(Go,t,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Go(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function bo(n){this.l=n.fc||null,this.j=n.ob||!1}Ve(bo,Uh);bo.prototype.g=function(){return new Ic(this.l,this.j)};bo.prototype.i=function(n){return function(){return n}}({});function Ic(n,e){Fe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=zh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(Ic,Fe);var zh=0;x=Ic.prototype;x.open=function(n,e){if(this.readyState!=zh)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Hs(this)};x.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||B).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Eo(this)),this.readyState=zh};x.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uv(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function uv(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}x.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Eo(this):Hs(this),this.readyState==3&&uv(this)}};x.Za=function(n){this.g&&(this.response=this.responseText=n,Eo(this))};x.Ya=function(n){this.g&&(this.response=n,Eo(this))};x.ka=function(){this.g&&Eo(this)};function Eo(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Hs(n)}x.setRequestHeader=function(n,e){this.v.append(n,e)};x.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Hs(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var mR=B.JSON.parse;function Ie(n){Fe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lv,this.L=this.M=!1}Ve(Ie,Fe);var lv="",gR=/^https?$/i,yR=["POST","PUT"];x=Ie.prototype;x.Oa=function(n){this.M=n};x.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cl.g(),this.C=this.u?sp(this.u):sp(cl),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){cp(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&n instanceof B.FormData,!(0<=ky(yR,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{fv(this),0<this.B&&((this.L=vR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Vh(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){cp(this,s)}};function vR(n){return bi&&typeof n.timeout=="number"&&n.ontimeout!==void 0}x.ua=function(){typeof Ah<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function cp(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,hv(n),bc(n)}function hv(n){n.F||(n.F=!0,Qe(n,"complete"),Qe(n,"error"))}x.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Qe(this,"complete"),Qe(this,"abort"),bc(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bc(this,!0)),Ie.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?dv(this):this.kb())};x.kb=function(){dv(this)};function dv(n){if(n.h&&typeof Ah<"u"&&(!n.C[1]||Jt(n)!=4||n.da()!=2)){if(n.v&&Jt(n)==4)Vh(n.La,0,n);else if(Qe(n,"readystatechange"),Jt(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(ev)[1]||null;!i&&B.self&&B.self.location&&(i=B.self.location.protocol.slice(0,-1)),r=!gR.test(i?i.toLowerCase():"")}t=r}if(t)Qe(n,"complete"),Qe(n,"success");else{n.m=6;try{var s=2<Jt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",hv(n)}}finally{bc(n)}}}}function bc(n,e){if(n.g){fv(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Qe(n,"ready");try{t.onreadystatechange=r}catch{}}}function fv(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(B.clearTimeout(n.A),n.A=null)}x.isActive=function(){return!!this.g};function Jt(n){return n.g?n.g.readyState:0}x.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),mR(e)}};function up(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case lv:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function wR(n){const e={};n=(n.g&&2<=Jt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Bs(n[r]))continue;var t=zA(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}FA(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pv(n){let e="";return Nh(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Gh(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=pv(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):ae(n,e,t))}function rs(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function mv(n){this.Ga=0,this.j=[],this.l=new pc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rs("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rs("baseRetryDelayMs",5e3,n),this.hb=rs("retryDelaySeedMs",1e4,n),this.eb=rs("forwardChannelMaxRetries",2,n),this.xa=rs("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new iv(n&&n.concurrentRequestLimit),this.Ja=new dR,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=mv.prototype;x.ra=8;x.H=1;function Kh(n){if(gv(n),n.H==3){var e=n.W++,t=gn(n.I);if(ae(t,"SID",n.K),ae(t,"RID",e),ae(t,"TYPE","terminate"),_o(n,t),e=new wo(n,n.l,e),e.L=2,e.v=wc(gn(t)),t=!1,B.navigator&&B.navigator.sendBeacon)try{t=B.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&B.Image&&(new Image().src=e.v,t=!0),t||(e.g=Tv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Io(e)}Ev(n)}function Ec(n){n.g&&(Hh(n),n.g.cancel(),n.g=null)}function gv(n){Ec(n),n.u&&(B.clearTimeout(n.u),n.u=null),xa(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&B.clearTimeout(n.m),n.m=null)}function _c(n){if(!sv(n.i)&&!n.m){n.m=!0;var e=n.Na;js||Vy(),zs||(js(),zs=!0),Fh.add(e,n),n.C=0}}function IR(n,e){return ov(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=yo(et(n.Na,n,e),bv(n,n.C)),n.C++,!0)}x.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new wo(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Ny(s),Dy(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=yv(this,i,e),t=gn(this.I),ae(t,"RID",n),ae(t,"CVER",22),this.F&&ae(t,"X-HTTP-Session-Id",this.F),_o(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(pv(s)))+"&"+e:this.o&&Gh(t,this.o,s)),jh(this.i,i),this.bb&&ae(t,"TYPE","init"),this.P?(ae(t,"$req",e),ae(t,"SID","null"),i.aa=!0,ll(i,t,null)):ll(i,t,e),this.H=2}}else this.H==3&&(n?lp(this,n):this.j.length==0||sv(this.i)||lp(this))};function lp(n,e){var t;e?t=e.m:t=n.W++;const r=gn(n.I);ae(r,"SID",n.K),ae(r,"RID",t),ae(r,"AID",n.V),_o(n,r),n.o&&n.s&&Gh(r,n.o,n.s),t=new wo(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=yv(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),jh(n.i,t),ll(t,r,e)}function _o(n,e){n.na&&Nh(n.na,function(t,r){ae(e,r,t)}),n.h&&Zy({},function(t,r){ae(e,r,t)})}function yv(n,e,t){t=Math.min(n.j.length,t);var r=n.h?et(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{fR(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function vv(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;js||Vy(),zs||(js(),zs=!0),Fh.add(e,n),n.A=0}}function Wh(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=yo(et(n.Ma,n),bv(n,n.A)),n.A++,!0)}x.Ma=function(){if(this.u=null,wv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=yo(et(this.jb,this),n)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),Ec(this),wv(this))};function Hh(n){n.B!=null&&(B.clearTimeout(n.B),n.B=null)}function wv(n){n.g=new wo(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=gn(n.wa);ae(e,"RID","rpc"),ae(e,"SID",n.K),ae(e,"AID",n.V),ae(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&ae(e,"TO",n.qa),ae(e,"TYPE","xmlhttp"),_o(n,e),n.o&&n.s&&Gh(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=wc(gn(e)),t.s=null,t.S=!0,Qy(t,n)}x.ib=function(){this.v!=null&&(this.v=null,Ec(this),Wh(this),ot(19))};function xa(n){n.v!=null&&(B.clearTimeout(n.v),n.v=null)}function Iv(n,e){var t=null;if(n.g==e){xa(n),Hh(n),n.g=null;var r=2}else if(dl(n.i,e))t=e.F,av(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=mc(),Qe(r,new Gy(r,t)),_c(n)}else vv(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&IR(n,e)||r==2&&Wh(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:yr(n,5);break;case 4:yr(n,10);break;case 3:yr(n,6);break;default:yr(n,2)}}}function bv(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function yr(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=et(n.pb,n);t||(t=new Tr("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Aa(t,"https"),wc(t)),pR(t.toString(),r)}else ot(2);n.H=0,n.h&&n.h.za(e),Ev(n),gv(n)}x.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function Ev(n){if(n.H=0,n.ma=[],n.h){const e=cv(n.i);(e.length!=0||n.j.length!=0)&&(ep(n.ma,e),ep(n.ma,n.j),n.i.i.length=0,Rh(n.j),n.j.length=0),n.h.ya()}}function _v(n,e,t){var r=t instanceof Tr?gn(t):new Tr(t);if(r.g!="")e&&(r.g=e+"."+r.g),Ra(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Tr(null);r&&Aa(s,r),e&&(s.g=e),i&&Ra(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&ae(r,t,e),ae(r,"VER",n.ra),_o(n,r),r}function Tv(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Ie(new bo({ob:!0})):new Ie(n.va),e.Oa(n.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function Sv(){}x=Sv.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Na(){if(bi&&!(10<=Number(PA)))throw Error("Environmental error: no available transport.")}Na.prototype.g=function(n,e){return new Ct(n,e)};function Ct(n,e){Fe.call(this),this.g=new mv(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Bs(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bs(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Ui(this)}Ve(Ct,Fe);Ct.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ot(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=_v(n,null,n.Y),_c(n)};Ct.prototype.close=function(){Kh(this.g)};Ct.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Lh(n),n=t);e.j.push(new uR(e.fb++,n)),e.H==3&&_c(e)};Ct.prototype.N=function(){this.g.h=null,delete this.j,Kh(this.g),delete this.g,Ct.$.N.call(this)};function Cv(n){Bh.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ve(Cv,Bh);function kv(){qh.call(this),this.status=1}Ve(kv,qh);function Ui(n){this.g=n}Ve(Ui,Sv);Ui.prototype.Ba=function(){Qe(this.g,"a")};Ui.prototype.Aa=function(n){Qe(this.g,new Cv(n))};Ui.prototype.za=function(n){Qe(this.g,new kv)};Ui.prototype.ya=function(){Qe(this.g,"b")};function bR(){this.blockSize=-1}function Vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ve(Vt,bR);Vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function xu(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Vt.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)xu(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){xu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){xu(this,r),i=0;break}}this.h=i,this.i+=e};Vt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function ne(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var ER={};function Qh(n){return-128<=n&&128>n?xA(n,function(e){return new ne([e|0],0>e?-1:0)}):new ne([n|0],0>n?-1:0)}function Zt(n){if(isNaN(n)||!isFinite(n))return di;if(0>n)return Ge(Zt(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=fl;return new ne(e,0)}function Av(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Ge(Av(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Zt(Math.pow(e,8)),r=di,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Zt(Math.pow(e,s)),r=r.R(s).add(Zt(o))):(r=r.R(t),r=r.add(Zt(o)))}return r}var fl=4294967296,di=Qh(0),pl=Qh(1),hp=Qh(16777216);x=ne.prototype;x.ea=function(){if(Rt(this))return-Ge(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:fl+r)*e,e*=fl}return n};x.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(hn(this))return"0";if(Rt(this))return"-"+Ge(this).toString(n);for(var e=Zt(Math.pow(n,6)),t=this,r="";;){var i=Pa(t,e).g;t=Da(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,hn(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function hn(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Rt(n){return n.h==-1}x.X=function(n){return n=Da(this,n),Rt(n)?-1:hn(n)?0:1};function Ge(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new ne(t,~n.h).add(pl)}x.abs=function(){return Rt(this)?Ge(this):this};x.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new ne(t,t[t.length-1]&-2147483648?-1:0)};function Da(n,e){return n.add(Ge(e))}x.R=function(n){if(hn(this)||hn(n))return di;if(Rt(this))return Rt(n)?Ge(this).R(Ge(n)):Ge(Ge(this).R(n));if(Rt(n))return Ge(this.R(Ge(n)));if(0>this.X(hp)&&0>n.X(hp))return Zt(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Ko(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Ko(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Ko(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Ko(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new ne(t,0)};function Ko(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function is(n,e){this.g=n,this.h=e}function Pa(n,e){if(hn(e))throw Error("division by zero");if(hn(n))return new is(di,di);if(Rt(n))return e=Pa(Ge(n),e),new is(Ge(e.g),Ge(e.h));if(Rt(e))return e=Pa(n,Ge(e)),new is(Ge(e.g),e.h);if(30<n.g.length){if(Rt(n)||Rt(e))throw Error("slowDivide_ only works with positive integers.");for(var t=pl,r=e;0>=r.X(n);)t=dp(t),r=dp(r);var i=Jr(t,1),s=Jr(r,1);for(r=Jr(r,2),t=Jr(t,2);!hn(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Jr(r,1),t=Jr(t,1)}return e=Da(n,i.R(e)),new is(i,e)}for(i=di;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zt(t),o=s.R(e);Rt(o)||0<o.X(n);)t-=r,s=Zt(t),o=s.R(e);hn(s)&&(s=pl),i=i.add(s),n=Da(n,o)}return new is(i,n)}x.gb=function(n){return Pa(this,n).h};x.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new ne(t,this.h&n.h)};x.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new ne(t,this.h|n.h)};x.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new ne(t,this.h^n.h)};function dp(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new ne(t,n.h)}function Jr(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new ne(i,n.h)}Na.prototype.createWebChannel=Na.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;gc.NO_ERROR=0;gc.TIMEOUT=8;gc.HTTP_ERROR=6;Ky.COMPLETE="complete";Wy.EventType=vo;vo.OPEN="a";vo.CLOSE="b";vo.ERROR="c";vo.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;Vt.prototype.digest=Vt.prototype.l;Vt.prototype.reset=Vt.prototype.reset;Vt.prototype.update=Vt.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=Zt;ne.fromString=Av;var _R=function(){return new Na},TR=function(){return mc()},Nu=gc,SR=Ky,CR=jr,fp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},kR=bo,Wo=Wy,AR=Ie,RR=Vt,fi=ne;const pp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new co("@firebase/firestore");function ml(){return Vn.logLevel}function xR(n){Vn.setLogLevel(n)}function _(n,...e){if(Vn.logLevel<=J.DEBUG){const t=e.map(Yh);Vn.debug(`Firestore (${Bi}): ${n}`,...t)}}function Ee(n,...e){if(Vn.logLevel<=J.ERROR){const t=e.map(Yh);Vn.error(`Firestore (${Bi}): ${n}`,...t)}}function Ut(n,...e){if(Vn.logLevel<=J.WARN){const t=e.map(Yh);Vn.warn(`Firestore (${Bi}): ${n}`,...t)}}function Yh(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+n;throw Ee(e),new Error(e)}function F(n,e){n||O()}function NR(n,e){n||O()}function R(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends We{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Me.UNAUTHENTICATED))}shutdown(){}}class PR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class OR{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new Le;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Le,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Le)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new Rv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new Me(e)}}class MR{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class LR{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new MR(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $R{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.T=t.token,new FR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function Ei(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Nv(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new me(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new me(0,0))}static max(){return new L(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,r){t===void 0?t=0:t>e.length&&O(),r===void 0?r=e.length-t:r>e.length-t&&O(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Z extends Qs{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const UR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Qs{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return UR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new E(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new E(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new E(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.path=e}static fromPath(e){return new A(Z.fromString(e))}static fromName(e){return new A(Z.fromString(e).popFirst(5))}static empty(){return new A(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new Z(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function gl(n){return n.fields.find(e=>e.kind===2)}function sr(n){return n.fields.filter(e=>e.kind!==2)}Dv.UNKNOWN_ID=-1;let BR=class{constructor(e,t){this.fieldPath=e,this.kind=t}};class Oa{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Oa(0,kt.min())}}function Pv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new me(t+1,0):new me(t,r));return new kt(i,A.empty(),e)}function Ov(n){return new kt(n.readTime,n.key,-1)}class kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new kt(L.min(),A.empty(),-1)}static max(){return new kt(L.max(),A.empty(),-1)}}function Xh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=A.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Mv)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new Le,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new As(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=Jh(r.target.error);this.v.reject(new As(e,i))}}static open(e,t,r,i){try{return new Tc(t,e.transaction(i,r))}catch(s){throw new As(t,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new jR(t)}}class Ft{constructor(e,t,r){this.name=e,this.version=t,this.V=r,Ft.S(ve())===12.2&&Ee("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),cr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!vi())return!1;if(Ft.C())return!0;const e=ve(),t=Ft.S(e),r=0<t&&t<10,i=Ft.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new As(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new E(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new E(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new As(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Tc.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class qR{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return cr(this.L.delete())}}class As extends E{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Zn(n){return n.name==="IndexedDbTransactionError"}class jR{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),cr(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),cr(this.store.add(e))}get(e){return cr(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),cr(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),cr(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=Jh(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new qR(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function cr(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Jh(r.target.error);t(i)}})}let mp=!1;function Jh(n){const e=Ft.S(ve());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mp||(mp=!0,setTimeout(()=>{throw r},0)),r}}return n}class zR{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Zn(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Jn(t)}await this.et(6e4)})}}class GR{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Ov(s);Xh(o,r)>0&&(r=o)}),new kt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}pt.ct=-1;function To(n){return n==null}function Ys(n){return n===0&&1/n==-1/0}function Fv(n){return typeof n=="number"&&Number.isInteger(n)&&!Ys(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gp(e)),e=KR(n.get(t),e);return gp(e)}function KR(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function gp(n){return n+""}function en(n){const e=n.length;if(F(e>=2),e===2)return F(n.charAt(0)===""&&n.charAt(1)===""),Z.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&O(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:O()}s=o+2}return new Z(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n,e){return[n,ct(e)]}function $v(n,e,t){return[n,ct(e),t]}const WR={},HR=["prefixPath","collectionGroup","readTime","documentId"],QR=["prefixPath","collectionGroup","documentId"],YR=["collectionGroup","readTime","prefixPath","documentId"],XR=["canonicalId","targetId"],JR=["targetId","path"],ZR=["path","targetId"],ex=["collectionId","parent"],tx=["indexId","uid"],nx=["uid","sequenceNumber"],rx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ix=["indexId","uid","orderedDocumentKey"],sx=["userId","collectionPath","documentId"],ox=["userId","collectionPath","largestBatchId"],ax=["userId","collectionGroup","largestBatchId"],Vv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],cx=[...Vv,"documentOverlays"],Uv=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bv=Uv,ux=[...Bv,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends Lv{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function Ue(n,e){const t=R(n);return Ft.M(t.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||ze.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ho(this.root,e,this.comparator,!0)}}class Ho{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ze(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(n,e,t,r,i){return this}insert(n,e,t){return new ze(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wp(this.data.getIterator())}getIteratorFrom(e){return new wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new mt([])}unionWith(e){let t=new ue(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jv("Invalid base64 string: "+i):i}}(e);return new De(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const hx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Un(n){if(F(!!n),typeof n=="string"){let e=0;const t=hx.exec(n);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bn(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Zh(n){const e=n.mapValue.fields.__previous_value__;return Sc(e)?Zh(e):e}function Xs(n){const e=Un(n.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class qn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ca={nullValue:"NULL_VALUE"};function Dr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sc(n)?4:zv(n)?9007199254740991:10:O()}function on(n,e){if(n===e)return!0;const t=Dr(n);if(t!==Dr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xs(n).isEqual(Xs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Un(r.timestampValue),o=Un(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Bn(r.bytesValue).isEqual(Bn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return we(r.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return we(r.integerValue)===we(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=we(r.doubleValue),o=we(i.doubleValue);return s===o?Ys(s)===Ys(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Ei(n.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(vp(s)!==vp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!on(s[a],o[a])))return!1;return!0}(n,e);default:return O()}}function Js(n,e){return(n.values||[]).find(t=>on(t,e))!==void 0}function jn(n,e){if(n===e)return 0;const t=Dr(n),r=Dr(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=we(i.integerValue||i.doubleValue),a=we(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ip(n.timestampValue,e.timestampValue);case 4:return Ip(Xs(n),Xs(e));case 5:return j(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Bn(i),a=Bn(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=j(o[c],a[c]);if(u!==0)return u}return j(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=j(we(i.latitude),we(s.latitude));return o!==0?o:j(we(i.longitude),we(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=jn(o[c],a[c]);if(u)return u}return j(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Pn.mapValue&&s===Pn.mapValue)return 0;if(i===Pn.mapValue)return 1;if(s===Pn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=j(a[l],u[l]);if(h!==0)return h;const d=jn(o[a[l]],c[u[l]]);if(d!==0)return d}return j(a.length,u.length)}(n.mapValue,e.mapValue);default:throw O()}}function Ip(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=Un(n),r=Un(e),i=j(t.seconds,r.seconds);return i!==0?i:j(t.nanos,r.nanos)}function _i(n){return vl(n)}function vl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Un(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Bn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,A.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=vl(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${vl(r.fields[a])}`;return s+"}"}(n.mapValue):O();var e,t}function Pr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wl(n){return!!n&&"integerValue"in n}function Zs(n){return!!n&&"arrayValue"in n}function bp(n){return!!n&&"nullValue"in n}function Ep(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ua(n){return!!n&&"mapValue"in n}function Rs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Rs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function fx(n){return"nullValue"in n?ca:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Pr(qn.empty(),A.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:O()}function px(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Pr(qn.empty(),A.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Pn:O()}function _p(n,e){const t=jn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Tp(n,e){const t=jn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ua(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(t)}setAll(e){let t=_e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Rs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ua(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){zr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ke(Rs(this.value))}}function Gv(n){const e=[];return zr(n.fields,(t,r)=>{const i=new _e([t]);if(ua(r)){const s=Gv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ce(e,0,L.min(),L.min(),L.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,i){return new ce(e,1,t,L.min(),r,i,0)}static newNoDocument(e,t){return new ce(e,2,t,L.min(),L.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new ce(e,3,t,L.min(),L.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.position=e,this.inclusive=t}}function Sp(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=A.comparator(A.fromName(o.referenceValue),t.key):r=jn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!on(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t="asc"){this.field=e,this.dir=t}}function mx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{}class Q extends Kv{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gx(e,t,r):t==="array-contains"?new wx(e,r):t==="in"?new Jv(e,r):t==="not-in"?new Ix(e,r):t==="array-contains-any"?new bx(e,r):new Q(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new yx(e,r):new vx(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jn(t,this.value)):t!==null&&Dr(this.value)===Dr(t)&&this.matchesComparison(jn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class te extends Kv{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new te(e,t)}matches(e){return Ti(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ti(n){return n.op==="and"}function Il(n){return n.op==="or"}function ed(n){return Wv(n)&&Ti(n)}function Wv(n){for(const e of n.filters)if(e instanceof te)return!1;return!0}function bl(n){if(n instanceof Q)return n.field.canonicalString()+n.op.toString()+_i(n.value);if(ed(n))return n.filters.map(e=>bl(e)).join(",");{const e=n.filters.map(t=>bl(t)).join(",");return`${n.op}(${e})`}}function Hv(n,e){return n instanceof Q?function(t,r){return r instanceof Q&&t.op===r.op&&t.field.isEqual(r.field)&&on(t.value,r.value)}(n,e):n instanceof te?function(t,r){return r instanceof te&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&Hv(s,r.filters[o]),!0):!1}(n,e):void O()}function Qv(n,e){const t=n.filters.concat(e);return te.create(t,n.op)}function Yv(n){return n instanceof Q?function(e){return`${e.field.canonicalString()} ${e.op} ${_i(e.value)}`}(n):n instanceof te?function(e){return e.op.toString()+" {"+e.getFilters().map(Yv).join(" ,")+"}"}(n):"Filter"}class gx extends Q{constructor(e,t,r){super(e,t,r),this.key=A.fromName(r.referenceValue)}matches(e){const t=A.comparator(e.key,this.key);return this.matchesComparison(t)}}class yx extends Q{constructor(e,t){super(e,"in",t),this.keys=Xv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vx extends Q{constructor(e,t){super(e,"not-in",t),this.keys=Xv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>A.fromName(r.referenceValue))}class wx extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zs(t)&&Js(t.arrayValue,this.value)}}class Jv extends Q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Js(this.value.arrayValue,t)}}class Ix extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(Js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Js(this.value.arrayValue,t)}}class bx extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Js(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function El(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Ex(n,e,t,r,i,s,o)}function Or(n){const e=R(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>bl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),To(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>_i(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>_i(r)).join(",")),e.dt=t}return e.dt}function So(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cp(n.startAt,e.startAt)&&Cp(n.endAt,e.endAt)}function Ma(n){return A.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function La(n,e){return n.filters.filter(t=>t instanceof Q&&t.field.isEqual(e))}function kp(n,e,t){let r=ca,i=!0;for(const s of La(n,e)){let o=ca,a=!0;switch(s.op){case"<":case"<=":o=fx(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ca}_p({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];_p({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Ap(n,e,t){let r=Pn,i=!0;for(const s of La(n,e)){let o=Pn,a=!0;switch(s.op){case">=":case">":o=px(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Pn}Tp({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Tp({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Zv(n,e,t,r,i,s,o,a){return new bn(n,e,t,r,i,s,o,a)}function qi(n){return new bn(n)}function Rp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function td(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Cc(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function nd(n){return n.collectionGroup!==null}function Sr(n){const e=R(n);if(e.wt===null){e.wt=[];const t=Cc(e),r=td(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new pi(t)),e.wt.push(new pi(_e.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new pi(_e.keyField(),s))}}}return e.wt}function wt(n){const e=R(n);if(!e._t)if(e.limitType==="F")e._t=El(e.path,e.collectionGroup,Sr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Sr(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new pi(s.field,o))}const r=e.endAt?new zn(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new zn(e.startAt.position,e.startAt.inclusive):null;e._t=El(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function _l(n,e){e.getFirstInequalityField(),Cc(n);const t=n.filters.concat([e]);return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fa(n,e,t){return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Co(n,e){return So(wt(n),wt(e))&&n.limitType===e.limitType}function ew(n){return`${Or(wt(n))}|lt:${n.limitType}`}function Tl(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>Yv(r)).join(", ")}]`),To(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>_i(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>_i(r)).join(",")),`Target(${t})`}(wt(n))}; limitType=${n.limitType})`}function ko(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):A.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of Sr(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Sp(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Sr(t),r)||t.endAt&&!function(i,s,o){const a=Sp(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Sr(t),r))}(n,e)}function tw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nw(n){return(e,t)=>{let r=!1;for(const i of Sr(n)){const s=_x(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _x(n,e,t){const r=n.field.isKeyField()?A.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?jn(a,c):O()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=new se(A.comparator);function gt(){return Tx}const rw=new se(A.comparator);function vs(...n){let e=rw;for(const t of n)e=e.insert(t.key,t);return e}function iw(n){let e=rw;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function tn(){return xs()}function sw(){return xs()}function xs(){return new er(n=>n.toString(),(n,e)=>n.isEqual(e))}const Sx=new se(A.comparator),Cx=new ue(A.comparator);function z(...n){let e=Cx;for(const t of n)e=e.add(t);return e}const kx=new ue(j);function rd(){return kx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ys(e)?"-0":e}}function aw(n){return{integerValue:""+n}}function cw(n,e){return Fv(e)?aw(e):ow(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function Ax(n,e,t){return n instanceof Si?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Sc(i)&&(i=Zh(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Mr?lw(n,e):n instanceof Lr?hw(n,e):function(r,i){const s=uw(r,i),o=xp(s)+xp(r.gt);return wl(s)&&wl(r.gt)?aw(o):ow(r.serializer,o)}(n,e)}function Rx(n,e,t){return n instanceof Mr?lw(n,e):n instanceof Lr?hw(n,e):t}function uw(n,e){return n instanceof Ci?wl(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Si extends kc{}class Mr extends kc{constructor(e){super(),this.elements=e}}function lw(n,e){const t=dw(e);for(const r of n.elements)t.some(i=>on(i,r))||t.push(r);return{arrayValue:{values:t}}}class Lr extends kc{constructor(e){super(),this.elements=e}}function hw(n,e){let t=dw(e);for(const r of n.elements)t=t.filter(i=>!on(i,r));return{arrayValue:{values:t}}}class Ci extends kc{constructor(e,t){super(),this.serializer=e,this.gt=t}}function xp(n){return we(n.integerValue||n.doubleValue)}function dw(n){return Zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.field=e,this.transform=t}}function xx(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Mr&&r instanceof Mr||t instanceof Lr&&r instanceof Lr?Ei(t.elements,r.elements,on):t instanceof Ci&&r instanceof Ci?on(t.gt,r.gt):t instanceof Si&&r instanceof Si}(n.transform,e.transform)}class Nx{constructor(e,t){this.version=e,this.transformResults=t}}class pe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pe}static exists(e){return new pe(void 0,e)}static updateTime(e){return new pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function la(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ac{}function fw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zi(n.key,pe.none()):new ji(n.key,n.data,pe.none());{const t=n.data,r=Ke.empty();let i=new ue(_e.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new En(n.key,r,new mt(i.toArray()),pe.none())}}function Dx(n,e,t){n instanceof ji?function(r,i,s){const o=r.value.clone(),a=Dp(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof En?function(r,i,s){if(!la(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Dp(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(pw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Ns(n,e,t,r){return n instanceof ji?function(i,s,o,a){if(!la(i.precondition,s))return o;const c=i.value.clone(),u=Pp(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof En?function(i,s,o,a){if(!la(i.precondition,s))return o;const c=Pp(i.fieldTransforms,a,s),u=s.data;return u.setAll(pw(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return la(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function Px(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=uw(r.transform,i||null);s!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,s))}return t||null}function Np(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Ei(t,r,(i,s)=>xx(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ji extends Ac{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class En extends Ac{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Dp(n,e,t){const r=new Map;F(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Rx(o,a,t[i]))}return r}function Pp(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Ax(s,o,e))}return r}class zi extends Ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class id extends Ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Dx(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=sw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=fw(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(t,r)=>Np(t,r))&&Ei(this.baseMutations,e.baseMutations,(t,r)=>Np(t,r))}}class od{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){F(e.mutations.length===r.length);let i=Sx;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new od(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,X;function mw(n){switch(n){default:return O();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function gw(n){if(n===void 0)return Ee("GRPC error has no .code"),g.UNKNOWN;switch(n){case Re.OK:return g.OK;case Re.CANCELLED:return g.CANCELLED;case Re.UNKNOWN:return g.UNKNOWN;case Re.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case Re.INTERNAL:return g.INTERNAL;case Re.UNAVAILABLE:return g.UNAVAILABLE;case Re.UNAUTHENTICATED:return g.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case Re.NOT_FOUND:return g.NOT_FOUND;case Re.ALREADY_EXISTS:return g.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return g.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case Re.ABORTED:return g.ABORTED;case Re.OUT_OF_RANGE:return g.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return g.UNIMPLEMENTED;case Re.DATA_LOSS:return g.DATA_LOSS;default:return O()}}(X=Re||(Re={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Qo}static getOrCreateInstance(){return Qo===null&&(Qo=new cd),Qo}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Qo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=new fi([4294967295,4294967295],0);function Op(n){const e=yw().encode(n),t=new RR;return t.update(e),new Uint8Array(t.digest())}function Mp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fi([t,r],0),new fi([i,s],0)]}class ud{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ws(`Invalid padding: ${t}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ws(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=fi.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(fi.fromNumber(r)));return i.compare(Mx)===1&&(i=new fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Op(e),[r,i]=Mp(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ud(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Op(e),[r,i]=Mp(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,xo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ro(L.min(),i,new se(j),gt(),z())}}class xo{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xo(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class vw{constructor(e,t){this.targetId=e,this.Vt=t}}class ww{constructor(e,t,r=De.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Lp{constructor(){this.St=0,this.Dt=$p(),this.Ct=De.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=z(),t=z(),r=z();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:O()}}),new xo(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=$p()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Lx{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=gt(),this.zt=Fp(),this.Wt=new se(j)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:O()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Ma(o))if(i===0){const a=new A(o.path);this.Yt(r,a,ce.newNoDocument(a,L.min()))}else F(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(t=cd.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,f,p,v,b,C;const P={localCacheCount:l,existenceFilterCount:h.count},w=h.unchangedNames;return w&&(P.bloomFilter={applied:u===0,hashCount:(d=w==null?void 0:w.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(p=(f=w==null?void 0:w.bits)===null||f===void 0?void 0:f.bitmap)===null||p===void 0?void 0:p.length)!==null&&v!==void 0?v:0,padding:(C=(b=w==null?void 0:w.bits)===null||b===void 0?void 0:b.padding)!==null&&C!==void 0?C:0}),P}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=Bn(s).toUint8Array()}catch(l){if(l instanceof jv)return Ut("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new ud(c,o,a)}catch(l){return Ut(l instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Ma(a.target)){const c=new A(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ce.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=z();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Ro(e,t,this.Wt,this.jt,r);return this.jt=gt(),this.zt=Fp(),this.Wt=new se(j),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Lp,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new ue(j),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Lp),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Fp(){return new se(A.comparator)}function $p(){return new se(A.comparator)}const Fx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$x=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Vx=(()=>({and:"AND",or:"OR"}))();class Ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sl(n,e){return n.useProto3Json||To(e)?e:{value:e}}function ki(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Iw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Bx(n,e){return ki(n,e.toTimestamp())}function Se(n){return F(!!n),L.fromTimestamp(function(e){const t=Un(e);return new me(t.seconds,t.nanos)}(n))}function ld(n,e){return function(t){return new Z(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function bw(n){const e=Z.fromString(n);return F(xw(e)),e}function eo(n,e){return ld(n.databaseId,e.path)}function nn(n,e){const t=bw(e);if(t.get(1)!==n.databaseId.projectId)throw new E(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new E(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new A(_w(t))}function Cl(n,e){return ld(n.databaseId,e)}function Ew(n){const e=bw(n);return e.length===4?Z.emptyPath():_w(e)}function to(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _w(n){return F(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Vp(n,e,t){return{name:eo(n,e),fields:t.value.mapValue.fields}}function Tw(n,e,t){const r=nn(n,e.name),i=Se(e.updateTime),s=e.createTime?Se(e.createTime):L.min(),o=new Ke({mapValue:{fields:e.fields}}),a=ce.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function qx(n,e){return"found"in e?function(t,r){F(!!r.found),r.found.name,r.found.updateTime;const i=nn(t,r.found.name),s=Se(r.found.updateTime),o=r.found.createTime?Se(r.found.createTime):L.min(),a=new Ke({mapValue:{fields:r.found.fields}});return ce.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){F(!!r.missing),F(!!r.readTime);const i=nn(t,r.missing),s=Se(r.readTime);return ce.newNoDocument(i,s)}(n,e):O()}function jx(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(F(u===void 0||typeof u=="string"),De.fromBase64String(u||"")):(F(u===void 0||u instanceof Uint8Array),De.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?g.UNKNOWN:gw(c.code);return new E(u,c.message||"")}(o);t=new ww(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nn(n,r.document.name),s=Se(r.document.updateTime),o=r.document.createTime?Se(r.document.createTime):L.min(),a=new Ke({mapValue:{fields:r.document.fields}}),c=ce.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new ha(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nn(n,r.document),s=r.readTime?Se(r.readTime):L.min(),o=ce.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nn(n,r.document),s=r.removedTargetIds||[];t=new ha([],s,i,null)}else{if(!("filter"in e))return O();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ox(i,s),a=r.targetId;t=new vw(a,o)}}return t}function no(n,e){let t;if(e instanceof ji)t={update:Vp(n,e.key,e.value)};else if(e instanceof zi)t={delete:eo(n,e.key)};else if(e instanceof En)t={update:Vp(n,e.key,e.data),updateMask:Qx(e.fieldMask)};else{if(!(e instanceof id))return O();t={verify:eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Si)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mr)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Lr)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ci)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw O()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Bx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(n,e.precondition)),t}function kl(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?pe.updateTime(Se(i.updateTime)):i.exists!==void 0?pe.exists(i.exists):pe.none()}(e.currentDocument):pe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)F(o.setToServerValue==="REQUEST_TIME"),a=new Si;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Mr(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Lr(u)}else"increment"in o?a=new Ci(s,o.increment):O();const c=_e.fromServerFormat(o.fieldPath);return new Ao(c,a)}(n,i)):[];if(e.update){e.update.name;const i=nn(n,e.update.name),s=new Ke({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new mt(c.map(u=>_e.fromServerFormat(u)))}(e.updateMask);return new En(i,s,o,t,r)}return new ji(i,s,t,r)}if(e.delete){const i=nn(n,e.delete);return new zi(i,t)}if(e.verify){const i=nn(n,e.verify);return new id(i,t)}return O()}function zx(n,e){return n&&n.length>0?(F(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?Se(r.updateTime):Se(i);return s.isEqual(L.min())&&(s=Se(i)),new Nx(s,r.transformResults||[])}(t,e))):[]}function Sw(n,e){return{documents:[Cl(n,e.path)]}}function Cw(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Cl(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Cl(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Rw(te.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ni(l.field),direction:Kx(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Sl(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function kw(n){let e=Ew(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){F(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=Aw(l);return h instanceof te&&ed(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new pi(ri(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,To(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new zn(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new zn(d,h)}(t.endAt)),Zv(e,i,o,s,a,"F",c,u)}function Gx(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Aw(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ri(e.unaryFilter.field);return Q.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=ri(e.unaryFilter.field);return Q.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ri(e.unaryFilter.field);return Q.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ri(e.unaryFilter.field);return Q.create(s,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return Q.create(ri(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return te.create(e.compositeFilter.filters.map(t=>Aw(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function Kx(n){return Fx[n]}function Wx(n){return $x[n]}function Hx(n){return Vx[n]}function ni(n){return{fieldPath:n.canonicalString()}}function ri(n){return _e.fromServerFormat(n.fieldPath)}function Rw(n){return n instanceof Q?function(e){if(e.op==="=="){if(Ep(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NAN"}};if(bp(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ep(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NAN"}};if(bp(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(e.field),op:Wx(e.op),value:e.value}}}(n):n instanceof te?function(e){const t=e.getFilters().map(r=>Rw(r));return t.length===1?t[0]:{compositeFilter:{op:Hx(e.op),filters:t}}}(n):O()}function Qx(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,r,i,s=L.min(),o=L.min(),a=De.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.fe=e}}function Yx(n,e){let t;if(e.document)t=Tw(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=A.fromSegments(e.noDocument.path),i=$r(e.noDocument.readTime);t=ce.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return O();{const r=A.fromSegments(e.unknownDocument.path),i=$r(e.unknownDocument.version);t=ce.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new me(r[0],r[1]);return L.fromTimestamp(i)}(e.readTime)),t}function Up(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:$a(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:eo(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ki(i,s.version.toTimestamp()),createTime:ki(i,s.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Fr(e.version)};else{if(!e.isUnknownDocument())return O();r.unknownDocument={path:t.path.toArray(),version:Fr(e.version)}}return r}function $a(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Fr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function $r(n){const e=new me(n.seconds,n.nanoseconds);return L.fromTimestamp(e)}function ur(n,e){const t=(e.baseMutations||[]).map(s=>kl(n.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>kl(n.fe,s)),i=me.fromMillis(e.localWriteTimeMs);return new sd(e.batchId,i,t,r)}function Is(n){const e=$r(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?$r(n.lastLimboFreeSnapshotVersion):L.min();let r;var i;return n.query.documents!==void 0?(F((i=n.query).documents.length===1),r=wt(qi(Ew(i.documents[0])))):r=function(s){return wt(kw(s))}(n.query),new dn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,De.fromBase64String(n.resumeToken))}function Dw(n,e){const t=Fr(e.snapshotVersion),r=Fr(e.lastLimboFreeSnapshotVersion);let i;i=Ma(e.target)?Sw(n.fe,e.target):Cw(n.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Or(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function hd(n){const e=kw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fa(e,e.limit,"L"):e}function Du(n,e){return new ad(e.largestBatchId,kl(n.fe,e.overlayMutation))}function Bp(n,e){const t=e.path.lastSegment();return[n,ct(e.path.popLast()),t]}function qp(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Fr(r.readTime),documentKey:ct(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{getBundleMetadata(e,t){return jp(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:$r(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return jp(e).put({bundleId:(r=t).id,createTime:Fr(Se(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return zp(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:hd(i.bundledQuery),readTime:$r(i.readTime)};var i})}saveNamedQuery(e,t){return zp(e).put(function(r){return{name:r.name,readTime:Fr(Se(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function jp(n){return Ue(n,"bundles")}function zp(n){return Ue(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new Rc(e,r)}getOverlay(e,t){return ss(e).get(Bp(this.userId,t)).next(r=>r?Du(this.serializer,r):null)}getOverlays(e,t){const r=tn();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new ad(t,o);i.push(this.we(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(ct(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ss(e).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=tn(),s=ct(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ss(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Du(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=tn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ss(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Du(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}we(e,t){return ss(e).put(function(r,i,s){const[o,a,c]=Bp(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:no(r.fe,s.mutation)}}(this.serializer,this.userId,t))}}function ss(n){return Ue(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(we(e.integerValue));else if("doubleValue"in e){const r=we(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),Ys(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Bn(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?zv(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):O()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const i of Object.keys(r))this.Te(i,t),this.me(r[i],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const i of r)this.me(i,t)}ve(e,t){this.ye(t,37),A.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}lr.Ve=new lr;function Jx(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Gp(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=Jx(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class Zx{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=t.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=t.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const t=this.Fe(e),r=Gp(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Le(e){const t=this.Fe(e),r=Gp(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class eN{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class tN{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class os{constructor(){this.je=new Zx,this.ze=new eN(this.je),this.We=new tN(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new hr(this.indexId,this.documentKey,this.arrayValue,r)}}function kn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Kp(n.arrayValue,e.arrayValue),t!==0?t:(t=Kp(n.directionalValue,e.directionalValue),t!==0?t:A.comparator(n.documentKey,e.documentKey)))}function Kp(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){F(e.collectionGroup===this.collectionId);const t=gl(e);if(t!==void 0&&!this.en(t))return!1;const r=sr(e);let i=0,s=0;for(;i<r.length&&this.en(r[i]);++i);if(i===r.length)return!0;if(this.Ze!==void 0){const o=r[i];if(!this.nn(this.Ze,o)||!this.sn(this.Ye[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],o))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n){var e,t;if(F(n instanceof Q||n instanceof te),n instanceof Q){if(n instanceof Jv){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Q.create(n.field,"==",s)))||[];return te.create(i,"or")}return n}const r=n.filters.map(i=>Pw(i));return te.create(r,n.op)}function rN(n){if(n.getFilters().length===0)return[];const e=xl(Pw(n));return F(Ow(e)),Al(e)||Rl(e)?[e]:e.getFilters()}function Al(n){return n instanceof Q}function Rl(n){return n instanceof te&&ed(n)}function Ow(n){return Al(n)||Rl(n)||function(e){if(e instanceof te&&Il(e)){for(const t of e.getFilters())if(!Al(t)&&!Rl(t))return!1;return!0}return!1}(n)}function xl(n){if(F(n instanceof Q||n instanceof te),n instanceof Q)return n;if(n.filters.length===1)return xl(n.filters[0]);const e=n.filters.map(r=>xl(r));let t=te.create(e,n.op);return t=Va(t),Ow(t)?t:(F(t instanceof te),F(Ti(t)),F(t.filters.length>1),t.filters.reduce((r,i)=>dd(r,i)))}function dd(n,e){let t;return F(n instanceof Q||n instanceof te),F(e instanceof Q||e instanceof te),t=n instanceof Q?e instanceof Q?function(r,i){return te.create([r,i],"and")}(n,e):Wp(n,e):e instanceof Q?Wp(e,n):function(r,i){if(F(r.filters.length>0&&i.filters.length>0),Ti(r)&&Ti(i))return Qv(r,i.getFilters());const s=Il(r)?r:i,o=Il(r)?i:r,a=s.filters.map(c=>dd(c,o));return te.create(a,"or")}(n,e),Va(t)}function Wp(n,e){if(Ti(e))return Qv(e,n.getFilters());{const t=e.filters.map(r=>dd(n,r));return te.create(t,"or")}}function Va(n){if(F(n instanceof Q||n instanceof te),n instanceof Q)return n;const e=n.getFilters();if(e.length===1)return Va(e[0]);if(Wv(n))return n;const t=e.map(i=>Va(i)),r=[];return t.forEach(i=>{i instanceof Q?r.push(i):i instanceof te&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:te.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.rn=new fd}addToCollectionParentIndex(e,t){return this.rn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(kt.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class fd{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ue(Z.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ue(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Uint8Array(0);class sN{constructor(e,t){this.user=e,this.databaseId=t,this.on=new fd,this.un=new er(r=>Or(r),(r,i)=>So(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:ct(i)};return Hp(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Nv(t),""],!1,!0);return Hp(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(en(o.parent))}return r})}addFieldIndex(e,t){const r=Xo(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=cs(e);return s.next(a=>{o.put(qp(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Xo(e),i=cs(e),s=as(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=as(e);let i=!0;const s=new Map;return m.forEach(this.cn(t),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=z();const a=[];return m.forEach(s,(c,u)=>{var l;_("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(w=>`${w.fieldPath}:${w.kind}`).join(",")}`} to execute ${Or(t)}`);const h=function(w,I){const S=gl(I);if(S===void 0)return null;for(const k of La(w,S.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(u,c),d=function(w,I){const S=new Map;for(const k of sr(I))for(const N of La(w,k.fieldPath))switch(N.op){case"==":case"in":S.set(k.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return S.set(k.fieldPath.canonicalString(),N.value),Array.from(S.values())}return null}(u,c),f=function(w,I){const S=[];let k=!0;for(const N of sr(I)){const q=N.kind===0?kp(w,N.fieldPath,w.startAt):Ap(w,N.fieldPath,w.startAt);S.push(q.value),k&&(k=q.inclusive)}return new zn(S,k)}(u,c),p=function(w,I){const S=[];let k=!0;for(const N of sr(I)){const q=N.kind===0?Ap(w,N.fieldPath,w.endAt):kp(w,N.fieldPath,w.endAt);S.push(q.value),k&&(k=q.inclusive)}return new zn(S,k)}(u,c),v=this.hn(c,u,f),b=this.hn(c,u,p),C=this.ln(c,u,d),P=this.fn(c.indexId,h,v,f.inclusive,b,p.inclusive,C);return m.forEach(P,w=>r.H(w,t.limit).next(I=>{I.forEach(S=>{const k=A.fromSegments(S.documentKey);o.has(k)||(o=o.add(k),a.push(k))})}))}).next(()=>a)}return m.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=rN(te.create(e.filters,"and")).map(r=>El(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/u]):Yo,f=this.wn(e,d,r[h%u],i),p=this._n(e,d,s[h%u],o),v=a.map(b=>this.wn(e,d,b,!0));l.push(...this.createRange(f,p,v))}return l}wn(e,t,r,i){const s=new hr(e,A.empty(),t,r);return i?s:s.Je()}_n(e,t,r,i){const s=new hr(e,A.empty(),t,r);return i?s.Je():s}an(e,t){const r=new nN(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return m.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new ue(_e.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}mn(e,t){const r=new os;for(const i of sr(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);lr.Ve._e(s,o)}return r.Qe()}dn(e){const t=new os;return lr.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new os;return lr.Ve._e(Pr(this.databaseId,t),r.He(function(i){const s=sr(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new os);let s=0;for(const o of sr(e)){const a=r[s++];for(const c of i)if(this.yn(t,o.fieldPath)&&Zs(a))i=this.pn(i,o,a);else{const u=c.He(o.kind);lr.Ve._e(a,u)}}return this.In(i)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new os;c.seed(a.Qe()),lr.Ve._e(o,c.He(t.kind)),s.push(c)}return s}yn(e,t){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Xo(e),i=cs(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Oa(l.sequenceNumber,new kt($r(l.readTime),new A(en(l.documentKey)),l.largestBatchId)):Oa.empty(),d=u.fields.map(([f,p])=>new BR(_e.fromServerFormat(f),p));return new Dv(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:j(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Xo(e),s=cs(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put(qp(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.En(e,i,c).next(u=>{const l=this.An(s,c);return u.isEqual(l)?m.resolve():this.vn(e,s,c,u,l)}))))})}Rn(e,t,r,i){return as(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,i){return as(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const i=as(e);let s=new ue(kn);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new hr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,t){let r=new ue(kn);const i=this.mn(t,e);if(i==null)return r;const s=gl(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Zs(o))for(const a of o.arrayValue.values||[])r=r.add(new hr(t.indexId,e.key,this.dn(a),i))}else r=r.add(new hr(t.indexId,e.key,Yo,i));return r}vn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let p=Zr(d),v=Zr(f);for(;p||v;){let b=!1,C=!1;if(p&&v){const P=u(p,v);P<0?C=!0:P>0&&(b=!0)}else p!=null?C=!0:b=!0;b?(l(v),v=Zr(f)):C?(h(p),p=Zr(d)):(p=Zr(d),v=Zr(f))}}(i,s,kn,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),m.waitFor(o)}Tn(e){let t=1;return cs(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>kn(o,a)).filter((o,a,c)=>!a||kn(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=kn(o,e),c=kn(o,t);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Yo,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Yo,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return kn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Qp)}getMinOffset(e,t){return m.mapArray(this.cn(t),r=>this.an(e,r).next(i=>i||O())).next(Qp)}}function Hp(n){return Ue(n,"collectionParents")}function as(n){return Ue(n,"indexEntries")}function Xo(n){return Ue(n,"indexConfiguration")}function cs(n){return Ue(n,"indexState")}function Qp(n){F(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Xh(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new kt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ft{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{F(a===1)}));const u=[];for(const l of t.mutations){const h=$v(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function Ua(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw O();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(41943040,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);class xc{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,t,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new xc(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return An(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=ii(e),o=An(e);return o.add({}).next(a=>{F(typeof a=="number");const c=new sd(a,t,r,i),u=function(d,f,p){const v=p.baseMutations.map(C=>no(d.fe,C)),b=p.mutations.map(C=>no(d.fe,C));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:v,mutations:b}}(this.serializer,this.userId,c),l=[];let h=new ue((d,f)=>j(d.canonicalString(),f.canonicalString()));for(const d of i){const f=$v(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,WR))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return An(e).get(t).next(r=>r?(F(r.userId===this.userId),ur(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?m.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return An(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(F(a.batchId>=r),s=ur(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return An(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return An(e).j("userMutationsIndex",t).next(r=>r.map(i=>ur(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=aa(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ii(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=en(l);if(u===this.userId&&t.path.isEqual(d))return An(e).get(h).next(f=>{if(!f)throw O();F(f.userId===this.userId),s.push(ur(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(j);const i=[];return t.forEach(s=>{const o=aa(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=ii(e).X({range:a},(u,l,h)=>{const[d,f,p]=u,v=en(f);d===this.userId&&s.path.isEqual(v)?r=r.add(p):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=aa(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ue(j);return ii(e).X({range:o},(c,u,l)=>{const[h,d,f]=c,p=en(d);h===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(An(e).get(s).next(o=>{if(o===null)throw O();F(o.userId===this.userId),r.push(ur(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Mw(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return ii(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=en(s[1]);i.push(c)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,t){return Lw(e,this.userId,t)}xn(e){return Fw(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Lw(n,e,t){const r=aa(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ii(n).X({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function An(n){return Ue(n,"mutations")}function ii(n){return Ue(n,"documentMutations")}function Fw(n){return Ue(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Vr(0)}static Mn(){return new Vr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new Vr(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>L.fromTimestamp(new me(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ei(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return ei(e).X((o,a)=>{const c=Is(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ei(e).X((r,i)=>{const s=Is(i);t(s)})}$n(e){return Xp(e).get("targetGlobalKey").next(t=>(F(t!==null),t))}On(e,t){return Xp(e).put("targetGlobalKey",t)}Fn(e,t){return ei(e).put(Dw(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Or(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ei(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Is(a);So(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=xn(e);return t.forEach(o=>{const a=ct(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=xn(e);return m.forEach(t,s=>{const o=ct(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=xn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=xn(e);let s=z();return i.X({range:r,Y:!0},(o,a,c)=>{const u=en(o[1]),l=new A(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=ct(t.path),i=IDBKeyRange.bound([r],[Nv(r)],!1,!0);let s=0;return xn(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,t){return ei(e).get(t).next(r=>r?Is(r):null)}}function ei(n){return Ue(n,"targets")}function Xp(n){return Ue(n,"targetGlobal")}function xn(n){return Ue(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp([n,e],[t,r]){const i=j(n,t);return i===0?j(e,r):i}class aN{constructor(e){this.Ln=e,this.buffer=new ue(Jp),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Jp(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cN{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zn(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Jn(t)}await this.Qn(3e5)})}}class uN{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(pt.ct);const r=new aN(t);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Yp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yp):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ml()<=J.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function lN(n,e){return new uN(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,t){this.db=e,this.garbageCollector=lN(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return Jo(e,r)}removeReference(e,t,r){return Jo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Jo(e,t)}Xn(e,t){return function(r,i){let s=!1;return Fw(r).Z(o=>Lw(r,o,i).next(a=>(a&&(s=!0),m.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,L.min()),xn(e).delete([0,ct(o.path)])))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Jo(e,t)}Yn(e,t){const r=xn(e);let i,s=pt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==pt.ct&&t(new A(en(i)),s),s=u,i=c):s=pt.ct}).next(()=>{s!==pt.ct&&t(new A(en(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Jo(n,e){return xn(n).put(function(t,r){return{targetId:0,path:ct(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.changes=new er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return rr(e).put(r)}removeEntry(e,t,r){return rr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],$a(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=ce.newInvalidDocument(t);return rr(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(us(t))},(i,s)=>{r=this.ts(t,s)}).next(()=>r)}es(e,t){let r={size:0,document:ce.newInvalidDocument(t)};return rr(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(us(t))},(i,s)=>{r={document:this.ts(t,s),size:Ua(s)}}).next(()=>r)}getEntries(e,t){let r=gt();return this.ns(e,t,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,t){let r=gt(),i=new se(A.comparator);return this.ns(e,t,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,Ua(o))}).next(()=>({documents:r,rs:i}))}ns(e,t,r){if(t.isEmpty())return m.resolve();let i=new ue(tm);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(us(i.first()),us(i.last())),o=i.getIterator();let a=o.getNext();return rr(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=A.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&tm(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(us(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),$a(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rr(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=gt();for(const l of c){const h=this.ts(A.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(ko(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=gt();const o=em(t,r),a=em(t,kt.max());return rr(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.ts(A.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new fN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Zp(e).get("remoteDocumentGlobalKey").next(t=>(F(!!t),t))}Zn(e,t){return Zp(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=Yx(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(L.min())))return r}return ce.newInvalidDocument(e)}}function Vw(n){return new dN(n)}class fN extends $w{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new er(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new ue((s,o)=>j(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(t.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Up(this.os.serializer,o);i=i.add(s.path.popLast());const u=Ua(c);r+=u-a.size,t.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Up(this.os.serializer,o.convertToNoDocument(L.min()));t.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.os.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Zp(n){return Ue(n,"remoteDocumentGlobal")}function rr(n){return Ue(n,"remoteDocumentsV14")}function us(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function em(n,e){const t=e.documentKey.path.toArray();return[n,$a(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function tm(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=j(t[s],r[s]),i)return i;return i=j(t.length,r.length),i||(i=j(t[t.length-2],r[r.length-2]),i||j(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ns(r.mutation,i,mt.empty(),me.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const i=tn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=vs();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=tn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=gt();const o=xs(),a=xs();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof En)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Ns(l.mutation,u,l.mutation.getFieldMask(),me.now())):o.set(u.key,mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new pN(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=xs();let i=new se((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||mt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||z()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=sw();l.forEach(d=>{if(!s.has(d)){const f=fw(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return A.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(tn());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,z())).next(l=>({batchId:a,changes:iw(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new A(t)).next(r=>{let i=vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=vs();return this.indexManager.getCollectionParents(e,i).next(o=>m.forEach(o,a=>{const c=function(u,l){return new bn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,ce.newInvalidDocument(u)))});let o=vs();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Ns(u.mutation,c,mt.empty(),me.now()),ko(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return m.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:Se(r.createTime)}),m.resolve()}getNamedQuery(e,t){return m.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:hd(r.bundledQuery),readTime:Se(r.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.overlays=new se(A.comparator),this.ls=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tn();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=tn(),s=t.length+1,o=new A(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new se((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=tn(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=tn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ad(t,r));let s=this.ls.get(t);s===void 0&&(s=z(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.fs=new ue(Oe.ds),this.ws=new ue(Oe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new Oe(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new Oe(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new A(new Z([])),r=new Oe(t,e),i=new Oe(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new A(new Z([])),r=new Oe(t,e),i=new Oe(t,e+1);let s=z();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Oe(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return A.comparator(e.key,t.key)||j(e.As,t.As)}static _s(e,t){return j(e.As,t.As)||A.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new ue(Oe.ds)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sd(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Oe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Oe(t,0),i=new Oe(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(j);return t.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),m.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;A.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new A(s),0);let a=new ue(j);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),m.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return m.forEach(t.mutations,i=>{const s=new Oe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new Oe(t,0),i=this.Rs.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.Ds=e,this.docs=new se(A.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():ce.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=gt();const o=t.path,a=new A(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Xh(Ov(l),r)<=0||(i.has(l.key)||ko(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){O()}Cs(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new wN(this)}getSize(e){return m.resolve(this.size)}}class wN extends $w{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.persistence=e,this.xs=new er(t=>Or(t),So),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Ns=0,this.ks=new pd,this.targetCount=0,this.Ms=Vr.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),m.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Vr(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Fn(t),m.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t){this.$s={},this.overlays={},this.Os=new pt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new IN(this),this.indexManager=new iN,this.remoteDocumentCache=function(r){return new vN(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Nw(t),this.qs=new mN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new yN(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new bN(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return m.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class bN extends Lv{constructor(e){super(),this.currentSequenceNumber=e}}class Nc{constructor(e){this.persistence=e,this.Qs=new pd,this.js=null}static zs(e){return new Nc(e)}get Ws(){if(this.js)return this.js;throw O()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),m.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ws,r=>{const i=A.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,L.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return m.or([()=>m.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Tc("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yp,{unique:!0}),a.createObjectStore("documentMutations")}(e),nm(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),nm(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:L.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yp,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return m.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:sx});c.createIndex("collectionPathOverlayIndex",ox,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",ax,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:HR});c.createIndex("documentKeyIndex",QR),c.createIndex("collectionGroupIndex",YR)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:tx}).createIndex("sequenceNumberIndex",nx,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:rx}).createIndex("documentKeyIndex",ix,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=Ua(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>m.forEach(a,c=>{F(c.userId===s.userId);const u=ur(this.serializer,c);return Mw(e,s.userId,u).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new Z(o),u=function(l){return[0,ct(l)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:ct(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:ex});const r=t.store("collectionParents"),i=new fd,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:ct(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new Z(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=en(a);return s(l.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,i)=>{const s=Is(i),o=Dw(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new A(Z.fromString(u.document.name).popFirst(5)):u.noDocument?A.fromSegments(u.noDocument.path):u.unknownDocument?A.fromSegments(u.unknownDocument.path):O()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>m.waitFor(i))}si(e,t){const r=t.store("mutations"),i=Vw(this.serializer),s=new Bw(Nc.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:z();ur(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new Me(u),h=Rc.de(this.serializer,l),d=s.getIndexManager(l),f=xc.de(l,this.serializer,d,s.referenceDelegate);return new Uw(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new yl(t,pt.ct),c).next()})})}}function nm(n){n.createObjectStore("targetDocuments",{keyPath:JR}).createIndex("documentTargetsIndex",ZR,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",XR,{unique:!0}),n.createObjectStore("targetGlobal")}const Pu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class md{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=l,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!md.D())throw new E(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new hN(this,i),this.di=t+"main",this.serializer=new Nw(c),this.wi=new Ft(this.di,this.ui,new EN(this.serializer)),this.Bs=new oN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Vw(this.serializer),this.qs=new Xx,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&Ee("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(g.FAILED_PRECONDITION,Pu);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new pt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(Zn(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return ls(e).get("owner").next(t=>m.resolve(this.Ri(t)))}Pi(e){return Zo(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ue(t,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?m.resolve(!0):ls(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new E(g.FAILED_PRECONDITION,Pu);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zo(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new yl(e,pt.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Zo(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return xc.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sN(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Rc.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?ux:o===14?Bv:o===13?Uv:o===12?cx:o===11?Vv:void O();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new yl(c,this.Os?this.Os.next():pt.ct),t==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw Ee(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new E(g.FAILED_PRECONDITION,Mv);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return ls(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new E(g.FAILED_PRECONDITION,Pu)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ls(e).put("owner",t)}static D(){return Ft.D()}Ai(e){const t=ls(e);return t.get("owner").next(r=>this.Ri(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ee(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;EE()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ee("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Ee("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ls(n){return Ue(n,"owner")}function Zo(n){return Ue(n,"clientMetadata")}function gd(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=z(),i=z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yd(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(Rp(t))return m.resolve(null);let r=wt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Fa(t,null,"F"),r=wt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=z(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,Fa(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,r,i){return Rp(t)||i.isEqual(L.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(ml()<=J.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tl(t)),this.Wi(e,o,t,Pv(i,-1)))})}ji(e,t){let r=new ue(nw(e));return t.forEach((i,s)=>{ko(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return ml()<=J.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Tl(t)),this.Ui.getDocumentsMatchingQuery(e,t,kt.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new se(j),this.Yi=new er(s=>Or(s),So),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uw(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function jw(n,e,t,r){return new _N(n,e,t,r)}async function zw(n,e){const t=R(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=z();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function TN(n,e){const t=R(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=m.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const v=c.docVersions.get(f);F(v!==null),p.version.compareTo(v)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Gw(n){const e=R(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function SN(n,e){const t=R(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(De.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(p,v,b){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(t.Bs.updateTargetData(s,f))});let c=gt(),u=z();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Kw(s,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!r.isEqual(L.min())){const l=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function Kw(n,e,t){let r=z(),i=z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=gt();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(L.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function CN(n,e){const t=R(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ai(n,e){const t=R(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new dn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function Ri(n,e,t){const r=R(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Ba(n,e,t){const r=R(n);let i=L.min(),s=z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=R(a),h=l.Yi.get(u);return h!==void 0?m.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(r,o,wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:L.min(),t?s:z())).next(a=>(Qw(r,tw(e),a),{documents:a,ir:s})))}function Ww(n,e){const t=R(n),r=R(t.Bs),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function Hw(n,e){const t=R(n),r=t.Xi.get(e)||L.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Zi.getAllFromCollectionGroup(i,e,Pv(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Qw(t,e,i),i))}function Qw(n,e,t){let r=n.Xi.get(e)||L.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function kN(n,e,t,r){const i=R(n);let s=z(),o=gt();for(const u of t){const l=e.rr(u.metadata.name);u.document&&(s=s.add(l));const h=e.ur(u);h.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Ai(i,function(u){return wt(qi(Z.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Kw(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Bs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Bs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.nr,l.sr)).next(()=>l.nr)))}async function AN(n,e,t=z()){const r=await Ai(n,wt(hd(e.bundledQuery))),i=R(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Se(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(De.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,t,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function rm(n,e){return`firestore_clients_${n}_${e}`}function im(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ou(n,e){return`firestore_targets_${n}_${e}`}class qa{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ar(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new E(i.error.code,i.error.message))),o?new qa(e,t,i.state,s):(Ee("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ds{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new E(r.error.code,r.error.message))),s?new Ds(e,r.state,i):(Ee("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ja{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=rd();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Fv(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ja(e,s):(Ee("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class vd{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new vd(t.clientId,t.onlineState):(Ee("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Nl{constructor(){this.activeTargetIds=rd()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mu{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new se(j),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=rm(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Nl),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(rm(this.persistenceKey,r));if(i){const s=ja.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ou(this.persistenceKey,e));if(r){const i=Ds.ar(e,r);i&&(t=i.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ou(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void Ee("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(i){let s=pt.ct;if(i!=null)try{const o=JSON.parse(i);F(typeof o=="number"),s=o}catch(o){Ee("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==pt.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const i=new qa(this.currentUser,e,t,r),s=im(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const t=im(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const i=Ou(this.persistenceKey,e),s=new Ds(e,t,r);this.setItem(i,s.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return ja.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return qa.ar(new Me(s),i,t)}Ur(e,t){const r=this.Ar.exec(e),i=Number(r[1]);return Ds.ar(i,t)}br(e){return vd.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=rd();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Yw{constructor(){this.Hr=new Nl,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Nl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea=null;function Lu(){return ea===null?ea=268435456+Math.round(2147483648*Math.random()):ea++,"0x"+ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class DN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=Lu(),a=this.To(e,t);_("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(u=>(_("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ut("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Bi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=xN[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=Lu();return new Promise((o,a)=>{const c=new AR;c.setWithCredentials(!0),c.listenOnce(SR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Nu.NO_ERROR:const l=c.getResponseJson();_(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Nu.TIMEOUT:_(Ze,`RPC '${e}' ${s} timed out`),a(new E(g.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const h=c.getStatus();if(_(Ze,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(b)>=0?b:g.UNKNOWN}(f.status);a(new E(p,f.message))}else a(new E(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new E(g.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{_(Ze,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(Ze,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Ro(e,t,r){const i=Lu(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_R(),a=TR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new kR({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(Ze,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const p=new NN({ro:b=>{f?_(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(d||(_(Ze,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(Ze,`RPC '${e}' stream ${i} sending:`,b),h.send(b))},oo:()=>h.close()}),v=(b,C,P)=>{b.listen(C,w=>{try{P(w)}catch(I){setTimeout(()=>{throw I},0)}})};return v(h,Wo.EventType.OPEN,()=>{f||_(Ze,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Wo.EventType.CLOSE,()=>{f||(f=!0,_(Ze,`RPC '${e}' stream ${i} transport closed`),p.wo())}),v(h,Wo.EventType.ERROR,b=>{f||(f=!0,Ut(Ze,`RPC '${e}' stream ${i} transport errored:`,b),p.wo(new E(g.UNAVAILABLE,"The operation could not be completed")))}),v(h,Wo.EventType.MESSAGE,b=>{var C;if(!f){const P=b.data[0];F(!!P);const w=P,I=w.error||((C=w[0])===null||C===void 0?void 0:C.error);if(I){_(Ze,`RPC '${e}' stream ${i} received error:`,I);const S=I.status;let k=function(q){const H=Re[q];if(H!==void 0)return gw(H)}(S),N=I.message;k===void 0&&(k=g.INTERNAL,N="Unknown error status: "+S+" with message "+I.message),f=!0,p.wo(new E(k,N)),h.close()}else _(Ze,`RPC '${e}' stream ${i} received:`,P),p._o(P)}}),v(a,CR.STAT_EVENT,b=>{b.stat===fp.PROXY?_(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===fp.NOPROXY&&_(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(){return typeof window<"u"?window:null}function da(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n){return new Ux(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new wd(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(Ee(t.toString()),Ee("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new E(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PN extends Jw{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=jx(this.serializer,e),r=function(i){if(!("targetChange"in i))return L.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?L.min():s.readTime?Se(s.readTime):L.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=to(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=Ma(a)?{documents:Sw(i,a)}:{query:Cw(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Iw(i,s.resumeToken);const c=Sl(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(L.min())>0){o.readTime=ki(i,s.snapshotVersion.toTimestamp());const c=Sl(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=Gx(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=to(this.serializer),t.removeTarget=e,this.Wo(t)}}class ON extends Jw{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=zx(e.writeResults,e.commitTime),r=Se(e.commitTime);return this.listener.cu(r,t)}return F(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=to(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>no(this.serializer,r))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new E(g.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(g.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(g.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class LN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ee(t),this.mu=!1):_("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{tr(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c.vu.add(4),await Gi(c),c.bu.set("Unknown"),c.vu.delete(4),await Do(c)}(this))})}),this.bu=new LN(r,i)}}async function Do(n){if(tr(n))for(const e of n.Ru)await e(!0)}async function Gi(n){for(const e of n.Ru)await e(!1)}function Dc(n,e){const t=R(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Ed(t)?bd(t):Wi(t).Ko()&&Id(t,e))}function ro(n,e){const t=R(n),r=Wi(t);t.Au.delete(e),r.Ko()&&Zw(t,e),t.Au.size===0&&(r.Ko()?r.jo():tr(t)&&t.bu.set("Unknown"))}function Id(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(L.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wi(n).su(e)}function Zw(n,e){n.Vu.qt(e),Wi(n).iu(e)}function bd(n){n.Vu=new Lx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Wi(n).start(),n.bu.gu()}function Ed(n){return tr(n)&&!Wi(n).Uo()&&n.Au.size>0}function tr(n){return R(n).vu.size===0}function eI(n){n.Vu=void 0}async function $N(n){n.Au.forEach((e,t)=>{Id(n,e)})}async function VN(n,e){eI(n),Ed(n)?(n.bu.Iu(e),bd(n)):n.bu.set("Unknown")}async function UN(n,e,t){if(n.bu.set("Online"),e instanceof ww&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await za(n,r)}else if(e instanceof ha?n.Vu.Ht(e):e instanceof vw?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(L.min()))try{const r=await Gw(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(De.EMPTY_BYTE_STRING,u.snapshotVersion)),Zw(i,a);const l=new dn(u.target,a,c,u.sequenceNumber);Id(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await za(n,r)}}async function za(n,e,t){if(!Zn(e))throw e;n.vu.add(1),await Gi(n),n.bu.set("Offline"),t||(t=()=>Gw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Do(n)})}function tI(n,e){return e().catch(t=>za(n,t,e))}async function Ki(n){const e=R(n),t=Gn(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;BN(e);)try{const i=await CN(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,qN(e,i)}catch(i){await za(e,i)}nI(e)&&rI(e)}function BN(n){return tr(n)&&n.Eu.length<10}function qN(n,e){n.Eu.push(e);const t=Gn(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function nI(n){return tr(n)&&!Gn(n).Uo()&&n.Eu.length>0}function rI(n){Gn(n).start()}async function jN(n){Gn(n).hu()}async function zN(n){const e=Gn(n);for(const t of n.Eu)e.uu(t.mutations)}async function GN(n,e,t){const r=n.Eu.shift(),i=od.from(r,e,t);await tI(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ki(n)}async function KN(n,e){e&&Gn(n).ou&&await async function(t,r){if(i=r.code,mw(i)&&i!==g.ABORTED){const s=t.Eu.shift();Gn(t).Qo(),await tI(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ki(t)}var i}(n,e),nI(n)&&rI(n)}async function om(n,e){const t=R(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=tr(t);t.vu.add(3),await Gi(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Do(t)}async function Dl(n,e){const t=R(n);e?(t.vu.delete(2),await Do(t)):e||(t.vu.add(2),await Gi(t),t.bu.set("Unknown"))}function Wi(n){return n.Su||(n.Su=function(e,t,r){const i=R(e);return i.fu(),new PN(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:$N.bind(null,n),ao:VN.bind(null,n),nu:UN.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),Ed(n)?bd(n):n.bu.set("Unknown")):(await n.Su.stop(),eI(n))})),n.Su}function Gn(n){return n.Du||(n.Du=function(e,t,r){const i=R(e);return i.fu(),new ON(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:jN.bind(null,n),ao:KN.bind(null,n),au:zN.bind(null,n),cu:GN.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await Ki(n)):(await n.Du.stop(),n.Eu.length>0&&(_("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new _d(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hi(n,e){if(Ee("AsyncQueue",`${e}: ${n}`),Zn(n))return new E(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.comparator=e?(t,r)=>e(t,r)||A.comparator(t.key,r.key):(t,r)=>A.comparator(t.key,r.key),this.keyedMap=vs(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.Cu=new se(A.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):O():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class xi{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new xi(e,t,mi.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Co(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.Nu=void 0,this.listeners=[]}}class HN{constructor(){this.queries=new er(e=>ew(e),Co),this.onlineState="Unknown",this.ku=new Set}}async function Td(n,e){const t=R(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new WN),i)try{s.Nu=await t.onListen(r)}catch(o){const a=Hi(o,`Initialization of query '${Tl(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&Cd(t)}async function Sd(n,e){const t=R(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function QN(n,e){const t=R(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Cd(t)}function YN(n,e,t){const r=R(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Cd(n){n.ku.forEach(e=>{e.next()})}class kd{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.serializer=e}rr(e){return nn(this.serializer,e)}ur(e){return e.metadata.exists?Tw(this.serializer,e.document,!1):ce.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Se(e)}}class JN{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=iI(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=Z.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new cm(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||z()).add(s);t.set(o,a)}}return t}async complete(){const e=await kN(this.localStore,new cm(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await AN(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function iI(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.key=e}}class oI{constructor(e){this.key=e}}class aI{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=z(),this.mutatedKeys=z(),this.tc=nw(e),this.ec=new mi(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new am,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=ko(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(r.track({type:3,doc:f}),b=!0):this.rc(d,f)||(r.track({type:2,doc:f}),b=!0,(c&&this.tc(f,c)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),b=!0):d&&!f&&(r.track({type:1,doc:d}),b=!0,(c||u)&&(a=!0)),b&&(f?(o=o.add(f),s=v?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,l)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return f(h)-f(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new xi(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new am,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=z(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new oI(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new sI(r))}),t}hc(e){this.Yu=e.ir,this.Zu=z();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return xi.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ZN{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class eD{constructor(e){this.key=e,this.fc=!1}}class tD{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new er(a=>ew(a),Co),this._c=new Map,this.mc=new Set,this.gc=new se(A.comparator),this.yc=new Map,this.Ic=new pd,this.Tc={},this.Ec=new Map,this.Ac=Vr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function nD(n,e){const t=Dd(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await Ai(t.localStore,wt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ad(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Dc(t.remoteStore,o)}return i}async function Ad(n,e,t,r,i){n.Rc=(h,d,f)=>async function(p,v,b,C){let P=v.view.sc(b);P.zi&&(P=await Ba(p.localStore,v.query,!1).then(({documents:S})=>v.view.sc(S,P)));const w=C&&C.targetChanges.get(v.targetId),I=v.view.applyChanges(P,p.isPrimaryClient,w);return Pl(p,v.targetId,I.cc),I.snapshot}(n,h,d,f);const s=await Ba(n.localStore,e,!0),o=new aI(e,s.ir),a=o.sc(s.documents),c=xo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Pl(n,t,u.cc);const l=new ZN(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function rD(n,e){const t=R(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!Co(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Ri(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ro(t.remoteStore,r.targetId),Ni(t,r.targetId)}).catch(Jn)):(Ni(t,r.targetId),await Ri(t.localStore,r.targetId,!0))}async function iD(n,e,t){const r=Pd(n);try{const i=await function(s,o){const a=R(s),c=me.now(),u=o.reduce((d,f)=>d.add(f.key),z());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=gt(),p=z();return a.Zi.getEntries(d,u).next(v=>{f=v,f.forEach((b,C)=>{C.isValidDocument()||(p=p.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{l=v;const b=[];for(const C of o){const P=Px(C,l.get(C.key).overlayedDocument);P!=null&&b.push(new En(C.key,P,Gv(P.value.mapValue),pe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(d,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:iw(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new se(j)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,t),await _n(r,i.changes),await Ki(r.remoteStore)}catch(i){const s=Hi(i,"Failed to persist write");t.reject(s)}}async function cI(n,e){const t=R(n);try{const r=await SN(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?F(o.fc):i.removedDocuments.size>0&&(F(o.fc),o.fc=!1))}),await _n(t,r,e)}catch(r){await Jn(r)}}function um(n,e,t){const r=R(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=R(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&Cd(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sD(n,e,t){const r=R(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new se(A.comparator);o=o.insert(s,ce.newNoDocument(s,L.min()));const a=z().add(s),c=new Ro(L.min(),new Map,new se(j),o,a);await cI(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),Nd(r)}else await Ri(r.localStore,e,!1).then(()=>Ni(r,e,t)).catch(Jn)}async function oD(n,e){const t=R(n),r=e.batch.batchId;try{const i=await TN(t.localStore,e);xd(t,r,null),Rd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await _n(t,i)}catch(i){await Jn(i)}}async function aD(n,e,t){const r=R(n);try{const i=await function(s,o){const a=R(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(F(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);xd(r,e,t),Rd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await _n(r,i)}catch(i){await Jn(i)}}async function cD(n,e){const t=R(n);tr(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=R(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ec.get(r)||[];i.push(e),t.Ec.set(r,i)}catch(r){const i=Hi(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Rd(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function xd(n,e,t){const r=R(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Ni(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||uI(n,r)})}function uI(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(ro(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Nd(n))}function Pl(n,e,t){for(const r of t)r instanceof sI?(n.Ic.addReference(r.key,e),uD(n,r)):r instanceof oI?(_("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||uI(n,r.key)):O()}function uD(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(_("SyncEngine","New document in limbo: "+t),n.mc.add(r),Nd(n))}function Nd(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new A(Z.fromString(e)),r=n.Ac.next();n.yc.set(r,new eD(t)),n.gc=n.gc.insert(t,r),Dc(n.remoteStore,new dn(wt(qi(t.path)),r,"TargetPurposeLimboResolution",pt.ct))}}async function _n(n,e,t){const r=R(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=yd.Li(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const u=R(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>m.forEach(c,h=>m.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>m.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Zn(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,p)}}}(r.localStore,s))}async function lD(n,e){const t=R(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await zw(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new E(g.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _n(t,r.er)}}function hD(n,e){const t=R(n),r=t.yc.get(e);if(r&&r.fc)return z().add(r.key);{let i=z();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function dD(n,e){const t=R(n),r=await Ba(t.localStore,e.query,!0),i=e.view.hc(r);return t.isPrimaryClient&&Pl(t,e.targetId,i.cc),i}async function fD(n,e){const t=R(n);return Hw(t.localStore,e).then(r=>_n(t,r))}async function pD(n,e,t,r){const i=R(n),s=await function(o,a){const c=R(o),u=R(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Sn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Ki(i.remoteStore):t==="acknowledged"||t==="rejected"?(xd(i,e,r||null),Rd(i,e),function(o,a){R(R(o).mutationQueue).Cn(a)}(i.localStore,e)):O(),await _n(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function mD(n,e){const t=R(n);if(Dd(t),Pd(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await lm(t,r.toArray());t.vc=!0,await Dl(t.remoteStore,!0);for(const s of i)Dc(t.remoteStore,s)}else if(e===!1&&t.vc!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ni(t,o),Ri(t.localStore,o,!0))),ro(t.remoteStore,o)}),await i,await lm(t,r),function(s){const o=R(s);o.yc.forEach((a,c)=>{ro(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new se(A.comparator)}(t),t.vc=!1,await Dl(t.remoteStore,!1)}}async function lm(n,e,t){const r=R(n),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Ai(r.localStore,wt(c[0]));for(const u of c){const l=r.wc.get(u),h=await dD(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await Ww(r.localStore,o);a=await Ai(r.localStore,u),await Ad(r,lI(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function lI(n){return Zv(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function gD(n){const e=R(n);return R(R(e.localStore).persistence).$i()}async function yD(n,e,t,r){const i=R(n);if(i.vc)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Hw(i.localStore,tw(s[0])),a=Ro.createSynthesizedRemoteEventForCurrentChange(e,t==="current",De.EMPTY_BYTE_STRING);await _n(i,o,a);break}case"rejected":await Ri(i.localStore,e,!0),Ni(i,e,r);break;default:O()}}async function vD(n,e,t){const r=Dd(n);if(r.vc){for(const i of e){if(r._c.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await Ww(r.localStore,i),o=await Ai(r.localStore,s);await Ad(r,lI(s),o.targetId,!1,o.resumeToken),Dc(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await Ri(r.localStore,i,!1).then(()=>{ro(r.remoteStore,i),Ni(r,i)}).catch(Jn)}}function Dd(n){const e=R(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=cI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sD.bind(null,e),e.dc.nu=QN.bind(null,e.eventManager),e.dc.Pc=YN.bind(null,e.eventManager),e}function Pd(n){const e=R(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aD.bind(null,e),e}function wD(n,e,t){const r=R(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=R(h),p=Se(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.qs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(iI(a));const c=new JN(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const h=await c.zu(u);h&&o._updateProgress(h),u=await s.bc()}const l=await c.complete();return await _n(i,l.Ju,void 0),await function(h,d){const f=R(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.qs.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Hu)}catch(a){return Ut("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Ol{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=No(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return jw(this.persistence,new qw,e.initialUser,this.serializer)}createPersistence(e){return new Bw(Nc.zs,this.serializer)}createSharedClientState(e){return new Yw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hI extends Ol{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Pd(this.Vc.syncEngine),await Ki(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return jw(this.persistence,new qw,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new cN(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new GR(t,this.persistence);return new zR(e.asyncQueue,r)}createPersistence(e){const t=gd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new md(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Xw(),da(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Yw}}class ID extends hI{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof Mu&&(this.sharedClientState.syncEngine={jr:pD.bind(null,t),zr:yD.bind(null,t),Wr:vD.bind(null,t),$i:gD.bind(null,t),Qr:fD.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await mD(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Xw();if(!Mu.D(t))throw new E(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=gd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Mu(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Od{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>um(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lD.bind(null,this.syncEngine),await Dl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new HN}createDatastore(e){const t=No(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new DN(i));var i;return function(s,o,a,c){return new MN(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>um(this.syncEngine,a,0),o=sm.D()?new sm:new RN,new FN(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new tD(r,i,s,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=R(e);_("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Gi(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ee("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new Le,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const i=await this.$c(r);return new XN(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=R(r),o=to(s.serializer)+"/documents",a={documents:i.map(h=>eo(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=qx(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());F(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=A.fromPath(r);this.mutations.push(new id(i,this.precondition(i)))}),await async function(t,r){const i=R(t),s=to(i.serializer)+"/documents",o={writes:r.map(a=>no(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw O();t=L.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new E(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(L.min())?pe.exists(!1):pe.updateTime(t):pe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(L.min()))throw new E(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return pe.updateTime(t)}return pe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new wd(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new ED(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!To(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!mw(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Me.UNAUTHENTICATED,this.clientId=xv.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hi(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fa(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await zw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ml(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Md(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>om(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>om(e.remoteStore,s)),n._onlineComponents=e}function dI(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Md(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await fa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!dI(t))throw t;Ut("Error using user provided cache. Falling back to memory cache: "+t),await fa(n,new Ol)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await fa(n,new Ol);return n._offlineComponents}async function Oc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Ml(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Ml(n,new Od))),n._onlineComponents}function fI(n){return Md(n).then(e=>e.persistence)}function Ld(n){return Md(n).then(e=>e.localStore)}function pI(n){return Oc(n).then(e=>e.remoteStore)}function Fd(n){return Oc(n).then(e=>e.syncEngine)}function SD(n){return Oc(n).then(e=>e.datastore)}async function Di(n){const e=await Oc(n),t=e.eventManager;return t.onListen=nD.bind(null,e.syncEngine),t.onUnlisten=rD.bind(null,e.syncEngine),t}function CD(n){return n.asyncQueue.enqueue(async()=>{const e=await fI(n),t=await pI(n);return e.setNetworkEnabled(!0),function(r){const i=R(r);return i.vu.delete(0),Do(i)}(t)})}function kD(n){return n.asyncQueue.enqueue(async()=>{const e=await fI(n),t=await pI(n);return e.setNetworkEnabled(!1),async function(r){const i=R(r);i.vu.add(0),await Gi(i),i.bu.set("Offline")}(t)})}function AD(n,e){const t=new Le;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=R(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new E(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Hi(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Ld(n),e,t)),t.promise}function mI(n,e,t={}){const r=new Le;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Pc({next:h=>{s.enqueueAndForget(()=>Sd(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new E(g.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new E(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new kd(qi(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Td(i,l)}(await Di(n),n.asyncQueue,e,t,r)),r.promise}function RD(n,e){const t=new Le;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Ba(r,i,!0),a=new aI(i,o.ir),c=a.sc(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Hi(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Ld(n),e,t)),t.promise}function gI(n,e,t={}){const r=new Le;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Pc({next:h=>{s.enqueueAndForget(()=>Sd(i,l)),h.fromCache&&a.source==="server"?c.reject(new E(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new kd(o,u,{includeMetadataChanges:!0,Ku:!0});return Td(i,l)}(await Di(n),n.asyncQueue,e,t,r)),r.promise}function xD(n,e){const t=new Pc(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).ku.add(i),i.next()}(await Di(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).ku.delete(i)}(await Di(n),t))}}function ND(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?yw().encode(s):s,function(c,u){return new bD(c,u)}(function(c,u){if(c instanceof Uint8Array)return hm(c,u);if(c instanceof ArrayBuffer)return hm(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,No(e));n.asyncQueue.enqueueAndForget(async()=>{wD(await Fd(n),i,r)})}function DD(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=R(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Ld(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n,e,t){if(!t)throw new E(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vI(n,e,t,r){if(e===!0&&r===!0)throw new E(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fm(n){if(!A.isDocumentKey(n))throw new E(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pm(n){if(A.isDocumentKey(n))throw new E(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O()}function ee(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new E(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mc(n);throw new E(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function wI(n,e){if(e<=0)throw new E(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new E(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new E(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new E(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new E(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Po{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mm(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new DR;switch(t.type){case"firstParty":return new LR(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new E(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=dm.get(e);t&&(_("ComponentProvider","Removing Datastore"),dm.delete(e),t.terminate())}(this),Promise.resolve()}}function II(n,e,t,r={}){var i;const s=(n=ee(n,Po))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ut("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Me.MOCK_USER;else{o=wE(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new E(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Me(c)}n._authCredentials=new PR(new Rv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}}class Xe{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xe(this.firestore,e,this._query)}}class rn extends Xe{constructor(e,t,r){super(e,t,qi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new A(e))}withConverter(e){return new rn(this.firestore,e,this._path)}}function bI(n,e,...t){if(n=V(n),$d("collection","path",e),n instanceof Po){const r=Z.fromString(e,...t);return pm(r),new rn(n,null,r)}{if(!(n instanceof le||n instanceof rn))throw new E(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return pm(r),new rn(n.firestore,null,r)}}function PD(n,e){if(n=ee(n,Po),$d("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(g.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Xe(n,null,function(t){return new bn(Z.emptyPath(),t)}(e))}function Ga(n,e,...t){if(n=V(n),arguments.length===1&&(e=xv.A()),$d("doc","path",e),n instanceof Po){const r=Z.fromString(e,...t);return fm(r),new le(n,null,new A(r))}{if(!(n instanceof le||n instanceof rn))throw new E(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return fm(r),new le(n.firestore,n instanceof rn?n.converter:null,new A(r))}}function EI(n,e){return n=V(n),e=V(e),(n instanceof le||n instanceof rn)&&(e instanceof le||e instanceof rn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function _I(n,e){return n=V(n),e=V(e),n instanceof Xe&&e instanceof Xe&&n.firestore===e.firestore&&Co(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new wd(this,"async_queue_retry"),this.Xc=()=>{const t=da();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=da();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=da();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new Le;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Zn(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ee("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=_d.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&O()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Ll(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class MD{constructor(){this._progressObserver={},this._taskCompletionResolver=new Le,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=-1;class be extends Po{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new OD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TI(this),this._firestoreClient.terminate()}}function FD(n,e){const t=typeof n=="object"?n:th(),r=typeof n=="string"?n:e||"(default)",i=Br(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gE("firestore");s&&II(i,...s)}return i}function Be(n){return n._firestoreClient||TI(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function TI(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new dx(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yI(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new TD(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function $D(n,e){CI(n=ee(n,be));const t=Be(n);if(t._uninitializedComponentsProvider)throw new E(g.FAILED_PRECONDITION,"SDK cache is already specified.");Ut("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Od;return SI(t,i,new hI(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function VD(n){CI(n=ee(n,be));const e=Be(n);if(e._uninitializedComponentsProvider)throw new E(g.FAILED_PRECONDITION,"SDK cache is already specified.");Ut("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Od;return SI(e,r,new ID(r,t.cacheSizeBytes))}function SI(n,e,t){const r=new Le;return n.asyncQueue.enqueue(async()=>{try{await fa(n,t),await Ml(n,e),r.resolve()}catch(i){const s=i;if(!dI(s))throw s;Ut("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function UD(n){if(n._initialized&&!n._terminated)throw new E(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Le;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ft.D())return Promise.resolve();const r=t+"main";await Ft.delete(r)}(gd(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function BD(n){return function(e){const t=new Le;return e.asyncQueue.enqueueAndForget(async()=>cD(await Fd(e),t)),t.promise}(Be(n=ee(n,be)))}function qD(n){return CD(Be(n=ee(n,be)))}function jD(n){return kD(Be(n=ee(n,be)))}function zD(n,e){const t=Be(n=ee(n,be)),r=new MD;return ND(t,n._databaseId,e,r),r}function GD(n,e){return DD(Be(n=ee(n,be)),e).then(t=>t?new Xe(n,null,t.query):null)}function CI(n){if(n._initialized||n._terminated)throw new E(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this._byteString=e}static fromBase64String(e){try{return new an(De.fromBase64String(e))}catch(t){throw new E(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new an(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new E(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=/^__.*__$/;class WD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,t,this.fieldTransforms):new ji(e,this.data,t,this.fieldTransforms)}}class kI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new En(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function AI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Fc{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Fc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ka(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(AI(this.ca)&&KD.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class HD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||No(e)}ya(e,t,r,i=!1){return new Fc({ca:e,methodName:t,ga:r,path:_e.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kr(n){const e=n._freezeSettings(),t=No(n._databaseId);return new HD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $c(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);qd("Data must be an object, but it was:",o,r);const a=NI(r,o);let c,u;if(s.merge)c=new mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Fl(e,h,t);if(!o.contains(d))throw new E(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);PI(l,d)||l.push(d)}c=new mt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new WD(new Ke(a),c,u)}class Oo extends Gr{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oo}}function RI(n,e,t){return new Fc({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vd extends Gr{_toFieldTransform(e){return new Ao(e.path,new Si)}isEqual(e){return e instanceof Vd}}class QD extends Gr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=RI(this,e,!0),r=this.pa.map(s=>Wr(s,t)),i=new Mr(r);return new Ao(e.path,i)}isEqual(e){return this===e}}class YD extends Gr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=RI(this,e,!0),r=this.pa.map(s=>Wr(s,t)),i=new Lr(r);return new Ao(e.path,i)}isEqual(e){return this===e}}class XD extends Gr{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Ci(e.serializer,cw(e.serializer,this.Ia));return new Ao(e.path,t)}isEqual(e){return this===e}}function Ud(n,e,t,r){const i=n.ya(1,e,t);qd("Data must be an object, but it was:",i,r);const s=[],o=Ke.empty();zr(r,(c,u)=>{const l=jd(e,c,t);u=V(u);const h=i.da(l);if(u instanceof Oo)s.push(l);else{const d=Wr(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new mt(s);return new kI(o,a,i.fieldTransforms)}function Bd(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[Fl(e,r,t)],c=[i];if(s.length%2!=0)throw new E(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Fl(e,s[d])),c.push(s[d+1]);const u=[],l=Ke.empty();for(let d=a.length-1;d>=0;--d)if(!PI(u,a[d])){const f=a[d];let p=c[d];p=V(p);const v=o.da(f);if(p instanceof Oo)u.push(f);else{const b=Wr(p,v);b!=null&&(u.push(f),l.set(f,b))}}const h=new mt(u);return new kI(l,h,o.fieldTransforms)}function xI(n,e,t,r=!1){return Wr(t,n.ya(r?4:3,e))}function Wr(n,e){if(DI(n=V(n)))return qd("Unsupported field value:",e,n),NI(n,e);if(n instanceof Gr)return function(t,r){if(!AI(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Wr(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=V(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return cw(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=me.fromDate(t);return{timestampValue:ki(r.serializer,i)}}if(t instanceof me){const i=new me(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ki(r.serializer,i)}}if(t instanceof Lc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof an)return{bytesValue:Iw(r.serializer,t._byteString)};if(t instanceof le){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ld(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${Mc(t)}`)}(n,e)}function NI(n,e){const t={};return qv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(n,(r,i)=>{const s=Wr(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function DI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof Lc||n instanceof an||n instanceof le||n instanceof Gr)}function qd(n,e,t){if(!DI(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Mc(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function Fl(n,e,t){if((e=V(e))instanceof Kn)return e._internalPath;if(typeof e=="string")return jd(n,e);throw Ka("Field path arguments must be of type string or ",n,!1,void 0,t)}const JD=new RegExp("[~\\*/\\[\\]]");function jd(n,e,t){if(e.search(JD)>=0)throw Ka(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kn(...e.split("."))._internalPath}catch{throw Ka(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ka(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new E(g.INVALID_ARGUMENT,a+n+c)}function PI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ZD extends io{data(){return super.data()}}function Vc(n,e){return typeof e=="string"?jd(n,e):e instanceof Kn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new E(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zd{}class Mo extends zd{}function Rn(n,e,...t){let r=[];e instanceof zd&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Gd).length,o=i.filter(a=>a instanceof Uc).length;if(s>1||s>0&&o>0)throw new E(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Uc extends Mo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Uc(e,t,r)}_apply(e){const t=this._parse(e);return LI(e._query,t),new Xe(e.firestore,e.converter,_l(e._query,t))}_parse(e){const t=Kr(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new E(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ym(l,u);const d=[];for(const f of l)d.push(gm(a,i,f));h={arrayValue:{values:d}}}else h=gm(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ym(l,u),h=xI(o,s,l,u==="in"||u==="not-in");return Q.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function e1(n,e,t){const r=e,i=Vc("where",n);return Uc._create(i,r,t)}class Gd extends zd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Gd(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)LI(s,a),s=_l(s,a)}(e._query,t),new Xe(e.firestore,e.converter,_l(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kd extends Mo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Kd(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new E(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new E(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new pi(i,s);return function(a,c){if(td(a)===null){const u=Cc(a);u!==null&&FI(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Xe(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new bn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function t1(n,e="asc"){const t=e,r=Vc("orderBy",n);return Kd._create(r,t)}class Bc extends Mo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Bc(e,t,r)}_apply(e){return new Xe(e.firestore,e.converter,Fa(e._query,this._limit,this._limitType))}}function n1(n){return wI("limit",n),Bc._create("limit",n,"F")}function r1(n){return wI("limitToLast",n),Bc._create("limitToLast",n,"L")}class qc extends Mo{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new qc(e,t,r)}_apply(e){const t=MI(e,this.type,this._docOrFields,this._inclusive);return new Xe(e.firestore,e.converter,function(r,i){return new bn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function i1(...n){return qc._create("startAt",n,!0)}function s1(...n){return qc._create("startAfter",n,!1)}class jc extends Mo{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new jc(e,t,r)}_apply(e){const t=MI(e,this.type,this._docOrFields,this._inclusive);return new Xe(e.firestore,e.converter,function(r,i){return new bn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function o1(...n){return jc._create("endBefore",n,!1)}function a1(...n){return jc._create("endAt",n,!0)}function MI(n,e,t,r){if(t[0]=V(t[0]),t[0]instanceof io)return function(i,s,o,a,c){if(!a)throw new E(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Sr(i))if(l.field.isKeyField())u.push(Pr(s,a.key));else{const h=a.data.field(l.field);if(Sc(h))throw new E(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new E(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new zn(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Kr(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new E(g.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const p=u[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new E(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!nd(s)&&p.indexOf("/")!==-1)throw new E(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const v=s.path.child(Z.fromString(p));if(!A.isDocumentKey(v))throw new E(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const b=new A(v);d.push(Pr(o,b))}else{const v=xI(a,c,p);d.push(v)}}return new zn(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function gm(n,e,t){if(typeof(t=V(t))=="string"){if(t==="")throw new E(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nd(e)&&t.indexOf("/")!==-1)throw new E(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Z.fromString(t));if(!A.isDocumentKey(r))throw new E(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pr(n,new A(r))}if(t instanceof le)return Pr(n,t._key);throw new E(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(t)}.`)}function ym(n,e){if(!Array.isArray(n)||n.length===0)throw new E(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function LI(n,e){if(e.isInequality()){const r=Cc(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new E(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=td(n);s!==null&&FI(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new E(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function FI(n,e,t){if(!t.isEqual(e))throw new E(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Wd{convertValue(e,t="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return zr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Lc(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Zh(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Xs(e));default:return null}}convertTimestamp(e){const t=Un(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);F(xw(r));const i=new qn(r.get(1),r.get(3)),s=new A(r.popFirst(5));return i.isEqual(t)||Ee(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class c1 extends Wd{constructor(e){super(),this.firestore=e}convertBytes(e){return new an(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yn extends io{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Vc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ps extends yn{data(e={}){return super.data(e)}}class Wn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new vr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ps(this._firestore,this._userDataWriter,r.key,r,new vr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ps(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ps(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:u1(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function u1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}function $I(n,e){return n instanceof yn&&e instanceof yn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Wn&&e instanceof Wn&&n._firestore===e._firestore&&_I(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(n){n=ee(n,le);const e=ee(n.firestore,be);return mI(Be(e),n._key).then(t=>Hd(e,n,t))}class Hr extends Wd{constructor(e){super(),this.firestore=e}convertBytes(e){return new an(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function h1(n){n=ee(n,le);const e=ee(n.firestore,be),t=Be(e),r=new Hr(e);return AD(t,n._key).then(i=>new yn(e,r,n._key,i,new vr(i!==null&&i.hasLocalMutations,!0),n.converter))}function d1(n){n=ee(n,le);const e=ee(n.firestore,be);return mI(Be(e),n._key,{source:"server"}).then(t=>Hd(e,n,t))}function f1(n){n=ee(n,Xe);const e=ee(n.firestore,be),t=Be(e),r=new Hr(e);return OI(n._query),gI(t,n._query).then(i=>new Wn(e,r,n,i))}function p1(n){n=ee(n,Xe);const e=ee(n.firestore,be),t=Be(e),r=new Hr(e);return RD(t,n._query).then(i=>new Wn(e,r,n,i))}function m1(n){n=ee(n,Xe);const e=ee(n.firestore,be),t=Be(e),r=new Hr(e);return gI(t,n._query,{source:"server"}).then(i=>new Wn(e,r,n,i))}function vm(n,e,t){n=ee(n,le);const r=ee(n.firestore,be),i=zc(n.converter,e,t);return Lo(r,[$c(Kr(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,pe.none())])}function wm(n,e,t,...r){n=ee(n,le);const i=ee(n.firestore,be),s=Kr(i);let o;return o=typeof(e=V(e))=="string"||e instanceof Kn?Bd(s,"updateDoc",n._key,e,t,r):Ud(s,"updateDoc",n._key,e),Lo(i,[o.toMutation(n._key,pe.exists(!0))])}function g1(n){return Lo(ee(n.firestore,be),[new zi(n._key,pe.none())])}function y1(n,e){const t=ee(n.firestore,be),r=Ga(n),i=zc(n.converter,e);return Lo(t,[$c(Kr(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,pe.exists(!1))]).then(()=>r)}function VI(n,...e){var t,r,i;n=V(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ll(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ll(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof le)u=ee(n.firestore,be),l=qi(n._key.path),c={next:h=>{e[o]&&e[o](Hd(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ee(n,Xe);u=ee(h.firestore,be),l=h._query;const d=new Hr(u);c={next:f=>{e[o]&&e[o](new Wn(u,d,h,f))},error:e[o+1],complete:e[o+2]},OI(n._query)}return function(h,d,f,p){const v=new Pc(p),b=new kd(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>Td(await Di(h),b)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>Sd(await Di(h),b))}}(Be(u),l,a,c)}function v1(n,e){return xD(Be(n=ee(n,be)),Ll(e)?e:{next:e})}function Lo(n,e){return function(t,r){const i=new Le;return t.asyncQueue.enqueueAndForget(async()=>iD(await Fd(t),r,i)),i.promise}(Be(n),e)}function Hd(n,e,t){const r=t.docs.get(e._key),i=new Hr(n);return new yn(n,i,e._key,r,new vr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Kr(e)}set(e,t,r){this._verifyNotCommitted();const i=Nn(e,this._firestore),s=zc(i.converter,t,r),o=$c(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,pe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Nn(e,this._firestore);let o;return o=typeof(t=V(t))=="string"||t instanceof Kn?Bd(this._dataReader,"WriteBatch.update",s._key,t,r,i):Ud(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Nn(e,this._firestore);return this._mutations=this._mutations.concat(new zi(t._key,pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Nn(n,e){if((n=V(n)).firestore!==e)throw new E(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1 extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Kr(e)}get(e){const t=Nn(e,this._firestore),r=new c1(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return O();const s=i[0];if(s.isFoundDocument())return new io(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new io(this._firestore,r,t._key,null,t.converter);throw O()})}set(e,t,r){const i=Nn(e,this._firestore),s=zc(i.converter,t,r),o=$c(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Nn(e,this._firestore);let o;return o=typeof(t=V(t))=="string"||t instanceof Kn?Bd(this._dataReader,"Transaction.update",s._key,t,r,i):Ud(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Nn(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Nn(e,this._firestore),r=new Hr(this._firestore);return super.get(e).then(i=>new yn(this._firestore,r,t._key,i._document,new vr(!1,!1),t.converter))}}function E1(n,e,t){n=ee(n,be);const r=Object.assign(Object.assign({},w1),t);return function(i){if(i.maxAttempts<1)throw new E(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Le;return i.asyncQueue.enqueueAndForget(async()=>{const c=await SD(i);new _D(i.asyncQueue,c,o,s,a).run()}),a.promise}(Be(n),i=>e(new b1(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(){return new Oo("deleteField")}function T1(){return new Vd("serverTimestamp")}function S1(...n){return new QD("arrayUnion",n)}function C1(...n){return new YD("arrayRemove",n)}function k1(n){return new XD("increment",n)}(function(n,e=!0){(function(t){Bi=t})(Hn),Dt(new vt("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new be(new OR(t.getProvider("auth-internal")),new $R(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),at(pp,"3.12.1",n),at(pp,"3.12.1","esm2017")})();const A1="@firebase/firestore-compat",R1="0.3.10";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new E("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){if(typeof Uint8Array>"u")throw new E("unimplemented","Uint8Arrays are not available in this environment.")}function bm(){if(!lx())throw new E("unimplemented","Blobs are unavailable in Firestore in this environment.")}class so{constructor(e){this._delegate=e}static fromBase64String(e){return bm(),new so(an.fromBase64String(e))}static fromUint8Array(e){return Im(),new so(an.fromUint8Array(e))}toBase64(){return bm(),this._delegate.toBase64()}toUint8Array(){return Im(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(n){return x1(n,["next","error","complete"])}function x1(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{enableIndexedDbPersistence(e,t){return $D(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return VD(e._delegate)}clearIndexedDbPersistence(e){return UD(e._delegate)}}class UI{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof qn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ut("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){II(this._delegate,e,t,r)}enableNetwork(){return qD(this._delegate)}disableNetwork(){return jD(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,vI("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return BD(this._delegate)}onSnapshotsInSync(e){return v1(this._delegate,e)}get app(){if(!this._appCompat)throw new E("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Pi(this,bI(this._delegate,e))}catch(t){throw it(t,"collection()","Firestore.collection()")}}doc(e){try{return new xt(this,Ga(this._delegate,e))}catch(t){throw it(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new rt(this,PD(this._delegate,e))}catch(t){throw it(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return E1(this._delegate,t=>e(new BI(this,t)))}batch(){return Be(this._delegate),new qI(new I1(this._delegate,e=>Lo(this._delegate,e)))}loadBundle(e){return zD(this._delegate,e)}namedQuery(e){return GD(this._delegate,e).then(t=>t?new rt(this,t):null)}}class Gc extends Wd{constructor(e){super(),this.firestore=e}convertBytes(e){return new so(new an(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return xt.forKey(t,this.firestore,null)}}function D1(n){xR(n)}class BI{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Gc(e)}get(e){const t=wr(e);return this._delegate.get(t).then(r=>new oo(this._firestore,new yn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=wr(e);return r?(Qd("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=wr(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=wr(e);return this._delegate.delete(t),this}}class qI{constructor(e){this._delegate=e}set(e,t,r){const i=wr(e);return r?(Qd("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=wr(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=wr(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ur{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ps(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ao(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Ur.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Ur(e,new Gc(e),t),i.set(t,s)),s}}Ur.INSTANCES=new WeakMap;class xt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Gc(e)}static forPath(e,t,r){if(e.length%2!==0)throw new E("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new xt(t,new le(t._delegate,r,new A(e)))}static forKey(e,t,r){return new xt(t,new le(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Pi(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Pi(this.firestore,bI(this._delegate,e))}catch(t){throw it(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=V(e),e instanceof le?EI(this._delegate,e):!1}set(e,t){t=Qd("DocumentReference.set",t);try{return t?vm(this._delegate,e,t):vm(this._delegate,e)}catch(r){throw it(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?wm(this._delegate,e):wm(this._delegate,e,t,...r)}catch(i){throw it(i,"updateDoc()","DocumentReference.update()")}}delete(){return g1(this._delegate)}onSnapshot(...e){const t=jI(e),r=zI(e,i=>new oo(this.firestore,new yn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return VI(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=h1(this._delegate):(e==null?void 0:e.source)==="server"?t=d1(this._delegate):t=l1(this._delegate),t.then(r=>new oo(this.firestore,new yn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new xt(this.firestore,e?this._delegate.withConverter(Ur.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function it(n,e,t){return n.message=n.message.replace(e,t),n}function jI(n){for(const e of n)if(typeof e=="object"&&!$l(e))return e;return{}}function zI(n,e){var t,r;let i;return $l(n[0])?i=n[0]:$l(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class oo{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new xt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return $I(this._delegate,e._delegate)}}class ao extends oo{data(e){const t=this._delegate.data(e);return NR(t!==void 0),t}}class rt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Gc(e)}where(e,t,r){try{return new rt(this.firestore,Rn(this._delegate,e1(e,t,r)))}catch(i){throw it(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new rt(this.firestore,Rn(this._delegate,t1(e,t)))}catch(r){throw it(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new rt(this.firestore,Rn(this._delegate,n1(e)))}catch(t){throw it(t,"limit()","Query.limit()")}}limitToLast(e){try{return new rt(this.firestore,Rn(this._delegate,r1(e)))}catch(t){throw it(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new rt(this.firestore,Rn(this._delegate,i1(...e)))}catch(t){throw it(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new rt(this.firestore,Rn(this._delegate,s1(...e)))}catch(t){throw it(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new rt(this.firestore,Rn(this._delegate,o1(...e)))}catch(t){throw it(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new rt(this.firestore,Rn(this._delegate,a1(...e)))}catch(t){throw it(t,"endAt()","Query.endAt()")}}isEqual(e){return _I(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=p1(this._delegate):(e==null?void 0:e.source)==="server"?t=m1(this._delegate):t=f1(this._delegate),t.then(r=>new Vl(this.firestore,new Wn(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=jI(e),r=zI(e,i=>new Vl(this.firestore,new Wn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return VI(this._delegate,t,r)}withConverter(e){return new rt(this.firestore,e?this._delegate.withConverter(Ur.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class P1{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ao(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Vl{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new rt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ao(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new P1(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ao(this._firestore,r))})}isEqual(e){return $I(this._delegate,e._delegate)}}class Pi extends rt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new xt(this.firestore,e):null}doc(e){try{return e===void 0?new xt(this.firestore,Ga(this._delegate)):new xt(this.firestore,Ga(this._delegate,e))}catch(t){throw it(t,"doc()","CollectionReference.doc()")}}add(e){return y1(this._delegate,e).then(t=>new xt(this.firestore,t))}isEqual(e){return EI(this._delegate,e._delegate)}withConverter(e){return new Pi(this.firestore,e?this._delegate.withConverter(Ur.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function wr(n){return ee(n,le)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(...e){this._delegate=new Kn(...e)}static documentId(){return new Yd(_e.keyField().canonicalString())}isEqual(e){return e=V(e),e instanceof Kn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._delegate=e}static serverTimestamp(){const e=T1();return e._methodName="FieldValue.serverTimestamp",new dr(e)}static delete(){const e=_1();return e._methodName="FieldValue.delete",new dr(e)}static arrayUnion(...e){const t=S1(...e);return t._methodName="FieldValue.arrayUnion",new dr(t)}static arrayRemove(...e){const t=C1(...e);return t._methodName="FieldValue.arrayRemove",new dr(t)}static increment(e){const t=k1(e);return t._methodName="FieldValue.increment",new dr(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1={Firestore:UI,GeoPoint:Lc,Timestamp:me,Blob:so,Transaction:BI,WriteBatch:qI,DocumentReference:xt,DocumentSnapshot:oo,Query:rt,QueryDocumentSnapshot:ao,QuerySnapshot:Vl,CollectionReference:Pi,FieldPath:Yd,FieldValue:dr,setLogLevel:D1,CACHE_SIZE_UNLIMITED:LD};function M1(n,e){n.INTERNAL.registerComponent(new vt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},O1)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(n){M1(n,(e,t)=>new UI(e,t,new N1)),n.registerVersion(A1,R1)}L1(un);const F1={apiKey:"AIzaSyDmeCKj1u6joV57Opj22FUUvQCbgaW7qtI",authDomain:"squarelion-43d29.firebaseapp.com",projectId:"squarelion-43d29",storageBucket:"squarelion-43d29.appspot.com",messagingSenderId:"171439211836",appId:"1:171439211836:web:5aba3918d87876d0d84a39",measurementId:"G-9S8TZFG63M"},GI=un.initializeApp(F1);y0(GI);const Ul=un.auth(),KI=un.firestore(),ZO=FD(GI);un.firestore();new Lt;const eM=new un.auth.GoogleAuthProvider;function $1({user:n,setUser:e,setUuid:t,setLevel:r}){function i(){const[o,a]=y.useState(null);return y.useEffect(()=>{Ul.onAuthStateChanged(c=>{c&&(a(c.uid),t(c.uid))})},[]),o}i();function s(){return y.useEffect(()=>{Ul.onAuthStateChanged(o=>{o?KI.collection("admin").doc(o.uid).get().then(a=>{e(a.data().Name),localStorage.setItem("user",a.data().Name),r(a.data().level)}):e(null)})},[n]),n}s()}function Bl(n,e){return Bl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Bl(n,e)}function WI(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Bl(n,e)}const Em={disabled:!1},Wa=Qt.createContext(null);var V1=function(e){return e.scrollTop},bs="unmounted",or="exited",ar="entering",si="entered",ql="exiting",Tn=function(n){WI(e,n);function e(r,i){var s;s=n.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,c;return s.appearStatus=null,r.in?a?(c=or,s.appearStatus=ar):c=si:r.unmountOnExit||r.mountOnEnter?c=bs:c=or,s.state={status:c},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===bs?{status:or}:null};var t=e.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==ar&&o!==si&&(s=ar):(o===ar||o===si)&&(s=ql)}this.updateStatus(!1,s)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},t.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===ar){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Bo.findDOMNode(this);o&&V1(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===or&&this.setState({status:bs})},t.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,c=this.props.nodeRef?[a]:[Bo.findDOMNode(this),a],u=c[0],l=c[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||Em.disabled){this.safeSetState({status:si},function(){s.props.onEntered(u)});return}this.props.onEnter(u,l),this.safeSetState({status:ar},function(){s.props.onEntering(u,l),s.onTransitionEnd(d,function(){s.safeSetState({status:si},function(){s.props.onEntered(u,l)})})})},t.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Bo.findDOMNode(this);if(!s||Em.disabled){this.safeSetState({status:or},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:ql},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:or},function(){i.props.onExited(a)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},t.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},t.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Bo.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=c[0],l=c[1];this.props.addEndListener(u,l)}i!=null&&setTimeout(this.nextCallback,i)},t.render=function(){var i=this.state.status;if(i===bs)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=Te(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Qt.createElement(Wa.Provider,{value:null},typeof o=="function"?o(i,a):Qt.cloneElement(Qt.Children.only(o),a))},e}(Qt.Component);Tn.contextType=Wa;Tn.propTypes={};function ti(){}Tn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ti,onEntering:ti,onEntered:ti,onExit:ti,onExiting:ti,onExited:ti};Tn.UNMOUNTED=bs;Tn.EXITED=or;Tn.ENTERING=ar;Tn.ENTERED=si;Tn.EXITING=ql;const HI=Tn;function U1(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Xd(n,e){var t=function(s){return e&&y.isValidElement(s)?e(s):s},r=Object.create(null);return n&&y.Children.map(n,function(i){return i}).forEach(function(i){r[i.key]=t(i)}),r}function B1(n,e){n=n||{},e=e||{};function t(l){return l in e?e[l]:n[l]}var r=Object.create(null),i=[];for(var s in n)s in e?i.length&&(r[s]=i,i=[]):i.push(s);var o,a={};for(var c in e){if(r[c])for(o=0;o<r[c].length;o++){var u=r[c][o];a[r[c][o]]=t(u)}a[c]=t(c)}for(o=0;o<i.length;o++)a[i[o]]=t(i[o]);return a}function Ir(n,e,t){return t[e]!=null?t[e]:n.props[e]}function q1(n,e){return Xd(n.children,function(t){return y.cloneElement(t,{onExited:e.bind(null,t),in:!0,appear:Ir(t,"appear",n),enter:Ir(t,"enter",n),exit:Ir(t,"exit",n)})})}function j1(n,e,t){var r=Xd(n.children),i=B1(e,r);return Object.keys(i).forEach(function(s){var o=i[s];if(y.isValidElement(o)){var a=s in e,c=s in r,u=e[s],l=y.isValidElement(u)&&!u.props.in;c&&(!a||l)?i[s]=y.cloneElement(o,{onExited:t.bind(null,o),in:!0,exit:Ir(o,"exit",n),enter:Ir(o,"enter",n)}):!c&&a&&!l?i[s]=y.cloneElement(o,{in:!1}):c&&a&&y.isValidElement(u)&&(i[s]=y.cloneElement(o,{onExited:t.bind(null,o),in:u.props.in,exit:Ir(o,"exit",n),enter:Ir(o,"enter",n)}))}}),i}var z1=Object.values||function(n){return Object.keys(n).map(function(e){return n[e]})},G1={component:"div",childFactory:function(e){return e}},Jd=function(n){WI(e,n);function e(r,i){var s;s=n.call(this,r,i)||this;var o=s.handleExited.bind(U1(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,s){var o=s.children,a=s.handleExited,c=s.firstRender;return{children:c?q1(i,a):j1(i,o,a),firstRender:!1}},t.handleExited=function(i,s){var o=Xd(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(s),this.mounted&&this.setState(function(a){var c=D({},a.children);return delete c[i.key],{children:c}}))},t.render=function(){var i=this.props,s=i.component,o=i.childFactory,a=Te(i,["component","childFactory"]),c=this.state.contextValue,u=z1(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?Qt.createElement(Wa.Provider,{value:c},u):Qt.createElement(Wa.Provider,{value:c},Qt.createElement(s,a,u))},e}(Qt.Component);Jd.propTypes={};Jd.defaultProps=G1;const K1=Jd;function W1(n){const{className:e,classes:t,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:o,in:a,onExited:c,timeout:u}=n,[l,h]=y.useState(!1),d=oe(e,t.ripple,t.rippleVisible,r&&t.ripplePulsate),f={width:o,height:o,top:-(o/2)+s,left:-(o/2)+i},p=oe(t.child,l&&t.childLeaving,r&&t.childPulsate);return!a&&!l&&h(!0),y.useEffect(()=>{if(!a&&c!=null){const v=setTimeout(c,u);return()=>{clearTimeout(v)}}},[c,a,u]),M.jsx("span",{className:d,style:f,children:M.jsx("span",{className:p})})}const H1=It("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),At=H1,Q1=["center","classes","className"];let Kc=n=>n,_m,Tm,Sm,Cm;const jl=550,Y1=80,X1=Kl(_m||(_m=Kc`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),J1=Kl(Tm||(Tm=Kc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Z1=Kl(Sm||(Sm=Kc`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),eP=$e("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),tP=$e(W1,{name:"MuiTouchRipple",slot:"Ripple"})(Cm||(Cm=Kc`
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
`),At.rippleVisible,X1,jl,({theme:n})=>n.transitions.easing.easeInOut,At.ripplePulsate,({theme:n})=>n.transitions.duration.shorter,At.child,At.childLeaving,J1,jl,({theme:n})=>n.transitions.easing.easeInOut,At.childPulsate,Z1,({theme:n})=>n.transitions.easing.easeInOut),nP=y.forwardRef(function(e,t){const r=qt({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:o}=r,a=Te(r,Q1),[c,u]=y.useState([]),l=y.useRef(0),h=y.useRef(null);y.useEffect(()=>{h.current&&(h.current(),h.current=null)},[c]);const d=y.useRef(!1),f=y.useRef(null),p=y.useRef(null),v=y.useRef(null);y.useEffect(()=>()=>{clearTimeout(f.current)},[]);const b=y.useCallback(I=>{const{pulsate:S,rippleX:k,rippleY:N,rippleSize:q,cb:H}=I;u(U=>[...U,M.jsx(tP,{classes:{ripple:oe(s.ripple,At.ripple),rippleVisible:oe(s.rippleVisible,At.rippleVisible),ripplePulsate:oe(s.ripplePulsate,At.ripplePulsate),child:oe(s.child,At.child),childLeaving:oe(s.childLeaving,At.childLeaving),childPulsate:oe(s.childPulsate,At.childPulsate)},timeout:jl,pulsate:S,rippleX:k,rippleY:N,rippleSize:q},l.current)]),l.current+=1,h.current=H},[s]),C=y.useCallback((I={},S={},k=()=>{})=>{const{pulsate:N=!1,center:q=i||S.pulsate,fakeElement:H=!1}=S;if((I==null?void 0:I.type)==="mousedown"&&d.current){d.current=!1;return}(I==null?void 0:I.type)==="touchstart"&&(d.current=!0);const U=H?null:v.current,W=U?U.getBoundingClientRect():{width:0,height:0,left:0,top:0};let he,ge,G;if(q||I===void 0||I.clientX===0&&I.clientY===0||!I.clientX&&!I.touches)he=Math.round(W.width/2),ge=Math.round(W.height/2);else{const{clientX:$,clientY:Y}=I.touches&&I.touches.length>0?I.touches[0]:I;he=Math.round($-W.left),ge=Math.round(Y-W.top)}if(q)G=Math.sqrt((2*W.width**2+W.height**2)/3),G%2===0&&(G+=1);else{const $=Math.max(Math.abs((U?U.clientWidth:0)-he),he)*2+2,Y=Math.max(Math.abs((U?U.clientHeight:0)-ge),ge)*2+2;G=Math.sqrt($**2+Y**2)}I!=null&&I.touches?p.current===null&&(p.current=()=>{b({pulsate:N,rippleX:he,rippleY:ge,rippleSize:G,cb:k})},f.current=setTimeout(()=>{p.current&&(p.current(),p.current=null)},Y1)):b({pulsate:N,rippleX:he,rippleY:ge,rippleSize:G,cb:k})},[i,b]),P=y.useCallback(()=>{C({},{pulsate:!0})},[C]),w=y.useCallback((I,S)=>{if(clearTimeout(f.current),(I==null?void 0:I.type)==="touchend"&&p.current){p.current(),p.current=null,f.current=setTimeout(()=>{w(I,S)});return}p.current=null,u(k=>k.length>0?k.slice(1):k),h.current=S},[]);return y.useImperativeHandle(t,()=>({pulsate:P,start:C,stop:w}),[P,C,w]),M.jsx(eP,D({className:oe(At.root,s.root,o),ref:v},a,{children:M.jsx(K1,{component:null,exit:!0,children:c})}))}),rP=nP;function iP(n){return Bt("MuiButtonBase",n)}const sP=It("MuiButtonBase",["root","disabled","focusVisible"]),oP=sP,aP=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],cP=n=>{const{disabled:e,focusVisible:t,focusVisibleClassName:r,classes:i}=n,o=cn({root:["root",e&&"disabled",t&&"focusVisible"]},iP,i);return t&&r&&(o.root+=` ${r}`),o},uP=$e("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${oP.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),lP=y.forwardRef(function(e,t){const r=qt({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:o,className:a,component:c="button",disabled:u=!1,disableRipple:l=!1,disableTouchRipple:h=!1,focusRipple:d=!1,LinkComponent:f="a",onBlur:p,onClick:v,onContextMenu:b,onDragLeave:C,onFocus:P,onFocusVisible:w,onKeyDown:I,onKeyUp:S,onMouseDown:k,onMouseLeave:N,onMouseUp:q,onTouchEnd:H,onTouchMove:U,onTouchStart:W,tabIndex:he=0,TouchRippleProps:ge,touchRippleRef:G,type:$}=r,Y=Te(r,aP),de=y.useRef(null),fe=y.useRef(null),qe=Nt(fe,G),{isFocusVisibleRef:ke,onFocus:ut,onBlur:Mt,ref:jt}=Vm(),[lt,Je]=y.useState(!1);u&&lt&&Je(!1),y.useImperativeHandle(i,()=>({focusVisible:()=>{Je(!0),de.current.focus()}}),[]);const[nt,nr]=y.useState(!1);y.useEffect(()=>{nr(!0)},[]);const Qi=nt&&!l&&!u;y.useEffect(()=>{lt&&d&&!l&&nt&&fe.current.pulsate()},[l,d,lt,nt]);function ht(K,sf,ab=h){return fr(of=>(sf&&sf(of),!ab&&fe.current&&fe.current[K](of),!0))}const Yi=ht("start",k),Xi=ht("stop",b),re=ht("stop",C),Ae=ht("stop",q),je=ht("stop",K=>{lt&&K.preventDefault(),N&&N(K)}),Sn=ht("start",W),zt=ht("stop",H),ye=ht("stop",U),Fo=ht("stop",K=>{Mt(K),ke.current===!1&&Je(!1),p&&p(K)},!1),$o=fr(K=>{de.current||(de.current=K.currentTarget),ut(K),ke.current===!0&&(Je(!0),w&&w(K)),P&&P(K)}),Qr=()=>{const K=de.current;return c&&c!=="button"&&!(K.tagName==="A"&&K.href)},Yr=y.useRef(!1),Vo=fr(K=>{d&&!Yr.current&&lt&&fe.current&&K.key===" "&&(Yr.current=!0,fe.current.stop(K,()=>{fe.current.start(K)})),K.target===K.currentTarget&&Qr()&&K.key===" "&&K.preventDefault(),I&&I(K),K.target===K.currentTarget&&Qr()&&K.key==="Enter"&&!u&&(K.preventDefault(),v&&v(K))}),bt=fr(K=>{d&&K.key===" "&&fe.current&&lt&&!K.defaultPrevented&&(Yr.current=!1,fe.current.stop(K,()=>{fe.current.pulsate(K)})),S&&S(K),v&&K.target===K.currentTarget&&Qr()&&K.key===" "&&!K.defaultPrevented&&v(K)});let Uo=c;Uo==="button"&&(Y.href||Y.to)&&(Uo=f);const Ji={};Uo==="button"?(Ji.type=$===void 0?"button":$,Ji.disabled=u):(!Y.href&&!Y.to&&(Ji.role="button"),u&&(Ji["aria-disabled"]=u));const sb=Nt(t,jt,de),rf=D({},r,{centerRipple:s,component:c,disabled:u,disableRipple:l,disableTouchRipple:h,focusRipple:d,tabIndex:he,focusVisible:lt}),ob=cP(rf);return M.jsxs(uP,D({as:Uo,className:oe(ob.root,a),ownerState:rf,onBlur:Fo,onClick:v,onContextMenu:Xi,onFocus:$o,onKeyDown:Vo,onKeyUp:bt,onMouseDown:Yi,onMouseLeave:je,onMouseUp:Ae,onDragLeave:re,onTouchEnd:zt,onTouchMove:ye,onTouchStart:Sn,ref:sb,tabIndex:u?-1:he,type:$},Ji,Y,{children:[o,Qi?M.jsx(rP,D({ref:qe,center:s},ge)):null]}))}),QI=lP;function hP(n){return Bt("MuiButton",n)}const dP=It("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),ta=dP,fP=y.createContext({}),pP=fP,mP=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],gP=n=>{const{color:e,disableElevation:t,fullWidth:r,size:i,variant:s,classes:o}=n,a={root:["root",s,`${s}${st(e)}`,`size${st(i)}`,`${s}Size${st(i)}`,e==="inherit"&&"colorInherit",t&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${st(i)}`],endIcon:["endIcon",`iconSize${st(i)}`]},c=cn(a,hP,o);return D({},o,c)},YI=n=>D({},n.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},n.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},n.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),yP=$e(QI,{shouldForwardProp:n=>Wl(n)||n==="classes",name:"MuiButton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],e[`${t.variant}${st(t.color)}`],e[`size${st(t.size)}`],e[`${t.variant}Size${st(t.size)}`],t.color==="inherit"&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})(({theme:n,ownerState:e})=>{var t,r;const i=n.palette.mode==="light"?n.palette.grey[300]:n.palette.grey[800],s=n.palette.mode==="light"?n.palette.grey.A100:n.palette.grey[700];return D({},n.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":D({textDecoration:"none",backgroundColor:n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:Yt(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:n.vars?`rgba(${n.vars.palette[e.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Yt(n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(n.vars||n).palette[e.color].main}`,backgroundColor:n.vars?`rgba(${n.vars.palette[e.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Yt(n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:n.vars?n.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2],backgroundColor:(n.vars||n).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(n.vars||n).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[e.color].main}}),"&:active":D({},e.variant==="contained"&&{boxShadow:(n.vars||n).shadows[8]}),[`&.${ta.focusVisible}`]:D({},e.variant==="contained"&&{boxShadow:(n.vars||n).shadows[6]}),[`&.${ta.disabled}`]:D({color:(n.vars||n).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.action.disabledBackground}`},e.variant==="contained"&&{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(n.vars||n).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(n.vars||n).palette[e.color].main,border:n.vars?`1px solid rgba(${n.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${Yt(n.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:n.vars?n.vars.palette.text.primary:(t=(r=n.palette).getContrastText)==null?void 0:t.call(r,n.palette.grey[300]),backgroundColor:n.vars?n.vars.palette.Button.inheritContainedBg:i,boxShadow:(n.vars||n).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(n.vars||n).palette[e.color].contrastText,backgroundColor:(n.vars||n).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:n})=>n.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${ta.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${ta.disabled}`]:{boxShadow:"none"}}),vP=$e("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.startIcon,e[`iconSize${st(t.size)}`]]}})(({ownerState:n})=>D({display:"inherit",marginRight:8,marginLeft:-4},n.size==="small"&&{marginLeft:-2},YI(n))),wP=$e("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.endIcon,e[`iconSize${st(t.size)}`]]}})(({ownerState:n})=>D({display:"inherit",marginRight:-4,marginLeft:8},n.size==="small"&&{marginRight:-2},YI(n))),IP=y.forwardRef(function(e,t){const r=y.useContext(pP),i=lb(r,e),s=qt({props:i,name:"MuiButton"}),{children:o,color:a="primary",component:c="button",className:u,disabled:l=!1,disableElevation:h=!1,disableFocusRipple:d=!1,endIcon:f,focusVisibleClassName:p,fullWidth:v=!1,size:b="medium",startIcon:C,type:P,variant:w="text"}=s,I=Te(s,mP),S=D({},s,{color:a,component:c,disabled:l,disableElevation:h,disableFocusRipple:d,fullWidth:v,size:b,type:P,variant:w}),k=gP(S),N=C&&M.jsx(vP,{className:k.startIcon,ownerState:S,children:C}),q=f&&M.jsx(wP,{className:k.endIcon,ownerState:S,children:f});return M.jsxs(yP,D({ownerState:S,className:oe(r.className,k.root,u),component:c,disabled:l,focusRipple:!d,focusVisibleClassName:oe(k.focusVisible,p),ref:t,type:P},I,{classes:k,children:[N,o,q]}))}),bP=IP;var ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=Symbol.for("react.element"),ef=Symbol.for("react.portal"),Wc=Symbol.for("react.fragment"),Hc=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),Xc=Symbol.for("react.context"),EP=Symbol.for("react.server_context"),Jc=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),tu=Symbol.for("react.memo"),nu=Symbol.for("react.lazy"),_P=Symbol.for("react.offscreen"),XI;XI=Symbol.for("react.module.reference");function Ot(n){if(typeof n=="object"&&n!==null){var e=n.$$typeof;switch(e){case Zd:switch(n=n.type,n){case Wc:case Qc:case Hc:case Zc:case eu:return n;default:switch(n=n&&n.$$typeof,n){case EP:case Xc:case Jc:case nu:case tu:case Yc:return n;default:return e}}case ef:return e}}}ie.ContextConsumer=Xc;ie.ContextProvider=Yc;ie.Element=Zd;ie.ForwardRef=Jc;ie.Fragment=Wc;ie.Lazy=nu;ie.Memo=tu;ie.Portal=ef;ie.Profiler=Qc;ie.StrictMode=Hc;ie.Suspense=Zc;ie.SuspenseList=eu;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(n){return Ot(n)===Xc};ie.isContextProvider=function(n){return Ot(n)===Yc};ie.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Zd};ie.isForwardRef=function(n){return Ot(n)===Jc};ie.isFragment=function(n){return Ot(n)===Wc};ie.isLazy=function(n){return Ot(n)===nu};ie.isMemo=function(n){return Ot(n)===tu};ie.isPortal=function(n){return Ot(n)===ef};ie.isProfiler=function(n){return Ot(n)===Qc};ie.isStrictMode=function(n){return Ot(n)===Hc};ie.isSuspense=function(n){return Ot(n)===Zc};ie.isSuspenseList=function(n){return Ot(n)===eu};ie.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===Wc||n===Qc||n===Hc||n===Zc||n===eu||n===_P||typeof n=="object"&&n!==null&&(n.$$typeof===nu||n.$$typeof===tu||n.$$typeof===Yc||n.$$typeof===Xc||n.$$typeof===Jc||n.$$typeof===XI||n.getModuleId!==void 0)};ie.typeOf=Ot;const TP=y.createContext({}),zl=TP;function SP(n){return Bt("MuiList",n)}It("MuiList",["root","padding","dense","subheader"]);const CP=["children","className","component","dense","disablePadding","subheader"],kP=n=>{const{classes:e,disablePadding:t,dense:r,subheader:i}=n;return cn({root:["root",!t&&"padding",r&&"dense",i&&"subheader"]},SP,e)},AP=$e("ul",{name:"MuiList",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:n})=>D({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})),RP=y.forwardRef(function(e,t){const r=qt({props:e,name:"MuiList"}),{children:i,className:s,component:o="ul",dense:a=!1,disablePadding:c=!1,subheader:u}=r,l=Te(r,CP),h=y.useMemo(()=>({dense:a}),[a]),d=D({},r,{component:o,dense:a,disablePadding:c}),f=kP(d);return M.jsx(zl.Provider,{value:h,children:M.jsxs(AP,D({as:o,className:oe(f.root,s),ref:t,ownerState:d},l,{children:[u,i]}))})}),xP=RP,NP=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Fu(n,e,t){return n===e?n.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t?null:n.firstChild}function km(n,e,t){return n===e?t?n.firstChild:n.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t?null:n.lastChild}function JI(n,e){if(e===void 0)return!0;let t=n.innerText;return t===void 0&&(t=n.textContent),t=t.trim().toLowerCase(),t.length===0?!1:e.repeating?t[0]===e.keys[0]:t.indexOf(e.keys.join(""))===0}function hs(n,e,t,r,i,s){let o=!1,a=i(n,e,e?t:!1);for(;a;){if(a===n.firstChild){if(o)return!1;o=!0}const c=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!JI(a,s)||c)a=i(n,a,t);else return a.focus(),!0}return!1}const DP=y.forwardRef(function(e,t){const{actions:r,autoFocus:i=!1,autoFocusItem:s=!1,children:o,className:a,disabledItemsFocusable:c=!1,disableListWrap:u=!1,onKeyDown:l,variant:h="selectedMenu"}=e,d=Te(e,NP),f=y.useRef(null),p=y.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});yi(()=>{i&&f.current.focus()},[i]),y.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(w,I)=>{const S=!f.current.style.width;if(w.clientHeight<f.current.clientHeight&&S){const k=`${Um(Tt(w))}px`;f.current.style[I.direction==="rtl"?"paddingLeft":"paddingRight"]=k,f.current.style.width=`calc(100% + ${k})`}return f.current}}),[]);const v=w=>{const I=f.current,S=w.key,k=Tt(I).activeElement;if(S==="ArrowDown")w.preventDefault(),hs(I,k,u,c,Fu);else if(S==="ArrowUp")w.preventDefault(),hs(I,k,u,c,km);else if(S==="Home")w.preventDefault(),hs(I,null,u,c,Fu);else if(S==="End")w.preventDefault(),hs(I,null,u,c,km);else if(S.length===1){const N=p.current,q=S.toLowerCase(),H=performance.now();N.keys.length>0&&(H-N.lastTime>500?(N.keys=[],N.repeating=!0,N.previousKeyMatched=!0):N.repeating&&q!==N.keys[0]&&(N.repeating=!1)),N.lastTime=H,N.keys.push(q);const U=k&&!N.repeating&&JI(k,N);N.previousKeyMatched&&(U||hs(I,k,!1,c,Fu,N))?w.preventDefault():N.previousKeyMatched=!1}l&&l(w)},b=Nt(f,t);let C=-1;y.Children.forEach(o,(w,I)=>{if(!y.isValidElement(w)){C===I&&(C+=1,C>=o.length&&(C=-1));return}w.props.disabled||(h==="selectedMenu"&&w.props.selected||C===-1)&&(C=I),C===I&&(w.props.disabled||w.props.muiSkipListHighlight||w.type.muiSkipListHighlight)&&(C+=1,C>=o.length&&(C=-1))});const P=y.Children.map(o,(w,I)=>{if(I===C){const S={};return s&&(S.autoFocus=!0),w.props.tabIndex===void 0&&h==="selectedMenu"&&(S.tabIndex=0),y.cloneElement(w,S)}return w});return M.jsx(xP,D({role:"menu",ref:b,className:a,onKeyDown:v,tabIndex:i?0:-1},d,{children:P}))}),PP=DP;function tf(){const n=hb(fb);return n[db]||n}const ZI=n=>n.scrollTop;function Ha(n,e){var t,r;const{timeout:i,easing:s,style:o={}}=n;return{duration:(t=o.transitionDuration)!=null?t:typeof i=="number"?i:i[e.mode]||0,easing:(r=o.transitionTimingFunction)!=null?r:typeof s=="object"?s[e.mode]:s,delay:o.transitionDelay}}const OP=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Gl(n){return`scale(${n}, ${n**2})`}const MP={entering:{opacity:1,transform:Gl(1)},entered:{opacity:1,transform:"none"}},$u=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),eb=y.forwardRef(function(e,t){const{addEndListener:r,appear:i=!0,children:s,easing:o,in:a,onEnter:c,onEntered:u,onEntering:l,onExit:h,onExited:d,onExiting:f,style:p,timeout:v="auto",TransitionComponent:b=HI}=e,C=Te(e,OP),P=y.useRef(),w=y.useRef(),I=tf(),S=y.useRef(null),k=Nt(S,s.ref,t),N=$=>Y=>{if($){const de=S.current;Y===void 0?$(de):$(de,Y)}},q=N(l),H=N(($,Y)=>{ZI($);const{duration:de,delay:fe,easing:qe}=Ha({style:p,timeout:v,easing:o},{mode:"enter"});let ke;v==="auto"?(ke=I.transitions.getAutoHeightDuration($.clientHeight),w.current=ke):ke=de,$.style.transition=[I.transitions.create("opacity",{duration:ke,delay:fe}),I.transitions.create("transform",{duration:$u?ke:ke*.666,delay:fe,easing:qe})].join(","),c&&c($,Y)}),U=N(u),W=N(f),he=N($=>{const{duration:Y,delay:de,easing:fe}=Ha({style:p,timeout:v,easing:o},{mode:"exit"});let qe;v==="auto"?(qe=I.transitions.getAutoHeightDuration($.clientHeight),w.current=qe):qe=Y,$.style.transition=[I.transitions.create("opacity",{duration:qe,delay:de}),I.transitions.create("transform",{duration:$u?qe:qe*.666,delay:$u?de:de||qe*.333,easing:fe})].join(","),$.style.opacity=0,$.style.transform=Gl(.75),h&&h($)}),ge=N(d),G=$=>{v==="auto"&&(P.current=setTimeout($,w.current||0)),r&&r(S.current,$)};return y.useEffect(()=>()=>{clearTimeout(P.current)},[]),M.jsx(b,D({appear:i,in:a,nodeRef:S,onEnter:H,onEntered:U,onEntering:q,onExit:he,onExited:ge,onExiting:W,addEndListener:G,timeout:v==="auto"?null:v},C,{children:($,Y)=>y.cloneElement(s,D({style:D({opacity:0,transform:Gl(.75),visibility:$==="exited"&&!a?"hidden":void 0},MP[$],p,s.props.style),ref:k},Y))}))});eb.muiSupportAuto=!0;const LP=eb,FP=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],$P={entering:{opacity:1},entered:{opacity:1}},VP=y.forwardRef(function(e,t){const r=tf(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:s,appear:o=!0,children:a,easing:c,in:u,onEnter:l,onEntered:h,onEntering:d,onExit:f,onExited:p,onExiting:v,style:b,timeout:C=i,TransitionComponent:P=HI}=e,w=Te(e,FP),I=y.useRef(null),S=Nt(I,a.ref,t),k=G=>$=>{if(G){const Y=I.current;$===void 0?G(Y):G(Y,$)}},N=k(d),q=k((G,$)=>{ZI(G);const Y=Ha({style:b,timeout:C,easing:c},{mode:"enter"});G.style.webkitTransition=r.transitions.create("opacity",Y),G.style.transition=r.transitions.create("opacity",Y),l&&l(G,$)}),H=k(h),U=k(v),W=k(G=>{const $=Ha({style:b,timeout:C,easing:c},{mode:"exit"});G.style.webkitTransition=r.transitions.create("opacity",$),G.style.transition=r.transitions.create("opacity",$),f&&f(G)}),he=k(p),ge=G=>{s&&s(I.current,G)};return M.jsx(P,D({appear:o,in:u,nodeRef:I,onEnter:q,onEntered:H,onEntering:N,onExit:W,onExited:he,onExiting:U,addEndListener:ge,timeout:C},w,{children:(G,$)=>y.cloneElement(a,D({style:D({opacity:0,visibility:G==="exited"&&!u?"hidden":void 0},$P[G],b,a.props.style),ref:S},$))}))}),UP=VP;function BP(n){return Bt("MuiBackdrop",n)}It("MuiBackdrop",["root","invisible"]);const qP=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],jP=n=>{const{classes:e,invisible:t}=n;return cn({root:["root",t&&"invisible"]},BP,e)},zP=$e("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.invisible&&e.invisible]}})(({ownerState:n})=>D({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})),GP=y.forwardRef(function(e,t){var r,i,s;const o=qt({props:e,name:"MuiBackdrop"}),{children:a,className:c,component:u="div",components:l={},componentsProps:h={},invisible:d=!1,open:f,slotProps:p={},slots:v={},TransitionComponent:b=UP,transitionDuration:C}=o,P=Te(o,qP),w=D({},o,{component:u,invisible:d}),I=jP(w),S=(r=p.root)!=null?r:h.root;return M.jsx(b,D({in:f,timeout:C},P,{children:M.jsx(zP,D({"aria-hidden":!0},S,{as:(i=(s=v.root)!=null?s:l.Root)!=null?i:u,className:oe(I.root,c,S==null?void 0:S.className),ownerState:D({},w,S==null?void 0:S.ownerState),classes:I,ref:t,children:a}))}))}),KP=GP,WP=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],HP=$e("div",{name:"MuiModal",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,!t.open&&t.exited&&e.hidden]}})(({theme:n,ownerState:e})=>D({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!e.open&&e.exited&&{visibility:"hidden"})),QP=$e(KP,{name:"MuiModal",slot:"Backdrop",overridesResolver:(n,e)=>e.backdrop})({zIndex:-1}),YP=y.forwardRef(function(e,t){var r,i,s,o,a,c;const u=qt({name:"MuiModal",props:e}),{BackdropComponent:l=QP,BackdropProps:h,classes:d,className:f,closeAfterTransition:p=!1,children:v,container:b,component:C,components:P={},componentsProps:w={},disableAutoFocus:I=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:k=!1,disablePortal:N=!1,disableRestoreFocus:q=!1,disableScrollLock:H=!1,hideBackdrop:U=!1,keepMounted:W=!1,onBackdropClick:he,onClose:ge,open:G,slotProps:$,slots:Y,theme:de}=u,fe=Te(u,WP),[qe,ke]=y.useState(!0),ut={container:b,closeAfterTransition:p,disableAutoFocus:I,disableEnforceFocus:S,disableEscapeKeyDown:k,disablePortal:N,disableRestoreFocus:q,disableScrollLock:H,hideBackdrop:U,keepMounted:W,onBackdropClick:he,onClose:ge,open:G},Mt=D({},u,ut,{exited:qe}),jt=(r=(i=Y==null?void 0:Y.root)!=null?i:P.Root)!=null?r:HP,lt=(s=(o=Y==null?void 0:Y.backdrop)!=null?o:P.Backdrop)!=null?s:l,Je=(a=$==null?void 0:$.root)!=null?a:w.root,nt=(c=$==null?void 0:$.backdrop)!=null?c:w.backdrop;return M.jsx(oE,D({slots:{root:jt,backdrop:lt},slotProps:{root:()=>D({},ju(Je,Mt),!Hl(jt)&&{as:C,theme:de},{className:oe(f,Je==null?void 0:Je.className,d==null?void 0:d.root,!Mt.open&&Mt.exited&&(d==null?void 0:d.hidden))}),backdrop:()=>D({},h,ju(nt,Mt),{className:oe(nt==null?void 0:nt.className,h==null?void 0:h.className,d==null?void 0:d.backdrop)})},onTransitionEnter:()=>ke(!1),onTransitionExited:()=>ke(!0),ref:t},fe,ut,{children:v}))}),XP=YP,JP=n=>{let e;return n<1?e=5.11916*n**2:e=4.5*Math.log(n+1)+2,(e/100).toFixed(2)},Am=JP;function ZP(n){return Bt("MuiPaper",n)}It("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const eO=["className","component","elevation","square","variant"],tO=n=>{const{square:e,elevation:t,variant:r,classes:i}=n,s={root:["root",r,!e&&"rounded",r==="elevation"&&`elevation${t}`]};return cn(s,ZP,i)},nO=$e("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],!t.square&&e.rounded,t.variant==="elevation"&&e[`elevation${t.elevation}`]]}})(({theme:n,ownerState:e})=>{var t;return D({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!e.square&&{borderRadius:n.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.divider}`},e.variant==="elevation"&&D({boxShadow:(n.vars||n).shadows[e.elevation]},!n.vars&&n.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Yt("#fff",Am(e.elevation))}, ${Yt("#fff",Am(e.elevation))})`},n.vars&&{backgroundImage:(t=n.vars.overlays)==null?void 0:t[e.elevation]}))}),rO=y.forwardRef(function(e,t){const r=qt({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:o=1,square:a=!1,variant:c="elevation"}=r,u=Te(r,eO),l=D({},r,{component:s,elevation:o,square:a,variant:c}),h=tO(l);return M.jsx(nO,D({as:s,ownerState:l,className:oe(h.root,i),ref:t},u))}),iO=rO;function sO(n){return Bt("MuiPopover",n)}It("MuiPopover",["root","paper"]);const oO=["onEntering"],aO=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],cO=["slotProps"];function Rm(n,e){let t=0;return typeof e=="number"?t=e:e==="center"?t=n.height/2:e==="bottom"&&(t=n.height),t}function xm(n,e){let t=0;return typeof e=="number"?t=e:e==="center"?t=n.width/2:e==="right"&&(t=n.width),t}function Nm(n){return[n.horizontal,n.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function Vu(n){return typeof n=="function"?n():n}const uO=n=>{const{classes:e}=n;return cn({root:["root"],paper:["paper"]},sO,e)},lO=$e(XP,{name:"MuiPopover",slot:"Root",overridesResolver:(n,e)=>e.root})({}),tb=$e(iO,{name:"MuiPopover",slot:"Paper",overridesResolver:(n,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),hO=y.forwardRef(function(e,t){var r,i,s;const o=qt({props:e,name:"MuiPopover"}),{action:a,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:l,anchorReference:h="anchorEl",children:d,className:f,container:p,elevation:v=8,marginThreshold:b=16,open:C,PaperProps:P={},slots:w,slotProps:I,transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:k=LP,transitionDuration:N="auto",TransitionProps:{onEntering:q}={}}=o,H=Te(o.TransitionProps,oO),U=Te(o,aO),W=(r=I==null?void 0:I.paper)!=null?r:P,he=y.useRef(),ge=Nt(he,W.ref),G=D({},o,{anchorOrigin:u,anchorReference:h,elevation:v,marginThreshold:b,externalPaperSlotProps:W,transformOrigin:S,TransitionComponent:k,transitionDuration:N,TransitionProps:H}),$=uO(G),Y=y.useCallback(()=>{if(h==="anchorPosition")return l;const re=Vu(c),je=(re&&re.nodeType===1?re:Tt(he.current).body).getBoundingClientRect();return{top:je.top+Rm(je,u.vertical),left:je.left+xm(je,u.horizontal)}},[c,u.horizontal,u.vertical,l,h]),de=y.useCallback(re=>({vertical:Rm(re,S.vertical),horizontal:xm(re,S.horizontal)}),[S.horizontal,S.vertical]),fe=y.useCallback(re=>{const Ae={width:re.offsetWidth,height:re.offsetHeight},je=de(Ae);if(h==="none")return{top:null,left:null,transformOrigin:Nm(je)};const Sn=Y();let zt=Sn.top-je.vertical,ye=Sn.left-je.horizontal;const Fo=zt+Ae.height,$o=ye+Ae.width,Qr=gi(Vu(c)),Yr=Qr.innerHeight-b,Vo=Qr.innerWidth-b;if(zt<b){const bt=zt-b;zt-=bt,je.vertical+=bt}else if(Fo>Yr){const bt=Fo-Yr;zt-=bt,je.vertical+=bt}if(ye<b){const bt=ye-b;ye-=bt,je.horizontal+=bt}else if($o>Vo){const bt=$o-Vo;ye-=bt,je.horizontal+=bt}return{top:`${Math.round(zt)}px`,left:`${Math.round(ye)}px`,transformOrigin:Nm(je)}},[c,h,Y,de,b]),[qe,ke]=y.useState(C),ut=y.useCallback(()=>{const re=he.current;if(!re)return;const Ae=fe(re);Ae.top!==null&&(re.style.top=Ae.top),Ae.left!==null&&(re.style.left=Ae.left),re.style.transformOrigin=Ae.transformOrigin,ke(!0)},[fe]),Mt=(re,Ae)=>{q&&q(re,Ae),ut()},jt=()=>{ke(!1)};y.useEffect(()=>{C&&ut()}),y.useImperativeHandle(a,()=>C?{updatePosition:()=>{ut()}}:null,[C,ut]),y.useEffect(()=>{if(!C)return;const re=$m(()=>{ut()}),Ae=gi(c);return Ae.addEventListener("resize",re),()=>{re.clear(),Ae.removeEventListener("resize",re)}},[c,C,ut]);let lt=N;N==="auto"&&!k.muiSupportAuto&&(lt=void 0);const Je=p||(c?Tt(Vu(c)).body:void 0),nt=(i=w==null?void 0:w.root)!=null?i:lO,nr=(s=w==null?void 0:w.paper)!=null?s:tb,Qi=ma({elementType:nr,externalSlotProps:D({},W,{style:qe?W.style:D({},W.style,{opacity:0})}),additionalProps:{elevation:v,ref:ge},ownerState:G,className:oe($.paper,W==null?void 0:W.className)}),ht=ma({elementType:nt,externalSlotProps:(I==null?void 0:I.root)||{},externalForwardedProps:U,additionalProps:{ref:t,slotProps:{backdrop:{invisible:!0}},container:Je,open:C},ownerState:G,className:oe($.root,f)}),{slotProps:Yi}=ht,Xi=Te(ht,cO);return M.jsx(nt,D({},Xi,!Hl(nt)&&{slotProps:Yi},{children:M.jsx(k,D({appear:!0,in:C,onEntering:Mt,onExited:jt,timeout:lt},H,{children:M.jsx(nr,D({},Qi,{children:d}))}))}))}),dO=hO;function fO(n){return Bt("MuiMenu",n)}It("MuiMenu",["root","paper","list"]);const pO=["onEntering"],mO=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],gO={vertical:"top",horizontal:"right"},yO={vertical:"top",horizontal:"left"},vO=n=>{const{classes:e}=n;return cn({root:["root"],paper:["paper"],list:["list"]},fO,e)},wO=$e(dO,{shouldForwardProp:n=>Wl(n)||n==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(n,e)=>e.root})({}),IO=$e(tb,{name:"MuiMenu",slot:"Paper",overridesResolver:(n,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),bO=$e(PP,{name:"MuiMenu",slot:"List",overridesResolver:(n,e)=>e.list})({outline:0}),EO=y.forwardRef(function(e,t){const r=qt({props:e,name:"MuiMenu"}),{autoFocus:i=!0,children:s,disableAutoFocusItem:o=!1,MenuListProps:a={},onClose:c,open:u,PaperProps:l={},PopoverClasses:h,transitionDuration:d="auto",TransitionProps:{onEntering:f}={},variant:p="selectedMenu"}=r,v=Te(r.TransitionProps,pO),b=Te(r,mO),C=tf(),P=C.direction==="rtl",w=D({},r,{autoFocus:i,disableAutoFocusItem:o,MenuListProps:a,onEntering:f,PaperProps:l,transitionDuration:d,TransitionProps:v,variant:p}),I=vO(w),S=i&&!o&&u,k=y.useRef(null),N=(U,W)=>{k.current&&k.current.adjustStyleForScrollbar(U,C),f&&f(U,W)},q=U=>{U.key==="Tab"&&(U.preventDefault(),c&&c(U,"tabKeyDown"))};let H=-1;return y.Children.map(s,(U,W)=>{y.isValidElement(U)&&(U.props.disabled||(p==="selectedMenu"&&U.props.selected||H===-1)&&(H=W))}),M.jsx(wO,D({onClose:c,anchorOrigin:{vertical:"bottom",horizontal:P?"right":"left"},transformOrigin:P?gO:yO,slots:{paper:IO},slotProps:{paper:D({},l,{classes:D({},l.classes,{root:I.paper})})},className:I.root,open:u,ref:t,transitionDuration:d,TransitionProps:D({onEntering:N},v),ownerState:w},b,{classes:h,children:M.jsx(bO,D({onKeyDown:q,actions:k,autoFocus:i&&(H===-1||o),autoFocusItem:S,variant:p},a,{className:oe(I.list,a.className),children:s}))}))}),_O=EO;function tM(n){return Bt("MuiDivider",n)}const TO=It("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Dm=TO,SO=It("MuiListItemIcon",["root","alignItemsFlexStart"]),Pm=SO,CO=It("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Om=CO;function kO(n){return Bt("MuiMenuItem",n)}const AO=It("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ds=AO,RO=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],xO=(n,e)=>{const{ownerState:t}=n;return[e.root,t.dense&&e.dense,t.divider&&e.divider,!t.disableGutters&&e.gutters]},NO=n=>{const{disabled:e,dense:t,divider:r,disableGutters:i,selected:s,classes:o}=n,c=cn({root:["root",t&&"dense",e&&"disabled",!i&&"gutters",r&&"divider",s&&"selected"]},kO,o);return D({},o,c)},DO=$e(QI,{shouldForwardProp:n=>Wl(n)||n==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:xO})(({theme:n,ownerState:e})=>D({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ds.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:Yt(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${ds.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:Yt(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${ds.selected}:hover`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:Yt(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:Yt(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${ds.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${ds.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity},[`& + .${Dm.root}`]:{marginTop:n.spacing(1),marginBottom:n.spacing(1)},[`& + .${Dm.inset}`]:{marginLeft:52},[`& .${Om.root}`]:{marginTop:0,marginBottom:0},[`& .${Om.inset}`]:{paddingLeft:36},[`& .${Pm.root}`]:{minWidth:36}},!e.dense&&{[n.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&D({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,{[`& .${Pm.root} svg`]:{fontSize:"1.25rem"}}))),PO=y.forwardRef(function(e,t){const r=qt({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:s="li",dense:o=!1,divider:a=!1,disableGutters:c=!1,focusVisibleClassName:u,role:l="menuitem",tabIndex:h,className:d}=r,f=Te(r,RO),p=y.useContext(zl),v=y.useMemo(()=>({dense:o||p.dense||!1,disableGutters:c}),[p.dense,o,c]),b=y.useRef(null);yi(()=>{i&&b.current&&b.current.focus()},[i]);const C=D({},r,{dense:v.dense,divider:a,disableGutters:c}),P=NO(r),w=Nt(b,t);let I;return r.disabled||(I=h!==void 0?h:-1),M.jsx(zl.Provider,{value:v,children:M.jsx(DO,D({ref:w,role:l,tabIndex:I,component:s,focusVisibleClassName:oe(P.focusVisible,u),className:oe(P.root,d)},f,{ownerState:C,classes:P}))})}),Mm=PO;var nf={},nb={exports:{}};(function(n){function e(t){return t&&t.__esModule?t:{default:t}}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(nb);var OO=nb.exports,Uu={};function MO(n){return Bt("MuiSvgIcon",n)}It("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const LO=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],FO=n=>{const{color:e,fontSize:t,classes:r}=n,i={root:["root",e!=="inherit"&&`color${st(e)}`,`fontSize${st(t)}`]};return cn(i,MO,r)},$O=$e("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.color!=="inherit"&&e[`color${st(t.color)}`],e[`fontSize${st(t.fontSize)}`]]}})(({theme:n,ownerState:e})=>{var t,r,i,s,o,a,c,u,l,h,d,f,p,v,b,C,P;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(t=n.transitions)==null||(r=t.create)==null?void 0:r.call(t,"fill",{duration:(i=n.transitions)==null||(s=i.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((o=n.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((c=n.typography)==null||(u=c.pxToRem)==null?void 0:u.call(c,24))||"1.5rem",large:((l=n.typography)==null||(h=l.pxToRem)==null?void 0:h.call(l,35))||"2.1875rem"}[e.fontSize],color:(d=(f=(n.vars||n).palette)==null||(p=f[e.color])==null?void 0:p.main)!=null?d:{action:(v=(n.vars||n).palette)==null||(b=v.action)==null?void 0:b.active,disabled:(C=(n.vars||n).palette)==null||(P=C.action)==null?void 0:P.disabled,inherit:void 0}[e.color]}}),rb=y.forwardRef(function(e,t){const r=qt({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:c="medium",htmlColor:u,inheritViewBox:l=!1,titleAccess:h,viewBox:d="0 0 24 24"}=r,f=Te(r,LO),p=D({},r,{color:o,component:a,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:l,viewBox:d}),v={};l||(v.viewBox=d);const b=FO(p);return M.jsxs($O,D({as:a,className:oe(b.root,s),focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:t},v,f,{ownerState:p,children:[i,h?M.jsx("title",{children:h}):null]}))});rb.muiName="SvgIcon";const Lm=rb;function VO(n,e){function t(r,i){return M.jsx(Lm,D({"data-testid":`${e}Icon`,ref:i},r,{children:n}))}return t.muiName=Lm.muiName,y.memo(y.forwardRef(t))}const UO={configure:n=>{pb.configure(n)}},BO=Object.freeze(Object.defineProperty({__proto__:null,capitalize:st,createChainedFunction:Bu,createSvgIcon:VO,debounce:$m,deprecatedPropType:yb,isMuiElement:vb,ownerDocument:Tt,ownerWindow:gi,requirePropFactory:wb,setRef:pa,unstable_ClassNameGenerator:UO,unstable_useEnhancedEffect:yi,unstable_useId:Eb,unsupportedProp:_b,useControlled:Tb,useEventCallback:fr,useForkRef:Nt,useIsFocusVisible:Vm},Symbol.toStringTag,{value:"Module"})),qO=mb(BO);var Fm;function jO(){return Fm||(Fm=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=qO}(Uu)),Uu}var zO=OO;Object.defineProperty(nf,"__esModule",{value:!0});var ib=nf.default=void 0,GO=zO(jO()),KO=M,WO=(0,GO.default)((0,KO.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");ib=nf.default=WO;function nM(){const[n,e]=y.useState(""),[t,r]=y.useState(""),[i,s]=y.useState(""),[o,a]=y.useState(""),c=gb(),u=()=>{Ul.signOut().then(()=>{c("/"),window.location.reload()})},[l,h]=Qt.useState(null),d=!!l,f=S=>{h(S.currentTarget)},p=()=>{h(null)};y.useEffect(()=>{a(localStorage.getItem("user"))},[o]);const[v,b]=y.useState([]),C=async()=>{try{return KI.collection("admin").onSnapshot(k=>{const N=k.docs.map(q=>({id:q.id,...q.data()}));N.sort((q,H)=>{const U=parseInt(q.id.split("-")[0]),W=parseInt(H.id.split("-")[0]);return U-W}),b(N)})}catch{}};y.useEffect(()=>{C()},[]);function P(){v.map((S,k)=>{localStorage.setItem("user",o),setTimeout(()=>{c(`/user/${o}`)},1e3)})}const[w,I]=y.useState(!1);return y.useEffect(()=>{const S=()=>{I(window.innerWidth<768)};return S(),window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S)}},[]),M.jsx(M.Fragment,{children:M.jsxs("div",{className:"navbar",children:[M.jsx($1,{setUser:e,user:n,level:t,setLevel:r,setUuid:s,uuid:i}),M.jsx("div",{children:M.jsx(bP,{id:"basic-button","aria-controls":d?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,onClick:f,className:"menu-icon",children:M.jsx(ib,{className:"menu-icon"})})}),M.jsxs(_O,{id:"basic-menu",anchorEl:l,open:d,onClose:p,MenuListProps:{"aria-labelledby":"basic-button"},children:[M.jsxs(Mm,{onClick:p,children:[" ",M.jsx(Zi,{to:"/",children:" Home "})]}),w&&t>8?M.jsx(Mm,{onClick:p,children:M.jsx(Zi,{to:"/admindashboard",children:" admin "})}):null]}),i&&M.jsx(M.Fragment,{children:M.jsxs("div",{className:"style-nav",children:[t>8&&w===!1?M.jsx(Zi,{to:"/admindashboard",className:" nicer-style",children:"admin"}):null,M.jsx("br",{}),M.jsx("button",{className:"outline nicer-style",onClick:u,children:"Sign out"}),M.jsx("br",{}),M.jsx("button",{className:" nicer-style",onClick:P,children:o})]})}),!i&&M.jsx(M.Fragment,{children:M.jsxs("div",{className:"nav-notsigned",children:[M.jsx(Zi,{to:"/login",className:"nicer-style",children:" Login "}),M.jsx(Zi,{to:"/signup",className:"nicer-style",children:" Signup "})]})})]})})}export{bP as B,vt as C,We as F,T1 as G,xP as L,XP as M,nM as N,iO as P,Hn as S,HI as T,$1 as U,bI as _,Ul as a,Ga as b,wm as c,ZO as d,tM as e,KI as f,eM as g,Nt as h,OO as i,$m as j,ZI as k,Ha as l,vm as m,V as n,gi as o,Br as p,gE as q,jO as r,th as s,Dt as t,tf as u,at as v,wE as w,Ql as x,g1 as y};
