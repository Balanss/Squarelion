function wM(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Gne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ex(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Hne(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var _x={exports:{}},Up={},Ix={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd=Symbol.for("react.element"),EM=Symbol.for("react.portal"),_M=Symbol.for("react.fragment"),IM=Symbol.for("react.strict_mode"),TM=Symbol.for("react.profiler"),SM=Symbol.for("react.provider"),bM=Symbol.for("react.context"),kM=Symbol.for("react.forward_ref"),xM=Symbol.for("react.suspense"),CM=Symbol.for("react.memo"),AM=Symbol.for("react.lazy"),lI=Symbol.iterator;function PM(t){return t===null||typeof t!="object"?null:(t=lI&&t[lI]||t["@@iterator"],typeof t=="function"?t:null)}var Tx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sx=Object.assign,bx={};function Al(t,e,n){this.props=t,this.context=e,this.refs=bx,this.updater=n||Tx}Al.prototype.isReactComponent={};Al.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Al.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kx(){}kx.prototype=Al.prototype;function Ew(t,e,n){this.props=t,this.context=e,this.refs=bx,this.updater=n||Tx}var _w=Ew.prototype=new kx;_w.constructor=Ew;Sx(_w,Al.prototype);_w.isPureReactComponent=!0;var uI=Array.isArray,xx=Object.prototype.hasOwnProperty,Iw={current:null},Cx={key:!0,ref:!0,__self:!0,__source:!0};function Ax(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xx.call(e,r)&&!Cx.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fd,type:t,key:s,ref:o,props:i,_owner:Iw.current}}function RM(t,e){return{$$typeof:fd,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tw(t){return typeof t=="object"&&t!==null&&t.$$typeof===fd}function NM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cI=/\/+/g;function kg(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NM(""+t.key):e.toString(36)}function qh(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fd:case EM:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+kg(o,0):r,uI(i)?(n="",t!=null&&(n=t.replace(cI,"$&/")+"/"),qh(i,e,n,"",function(u){return u})):i!=null&&(Tw(i)&&(i=RM(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cI,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uI(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+kg(s,a);o+=qh(s,e,n,l,i)}else if(l=PM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+kg(s,a++),o+=qh(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ih(t,e,n){if(t==null)return t;var r=[],i=0;return qh(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Wh={transition:null},OM={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Wh,ReactCurrentOwner:Iw};ie.Children={map:ih,forEach:function(t,e,n){ih(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ih(t,function(){e++}),e},toArray:function(t){return ih(t,function(e){return e})||[]},only:function(t){if(!Tw(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Al;ie.Fragment=_M;ie.Profiler=TM;ie.PureComponent=Ew;ie.StrictMode=IM;ie.Suspense=xM;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OM;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sx({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Iw.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xx.call(e,l)&&!Cx.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fd,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:bM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:SM,_context:t},t.Consumer=t};ie.createElement=Ax;ie.createFactory=function(t){var e=Ax.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:kM,render:t}};ie.isValidElement=Tw;ie.lazy=function(t){return{$$typeof:AM,_payload:{_status:-1,_result:t},_init:DM}};ie.memo=function(t,e){return{$$typeof:CM,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Wh.transition;Wh.transition={};try{t()}finally{Wh.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return en.current.useCallback(t,e)};ie.useContext=function(t){return en.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return en.current.useDeferredValue(t)};ie.useEffect=function(t,e){return en.current.useEffect(t,e)};ie.useId=function(){return en.current.useId()};ie.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return en.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};ie.useRef=function(t){return en.current.useRef(t)};ie.useState=function(t){return en.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return en.current.useTransition()};ie.version="18.2.0";Ix.exports=ie;var w=Ix.exports;const er=Ex(w),Qy=wM({__proto__:null,default:er},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LM=w,MM=Symbol.for("react.element"),$M=Symbol.for("react.fragment"),FM=Object.prototype.hasOwnProperty,UM=LM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VM={key:!0,ref:!0,__self:!0,__source:!0};function Px(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)FM.call(e,r)&&!VM.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:MM,type:t,key:s,ref:o,props:i,_owner:UM.current}}Up.Fragment=$M;Up.jsx=Px;Up.jsxs=Px;_x.exports=Up;var Sw=_x.exports;const ho=Sw.Fragment,A=Sw.jsx,J=Sw.jsxs;var Yy={},Rx={exports:{}},Dn={},Nx={exports:{}},Dx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,V){var H=k.length;k.push(V);e:for(;0<H;){var K=H-1>>>1,ne=k[K];if(0<i(ne,V))k[K]=V,k[H]=ne,H=K;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var V=k[0],H=k.pop();if(H!==V){k[0]=H;e:for(var K=0,ne=k.length,ht=ne>>>1;K<ht;){var ft=2*(K+1)-1,at=k[ft],Ne=ft+1,Ln=k[Ne];if(0>i(at,H))Ne<ne&&0>i(Ln,at)?(k[K]=Ln,k[Ne]=H,K=Ne):(k[K]=at,k[ft]=H,K=ft);else if(Ne<ne&&0>i(Ln,H))k[K]=Ln,k[Ne]=H,K=Ne;else break e}}return V}function i(k,V){var H=k.sortIndex-V.sortIndex;return H!==0?H:k.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,p=!1,m=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=k)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function _(k){if(m=!1,y(k),!p)if(n(l)!==null)p=!0,he(I);else{var V=n(u);V!==null&&xe(_,V.startTime-k)}}function I(k,V){p=!1,m&&(m=!1,v(C),C=-1),f=!0;var H=h;try{for(y(V),d=n(l);d!==null&&(!(d.expirationTime>V)||k&&!Y());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var ne=K(d.expirationTime<=V);V=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&r(l),y(V)}else r(l);d=n(l)}if(d!==null)var ht=!0;else{var ft=n(u);ft!==null&&xe(_,ft.startTime-V),ht=!1}return ht}finally{d=null,h=H,f=!1}}var S=!1,T=null,C=-1,D=5,R=-1;function Y(){return!(t.unstable_now()-R<D)}function se(){if(T!==null){var k=t.unstable_now();R=k;var V=!0;try{V=T(!0,k)}finally{V?ue():(S=!1,T=null)}}else S=!1}var ue;if(typeof g=="function")ue=function(){g(se)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Q=G.port2;G.port1.onmessage=se,ue=function(){Q.postMessage(null)}}else ue=function(){E(se,0)};function he(k){T=k,S||(S=!0,ue())}function xe(k,V){C=E(function(){k(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,he(I))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var H=h;h=V;try{return k()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,V){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var H=h;h=k;try{return V()}finally{h=H}},t.unstable_scheduleCallback=function(k,V,H){var K=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?K+H:K):H=K,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=H+ne,k={id:c++,callback:V,priorityLevel:k,startTime:H,expirationTime:ne,sortIndex:-1},H>K?(k.sortIndex=H,e(u,k),n(l)===null&&k===n(u)&&(m?(v(C),C=-1):m=!0,xe(_,H-K))):(k.sortIndex=ne,e(l,k),p||f||(p=!0,he(I))),k},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(k){var V=h;return function(){var H=h;h=V;try{return k.apply(this,arguments)}finally{h=H}}}})(Dx);Nx.exports=Dx;var BM=Nx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox=w,Cn=BM;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lx=new Set,pc={};function zo(t,e){tl(t,e),tl(t+"Capture",e)}function tl(t,e){for(pc[t]=e,t=0;t<e.length;t++)Lx.add(e[t])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xy=Object.prototype.hasOwnProperty,jM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dI={},hI={};function zM(t){return Xy.call(hI,t)?!0:Xy.call(dI,t)?!1:jM.test(t)?hI[t]=!0:(dI[t]=!0,!1)}function qM(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function WM(t,e,n,r){if(e===null||typeof e>"u"||qM(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bw=/[\-:]([a-z])/g;function kw(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bw,kw);Nt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bw,kw);Nt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bw,kw);Nt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function xw(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WM(e,n,i,r)&&(n=null),r||i===null?zM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mi=Ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sh=Symbol.for("react.element"),_a=Symbol.for("react.portal"),Ia=Symbol.for("react.fragment"),Cw=Symbol.for("react.strict_mode"),Jy=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Aw=Symbol.for("react.forward_ref"),Zy=Symbol.for("react.suspense"),ev=Symbol.for("react.suspense_list"),Pw=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Fx=Symbol.for("react.offscreen"),fI=Symbol.iterator;function nu(t){return t===null||typeof t!="object"?null:(t=fI&&t[fI]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,xg;function xu(t){if(xg===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xg=e&&e[1]||""}return`
`+xg+t}var Cg=!1;function Ag(t,e){if(!t||Cg)return"";Cg=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cg=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xu(t):""}function GM(t){switch(t.tag){case 5:return xu(t.type);case 16:return xu("Lazy");case 13:return xu("Suspense");case 19:return xu("SuspenseList");case 0:case 2:case 15:return t=Ag(t.type,!1),t;case 11:return t=Ag(t.type.render,!1),t;case 1:return t=Ag(t.type,!0),t;default:return""}}function tv(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ia:return"Fragment";case _a:return"Portal";case Jy:return"Profiler";case Cw:return"StrictMode";case Zy:return"Suspense";case ev:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $x:return(t.displayName||"Context")+".Consumer";case Mx:return(t._context.displayName||"Context")+".Provider";case Aw:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pw:return e=t.displayName||null,e!==null?e:tv(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return tv(t(e))}catch{}}return null}function HM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tv(e);case 8:return e===Cw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function os(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ux(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KM(t){var e=Ux(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oh(t){t._valueTracker||(t._valueTracker=KM(t))}function Vx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ux(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nv(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pI(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=os(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bx(t,e){e=e.checked,e!=null&&xw(t,"checked",e,!1)}function rv(t,e){Bx(t,e);var n=os(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?iv(t,e.type,n):e.hasOwnProperty("defaultValue")&&iv(t,e.type,os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mI(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function iv(t,e,n){(e!=="number"||Sf(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cu=Array.isArray;function Ua(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+os(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sv(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gI(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Cu(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:os(n)}}function jx(t,e){var n=os(e.value),r=os(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yI(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ov(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ah,qx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ah=ah||document.createElement("div"),ah.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ah.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mc(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QM=["Webkit","ms","Moz","O"];Object.keys(Bu).forEach(function(t){QM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bu[e]=Bu[t]})});function Wx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bu.hasOwnProperty(t)&&Bu[t]?(""+e).trim():e+"px"}function Gx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YM=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function av(t,e){if(e){if(YM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function lv(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uv=null;function Rw(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cv=null,Va=null,Ba=null;function vI(t){if(t=gd(t)){if(typeof cv!="function")throw Error(O(280));var e=t.stateNode;e&&(e=qp(e),cv(t.stateNode,t.type,e))}}function Hx(t){Va?Ba?Ba.push(t):Ba=[t]:Va=t}function Kx(){if(Va){var t=Va,e=Ba;if(Ba=Va=null,vI(t),e)for(t=0;t<e.length;t++)vI(e[t])}}function Qx(t,e){return t(e)}function Yx(){}var Pg=!1;function Xx(t,e,n){if(Pg)return t(e,n);Pg=!0;try{return Qx(t,e,n)}finally{Pg=!1,(Va!==null||Ba!==null)&&(Yx(),Kx())}}function gc(t,e){var n=t.stateNode;if(n===null)return null;var r=qp(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var dv=!1;if(si)try{var ru={};Object.defineProperty(ru,"passive",{get:function(){dv=!0}}),window.addEventListener("test",ru,ru),window.removeEventListener("test",ru,ru)}catch{dv=!1}function XM(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ju=!1,bf=null,kf=!1,hv=null,JM={onError:function(t){ju=!0,bf=t}};function ZM(t,e,n,r,i,s,o,a,l){ju=!1,bf=null,XM.apply(JM,arguments)}function e$(t,e,n,r,i,s,o,a,l){if(ZM.apply(this,arguments),ju){if(ju){var u=bf;ju=!1,bf=null}else throw Error(O(198));kf||(kf=!0,hv=u)}}function qo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wI(t){if(qo(t)!==t)throw Error(O(188))}function t$(t){var e=t.alternate;if(!e){if(e=qo(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wI(i),t;if(s===r)return wI(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function Zx(t){return t=t$(t),t!==null?eC(t):null}function eC(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eC(t);if(e!==null)return e;t=t.sibling}return null}var tC=Cn.unstable_scheduleCallback,EI=Cn.unstable_cancelCallback,n$=Cn.unstable_shouldYield,r$=Cn.unstable_requestPaint,Qe=Cn.unstable_now,i$=Cn.unstable_getCurrentPriorityLevel,Nw=Cn.unstable_ImmediatePriority,nC=Cn.unstable_UserBlockingPriority,xf=Cn.unstable_NormalPriority,s$=Cn.unstable_LowPriority,rC=Cn.unstable_IdlePriority,Vp=null,Cr=null;function o$(t){if(Cr&&typeof Cr.onCommitFiberRoot=="function")try{Cr.onCommitFiberRoot(Vp,t,void 0,(t.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:u$,a$=Math.log,l$=Math.LN2;function u$(t){return t>>>=0,t===0?32:31-(a$(t)/l$|0)|0}var lh=64,uh=4194304;function Au(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cf(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Au(a):(s&=o,s!==0&&(r=Au(s)))}else o=n&~i,o!==0?r=Au(o):s!==0&&(r=Au(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rr(e),i=1<<n,r|=t[n],e&=~i;return r}function c$(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d$(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rr(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=c$(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fv(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iC(){var t=lh;return lh<<=1,!(lh&4194240)&&(lh=64),t}function Rg(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pd(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rr(e),t[e]=n}function h$(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dw(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function sC(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var oC,Ow,aC,lC,uC,pv=!1,ch=[],Wi=null,Gi=null,Hi=null,yc=new Map,vc=new Map,Oi=[],f$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _I(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":yc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vc.delete(e.pointerId)}}function iu(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gd(e),e!==null&&Ow(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function p$(t,e,n,r,i){switch(e){case"focusin":return Wi=iu(Wi,t,e,n,r,i),!0;case"dragenter":return Gi=iu(Gi,t,e,n,r,i),!0;case"mouseover":return Hi=iu(Hi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yc.set(s,iu(yc.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vc.set(s,iu(vc.get(s)||null,t,e,n,r,i)),!0}return!1}function cC(t){var e=to(t.target);if(e!==null){var n=qo(e);if(n!==null){if(e=n.tag,e===13){if(e=Jx(n),e!==null){t.blockedOn=e,uC(t.priority,function(){aC(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mv(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uv=r,n.target.dispatchEvent(r),uv=null}else return e=gd(n),e!==null&&Ow(e),t.blockedOn=n,!1;e.shift()}return!0}function II(t,e,n){Gh(t)&&n.delete(e)}function m$(){pv=!1,Wi!==null&&Gh(Wi)&&(Wi=null),Gi!==null&&Gh(Gi)&&(Gi=null),Hi!==null&&Gh(Hi)&&(Hi=null),yc.forEach(II),vc.forEach(II)}function su(t,e){t.blockedOn===e&&(t.blockedOn=null,pv||(pv=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,m$)))}function wc(t){function e(i){return su(i,t)}if(0<ch.length){su(ch[0],t);for(var n=1;n<ch.length;n++){var r=ch[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wi!==null&&su(Wi,t),Gi!==null&&su(Gi,t),Hi!==null&&su(Hi,t),yc.forEach(e),vc.forEach(e),n=0;n<Oi.length;n++)r=Oi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)cC(n),n.blockedOn===null&&Oi.shift()}var ja=mi.ReactCurrentBatchConfig,Af=!0;function g$(t,e,n,r){var i=ye,s=ja.transition;ja.transition=null;try{ye=1,Lw(t,e,n,r)}finally{ye=i,ja.transition=s}}function y$(t,e,n,r){var i=ye,s=ja.transition;ja.transition=null;try{ye=4,Lw(t,e,n,r)}finally{ye=i,ja.transition=s}}function Lw(t,e,n,r){if(Af){var i=mv(t,e,n,r);if(i===null)Bg(t,e,r,Pf,n),_I(t,r);else if(p$(i,t,e,n,r))r.stopPropagation();else if(_I(t,r),e&4&&-1<f$.indexOf(t)){for(;i!==null;){var s=gd(i);if(s!==null&&oC(s),s=mv(t,e,n,r),s===null&&Bg(t,e,r,Pf,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bg(t,e,r,null,n)}}var Pf=null;function mv(t,e,n,r){if(Pf=null,t=Rw(r),t=to(t),t!==null)if(e=qo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pf=t,null}function dC(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i$()){case Nw:return 1;case nC:return 4;case xf:case s$:return 16;case rC:return 536870912;default:return 16}default:return 16}}var Vi=null,Mw=null,Hh=null;function hC(){if(Hh)return Hh;var t,e=Mw,n=e.length,r,i="value"in Vi?Vi.value:Vi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Hh=i.slice(t,1<r?1-r:void 0)}function Kh(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dh(){return!0}function TI(){return!1}function On(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dh:TI,this.isPropagationStopped=TI,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dh)},persist:function(){},isPersistent:dh}),e}var Pl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$w=On(Pl),md=Me({},Pl,{view:0,detail:0}),v$=On(md),Ng,Dg,ou,Bp=Me({},md,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fw,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ou&&(ou&&t.type==="mousemove"?(Ng=t.screenX-ou.screenX,Dg=t.screenY-ou.screenY):Dg=Ng=0,ou=t),Ng)},movementY:function(t){return"movementY"in t?t.movementY:Dg}}),SI=On(Bp),w$=Me({},Bp,{dataTransfer:0}),E$=On(w$),_$=Me({},md,{relatedTarget:0}),Og=On(_$),I$=Me({},Pl,{animationName:0,elapsedTime:0,pseudoElement:0}),T$=On(I$),S$=Me({},Pl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b$=On(S$),k$=Me({},Pl,{data:0}),bI=On(k$),x$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P$(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=A$[t])?!!e[t]:!1}function Fw(){return P$}var R$=Me({},md,{key:function(t){if(t.key){var e=x$[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kh(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C$[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fw,charCode:function(t){return t.type==="keypress"?Kh(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kh(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N$=On(R$),D$=Me({},Bp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kI=On(D$),O$=Me({},md,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fw}),L$=On(O$),M$=Me({},Pl,{propertyName:0,elapsedTime:0,pseudoElement:0}),$$=On(M$),F$=Me({},Bp,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U$=On(F$),V$=[9,13,27,32],Uw=si&&"CompositionEvent"in window,zu=null;si&&"documentMode"in document&&(zu=document.documentMode);var B$=si&&"TextEvent"in window&&!zu,fC=si&&(!Uw||zu&&8<zu&&11>=zu),xI=String.fromCharCode(32),CI=!1;function pC(t,e){switch(t){case"keyup":return V$.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mC(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ta=!1;function j$(t,e){switch(t){case"compositionend":return mC(e);case"keypress":return e.which!==32?null:(CI=!0,xI);case"textInput":return t=e.data,t===xI&&CI?null:t;default:return null}}function z$(t,e){if(Ta)return t==="compositionend"||!Uw&&pC(t,e)?(t=hC(),Hh=Mw=Vi=null,Ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fC&&e.locale!=="ko"?null:e.data;default:return null}}var q$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function AI(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q$[t.type]:e==="textarea"}function gC(t,e,n,r){Hx(r),e=Rf(e,"onChange"),0<e.length&&(n=new $w("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qu=null,Ec=null;function W$(t){xC(t,0)}function jp(t){var e=ka(t);if(Vx(e))return t}function G$(t,e){if(t==="change")return e}var yC=!1;if(si){var Lg;if(si){var Mg="oninput"in document;if(!Mg){var PI=document.createElement("div");PI.setAttribute("oninput","return;"),Mg=typeof PI.oninput=="function"}Lg=Mg}else Lg=!1;yC=Lg&&(!document.documentMode||9<document.documentMode)}function RI(){qu&&(qu.detachEvent("onpropertychange",vC),Ec=qu=null)}function vC(t){if(t.propertyName==="value"&&jp(Ec)){var e=[];gC(e,Ec,t,Rw(t)),Xx(W$,e)}}function H$(t,e,n){t==="focusin"?(RI(),qu=e,Ec=n,qu.attachEvent("onpropertychange",vC)):t==="focusout"&&RI()}function K$(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jp(Ec)}function Q$(t,e){if(t==="click")return jp(e)}function Y$(t,e){if(t==="input"||t==="change")return jp(e)}function X$(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sr=typeof Object.is=="function"?Object.is:X$;function _c(t,e){if(sr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xy.call(e,i)||!sr(t[i],e[i]))return!1}return!0}function NI(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function DI(t,e){var n=NI(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=NI(n)}}function wC(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wC(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function EC(){for(var t=window,e=Sf();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sf(t.document)}return e}function Vw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J$(t){var e=EC(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wC(n.ownerDocument.documentElement,n)){if(r!==null&&Vw(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=DI(n,s);var o=DI(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Z$=si&&"documentMode"in document&&11>=document.documentMode,Sa=null,gv=null,Wu=null,yv=!1;function OI(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yv||Sa==null||Sa!==Sf(r)||(r=Sa,"selectionStart"in r&&Vw(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wu&&_c(Wu,r)||(Wu=r,r=Rf(gv,"onSelect"),0<r.length&&(e=new $w("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Sa)))}function hh(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ba={animationend:hh("Animation","AnimationEnd"),animationiteration:hh("Animation","AnimationIteration"),animationstart:hh("Animation","AnimationStart"),transitionend:hh("Transition","TransitionEnd")},$g={},_C={};si&&(_C=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function zp(t){if($g[t])return $g[t];if(!ba[t])return t;var e=ba[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _C)return $g[t]=e[n];return t}var IC=zp("animationend"),TC=zp("animationiteration"),SC=zp("animationstart"),bC=zp("transitionend"),kC=new Map,LI="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Is(t,e){kC.set(t,e),zo(e,[t])}for(var Fg=0;Fg<LI.length;Fg++){var Ug=LI[Fg],eF=Ug.toLowerCase(),tF=Ug[0].toUpperCase()+Ug.slice(1);Is(eF,"on"+tF)}Is(IC,"onAnimationEnd");Is(TC,"onAnimationIteration");Is(SC,"onAnimationStart");Is("dblclick","onDoubleClick");Is("focusin","onFocus");Is("focusout","onBlur");Is(bC,"onTransitionEnd");tl("onMouseEnter",["mouseout","mouseover"]);tl("onMouseLeave",["mouseout","mouseover"]);tl("onPointerEnter",["pointerout","pointerover"]);tl("onPointerLeave",["pointerout","pointerover"]);zo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zo("onBeforeInput",["compositionend","keypress","textInput","paste"]);zo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nF=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pu));function MI(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,e$(r,e,void 0,t),t.currentTarget=null}function xC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;MI(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;MI(i,a,u),s=l}}}if(kf)throw t=hv,kf=!1,hv=null,t}function Ee(t,e){var n=e[Iv];n===void 0&&(n=e[Iv]=new Set);var r=t+"__bubble";n.has(r)||(CC(e,t,2,!1),n.add(r))}function Vg(t,e,n){var r=0;e&&(r|=4),CC(n,t,r,e)}var fh="_reactListening"+Math.random().toString(36).slice(2);function Ic(t){if(!t[fh]){t[fh]=!0,Lx.forEach(function(n){n!=="selectionchange"&&(nF.has(n)||Vg(n,!1,t),Vg(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fh]||(e[fh]=!0,Vg("selectionchange",!1,e))}}function CC(t,e,n,r){switch(dC(e)){case 1:var i=g$;break;case 4:i=y$;break;default:i=Lw}n=i.bind(null,e,n,t),i=void 0,!dv||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bg(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=to(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xx(function(){var u=s,c=Rw(n),d=[];e:{var h=kC.get(t);if(h!==void 0){var f=$w,p=t;switch(t){case"keypress":if(Kh(n)===0)break e;case"keydown":case"keyup":f=N$;break;case"focusin":p="focus",f=Og;break;case"focusout":p="blur",f=Og;break;case"beforeblur":case"afterblur":f=Og;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=SI;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=E$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=L$;break;case IC:case TC:case SC:f=T$;break;case bC:f=$$;break;case"scroll":f=v$;break;case"wheel":f=U$;break;case"copy":case"cut":case"paste":f=b$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=kI}var m=(e&4)!==0,E=!m&&t==="scroll",v=m?h!==null?h+"Capture":null:h;m=[];for(var g=u,y;g!==null;){y=g;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,v!==null&&(_=gc(g,v),_!=null&&m.push(Tc(g,_,y)))),E)break;g=g.return}0<m.length&&(h=new f(h,p,null,n,c),d.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==uv&&(p=n.relatedTarget||n.fromElement)&&(to(p)||p[oi]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=u,p=p?to(p):null,p!==null&&(E=qo(p),p!==E||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=u),f!==p)){if(m=SI,_="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(m=kI,_="onPointerLeave",v="onPointerEnter",g="pointer"),E=f==null?h:ka(f),y=p==null?h:ka(p),h=new m(_,g+"leave",f,n,c),h.target=E,h.relatedTarget=y,_=null,to(c)===u&&(m=new m(v,g+"enter",p,n,c),m.target=y,m.relatedTarget=E,_=m),E=_,f&&p)t:{for(m=f,v=p,g=0,y=m;y;y=sa(y))g++;for(y=0,_=v;_;_=sa(_))y++;for(;0<g-y;)m=sa(m),g--;for(;0<y-g;)v=sa(v),y--;for(;g--;){if(m===v||v!==null&&m===v.alternate)break t;m=sa(m),v=sa(v)}m=null}else m=null;f!==null&&$I(d,h,f,m,!1),p!==null&&E!==null&&$I(d,E,p,m,!0)}}e:{if(h=u?ka(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var I=G$;else if(AI(h))if(yC)I=Y$;else{I=K$;var S=H$}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=Q$);if(I&&(I=I(t,u))){gC(d,I,n,c);break e}S&&S(t,h,u),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&iv(h,"number",h.value)}switch(S=u?ka(u):window,t){case"focusin":(AI(S)||S.contentEditable==="true")&&(Sa=S,gv=u,Wu=null);break;case"focusout":Wu=gv=Sa=null;break;case"mousedown":yv=!0;break;case"contextmenu":case"mouseup":case"dragend":yv=!1,OI(d,n,c);break;case"selectionchange":if(Z$)break;case"keydown":case"keyup":OI(d,n,c)}var T;if(Uw)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ta?pC(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(fC&&n.locale!=="ko"&&(Ta||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ta&&(T=hC()):(Vi=c,Mw="value"in Vi?Vi.value:Vi.textContent,Ta=!0)),S=Rf(u,C),0<S.length&&(C=new bI(C,t,null,n,c),d.push({event:C,listeners:S}),T?C.data=T:(T=mC(n),T!==null&&(C.data=T)))),(T=B$?j$(t,n):z$(t,n))&&(u=Rf(u,"onBeforeInput"),0<u.length&&(c=new bI("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}xC(d,e)})}function Tc(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rf(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gc(t,n),s!=null&&r.unshift(Tc(t,s,i)),s=gc(t,e),s!=null&&r.push(Tc(t,s,i))),t=t.return}return r}function sa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $I(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gc(n,s),l!=null&&o.unshift(Tc(n,l,a))):i||(l=gc(n,s),l!=null&&o.push(Tc(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rF=/\r\n?/g,iF=/\u0000|\uFFFD/g;function FI(t){return(typeof t=="string"?t:""+t).replace(rF,`
`).replace(iF,"")}function ph(t,e,n){if(e=FI(e),FI(t)!==e&&n)throw Error(O(425))}function Nf(){}var vv=null,wv=null;function Ev(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _v=typeof setTimeout=="function"?setTimeout:void 0,sF=typeof clearTimeout=="function"?clearTimeout:void 0,UI=typeof Promise=="function"?Promise:void 0,oF=typeof queueMicrotask=="function"?queueMicrotask:typeof UI<"u"?function(t){return UI.resolve(null).then(t).catch(aF)}:_v;function aF(t){setTimeout(function(){throw t})}function jg(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wc(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wc(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function VI(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rl=Math.random().toString(36).slice(2),mr="__reactFiber$"+Rl,Sc="__reactProps$"+Rl,oi="__reactContainer$"+Rl,Iv="__reactEvents$"+Rl,lF="__reactListeners$"+Rl,uF="__reactHandles$"+Rl;function to(t){var e=t[mr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oi]||n[mr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=VI(t);t!==null;){if(n=t[mr])return n;t=VI(t)}return e}t=n,n=t.parentNode}return null}function gd(t){return t=t[mr]||t[oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ka(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function qp(t){return t[Sc]||null}var Tv=[],xa=-1;function Ts(t){return{current:t}}function Te(t){0>xa||(t.current=Tv[xa],Tv[xa]=null,xa--)}function we(t,e){xa++,Tv[xa]=t.current,t.current=e}var as={},qt=Ts(as),cn=Ts(!1),_o=as;function nl(t,e){var n=t.type.contextTypes;if(!n)return as;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dn(t){return t=t.childContextTypes,t!=null}function Df(){Te(cn),Te(qt)}function BI(t,e,n){if(qt.current!==as)throw Error(O(168));we(qt,e),we(cn,n)}function AC(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,HM(t)||"Unknown",i));return Me({},n,r)}function Of(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||as,_o=qt.current,we(qt,t),we(cn,cn.current),!0}function jI(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=AC(t,e,_o),r.__reactInternalMemoizedMergedChildContext=t,Te(cn),Te(qt),we(qt,t)):Te(cn),we(cn,n)}var qr=null,Wp=!1,zg=!1;function PC(t){qr===null?qr=[t]:qr.push(t)}function cF(t){Wp=!0,PC(t)}function Ss(){if(!zg&&qr!==null){zg=!0;var t=0,e=ye;try{var n=qr;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qr=null,Wp=!1}catch(i){throw qr!==null&&(qr=qr.slice(t+1)),tC(Nw,Ss),i}finally{ye=e,zg=!1}}return null}var Ca=[],Aa=0,Lf=null,Mf=0,$n=[],Fn=0,Io=null,Wr=1,Gr="";function Vs(t,e){Ca[Aa++]=Mf,Ca[Aa++]=Lf,Lf=t,Mf=e}function RC(t,e,n){$n[Fn++]=Wr,$n[Fn++]=Gr,$n[Fn++]=Io,Io=t;var r=Wr;t=Gr;var i=32-rr(r)-1;r&=~(1<<i),n+=1;var s=32-rr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wr=1<<32-rr(e)+i|n<<i|r,Gr=s+t}else Wr=1<<s|n<<i|r,Gr=t}function Bw(t){t.return!==null&&(Vs(t,1),RC(t,1,0))}function jw(t){for(;t===Lf;)Lf=Ca[--Aa],Ca[Aa]=null,Mf=Ca[--Aa],Ca[Aa]=null;for(;t===Io;)Io=$n[--Fn],$n[Fn]=null,Gr=$n[--Fn],$n[Fn]=null,Wr=$n[--Fn],$n[Fn]=null}var bn=null,_n=null,Ae=!1,Xn=null;function NC(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zI(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,_n=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Io!==null?{id:Wr,overflow:Gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,_n=null,!0):!1;default:return!1}}function Sv(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bv(t){if(Ae){var e=_n;if(e){var n=e;if(!zI(t,e)){if(Sv(t))throw Error(O(418));e=Ki(n.nextSibling);var r=bn;e&&zI(t,e)?NC(r,n):(t.flags=t.flags&-4097|2,Ae=!1,bn=t)}}else{if(Sv(t))throw Error(O(418));t.flags=t.flags&-4097|2,Ae=!1,bn=t}}}function qI(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function mh(t){if(t!==bn)return!1;if(!Ae)return qI(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ev(t.type,t.memoizedProps)),e&&(e=_n)){if(Sv(t))throw DC(),Error(O(418));for(;e;)NC(t,e),e=Ki(e.nextSibling)}if(qI(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=bn?Ki(t.stateNode.nextSibling):null;return!0}function DC(){for(var t=_n;t;)t=Ki(t.nextSibling)}function rl(){_n=bn=null,Ae=!1}function zw(t){Xn===null?Xn=[t]:Xn.push(t)}var dF=mi.ReactCurrentBatchConfig;function Kn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $f=Ts(null),Ff=null,Pa=null,qw=null;function Ww(){qw=Pa=Ff=null}function Gw(t){var e=$f.current;Te($f),t._currentValue=e}function kv(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function za(t,e){Ff=t,qw=Pa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(qw!==t)if(t={context:t,memoizedValue:e,next:null},Pa===null){if(Ff===null)throw Error(O(308));Pa=t,Ff.dependencies={lanes:0,firstContext:t}}else Pa=Pa.next=t;return e}var no=null;function Hw(t){no===null?no=[t]:no.push(t)}function OC(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hw(e)):(n.next=i.next,i.next=n),e.interleaved=n,ai(t,r)}function ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Kw(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function LC(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ai(t,n)}return i=r.interleaved,i===null?(e.next=e,Hw(r)):(e.next=i.next,i.next=e),r.interleaved=e,ai(t,n)}function Qh(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dw(t,n)}}function WI(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uf(t,e,n,r){var i=t.updateQueue;Ni=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,m=a;switch(h=e,f=n,m.tag){case 1:if(p=m.payload,typeof p=="function"){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=m.payload,h=typeof p=="function"?p.call(f,d,h):p,h==null)break e;d=Me({},d,h);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);So|=o,t.lanes=o,t.memoizedState=d}}function GI(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var MC=new Ox.Component().refs;function xv(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gp={isMounted:function(t){return(t=t._reactInternals)?qo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=Xi(t),s=Xr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,i),e!==null&&(ir(e,t,i,r),Qh(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=Xi(t),s=Xr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,i),e!==null&&(ir(e,t,i,r),Qh(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),r=Xi(t),i=Xr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qi(t,i,r),e!==null&&(ir(e,t,r,n),Qh(e,t,r))}};function HI(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_c(n,r)||!_c(i,s):!0}function $C(t,e,n){var r=!1,i=as,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(i=dn(e)?_o:qt.current,r=e.contextTypes,s=(r=r!=null)?nl(t,i):as),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gp,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function KI(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gp.enqueueReplaceState(e,e.state,null)}function Cv(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=MC,Kw(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zn(s):(s=dn(e)?_o:qt.current,i.context=nl(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xv(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gp.enqueueReplaceState(i,i.state,null),Uf(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function au(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===MC&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function gh(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function QI(t){var e=t._init;return e(t._payload)}function FC(t){function e(v,g){if(t){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function n(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=Ji(v,g),v.index=0,v.sibling=null,v}function s(v,g,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,g,y,_){return g===null||g.tag!==6?(g=Yg(y,v.mode,_),g.return=v,g):(g=i(g,y),g.return=v,g)}function l(v,g,y,_){var I=y.type;return I===Ia?c(v,g,y.props.children,_,y.key):g!==null&&(g.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ri&&QI(I)===g.type)?(_=i(g,y.props),_.ref=au(v,g,y),_.return=v,_):(_=tf(y.type,y.key,y.props,null,v.mode,_),_.ref=au(v,g,y),_.return=v,_)}function u(v,g,y,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Xg(y,v.mode,_),g.return=v,g):(g=i(g,y.children||[]),g.return=v,g)}function c(v,g,y,_,I){return g===null||g.tag!==7?(g=po(y,v.mode,_,I),g.return=v,g):(g=i(g,y),g.return=v,g)}function d(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yg(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sh:return y=tf(g.type,g.key,g.props,null,v.mode,y),y.ref=au(v,null,g),y.return=v,y;case _a:return g=Xg(g,v.mode,y),g.return=v,g;case Ri:var _=g._init;return d(v,_(g._payload),y)}if(Cu(g)||nu(g))return g=po(g,v.mode,y,null),g.return=v,g;gh(v,g)}return null}function h(v,g,y,_){var I=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(v,g,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sh:return y.key===I?l(v,g,y,_):null;case _a:return y.key===I?u(v,g,y,_):null;case Ri:return I=y._init,h(v,g,I(y._payload),_)}if(Cu(y)||nu(y))return I!==null?null:c(v,g,y,_,null);gh(v,y)}return null}function f(v,g,y,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(y)||null,a(g,v,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sh:return v=v.get(_.key===null?y:_.key)||null,l(g,v,_,I);case _a:return v=v.get(_.key===null?y:_.key)||null,u(g,v,_,I);case Ri:var S=_._init;return f(v,g,y,S(_._payload),I)}if(Cu(_)||nu(_))return v=v.get(y)||null,c(g,v,_,I,null);gh(g,_)}return null}function p(v,g,y,_){for(var I=null,S=null,T=g,C=g=0,D=null;T!==null&&C<y.length;C++){T.index>C?(D=T,T=null):D=T.sibling;var R=h(v,T,y[C],_);if(R===null){T===null&&(T=D);break}t&&T&&R.alternate===null&&e(v,T),g=s(R,g,C),S===null?I=R:S.sibling=R,S=R,T=D}if(C===y.length)return n(v,T),Ae&&Vs(v,C),I;if(T===null){for(;C<y.length;C++)T=d(v,y[C],_),T!==null&&(g=s(T,g,C),S===null?I=T:S.sibling=T,S=T);return Ae&&Vs(v,C),I}for(T=r(v,T);C<y.length;C++)D=f(T,v,C,y[C],_),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?C:D.key),g=s(D,g,C),S===null?I=D:S.sibling=D,S=D);return t&&T.forEach(function(Y){return e(v,Y)}),Ae&&Vs(v,C),I}function m(v,g,y,_){var I=nu(y);if(typeof I!="function")throw Error(O(150));if(y=I.call(y),y==null)throw Error(O(151));for(var S=I=null,T=g,C=g=0,D=null,R=y.next();T!==null&&!R.done;C++,R=y.next()){T.index>C?(D=T,T=null):D=T.sibling;var Y=h(v,T,R.value,_);if(Y===null){T===null&&(T=D);break}t&&T&&Y.alternate===null&&e(v,T),g=s(Y,g,C),S===null?I=Y:S.sibling=Y,S=Y,T=D}if(R.done)return n(v,T),Ae&&Vs(v,C),I;if(T===null){for(;!R.done;C++,R=y.next())R=d(v,R.value,_),R!==null&&(g=s(R,g,C),S===null?I=R:S.sibling=R,S=R);return Ae&&Vs(v,C),I}for(T=r(v,T);!R.done;C++,R=y.next())R=f(T,v,C,R.value,_),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?C:R.key),g=s(R,g,C),S===null?I=R:S.sibling=R,S=R);return t&&T.forEach(function(se){return e(v,se)}),Ae&&Vs(v,C),I}function E(v,g,y,_){if(typeof y=="object"&&y!==null&&y.type===Ia&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case sh:e:{for(var I=y.key,S=g;S!==null;){if(S.key===I){if(I=y.type,I===Ia){if(S.tag===7){n(v,S.sibling),g=i(S,y.props.children),g.return=v,v=g;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ri&&QI(I)===S.type){n(v,S.sibling),g=i(S,y.props),g.ref=au(v,S,y),g.return=v,v=g;break e}n(v,S);break}else e(v,S);S=S.sibling}y.type===Ia?(g=po(y.props.children,v.mode,_,y.key),g.return=v,v=g):(_=tf(y.type,y.key,y.props,null,v.mode,_),_.ref=au(v,g,y),_.return=v,v=_)}return o(v);case _a:e:{for(S=y.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(v,g.sibling),g=i(g,y.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else e(v,g);g=g.sibling}g=Xg(y,v.mode,_),g.return=v,v=g}return o(v);case Ri:return S=y._init,E(v,g,S(y._payload),_)}if(Cu(y))return p(v,g,y,_);if(nu(y))return m(v,g,y,_);gh(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,y),g.return=v,v=g):(n(v,g),g=Yg(y,v.mode,_),g.return=v,v=g),o(v)):n(v,g)}return E}var il=FC(!0),UC=FC(!1),yd={},Ar=Ts(yd),bc=Ts(yd),kc=Ts(yd);function ro(t){if(t===yd)throw Error(O(174));return t}function Qw(t,e){switch(we(kc,e),we(bc,t),we(Ar,yd),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ov(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ov(e,t)}Te(Ar),we(Ar,e)}function sl(){Te(Ar),Te(bc),Te(kc)}function VC(t){ro(kc.current);var e=ro(Ar.current),n=ov(e,t.type);e!==n&&(we(bc,t),we(Ar,n))}function Yw(t){bc.current===t&&(Te(Ar),Te(bc))}var De=Ts(0);function Vf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qg=[];function Xw(){for(var t=0;t<qg.length;t++)qg[t]._workInProgressVersionPrimary=null;qg.length=0}var Yh=mi.ReactCurrentDispatcher,Wg=mi.ReactCurrentBatchConfig,To=0,Le=null,lt=null,mt=null,Bf=!1,Gu=!1,xc=0,hF=0;function Mt(){throw Error(O(321))}function Jw(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sr(t[n],e[n]))return!1;return!0}function Zw(t,e,n,r,i,s){if(To=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yh.current=t===null||t.memoizedState===null?gF:yF,t=n(r,i),Gu){s=0;do{if(Gu=!1,xc=0,25<=s)throw Error(O(301));s+=1,mt=lt=null,e.updateQueue=null,Yh.current=vF,t=n(r,i)}while(Gu)}if(Yh.current=jf,e=lt!==null&&lt.next!==null,To=0,mt=lt=Le=null,Bf=!1,e)throw Error(O(300));return t}function e1(){var t=xc!==0;return xc=0,t}function cr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Le.memoizedState=mt=t:mt=mt.next=t,mt}function qn(){if(lt===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=mt===null?Le.memoizedState:mt.next;if(e!==null)mt=e,lt=t;else{if(t===null)throw Error(O(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},mt===null?Le.memoizedState=mt=t:mt=mt.next=t}return mt}function Cc(t,e){return typeof e=="function"?e(t):e}function Gg(t){var e=qn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=lt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((To&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Le.lanes|=c,So|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,sr(r,e.memoizedState)||(an=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,So|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hg(t){var e=qn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sr(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function BC(){}function jC(t,e){var n=Le,r=qn(),i=e(),s=!sr(r.memoizedState,i);if(s&&(r.memoizedState=i,an=!0),r=r.queue,t1(WC.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,Ac(9,qC.bind(null,n,r,i,e),void 0,null),yt===null)throw Error(O(349));To&30||zC(n,e,i)}return i}function zC(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qC(t,e,n,r){e.value=n,e.getSnapshot=r,GC(e)&&HC(t)}function WC(t,e,n){return n(function(){GC(e)&&HC(t)})}function GC(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sr(t,n)}catch{return!0}}function HC(t){var e=ai(t,1);e!==null&&ir(e,t,1,-1)}function YI(t){var e=cr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cc,lastRenderedState:t},e.queue=t,t=t.dispatch=mF.bind(null,Le,t),[e.memoizedState,t]}function Ac(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function KC(){return qn().memoizedState}function Xh(t,e,n,r){var i=cr();Le.flags|=t,i.memoizedState=Ac(1|e,n,void 0,r===void 0?null:r)}function Hp(t,e,n,r){var i=qn();r=r===void 0?null:r;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,r!==null&&Jw(r,o.deps)){i.memoizedState=Ac(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ac(1|e,n,s,r)}function XI(t,e){return Xh(8390656,8,t,e)}function t1(t,e){return Hp(2048,8,t,e)}function QC(t,e){return Hp(4,2,t,e)}function YC(t,e){return Hp(4,4,t,e)}function XC(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function JC(t,e,n){return n=n!=null?n.concat([t]):null,Hp(4,4,XC.bind(null,e,t),n)}function n1(){}function ZC(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jw(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eA(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jw(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tA(t,e,n){return To&21?(sr(n,e)||(n=iC(),Le.lanes|=n,So|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function fF(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Wg.transition;Wg.transition={};try{t(!1),e()}finally{ye=n,Wg.transition=r}}function nA(){return qn().memoizedState}function pF(t,e,n){var r=Xi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rA(t))iA(e,n);else if(n=OC(t,e,n,r),n!==null){var i=Xt();ir(n,t,r,i),sA(n,e,r)}}function mF(t,e,n){var r=Xi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rA(t))iA(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,sr(a,o)){var l=e.interleaved;l===null?(i.next=i,Hw(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=OC(t,e,i,r),n!==null&&(i=Xt(),ir(n,t,r,i),sA(n,e,r))}}function rA(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function iA(t,e){Gu=Bf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sA(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dw(t,n)}}var jf={readContext:zn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},gF={readContext:zn,useCallback:function(t,e){return cr().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:XI,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xh(4194308,4,XC.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xh(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xh(4,2,t,e)},useMemo:function(t,e){var n=cr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pF.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=cr();return t={current:t},e.memoizedState=t},useState:YI,useDebugValue:n1,useDeferredValue:function(t){return cr().memoizedState=t},useTransition:function(){var t=YI(!1),e=t[0];return t=fF.bind(null,t[1]),cr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=cr();if(Ae){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),yt===null)throw Error(O(349));To&30||zC(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,XI(WC.bind(null,r,s,t),[t]),r.flags|=2048,Ac(9,qC.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cr(),e=yt.identifierPrefix;if(Ae){var n=Gr,r=Wr;n=(r&~(1<<32-rr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xc++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hF++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yF={readContext:zn,useCallback:ZC,useContext:zn,useEffect:t1,useImperativeHandle:JC,useInsertionEffect:QC,useLayoutEffect:YC,useMemo:eA,useReducer:Gg,useRef:KC,useState:function(){return Gg(Cc)},useDebugValue:n1,useDeferredValue:function(t){var e=qn();return tA(e,lt.memoizedState,t)},useTransition:function(){var t=Gg(Cc)[0],e=qn().memoizedState;return[t,e]},useMutableSource:BC,useSyncExternalStore:jC,useId:nA,unstable_isNewReconciler:!1},vF={readContext:zn,useCallback:ZC,useContext:zn,useEffect:t1,useImperativeHandle:JC,useInsertionEffect:QC,useLayoutEffect:YC,useMemo:eA,useReducer:Hg,useRef:KC,useState:function(){return Hg(Cc)},useDebugValue:n1,useDeferredValue:function(t){var e=qn();return lt===null?e.memoizedState=t:tA(e,lt.memoizedState,t)},useTransition:function(){var t=Hg(Cc)[0],e=qn().memoizedState;return[t,e]},useMutableSource:BC,useSyncExternalStore:jC,useId:nA,unstable_isNewReconciler:!1};function ol(t,e){try{var n="",r=e;do n+=GM(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kg(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Av(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wF=typeof WeakMap=="function"?WeakMap:Map;function oA(t,e,n){n=Xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qf||(qf=!0,Uv=r),Av(t,e)},n}function aA(t,e,n){n=Xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Av(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Av(t,e),typeof r!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function JI(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wF;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DF.bind(null,t,e,n),e.then(t,t))}function ZI(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eT(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xr(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t)}var EF=mi.ReactCurrentOwner,an=!1;function Ht(t,e,n,r){e.child=t===null?UC(e,null,n,r):il(e,t.child,n,r)}function tT(t,e,n,r,i){n=n.render;var s=e.ref;return za(e,i),r=Zw(t,e,n,r,s,i),n=e1(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,li(t,e,i)):(Ae&&n&&Bw(e),e.flags|=1,Ht(t,e,r,i),e.child)}function nT(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!c1(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lA(t,e,s,r,i)):(t=tf(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_c,n(o,r)&&t.ref===e.ref)return li(t,e,i)}return e.flags|=1,t=Ji(s,r),t.ref=e.ref,t.return=e,e.child=t}function lA(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_c(s,r)&&t.ref===e.ref)if(an=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,li(t,e,i)}return Pv(t,e,n,r,i)}function uA(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Na,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Na,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Na,yn),yn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Na,yn),yn|=r;return Ht(t,e,i,n),e.child}function cA(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pv(t,e,n,r,i){var s=dn(n)?_o:qt.current;return s=nl(e,s),za(e,i),n=Zw(t,e,n,r,s,i),r=e1(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,li(t,e,i)):(Ae&&r&&Bw(e),e.flags|=1,Ht(t,e,n,i),e.child)}function rT(t,e,n,r,i){if(dn(n)){var s=!0;Of(e)}else s=!1;if(za(e,i),e.stateNode===null)Jh(t,e),$C(e,n,r),Cv(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=dn(n)?_o:qt.current,u=nl(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&KI(e,o,r,u),Ni=!1;var h=e.memoizedState;o.state=h,Uf(e,r,o,i),l=e.memoizedState,a!==r||h!==l||cn.current||Ni?(typeof c=="function"&&(xv(e,n,c,r),l=e.memoizedState),(a=Ni||HI(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,LC(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=dn(n)?_o:qt.current,l=nl(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&KI(e,o,r,l),Ni=!1,h=e.memoizedState,o.state=h,Uf(e,r,o,i);var p=e.memoizedState;a!==d||h!==p||cn.current||Ni?(typeof f=="function"&&(xv(e,n,f,r),p=e.memoizedState),(u=Ni||HI(e,n,u,r,h,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Rv(t,e,n,r,s,i)}function Rv(t,e,n,r,i,s){cA(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jI(e,n,!1),li(t,e,s);r=e.stateNode,EF.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=il(e,t.child,null,s),e.child=il(e,null,a,s)):Ht(t,e,a,s),e.memoizedState=r.state,i&&jI(e,n,!0),e.child}function dA(t){var e=t.stateNode;e.pendingContext?BI(t,e.pendingContext,e.pendingContext!==e.context):e.context&&BI(t,e.context,!1),Qw(t,e.containerInfo)}function iT(t,e,n,r,i){return rl(),zw(i),e.flags|=256,Ht(t,e,n,r),e.child}var Nv={dehydrated:null,treeContext:null,retryLane:0};function Dv(t){return{baseLanes:t,cachePool:null,transitions:null}}function hA(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(De,i&1),t===null)return bv(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yp(o,r,0,null),t=po(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dv(n),e.memoizedState=Nv,t):r1(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _F(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ji(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=po(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Dv(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nv,r}return s=t.child,t=s.sibling,r=Ji(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function r1(t,e){return e=Yp({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yh(t,e,n,r){return r!==null&&zw(r),il(e,t.child,null,n),t=r1(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _F(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kg(Error(O(422))),yh(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yp({mode:"visible",children:r.children},i,0,null),s=po(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&il(e,t.child,null,o),e.child.memoizedState=Dv(o),e.memoizedState=Nv,s);if(!(e.mode&1))return yh(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Kg(s,r,void 0),yh(t,e,o,r)}if(a=(o&t.childLanes)!==0,an||a){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ai(t,i),ir(r,t,i,-1))}return u1(),r=Kg(Error(O(421))),yh(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OF.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_n=Ki(i.nextSibling),bn=e,Ae=!0,Xn=null,t!==null&&($n[Fn++]=Wr,$n[Fn++]=Gr,$n[Fn++]=Io,Wr=t.id,Gr=t.overflow,Io=e),e=r1(e,r.children),e.flags|=4096,e)}function sT(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kv(t.return,e,n)}function Qg(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fA(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ht(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sT(t,n,e);else if(t.tag===19)sT(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vf(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qg(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vf(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qg(e,!0,n,null,s);break;case"together":Qg(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),So|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IF(t,e,n){switch(e.tag){case 3:dA(e),rl();break;case 5:VC(e);break;case 1:dn(e.type)&&Of(e);break;case 4:Qw(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we($f,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?hA(t,e,n):(we(De,De.current&1),t=li(t,e,n),t!==null?t.sibling:null);we(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fA(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,uA(t,e,n)}return li(t,e,n)}var pA,Ov,mA,gA;pA=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ov=function(){};mA=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ro(Ar.current);var s=null;switch(n){case"input":i=nv(t,i),r=nv(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=sv(t,i),r=sv(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nf)}av(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pc.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pc.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gA=function(t,e,n,r){n!==r&&(e.flags|=4)};function lu(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TF(t,e,n){var r=e.pendingProps;switch(jw(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return dn(e.type)&&Df(),$t(e),null;case 3:return r=e.stateNode,sl(),Te(cn),Te(qt),Xw(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mh(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(jv(Xn),Xn=null))),Ov(t,e),$t(e),null;case 5:Yw(e);var i=ro(kc.current);if(n=e.type,t!==null&&e.stateNode!=null)mA(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return $t(e),null}if(t=ro(Ar.current),mh(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mr]=e,r[Sc]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Pu.length;i++)Ee(Pu[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":pI(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":gI(r,s),Ee("invalid",r)}av(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ph(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ph(r.textContent,a,t),i=["children",""+a]):pc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":oh(r),mI(r,s,!0);break;case"textarea":oh(r),yI(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Nf)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mr]=e,t[Sc]=r,pA(t,e,!1,!1),e.stateNode=t;e:{switch(o=lv(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Pu.length;i++)Ee(Pu[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":pI(t,r),i=nv(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":gI(t,r),i=sv(t,r),Ee("invalid",t);break;default:i=r}av(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mc(t,l):typeof l=="number"&&mc(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&xw(t,s,l,o))}switch(n){case"input":oh(t),mI(t,r,!1);break;case"textarea":oh(t),yI(t);break;case"option":r.value!=null&&t.setAttribute("value",""+os(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ua(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ua(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Nf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)gA(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=ro(kc.current),ro(Ar.current),mh(e)){if(r=e.stateNode,n=e.memoizedProps,r[mr]=e,(s=r.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:ph(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ph(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mr]=e,e.stateNode=r}return $t(e),null;case 13:if(Te(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&_n!==null&&e.mode&1&&!(e.flags&128))DC(),rl(),e.flags|=98560,s=!1;else if(s=mh(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[mr]=e}else rl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Xn!==null&&(jv(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?ut===0&&(ut=3):u1())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return sl(),Ov(t,e),t===null&&Ic(e.stateNode.containerInfo),$t(e),null;case 10:return Gw(e.type._context),$t(e),null;case 17:return dn(e.type)&&Df(),$t(e),null;case 19:if(Te(De),s=e.memoizedState,s===null)return $t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)lu(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vf(t),o!==null){for(e.flags|=128,lu(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&Qe()>al&&(e.flags|=128,r=!0,lu(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vf(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return $t(e),null}else 2*Qe()-s.renderingStartTime>al&&n!==1073741824&&(e.flags|=128,r=!0,lu(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,n=De.current,we(De,r?n&1|2:n&1),e):($t(e),null);case 22:case 23:return l1(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function SF(t,e){switch(jw(e),e.tag){case 1:return dn(e.type)&&Df(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sl(),Te(cn),Te(qt),Xw(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yw(e),null;case 13:if(Te(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));rl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(De),null;case 4:return sl(),null;case 10:return Gw(e.type._context),null;case 22:case 23:return l1(),null;case 24:return null;default:return null}}var vh=!1,Bt=!1,bF=typeof WeakSet=="function"?WeakSet:Set,j=null;function Ra(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Lv(t,e,n){try{n()}catch(r){je(t,e,r)}}var oT=!1;function kF(t,e){if(vv=Af,t=EC(),Vw(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wv={focusedElem:t,selectionRange:n},Af=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var m=p.memoizedProps,E=p.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?m:Kn(e.type,m),E);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(_){je(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return p=oT,oT=!1,p}function Hu(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lv(e,n,s)}i=i.next}while(i!==r)}}function Kp(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mv(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yA(t){var e=t.alternate;e!==null&&(t.alternate=null,yA(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mr],delete e[Sc],delete e[Iv],delete e[lF],delete e[uF])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vA(t){return t.tag===5||t.tag===3||t.tag===4}function aT(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vA(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $v(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nf));else if(r!==4&&(t=t.child,t!==null))for($v(t,e,n),t=t.sibling;t!==null;)$v(t,e,n),t=t.sibling}function Fv(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fv(t,e,n),t=t.sibling;t!==null;)Fv(t,e,n),t=t.sibling}var St=null,Yn=!1;function bi(t,e,n){for(n=n.child;n!==null;)wA(t,e,n),n=n.sibling}function wA(t,e,n){if(Cr&&typeof Cr.onCommitFiberUnmount=="function")try{Cr.onCommitFiberUnmount(Vp,n)}catch{}switch(n.tag){case 5:Bt||Ra(n,e);case 6:var r=St,i=Yn;St=null,bi(t,e,n),St=r,Yn=i,St!==null&&(Yn?(t=St,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):St.removeChild(n.stateNode));break;case 18:St!==null&&(Yn?(t=St,n=n.stateNode,t.nodeType===8?jg(t.parentNode,n):t.nodeType===1&&jg(t,n),wc(t)):jg(St,n.stateNode));break;case 4:r=St,i=Yn,St=n.stateNode.containerInfo,Yn=!0,bi(t,e,n),St=r,Yn=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lv(n,e,o),i=i.next}while(i!==r)}bi(t,e,n);break;case 1:if(!Bt&&(Ra(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Bt=(r=Bt)||n.memoizedState!==null,bi(t,e,n),Bt=r):bi(t,e,n);break;default:bi(t,e,n)}}function lT(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bF),e.forEach(function(r){var i=LF.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:St=a.stateNode,Yn=!1;break e;case 3:St=a.stateNode.containerInfo,Yn=!0;break e;case 4:St=a.stateNode.containerInfo,Yn=!0;break e}a=a.return}if(St===null)throw Error(O(160));wA(s,o,i),St=null,Yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)EA(e,t),e=e.sibling}function EA(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ur(t),r&4){try{Hu(3,t,t.return),Kp(3,t)}catch(m){je(t,t.return,m)}try{Hu(5,t,t.return)}catch(m){je(t,t.return,m)}}break;case 1:Hn(e,t),ur(t),r&512&&n!==null&&Ra(n,n.return);break;case 5:if(Hn(e,t),ur(t),r&512&&n!==null&&Ra(n,n.return),t.flags&32){var i=t.stateNode;try{mc(i,"")}catch(m){je(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bx(i,s),lv(a,o);var u=lv(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Gx(i,d):c==="dangerouslySetInnerHTML"?qx(i,d):c==="children"?mc(i,d):xw(i,c,d,u)}switch(a){case"input":rv(i,s);break;case"textarea":jx(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ua(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ua(i,!!s.multiple,s.defaultValue,!0):Ua(i,!!s.multiple,s.multiple?[]:"",!1))}i[Sc]=s}catch(m){je(t,t.return,m)}}break;case 6:if(Hn(e,t),ur(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(m){je(t,t.return,m)}}break;case 3:if(Hn(e,t),ur(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wc(e.containerInfo)}catch(m){je(t,t.return,m)}break;case 4:Hn(e,t),ur(t);break;case 13:Hn(e,t),ur(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(o1=Qe())),r&4&&lT(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||c,Hn(e,t),Bt=u):Hn(e,t),ur(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(d=j=c;j!==null;){switch(h=j,f=h.child,h.tag){case 0:case 11:case 14:case 15:Hu(4,h,h.return);break;case 1:Ra(h,h.return);var p=h.stateNode;if(typeof p.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(m){je(r,n,m)}}break;case 5:Ra(h,h.return);break;case 22:if(h.memoizedState!==null){cT(d);continue}}f!==null?(f.return=h,j=f):cT(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wx("display",o))}catch(m){je(t,t.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){je(t,t.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(e,t),ur(t),r&4&&lT(t);break;case 21:break;default:Hn(e,t),ur(t)}}function ur(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vA(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mc(i,""),r.flags&=-33);var s=aT(t);Fv(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=aT(t);$v(t,a,o);break;default:throw Error(O(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xF(t,e,n){j=t,_A(t)}function _A(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vh;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=vh;var u=Bt;if(vh=o,(Bt=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?dT(i):l!==null?(l.return=o,j=l):dT(i);for(;s!==null;)j=s,_A(s),s=s.sibling;j=i,vh=a,Bt=u}uT(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):uT(t)}}function uT(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Kp(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&GI(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}GI(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&wc(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Bt||e.flags&512&&Mv(e)}catch(h){je(e,e.return,h)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function cT(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function dT(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kp(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{Mv(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{Mv(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var CF=Math.ceil,zf=mi.ReactCurrentDispatcher,i1=mi.ReactCurrentOwner,jn=mi.ReactCurrentBatchConfig,ce=0,yt=null,it=null,Ct=0,yn=0,Na=Ts(0),ut=0,Pc=null,So=0,Qp=0,s1=0,Ku=null,on=null,o1=0,al=1/0,zr=null,qf=!1,Uv=null,Yi=null,wh=!1,Bi=null,Wf=0,Qu=0,Vv=null,Zh=-1,ef=0;function Xt(){return ce&6?Qe():Zh!==-1?Zh:Zh=Qe()}function Xi(t){return t.mode&1?ce&2&&Ct!==0?Ct&-Ct:dF.transition!==null?(ef===0&&(ef=iC()),ef):(t=ye,t!==0||(t=window.event,t=t===void 0?16:dC(t.type)),t):1}function ir(t,e,n,r){if(50<Qu)throw Qu=0,Vv=null,Error(O(185));pd(t,n,r),(!(ce&2)||t!==yt)&&(t===yt&&(!(ce&2)&&(Qp|=n),ut===4&&Li(t,Ct)),hn(t,r),n===1&&ce===0&&!(e.mode&1)&&(al=Qe()+500,Wp&&Ss()))}function hn(t,e){var n=t.callbackNode;d$(t,e);var r=Cf(t,t===yt?Ct:0);if(r===0)n!==null&&EI(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&EI(n),e===1)t.tag===0?cF(hT.bind(null,t)):PC(hT.bind(null,t)),oF(function(){!(ce&6)&&Ss()}),n=null;else{switch(sC(r)){case 1:n=Nw;break;case 4:n=nC;break;case 16:n=xf;break;case 536870912:n=rC;break;default:n=xf}n=AA(n,IA.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function IA(t,e){if(Zh=-1,ef=0,ce&6)throw Error(O(327));var n=t.callbackNode;if(qa()&&t.callbackNode!==n)return null;var r=Cf(t,t===yt?Ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Gf(t,r);else{e=r;var i=ce;ce|=2;var s=SA();(yt!==t||Ct!==e)&&(zr=null,al=Qe()+500,fo(t,e));do try{RF();break}catch(a){TA(t,a)}while(1);Ww(),zf.current=s,ce=i,it!==null?e=0:(yt=null,Ct=0,e=ut)}if(e!==0){if(e===2&&(i=fv(t),i!==0&&(r=i,e=Bv(t,i))),e===1)throw n=Pc,fo(t,0),Li(t,r),hn(t,Qe()),n;if(e===6)Li(t,r);else{if(i=t.current.alternate,!(r&30)&&!AF(i)&&(e=Gf(t,r),e===2&&(s=fv(t),s!==0&&(r=s,e=Bv(t,s))),e===1))throw n=Pc,fo(t,0),Li(t,r),hn(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:Bs(t,on,zr);break;case 3:if(Li(t,r),(r&130023424)===r&&(e=o1+500-Qe(),10<e)){if(Cf(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_v(Bs.bind(null,t,on,zr),e);break}Bs(t,on,zr);break;case 4:if(Li(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CF(r/1960))-r,10<r){t.timeoutHandle=_v(Bs.bind(null,t,on,zr),r);break}Bs(t,on,zr);break;case 5:Bs(t,on,zr);break;default:throw Error(O(329))}}}return hn(t,Qe()),t.callbackNode===n?IA.bind(null,t):null}function Bv(t,e){var n=Ku;return t.current.memoizedState.isDehydrated&&(fo(t,e).flags|=256),t=Gf(t,e),t!==2&&(e=on,on=n,e!==null&&jv(e)),t}function jv(t){on===null?on=t:on.push.apply(on,t)}function AF(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~s1,e&=~Qp,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rr(e),r=1<<n;t[n]=-1,e&=~r}}function hT(t){if(ce&6)throw Error(O(327));qa();var e=Cf(t,0);if(!(e&1))return hn(t,Qe()),null;var n=Gf(t,e);if(t.tag!==0&&n===2){var r=fv(t);r!==0&&(e=r,n=Bv(t,r))}if(n===1)throw n=Pc,fo(t,0),Li(t,e),hn(t,Qe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bs(t,on,zr),hn(t,Qe()),null}function a1(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(al=Qe()+500,Wp&&Ss())}}function bo(t){Bi!==null&&Bi.tag===0&&!(ce&6)&&qa();var e=ce;ce|=1;var n=jn.transition,r=ye;try{if(jn.transition=null,ye=1,t)return t()}finally{ye=r,jn.transition=n,ce=e,!(ce&6)&&Ss()}}function l1(){yn=Na.current,Te(Na)}function fo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sF(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(jw(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Df();break;case 3:sl(),Te(cn),Te(qt),Xw();break;case 5:Yw(r);break;case 4:sl();break;case 13:Te(De);break;case 19:Te(De);break;case 10:Gw(r.type._context);break;case 22:case 23:l1()}n=n.return}if(yt=t,it=t=Ji(t.current,null),Ct=yn=e,ut=0,Pc=null,s1=Qp=So=0,on=Ku=null,no!==null){for(e=0;e<no.length;e++)if(n=no[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}no=null}return t}function TA(t,e){do{var n=it;try{if(Ww(),Yh.current=jf,Bf){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bf=!1}if(To=0,mt=lt=Le=null,Gu=!1,xc=0,i1.current=null,n===null||n.return===null){ut=1,Pc=e,it=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=ZI(o);if(f!==null){f.flags&=-257,eT(f,o,a,s,e),f.mode&1&&JI(s,u,e),e=f,l=u;var p=e.updateQueue;if(p===null){var m=new Set;m.add(l),e.updateQueue=m}else p.add(l);break e}else{if(!(e&1)){JI(s,u,e),u1();break e}l=Error(O(426))}}else if(Ae&&a.mode&1){var E=ZI(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),eT(E,o,a,s,e),zw(ol(l,a));break e}}s=l=ol(l,a),ut!==4&&(ut=2),Ku===null?Ku=[s]:Ku.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=oA(s,l,e);WI(s,v);break e;case 1:a=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Yi===null||!Yi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=aA(s,a,e);WI(s,_);break e}}s=s.return}while(s!==null)}kA(n)}catch(I){e=I,it===n&&n!==null&&(it=n=n.return);continue}break}while(1)}function SA(){var t=zf.current;return zf.current=jf,t===null?jf:t}function u1(){(ut===0||ut===3||ut===2)&&(ut=4),yt===null||!(So&268435455)&&!(Qp&268435455)||Li(yt,Ct)}function Gf(t,e){var n=ce;ce|=2;var r=SA();(yt!==t||Ct!==e)&&(zr=null,fo(t,e));do try{PF();break}catch(i){TA(t,i)}while(1);if(Ww(),ce=n,zf.current=r,it!==null)throw Error(O(261));return yt=null,Ct=0,ut}function PF(){for(;it!==null;)bA(it)}function RF(){for(;it!==null&&!n$();)bA(it)}function bA(t){var e=CA(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?kA(t):it=e,i1.current=null}function kA(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SF(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,it=null;return}}else if(n=TF(n,e,yn),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);ut===0&&(ut=5)}function Bs(t,e,n){var r=ye,i=jn.transition;try{jn.transition=null,ye=1,NF(t,e,n,r)}finally{jn.transition=i,ye=r}return null}function NF(t,e,n,r){do qa();while(Bi!==null);if(ce&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(h$(t,s),t===yt&&(it=yt=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wh||(wh=!0,AA(xf,function(){return qa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=ye;ye=1;var a=ce;ce|=4,i1.current=null,kF(t,n),EA(n,t),J$(wv),Af=!!vv,wv=vv=null,t.current=n,xF(n),r$(),ce=a,ye=o,jn.transition=s}else t.current=n;if(wh&&(wh=!1,Bi=t,Wf=i),s=t.pendingLanes,s===0&&(Yi=null),o$(n.stateNode),hn(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qf)throw qf=!1,t=Uv,Uv=null,t;return Wf&1&&t.tag!==0&&qa(),s=t.pendingLanes,s&1?t===Vv?Qu++:(Qu=0,Vv=t):Qu=0,Ss(),null}function qa(){if(Bi!==null){var t=sC(Wf),e=jn.transition,n=ye;try{if(jn.transition=null,ye=16>t?16:t,Bi===null)var r=!1;else{if(t=Bi,Bi=null,Wf=0,ce&6)throw Error(O(331));var i=ce;for(ce|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Hu(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var h=c.sibling,f=c.return;if(yA(c),c===u){j=null;break}if(h!==null){h.return=f,j=h;break}j=f}}}var p=s.alternate;if(p!==null){var m=p.child;if(m!==null){p.child=null;do{var E=m.sibling;m.sibling=null,m=E}while(m!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hu(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,j=v;break e}j=s.return}}var g=t.current;for(j=g;j!==null;){o=j;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,j=y;else e:for(o=g;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kp(9,a)}}catch(I){je(a,a.return,I)}if(a===o){j=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,j=_;break e}j=a.return}}if(ce=i,Ss(),Cr&&typeof Cr.onPostCommitFiberRoot=="function")try{Cr.onPostCommitFiberRoot(Vp,t)}catch{}r=!0}return r}finally{ye=n,jn.transition=e}}return!1}function fT(t,e,n){e=ol(n,e),e=oA(t,e,1),t=Qi(t,e,1),e=Xt(),t!==null&&(pd(t,1,e),hn(t,e))}function je(t,e,n){if(t.tag===3)fT(t,t,n);else for(;e!==null;){if(e.tag===3){fT(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yi===null||!Yi.has(r))){t=ol(n,t),t=aA(e,t,1),e=Qi(e,t,1),t=Xt(),e!==null&&(pd(e,1,t),hn(e,t));break}}e=e.return}}function DF(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(Ct&n)===n&&(ut===4||ut===3&&(Ct&130023424)===Ct&&500>Qe()-o1?fo(t,0):s1|=n),hn(t,e)}function xA(t,e){e===0&&(t.mode&1?(e=uh,uh<<=1,!(uh&130023424)&&(uh=4194304)):e=1);var n=Xt();t=ai(t,e),t!==null&&(pd(t,e,n),hn(t,n))}function OF(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xA(t,n)}function LF(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),xA(t,n)}var CA;CA=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,IF(t,e,n);an=!!(t.flags&131072)}else an=!1,Ae&&e.flags&1048576&&RC(e,Mf,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jh(t,e),t=e.pendingProps;var i=nl(e,qt.current);za(e,n),i=Zw(null,e,r,t,i,n);var s=e1();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(s=!0,Of(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kw(e),i.updater=Gp,e.stateNode=i,i._reactInternals=e,Cv(e,r,t,n),e=Rv(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Bw(e),Ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jh(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$F(r),t=Kn(r,t),i){case 0:e=Pv(null,e,r,t,n);break e;case 1:e=rT(null,e,r,t,n);break e;case 11:e=tT(null,e,r,t,n);break e;case 14:e=nT(null,e,r,Kn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Pv(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),rT(t,e,r,i,n);case 3:e:{if(dA(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,LC(t,e),Uf(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ol(Error(O(423)),e),e=iT(t,e,r,n,i);break e}else if(r!==i){i=ol(Error(O(424)),e),e=iT(t,e,r,n,i);break e}else for(_n=Ki(e.stateNode.containerInfo.firstChild),bn=e,Ae=!0,Xn=null,n=UC(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rl(),r===i){e=li(t,e,n);break e}Ht(t,e,r,n)}e=e.child}return e;case 5:return VC(e),t===null&&bv(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ev(r,i)?o=null:s!==null&&Ev(r,s)&&(e.flags|=32),cA(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&bv(e),null;case 13:return hA(t,e,n);case 4:return Qw(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=il(e,null,r,n):Ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),tT(t,e,r,i,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we($f,r._currentValue),r._currentValue=o,s!==null)if(sr(s.value,o)){if(s.children===i.children&&!cn.current){e=li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kv(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kv(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,za(e,n),i=zn(i),r=r(i),e.flags|=1,Ht(t,e,r,n),e.child;case 14:return r=e.type,i=Kn(r,e.pendingProps),i=Kn(r.type,i),nT(t,e,r,i,n);case 15:return lA(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Jh(t,e),e.tag=1,dn(r)?(t=!0,Of(e)):t=!1,za(e,n),$C(e,r,i),Cv(e,r,i,n),Rv(null,e,r,!0,t,n);case 19:return fA(t,e,n);case 22:return uA(t,e,n)}throw Error(O(156,e.tag))};function AA(t,e){return tC(t,e)}function MF(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,r){return new MF(t,e,n,r)}function c1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $F(t){if(typeof t=="function")return c1(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Aw)return 11;if(t===Pw)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tf(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")c1(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ia:return po(n.children,i,s,e);case Cw:o=8,i|=8;break;case Jy:return t=Vn(12,n,e,i|2),t.elementType=Jy,t.lanes=s,t;case Zy:return t=Vn(13,n,e,i),t.elementType=Zy,t.lanes=s,t;case ev:return t=Vn(19,n,e,i),t.elementType=ev,t.lanes=s,t;case Fx:return Yp(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mx:o=10;break e;case $x:o=9;break e;case Aw:o=11;break e;case Pw:o=14;break e;case Ri:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function po(t,e,n,r){return t=Vn(7,t,r,e),t.lanes=n,t}function Yp(t,e,n,r){return t=Vn(22,t,r,e),t.elementType=Fx,t.lanes=n,t.stateNode={isHidden:!1},t}function Yg(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Xg(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FF(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rg(0),this.expirationTimes=Rg(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rg(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function d1(t,e,n,r,i,s,o,a,l){return t=new FF(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kw(s),t}function UF(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_a,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function PA(t){if(!t)return as;t=t._reactInternals;e:{if(qo(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(dn(n))return AC(t,n,e)}return e}function RA(t,e,n,r,i,s,o,a,l){return t=d1(n,r,!0,t,i,s,o,a,l),t.context=PA(null),n=t.current,r=Xt(),i=Xi(n),s=Xr(r,i),s.callback=e??null,Qi(n,s,i),t.current.lanes=i,pd(t,i,r),hn(t,r),t}function Xp(t,e,n,r){var i=e.current,s=Xt(),o=Xi(i);return n=PA(n),e.context===null?e.context=n:e.pendingContext=n,e=Xr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qi(i,e,o),t!==null&&(ir(t,i,o,s),Qh(t,i,o)),o}function Hf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pT(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function h1(t,e){pT(t,e),(t=t.alternate)&&pT(t,e)}function VF(){return null}var NA=typeof reportError=="function"?reportError:function(t){console.error(t)};function f1(t){this._internalRoot=t}Jp.prototype.render=f1.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Xp(t,e,null,null)};Jp.prototype.unmount=f1.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bo(function(){Xp(null,t,null,null)}),e[oi]=null}};function Jp(t){this._internalRoot=t}Jp.prototype.unstable_scheduleHydration=function(t){if(t){var e=lC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&cC(t)}};function p1(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mT(){}function BF(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Hf(o);s.call(u)}}var o=RA(e,r,t,0,null,!1,!1,"",mT);return t._reactRootContainer=o,t[oi]=o.current,Ic(t.nodeType===8?t.parentNode:t),bo(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Hf(l);a.call(u)}}var l=d1(t,0,!1,null,null,!1,!1,"",mT);return t._reactRootContainer=l,t[oi]=l.current,Ic(t.nodeType===8?t.parentNode:t),bo(function(){Xp(e,l,n,r)}),l}function em(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Hf(o);a.call(l)}}Xp(e,o,t,i)}else o=BF(n,e,t,i,r);return Hf(o)}oC=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Au(e.pendingLanes);n!==0&&(Dw(e,n|1),hn(e,Qe()),!(ce&6)&&(al=Qe()+500,Ss()))}break;case 13:bo(function(){var r=ai(t,1);if(r!==null){var i=Xt();ir(r,t,1,i)}}),h1(t,1)}};Ow=function(t){if(t.tag===13){var e=ai(t,134217728);if(e!==null){var n=Xt();ir(e,t,134217728,n)}h1(t,134217728)}};aC=function(t){if(t.tag===13){var e=Xi(t),n=ai(t,e);if(n!==null){var r=Xt();ir(n,t,e,r)}h1(t,e)}};lC=function(){return ye};uC=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};cv=function(t,e,n){switch(e){case"input":if(rv(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qp(r);if(!i)throw Error(O(90));Vx(r),rv(r,i)}}}break;case"textarea":jx(t,n);break;case"select":e=n.value,e!=null&&Ua(t,!!n.multiple,e,!1)}};Qx=a1;Yx=bo;var jF={usingClientEntryPoint:!1,Events:[gd,ka,qp,Hx,Kx,a1]},uu={findFiberByHostInstance:to,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zF={bundleType:uu.bundleType,version:uu.version,rendererPackageName:uu.rendererPackageName,rendererConfig:uu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zx(t),t===null?null:t.stateNode},findFiberByHostInstance:uu.findFiberByHostInstance||VF,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eh.isDisabled&&Eh.supportsFiber)try{Vp=Eh.inject(zF),Cr=Eh}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jF;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p1(e))throw Error(O(200));return UF(t,e,null,n)};Dn.createRoot=function(t,e){if(!p1(t))throw Error(O(299));var n=!1,r="",i=NA;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=d1(t,1,!1,null,null,n,!1,r,i),t[oi]=e.current,Ic(t.nodeType===8?t.parentNode:t),new f1(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=Zx(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return bo(t)};Dn.hydrate=function(t,e,n){if(!Zp(e))throw Error(O(200));return em(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!p1(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=NA;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=RA(e,null,t,1,n??null,i,!1,s,o),t[oi]=e.current,Ic(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jp(e)};Dn.render=function(t,e,n){if(!Zp(e))throw Error(O(200));return em(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!Zp(t))throw Error(O(40));return t._reactRootContainer?(bo(function(){em(null,null,t,!1,function(){t._reactRootContainer=null,t[oi]=null})}),!0):!1};Dn.unstable_batchedUpdates=a1;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zp(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return em(t,e,n,!1,r)};Dn.version="18.2.0-next-9e3b772b8-20220608";function DA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(DA)}catch(t){console.error(t)}}DA(),Rx.exports=Dn;var m1=Rx.exports;const _h=Ex(m1);var gT=m1;Yy.createRoot=gT.createRoot,Yy.hydrateRoot=gT.hydrateRoot;const qF="modulepreload",WF=function(t){return"https://Balanss.github.io/Squarelion/"+t},yT={},Wo=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=WF(s),s in yT)return;yT[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":qF,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rc(){return Rc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rc.apply(this,arguments)}var ji;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ji||(ji={}));const vT="popstate";function GF(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Go(i.location.hash.substr(1));return zv("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Kf(s))}function r(i,s){tm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return KF(e,n,r,t)}function st(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HF(){return Math.random().toString(36).substr(2,8)}function wT(t,e){return{usr:t.state,key:t.key,idx:e}}function zv(t,e,n,r){return n===void 0&&(n=null),Rc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Go(e):e,{state:n,key:e&&e.key||r||HF()})}function Kf(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Go(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function KF(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ji.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Rc({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=ji.Pop;let E=c(),v=E==null?null:E-u;u=E,l&&l({action:a,location:m.location,delta:v})}function h(E,v){a=ji.Push;let g=zv(m.location,E,v);n&&n(g,E),u=c()+1;let y=wT(g,u),_=m.createHref(g);try{o.pushState(y,"",_)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(_)}s&&l&&l({action:a,location:m.location,delta:1})}function f(E,v){a=ji.Replace;let g=zv(m.location,E,v);n&&n(g,E),u=c();let y=wT(g,u),_=m.createHref(g);o.replaceState(y,"",_),s&&l&&l({action:a,location:m.location,delta:0})}function p(E){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof E=="string"?E:Kf(E);return st(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let m={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vT,d),l=E,()=>{i.removeEventListener(vT,d),l=null}},createHref(E){return e(i,E)},createURL:p,encodeLocation(E){let v=p(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:f,go(E){return o.go(E)}};return m}var ET;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ET||(ET={}));function QF(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Go(e):e,i=g1(r.pathname||"/",n);if(i==null)return null;let s=OA(t);YF(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=sU(s[a],lU(i));return o}function OA(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(st(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zi([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(st(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),OA(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:rU(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of LA(s.path))i(s,o,l)}),e}function LA(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=LA(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function YF(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:iU(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XF=/^:\w+$/,JF=3,ZF=2,eU=1,tU=10,nU=-2,_T=t=>t==="*";function rU(t,e){let n=t.split("/"),r=n.length;return n.some(_T)&&(r+=nU),e&&(r+=ZF),n.filter(i=>!_T(i)).reduce((i,s)=>i+(XF.test(s)?JF:s===""?eU:tU),r)}function iU(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function sU(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=oU({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Zi([i,c.pathname]),pathnameBase:hU(Zi([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Zi([i,c.pathnameBase]))}return s}function oU(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aU(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=uU(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function aU(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),tm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lU(t){try{return decodeURI(t)}catch(e){return tm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function uU(t,e){try{return decodeURIComponent(t)}catch(n){return tm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function g1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function cU(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Go(t):t;return{pathname:n?n.startsWith("/")?n:dU(n,e):e,search:fU(r),hash:pU(i)}}function dU(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jg(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function MA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $A(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Go(t):(i=Rc({},t),st(!i.pathname||!i.pathname.includes("?"),Jg("?","pathname","search",i)),st(!i.pathname||!i.pathname.includes("#"),Jg("#","pathname","hash",i)),st(!i.search||!i.search.includes("#"),Jg("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=cU(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Zi=t=>t.join("/").replace(/\/\/+/g,"/"),hU=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fU=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pU=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mU(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const FA=["post","put","patch","delete"];new Set(FA);const gU=["get",...FA];new Set(gU);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qf(){return Qf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qf.apply(this,arguments)}const y1=w.createContext(null),yU=w.createContext(null),Nl=w.createContext(null),nm=w.createContext(null),bs=w.createContext({outlet:null,matches:[],isDataRoute:!1}),UA=w.createContext(null);function vU(t,e){let{relative:n}=e===void 0?{}:e;vd()||st(!1);let{basename:r,navigator:i}=w.useContext(Nl),{hash:s,pathname:o,search:a}=BA(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Zi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function vd(){return w.useContext(nm)!=null}function rm(){return vd()||st(!1),w.useContext(nm).location}function VA(t){w.useContext(Nl).static||w.useLayoutEffect(t)}function v1(){let{isDataRoute:t}=w.useContext(bs);return t?RU():wU()}function wU(){vd()||st(!1);let t=w.useContext(y1),{basename:e,navigator:n}=w.useContext(Nl),{matches:r}=w.useContext(bs),{pathname:i}=rm(),s=JSON.stringify(MA(r).map(l=>l.pathnameBase)),o=w.useRef(!1);return VA(()=>{o.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=$A(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Zi([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Kne(){let{matches:t}=w.useContext(bs),e=t[t.length-1];return e?e.params:{}}function BA(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(bs),{pathname:i}=rm(),s=JSON.stringify(MA(r).map(o=>o.pathnameBase));return w.useMemo(()=>$A(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function EU(t,e){return _U(t,e)}function _U(t,e,n){vd()||st(!1);let{navigator:r}=w.useContext(Nl),{matches:i}=w.useContext(bs),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=rm(),u;if(e){var c;let m=typeof e=="string"?Go(e):e;a==="/"||(c=m.pathname)!=null&&c.startsWith(a)||st(!1),u=m}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",f=QF(t,{pathname:h}),p=kU(f&&f.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Zi([a,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?a:Zi([a,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n);return e&&p?w.createElement(nm.Provider,{value:{location:Qf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ji.Pop}},p):p}function IU(){let t=PU(),e=mU(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}const TU=w.createElement(IU,null);class SU extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(bs.Provider,{value:this.props.routeContext},w.createElement(UA.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bU(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(y1);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(bs.Provider,{value:e},r)}function kU(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||st(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||TU);let h=e.concat(s.slice(0,u+1)),f=()=>{let p;return c?p=d:l.route.Component?p=w.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=a,w.createElement(bU,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(SU,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var qv;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(qv||(qv={}));var Nc;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Nc||(Nc={}));function xU(t){let e=w.useContext(y1);return e||st(!1),e}function CU(t){let e=w.useContext(yU);return e||st(!1),e}function AU(t){let e=w.useContext(bs);return e||st(!1),e}function jA(t){let e=AU(),n=e.matches[e.matches.length-1];return n.route.id||st(!1),n.route.id}function PU(){var t;let e=w.useContext(UA),n=CU(Nc.UseRouteError),r=jA(Nc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function RU(){let{router:t}=xU(qv.UseNavigateStable),e=jA(Nc.UseNavigateStable),n=w.useRef(!1);return VA(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Qf({fromRouteId:e},s)))},[t,e])}function Br(t){st(!1)}function NU(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ji.Pop,navigator:s,static:o=!1}=t;vd()&&st(!1);let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Go(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,p=w.useMemo(()=>{let m=g1(u,a);return m==null?null:{location:{pathname:m,search:c,hash:d,state:h,key:f},navigationType:i}},[a,u,c,d,h,f,i]);return p==null?null:w.createElement(Nl.Provider,{value:l},w.createElement(nm.Provider,{children:n,value:p}))}function DU(t){let{children:e,location:n}=t;return EU(Wv(e),n)}var IT;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(IT||(IT={}));new Promise(()=>{});function Wv(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,Wv(r.props.children,s));return}r.type!==Br&&st(!1),!r.props.index||!r.props.children||st(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wv(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gv(){return Gv=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gv.apply(this,arguments)}function OU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function LU(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MU(t,e){return t.button===0&&(!e||e==="_self")&&!LU(t)}const $U=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],FU="startTransition",TT=Qy[FU];function UU(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=GF({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=w.useCallback(d=>{u&&TT?TT(()=>l(d)):l(d)},[l,u]);return w.useLayoutEffect(()=>o.listen(c),[o,c]),w.createElement(NU,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const VU=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BU=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hv=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=OU(e,$U),{basename:h}=w.useContext(Nl),f,p=!1;if(typeof u=="string"&&BU.test(u)&&(f=u,VU))try{let g=new URL(window.location.href),y=u.startsWith("//")?new URL(g.protocol+u):new URL(u),_=g1(y.pathname,h);y.origin===g.origin&&_!=null?u=_+y.search+y.hash:p=!0}catch{}let m=vU(u,{relative:i}),E=jU(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function v(g){r&&r(g),g.defaultPrevented||E(g)}return w.createElement("a",Gv({},d,{href:f||m,onClick:p||s?r:v,ref:n,target:l}))});var ST;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(ST||(ST={}));var bT;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bT||(bT={}));function jU(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=v1(),l=rm(),u=BA(t,{relative:o});return w.useCallback(c=>{if(MU(c,n)){c.preventDefault();let d=r!==void 0?r:Kf(l)===Kf(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const zU="https://Balanss.github.io/Squarelion/assets/404-6a88564e.jpg";/**
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
 */const zA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qU=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qU(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new WU;const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const p=u<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WU extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GU=function(t){const e=zA(t);return qA.encodeByteArray(e,!0)},Yf=function(t){return GU(t).replace(/\./g,"")},WA=function(t){try{return qA.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Xf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!HU(n)||(t[n]=Xf(t[n],e[n]));return t}function HU(t){return t!=="__proto__"}/**
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
 */function KU(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QU=()=>KU().__FIREBASE_DEFAULTS__,YU=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XU=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&WA(t[1]);return e&&JSON.parse(e)},im=()=>{try{return QU()||YU()||XU()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JU=t=>{var e,n;return(n=(e=im())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GA=t=>{const e=JU(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},HA=()=>{var t;return(t=im())===null||t===void 0?void 0:t.config},ZU=t=>{var e;return(e=im())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class eV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function KA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yf(JSON.stringify(n)),Yf(JSON.stringify(o)),a].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tV(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function sm(){var t;const e=(t=im())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nV(){return typeof self=="object"&&self.self===self}function w1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function E1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QA(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rV(){return!sm()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ll(){try{return typeof indexedDB=="object"}catch{return!1}}function YA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function iV(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const sV="FirebaseError";class vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sV,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oV(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vt(i,a,r)}}function oV(t,e){return t.replace(aV,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aV=/\{\$([^}]+)}/g;/**
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
 */function kT(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lV(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xT(s)&&xT(o)){if(!Jf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xT(t){return t!==null&&typeof t=="object"}/**
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
 */function Dl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ru(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XA(t,e){const n=new uV(t,e);return n.subscribe.bind(n)}class uV{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cV(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zg),i.error===void 0&&(i.error=Zg),i.complete===void 0&&(i.complete=Zg);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cV(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zg(){}/**
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
 */const dV=1e3,hV=2,fV=4*60*60*1e3,pV=.5;function CT(t,e=dV,n=hV){const r=e*Math.pow(n,t),i=Math.round(pV*r*(Math.random()-.5)*2);return Math.min(fV,r+i)}/**
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
 */function z(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const js="[DEFAULT]";/**
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
 */class mV{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new eV;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yV(e))try{this.getOrInitializeService({instanceIdentifier:js})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=js){return this.instances.has(e)}getOptions(e=js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gV(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=js){return this.component?this.component.multipleInstances?e:js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gV(t){return t===js?void 0:t}function yV(t){return t.instantiationMode==="EAGER"}/**
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
 */class vV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mV(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const _1=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const JA={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},wV=ae.INFO,EV={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},_V=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=EV[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wd{constructor(e){this.name=e,this._logLevel=wV,this._logHandler=_V,this._userLogHandler=null,_1.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function IV(t){_1.forEach(e=>{e.setLogLevel(t)})}function TV(t,e){for(const n of _1){let r=null;e&&e.level&&(r=JA[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const SV=(t,e)=>e.some(n=>t instanceof n);let AT,PT;function bV(){return AT||(AT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kV(){return PT||(PT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZA=new WeakMap,Kv=new WeakMap,eP=new WeakMap,ey=new WeakMap,I1=new WeakMap;function xV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(es(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ZA.set(n,t)}).catch(()=>{}),I1.set(e,t),e}function CV(t){if(Kv.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kv.set(t,e)}let Qv={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kv.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eP.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AV(t){Qv=t(Qv)}function PV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ty(this),e,...n);return eP.set(r,e.sort?e.sort():[e]),es(r)}:kV().includes(t)?function(...e){return t.apply(ty(this),e),es(ZA.get(this))}:function(...e){return es(t.apply(ty(this),e))}}function RV(t){return typeof t=="function"?PV(t):(t instanceof IDBTransaction&&CV(t),SV(t,bV())?new Proxy(t,Qv):t)}function es(t){if(t instanceof IDBRequest)return xV(t);if(ey.has(t))return ey.get(t);const e=RV(t);return e!==t&&(ey.set(t,e),I1.set(e,t)),e}const ty=t=>I1.get(t);function NV(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=es(o);return r&&o.addEventListener("upgradeneeded",l=>{r(es(o.result),l.oldVersion,l.newVersion,es(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const DV=["get","getKey","getAll","getAllKeys","count"],OV=["put","add","delete","clear"],ny=new Map;function RT(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ny.get(e))return ny.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DV.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ny.set(e,s),s}AV(t=>({...t,get:(e,n,r)=>RT(e,n)||t.get(e,n,r),has:(e,n)=>!!RT(e,n)||t.has(e,n)}));/**
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
 */class LV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MV(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MV(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yv="@firebase/app",NT="0.9.13";/**
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
 */const ko=new wd("@firebase/app"),$V="@firebase/app-compat",FV="@firebase/analytics-compat",UV="@firebase/analytics",VV="@firebase/app-check-compat",BV="@firebase/app-check",jV="@firebase/auth",zV="@firebase/auth-compat",qV="@firebase/database",WV="@firebase/database-compat",GV="@firebase/functions",HV="@firebase/functions-compat",KV="@firebase/installations",QV="@firebase/installations-compat",YV="@firebase/messaging",XV="@firebase/messaging-compat",JV="@firebase/performance",ZV="@firebase/performance-compat",e4="@firebase/remote-config",t4="@firebase/remote-config-compat",n4="@firebase/storage",r4="@firebase/storage-compat",i4="@firebase/firestore",s4="@firebase/firestore-compat",o4="firebase",a4="9.23.0";/**
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
 */const ls="[DEFAULT]",l4={[Yv]:"fire-core",[$V]:"fire-core-compat",[UV]:"fire-analytics",[FV]:"fire-analytics-compat",[BV]:"fire-app-check",[VV]:"fire-app-check-compat",[jV]:"fire-auth",[zV]:"fire-auth-compat",[qV]:"fire-rtdb",[WV]:"fire-rtdb-compat",[GV]:"fire-fn",[HV]:"fire-fn-compat",[KV]:"fire-iid",[QV]:"fire-iid-compat",[YV]:"fire-fcm",[XV]:"fire-fcm-compat",[JV]:"fire-perf",[ZV]:"fire-perf-compat",[e4]:"fire-rc",[t4]:"fire-rc-compat",[n4]:"fire-gcs",[r4]:"fire-gcs-compat",[i4]:"fire-fst",[s4]:"fire-fst-compat","fire-js":"fire-js",[o4]:"fire-js-all"};/**
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
 */const us=new Map,Dc=new Map;function Zf(t,e){try{t.container.addComponent(e)}catch(n){ko.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tP(t,e){t.container.addOrOverwriteComponent(e)}function An(t){const e=t.name;if(Dc.has(e))return ko.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of us.values())Zf(n,t);return!0}function ks(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function u4(t,e,n=ls){ks(t,e).clearInstance(n)}function c4(){Dc.clear()}/**
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
 */const d4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jr=new gi("app","Firebase",d4);/**
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
 */let h4=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}};/**
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
 */const yi=a4;function T1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ls,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jr.create("bad-app-name",{appName:String(i)});if(n||(n=HA()),!n)throw Jr.create("no-options");const s=us.get(i);if(s){if(Jf(n,s.options)&&Jf(r,s.config))return s;throw Jr.create("duplicate-app",{appName:i})}const o=new vV(i);for(const l of Dc.values())o.addComponent(l);const a=new h4(n,r,o);return us.set(i,a),a}function om(t=ls){const e=us.get(t);if(!e&&t===ls&&HA())return T1();if(!e)throw Jr.create("no-app",{appName:t});return e}function f4(){return Array.from(us.values())}async function nP(t){const e=t.name;us.has(e)&&(us.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function At(t,e,n){var r;let i=(r=l4[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ko.warn(a.join(" "));return}An(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function rP(t,e){if(t!==null&&typeof t!="function")throw Jr.create("invalid-log-argument");TV(t,e)}function iP(t){IV(t)}/**
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
 */const p4="firebase-heartbeat-database",m4=1,Oc="firebase-heartbeat-store";let ry=null;function sP(){return ry||(ry=NV(p4,m4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oc)}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),ry}async function g4(t){try{return await(await sP()).transaction(Oc).objectStore(Oc).get(oP(t))}catch(e){if(e instanceof vt)ko.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ko.warn(n.message)}}}async function DT(t,e){try{const r=(await sP()).transaction(Oc,"readwrite");await r.objectStore(Oc).put(e,oP(t)),await r.done}catch(n){if(n instanceof vt)ko.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ko.warn(r.message)}}}function oP(t){return`${t.name}!${t.options.appId}`}/**
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
 */const y4=1024,v4=30*24*60*60*1e3;class w4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=OT();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=v4}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=OT(),{heartbeatsToSend:n,unsentEntries:r}=E4(this._heartbeatsCache.heartbeats),i=Yf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function OT(){return new Date().toISOString().substring(0,10)}function E4(t,e=y4){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),LT(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),LT(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ll()?YA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await g4(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return DT(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return DT(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function LT(t){return Yf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function I4(t){An(new Zt("platform-logger",e=>new LV(e),"PRIVATE")),An(new Zt("heartbeat",e=>new w4(e),"PRIVATE")),At(Yv,NT,t),At(Yv,NT,"esm2017"),At("fire-js","")}I4("");const T4=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:vt,SDK_VERSION:yi,_DEFAULT_ENTRY_NAME:ls,_addComponent:Zf,_addOrOverwriteComponent:tP,_apps:us,_clearComponents:c4,_components:Dc,_getProvider:ks,_registerComponent:An,_removeServiceInstance:u4,deleteApp:nP,getApp:om,getApps:f4,initializeApp:T1,onLog:rP,registerVersion:At,setLogLevel:iP},Symbol.toStringTag,{value:"Module"}));var S4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,S1=S1||{},Z=S4||self;function am(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ed(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function b4(t){return Object.prototype.hasOwnProperty.call(t,iy)&&t[iy]||(t[iy]=++k4)}var iy="closure_uid_"+(1e9*Math.random()>>>0),k4=0;function x4(t,e,n){return t.call.apply(t.bind,arguments)}function C4(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function jt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?jt=x4:jt=C4,jt.apply(null,arguments)}function Ih(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function _t(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xs(){this.s=this.s,this.o=this.o}var A4=0;xs.prototype.s=!1;xs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),A4!=0)&&b4(this)};xs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const aP=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function b1(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function MT(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(am(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function zt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var P4=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return t}();function Lc(t){return/^[\s\xa0]*$/.test(t)}function lm(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function gr(t){return lm().indexOf(t)!=-1}function k1(t){return k1[" "](t),t}k1[" "]=function(){};function R4(t,e){var n=TB;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var N4=gr("Opera"),ul=gr("Trident")||gr("MSIE"),lP=gr("Edge"),Xv=lP||ul,uP=gr("Gecko")&&!(lm().toLowerCase().indexOf("webkit")!=-1&&!gr("Edge"))&&!(gr("Trident")||gr("MSIE"))&&!gr("Edge"),D4=lm().toLowerCase().indexOf("webkit")!=-1&&!gr("Edge");function cP(){var t=Z.document;return t?t.documentMode:void 0}var Jv;e:{var sy="",oy=function(){var t=lm();if(uP)return/rv:([^\);]+)(\)|;)/.exec(t);if(lP)return/Edge\/([\d\.]+)/.exec(t);if(ul)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(D4)return/WebKit\/(\S+)/.exec(t);if(N4)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(oy&&(sy=oy?oy[1]:""),ul){var ay=cP();if(ay!=null&&ay>parseFloat(sy)){Jv=String(ay);break e}}Jv=sy}var Zv;if(Z.document&&ul){var $T=cP();Zv=$T||parseInt(Jv,10)||void 0}else Zv=void 0;var O4=Zv;function Mc(t,e){if(zt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uP){e:{try{k1(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:L4[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mc.$.h.call(this)}}_t(Mc,zt);var L4={2:"touch",3:"pen",4:"mouse"};Mc.prototype.h=function(){Mc.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _d="closure_listenable_"+(1e6*Math.random()|0),M4=0;function $4(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++M4,this.fa=this.ia=!1}function um(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function x1(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function F4(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function dP(t){const e={};for(const n in t)e[n]=t[n];return e}const FT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hP(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<FT.length;s++)n=FT[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function cm(t){this.src=t,this.g={},this.h=0}cm.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=t0(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new $4(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function e0(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=aP(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(um(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function t0(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var C1="closure_lm_"+(1e6*Math.random()|0),ly={};function fP(t,e,n,r,i){if(r&&r.once)return mP(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)fP(t,e[s],n,r,i);return null}return n=R1(n),t&&t[_d]?t.O(e,n,Ed(r)?!!r.capture:!!r,i):pP(t,e,n,!1,r,i)}function pP(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ed(i)?!!i.capture:!!i,a=P1(t);if(a||(t[C1]=a=new cm(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=U4(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)P4||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(yP(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function U4(){function t(n){return e.call(t.src,t.listener,n)}const e=V4;return t}function mP(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)mP(t,e[s],n,r,i);return null}return n=R1(n),t&&t[_d]?t.P(e,n,Ed(r)?!!r.capture:!!r,i):pP(t,e,n,!0,r,i)}function gP(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)gP(t,e[s],n,r,i);else r=Ed(r)?!!r.capture:!!r,n=R1(n),t&&t[_d]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=t0(s,n,r,i),-1<n&&(um(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=P1(t))&&(e=t.g[e.toString()],t=-1,e&&(t=t0(e,n,r,i)),(n=-1<t?e[t]:null)&&A1(n))}function A1(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_d])e0(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(yP(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=P1(e))?(e0(n,t),n.h==0&&(n.src=null,e[C1]=null)):um(t)}}}function yP(t){return t in ly?ly[t]:ly[t]="on"+t}function V4(t,e){if(t.fa)t=!0;else{e=new Mc(e,this);var n=t.listener,r=t.la||t.src;t.ia&&A1(t),t=n.call(r,e)}return t}function P1(t){return t=t[C1],t instanceof cm?t:null}var uy="__closure_events_fn_"+(1e9*Math.random()>>>0);function R1(t){return typeof t=="function"?t:(t[uy]||(t[uy]=function(e){return t.handleEvent(e)}),t[uy])}function Et(){xs.call(this),this.i=new cm(this),this.S=this,this.J=null}_t(Et,xs);Et.prototype[_d]=!0;Et.prototype.removeEventListener=function(t,e,n,r){gP(this,t,e,n,r)};function Pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new zt(e,t);else if(e instanceof zt)e.target=e.target||t;else{var i=e;e=new zt(r,t),hP(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Th(o,r,!0,e)&&i}if(o=e.g=t,i=Th(o,r,!0,e)&&i,i=Th(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Th(o,r,!1,e)&&i}Et.prototype.N=function(){if(Et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)um(n[r]);delete t.g[e],t.h--}}this.J=null};Et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Et.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Th(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&e0(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var N1=Z.JSON.stringify;class B4{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function j4(){var t=D1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class z4{constructor(){this.h=this.g=null}add(e,n){const r=vP.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vP=new B4(()=>new q4,t=>t.reset());class q4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function W4(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function G4(t){Z.setTimeout(()=>{throw t},0)}let $c,Fc=!1,D1=new z4,wP=()=>{const t=Z.Promise.resolve(void 0);$c=()=>{t.then(H4)}};var H4=()=>{for(var t;t=j4();){try{t.h.call(t.g)}catch(n){G4(n)}var e=vP;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fc=!1};function dm(t,e){Et.call(this),this.h=t||1,this.g=e||Z,this.j=jt(this.qb,this),this.l=Date.now()}_t(dm,Et);U=dm.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pt(this,"tick"),this.ga&&(O1(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function O1(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){dm.$.N.call(this),O1(this),delete this.g};function L1(t,e,n){if(typeof t=="function")n&&(t=jt(t,n));else if(t&&typeof t.handleEvent=="function")t=jt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function EP(t){t.g=L1(()=>{t.g=null,t.i&&(t.i=!1,EP(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class K4 extends xs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:EP(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uc(t){xs.call(this),this.h=t,this.g={}}_t(Uc,xs);var UT=[];function _P(t,e,n,r){Array.isArray(n)||(n&&(UT[0]=n.toString()),n=UT);for(var i=0;i<n.length;i++){var s=fP(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function IP(t){x1(t.g,function(e,n){this.g.hasOwnProperty(n)&&A1(e)},t),t.g={}}Uc.prototype.N=function(){Uc.$.N.call(this),IP(this)};Uc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hm(){this.g=!0}hm.prototype.Ea=function(){this.g=!1};function Q4(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Y4(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Oa(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+J4(t,n)+(r?" "+r:"")})}function X4(t,e){t.info(function(){return"TIMEOUT: "+e})}hm.prototype.info=function(){};function J4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return N1(n)}catch{return e}}var Ho={},VT=null;function fm(){return VT=VT||new Et}Ho.Ta="serverreachability";function TP(t){zt.call(this,Ho.Ta,t)}_t(TP,zt);function Vc(t){const e=fm();Pt(e,new TP(e))}Ho.STAT_EVENT="statevent";function SP(t,e){zt.call(this,Ho.STAT_EVENT,t),this.stat=e}_t(SP,zt);function Yt(t){const e=fm();Pt(e,new SP(e,t))}Ho.Ua="timingevent";function bP(t,e){zt.call(this,Ho.Ua,t),this.size=e}_t(bP,zt);function Id(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var pm={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kP={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function M1(){}M1.prototype.h=null;function BT(t){return t.h||(t.h=t.i())}function xP(){}var Td={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $1(){zt.call(this,"d")}_t($1,zt);function F1(){zt.call(this,"c")}_t(F1,zt);var n0;function mm(){}_t(mm,M1);mm.prototype.g=function(){return new XMLHttpRequest};mm.prototype.i=function(){return{}};n0=new mm;function Sd(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Uc(this),this.P=Z4,t=Xv?125:void 0,this.V=new dm(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new CP}function CP(){this.i=null,this.g="",this.h=!1}var Z4=45e3,r0={},ep={};U=Sd.prototype;U.setTimeout=function(t){this.P=t};function i0(t,e,n){t.L=1,t.v=ym(ui(e)),t.s=n,t.S=!0,AP(t,null)}function AP(t,e){t.G=Date.now(),bd(t),t.A=ui(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),$P(n.i,"t",r),t.C=0,n=t.l.J,t.h=new CP,t.g=iR(t.l,n?e:null,!t.s),0<t.O&&(t.M=new K4(jt(t.Pa,t,t.g),t.O)),_P(t.U,t.g,"readystatechange",t.nb),e=t.I?dP(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Vc(),Q4(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&_r(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=_r(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Xv||this.g&&(this.h.h||this.g.ja()||WT(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Vc(3):Vc(2)),gm(this);var n=this.g.da();this.ca=n;t:if(PP(this)){var r=WT(this.g);t="";var i=r.length,s=_r(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){io(this),Yu(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Y4(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lc(a)){var u=a;break t}}u=null}if(n=u)Oa(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,s0(this,n);else{this.i=!1,this.o=3,Yt(12),io(this),Yu(this);break e}}this.S?(RP(this,c,o),Xv&&this.i&&c==3&&(_P(this.U,this.V,"tick",this.mb),this.V.start())):(Oa(this.j,this.m,o,null),s0(this,o)),c==4&&io(this),this.i&&!this.J&&(c==4?eR(this.l,this):(this.i=!1,bd(this)))}else EB(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Yt(12)):(this.o=0,Yt(13)),io(this),Yu(this)}}}catch{}finally{}};function PP(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function RP(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=eB(t,n),i==ep){e==4&&(t.o=4,Yt(14),r=!1),Oa(t.j,t.m,null,"[Incomplete Response]");break}else if(i==r0){t.o=4,Yt(15),Oa(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Oa(t.j,t.m,i,null),s0(t,i);PP(t)&&i!=ep&&i!=r0&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),q1(e),e.M=!0,Yt(11))):(Oa(t.j,t.m,n,"[Invalid Chunked Response]"),io(t),Yu(t))}U.mb=function(){if(this.g){var t=_r(this.g),e=this.g.ja();this.C<e.length&&(gm(this),RP(this,t,e),this.i&&t!=4&&bd(this))}};function eB(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ep:(n=Number(e.substring(n,r)),isNaN(n)?r0:(r+=1,r+n>e.length?ep:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,io(this)};function bd(t){t.Y=Date.now()+t.P,NP(t,t.P)}function NP(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Id(jt(t.lb,t),e)}function gm(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(X4(this.j,this.A),this.L!=2&&(Vc(),Yt(17)),io(this),this.o=2,Yu(this)):NP(this,this.Y-t)};function Yu(t){t.l.H==0||t.J||eR(t.l,t)}function io(t){gm(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,O1(t.V),IP(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function s0(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||o0(n.i,t))){if(!t.K&&o0(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)rp(n),Em(n);else break e;z1(n),Yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Id(jt(n.ib,n),6e3));if(1>=VP(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else so(n,11)}else if((t.K||n.g==t)&&rp(n),!Lc(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(U1(s,s.h),s.h=null))}if(r.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,_e(r.I,r.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=rR(r,r.J?r.pa:null,r.Y),o.K){BP(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(gm(a),bd(a)),r.g=o}else JP(r);0<n.j.length&&_m(n)}else u[0]!="stop"&&u[0]!="close"||so(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?so(n,7):j1(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Vc(4)}catch{}}function tB(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(am(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nB(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(am(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function DP(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(am(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nB(t),r=tB(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var OP=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rB(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mo(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mo){this.h=t.h,tp(this,t.j),this.s=t.s,this.g=t.g,np(this,t.m),this.l=t.l;var e=t.i,n=new Bc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),jT(this,n),this.o=t.o}else t&&(e=String(t).match(OP))?(this.h=!1,tp(this,e[1]||"",!0),this.s=Nu(e[2]||""),this.g=Nu(e[3]||"",!0),np(this,e[4]),this.l=Nu(e[5]||"",!0),jT(this,e[6]||"",!0),this.o=Nu(e[7]||"")):(this.h=!1,this.i=new Bc(null,this.h))}mo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Du(e,zT,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Du(e,zT,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Du(n,n.charAt(0)=="/"?oB:sB,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Du(n,lB)),t.join("")};function ui(t){return new mo(t)}function tp(t,e,n){t.j=n?Nu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function np(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jT(t,e,n){e instanceof Bc?(t.i=e,uB(t.i,t.h)):(n||(e=Du(e,aB)),t.i=new Bc(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function ym(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Nu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Du(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iB),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iB(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zT=/[#\/\?@]/g,sB=/[#\?:]/g,oB=/[#\?]/g,aB=/[#\?@]/g,lB=/#/g;function Bc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&rB(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Bc.prototype;U.add=function(t,e){Cs(this),this.i=null,t=Ol(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function LP(t,e){Cs(t),e=Ol(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function MP(t,e){return Cs(t),e=Ol(t,e),t.g.has(e)}U.forEach=function(t,e){Cs(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){Cs(this);let e=[];if(typeof t=="string")MP(this,t)&&(e=e.concat(this.g.get(Ol(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Cs(this),this.i=null,t=Ol(this,t),MP(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function $P(t,e,n){LP(t,e),0<n.length&&(t.i=null,t.g.set(Ol(t,e),b1(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ol(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uB(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(LP(this,r),$P(this,i,n))},t)),t.j=e}var cB=class{constructor(t,e){this.g=t,this.map=e}};function FP(t){this.l=t||dB,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dB=10;function UP(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function VP(t){return t.h?1:t.g?t.g.size:0}function o0(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function U1(t,e){t.g?t.g.add(e):t.h=e}function BP(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}FP.prototype.cancel=function(){if(this.i=jP(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jP(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return b1(t.i)}var hB=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function fB(){this.g=new hB}function pB(t,e,n){const r=n||"";try{DP(t,function(i,s){let o=i;Ed(i)&&(o=N1(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function mB(t,e){const n=new hm;if(Z.Image){const r=new Image;r.onload=Ih(Sh,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ih(Sh,n,r,"TestLoadImage: error",!1,e),r.onabort=Ih(Sh,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ih(Sh,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Sh(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function kd(t){this.l=t.fc||null,this.j=t.ob||!1}_t(kd,M1);kd.prototype.g=function(){return new vm(this.l,this.j)};kd.prototype.i=function(t){return function(){return t}}({});function vm(t,e){Et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=V1,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(vm,Et);var V1=0;U=vm.prototype;U.open=function(t,e){if(this.readyState!=V1)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jc(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xd(this)),this.readyState=V1};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jc(this)),this.g&&(this.readyState=3,jc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zP(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function zP(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xd(this):jc(this),this.readyState==3&&zP(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,xd(this))};U.Ya=function(t){this.g&&(this.response=t,xd(this))};U.ka=function(){this.g&&xd(this)};function xd(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jc(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vm.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gB=Z.JSON.parse;function Ge(t){Et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qP,this.L=this.M=!1}_t(Ge,Et);var qP="",yB=/^https?$/i,vB=["POST","PUT"];U=Ge.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():n0.g(),this.C=this.u?BT(this.u):BT(n0),this.g.onreadystatechange=jt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){qT(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=aP(vB,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{HP(this),0<this.B&&((this.L=wB(this.g))?(this.g.timeout=this.B,this.g.ontimeout=jt(this.ua,this)):this.A=L1(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){qT(this,s)}};function wB(t){return ul&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof S1<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))};function qT(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,WP(t),wm(t)}function WP(t){t.F||(t.F=!0,Pt(t,"complete"),Pt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),wm(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wm(this,!0)),Ge.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?GP(this):this.kb())};U.kb=function(){GP(this)};function GP(t){if(t.h&&typeof S1<"u"&&(!t.C[1]||_r(t)!=4||t.da()!=2)){if(t.v&&_r(t)==4)L1(t.La,0,t);else if(Pt(t,"readystatechange"),_r(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(OP)[1]||null;!i&&Z.self&&Z.self.location&&(i=Z.self.location.protocol.slice(0,-1)),r=!yB.test(i?i.toLowerCase():"")}n=r}if(n)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var s=2<_r(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",WP(t)}}finally{wm(t)}}}}function wm(t,e){if(t.g){HP(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function HP(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function _r(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<_r(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gB(e)}};function WT(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case qP:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function EB(t){const e={};t=(t.g&&2<=_r(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Lc(t[r]))continue;var n=W4(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}F4(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function KP(t){let e="";return x1(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function B1(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=KP(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function cu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function QP(t){this.Ga=0,this.j=[],this.l=new hm,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=cu("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=cu("baseRetryDelayMs",5e3,t),this.hb=cu("retryDelaySeedMs",1e4,t),this.eb=cu("forwardChannelMaxRetries",2,t),this.xa=cu("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new FP(t&&t.concurrentRequestLimit),this.Ja=new fB,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=QP.prototype;U.ra=8;U.H=1;function j1(t){if(YP(t),t.H==3){var e=t.W++,n=ui(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),Cd(t,n),e=new Sd(t,t.l,e),e.L=2,e.v=ym(ui(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=iR(e.l,null),e.g.ha(e.v)),e.G=Date.now(),bd(e)}nR(t)}function Em(t){t.g&&(q1(t),t.g.cancel(),t.g=null)}function YP(t){Em(t),t.u&&(Z.clearTimeout(t.u),t.u=null),rp(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function _m(t){if(!UP(t.i)&&!t.m){t.m=!0;var e=t.Na;$c||wP(),Fc||($c(),Fc=!0),D1.add(e,t),t.C=0}}function _B(t,e){return VP(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Id(jt(t.Na,t,e),tR(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Sd(this,this.l,t);let s=this.s;if(this.U&&(s?(s=dP(s),hP(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=XP(this,i,e),n=ui(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),Cd(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(KP(s)))+"&"+e:this.o&&B1(n,this.o,s)),U1(this.i,i),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),i.aa=!0,i0(i,n,null)):i0(i,n,e),this.H=2}}else this.H==3&&(t?GT(this,t):this.j.length==0||UP(this.i)||GT(this))};function GT(t,e){var n;e?n=e.m:n=t.W++;const r=ui(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),Cd(t,r),t.o&&t.s&&B1(r,t.o,t.s),n=new Sd(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=XP(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),U1(t.i,n),i0(n,r,e)}function Cd(t,e){t.na&&x1(t.na,function(n,r){_e(e,r,n)}),t.h&&DP({},function(n,r){_e(e,r,n)})}function XP(t,e,n){n=Math.min(t.j.length,n);var r=t.h?jt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{pB(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function JP(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;$c||wP(),Fc||($c(),Fc=!0),D1.add(e,t),t.A=0}}function z1(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Id(jt(t.Ma,t),tR(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,ZP(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Id(jt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Yt(10),Em(this),ZP(this))};function q1(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function ZP(t){t.g=new Sd(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ui(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),Cd(t,e),t.o&&t.s&&B1(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ym(ui(e)),n.s=null,n.S=!0,AP(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Em(this),z1(this),Yt(19))};function rp(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function eR(t,e){var n=null;if(t.g==e){rp(t),q1(t),t.g=null;var r=2}else if(o0(t.i,e))n=e.F,BP(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=fm(),Pt(r,new bP(r,n)),_m(t)}else JP(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&_B(t,e)||r==2&&z1(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:so(t,5);break;case 4:so(t,10);break;case 3:so(t,6);break;default:so(t,2)}}}function tR(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function so(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=jt(t.pb,t);n||(n=new mo("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||tp(n,"https"),ym(n)),mB(n.toString(),r)}else Yt(2);t.H=0,t.h&&t.h.za(e),nR(t),YP(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Yt(2)):(this.l.info("Failed to ping google.com"),Yt(1))};function nR(t){if(t.H=0,t.ma=[],t.h){const e=jP(t.i);(e.length!=0||t.j.length!=0)&&(MT(t.ma,e),MT(t.ma,t.j),t.i.i.length=0,b1(t.j),t.j.length=0),t.h.ya()}}function rR(t,e,n){var r=n instanceof mo?ui(n):new mo(n);if(r.g!="")e&&(r.g=e+"."+r.g),np(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new mo(null);r&&tp(s,r),e&&(s.g=e),i&&np(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),Cd(t,r),r}function iR(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ge(new kd({ob:!0})):new Ge(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function sR(){}U=sR.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function ip(){if(ul&&!(10<=Number(O4)))throw Error("Environmental error: no available transport.")}ip.prototype.g=function(t,e){return new Pn(t,e)};function Pn(t,e){Et.call(this),this.g=new QP(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Lc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ll(this)}_t(Pn,Et);Pn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Yt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=rR(t,null,t.Y),_m(t)};Pn.prototype.close=function(){j1(this.g)};Pn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=N1(t),t=n);e.j.push(new cB(e.fb++,t)),e.H==3&&_m(e)};Pn.prototype.N=function(){this.g.h=null,delete this.j,j1(this.g),delete this.g,Pn.$.N.call(this)};function oR(t){$1.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_t(oR,$1);function aR(){F1.call(this),this.status=1}_t(aR,F1);function Ll(t){this.g=t}_t(Ll,sR);Ll.prototype.Ba=function(){Pt(this.g,"a")};Ll.prototype.Aa=function(t){Pt(this.g,new oR(t))};Ll.prototype.za=function(t){Pt(this.g,new aR)};Ll.prototype.ya=function(){Pt(this.g,"b")};function IB(){this.blockSize=-1}function or(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}_t(or,IB);or.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cy(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}or.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)cy(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){cy(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){cy(this,r),i=0;break}}this.h=i,this.i+=e};or.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ve(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var TB={};function W1(t){return-128<=t&&128>t?R4(t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function Ir(t){if(isNaN(t)||!isFinite(t))return Wa;if(0>t)return kt(Ir(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=a0;return new ve(e,0)}function lR(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return kt(lR(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ir(Math.pow(e,8)),r=Wa,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ir(Math.pow(e,s)),r=r.R(s).add(Ir(o))):(r=r.R(n),r=r.add(Ir(o)))}return r}var a0=4294967296,Wa=W1(0),l0=W1(1),HT=W1(16777216);U=ve.prototype;U.ea=function(){if(Un(this))return-kt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:a0+r)*e,e*=a0}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Hr(this))return"0";if(Un(this))return"-"+kt(this).toString(t);for(var e=Ir(Math.pow(t,6)),n=this,r="";;){var i=op(n,e).g;n=sp(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Hr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Hr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Un(t){return t.h==-1}U.X=function(t){return t=sp(this,t),Un(t)?-1:Hr(t)?0:1};function kt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ve(n,~t.h).add(l0)}U.abs=function(){return Un(this)?kt(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function sp(t,e){return t.add(kt(e))}U.R=function(t){if(Hr(this)||Hr(t))return Wa;if(Un(this))return Un(t)?kt(this).R(kt(t)):kt(kt(this).R(t));if(Un(t))return kt(this.R(kt(t)));if(0>this.X(HT)&&0>t.X(HT))return Ir(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,bh(n,2*r+2*i),n[2*r+2*i+1]+=s*l,bh(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,bh(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,bh(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ve(n,0)};function bh(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function du(t,e){this.g=t,this.h=e}function op(t,e){if(Hr(e))throw Error("division by zero");if(Hr(t))return new du(Wa,Wa);if(Un(t))return e=op(kt(t),e),new du(kt(e.g),kt(e.h));if(Un(e))return e=op(t,kt(e)),new du(kt(e.g),e.h);if(30<t.g.length){if(Un(t)||Un(e))throw Error("slowDivide_ only works with positive integers.");for(var n=l0,r=e;0>=r.X(t);)n=KT(n),r=KT(r);var i=oa(n,1),s=oa(r,1);for(r=oa(r,2),n=oa(n,2);!Hr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=oa(r,1),n=oa(n,1)}return e=sp(t,i.R(e)),new du(i,e)}for(i=Wa;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ir(n),o=s.R(e);Un(o)||0<o.X(t);)n-=r,s=Ir(n),o=s.R(e);Hr(s)&&(s=l0),i=i.add(s),t=sp(t,o)}return new du(i,t)}U.gb=function(t){return op(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ve(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ve(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ve(n,this.h^t.h)};function KT(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ve(n,t.h)}function oa(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ve(i,t.h)}ip.prototype.createWebChannel=ip.prototype.g;Pn.prototype.send=Pn.prototype.u;Pn.prototype.open=Pn.prototype.m;Pn.prototype.close=Pn.prototype.close;pm.NO_ERROR=0;pm.TIMEOUT=8;pm.HTTP_ERROR=6;kP.COMPLETE="complete";xP.EventType=Td;Td.OPEN="a";Td.CLOSE="b";Td.ERROR="c";Td.MESSAGE="d";Et.prototype.listen=Et.prototype.O;Ge.prototype.listenOnce=Ge.prototype.P;Ge.prototype.getLastError=Ge.prototype.Sa;Ge.prototype.getLastErrorCode=Ge.prototype.Ia;Ge.prototype.getStatus=Ge.prototype.da;Ge.prototype.getResponseJson=Ge.prototype.Wa;Ge.prototype.getResponseText=Ge.prototype.ja;Ge.prototype.send=Ge.prototype.ha;Ge.prototype.setWithCredentials=Ge.prototype.Oa;or.prototype.digest=or.prototype.l;or.prototype.reset=or.prototype.reset;or.prototype.update=or.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=Ir;ve.fromString=lR;var SB=function(){return new ip},bB=function(){return fm()},dy=pm,kB=kP,xB=Ho,QT={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},CB=kd,kh=xP,AB=Ge,PB=or,Ga=ve;const YT="@firebase/firestore";/**
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
 */let gt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Ml="9.23.0";/**
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
 */const cs=new wd("@firebase/firestore");function u0(){return cs.logLevel}function RB(t){cs.setLogLevel(t)}function N(t,...e){if(cs.logLevel<=ae.DEBUG){const n=e.map(G1);cs.debug(`Firestore (${Ml}): ${t}`,...n)}}function Ye(t,...e){if(cs.logLevel<=ae.ERROR){const n=e.map(G1);cs.error(`Firestore (${Ml}): ${t}`,...n)}}function ar(t,...e){if(cs.logLevel<=ae.WARN){const n=e.map(G1);cs.warn(`Firestore (${Ml}): ${t}`,...n)}}function G1(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Ml}) INTERNAL ASSERTION FAILED: `+t;throw Ye(e),new Error(e)}function W(t,e){t||B()}function NB(t,e){t||B()}function F(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let P=class extends vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */class wt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */let uR=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},DB=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}},OB=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}};class LB{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new uR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new gt(e)}}let MB=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};class $B{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new MB(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let FB=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},UB=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.T=n.token,new FB(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
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
 */function VB(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cR{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VB(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function cl(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function dR(t){return t+"\0"}/**
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
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Re(0,0))}static max(){return new q(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zc{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends zc{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const BB=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends zc{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return BB.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}/**
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
 */class hR{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function c0(t){return t.fields.find(e=>e.kind===2)}function zs(t){return t.fields.filter(e=>e.kind!==2)}hR.UNKNOWN_ID=-1;let jB=class{constructor(e,n){this.fieldPath=e,this.kind=n}};class ap{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ap(0,Rn.min())}}function fR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Rn(i,$.empty(),e)}function pR(t){return new Rn(t.readTime,t.key,-1)}class Rn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rn(q.min(),$.empty(),-1)}static max(){return new Rn(q.max(),$.empty(),-1)}}function H1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const mR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function As(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==mR)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Im{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new wt,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Xu(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=K1(r.target.error);this.v.reject(new Xu(e,i))}}static open(e,n,r,i){try{return new Im(n,e.transaction(i,r))}catch(s){throw new Xu(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new qB(n)}}class tr{constructor(e,n,r){this.name=e,this.version=n,this.V=r,tr.S($e())===12.2&&Ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Ks(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ll())return!1;if(tr.C())return!0;const e=$e(),n=tr.S(e),r=0<n&&n<10,i=tr.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Xu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new P(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new P(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Xu(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Im.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),b.reject(u))).toPromise();return l.catch(()=>{}),await a.R,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class zB{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ks(this.L.delete())}}class Xu extends P{constructor(e,n){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ps(t){return t.name==="IndexedDbTransactionError"}class qB{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ks(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Ks(this.store.add(e))}get(e){return Ks(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Ks(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Ks(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new b((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new b((r,i)=>{n.onerror=s=>{const o=K1(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new zB(a),u=n(a.primaryKey,a.value,l);if(u instanceof b){const c=u.catch(d=>(l.done(),b.reject(d)));r.push(c)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ks(t){return new b((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=K1(r.target.error);n(i)}})}let XT=!1;function K1(t){const e=tr.S($e());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new P("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return XT||(XT=!0,setTimeout(()=>{throw r},0)),r}}return t}class WB{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){Ps(n)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await As(n)}await this.et(6e4)})}}class GB{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=pR(s);H1(o,r)>0&&(r=o)}),new Rn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class ln{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ln.ct=-1;function Ad(t){return t==null}function qc(t){return t===0&&1/t==-1/0}function yR(t){return typeof t=="number"&&Number.isInteger(t)&&!qc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=JT(e)),e=HB(t.get(n),e);return JT(e)}function HB(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function JT(t){return t+""}function Tr(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),le.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&B(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:B()}s=o+2}return new le(r)}/**
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
 */const ZT=["userId","batchId"];/**
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
 */function nf(t,e){return[t,Jt(e)]}function vR(t,e,n){return[t,Jt(e),n]}const KB={},QB=["prefixPath","collectionGroup","readTime","documentId"],YB=["prefixPath","collectionGroup","documentId"],XB=["collectionGroup","readTime","prefixPath","documentId"],JB=["canonicalId","targetId"],ZB=["targetId","path"],e5=["path","targetId"],t5=["collectionId","parent"],n5=["indexId","uid"],r5=["uid","sequenceNumber"],i5=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],s5=["indexId","uid","orderedDocumentKey"],o5=["userId","collectionPath","documentId"],a5=["userId","collectionPath","largestBatchId"],l5=["userId","collectionGroup","largestBatchId"],wR=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],u5=[...wR,"documentOverlays"],ER=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_R=ER,c5=[..._R,"indexConfiguration","indexState","indexEntries"];/**
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
 */class d0 extends gR{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function It(t,e){const n=F(t);return tr.M(n.ht,e)}/**
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
 */function eS(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Fe=class h0{constructor(e,n){this.comparator=e,this.root=n||ts.EMPTY}insert(e,n){return new h0(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ts.BLACK,null,null))}remove(e){return new h0(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ts.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xh(this.root,e,this.comparator,!1)}getReverseIterator(){return new xh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xh(this.root,e,this.comparator,!0)}},xh=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ts=class jr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??jr.RED,this.left=i??jr.EMPTY,this.right=s??jr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new jr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return jr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}};ts.EMPTY=null,ts.RED=!0,ts.BLACK=!1;ts.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ts(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */let We=class f0{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tS(this.data.getIterator())}getIteratorFrom(e){return new tS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof f0)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new f0(this.comparator);return n.data=e,n}},tS=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function aa(t){return t.hasNext()?t.getNext():void 0}/**
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
 */let nr=class p0{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new p0([])}unionWith(e){let n=new We(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new p0(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cl(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
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
 */class TR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function d5(){return typeof atob<"u"}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new TR("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const h5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(t){if(W(!!t),typeof t=="string"){let e=0;const n=h5.exec(t);if(W(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hs(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function Tm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Q1(t){const e=t.mapValue.fields.__previous_value__;return Tm(e)?Q1(e):e}function Wc(t){const e=ds(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class f5{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class fs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rf={nullValue:"NULL_VALUE"};function xo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tm(t)?4:SR(t)?9007199254740991:10:B()}function Or(t,e){if(t===e)return!0;const n=xo(t);if(n!==xo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wc(t).isEqual(Wc(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ds(r.timestampValue),o=ds(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return hs(r.bytesValue).isEqual(hs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?qc(s)===qc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return cl(t.arrayValue.values||[],e.arrayValue.values||[],Or);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(eS(s)!==eS(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Or(s[a],o[a])))return!1;return!0}(t,e);default:return B()}}function Gc(t,e){return(t.values||[]).find(n=>Or(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=xo(t),r=xo(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nS(t.timestampValue,e.timestampValue);case 4:return nS(Wc(t),Wc(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(i,s){const o=hs(i),a=hs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ee(o[l],a[l]);if(u!==0)return u}return ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ee(ze(i.latitude),ze(s.latitude));return o!==0?o:ee(ze(i.longitude),ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ps(o[l],a[l]);if(u)return u}return ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===zi.mapValue&&s===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(s===zi.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=ee(a[c],u[c]);if(d!==0)return d;const h=ps(o[a[c]],l[u[c]]);if(h!==0)return h}return ee(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function nS(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=ds(t),r=ds(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function dl(t){return m0(t)}function m0(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ds(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?hs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=m0(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${m0(r.fields[a])}`;return s+"}"}(t.mapValue):B();var e,n}function Co(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function g0(t){return!!t&&"integerValue"in t}function Hc(t){return!!t&&"arrayValue"in t}function rS(t){return!!t&&"nullValue"in t}function iS(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sf(t){return!!t&&"mapValue"in t}function Ju(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ko(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ju(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ju(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function p5(t){return"nullValue"in t?rf:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Co(fs.empty(),$.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:B()}function m5(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Co(fs.empty(),$.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?zi:B()}function sS(t,e){const n=ps(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function oS(t,e){const n=ps(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ju(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ju(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());sf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];sf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ko(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(Ju(this.value))}}function bR(t){const e=[];return Ko(t.fields,(n,r)=>{const i=new Xe([n]);if(sf(r)){const s=bR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nr(e)}/**
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
 */class Ie{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,q.min(),q.min(),q.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ie(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new Ie(e,2,n,q.min(),q.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,q.min(),q.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ms{constructor(e,n){this.position=e,this.inclusive=n}}function aS(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lS(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Or(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ha{constructor(e,n="asc"){this.field=e,this.dir=n}}function g5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kR{}class re extends kR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new y5(e,n,r):n==="array-contains"?new E5(e,r):n==="in"?new NR(e,r):n==="not-in"?new _5(e,r):n==="array-contains-any"?new I5(e,r):new re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new v5(e,r):new w5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ps(n,this.value)):n!==null&&xo(this.value)===xo(n)&&this.matchesComparison(ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ge extends kR{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new ge(e,n)}matches(e){return hl(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hl(t){return t.op==="and"}function y0(t){return t.op==="or"}function Y1(t){return xR(t)&&hl(t)}function xR(t){for(const e of t.filters)if(e instanceof ge)return!1;return!0}function v0(t){if(t instanceof re)return t.field.canonicalString()+t.op.toString()+dl(t.value);if(Y1(t))return t.filters.map(e=>v0(e)).join(",");{const e=t.filters.map(n=>v0(n)).join(",");return`${t.op}(${e})`}}function CR(t,e){return t instanceof re?function(n,r){return r instanceof re&&n.op===r.op&&n.field.isEqual(r.field)&&Or(n.value,r.value)}(t,e):t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&CR(s,r.filters[o]),!0):!1}(t,e):void B()}function AR(t,e){const n=t.filters.concat(e);return ge.create(n,t.op)}function PR(t){return t instanceof re?function(e){return`${e.field.canonicalString()} ${e.op} ${dl(e.value)}`}(t):t instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(PR).join(" ,")+"}"}(t):"Filter"}class y5 extends re{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class v5 extends re{constructor(e,n){super(e,"in",n),this.keys=RR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class w5 extends re{constructor(e,n){super(e,"not-in",n),this.keys=RR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class E5 extends re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hc(n)&&Gc(n.arrayValue,this.value)}}class NR extends re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gc(this.value.arrayValue,n)}}class _5 extends re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gc(this.value.arrayValue,n)}}class I5 extends re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gc(this.value.arrayValue,r))}}/**
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
 */class T5{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function w0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new T5(t,e,n,r,i,s,o)}function Ao(t){const e=F(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>v0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ad(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>dl(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>dl(r)).join(",")),e.dt=n}return e.dt}function Pd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!g5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lS(t.startAt,e.startAt)&&lS(t.endAt,e.endAt)}function lp(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function up(t,e){return t.filters.filter(n=>n instanceof re&&n.field.isEqual(e))}function uS(t,e,n){let r=rf,i=!0;for(const s of up(t,e)){let o=rf,a=!0;switch(s.op){case"<":case"<=":o=p5(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=rf}sS({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];sS({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function cS(t,e,n){let r=zi,i=!0;for(const s of up(t,e)){let o=zi,a=!0;switch(s.op){case">=":case">":o=m5(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=zi}oS({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];oS({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class vi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function DR(t,e,n,r,i,s,o,a){return new vi(t,e,n,r,i,s,o,a)}function $l(t){return new vi(t)}function dS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function X1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sm(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function J1(t){return t.collectionGroup!==null}function go(t){const e=F(t);if(e.wt===null){e.wt=[];const n=Sm(e),r=X1(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ha(n)),e.wt.push(new Ha(Xe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ha(Xe.keyField(),s))}}}return e.wt}function pn(t){const e=F(t);if(!e._t)if(e.limitType==="F")e._t=w0(e.path,e.collectionGroup,go(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of go(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ha(s.field,o))}const r=e.endAt?new ms(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ms(e.startAt.position,e.startAt.inclusive):null;e._t=w0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function E0(t,e){e.getFirstInequalityField(),Sm(t);const n=t.filters.concat([e]);return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cp(t,e,n){return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rd(t,e){return Pd(pn(t),pn(e))&&t.limitType===e.limitType}function OR(t){return`${Ao(pn(t))}|lt:${t.limitType}`}function _0(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>PR(r)).join(", ")}]`),Ad(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>dl(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>dl(r)).join(",")),`Target(${n})`}(pn(t))}; limitType=${t.limitType})`}function Nd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of go(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=aS(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,go(n),r)||n.endAt&&!function(i,s,o){const a=aS(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,go(n),r))}(t,e)}function LR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function MR(t){return(e,n)=>{let r=!1;for(const i of go(t)){const s=S5(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function S5(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ps(a,l):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ko(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return IR(this.inner)}size(){return this.innerSize}}/**
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
 */const b5=new Fe($.comparator);function un(){return b5}const $R=new Fe($.comparator);function Ou(...t){let e=$R;for(const n of t)e=e.insert(n.key,n);return e}function FR(t){let e=$R;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return Zu()}function UR(){return Zu()}function Zu(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const k5=new Fe($.comparator),x5=new We($.comparator);function te(...t){let e=x5;for(const n of t)e=e.add(n);return e}const C5=new We(ee);function Z1(){return C5}/**
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
 */function VR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qc(e)?"-0":e}}function BR(t){return{integerValue:""+t}}function jR(t,e){return yR(e)?BR(e):VR(t,e)}/**
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
 */class bm{constructor(){this._=void 0}}function A5(t,e,n){return t instanceof fl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Tm(i)&&(i=Q1(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Po?qR(t,e):t instanceof Ro?WR(t,e):function(r,i){const s=zR(r,i),o=hS(s)+hS(r.gt);return g0(s)&&g0(r.gt)?BR(o):VR(r.serializer,o)}(t,e)}function P5(t,e,n){return t instanceof Po?qR(t,e):t instanceof Ro?WR(t,e):n}function zR(t,e){return t instanceof pl?g0(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class fl extends bm{}class Po extends bm{constructor(e){super(),this.elements=e}}function qR(t,e){const n=GR(e);for(const r of t.elements)n.some(i=>Or(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ro extends bm{constructor(e){super(),this.elements=e}}function WR(t,e){let n=GR(e);for(const r of t.elements)n=n.filter(i=>!Or(i,r));return{arrayValue:{values:n}}}class pl extends bm{constructor(e,n){super(),this.serializer=e,this.gt=n}}function hS(t){return ze(t.integerValue||t.doubleValue)}function GR(t){return Hc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Dd{constructor(e,n){this.field=e,this.transform=n}}function R5(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Po&&r instanceof Po||n instanceof Ro&&r instanceof Ro?cl(n.elements,r.elements,Or):n instanceof pl&&r instanceof pl?Or(n.gt,r.gt):n instanceof fl&&r instanceof fl}(t.transform,e.transform)}class N5{constructor(e,n){this.version=e,this.transformResults=n}}class Pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function of(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class km{}function HR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ul(t.key,Pe.none()):new Fl(t.key,t.data,Pe.none());{const n=t.data,r=xt.empty();let i=new We(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wi(t.key,r,new nr(i.toArray()),Pe.none())}}function D5(t,e,n){t instanceof Fl?function(r,i,s){const o=r.value.clone(),a=pS(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wi?function(r,i,s){if(!of(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=pS(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(KR(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ec(t,e,n,r){return t instanceof Fl?function(i,s,o,a){if(!of(i.precondition,s))return o;const l=i.value.clone(),u=mS(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof wi?function(i,s,o,a){if(!of(i.precondition,s))return o;const l=mS(i.fieldTransforms,a,s),u=s.data;return u.setAll(KR(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return of(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function O5(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zR(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function fS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&cl(n,r,(i,s)=>R5(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fl extends km{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wi extends km{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pS(t,e,n){const r=new Map;W(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,P5(o,a,n[i]))}return r}function mS(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,A5(s,o,e))}return r}class Ul extends km{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eE extends km{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tE{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&D5(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ec(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ec(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=UR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=HR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&cl(this.mutations,e.mutations,(n,r)=>fS(n,r))&&cl(this.baseMutations,e.baseMutations,(n,r)=>fS(n,r))}}class nE{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){W(e.mutations.length===r.length);let i=k5;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new nE(e,n,r,i)}}/**
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
 */class rE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class L5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,oe;function QR(t){switch(t){default:return B();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function YR(t){if(t===void 0)return Ye("GRPC error has no .code"),x.UNKNOWN;switch(t){case et.OK:return x.OK;case et.CANCELLED:return x.CANCELLED;case et.UNKNOWN:return x.UNKNOWN;case et.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case et.INTERNAL:return x.INTERNAL;case et.UNAVAILABLE:return x.UNAVAILABLE;case et.UNAUTHENTICATED:return x.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case et.NOT_FOUND:return x.NOT_FOUND;case et.ALREADY_EXISTS:return x.ALREADY_EXISTS;case et.PERMISSION_DENIED:return x.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case et.ABORTED:return x.ABORTED;case et.OUT_OF_RANGE:return x.OUT_OF_RANGE;case et.UNIMPLEMENTED:return x.UNIMPLEMENTED;case et.DATA_LOSS:return x.DATA_LOSS;default:return B()}}(oe=et||(et={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class iE{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ch}static getOrCreateInstance(){return Ch===null&&(Ch=new iE),Ch}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ch=null;/**
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
 */function XR(){return new TextEncoder}/**
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
 */const M5=new Ga([4294967295,4294967295],0);function gS(t){const e=XR().encode(t),n=new PB;return n.update(e),new Uint8Array(n.digest())}function yS(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ga([n,r],0),new Ga([i,s],0)]}class sE{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Lu(`Invalid padding: ${n}`);if(r<0)throw new Lu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Lu(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ga.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ga.fromNumber(r)));return i.compare(M5)===1&&(i=new Ga([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=gS(e),[r,i]=yS(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sE(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=gS(e),[r,i]=yS(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Lu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Od{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ld.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Od(q.min(),i,new Fe(ee),un(),te())}}class Ld{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ld(r,n,te(),te(),te())}}/**
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
 */class af{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class JR{constructor(e,n){this.targetId=e,this.Vt=n}}class ZR{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vS{constructor(){this.St=0,this.Dt=ES(),this.Ct=ct.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=te(),n=te(),r=te();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Ld(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=ES()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class $5{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=un(),this.zt=wS(),this.Wt=new Fe(ee)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(lp(o))if(i===0){const a=new $(o.path);this.Yt(r,a,Ie.newNoDocument(a,q.min()))}else W(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=iE.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var h,f,p,m,E,v;const g={localCacheCount:c,existenceFilterCount:d.count},y=d.unchangedNames;return y&&(g.bloomFilter={applied:u===0,hashCount:(h=y==null?void 0:y.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(m=(p=(f=y==null?void 0:y.bits)===null||f===void 0?void 0:f.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(v=(E=y==null?void 0:y.bits)===null||E===void 0?void 0:E.padding)!==null&&v!==void 0?v:0}),g}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=hs(s).toUint8Array()}catch(c){if(c instanceof TR)return ar("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new sE(l,o,a)}catch(c){return ar(c instanceof Lu?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&lp(a.target)){const l=new $(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ie.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=te();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Od(e,n,this.Wt,this.jt,r);return this.jt=un(),this.zt=wS(),this.Wt=new Fe(ee),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new vS,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new We(ee),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new vS),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function wS(){return new Fe($.comparator)}function ES(){return new Fe($.comparator)}const F5=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),U5=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),V5=(()=>({and:"AND",or:"OR"}))();class B5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function I0(t,e){return t.useProto3Json||Ad(e)?e:{value:e}}function ml(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eN(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function j5(t,e){return ml(t,e.toTimestamp())}function Je(t){return W(!!t),q.fromTimestamp(function(e){const n=ds(e);return new Re(n.seconds,n.nanos)}(t))}function oE(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tN(t){const e=le.fromString(t);return W(cN(e)),e}function Kc(t,e){return oE(t.databaseId,e.path)}function Pr(t,e){const n=tN(e);if(n.get(1)!==t.databaseId.projectId)throw new P(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(rN(n))}function T0(t,e){return oE(t.databaseId,e)}function nN(t){const e=tN(t);return e.length===4?le.emptyPath():rN(e)}function Qc(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rN(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _S(t,e,n){return{name:Kc(t,e),fields:n.value.mapValue.fields}}function iN(t,e,n){const r=Pr(t,e.name),i=Je(e.updateTime),s=e.createTime?Je(e.createTime):q.min(),o=new xt({mapValue:{fields:e.fields}}),a=Ie.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function z5(t,e){return"found"in e?function(n,r){W(!!r.found),r.found.name,r.found.updateTime;const i=Pr(n,r.found.name),s=Je(r.found.updateTime),o=r.found.createTime?Je(r.found.createTime):q.min(),a=new xt({mapValue:{fields:r.found.fields}});return Ie.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){W(!!r.missing),W(!!r.readTime);const i=Pr(n,r.missing),s=Je(r.readTime);return Ie.newNoDocument(i,s)}(t,e):B()}function q5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(W(u===void 0||typeof u=="string"),ct.fromBase64String(u||"")):(W(u===void 0||u instanceof Uint8Array),ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?x.UNKNOWN:YR(l.code);return new P(u,l.message||"")}(o);n=new ZR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pr(t,r.document.name),s=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):q.min(),a=new xt({mapValue:{fields:r.document.fields}}),l=Ie.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new af(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pr(t,r.document),s=r.readTime?Je(r.readTime):q.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];n=new af([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pr(t,r.document),s=r.removedTargetIds||[];n=new af([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new L5(i,s),a=r.targetId;n=new JR(a,o)}}return n}function Yc(t,e){let n;if(e instanceof Fl)n={update:_S(t,e.key,e.value)};else if(e instanceof Ul)n={delete:Kc(t,e.key)};else if(e instanceof wi)n={update:_S(t,e.key,e.data),updateMask:Y5(e.fieldMask)};else{if(!(e instanceof eE))return B();n={verify:Kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof fl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Po)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pl)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:j5(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(t,e.precondition)),n}function S0(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Pe.updateTime(Je(i.updateTime)):i.exists!==void 0?Pe.exists(i.exists):Pe.none()}(e.currentDocument):Pe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)W(o.setToServerValue==="REQUEST_TIME"),a=new fl;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Po(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ro(u)}else"increment"in o?a=new pl(s,o.increment):B();const l=Xe.fromServerFormat(o.fieldPath);return new Dd(l,a)}(t,i)):[];if(e.update){e.update.name;const i=Pr(t,e.update.name),s=new xt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new nr(l.map(u=>Xe.fromServerFormat(u)))}(e.updateMask);return new wi(i,s,o,n,r)}return new Fl(i,s,n,r)}if(e.delete){const i=Pr(t,e.delete);return new Ul(i,n)}if(e.verify){const i=Pr(t,e.verify);return new eE(i,n)}return B()}function W5(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Je(r.updateTime):Je(i);return s.isEqual(q.min())&&(s=Je(i)),new N5(s,r.transformResults||[])}(n,e))):[]}function sN(t,e){return{documents:[T0(t,e.path)]}}function oN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=T0(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=T0(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return uN(ge.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ya(c.field),direction:H5(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=I0(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function aN(t){let e=nN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){W(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=lN(c);return d instanceof ge&&Y1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new Ha(va(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Ad(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new ms(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new ms(h,d)}(n.endAt)),DR(e,i,o,s,a,"F",l,u)}function G5(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lN(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=va(e.unaryFilter.field);return re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=va(e.unaryFilter.field);return re.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=va(e.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=va(e.unaryFilter.field);return re.create(s,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return re.create(va(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(n=>lN(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function H5(t){return F5[t]}function K5(t){return U5[t]}function Q5(t){return V5[t]}function ya(t){return{fieldPath:t.canonicalString()}}function va(t){return Xe.fromServerFormat(t.fieldPath)}function uN(t){return t instanceof re?function(e){if(e.op==="=="){if(iS(e.value))return{unaryFilter:{field:ya(e.field),op:"IS_NAN"}};if(rS(e.value))return{unaryFilter:{field:ya(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(iS(e.value))return{unaryFilter:{field:ya(e.field),op:"IS_NOT_NAN"}};if(rS(e.value))return{unaryFilter:{field:ya(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ya(e.field),op:K5(e.op),value:e.value}}}(t):t instanceof ge?function(e){const n=e.getFilters().map(r=>uN(r));return n.length===1?n[0]:{compositeFilter:{op:Q5(e.op),filters:n}}}(t):B()}function Y5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cN(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Kr{constructor(e,n,r,i,s=q.min(),o=q.min(),a=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dN{constructor(e){this.fe=e}}function X5(t,e){let n;if(e.document)n=iN(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),i=Do(e.noDocument.readTime);n=Ie.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return B();{const r=$.fromSegments(e.unknownDocument.path),i=Do(e.unknownDocument.version);n=Ie.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Re(r[0],r[1]);return q.fromTimestamp(i)}(e.readTime)),n}function IS(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:dp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Kc(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ml(i,s.version.toTimestamp()),createTime:ml(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:No(e.version)};else{if(!e.isUnknownDocument())return B();r.unknownDocument={path:n.path.toArray(),version:No(e.version)}}return r}function dp(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function No(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Do(t){const e=new Re(t.seconds,t.nanoseconds);return q.fromTimestamp(e)}function Qs(t,e){const n=(e.baseMutations||[]).map(s=>S0(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>S0(t.fe,s)),i=Re.fromMillis(e.localWriteTimeMs);return new tE(e.batchId,i,n,r)}function Mu(t){const e=Do(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Do(t.lastLimboFreeSnapshotVersion):q.min();let r;var i;return t.query.documents!==void 0?(W((i=t.query).documents.length===1),r=pn($l(nN(i.documents[0])))):r=function(s){return pn(aN(s))}(t.query),new Kr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ct.fromBase64String(t.resumeToken))}function hN(t,e){const n=No(e.snapshotVersion),r=No(e.lastLimboFreeSnapshotVersion);let i;i=lp(e.target)?sN(t.fe,e.target):oN(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ao(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function aE(t){const e=aN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cp(e,e.limit,"L"):e}function hy(t,e){return new rE(e.largestBatchId,S0(t.fe,e.overlayMutation))}function TS(t,e){const n=e.path.lastSegment();return[t,Jt(e.path.popLast()),n]}function SS(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:No(r.readTime),documentKey:Jt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class J5{getBundleMetadata(e,n){return bS(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Do(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return bS(e).put({bundleId:(r=n).id,createTime:No(Je(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return kS(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:aE(i.bundledQuery),readTime:Do(i.readTime)};var i})}saveNamedQuery(e,n){return kS(e).put(function(r){return{name:r.name,readTime:No(Je(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function bS(t){return It(t,"bundles")}function kS(t){return It(t,"namedQueries")}/**
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
 */class xm{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new xm(e,r)}getOverlay(e,n){return hu(e).get(TS(this.userId,n)).next(r=>r?hy(this.serializer,r):null)}getOverlays(e,n){const r=Sr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new rE(n,o);i.push(this.we(e,a))}),b.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Jt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(hu(e).J("collectionPathOverlayIndex",a))}),b.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Sr(),s=Jt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return hu(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=hy(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Sr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return hu(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=hy(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}we(e,n){return hu(e).put(function(r,i,s){const[o,a,l]=TS(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Yc(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function hu(t){return It(t,"documentOverlays")}/**
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
 */class Ys{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(ze(e.integerValue));else if("doubleValue"in e){const r=ze(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),qc(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(hs(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?SR(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):B()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),$.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Ys.Ve=new Ys;function Z5(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function xS(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=Z5(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class ej{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=xS(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=xS(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class tj{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class nj{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class fu{constructor(){this.je=new ej,this.ze=new tj(this.je),this.We=new nj(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Xs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Xs(this.indexId,this.documentKey,this.arrayValue,r)}}function ki(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=CS(t.arrayValue,e.arrayValue),n!==0?n:(n=CS(t.directionalValue,e.directionalValue),n!==0?n:$.comparator(t.documentKey,e.documentKey)))}function CS(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class rj{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){W(e.collectionGroup===this.collectionId);const n=c0(e);if(n!==void 0&&!this.en(n))return!1;const r=zs(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function fN(t){var e,n;if(W(t instanceof re||t instanceof ge),t instanceof re){if(t instanceof NR){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>re.create(t.field,"==",s)))||[];return ge.create(i,"or")}return t}const r=t.filters.map(i=>fN(i));return ge.create(r,t.op)}function ij(t){if(t.getFilters().length===0)return[];const e=x0(fN(t));return W(pN(e)),b0(e)||k0(e)?[e]:e.getFilters()}function b0(t){return t instanceof re}function k0(t){return t instanceof ge&&Y1(t)}function pN(t){return b0(t)||k0(t)||function(e){if(e instanceof ge&&y0(e)){for(const n of e.getFilters())if(!b0(n)&&!k0(n))return!1;return!0}return!1}(t)}function x0(t){if(W(t instanceof re||t instanceof ge),t instanceof re)return t;if(t.filters.length===1)return x0(t.filters[0]);const e=t.filters.map(r=>x0(r));let n=ge.create(e,t.op);return n=hp(n),pN(n)?n:(W(n instanceof ge),W(hl(n)),W(n.filters.length>1),n.filters.reduce((r,i)=>lE(r,i)))}function lE(t,e){let n;return W(t instanceof re||t instanceof ge),W(e instanceof re||e instanceof ge),n=t instanceof re?e instanceof re?function(r,i){return ge.create([r,i],"and")}(t,e):AS(t,e):e instanceof re?AS(e,t):function(r,i){if(W(r.filters.length>0&&i.filters.length>0),hl(r)&&hl(i))return AR(r,i.getFilters());const s=y0(r)?r:i,o=y0(r)?i:r,a=s.filters.map(l=>lE(l,o));return ge.create(a,"or")}(t,e),hp(n)}function AS(t,e){if(hl(e))return AR(e,t.getFilters());{const n=e.filters.map(r=>lE(t,r));return ge.create(n,"or")}}function hp(t){if(W(t instanceof re||t instanceof ge),t instanceof re)return t;const e=t.getFilters();if(e.length===1)return hp(e[0]);if(xR(t))return t;const n=e.map(i=>hp(i)),r=[];return n.forEach(i=>{i instanceof re?r.push(i):i instanceof ge&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ge.create(r,t.op)}/**
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
 */class sj{constructor(){this.rn=new uE}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Rn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class uE{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(le.comparator)).toArray()}}/**
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
 */const Ah=new Uint8Array(0);class oj{constructor(e,n){this.user=e,this.databaseId=n,this.on=new uE,this.un=new Rs(r=>Ao(r),(r,i)=>Pd(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:Jt(i)};return PS(e).put(s)}return b.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[dR(n),""],!1,!0);return PS(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Tr(o.parent))}return r})}addFieldIndex(e,n){const r=Ph(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=mu(e);return s.next(a=>{o.put(SS(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ph(e),i=mu(e),s=pu(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=pu(e);let i=!0;const s=new Map;return b.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return b.forEach(s,(l,u)=>{var c;N("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(y=>`${y.fieldPath}:${y.kind}`).join(",")}`} to execute ${Ao(n)}`);const d=function(y,_){const I=c0(_);if(I===void 0)return null;for(const S of up(y,I.fieldPath))switch(S.op){case"array-contains-any":return S.value.arrayValue.values||[];case"array-contains":return[S.value]}return null}(u,l),h=function(y,_){const I=new Map;for(const S of zs(_))for(const T of up(y,S.fieldPath))switch(T.op){case"==":case"in":I.set(S.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return I.set(S.fieldPath.canonicalString(),T.value),Array.from(I.values())}return null}(u,l),f=function(y,_){const I=[];let S=!0;for(const T of zs(_)){const C=T.kind===0?uS(y,T.fieldPath,y.startAt):cS(y,T.fieldPath,y.startAt);I.push(C.value),S&&(S=C.inclusive)}return new ms(I,S)}(u,l),p=function(y,_){const I=[];let S=!0;for(const T of zs(_)){const C=T.kind===0?cS(y,T.fieldPath,y.endAt):uS(y,T.fieldPath,y.endAt);I.push(C.value),S&&(S=C.inclusive)}return new ms(I,S)}(u,l),m=this.hn(l,u,f),E=this.hn(l,u,p),v=this.ln(l,u,h),g=this.fn(l.indexId,d,m,f.inclusive,E,p.inclusive,v);return b.forEach(g,y=>r.H(y,n.limit).next(_=>{_.forEach(I=>{const S=$.fromSegments(I.documentKey);o.has(S)||(o=o.add(S),a.push(S))})}))}).next(()=>a)}return b.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=ij(ge.create(e.filters,"and")).map(r=>w0(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.dn(n[d/u]):Ah,f=this.wn(e,h,r[d%u],i),p=this._n(e,h,s[d%u],o),m=a.map(E=>this.wn(e,h,E,!0));c.push(...this.createRange(f,p,m))}return c}wn(e,n,r,i){const s=new Xs(e,$.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new Xs(e,$.empty(),n,r);return i?s.Je():s}an(e,n){const r=new rj(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return b.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new We(Xe.comparator),u=!1;for(const c of a.filters)for(const d of c.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?u=!0:l=l.add(d.field));for(const c of a.orderBy)c.field.isKeyField()||(l=l.add(c.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new fu;for(const i of zs(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Ys.Ve._e(s,o)}return r.Qe()}dn(e){const n=new fu;return Ys.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new fu;return Ys.Ve._e(Co(this.databaseId,n),r.He(function(i){const s=zs(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new fu);let s=0;for(const o of zs(e)){const a=r[s++];for(const l of i)if(this.yn(n,o.fieldPath)&&Hc(a))i=this.pn(i,o,a);else{const u=l.He(o.kind);Ys.Ve._e(a,u)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new fu;l.seed(a.Qe()),Ys.Ve._e(o,l.He(n.kind)),s.push(l)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof re&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ph(e),i=mu(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return b.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const d=c?new ap(c.sequenceNumber,new Rn(Do(c.readTime),new $(Tr(c.documentKey)),c.largestBatchId)):ap.empty(),h=u.fields.map(([f,p])=>new jB(Xe.fromServerFormat(f),p));return new hR(u.indexId,u.collectionGroup,h,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ph(e),s=mu(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,l=>s.put(SS(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),b.forEach(a,l=>this.En(e,i,l).next(u=>{const c=this.An(s,l);return u.isEqual(c)?b.resolve():this.vn(e,s,l,u,c)}))))})}Rn(e,n,r,i){return pu(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return pu(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=pu(e);let s=new We(ki);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new Xs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new We(ki);const i=this.mn(n,e);if(i==null)return r;const s=c0(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Hc(o))for(const a of o.arrayValue.values||[])r=r.add(new Xs(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Xs(n.indexId,e.key,Ah,i));return r}vn(e,n,r,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,d){const h=a.getIterator(),f=l.getIterator();let p=aa(h),m=aa(f);for(;p||m;){let E=!1,v=!1;if(p&&m){const g=u(p,m);g<0?v=!0:g>0&&(E=!0)}else p!=null?v=!0:E=!0;E?(c(m),m=aa(f)):v?(d(p),p=aa(h)):(p=aa(h),m=aa(f))}}(i,s,ki,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),b.waitFor(o)}Tn(e){let n=1;return mu(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ki(o,a)).filter((o,a,l)=>!a||ki(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ki(o,e),l=ki(o,n);if(a===0)i[0]=e.Je();else if(a>0&&l<0)i.push(o),i.push(o.Je());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ah,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ah,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return ki(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(RS)}getMinOffset(e,n){return b.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||B())).next(RS)}}function PS(t){return It(t,"collectionParents")}function pu(t){return It(t,"indexEntries")}function Ph(t){return It(t,"indexConfiguration")}function mu(t){return It(t,"indexState")}function RS(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;H1(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Rn(e.readTime,e.documentKey,n)}/**
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
 */const NS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function mN(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{W(a===1)}));const u=[];for(const c of n.mutations){const d=vR(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return b.waitFor(s).next(()=>u)}function fp(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw B();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(41943040,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);class Cm{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Cm(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xi(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=wa(e),o=xi(e);return o.add({}).next(a=>{W(typeof a=="number");const l=new tE(a,n,r,i),u=function(h,f,p){const m=p.baseMutations.map(v=>Yc(h.fe,v)),E=p.mutations.map(v=>Yc(h.fe,v));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:m,mutations:E}}(this.serializer,this.userId,l),c=[];let d=new We((h,f)=>ee(h.canonicalString(),f.canonicalString()));for(const h of i){const f=vR(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,KB))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Vn[a]=l.keys()}),b.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return xi(e).get(n).next(r=>r?(W(r.userId===this.userId),Qs(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?b.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return xi(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(W(a.batchId>=r),s=Qs(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return xi(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xi(e).j("userMutationsIndex",n).next(r=>r.map(i=>Qs(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=nf(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return wa(e).X({range:i},(o,a,l)=>{const[u,c,d]=o,h=Tr(c);if(u===this.userId&&n.path.isEqual(h))return xi(e).get(d).next(f=>{if(!f)throw B();W(f.userId===this.userId),s.push(Qs(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ee);const i=[];return n.forEach(s=>{const o=nf(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=wa(e).X({range:a},(u,c,d)=>{const[h,f,p]=u,m=Tr(f);h===this.userId&&s.path.isEqual(m)?r=r.add(p):d.done()});i.push(l)}),b.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=nf(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new We(ee);return wa(e).X({range:o},(l,u,c)=>{const[d,h,f]=l,p=Tr(h);d===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(xi(e).get(s).next(o=>{if(o===null)throw B();W(o.userId===this.userId),r.push(Qs(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return mN(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return wa(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Tr(s[1]);i.push(l)}else a.done()}).next(()=>{W(i.length===0)})})}containsKey(e,n){return gN(e,this.userId,n)}xn(e){return yN(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function gN(t,e,n){const r=nf(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return wa(t).X({range:s,Y:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function xi(t){return It(t,"mutations")}function wa(t){return It(t,"documentMutations")}function yN(t){return It(t,"mutationQueues")}/**
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
 */class Oo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Oo(0)}static Mn(){return new Oo(-1)}}/**
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
 */class aj{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new Oo(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>q.fromTimestamp(new Re(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>la(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(W(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return la(e).X((o,a)=>{const l=Mu(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,n){return la(e).X((r,i)=>{const s=Mu(i);n(s)})}$n(e){return DS(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}On(e,n){return DS(e).put("targetGlobalKey",n)}Fn(e,n){return la(e).put(hN(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ao(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return la(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Mu(a);Pd(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Mi(e);return n.forEach(o=>{const a=Jt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,n,r){const i=Mi(e);return b.forEach(n,s=>{const o=Jt(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Mi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Mi(e);let s=te();return i.X({range:r,Y:!0},(o,a,l)=>{const u=Tr(o[1]),c=new $(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Jt(n.path),i=IDBKeyRange.bound([r],[dR(r)],!1,!0);let s=0;return Mi(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,n){return la(e).get(n).next(r=>r?Mu(r):null)}}function la(t){return It(t,"targets")}function DS(t){return It(t,"targetGlobal")}function Mi(t){return It(t,"targetDocuments")}/**
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
 */function OS([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class lj{constructor(e){this.Ln=e,this.buffer=new We(OS),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();OS(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ps(n)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await As(n)}await this.Qn(3e5)})}}class cj{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(ln.ct);const r=new lj(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(NS)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),NS):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),u0()<=ae.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function dj(t,e){return new cj(t,e)}/**
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
 */class hj{constructor(e,n){this.db=e,this.garbageCollector=dj(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return Rh(e,r)}removeReference(e,n,r){return Rh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Rh(e,n)}Xn(e,n){return function(r,i){let s=!1;return yN(r).Z(o=>gN(r,o,i).next(a=>(a&&(s=!0),b.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),Mi(e).delete([0,Jt(o.path)])))});i.push(l)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Rh(e,n)}Yn(e,n){const r=Mi(e);let i,s=ln.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==ln.ct&&n(new $(Tr(i)),s),s=u,i=l):s=ln.ct}).next(()=>{s!==ln.ct&&n(new $(Tr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Rh(t,e){return Mi(t).put(function(n,r){return{targetId:0,path:Jt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class vN{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fj{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Fs(e).put(r)}removeEntry(e,n,r){return Fs(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],dp(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=Ie.newInvalidDocument(n);return Fs(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(gu(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:Ie.newInvalidDocument(n)};return Fs(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(gu(n))},(i,s)=>{r={document:this.ts(n,s),size:fp(s)}}).next(()=>r)}getEntries(e,n){let r=un();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=un(),i=new Fe($.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,fp(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return b.resolve();let i=new We($S);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(gu(i.first()),gu(i.last())),o=i.getIterator();let a=o.getNext();return Fs(e).X({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=$.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&$S(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.G(gu(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),dp(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Fs(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=un();for(const c of l){const d=this.ts($.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);d.isFoundDocument()&&(Nd(n,d)||i.has(d.key))&&(u=u.insert(d.key,d))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=un();const o=MS(n,r),a=MS(n,Rn.max());return Fs(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.ts($.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new pj(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return LS(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}Zn(e,n){return LS(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=X5(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return Ie.newInvalidDocument(e)}}function wN(t){return new fj(t)}class pj extends vN{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new Rs(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new We((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=IS(this.os.serializer,o);i=i.add(s.path.popLast());const u=fp(l);r+=u-a.size,n.push(this.os.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=IS(this.os.serializer,o.convertToNoDocument(q.min()));n.push(this.os.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function LS(t){return It(t,"remoteDocumentGlobal")}function Fs(t){return It(t,"remoteDocumentsV14")}function gu(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function MS(t,e){const n=e.documentKey.path.toArray();return[t,dp(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function $S(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class mj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class EN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ec(r.mutation,i,nr.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ou();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=un();const o=Zu(),a=Zu();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof wi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ec(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,nr.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new mj(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zu();let i=new Fe((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||nr.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=UR();c.forEach(h=>{if(!s.has(h)){const f=HR(n.get(h),r.get(h));f!==null&&d.set(h,f),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):J1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Sr());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?b.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:FR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Ou();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ou();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(u,c){return new vi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ie.newInvalidDocument(u)))});let o=Ou();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ec(u.mutation,l,nr.empty(),Re.now()),Nd(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class gj{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Je(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:aE(r.bundledQuery),readTime:Je(r.readTime)}}(n)),b.resolve()}}/**
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
 */class yj{constructor(){this.overlays=new Fe($.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Sr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Sr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rE(n,r));let s=this.ls.get(n);s===void 0&&(s=te(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class cE{constructor(){this.fs=new We(pt.ds),this.ws=new We(pt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new pt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new pt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new $(new le([])),r=new pt(n,e),i=new pt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new le([])),r=new pt(n,e),i=new pt(n,e+1);let s=te();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new pt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||ee(e.As,n.As)}static _s(e,n){return ee(e.As,n.As)||$.comparator(e.key,n.key)}}/**
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
 */class vj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new We(pt.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tE(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),i=new pt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ee);return n.forEach(i=>{const s=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),b.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new pt(new $(s),0);let a=new We(ee);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){W(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return b.forEach(n.mutations,i=>{const s=new pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new pt(n,0),i=this.Rs.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wj{constructor(e){this.Ds=e,this.docs=new Fe($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let r=un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=un();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||H1(pR(c),r)<=0||(i.has(c.key)||Nd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}Cs(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ej(this)}getSize(e){return b.resolve(this.size)}}class Ej extends vN{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class _j{constructor(e){this.persistence=e,this.xs=new Rs(n=>Ao(n),Pd),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Ns=0,this.ks=new cE,this.targetCount=0,this.Ms=Oo.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Oo(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
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
 */class _N{constructor(e,n){this.$s={},this.overlays={},this.Os=new ln(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new _j(this),this.indexManager=new sj,this.remoteDocumentCache=function(r){return new wj(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new dN(n),this.qs=new gj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new vj(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new Ij(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return b.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class Ij extends gR{constructor(e){super(),this.currentSequenceNumber=e}}class Am{constructor(e){this.persistence=e,this.Qs=new cE,this.js=null}static zs(e){return new Am(e)}get Ws(){if(this.js)return this.js;throw B()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,r=>{const i=$.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Tj{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Im("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ZT,{unique:!0}),a.createObjectStore("documentMutations")}(e),FS(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),FS(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ZT,{unique:!0});const c=l.store("mutations"),d=u.map(h=>c.put(h));return b.waitFor(d)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:o5});l.createIndex("collectionPathOverlayIndex",a5,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",l5,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:QB});l.createIndex("documentKeyIndex",YB),l.createIndex("collectionGroupIndex",XB)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:n5}).createIndex("sequenceNumberIndex",r5,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:i5}).createIndex("documentKeyIndex",s5,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=fp(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>b.forEach(a,l=>{W(l.userId===s.userId);const u=Qs(this.serializer,l);return mN(e,s.userId,u).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new le(o),u=function(c){return[0,Jt(c)]}(l);s.push(n.get(u).next(c=>c?b.resolve():(d=>n.put({targetId:0,path:Jt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>b.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:t5});const r=n.store("collectionParents"),i=new uE,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Jt(l)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const l=new le(o);return s(l.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,l],u)=>{const c=Tr(a);return s(c.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=Mu(i),o=hN(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new $(le.fromString(u.document.name).popFirst(5)):u.noDocument?$.fromSegments(u.noDocument.path):u.unknownDocument?$.fromSegments(u.unknownDocument.path):B()).path.toArray();var u;/**
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
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>b.waitFor(i))}si(e,n){const r=n.store("mutations"),i=wN(this.serializer),s=new _N(Am.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:te();Qs(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),b.forEach(a,(l,u)=>{const c=new gt(u),d=xm.de(this.serializer,c),h=s.getIndexManager(c),f=Cm.de(c,this.serializer,h,s.referenceDelegate);return new EN(i,f,d,h).recalculateAndSaveOverlaysForDocumentKeys(new d0(n,ln.ct),l).next()})})}}function FS(t){t.createObjectStore("targetDocuments",{keyPath:ZB}).createIndex("documentTargetsIndex",e5,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",JB,{unique:!0}),t.createObjectStore("targetGlobal")}const fy="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class dE{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=c,this.ui=d,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=h=>Promise.resolve(),!dE.D())throw new P(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new hj(this,i),this.di=n+"main",this.serializer=new dN(l),this.wi=new tr(this.di,this.ui,new Tj(this.serializer)),this.Bs=new aj(this.referenceDelegate,this.serializer),this.remoteDocumentCache=wN(this.serializer),this.qs=new J5,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&Ye("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new P(x.FAILED_PRECONDITION,fy);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new ln(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Nh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(Ps(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return yu(e).get("owner").next(n=>b.resolve(this.Ri(n)))}Pi(e){return Nh(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=It(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?b.resolve(!0):yu(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new P(x.FAILED_PRECONDITION,fy);return!1}}return!(!this.networkEnabled||!this.inForeground)||Nh(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new d0(e,ln.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Nh(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Cm.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new oj(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return xm.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?c5:o===14?_R:o===13?ER:o===12?u5:o===11?wR:void B();var o;let a;return this.wi.runTransaction(e,i,s,l=>(a=new d0(l,this.Os?this.Os.next():ln.ct),n==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw Ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new P(x.FAILED_PRECONDITION,mR);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Oi(e){return yu(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new P(x.FAILED_PRECONDITION,fy)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return yu(e).put("owner",n)}static D(){return tr.D()}Ai(e){const n=yu(e);return n.get("owner").next(r=>this.Ri(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ye(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;rV()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ye("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Ye("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function yu(t){return It(t,"owner")}function Nh(t){return It(t,"clientMetadata")}function hE(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class fE{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fE(e,n.fromCache,r,i)}}/**
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
 */class IN{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(dS(n))return b.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cp(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,cp(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return dS(n)||i.isEqual(q.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(u0()<=ae.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_0(n)),this.Wi(e,o,n,fR(i,-1)))})}ji(e,n){let r=new We(MR(e));return n.forEach((i,s)=>{Nd(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return u0()<=ae.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",_0(n)),this.Ui.getDocumentsMatchingQuery(e,n,Rn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Sj{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Fe(ee),this.Yi=new Rs(s=>Ao(s),Pd),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EN(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function TN(t,e,n,r){return new Sj(t,e,n,r)}async function SN(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function bj(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=b.resolve();return d.forEach(f=>{h=h.next(()=>u.getEntry(a,f)).next(p=>{const m=l.docVersions.get(f);W(m!==null),p.version.compareTo(m)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function bN(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function kj(t,e){const n=F(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,d)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(ct.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(d,f),function(p,m,E){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,f,c)&&a.push(n.Bs.updateTargetData(s,f))});let l=un(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(kN(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(q.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(d=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function kN(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=un();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function xj(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gl(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function yl(t,e,n){const r=F(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ps(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function pp(t,e,n){const r=F(t);let i=q.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=F(a),d=c.Yi.get(u);return d!==void 0?b.resolve(c.Ji.get(d)):c.Bs.getTargetData(l,u)}(r,o,pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:te())).next(a=>(AN(r,LR(e),a),{documents:a,ir:s})))}function xN(t,e){const n=F(t),r=F(n.Bs),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function CN(t,e){const n=F(t),r=n.Xi.get(e)||q.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Zi.getAllFromCollectionGroup(i,e,fR(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(AN(n,e,i),i))}function AN(t,e,n){let r=t.Xi.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}async function Cj(t,e,n,r){const i=F(t);let s=te(),o=un();for(const u of n){const c=e.rr(u.metadata.name);u.document&&(s=s.add(c));const d=e.ur(u);d.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(c,d)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),l=await gl(i,function(u){return pn($l(le.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>kN(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Bs.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Bs.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.nr,c.sr)).next(()=>c.nr)))}async function Aj(t,e,n=te()){const r=await gl(t,pn(aE(e.bundledQuery))),i=F(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(ct.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,n,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function US(t,e){return`firestore_clients_${t}_${e}`}function VS(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function py(t,e){return`firestore_targets_${t}_${e}`}class mp{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static ar(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new P(i.error.code,i.error.message))),o?new mp(e,n,i.state,s):(Ye("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class tc{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new P(r.error.code,r.error.message))),s?new tc(e,r.state,i):(Ye("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gp{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Z1();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=yR(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new gp(e,s):(Ye("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class pE{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new pE(n.clientId,n.onlineState):(Ye("SharedClientState",`Failed to parse online state: ${e}`),null)}}class C0{constructor(){this.activeTargetIds=Z1()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class my{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Fe(ee),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=US(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new C0),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(US(this.persistenceKey,r));if(i){const s=gp.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(py(this.persistenceKey,e));if(r){const i=tc.ar(e,r);i&&(n=i.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(py(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void Ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(i){let s=ln.ct;if(i!=null)try{const o=JSON.parse(i);W(typeof o=="number"),s=o}catch(o){Ye("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==ln.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const i=new mp(this.currentUser,e,n,r),s=VS(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const n=VS(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const i=py(this.persistenceKey,e),s=new tc(e,n,r);this.setItem(i,s.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return gp.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return mp.ar(new gt(s),i,n)}Ur(e,n){const r=this.Ar.exec(e),i=Number(r[1]);return tc.ar(i,n)}br(e){return pE.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Z1();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class PN{constructor(){this.Hr=new C0,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new C0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Pj{Yr(e){}shutdown(){}}/**
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
 */class BS{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dh=null;function gy(){return Dh===null?Dh=268435456+Math.round(2147483648*Math.random()):Dh++,"0x"+Dh.toString(16)}/**
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
 */const Rj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Nj{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ft="WebChannelConnection";class Dj extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=gy(),a=this.To(e,n);N("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(N("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ar("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ml,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=Rj[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=gy();return new Promise((o,a)=>{const l=new AB;l.setWithCredentials(!0),l.listenOnce(kB.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dy.NO_ERROR:const c=l.getResponseJson();N(Ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case dy.TIMEOUT:N(Ft,`RPC '${e}' ${s} timed out`),a(new P(x.DEADLINE_EXCEEDED,"Request time out"));break;case dy.HTTP_ERROR:const d=l.getStatus();if(N(Ft,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const p=function(m){const E=m.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(E)>=0?E:x.UNKNOWN}(f.status);a(new P(p,f.message))}else a(new P(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(x.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{N(Ft,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);N(Ft,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=gy(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=SB(),a=bB(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new CB({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");N(Ft,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,f=!1;const p=new Nj({ro:E=>{f?N(Ft,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(h||(N(Ft,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),N(Ft,`RPC '${e}' stream ${i} sending:`,E),d.send(E))},oo:()=>d.close()}),m=(E,v,g)=>{E.listen(v,y=>{try{g(y)}catch(_){setTimeout(()=>{throw _},0)}})};return m(d,kh.EventType.OPEN,()=>{f||N(Ft,`RPC '${e}' stream ${i} transport opened.`)}),m(d,kh.EventType.CLOSE,()=>{f||(f=!0,N(Ft,`RPC '${e}' stream ${i} transport closed`),p.wo())}),m(d,kh.EventType.ERROR,E=>{f||(f=!0,ar(Ft,`RPC '${e}' stream ${i} transport errored:`,E),p.wo(new P(x.UNAVAILABLE,"The operation could not be completed")))}),m(d,kh.EventType.MESSAGE,E=>{var v;if(!f){const g=E.data[0];W(!!g);const y=g,_=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(_){N(Ft,`RPC '${e}' stream ${i} received error:`,_);const I=_.status;let S=function(C){const D=et[C];if(D!==void 0)return YR(D)}(I),T=_.message;S===void 0&&(S=x.INTERNAL,T="Unknown error status: "+I+" with message "+_.message),f=!0,p.wo(new P(S,T)),d.close()}else N(Ft,`RPC '${e}' stream ${i} received:`,g),p._o(g)}}),m(a,xB.STAT_EVENT,E=>{E.stat===QT.PROXY?N(Ft,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===QT.NOPROXY&&N(Ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}/**
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
 */function RN(){return typeof window<"u"?window:null}function lf(){return typeof document<"u"?document:null}/**
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
 */function Md(t){return new B5(t,!0)}/**
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
 */class mE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class NN{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new mE(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Ye(n.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new P(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Oj extends NN{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=q5(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?Je(s.readTime):q.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Qc(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=lp(a)?{documents:sN(i,a)}:{query:oN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=eN(i,s.resumeToken);const l=I0(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(q.min())>0){o.readTime=ml(i,s.snapshotVersion.toTimestamp());const l=I0(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=G5(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Qc(this.serializer),n.removeTarget=e,this.Wo(n)}}class Lj extends NN{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=W5(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.cu(r,n)}return W(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Qc(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Yc(this.serializer,r))};this.Wo(n)}}/**
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
 */class Mj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new P(x.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(x.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(x.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class $j{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ye(n),this.mu=!1):N("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class Fj{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ns(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.vu.add(4),await Vl(l),l.bu.set("Unknown"),l.vu.delete(4),await $d(l)}(this))})}),this.bu=new $j(r,i)}}async function $d(t){if(Ns(t))for(const e of t.Ru)await e(!0)}async function Vl(t){for(const e of t.Ru)await e(!1)}function Pm(t,e){const n=F(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),vE(n)?yE(n):jl(n).Ko()&&gE(n,e))}function Xc(t,e){const n=F(t),r=jl(n);n.Au.delete(e),r.Ko()&&DN(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ns(n)&&n.bu.set("Unknown"))}function gE(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}jl(t).su(e)}function DN(t,e){t.Vu.qt(e),jl(t).iu(e)}function yE(t){t.Vu=new $5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),jl(t).start(),t.bu.gu()}function vE(t){return Ns(t)&&!jl(t).Uo()&&t.Au.size>0}function Ns(t){return F(t).vu.size===0}function ON(t){t.Vu=void 0}async function Uj(t){t.Au.forEach((e,n)=>{gE(t,e)})}async function Vj(t,e){ON(t),vE(t)?(t.bu.Iu(e),yE(t)):t.bu.set("Unknown")}async function Bj(t,e,n){if(t.bu.set("Online"),e instanceof ZR&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yp(t,r)}else if(e instanceof af?t.Vu.Ht(e):e instanceof JR?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(q.min()))try{const r=await bN(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(ct.EMPTY_BYTE_STRING,u.snapshotVersion)),DN(i,a);const c=new Kr(u.target,a,l,u.sequenceNumber);gE(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await yp(t,r)}}async function yp(t,e,n){if(!Ps(e))throw e;t.vu.add(1),await Vl(t),t.bu.set("Offline"),n||(n=()=>bN(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await $d(t)})}function LN(t,e){return e().catch(n=>yp(t,n,e))}async function Bl(t){const e=F(t),n=gs(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;jj(e);)try{const i=await xj(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,zj(e,i)}catch(i){await yp(e,i)}MN(e)&&$N(e)}function jj(t){return Ns(t)&&t.Eu.length<10}function zj(t,e){t.Eu.push(e);const n=gs(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function MN(t){return Ns(t)&&!gs(t).Uo()&&t.Eu.length>0}function $N(t){gs(t).start()}async function qj(t){gs(t).hu()}async function Wj(t){const e=gs(t);for(const n of t.Eu)e.uu(n.mutations)}async function Gj(t,e,n){const r=t.Eu.shift(),i=nE.from(r,e,n);await LN(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bl(t)}async function Hj(t,e){e&&gs(t).ou&&await async function(n,r){if(i=r.code,QR(i)&&i!==x.ABORTED){const s=n.Eu.shift();gs(n).Qo(),await LN(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Bl(n)}var i}(t,e),MN(t)&&$N(t)}async function jS(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Ns(n);n.vu.add(3),await Vl(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await $d(n)}async function A0(t,e){const n=F(t);e?(n.vu.delete(2),await $d(n)):e||(n.vu.add(2),await Vl(n),n.bu.set("Unknown"))}function jl(t){return t.Su||(t.Su=function(e,n,r){const i=F(e);return i.fu(),new Oj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:Uj.bind(null,t),ao:Vj.bind(null,t),nu:Bj.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),vE(t)?yE(t):t.bu.set("Unknown")):(await t.Su.stop(),ON(t))})),t.Su}function gs(t){return t.Du||(t.Du=function(e,n,r){const i=F(e);return i.fu(),new Lj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:qj.bind(null,t),ao:Hj.bind(null,t),au:Wj.bind(null,t),cu:Gj.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Bl(t)):(await t.Du.stop(),t.Eu.length>0&&(N("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class wE{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new wE(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(t,e){if(Ye("AsyncQueue",`${e}: ${t}`),Ps(t))return new P(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ka{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Ou(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Ka(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ka)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ka;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zS{constructor(){this.Cu=new Fe($.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):B():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class vl{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vl(e,n,Ka.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Kj{constructor(){this.Nu=void 0,this.listeners=[]}}class Qj{constructor(){this.queries=new Rs(e=>OR(e),Rd),this.onlineState="Unknown",this.ku=new Set}}async function EE(t,e){const n=F(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Kj),i)try{s.Nu=await n.onListen(r)}catch(o){const a=zl(o,`Initialization of query '${_0(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&IE(n)}async function _E(t,e){const n=F(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Yj(t,e){const n=F(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&IE(n)}function Xj(t,e,n){const r=F(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function IE(t){t.ku.forEach(e=>{e.next()})}class TE{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=vl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Jj{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
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
 */class qS{constructor(e){this.serializer=e}rr(e){return Pr(this.serializer,e)}ur(e){return e.metadata.exists?iN(this.serializer,e.document,!1):Ie.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Je(e)}}class Zj{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=FN(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=le.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new qS(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await Cj(this.localStore,new qS(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await Aj(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function FN(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class UN{constructor(e){this.key=e}}class VN{constructor(e){this.key=e}}class BN{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=te(),this.mutatedKeys=te(),this.tc=MR(e),this.ec=new Ka(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new zS,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),f=Nd(this.query,d)?d:null,p=!!h&&this.mutatedKeys.has(h.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;h&&f?h.data.isEqual(f.data)?p!==m&&(r.track({type:3,doc:f}),E=!0):this.rc(h,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.tc(f,l)>0||u&&this.tc(f,u)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),E=!0):h&&!f&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=m?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(d,h){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return f(d)-f(h)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new vl(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new zS,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=te(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new VN(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new UN(r))}),n}hc(e){this.Yu=e.ir,this.Zu=te();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return vl.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class e3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class t3{constructor(e){this.key=e,this.fc=!1}}class n3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Rs(a=>OR(a),Rd),this._c=new Map,this.mc=new Set,this.gc=new Fe($.comparator),this.yc=new Map,this.Ic=new cE,this.Tc={},this.Ec=new Map,this.Ac=Oo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function r3(t,e){const n=CE(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await gl(n.localStore,pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await SE(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Pm(n.remoteStore,o)}return i}async function SE(t,e,n,r,i){t.Rc=(d,h,f)=>async function(p,m,E,v){let g=m.view.sc(E);g.zi&&(g=await pp(p.localStore,m.query,!1).then(({documents:I})=>m.view.sc(I,g)));const y=v&&v.targetChanges.get(m.targetId),_=m.view.applyChanges(g,p.isPrimaryClient,y);return P0(p,m.targetId,_.cc),_.snapshot}(t,d,h,f);const s=await pp(t.localStore,e,!0),o=new BN(e,s.ir),a=o.sc(s.documents),l=Ld.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);P0(t,n,u.cc);const c=new e3(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function i3(t,e){const n=F(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Rd(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xc(n.remoteStore,r.targetId),wl(n,r.targetId)}).catch(As)):(wl(n,r.targetId),await yl(n.localStore,r.targetId,!0))}async function s3(t,e,n){const r=AE(t);try{const i=await function(s,o){const a=F(s),l=Re.now(),u=o.reduce((h,f)=>h.add(f.key),te());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=un(),p=te();return a.Zi.getEntries(h,u).next(m=>{f=m,f.forEach((E,v)=>{v.isValidDocument()||(p=p.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(m=>{c=m;const E=[];for(const v of o){const g=O5(v,c.get(v.key).overlayedDocument);g!=null&&E.push(new wi(v.key,g,bR(g.value.mapValue),Pe.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,E,o)}).next(m=>{d=m;const E=m.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(h,m.batchId,E)})}).then(()=>({batchId:d.batchId,changes:FR(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Fe(ee)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ei(r,i.changes),await Bl(r.remoteStore)}catch(i){const s=zl(i,"Failed to persist write");n.reject(s)}}async function jN(t,e){const n=F(t);try{const r=await kj(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?W(o.fc):i.removedDocuments.size>0&&(W(o.fc),o.fc=!1))}),await Ei(n,r,e)}catch(r){await As(r)}}function WS(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Mu(o)&&(l=!0)}),l&&IE(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function o3(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Fe($.comparator);o=o.insert(s,Ie.newNoDocument(s,q.min()));const a=te().add(s),l=new Od(q.min(),new Map,new Fe(ee),o,a);await jN(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),xE(r)}else await yl(r.localStore,e,!1).then(()=>wl(r,e,n)).catch(As)}async function a3(t,e){const n=F(t),r=e.batch.batchId;try{const i=await bj(n.localStore,e);kE(n,r,null),bE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ei(n,i)}catch(i){await As(i)}}async function l3(t,e,n){const r=F(t);try{const i=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(W(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);kE(r,e,n),bE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ei(r,i)}catch(i){await As(i)}}async function u3(t,e){const n=F(t);Ns(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=F(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ec.get(r)||[];i.push(e),n.Ec.set(r,i)}catch(r){const i=zl(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function bE(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function kE(t,e,n){const r=F(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||zN(t,r)})}function zN(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Xc(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),xE(t))}function P0(t,e,n){for(const r of n)r instanceof UN?(t.Ic.addReference(r.key,e),c3(t,r)):r instanceof VN?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||zN(t,r.key)):B()}function c3(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(N("SyncEngine","New document in limbo: "+n),t.mc.add(r),xE(t))}function xE(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(le.fromString(e)),r=t.Ac.next();t.yc.set(r,new t3(n)),t.gc=t.gc.insert(n,r),Pm(t.remoteStore,new Kr(pn($l(n.path)),r,"TargetPurposeLimboResolution",ln.ct))}}async function Ei(t,e,n){const r=F(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=fE.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>b.forEach(l,d=>b.forEach(d.Fi,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>b.forEach(d.Bi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!Ps(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Ji.get(d),f=h.snapshotVersion,p=h.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(d,p)}}}(r.localStore,s))}async function d3(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await SN(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new P(x.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ei(n,r.er)}}function h3(t,e){const n=F(t),r=n.yc.get(e);if(r&&r.fc)return te().add(r.key);{let i=te();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function f3(t,e){const n=F(t),r=await pp(n.localStore,e.query,!0),i=e.view.hc(r);return n.isPrimaryClient&&P0(n,e.targetId,i.cc),i}async function p3(t,e){const n=F(t);return CN(n.localStore,e).then(r=>Ei(n,r))}async function m3(t,e,n,r){const i=F(t),s=await function(o,a){const l=F(o),u=F(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",c=>u.Sn(c,a).next(d=>d?l.localDocuments.getDocuments(c,d):b.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Bl(i.remoteStore):n==="acknowledged"||n==="rejected"?(kE(i,e,r||null),bE(i,e),function(o,a){F(F(o).mutationQueue).Cn(a)}(i.localStore,e)):B(),await Ei(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function g3(t,e){const n=F(t);if(CE(n),AE(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await GS(n,r.toArray());n.vc=!0,await A0(n.remoteStore,!0);for(const s of i)Pm(n.remoteStore,s)}else if(e===!1&&n.vc!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(wl(n,o),yl(n.localStore,o,!0))),Xc(n.remoteStore,o)}),await i,await GS(n,r),function(s){const o=F(s);o.yc.forEach((a,l)=>{Xc(o.remoteStore,l)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Fe($.comparator)}(n),n.vc=!1,await A0(n.remoteStore,!1)}}async function GS(t,e,n){const r=F(t),i=[],s=[];for(const o of e){let a;const l=r._c.get(o);if(l&&l.length!==0){a=await gl(r.localStore,pn(l[0]));for(const u of l){const c=r.wc.get(u),d=await f3(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await xN(r.localStore,o);a=await gl(r.localStore,u),await SE(r,qN(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function qN(t){return DR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function y3(t){const e=F(t);return F(F(e.localStore).persistence).$i()}async function v3(t,e,n,r){const i=F(t);if(i.vc)return void N("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await CN(i.localStore,LR(s[0])),a=Od.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ct.EMPTY_BYTE_STRING);await Ei(i,o,a);break}case"rejected":await yl(i.localStore,e,!0),wl(i,e,r);break;default:B()}}async function w3(t,e,n){const r=CE(t);if(r.vc){for(const i of e){if(r._c.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await xN(r.localStore,i),o=await gl(r.localStore,s);await SE(r,qN(s),o.targetId,!1,o.resumeToken),Pm(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await yl(r.localStore,i,!1).then(()=>{Xc(r.remoteStore,i),wl(r,i)}).catch(As)}}function CE(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jN.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=h3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o3.bind(null,e),e.dc.nu=Yj.bind(null,e.eventManager),e.dc.Pc=Xj.bind(null,e.eventManager),e}function AE(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=l3.bind(null,e),e}function E3(t,e,n){const r=F(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(d,h){const f=F(d),p=Je(h.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",m=>f.qs.getBundleMetadata(m,h.id)).then(m=>!!m&&m.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(d){return{taskState:"Success",documentsLoaded:d.totalDocuments,bytesLoaded:d.totalBytes,totalDocuments:d.totalDocuments,totalBytes:d.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(FN(a));const l=new Zj(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const d=await l.zu(u);d&&o._updateProgress(d),u=await s.bc()}const c=await l.complete();return await Ei(i,c.Ju,void 0),await function(d,h){const f=F(d);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.qs.saveBundleMetadata(p,h))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Hu)}catch(a){return ar("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class R0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Md(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return TN(this.persistence,new IN,e.initialUser,this.serializer)}createPersistence(e){return new _N(Am.zs,this.serializer)}createSharedClientState(e){return new PN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WN extends R0{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await AE(this.Vc.syncEngine),await Bl(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return TN(this.persistence,new IN,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new uj(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new GB(n,this.persistence);return new WB(e.asyncQueue,r)}createPersistence(e){const n=hE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new dE(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,RN(),lf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new PN}}class _3 extends WN{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof my&&(this.sharedClientState.syncEngine={jr:m3.bind(null,n),zr:v3.bind(null,n),Wr:w3.bind(null,n),$i:y3.bind(null,n),Qr:p3.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await g3(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=RN();if(!my.D(n))throw new P(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=hE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new my(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class PE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>WS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=d3.bind(null,this.syncEngine),await A0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Qj}createDatastore(e){const n=Md(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Dj(i));var i;return function(s,o,a,l){return new Mj(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>WS(this.syncEngine,a,0),o=BS.D()?new BS:new Pj,new Fj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new n3(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);N("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Vl(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */function HS(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class I3{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new wt,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const i=await this.$c(r);return new Jj(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class T3{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new P(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=F(r),o=Qc(s.serializer)+"/documents",a={documents:i.map(d=>Kc(s.serializer,d))},l=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(d=>{const h=z5(s.serializer,d);u.set(h.key.toString(),h)});const c=[];return i.forEach(d=>{const h=u.get(d.toString());W(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ul(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=$.fromPath(r);this.mutations.push(new eE(i,this.precondition(i)))}),await async function(n,r){const i=F(n),s=Qc(i.serializer)+"/documents",o={writes:r.map(a=>Yc(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw B();n=q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new P(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(q.min())?Pe.exists(!1):Pe.updateTime(n):Pe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(q.min()))throw new P(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pe.updateTime(n)}return Pe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class S3{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new mE(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new T3(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Ad(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!QR(n)}return!1}}/**
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
 */class b3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=cR.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uf(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await SN(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function N0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RE(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>jS(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>jS(e.remoteStore,s)),t._onlineComponents=e}function GN(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function RE(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!GN(n))throw n;ar("Error using user provided cache. Falling back to memory cache: "+n),await uf(t,new R0)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await uf(t,new R0);return t._offlineComponents}async function Nm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await N0(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await N0(t,new PE))),t._onlineComponents}function HN(t){return RE(t).then(e=>e.persistence)}function NE(t){return RE(t).then(e=>e.localStore)}function KN(t){return Nm(t).then(e=>e.remoteStore)}function DE(t){return Nm(t).then(e=>e.syncEngine)}function k3(t){return Nm(t).then(e=>e.datastore)}async function El(t){const e=await Nm(t),n=e.eventManager;return n.onListen=r3.bind(null,e.syncEngine),n.onUnlisten=i3.bind(null,e.syncEngine),n}function x3(t){return t.asyncQueue.enqueue(async()=>{const e=await HN(t),n=await KN(t);return e.setNetworkEnabled(!0),function(r){const i=F(r);return i.vu.delete(0),$d(i)}(n)})}function C3(t){return t.asyncQueue.enqueue(async()=>{const e=await HN(t),n=await KN(t);return e.setNetworkEnabled(!1),async function(r){const i=F(r);i.vu.add(0),await Vl(i),i.bu.set("Offline")}(n)})}function A3(t,e){const n=new wt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=F(a);return u.persistence.runTransaction("read document","readonly",c=>u.localDocuments.getDocument(c,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new P(x.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=zl(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await NE(t),e,n)),n.promise}function QN(t,e,n={}){const r=new wt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Rm({next:d=>{s.enqueueAndForget(()=>_E(i,c));const h=d.docs.has(o);!h&&d.fromCache?l.reject(new P(x.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?l.reject(new P(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new TE($l(o.path),u,{includeMetadataChanges:!0,Ku:!0});return EE(i,c)}(await El(t),t.asyncQueue,e,n,r)),r.promise}function P3(t,e){const n=new wt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await pp(r,i,!0),a=new BN(i,o.ir),l=a.sc(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=zl(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await NE(t),e,n)),n.promise}function YN(t,e,n={}){const r=new wt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Rm({next:d=>{s.enqueueAndForget(()=>_E(i,c)),d.fromCache&&a.source==="server"?l.reject(new P(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new TE(o,u,{includeMetadataChanges:!0,Ku:!0});return EE(i,c)}(await El(t),t.asyncQueue,e,n,r)),r.promise}function R3(t,e){const n=new Rm(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){F(r).ku.add(i),i.next()}(await El(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){F(r).ku.delete(i)}(await El(t),n))}}function N3(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?XR().encode(s):s,function(l,u){return new I3(l,u)}(function(l,u){if(l instanceof Uint8Array)return HS(l,u);if(l instanceof ArrayBuffer)return HS(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Md(e));t.asyncQueue.enqueueAndForget(async()=>{E3(await DE(t),i,r)})}function D3(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=F(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await NE(t),e))}/**
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
 */function XN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const KS=new Map;/**
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
 */function OE(t,e,n){if(!n)throw new P(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JN(t,e,n,r){if(e===!0&&r===!0)throw new P(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function QS(t){if(!$.isDocumentKey(t))throw new P(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function YS(t){if($.isDocumentKey(t))throw new P(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function de(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dm(t);throw new P(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ZN(t,e){if(e<=0)throw new P(x.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class XS{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XN((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new P(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new P(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new P(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Fd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new XS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new XS(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DB;switch(n.type){case"firstParty":return new $B(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=KS.get(e);n&&(N("ComponentProvider","Removing Datastore"),KS.delete(e),n.terminate())}(this),Promise.resolve()}}function eD(t,e,n,r={}){var i;const s=(t=de(t,Fd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=gt.MOCK_USER;else{a=KA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new P(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(u)}t._authCredentials=new OB(new uR(a,l))}}/**
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
 */class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}}class Dt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dt(this.firestore,e,this._query)}}class Rr extends Dt{constructor(e,n,r){super(e,n,$l(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new $(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function LE(t,e,...n){if(t=z(t),OE("collection","path",e),t instanceof Fd){const r=le.fromString(e,...n);return YS(r),new Rr(t,null,r)}{if(!(t instanceof be||t instanceof Rr))throw new P(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return YS(r),new Rr(t.firestore,null,r)}}function O3(t,e){if(t=de(t,Fd),OE("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new P(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Dt(t,null,function(n){return new vi(le.emptyPath(),n)}(e))}function vn(t,e,...n){if(t=z(t),arguments.length===1&&(e=cR.A()),OE("doc","path",e),t instanceof Fd){const r=le.fromString(e,...n);return QS(r),new be(t,null,new $(r))}{if(!(t instanceof be||t instanceof Rr))throw new P(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return QS(r),new be(t.firestore,t instanceof Rr?t.converter:null,new $(r))}}function tD(t,e){return t=z(t),e=z(e),(t instanceof be||t instanceof Rr)&&(e instanceof be||e instanceof Rr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function nD(t,e){return t=z(t),e=z(e),t instanceof Dt&&e instanceof Dt&&t.firestore===e.firestore&&Rd(t._query,e._query)&&t.converter===e.converter}/**
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
 */class L3{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new mE(this,"async_queue_retry"),this.Xc=()=>{const n=lf();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=lf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new wt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ps(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ye("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=wE.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&B()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function D0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class M3{constructor(){this._progressObserver={},this._taskCompletionResolver=new wt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const $3=-1;let He=class extends Fd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new L3,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rD(this),this._firestoreClient.terminate()}};function F3(t,e){const n=typeof t=="object"?t:om(),r=typeof t=="string"?t:e||"(default)",i=ks(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=GA("firestore");s&&eD(i,...s)}return i}function Tt(t){return t._firestoreClient||rD(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rD(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new f5(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,XN(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new b3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function U3(t,e){sD(t=de(t,He));const n=Tt(t);if(n._uninitializedComponentsProvider)throw new P(x.FAILED_PRECONDITION,"SDK cache is already specified.");ar("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new PE;return iD(n,i,new WN(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function V3(t){sD(t=de(t,He));const e=Tt(t);if(e._uninitializedComponentsProvider)throw new P(x.FAILED_PRECONDITION,"SDK cache is already specified.");ar("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new PE;return iD(e,r,new _3(r,n.cacheSizeBytes))}function iD(t,e,n){const r=new wt;return t.asyncQueue.enqueue(async()=>{try{await uf(t,n),await N0(t,e),r.resolve()}catch(i){const s=i;if(!GN(s))throw s;ar("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function B3(t){if(t._initialized&&!t._terminated)throw new P(x.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new wt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!tr.D())return Promise.resolve();const r=n+"main";await tr.delete(r)}(hE(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function j3(t){return function(e){const n=new wt;return e.asyncQueue.enqueueAndForget(async()=>u3(await DE(e),n)),n.promise}(Tt(t=de(t,He)))}function z3(t){return x3(Tt(t=de(t,He)))}function q3(t){return C3(Tt(t=de(t,He)))}function W3(t,e){const n=Tt(t=de(t,He)),r=new M3;return N3(n,t._databaseId,e,r),r}function G3(t,e){return D3(Tt(t=de(t,He)),e).then(n=>n?new Dt(t,null,n.query):null)}function sD(t){if(t._initialized||t._terminated)throw new P(x.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lr(ct.fromBase64String(e))}catch(n){throw new P(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lr(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ys{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qo{constructor(e){this._methodName=e}}/**
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
 */class Om{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const H3=/^__.*__$/;class K3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fl(e,this.data,n,this.fieldTransforms)}}class oD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aD(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Lm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Lm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return vp(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(aD(this.ca)&&H3.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Q3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Md(e)}ya(e,n,r,i=!1){return new Lm({ca:e,methodName:n,ga:r,path:Xe.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yo(t){const e=t._freezeSettings(),n=Md(t._databaseId);return new Q3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mm(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);UE("Data must be an object, but it was:",o,r);const a=cD(r,o);let l,u;if(s.merge)l=new nr(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=O0(e,d,n);if(!o.contains(h))throw new P(x.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);hD(c,h)||c.push(h)}l=new nr(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new K3(new xt(a),l,u)}class Ud extends Qo{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ud}}function lD(t,e,n){return new Lm({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ME extends Qo{_toFieldTransform(e){return new Dd(e.path,new fl)}isEqual(e){return e instanceof ME}}class Y3 extends Qo{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=lD(this,e,!0),r=this.pa.map(s=>Xo(s,n)),i=new Po(r);return new Dd(e.path,i)}isEqual(e){return this===e}}class X3 extends Qo{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=lD(this,e,!0),r=this.pa.map(s=>Xo(s,n)),i=new Ro(r);return new Dd(e.path,i)}isEqual(e){return this===e}}class J3 extends Qo{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new pl(e.serializer,jR(e.serializer,this.Ia));return new Dd(e.path,n)}isEqual(e){return this===e}}function $E(t,e,n,r){const i=t.ya(1,e,n);UE("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();Ko(r,(l,u)=>{const c=VE(e,l,n);u=z(u);const d=i.da(c);if(u instanceof Ud)s.push(c);else{const h=Xo(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new nr(s);return new oD(o,a,i.fieldTransforms)}function FE(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[O0(e,r,n)],l=[i];if(s.length%2!=0)throw new P(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(O0(e,s[h])),l.push(s[h+1]);const u=[],c=xt.empty();for(let h=a.length-1;h>=0;--h)if(!hD(u,a[h])){const f=a[h];let p=l[h];p=z(p);const m=o.da(f);if(p instanceof Ud)u.push(f);else{const E=Xo(p,m);E!=null&&(u.push(f),c.set(f,E))}}const d=new nr(u);return new oD(c,d,o.fieldTransforms)}function uD(t,e,n,r=!1){return Xo(n,t.ya(r?4:3,e))}function Xo(t,e){if(dD(t=z(t)))return UE("Unsupported field value:",e,t),cD(t,e);if(t instanceof Qo)return function(n,r){if(!aD(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Xo(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=z(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jR(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Re.fromDate(n);return{timestampValue:ml(r.serializer,i)}}if(n instanceof Re){const i=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ml(r.serializer,i)}}if(n instanceof Om)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lr)return{bytesValue:eN(r.serializer,n._byteString)};if(n instanceof be){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oE(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Dm(n)}`)}(t,e)}function cD(t,e){const n={};return IR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ko(t,(r,i)=>{const s=Xo(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dD(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Om||t instanceof Lr||t instanceof be||t instanceof Qo)}function UE(t,e,n){if(!dD(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Dm(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function O0(t,e,n){if((e=z(e))instanceof ys)return e._internalPath;if(typeof e=="string")return VE(t,e);throw vp("Field path arguments must be of type string or ",t,!1,void 0,n)}const Z3=new RegExp("[~\\*/\\[\\]]");function VE(t,e,n){if(e.search(Z3)>=0)throw vp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ys(...e.split("."))._internalPath}catch{throw vp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vp(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(x.INVALID_ARGUMENT,a+t+l)}function hD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Jc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ez(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($m("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ez extends Jc{data(){return super.data()}}function $m(t,e){return typeof e=="string"?VE(t,e):e instanceof ys?e._internalPath:e._delegate._internalPath}/**
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
 */function fD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class BE{}class Vd extends BE{}function Ci(t,e,...n){let r=[];e instanceof BE&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof jE).length,o=i.filter(a=>a instanceof Fm).length;if(s>1||s>0&&o>0)throw new P(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Fm extends Vd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fm(e,n,r)}_apply(e){const n=this._parse(e);return mD(e._query,n),new Dt(e.firestore,e.converter,E0(e._query,n))}_parse(e){const n=Yo(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new P(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ZS(c,u);const h=[];for(const f of c)h.push(JS(a,i,f));d={arrayValue:{values:h}}}else d=JS(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ZS(c,u),d=uD(o,s,c,u==="in"||u==="not-in");return re.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tz(t,e,n){const r=e,i=$m("where",t);return Fm._create(i,r,n)}class jE extends BE{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jE(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ge.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)mD(s,a),s=E0(s,a)}(e._query,n),new Dt(e.firestore,e.converter,E0(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zE extends Vd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zE(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new P(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ha(i,s);return function(a,l){if(X1(a)===null){const u=Sm(a);u!==null&&gD(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Dt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new vi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function nz(t,e="asc"){const n=e,r=$m("orderBy",t);return zE._create(r,n)}class Um extends Vd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Um(e,n,r)}_apply(e){return new Dt(e.firestore,e.converter,cp(e._query,this._limit,this._limitType))}}function rz(t){return ZN("limit",t),Um._create("limit",t,"F")}function iz(t){return ZN("limitToLast",t),Um._create("limitToLast",t,"L")}class Vm extends Vd{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Vm(e,n,r)}_apply(e){const n=pD(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(r,i){return new vi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function sz(...t){return Vm._create("startAt",t,!0)}function oz(...t){return Vm._create("startAfter",t,!1)}class Bm extends Vd{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Bm(e,n,r)}_apply(e){const n=pD(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(r,i){return new vi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function az(...t){return Bm._create("endBefore",t,!1)}function lz(...t){return Bm._create("endAt",t,!0)}function pD(t,e,n,r){if(n[0]=z(n[0]),n[0]instanceof Jc)return function(i,s,o,a,l){if(!a)throw new P(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of go(i))if(c.field.isKeyField())u.push(Co(s,a.key));else{const d=a.data.field(c.field);if(Tm(d))throw new P(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const h=c.field.canonicalString();throw new P(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${h}' (used as the orderBy) does not exist.`)}u.push(d)}return new ms(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Yo(t.firestore);return function(s,o,a,l,u,c){const d=s.explicitOrderBy;if(u.length>d.length)throw new P(x.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const h=[];for(let f=0;f<u.length;f++){const p=u[f];if(d[f].field.isKeyField()){if(typeof p!="string")throw new P(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof p}`);if(!J1(s)&&p.indexOf("/")!==-1)throw new P(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${p}' contains a slash.`);const m=s.path.child(le.fromString(p));if(!$.isDocumentKey(m))throw new P(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const E=new $(m);h.push(Co(o,E))}else{const m=uD(a,l,p);h.push(m)}}return new ms(h,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function JS(t,e,n){if(typeof(n=z(n))=="string"){if(n==="")throw new P(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!J1(e)&&n.indexOf("/")!==-1)throw new P(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!$.isDocumentKey(r))throw new P(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Co(t,new $(r))}if(n instanceof be)return Co(t,n._key);throw new P(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dm(n)}.`)}function ZS(t,e){if(!Array.isArray(t)||t.length===0)throw new P(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mD(t,e){if(e.isInequality()){const r=Sm(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new P(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=X1(t);s!==null&&gD(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function gD(t,e,n){if(!n.isEqual(e))throw new P(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class qE{convertValue(e,n="none"){switch(xo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ko(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Om(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Q1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wc(e));default:return null}}convertTimestamp(e){const n=ds(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);W(cN(r));const i=new fs(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||Ye(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function jm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class uz extends qE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}/**
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
 */class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ci extends Jc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($m("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nc extends ci{data(e={}){return super.data(e)}}class vs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nc(this._firestore,this._userDataWriter,r.key,r,new oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new nc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new oo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new nc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new oo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:cz(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function yD(t,e){return t instanceof ci&&e instanceof ci?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof vs&&e instanceof vs&&t._firestore===e._firestore&&nD(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function dz(t){t=de(t,be);const e=de(t.firestore,He);return QN(Tt(e),t._key).then(n=>GE(e,t,n))}class Jo extends qE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function hz(t){t=de(t,be);const e=de(t.firestore,He),n=Tt(e),r=new Jo(e);return A3(n,t._key).then(i=>new ci(e,r,t._key,i,new oo(i!==null&&i.hasLocalMutations,!0),t.converter))}function fz(t){t=de(t,be);const e=de(t.firestore,He);return QN(Tt(e),t._key,{source:"server"}).then(n=>GE(e,t,n))}function pz(t){t=de(t,Dt);const e=de(t.firestore,He),n=Tt(e),r=new Jo(e);return fD(t._query),YN(n,t._query).then(i=>new vs(e,r,t,i))}function mz(t){t=de(t,Dt);const e=de(t.firestore,He),n=Tt(e),r=new Jo(e);return P3(n,t._query).then(i=>new vs(e,r,t,i))}function gz(t){t=de(t,Dt);const e=de(t.firestore,He),n=Tt(e),r=new Jo(e);return YN(n,t._query,{source:"server"}).then(i=>new vs(e,r,t,i))}function Jn(t,e,n){t=de(t,be);const r=de(t.firestore,He),i=jm(t.converter,e,n);return Bd(r,[Mm(Yo(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pe.none())])}function eb(t,e,n,...r){t=de(t,be);const i=de(t.firestore,He),s=Yo(i);let o;return o=typeof(e=z(e))=="string"||e instanceof ys?FE(s,"updateDoc",t._key,e,n,r):$E(s,"updateDoc",t._key,e),Bd(i,[o.toMutation(t._key,Pe.exists(!0))])}function vD(t){return Bd(de(t.firestore,He),[new Ul(t._key,Pe.none())])}function yz(t,e){const n=de(t.firestore,He),r=vn(t),i=jm(t.converter,e);return Bd(n,[Mm(Yo(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function WE(t,...e){var n,r,i;t=z(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||D0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(D0(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof be)u=de(t.firestore,He),c=$l(t._key.path),l={next:d=>{e[o]&&e[o](GE(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=de(t,Dt);u=de(d.firestore,He),c=d._query;const h=new Jo(u);l={next:f=>{e[o]&&e[o](new vs(u,h,d,f))},error:e[o+1],complete:e[o+2]},fD(t._query)}return function(d,h,f,p){const m=new Rm(p),E=new TE(h,m,f);return d.asyncQueue.enqueueAndForget(async()=>EE(await El(d),E)),()=>{m.Dc(),d.asyncQueue.enqueueAndForget(async()=>_E(await El(d),E))}}(Tt(u),c,a,l)}function vz(t,e){return R3(Tt(t=de(t,He)),D0(e)?e:{next:e})}function Bd(t,e){return function(n,r){const i=new wt;return n.asyncQueue.enqueueAndForget(async()=>s3(await DE(n),r,i)),i.promise}(Tt(t),e)}function GE(t,e,n){const r=n.docs.get(e._key),i=new Jo(t);return new ci(t,i,e._key,r,new oo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const wz={maxAttempts:5};/**
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
 */class Ez{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Yo(e)}set(e,n,r){this._verifyNotCommitted();const i=$i(e,this._firestore),s=jm(i.converter,n,r),o=Mm(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Pe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=$i(e,this._firestore);let o;return o=typeof(n=z(n))=="string"||n instanceof ys?FE(this._dataReader,"WriteBatch.update",s._key,n,r,i):$E(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$i(e,this._firestore);return this._mutations=this._mutations.concat(new Ul(n._key,Pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new P(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $i(t,e){if((t=z(t)).firestore!==e)throw new P(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class _z extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Yo(e)}get(e){const n=$i(e,this._firestore),r=new uz(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return B();const s=i[0];if(s.isFoundDocument())return new Jc(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Jc(this._firestore,r,n._key,null,n.converter);throw B()})}set(e,n,r){const i=$i(e,this._firestore),s=jm(i.converter,n,r),o=Mm(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=$i(e,this._firestore);let o;return o=typeof(n=z(n))=="string"||n instanceof ys?FE(this._dataReader,"Transaction.update",s._key,n,r,i):$E(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=$i(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=$i(e,this._firestore),r=new Jo(this._firestore);return super.get(e).then(i=>new ci(this._firestore,r,n._key,i._document,new oo(!1,!1),n.converter))}}function Iz(t,e,n){t=de(t,He);const r=Object.assign(Object.assign({},wz),n);return function(i){if(i.maxAttempts<1)throw new P(x.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new wt;return i.asyncQueue.enqueueAndForget(async()=>{const l=await k3(i);new S3(i.asyncQueue,l,o,s,a).run()}),a.promise}(Tt(t),i=>e(new _z(t,i)),r)}/**
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
 */function Tz(){return new Ud("deleteField")}function Sz(){return new ME("serverTimestamp")}function bz(...t){return new Y3("arrayUnion",t)}function kz(...t){return new X3("arrayRemove",t)}function xz(t){return new J3("increment",t)}(function(t,e=!0){(function(n){Ml=n})(yi),An(new Zt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new He(new LB(n.getProvider("auth-internal")),new UB(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),At(YT,"3.13.0",t),At(YT,"3.13.0","esm2017")})();var Cz="firebase",Az="9.23.0";/**
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
 */At(Cz,Az,"app");const Pz=(t,e)=>e.some(n=>t instanceof n);let tb,nb;function Rz(){return tb||(tb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nz(){return nb||(nb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wD=new WeakMap,L0=new WeakMap,ED=new WeakMap,yy=new WeakMap,HE=new WeakMap;function Dz(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ns(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wD.set(n,t)}).catch(()=>{}),HE.set(e,t),e}function Oz(t){if(L0.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});L0.set(t,e)}let M0={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return L0.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ED.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ns(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lz(t){M0=t(M0)}function Mz(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vy(this),e,...n);return ED.set(r,e.sort?e.sort():[e]),ns(r)}:Nz().includes(t)?function(...e){return t.apply(vy(this),e),ns(wD.get(this))}:function(...e){return ns(t.apply(vy(this),e))}}function $z(t){return typeof t=="function"?Mz(t):(t instanceof IDBTransaction&&Oz(t),Pz(t,Rz())?new Proxy(t,M0):t)}function ns(t){if(t instanceof IDBRequest)return Dz(t);if(yy.has(t))return yy.get(t);const e=$z(t);return e!==t&&(yy.set(t,e),HE.set(e,t)),e}const vy=t=>HE.get(t);function Fz(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ns(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ns(o.result),l.oldVersion,l.newVersion,ns(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Uz=["get","getKey","getAll","getAllKeys","count"],Vz=["put","add","delete","clear"],wy=new Map;function rb(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wy.get(e))return wy.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vz.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Uz.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wy.set(e,s),s}Lz(t=>({...t,get:(e,n,r)=>rb(e,n)||t.get(e,n,r),has:(e,n)=>!!rb(e,n)||t.has(e,n)}));const _D="@firebase/installations",KE="0.6.4";/**
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
 */const ID=1e4,TD=`w:${KE}`,SD="FIS_v2",Bz="https://firebaseinstallations.googleapis.com/v1",jz=60*60*1e3,zz="installations",qz="Installations";/**
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
 */const Wz={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Lo=new gi(zz,qz,Wz);function bD(t){return t instanceof vt&&t.code.includes("request-failed")}/**
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
 */function kD({projectId:t}){return`${Bz}/projects/${t}/installations`}function xD(t){return{token:t.token,requestStatus:2,expiresIn:Hz(t.expiresIn),creationTime:Date.now()}}async function CD(t,e){const r=(await e.json()).error;return Lo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function AD({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Gz(t,{refreshToken:e}){const n=AD(t);return n.append("Authorization",Kz(e)),n}async function PD(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Hz(t){return Number(t.replace("s","000"))}function Kz(t){return`${SD} ${t}`}/**
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
 */async function Qz({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=kD(t),i=AD(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:SD,appId:t.appId,sdkVersion:TD},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await PD(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:xD(u.authToken)}}else throw await CD("Create Installation",l)}/**
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
 */function RD(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Yz(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Xz=/^[cdef][\w-]{21}$/,$0="";function Jz(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Zz(t);return Xz.test(n)?n:$0}catch{return $0}}function Zz(t){return Yz(t).substr(0,22)}/**
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
 */function zm(t){return`${t.appName}!${t.appId}`}/**
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
 */const ND=new Map;function DD(t,e){const n=zm(t);OD(n,e),e6(n,e)}function OD(t,e){const n=ND.get(t);if(n)for(const r of n)r(e)}function e6(t,e){const n=t6();n&&n.postMessage({key:t,fid:e}),n6()}let ao=null;function t6(){return!ao&&"BroadcastChannel"in self&&(ao=new BroadcastChannel("[Firebase] FID Change"),ao.onmessage=t=>{OD(t.data.key,t.data.fid)}),ao}function n6(){ND.size===0&&ao&&(ao.close(),ao=null)}/**
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
 */const r6="firebase-installations-database",i6=1,Mo="firebase-installations-store";let Ey=null;function QE(){return Ey||(Ey=Fz(r6,i6,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mo)}}})),Ey}async function wp(t,e){const n=zm(t),i=(await QE()).transaction(Mo,"readwrite"),s=i.objectStore(Mo),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&DD(t,e.fid),e}async function LD(t){const e=zm(t),r=(await QE()).transaction(Mo,"readwrite");await r.objectStore(Mo).delete(e),await r.done}async function qm(t,e){const n=zm(t),i=(await QE()).transaction(Mo,"readwrite"),s=i.objectStore(Mo),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&DD(t,a.fid),a}/**
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
 */async function YE(t){let e;const n=await qm(t.appConfig,r=>{const i=s6(r),s=o6(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===$0?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function s6(t){const e=t||{fid:Jz(),registrationStatus:0};return MD(e)}function o6(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Lo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=a6(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:l6(t)}:{installationEntry:e}}async function a6(t,e){try{const n=await Qz(t,e);return wp(t.appConfig,n)}catch(n){throw bD(n)&&n.customData.serverCode===409?await LD(t.appConfig):await wp(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function l6(t){let e=await ib(t.appConfig);for(;e.registrationStatus===1;)await RD(100),e=await ib(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await YE(t);return r||n}return e}function ib(t){return qm(t,e=>{if(!e)throw Lo.create("installation-not-found");return MD(e)})}function MD(t){return u6(t)?{fid:t.fid,registrationStatus:0}:t}function u6(t){return t.registrationStatus===1&&t.registrationTime+ID<Date.now()}/**
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
 */async function c6({appConfig:t,heartbeatServiceProvider:e},n){const r=d6(t,n),i=Gz(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:TD,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await PD(()=>fetch(r,a));if(l.ok){const u=await l.json();return xD(u)}else throw await CD("Generate Auth Token",l)}function d6(t,{fid:e}){return`${kD(t)}/${e}/authTokens:generate`}/**
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
 */async function XE(t,e=!1){let n;const r=await qm(t.appConfig,s=>{if(!$D(s))throw Lo.create("not-registered");const o=s.authToken;if(!e&&p6(o))return s;if(o.requestStatus===1)return n=h6(t,e),s;{if(!navigator.onLine)throw Lo.create("app-offline");const a=g6(s);return n=f6(t,a),a}});return n?await n:r.authToken}async function h6(t,e){let n=await sb(t.appConfig);for(;n.authToken.requestStatus===1;)await RD(100),n=await sb(t.appConfig);const r=n.authToken;return r.requestStatus===0?XE(t,e):r}function sb(t){return qm(t,e=>{if(!$D(e))throw Lo.create("not-registered");const n=e.authToken;return y6(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function f6(t,e){try{const n=await c6(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wp(t.appConfig,r),n}catch(n){if(bD(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await LD(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wp(t.appConfig,r)}throw n}}function $D(t){return t!==void 0&&t.registrationStatus===2}function p6(t){return t.requestStatus===2&&!m6(t)}function m6(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jz}function g6(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function y6(t){return t.requestStatus===1&&t.requestTime+ID<Date.now()}/**
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
 */async function v6(t){const e=t,{installationEntry:n,registrationPromise:r}=await YE(e);return r?r.catch(console.error):XE(e).catch(console.error),n.fid}/**
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
 */async function w6(t,e=!1){const n=t;return await E6(n),(await XE(n,e)).token}async function E6(t){const{registrationPromise:e}=await YE(t);e&&await e}/**
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
 */function _6(t){if(!t||!t.options)throw _y("App Configuration");if(!t.name)throw _y("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _y(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _y(t){return Lo.create("missing-app-config-values",{valueName:t})}/**
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
 */const FD="installations",I6="installations-internal",T6=t=>{const e=t.getProvider("app").getImmediate(),n=_6(e),r=ks(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},S6=t=>{const e=t.getProvider("app").getImmediate(),n=ks(e,FD).getImmediate();return{getId:()=>v6(n),getToken:i=>w6(n,i)}};function b6(){An(new Zt(FD,T6,"PUBLIC")),An(new Zt(I6,S6,"PRIVATE"))}b6();At(_D,KE);At(_D,KE,"esm2017");/**
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
 */const Ep="analytics",k6="firebase_id",x6="origin",C6=60*1e3,A6="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",JE="https://www.googletagmanager.com/gtag/js";/**
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
 */const fn=new wd("@firebase/analytics");/**
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
 */const P6={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kn=new gi("analytics","Analytics",P6);/**
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
 */function R6(t){if(!t.startsWith(JE)){const e=kn.create("invalid-gtag-resource",{gtagURL:t});return fn.warn(e.message),""}return t}function UD(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function N6(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function D6(t,e){const n=N6("firebase-js-sdk-policy",{createScriptURL:R6}),r=document.createElement("script"),i=`${JE}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function O6(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function L6(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await UD(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){fn.error(a)}t("config",i,s)}async function M6(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await UD(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){fn.error(s)}}function $6(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await M6(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await L6(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){fn.error(a)}}return i}function F6(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$6(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function U6(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(JE)&&n.src.includes(t))return n;return null}/**
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
 */const V6=30,B6=1e3;class j6{constructor(e={},n=B6){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VD=new j6;function z6(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function q6(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:z6(r)},s=A6.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw kn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function W6(t,e=VD,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw kn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw kn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new K6;return setTimeout(async()=>{a.abort()},n!==void 0?n:C6),BD({appId:r,apiKey:i,measurementId:s},o,a,e)}async function BD(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VD){var s;const{appId:o,measurementId:a}=t;try{await G6(r,e)}catch(l){if(a)return fn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await q6(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!H6(u)){if(i.deleteThrottleMetadata(o),a)return fn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?CT(n,i.intervalMillis,V6):CT(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),fn.debug(`Calling attemptFetch again in ${c} millis`),BD(t,d,r,i)}}function G6(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(kn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function H6(t){if(!(t instanceof vt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class K6{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Q6(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Y6(){if(ll())try{await YA()}catch(t){return fn.warn(kn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return fn.warn(kn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function X6(t,e,n,r,i,s,o){var a;const l=W6(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&fn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>fn.error(f)),e.push(l);const u=Y6().then(f=>{if(f)return r.getId()}),[c,d]=await Promise.all([l,u]);U6(s)||D6(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[x6]="firebase",h.update=!0,d!=null&&(h[k6]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class J6{constructor(e){this.app=e}_delete(){return delete rc[this.app.options.appId],Promise.resolve()}}let rc={},ob=[];const ab={};let Iy="dataLayer",Z6="gtag",lb,jD,ub=!1;function e9(){const t=[];if(w1()&&t.push("This is a browser extension environment."),iV()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=kn.create("invalid-analytics-context",{errorInfo:e});fn.warn(n.message)}}function t9(t,e,n){e9();const r=t.options.appId;if(!r)throw kn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)fn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kn.create("no-api-key");if(rc[r]!=null)throw kn.create("already-exists",{id:r});if(!ub){O6(Iy);const{wrappedGtag:s,gtagCore:o}=F6(rc,ob,ab,Iy,Z6);jD=s,lb=o,ub=!0}return rc[r]=X6(t,ob,ab,e,lb,Iy,n),new J6(t)}function n9(t=om()){t=z(t);const e=ks(t,Ep);return e.isInitialized()?e.getImmediate():r9(t)}function r9(t,e={}){const n=ks(t,Ep);if(n.isInitialized()){const i=n.getImmediate();if(Jf(e,n.getOptions()))return i;throw kn.create("already-initialized")}return n.initialize({options:e})}function i9(t,e,n,r){t=z(t),Q6(jD,rc[t.app.options.appId],e,n,r).catch(i=>fn.error(i))}const cb="@firebase/analytics",db="0.10.0";function s9(){An(new Zt(Ep,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return t9(r,i,n)},"PUBLIC")),An(new Zt("analytics-internal",t,"PRIVATE")),At(cb,db),At(cb,db,"esm2017");function t(e){try{const n=e.getProvider(Ep).getImmediate();return{logEvent:(r,i,s)=>i9(n,r,i,s)}}catch(n){throw kn.create("interop-component-reg-failed",{reason:n})}}}s9();/**
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
 */class o9{constructor(e,n){this._delegate=e,this.firebase=n,Zf(e,new Zt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),nP(this._delegate)))}_getService(e,n=ls){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ls){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Zf(this._delegate,e)}_addOrOverwriteComponent(e){tP(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const a9={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},hb=new gi("app-compat","Firebase",a9);/**
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
 */function l9(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:At,setLogLevel:iP,onLog:rP,apps:null,SDK_VERSION:yi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:T4}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||ls,!kT(e,u))throw hb.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=T1(u,c);if(kT(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(An(u)&&u.type==="PUBLIC"){const h=(f=i())=>{if(typeof f[d]!="function")throw hb.create("invalid-app-argument",{appName:c});return f[d]()};u.serviceProps!==void 0&&Xf(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function zD(){const t=l9(o9);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:zD,extendNamespace:e,createSubscribe:XA,ErrorFactory:gi,deepExtend:Xf});function e(n){Xf(t,n)}return t}const u9=zD();/**
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
 */const fb=new wd("@firebase/app-compat"),c9="@firebase/app-compat",d9="0.2.13";/**
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
 */function h9(t){At(c9,d9,t)}/**
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
 */if(nV()&&self.firebase!==void 0){fb.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&fb.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const $r=u9;h9();var f9="firebase",p9="9.23.0";/**
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
 */$r.registerVersion(f9,p9,"app-compat");function ZE(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const vu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ua={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function m9(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function qD(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g9=m9,y9=qD,WD=new gi("auth","Firebase",qD());/**
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
 */const _p=new wd("@firebase/auth");function v9(t,...e){_p.logLevel<=ae.WARN&&_p.warn(`Auth (${yi}): ${t}`,...e)}function cf(t,...e){_p.logLevel<=ae.ERROR&&_p.error(`Auth (${yi}): ${t}`,...e)}/**
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
 */function Ot(t,...e){throw e_(t,...e)}function Rt(t,...e){return e_(t,...e)}function GD(t,e,n){const r=Object.assign(Object.assign({},y9()),{[e]:n});return new gi("auth","Firebase",r).create(e,{appName:t.name})}function ql(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(t,"argument-error"),GD(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function e_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return WD.create(t,...e)}function M(t,e,...n){if(!t)throw e_(e,...n)}function br(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cf(e),new Error(e)}function lr(t,e){t||br(e)}/**
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
 */function Zc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function t_(){return pb()==="http:"||pb()==="https:"}function pb(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function w9(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t_()||w1()||"connection"in navigator)?navigator.onLine:!0}function E9(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jd{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=tV()||E1()}get(){return w9()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function n_(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class HD{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _9={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const I9=new jd(3e4,6e4);function ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dt(t,e,n,r,i={}){return KD(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Dl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),HD.fetch()(QD(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function KD(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_9),e);try{const i=new T9(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $u(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $u(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $u(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $u(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw GD(t,c,u);Ot(t,c)}}catch(i){if(i instanceof vt)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function _i(t,e,n,r,i={}){const s=await dt(t,e,n,r,i);return"mfaPendingCredential"in s&&Ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function QD(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?n_(t.config,i):`${t.config.apiScheme}://${i}`}class T9{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),I9.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function S9(t,e){return dt(t,"POST","/v1/accounts:delete",e)}async function b9(t,e){return dt(t,"POST","/v1/accounts:update",e)}async function k9(t,e){return dt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ic(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x9(t,e=!1){const n=z(t),r=await n.getIdToken(e),i=Wm(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ic(Ty(i.auth_time)),issuedAtTime:ic(Ty(i.iat)),expirationTime:ic(Ty(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ty(t){return Number(t)*1e3}function Wm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cf("JWT malformed, contained fewer than 3 sections"),null;try{const i=WA(n);return i?JSON.parse(i):(cf("Failed to decode base64 JWT payload"),null)}catch(i){return cf("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function C9(t){const e=Wm(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vt&&A9(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function A9({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class P9{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class YD{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ic(this.lastLoginAt),this.creationTime=ic(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ed(t){var e;const n=t.auth,r=await t.getIdToken(),i=await di(t,k9(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?D9(s.providerUserInfo):[],a=N9(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new YD(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function R9(t){const e=z(t);await ed(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N9(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function D9(t){return t.map(e=>{var{providerId:n}=e,r=ZE(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function O9(t,e){const n=await KD(t,{},async()=>{const r=Dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=QD(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HD.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class td{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):C9(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await O9(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new td;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new td,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
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
 */function Ai(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yo{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ZE(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P9(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new YD(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return x9(this,e)}reload(){return R9(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yo(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ed(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,S9(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:I,providerData:S,stsTokenManager:T}=n;M(y&&T,e,"internal-error");const C=td.fromJSON(this.name,T);M(typeof y=="string",e,"internal-error"),Ai(d,e.name),Ai(h,e.name),M(typeof _=="boolean",e,"internal-error"),M(typeof I=="boolean",e,"internal-error"),Ai(f,e.name),Ai(p,e.name),Ai(m,e.name),Ai(E,e.name),Ai(v,e.name),Ai(g,e.name);const D=new yo({uid:y,auth:e,email:h,emailVerified:_,displayName:d,isAnonymous:I,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:C,createdAt:v,lastLoginAt:g});return S&&Array.isArray(S)&&(D.providerData=S.map(R=>Object.assign({},R))),E&&(D._redirectEventId=E),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new td;i.updateFromServerResponse(n);const s=new yo({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ed(s),s}}/**
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
 */const mb=new Map;function In(t){lr(t instanceof Function,"Expected a class definition");let e=mb.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mb.set(t,e),e)}/**
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
 */class XD{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}XD.type="NONE";const _l=XD;/**
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
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class Qa{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,s),this.fullPersistenceKey=vo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yo._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qa(In(_l),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||In(_l);const o=vo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=yo._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qa(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qa(s,e,r))}}/**
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
 */function gb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eO(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JD(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tO(e))return"Blackberry";if(nO(e))return"Webos";if(r_(e))return"Safari";if((e.includes("chrome/")||ZD(e))&&!e.includes("edge/"))return"Chrome";if(zd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JD(t=$e()){return/firefox\//i.test(t)}function r_(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZD(t=$e()){return/crios\//i.test(t)}function eO(t=$e()){return/iemobile/i.test(t)}function zd(t=$e()){return/android/i.test(t)}function tO(t=$e()){return/blackberry/i.test(t)}function nO(t=$e()){return/webos/i.test(t)}function Wl(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function L9(t=$e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function M9(t=$e()){var e;return Wl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $9(){return QA()&&document.documentMode===10}function rO(t=$e()){return Wl(t)||zd(t)||nO(t)||tO(t)||/windows phone/i.test(t)||eO(t)}function F9(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function iO(t,e=[]){let n;switch(t){case"Browser":n=gb($e());break;case"Worker":n=`${gb($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */async function U9(t){return(await dt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function sO(t,e){return dt(t,"GET","/v2/recaptchaConfig",ot(t,e))}/**
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
 */function yb(t){return t!==void 0&&t.getResponse!==void 0}function vb(t){return t!==void 0&&t.enterprise!==void 0}class oO{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function V9(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function i_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",V9().appendChild(r)})}function aO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const B9="https://www.google.com/recaptcha/enterprise.js?render=",j9="recaptcha-enterprise",z9="NO_RECAPTCHA";class lO{constructor(e){this.type=j9,this.auth=Ze(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{sO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new oO(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;vb(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(z9)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&vb(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}i_(B9+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ws(t,e,n,r=!1){const i=new lO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class q9{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class W9{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wb(this),this.idTokenSubscription=new wb(this),this.beforeStateQueue=new q9(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WD,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qa.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ed(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E9()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?z(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}async initializeRecaptchaConfig(){const e=await sO(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new oO(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new lO(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Qa.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iO(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&v9(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ze(t){return z(t)}class wb{constructor(e){this.auth=e,this.observer=null,this.addObserver=XA(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function G9(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function H9(t,e,n){const r=Ze(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=uO(e),{host:o,port:a}=K9(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Q9()}function uO(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function K9(t){const e=uO(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Eb(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Eb(o)}}}function Eb(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Q9(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,n){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}/**
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
 */async function cO(t,e){return dt(t,"POST","/v1/accounts:resetPassword",ot(t,e))}async function dO(t,e){return dt(t,"POST","/v1/accounts:update",e)}async function Y9(t,e){return dt(t,"POST","/v1/accounts:update",ot(t,e))}/**
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
 */async function Sy(t,e){return _i(t,"POST","/v1/accounts:signInWithPassword",ot(t,e))}async function Gm(t,e){return dt(t,"POST","/v1/accounts:sendOobCode",ot(t,e))}async function X9(t,e){return Gm(t,e)}async function by(t,e){return Gm(t,e)}async function ky(t,e){return Gm(t,e)}async function J9(t,e){return Gm(t,e)}/**
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
 */async function Z9(t,e){return _i(t,"POST","/v1/accounts:signInWithEmailLink",ot(t,e))}async function eq(t,e){return _i(t,"POST","/v1/accounts:signInWithEmailLink",ot(t,e))}/**
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
 */class nd extends Gl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new nd(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nd(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ws(e,r,"signInWithPassword");return Sy(e,i)}else return Sy(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ws(e,r,"signInWithPassword");return Sy(e,s)}else return Promise.reject(i)});case"emailLink":return Z9(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return dO(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eq(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zr(t,e){return _i(t,"POST","/v1/accounts:signInWithIdp",ot(t,e))}/**
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
 */const tq="http://localhost";class Mr extends Gl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ZE(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:tq,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dl(n)}return e}}/**
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
 */async function nq(t,e){return dt(t,"POST","/v1/accounts:sendVerificationCode",ot(t,e))}async function rq(t,e){return _i(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,e))}async function iq(t,e){const n=await _i(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,e));if(n.temporaryProof)throw $u(t,"account-exists-with-different-credential",n);return n}const sq={USER_NOT_FOUND:"user-not-found"};async function oq(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _i(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,n),sq)}/**
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
 */class wo extends Gl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new wo({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new wo({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return rq(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return iq(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return oq(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new wo({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function aq(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lq(t){const e=Da(Ru(t)).link,n=e?Da(Ru(e)).deep_link_id:null,r=Da(Ru(t)).deep_link_id;return(r?Da(Ru(r)).link:null)||r||n||e||t}class Hm{constructor(e){var n,r,i,s,o,a;const l=Da(Ru(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=aq((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lq(e);try{return new Hm(n)}catch{return null}}}/**
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
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,n){return nd._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hm.parseLink(n);return M(r,"argument-error"),nd._fromEmailAndCode(e,r.code,r.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ii{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hl extends Ii{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ya extends Hl{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return M("providerId"in n&&"signInMethod"in n,"argument-error"),Mr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),Mr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ya.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ya.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ya(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class yr extends Hl{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class vr extends Hl{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */const uq="http://localhost";class Il extends Gl{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Il(r,s)}static _create(e,n){return new Il(e,n)}buildRequest(){return{requestUri:uq,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const cq="saml.";class Ip extends Ii{constructor(e){M(e.startsWith(cq),"argument-error"),super(e)}static credentialFromResult(e){return Ip.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ip.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Il.fromJSON(e);return M(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Il._create(r,n)}catch{return null}}}/**
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
 */class wr extends Hl{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
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
 */async function df(t,e){return _i(t,"POST","/v1/accounts:signUp",ot(t,e))}/**
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
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yo._fromIdTokenResponse(e,r,i),o=_b(r);return new Wn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_b(r);return new Wn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _b(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function dq(t){var e;const n=Ze(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Wn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await df(n,{returnSecureToken:!0}),i=await Wn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Tp extends vt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tp.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tp(e,n,r,i)}}function hO(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tp._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function fO(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function hq(t,e){const n=z(t);await Km(!0,n,e);const{providerUserInfo:r}=await b9(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=fO(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function s_(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wn._forOperation(t,"link",r)}async function Km(t,e,n){await ed(e);const r=fO(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";M(r.has(n)===t,e.auth,i)}/**
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
 */async function pO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await di(t,hO(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Wm(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Wn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),s}}/**
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
 */async function mO(t,e,n=!1){const r="signIn",i=await hO(t,r,e),s=await Wn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Qm(t,e){return mO(Ze(t),e)}async function gO(t,e){const n=z(t);return await Km(!1,n,e.providerId),s_(n,e)}async function yO(t,e){return pO(z(t),e)}/**
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
 */async function fq(t,e){return _i(t,"POST","/v1/accounts:signInWithCustomToken",ot(t,e))}/**
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
 */async function pq(t,e){const n=Ze(t),r=await fq(n,{token:e,returnSecureToken:!0}),i=await Wn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class qd{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?o_._fromServerResponse(e,n):"totpInfo"in n?a_._fromServerResponse(e,n):Ot(e,"internal-error")}}class o_ extends qd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new o_(n)}}class a_ extends qd{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new a_(n)}}/**
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
 */function Xa(t,e,n){var r;M(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),M(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(M(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(M(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function mq(t,e,n){var r;const i=Ze(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await ws(i,s,"getOobCode",!0);n&&Xa(i,o,n),await by(i,o)}else n&&Xa(i,s,n),await by(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ws(i,s,"getOobCode",!0);n&&Xa(i,a,n),await by(i,a)}else return Promise.reject(o)})}async function gq(t,e,n){await cO(z(t),{oobCode:e,newPassword:n})}async function yq(t,e){await Y9(z(t),{oobCode:e})}async function vO(t,e){const n=z(t),r=await cO(n,{oobCode:e}),i=r.requestType;switch(M(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":M(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":M(r.mfaInfo,n,"internal-error");default:M(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=qd._fromServerResponse(Ze(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function vq(t,e){const{data:n}=await vO(z(t),e);return n.email}async function wq(t,e,n){var r;const i=Ze(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ws(i,s,"signUpPassword");o=df(i,u)}else o=df(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ws(i,s,"signUpPassword");return df(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Wn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Eq(t,e,n){return Qm(z(t),Ds.credential(e,n))}/**
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
 */async function _q(t,e,n){var r;const i=Ze(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){M(l.handleCodeInApp,i,"argument-error"),l&&Xa(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await ws(i,s,"getOobCode",!0);o(a,n),await ky(i,a)}else o(s,n),await ky(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await ws(i,s,"getOobCode",!0);o(l,n),await ky(i,l)}else return Promise.reject(a)})}function Iq(t,e){const n=Hm.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Tq(t,e,n){const r=z(t),i=Ds.credentialWithLink(e,n||Zc());return M(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qm(r,i)}/**
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
 */async function Sq(t,e){return dt(t,"POST","/v1/accounts:createAuthUri",ot(t,e))}/**
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
 */async function bq(t,e){const n=t_()?Zc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Sq(z(t),r);return i||[]}async function kq(t,e){const n=z(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Xa(n.auth,i,e);const{email:s}=await X9(n.auth,i);s!==t.email&&await t.reload()}async function xq(t,e,n){const r=z(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Xa(r.auth,s,n);const{email:o}=await J9(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function Cq(t,e){return dt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Aq(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=z(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await di(r,Cq(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Pq(t,e){return wO(z(t),e,null)}function Rq(t,e){return wO(z(t),null,e)}async function wO(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await di(t,dO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function Nq(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Wm(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ja(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new Dq(s,i);case"github.com":return new Oq(s,i);case"google.com":return new Lq(s,i);case"twitter.com":return new Mq(s,i,t.screenName||null);case"custom":case"anonymous":return new Ja(s,null);default:return new Ja(s,r,i)}}class Ja{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class EO extends Ja{constructor(e,n,r,i){super(e,n,r),this.username=i}}class Dq extends Ja{constructor(e,n){super(e,"facebook.com",n)}}class Oq extends EO{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Lq extends Ja{constructor(e,n){super(e,"google.com",n)}}class Mq extends EO{constructor(e,n,r){super(e,"twitter.com",n,r)}}function $q(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Nq(n)}class lo{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new lo("enroll",e,n)}static _fromMfaPendingCredential(e){return new lo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return lo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return lo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class l_{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ze(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>qd._fromServerResponse(r,a));M(i.mfaPendingCredential,r,"internal-error");const o=lo._fromMfaPendingCredential(i.mfaPendingCredential);return new l_(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Wn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return M(n.user,r,"internal-error"),Wn._forOperation(n.user,n.operationType,u);default:Ot(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function Fq(t,e){var n;const r=z(t),i=e;return M(e.customData.operationType,r,"argument-error"),M((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),l_._fromError(r,i)}/**
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
 */function Uq(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:start",ot(t,e))}function Vq(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:finalize",ot(t,e))}function Bq(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ot(t,e))}class u_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>qd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new u_(e)}async getSession(){return lo._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await di(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await di(this.user,Bq(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const xy=new WeakMap;function jq(t){const e=z(t);return xy.has(e)||xy.set(e,u_._fromUser(e)),xy.get(e)}const Sp="__sak";/**
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
 */class _O{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sp,"1"),this.storage.removeItem(Sp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zq(){const t=$e();return r_(t)||Wl(t)}const qq=1e3,Wq=10;class IO extends _O{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zq()&&F9(),this.fallbackToPolling=rO(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$9()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wq):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qq)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}IO.type="LOCAL";const c_=IO;/**
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
 */class TO extends _O{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TO.type="SESSION";const $o=TO;/**
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
 */function Gq(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ym{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ym(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Gq(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ym.receivers=[];/**
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
 */function Wd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hq{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Wd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function Kq(t){nt().location.href=t}/**
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
 */function d_(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Qq(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yq(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xq(){return d_()?self:null}/**
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
 */const SO="firebaseLocalStorageDb",Jq=1,bp="firebaseLocalStorage",bO="fbase_key";class Gd{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xm(t,e){return t.transaction([bp],e?"readwrite":"readonly").objectStore(bp)}function Zq(){const t=indexedDB.deleteDatabase(SO);return new Gd(t).toPromise()}function F0(){const t=indexedDB.open(SO,Jq);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bp,{keyPath:bO})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bp)?e(r):(r.close(),await Zq(),e(await F0()))})})}async function Ib(t,e,n){const r=Xm(t,!0).put({[bO]:e,value:n});return new Gd(r).toPromise()}async function eW(t,e){const n=Xm(t,!1).get(e),r=await new Gd(n).toPromise();return r===void 0?null:r.value}function Tb(t,e){const n=Xm(t,!0).delete(e);return new Gd(n).toPromise()}const tW=800,nW=3;class kO{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await F0(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nW)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ym._getInstance(Xq()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Qq(),!this.activeServiceWorker)return;this.sender=new Hq(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yq()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await F0();return await Ib(e,Sp,"1"),await Tb(e,Sp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ib(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eW(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tb(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xm(i,!1).getAll();return new Gd(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tW)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kO.type="LOCAL";const rd=kO;/**
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
 */function rW(t,e){return dt(t,"POST","/v2/accounts/mfaSignIn:start",ot(t,e))}function iW(t,e){return dt(t,"POST","/v2/accounts/mfaSignIn:finalize",ot(t,e))}/**
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
 */const sW=500,oW=6e4,Oh=1e12;class aW{constructor(e){this.auth=e,this.counter=Oh,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new lW(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Oh;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Oh;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Oh;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class lW{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;M(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=uW(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},oW)},sW))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function uW(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Cy=aO("rcb"),cW=new jd(3e4,6e4),dW="https://www.google.com/recaptcha/api.js?";class hW{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=nt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return M(fW(n),e,"argument-error"),this.shouldResolveImmediately(n)&&yb(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((r,i)=>{const s=nt().setTimeout(()=>{i(Rt(e,"network-request-failed"))},cW.get());nt()[Cy]=()=>{nt().clearTimeout(s),delete nt()[Cy];const a=nt().grecaptcha;if(!a||!yb(a)){i(Rt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${dW}?${Dl({onload:Cy,render:"explicit",hl:n})}`;i_(o).catch(()=>{clearTimeout(s),i(Rt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=nt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function fW(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class pW{async load(e){return new aW(e)}clearedOneInstance(){}}/**
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
 */const xO="recaptcha",mW={theme:"light",type:"image"};let gW=class{constructor(e,n=Object.assign({},mW),r){this.parameters=n,this.type=xO,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ze(r),this.isInvisible=this.parameters.size==="invisible",M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;M(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new pW:new hW,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=nt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){M(t_()&&!d_(),this.auth,"internal-error"),await yW(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await U9(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function yW(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class h_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=wo._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function vW(t,e,n){const r=Ze(t),i=await Jm(r,e,z(n));return new h_(i,s=>Qm(r,s))}async function wW(t,e,n){const r=z(t);await Km(!1,r,"phone");const i=await Jm(r.auth,e,z(n));return new h_(i,s=>gO(r,s))}async function EW(t,e,n){const r=z(t),i=await Jm(r.auth,e,z(n));return new h_(i,s=>yO(r,s))}async function Jm(t,e,n){var r;const i=await n.verify();try{M(typeof i=="string",t,"argument-error"),M(n.type===xO,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return M(o.type==="enroll",t,"internal-error"),(await Uq(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{M(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return M(a,t,"missing-multi-factor-info"),(await rW(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await nq(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function _W(t,e){await s_(z(t),e)}/**
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
 */let Fo=class hf{constructor(e){this.providerId=hf.PROVIDER_ID,this.auth=Ze(e)}verifyPhoneNumber(e,n){return Jm(this.auth,e,z(n))}static credential(e,n){return wo._fromVerification(e,n)}static credentialFromResult(e){const n=e;return hf.credentialFromTaggedObject(n)}static credentialFromError(e){return hf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?wo._fromTokenResponse(n,r):null}};Fo.PROVIDER_ID="phone";Fo.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Zo(t,e){return e?In(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class f_ extends Gl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IW(t){return mO(t.auth,new f_(t),t.bypassAuthState)}function TW(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),pO(n,new f_(t),t.bypassAuthState)}async function SW(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),s_(n,new f_(t),t.bypassAuthState)}/**
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
 */class CO{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IW;case"linkViaPopup":case"linkViaRedirect":return SW;case"reauthViaPopup":case"reauthViaRedirect":return TW;default:Ot(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bW=new jd(2e3,1e4);async function kW(t,e,n){const r=Ze(t);ql(t,e,Ii);const i=Zo(r,n);return new Qr(r,"signInViaPopup",e,i).executeNotNull()}async function xW(t,e,n){const r=z(t);ql(r.auth,e,Ii);const i=Zo(r.auth,n);return new Qr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function CW(t,e,n){const r=z(t);ql(r.auth,e,Ii);const i=Zo(r.auth,n);return new Qr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Qr extends CO{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bW.get())};e()}}Qr.currentPopupAction=null;/**
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
 */const AW="pendingRedirect",sc=new Map;class PW extends CO{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sc.get(this.auth._key());if(!e){try{const r=await RW(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sc.set(this.auth._key(),e)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RW(t,e){const n=PO(e),r=AO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function p_(t,e){return AO(t)._set(PO(e),"true")}function NW(){sc.clear()}function m_(t,e){sc.set(t._key(),e)}function AO(t){return In(t._redirectPersistence)}function PO(t){return vo(AW,t.config.apiKey,t.name)}/**
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
 */function DW(t,e,n){return OW(t,e,n)}async function OW(t,e,n){const r=Ze(t);ql(t,e,Ii),await r._initializationPromise;const i=Zo(r,n);return await p_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function LW(t,e,n){return MW(t,e,n)}async function MW(t,e,n){const r=z(t);ql(r.auth,e,Ii),await r.auth._initializationPromise;const i=Zo(r.auth,n);await p_(i,r.auth);const s=await RO(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function $W(t,e,n){return FW(t,e,n)}async function FW(t,e,n){const r=z(t);ql(r.auth,e,Ii),await r.auth._initializationPromise;const i=Zo(r.auth,n);await Km(!1,r,e.providerId),await p_(i,r.auth);const s=await RO(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function UW(t,e){return await Ze(t)._initializationPromise,Zm(t,e,!1)}async function Zm(t,e,n=!1){const r=Ze(t),i=Zo(r,e),o=await new PW(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function RO(t){const e=Wd(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const VW=10*60*1e3;class NO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BW(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DO(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VW&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sb(e))}saveEventToCache(e){this.cachedEventUids.add(Sb(e)),this.lastProcessedEventTime=Date.now()}}function Sb(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DO({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BW(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DO(t);default:return!1}}/**
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
 */async function OO(t,e={}){return dt(t,"GET","/v1/projects",e)}/**
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
 */const jW=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zW=/^https?/;async function qW(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OO(t);for(const n of e)try{if(WW(n))return}catch{}Ot(t,"unauthorized-domain")}function WW(t){const e=Zc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zW.test(n))return!1;if(jW.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const GW=new jd(3e4,6e4);function bb(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HW(t){return new Promise((e,n)=>{var r,i,s;function o(){bb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bb(),n(Rt(t,"network-request-failed"))},timeout:GW.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)o();else{const a=aO("iframefcb");return nt()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},i_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ff=null,e})}let ff=null;function KW(t){return ff=ff||HW(t),ff}/**
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
 */const QW=new jd(5e3,15e3),YW="__/auth/iframe",XW="emulator/auth/iframe",JW={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZW=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eG(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?n_(e,XW):`https://${t.config.authDomain}/${YW}`,r={apiKey:e.apiKey,appName:t.name,v:yi},i=ZW.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Dl(r).slice(1)}`}async function tG(t){const e=await KW(t),n=nt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:eG(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JW,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=nt().setTimeout(()=>{s(o)},QW.get());function l(){nt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const nG={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rG=500,iG=600,sG="_blank",oG="http://localhost";class kb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aG(t,e,n,r=rG,i=iG){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nG),{width:r.toString(),height:i.toString(),top:s,left:o}),u=$e().toLowerCase();n&&(a=ZD(u)?sG:n),JD(u)&&(e=e||oG,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(M9(u)&&a!=="_self")return lG(e||"",a),new kb(null);const d=window.open(e||"",a,c);M(d,t,"popup-blocked");try{d.focus()}catch{}return new kb(d)}function lG(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uG="__/auth/handler",cG="emulator/auth/handler",dG=encodeURIComponent("fac");async function U0(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:i};if(e instanceof Ii){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lV(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Hl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${dG}=${encodeURIComponent(l)}`:"";return`${hG(t)}?${Dl(a).slice(1)}${u}`}function hG({config:t}){return t.emulator?n_(t,cG):`https://${t.authDomain}/${uG}`}/**
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
 */const Ay="webStorageSupport";class fG{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$o,this._completeRedirectFn=Zm,this._overrideRedirectResult=m_}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await U0(e,n,r,Zc(),i);return aG(e,o,Wd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await U0(e,n,r,Zc(),i);return Kq(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tG(e),r=new NO(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ay,{type:Ay},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ay];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qW(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rO()||r_()||Wl()}}const pG=fG;class mG{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return br("unexpected MultiFactorSessionType")}}}class g_ extends mG{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new g_(e)}_finalizeEnroll(e,n,r){return Vq(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return iW(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class LO{constructor(){}static assertion(e){return g_._fromCredential(e)}}LO.FACTOR_ID="phone";var xb="@firebase/auth",Cb="0.23.2";/**
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
 */class gG{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yG(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vG(t){An(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iO(t)},u=new W9(r,i,s,l);return G9(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),An(new Zt("auth-internal",e=>{const n=Ze(e.getProvider("auth").getImmediate());return(r=>new gG(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(xb,Cb,yG(t)),At(xb,Cb,"esm2017")}/**
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
 */const wG=5*60;ZU("authIdTokenMaxAge");vG("Browser");/**
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
 */function Uo(){return window}/**
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
 */const EG=2e3;async function _G(t,e,n){var r;const{BuildInfo:i}=Uo();lr(e.sessionId,"AuthEvent did not contain a session ID");const s=await kG(e.sessionId),o={};return Wl()?o.ibi=i.packageName:zd()?o.apn=i.packageName:Ot(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,U0(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function IG(t){const{BuildInfo:e}=Uo(),n={};Wl()?n.iosBundleId=e.packageName:zd()?n.androidPackageName=e.packageName:Ot(t,"operation-not-supported-in-this-environment"),await OO(t,n)}function TG(t){const{cordova:e}=Uo();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,L9()?"_blank":"_system","location=yes"),n(i)})})}async function SG(t,e,n){const{cordova:r}=Uo();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Rt(t,"redirect-cancelled-by-user"))},EG))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),zd()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function bG(t){var e,n,r,i,s,o,a,l,u,c;const d=Uo();M(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),M(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),M(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function kG(t){const e=xG(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function xG(t){if(lr(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const CG=20;class AG extends NO{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function PG(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:DG(),postBody:null,tenantId:t.tenantId,error:Rt(t,"no-auth-event")}}function RG(t,e){return V0()._set(B0(t),e)}async function Ab(t){const e=await V0()._get(B0(t));return e&&await V0()._remove(B0(t)),e}function NG(t,e){var n,r;const i=LG(e);if(i.includes("/__/auth/callback")){const s=pf(i),o=s.firebaseError?OG(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Rt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function DG(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<CG;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function V0(){return In(c_)}function B0(t){return vo("authEvent",t.config.apiKey,t.name)}function OG(t){try{return JSON.parse(t)}catch{return null}}function LG(t){const e=pf(t),n=e.link?decodeURIComponent(e.link):void 0,r=pf(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return pf(i).link||i||r||n||t}function pf(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Da(n.join("?"))}/**
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
 */const MG=500;class $G{constructor(){this._redirectPersistence=$o,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Zm,this._overrideRedirectResult=m_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new AG(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ot(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){bG(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),NW(),await this._originValidation(e);const o=PG(e,r,i);await RG(e,o);const a=await _G(e,o,n),l=await TG(a);return SG(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IG(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Uo(),o=setTimeout(async()=>{await Ab(e),n.onEvent(Pb())},MG),a=async c=>{clearTimeout(o);const d=await Ab(e);let h=null;d&&(c!=null&&c.url)&&(h=NG(d,c.url)),n.onEvent(h||Pb())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Uo().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const FG=$G;function Pb(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Rt("no-auth-event")}}/**
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
 */function UG(t,e){Ze(t)._logFramework(e)}var VG="@firebase/auth-compat",BG="0.4.2";/**
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
 */const jG=1e3;function oc(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function zG(){return oc()==="http:"||oc()==="https:"}function MO(t=$e()){return!!((oc()==="file:"||oc()==="ionic:"||oc()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function qG(){return E1()||sm()}function WG(){return QA()&&(document==null?void 0:document.documentMode)===11}function GG(t=$e()){return/Edge\/\d+/.test(t)}function HG(t=$e()){return WG()||GG(t)}function $O(){try{const t=self.localStorage,e=Wd();if(t)return t.setItem(e,"1"),t.removeItem(e),HG()?ll():!0}catch{return y_()&&ll()}return!1}function y_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Py(){return(zG()||w1()||MO())&&!qG()&&$O()&&!y_()}function FO(){return MO()&&typeof document<"u"}async function KG(){return FO()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},jG);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function QG(){return typeof window<"u"?window:null}/**
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
 */const wn={LOCAL:"local",NONE:"none",SESSION:"session"},wu=M,UO="persistence";function YG(t,e){if(wu(Object.values(wn).includes(e),t,"invalid-persistence-type"),E1()){wu(e!==wn.SESSION,t,"unsupported-persistence-type");return}if(sm()){wu(e===wn.NONE,t,"unsupported-persistence-type");return}if(y_()){wu(e===wn.NONE||e===wn.LOCAL&&ll(),t,"unsupported-persistence-type");return}wu(e===wn.NONE||$O(),t,"unsupported-persistence-type")}async function j0(t){await t._initializationPromise;const e=VO(),n=vo(UO,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function XG(t,e){const n=VO();if(!n)return[];const r=vo(UO,t,e);switch(n.getItem(r)){case wn.NONE:return[_l];case wn.LOCAL:return[rd,$o];case wn.SESSION:return[$o];default:return[]}}function VO(){var t;try{return((t=QG())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const JG=M;class qi{constructor(){this.browserResolver=In(pG),this.cordovaResolver=In(FG),this.underlyingResolver=null,this._redirectPersistence=$o,this._completeRedirectFn=Zm,this._overrideRedirectResult=m_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return FO()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return JG(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await KG();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function BO(t){return t.unwrap()}function ZG(t){return t.wrapped()}/**
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
 */function eH(t){return jO(t)}function tH(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new nH(t,Fq(t,e))}else if(r){const i=jO(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function jO(t){const{_tokenResponse:e}=t instanceof vt?t.customData:t;if(!e)return null;if(!(t instanceof vt)&&"temporaryProof"in e&&"phoneNumber"in e)return Fo.credentialFromResult(t);const n=e.providerId;if(!n||n===vu.PASSWORD)return null;let r;switch(n){case vu.GOOGLE:r=Zn;break;case vu.FACEBOOK:r=yr;break;case vu.GITHUB:r=vr;break;case vu.TWITTER:r=wr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Il._create(n,a):Mr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ya(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof vt?r.credentialFromError(t):r.credentialFromResult(t)}function rn(t,e){return e.catch(n=>{throw n instanceof vt&&tH(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:eH(n),additionalUserInfo:$q(n),user:eg.getOrCreate(i)}})}async function z0(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>rn(t,n.confirm(r))}}class nH{constructor(e,n){this.resolver=n,this.auth=ZG(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return rn(BO(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let eg=class Fu{constructor(e){this._delegate=e,this.multiFactor=jq(e)}static getOrCreate(e){return Fu.USER_MAP.has(e)||Fu.USER_MAP.set(e,new Fu(e)),Fu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return rn(this.auth,gO(this._delegate,e))}async linkWithPhoneNumber(e,n){return z0(this.auth,wW(this._delegate,e,n))}async linkWithPopup(e){return rn(this.auth,CW(this._delegate,e,qi))}async linkWithRedirect(e){return await j0(Ze(this.auth)),$W(this._delegate,e,qi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return rn(this.auth,yO(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return z0(this.auth,EW(this._delegate,e,n))}reauthenticateWithPopup(e){return rn(this.auth,xW(this._delegate,e,qi))}async reauthenticateWithRedirect(e){return await j0(Ze(this.auth)),LW(this._delegate,e,qi)}sendEmailVerification(e){return kq(this._delegate,e)}async unlink(e){return await hq(this._delegate,e),this}updateEmail(e){return Pq(this._delegate,e)}updatePassword(e){return Rq(this._delegate,e)}updatePhoneNumber(e){return _W(this._delegate,e)}updateProfile(e){return Aq(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return xq(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};eg.USER_MAP=new WeakMap;/**
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
 */const Eu=M;class q0{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Eu(r,"invalid-api-key",{appName:e.name}),Eu(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?qi:void 0;this._delegate=n.initialize({options:{persistence:rH(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(g9),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?eg.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){H9(this._delegate,e,n)}applyActionCode(e){return yq(this._delegate,e)}checkActionCode(e){return vO(this._delegate,e)}confirmPasswordReset(e,n){return gq(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return rn(this._delegate,wq(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return bq(this._delegate,e)}isSignInWithEmailLink(e){return Iq(this._delegate,e)}async getRedirectResult(){Eu(Py(),this._delegate,"operation-not-supported-in-this-environment");const e=await UW(this._delegate,qi);return e?rn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){UG(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Rb(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Rb(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return _q(this._delegate,e,n)}sendPasswordResetEmail(e,n){return mq(this._delegate,e,n||void 0)}async setPersistence(e){YG(this._delegate,e);let n;switch(e){case wn.SESSION:n=$o;break;case wn.LOCAL:n=await In(rd)._isAvailable()?rd:c_;break;case wn.NONE:n=_l;break;default:return Ot("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return rn(this._delegate,dq(this._delegate))}signInWithCredential(e){return rn(this._delegate,Qm(this._delegate,e))}signInWithCustomToken(e){return rn(this._delegate,pq(this._delegate,e))}signInWithEmailAndPassword(e,n){return rn(this._delegate,Eq(this._delegate,e,n))}signInWithEmailLink(e,n){return rn(this._delegate,Tq(this._delegate,e,n))}signInWithPhoneNumber(e,n){return z0(this._delegate,vW(this._delegate,e,n))}async signInWithPopup(e){return Eu(Py(),this._delegate,"operation-not-supported-in-this-environment"),rn(this._delegate,kW(this._delegate,e,qi))}async signInWithRedirect(e){return Eu(Py(),this._delegate,"operation-not-supported-in-this-environment"),await j0(this._delegate),DW(this._delegate,e,qi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return vq(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}q0.Persistence=wn;function Rb(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&eg.getOrCreate(o)),error:e,complete:n}}function rH(t,e){const n=XG(t,e);if(typeof self<"u"&&!n.includes(rd)&&n.push(rd),typeof window<"u")for(const r of[c_,$o])n.includes(r)||n.push(r);return n.includes(_l)||n.push(_l),n}/**
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
 */class v_{constructor(){this.providerId="phone",this._delegate=new Fo(BO($r.auth()))}static credential(e,n){return Fo.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}v_.PHONE_SIGN_IN_METHOD=Fo.PHONE_SIGN_IN_METHOD;v_.PROVIDER_ID=Fo.PROVIDER_ID;/**
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
 */const iH=M;class sH{constructor(e,n,r=$r.app()){var i;iH((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new gW(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const oH="auth-compat";function aH(t){t.INTERNAL.registerComponent(new Zt(oH,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new q0(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ua.EMAIL_SIGNIN,PASSWORD_RESET:ua.PASSWORD_RESET,RECOVER_EMAIL:ua.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ua.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ua.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ua.VERIFY_EMAIL}},EmailAuthProvider:Ds,FacebookAuthProvider:yr,GithubAuthProvider:vr,GoogleAuthProvider:Zn,OAuthProvider:Ya,SAMLAuthProvider:Ip,PhoneAuthProvider:v_,PhoneMultiFactorGenerator:LO,RecaptchaVerifier:sH,TwitterAuthProvider:wr,Auth:q0,AuthCredential:Gl,Error:vt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(VG,BG)}aH($r);const lH="@firebase/firestore-compat",uH="0.3.12";/**
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
 */function w_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new P("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Nb(){if(typeof Uint8Array>"u")throw new P("unimplemented","Uint8Arrays are not available in this environment.")}function Db(){if(!d5())throw new P("unimplemented","Blobs are unavailable in Firestore in this environment.")}let zO=class W0{constructor(e){this._delegate=e}static fromBase64String(e){return Db(),new W0(Lr.fromBase64String(e))}static fromUint8Array(e){return Nb(),new W0(Lr.fromUint8Array(e))}toBase64(){return Db(),this._delegate.toBase64()}toUint8Array(){return Nb(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function G0(t){return cH(t,["next","error","complete"])}function cH(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class dH{enableIndexedDbPersistence(e,n){return U3(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return V3(e._delegate)}clearIndexedDbPersistence(e){return B3(e._delegate)}}class qO{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof fs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&ar("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){eD(this._delegate,e,n,r)}enableNetwork(){return z3(this._delegate)}disableNetwork(){return q3(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,JN("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return j3(this._delegate)}onSnapshotsInSync(e){return vz(this._delegate,e)}get app(){if(!this._appCompat)throw new P("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Tl(this,LE(this._delegate,e))}catch(n){throw Qt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Bn(this,vn(this._delegate,e))}catch(n){throw Qt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Kt(this,O3(this._delegate,e))}catch(n){throw Qt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Iz(this._delegate,n=>e(new WO(this,n)))}batch(){return Tt(this._delegate),new GO(new Ez(this._delegate,e=>Bd(this._delegate,e)))}loadBundle(e){return W3(this._delegate,e)}namedQuery(e){return G3(this._delegate,e).then(n=>n?new Kt(this,n):null)}}class tg extends qE{constructor(e){super(),this.firestore=e}convertBytes(e){return new zO(new Lr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Bn.forKey(n,this.firestore,null)}}function hH(t){RB(t)}class WO{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new tg(e)}get(e){const n=uo(e);return this._delegate.get(n).then(r=>new id(this._firestore,new ci(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=uo(e);return r?(w_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=uo(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=uo(e);return this._delegate.delete(n),this}}class GO{constructor(e){this._delegate=e}set(e,n,r){const i=uo(e);return r?(w_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=uo(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=uo(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Vo{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new nc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new sd(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Vo.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Vo(e,new tg(e),n),i.set(n,s)),s}}Vo.INSTANCES=new WeakMap;class Bn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new tg(e)}static forPath(e,n,r){if(e.length%2!==0)throw new P("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Bn(n,new be(n._delegate,r,new $(e)))}static forKey(e,n,r){return new Bn(n,new be(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Tl(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Tl(this.firestore,LE(this._delegate,e))}catch(n){throw Qt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=z(e),e instanceof be?tD(this._delegate,e):!1}set(e,n){n=w_("DocumentReference.set",n);try{return n?Jn(this._delegate,e,n):Jn(this._delegate,e)}catch(r){throw Qt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?eb(this._delegate,e):eb(this._delegate,e,n,...r)}catch(i){throw Qt(i,"updateDoc()","DocumentReference.update()")}}delete(){return vD(this._delegate)}onSnapshot(...e){const n=HO(e),r=KO(e,i=>new id(this.firestore,new ci(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return WE(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=hz(this._delegate):(e==null?void 0:e.source)==="server"?n=fz(this._delegate):n=dz(this._delegate),n.then(r=>new id(this.firestore,new ci(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Bn(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Qt(t,e,n){return t.message=t.message.replace(e,n),t}function HO(t){for(const e of t)if(typeof e=="object"&&!G0(e))return e;return{}}function KO(t,e){var n,r;let i;return G0(t[0])?i=t[0]:G0(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class id{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Bn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return yD(this._delegate,e._delegate)}}class sd extends id{data(e){const n=this._delegate.data(e);return NB(n!==void 0),n}}class Kt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new tg(e)}where(e,n,r){try{return new Kt(this.firestore,Ci(this._delegate,tz(e,n,r)))}catch(i){throw Qt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Kt(this.firestore,Ci(this._delegate,nz(e,n)))}catch(r){throw Qt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Kt(this.firestore,Ci(this._delegate,rz(e)))}catch(n){throw Qt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Kt(this.firestore,Ci(this._delegate,iz(e)))}catch(n){throw Qt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Kt(this.firestore,Ci(this._delegate,sz(...e)))}catch(n){throw Qt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Kt(this.firestore,Ci(this._delegate,oz(...e)))}catch(n){throw Qt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Kt(this.firestore,Ci(this._delegate,az(...e)))}catch(n){throw Qt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Kt(this.firestore,Ci(this._delegate,lz(...e)))}catch(n){throw Qt(n,"endAt()","Query.endAt()")}}isEqual(e){return nD(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=mz(this._delegate):(e==null?void 0:e.source)==="server"?n=gz(this._delegate):n=pz(this._delegate),n.then(r=>new H0(this.firestore,new vs(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=HO(e),r=KO(e,i=>new H0(this.firestore,new vs(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return WE(this._delegate,n,r)}withConverter(e){return new Kt(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class fH{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new sd(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class H0{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Kt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new sd(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new fH(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new sd(this._firestore,r))})}isEqual(e){return yD(this._delegate,e._delegate)}}class Tl extends Kt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Bn(this.firestore,e):null}doc(e){try{return e===void 0?new Bn(this.firestore,vn(this._delegate)):new Bn(this.firestore,vn(this._delegate,e))}catch(n){throw Qt(n,"doc()","CollectionReference.doc()")}}add(e){return yz(this._delegate,e).then(n=>new Bn(this.firestore,n))}isEqual(e){return tD(this._delegate,e._delegate)}withConverter(e){return new Tl(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function uo(t){return de(t,be)}/**
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
 */class E_{constructor(...e){this._delegate=new ys(...e)}static documentId(){return new E_(Xe.keyField().canonicalString())}isEqual(e){return e=z(e),e instanceof ys?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Js{constructor(e){this._delegate=e}static serverTimestamp(){const e=Sz();return e._methodName="FieldValue.serverTimestamp",new Js(e)}static delete(){const e=Tz();return e._methodName="FieldValue.delete",new Js(e)}static arrayUnion(...e){const n=bz(...e);return n._methodName="FieldValue.arrayUnion",new Js(n)}static arrayRemove(...e){const n=kz(...e);return n._methodName="FieldValue.arrayRemove",new Js(n)}static increment(e){const n=xz(e);return n._methodName="FieldValue.increment",new Js(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const pH={Firestore:qO,GeoPoint:Om,Timestamp:Re,Blob:zO,Transaction:WO,WriteBatch:GO,DocumentReference:Bn,DocumentSnapshot:id,Query:Kt,QueryDocumentSnapshot:sd,QuerySnapshot:H0,CollectionReference:Tl,FieldPath:E_,FieldValue:Js,setLogLevel:hH,CACHE_SIZE_UNLIMITED:$3};function mH(t,e){t.INTERNAL.registerComponent(new Zt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},pH)))}/**
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
 */function gH(t){mH(t,(e,n)=>new qO(e,n,new dH)),t.registerVersion(lH,uH)}gH($r);const yH={apiKey:"AIzaSyDmeCKj1u6joV57Opj22FUUvQCbgaW7qtI",authDomain:"squarelion-43d29.firebaseapp.com",projectId:"squarelion-43d29",storageBucket:"squarelion-43d29.appspot.com",messagingSenderId:"171439211836",appId:"1:171439211836:web:5aba3918d87876d0d84a39",measurementId:"G-9S8TZFG63M"},QO=$r.initializeApp(yH);n9(QO);const __=$r.auth(),Sl=$r.firestore(),Qn=F3(QO);$r.firestore();new Zn;const ure=new $r.auth.GoogleAuthProvider;class vH extends er.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}async componentDidCatch(e,n){console.log(e,n)}render(){return this.state.hasError?A("div",{className:"absolute z-50  inset-0 opacity-100",children:A("img",{className:` w-full h-full transition-opacity duration-1000 opacity-75
          }`,src:zU,alt:"Header Background"})}):this.props.children}}const Hd=w.createContext(null);function wH({children:t}){const[e,n]=w.useState(null),[r,i]=w.useState(null),[s,o]=w.useState(null),[a,l]=w.useState(null),[u,c]=w.useState(null),[d,h]=w.useState(null),[f,p]=w.useState(null);w.useEffect(()=>__.onAuthStateChanged(v=>{if(v){i(v.uid);const y=Sl.collection("admin").doc(v.uid).onSnapshot(_=>{const I=_.data();n(I.Name),o(I.level),l(I.pto),c(I.WFH),h(I.role),p(I.Email),localStorage.setItem("user",I.Name)});return()=>{y()}}else n(null),o(null),console.log("no user")}),[]);const m=w.useMemo(()=>({user:e,uuid:r,level:s,pto:a,wfh:u,email:f}),[e,r,s,a,u,f]);return A(Hd.Provider,{value:m,children:t})}const EH=w.createContext(),_H=({children:t})=>{const[e,n]=w.useState(""),[r,i]=w.useState(""),[s,o]=w.useState(""),[a,l]=w.useState(""),[u,c]=w.useState(""),[d,h]=w.useState(""),[f,p]=w.useState(""),[m,E]=w.useState(""),[v,g]=w.useState(""),[y,_]=w.useState(""),[I,S]=w.useState(""),[T,C]=w.useState(""),[D,R]=w.useState(""),[Y,se]=w.useState(""),[ue,G]=w.useState(""),[Q,he]=w.useState(""),[xe,k]=w.useState(""),[V,H]=w.useState("all"),[K,ne]=w.useState(""),[ht,ft]=w.useState(""),[at,Ne]=w.useState(""),[Ln,eu]=w.useState([]),[Ms,Si]=w.useState("orange"),[Gn,Ur]=w.useState(""),[$s,Sg]=w.useState(""),[tu,bg]=w.useState([]),[Lt,gM]=w.useState([]),[yM,vM]=w.useState("");return A(EH.Provider,{value:{objective:e,setObjective:n,uniqueId:r,setUniqueId:i,type:s,setType:o,date:a,setDate:l,post:u,setPost:c,objectiveAnswer:d,setObjectiveAnswer:h,answer:f,setAnswer:p,typeAnswer:m,setTypeAnswer:E,subject:v,setSubject:g,editDetails:y,setEditDetails:_,forPost:I,setForPost:S,imageUrl:T,setImageUrl:C,image1Url:D,setImage1Url:R,image2Url:Y,setImage2Url:se,image3Url:ue,setImage3Url:G,dbId:Q,setDbId:he,preset:xe,setPreset:k,viewer:V,setViewer:H,pri:K,setPri:ne,boosting:ht,setBoosting:ft,title:at,setTitle:Ne,assigned:Ln,setAssigned:eu,color:Ms,setColor:Si,page:Gn,setPage:Ur,show:$s,setShow:Sg,rounded:tu,setRounded:bg,round:Lt,setRound:gM,hashtag:yM,setHashtag:vM},children:t})};let IH={data:""},TH=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||IH,SH=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,bH=/\/\*[^]*?\*\/|  +/g,Ob=/\n+/g,Fi=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Fi(o,s):s+"{"+Fi(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Fi(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Fi.p?Fi.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Vr={},YO=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+YO(t[n]);return e}return t},kH=(t,e,n,r,i)=>{let s=YO(t),o=Vr[s]||(Vr[s]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(s));if(!Vr[o]){let l=s!==t?t:(u=>{let c,d,h=[{}];for(;c=SH.exec(u.replace(bH,""));)c[4]?h.shift():c[3]?(d=c[3].replace(Ob," ").trim(),h.unshift(h[0][d]=h[0][d]||{})):h[0][c[1]]=c[2].replace(Ob," ").trim();return h[0]})(t);Vr[o]=Fi(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Vr.g?Vr.g:null;return n&&(Vr.g=Vr[o]),((l,u,c,d)=>{d?u.data=u.data.replace(d,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(Vr[o],e,r,a),o},xH=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Fi(a,""):a===!1?"":a}return r+i+(o??"")},"");function ng(t){let e=this||{},n=t.call?t(e.p):t;return kH(n.unshift?n.raw?xH(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,TH(e.target),e.g,e.o,e.k)}let XO,K0,Q0;ng.bind({g:1});let hi=ng.bind({k:1});function CH(t,e,n,r){Fi.p=e,XO=t,K0=n,Q0=r}function Os(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:K0&&K0()},a),n.o=/ *go\d+/.test(l),a.className=ng.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),Q0&&u[0]&&Q0(a),XO(u,a)}return e?e(i):i}}var AH=t=>typeof t=="function",kp=(t,e)=>AH(t)?t(e):t,PH=(()=>{let t=0;return()=>(++t).toString()})(),JO=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),RH=20,mf=new Map,NH=1e3,Lb=t=>{if(mf.has(t))return;let e=setTimeout(()=>{mf.delete(t),ea({type:4,toastId:t})},NH);mf.set(t,e)},DH=t=>{let e=mf.get(t);e&&clearTimeout(e)},Y0=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,RH)};case 1:return e.toast.id&&DH(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?Y0(t,{type:1,toast:n}):Y0(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Lb(r):t.toasts.forEach(s=>{Lb(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},gf=[],yf={toasts:[],pausedAt:void 0},ea=t=>{yf=Y0(yf,t),gf.forEach(e=>{e(yf)})},OH={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},LH=(t={})=>{let[e,n]=w.useState(yf);w.useEffect(()=>(gf.push(n),()=>{let i=gf.indexOf(n);i>-1&&gf.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||OH[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},MH=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||PH()}),Kd=t=>(e,n)=>{let r=MH(e,t,n);return ea({type:2,toast:r}),r.id},Tn=(t,e)=>Kd("blank")(t,e);Tn.error=Kd("error");Tn.success=Kd("success");Tn.loading=Kd("loading");Tn.custom=Kd("custom");Tn.dismiss=t=>{ea({type:3,toastId:t})};Tn.remove=t=>ea({type:4,toastId:t});Tn.promise=(t,e,n)=>{let r=Tn.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Tn.success(kp(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Tn.error(kp(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var $H=(t,e)=>{ea({type:1,toast:{id:t,height:e}})},FH=()=>{ea({type:5,time:Date.now()})},UH=t=>{let{toasts:e,pausedAt:n}=LH(t);w.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&Tn.dismiss(a.id);return}return setTimeout(()=>Tn.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=w.useCallback(()=>{n&&ea({type:6,time:Date.now()})},[n]),i=w.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},c=e.filter(f=>(f.position||u)===(s.position||u)&&f.height),d=c.findIndex(f=>f.id===s.id),h=c.filter((f,p)=>p<d&&f.visible).length;return c.filter(f=>f.visible).slice(...a?[h+1]:[0,h]).reduce((f,p)=>f+(p.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:$H,startPause:FH,endPause:r,calculateOffset:i}}},VH=hi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,BH=hi`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,jH=hi`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,zH=Os("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${VH} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${BH} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${jH} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,qH=hi`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,WH=Os("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${qH} 1s linear infinite;
`,GH=hi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,HH=hi`
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
}`,KH=Os("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${GH} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${HH} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,QH=Os("div")`
  position: absolute;
`,YH=Os("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,XH=hi`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,JH=Os("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${XH} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ZH=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?w.createElement(JH,null,e):e:n==="blank"?null:w.createElement(YH,null,w.createElement(WH,{...r}),n!=="loading"&&w.createElement(QH,null,n==="error"?w.createElement(zH,{...r}):w.createElement(KH,{...r})))},e8=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,t8=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,n8="0%{opacity:0;} 100%{opacity:1;}",r8="0%{opacity:1;} 100%{opacity:0;}",i8=Os("div")`
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
`,s8=Os("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,o8=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=JO()?[n8,r8]:[e8(n),t8(n)];return{animation:e?`${hi(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${hi(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},a8=w.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?o8(t.position||e||"top-center",t.visible):{opacity:0},s=w.createElement(ZH,{toast:t}),o=w.createElement(s8,{...t.ariaProps},kp(t.message,t));return w.createElement(i8,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):w.createElement(w.Fragment,null,s,o))});CH(w.createElement);var l8=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=w.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return w.createElement("div",{ref:s,className:e,style:n},i)},u8=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:JO()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},c8=ng`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Lh=16,I_=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=UH(n);return w.createElement("div",{style:{position:"fixed",zIndex:9999,top:Lh,left:Lh,right:Lh,bottom:Lh,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let c=u.position||e,d=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),h=u8(c,d);return w.createElement(l8,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?c8:"",style:h},u.type==="custom"?kp(u.message,u):i?i(u):w.createElement(a8,{toast:u,position:c}))}))},hr=Tn;function d8(){const[t,e]=w.useState(0),[n,r]=w.useState(""),[i,s]=w.useState(""),[o,a]=w.useState(""),[l,u]=w.useState(""),[c,d]=w.useState("");w.useState("");const{user:h}=w.useContext(Hd);async function f(p){if(p.preventDefault(),t!==0&&n!==""&&i!==""&&o!==""&&l!==""&&c!==""){const m=vn(Qn,"contracts",i);await Jn(m,{[`${i} / ${l}/ ${c}`]:{contractName:n,companyName:i,contractType:o,startDate:l,endDate:c,writer:h,status:"Pending",color:"orange"}},{merge:!0}),hr.success("Contract Submitted"),e(0),r(""),s(""),a(""),u(""),d("")}else hr.error("Please fill in all fields")}return J("form",{onSubmit:f,children:[A(I_,{}),J("div",{className:"bg-slate-700 flex gap-4 justify-center items-center p-4 cursor-pointer flex-wrap m-auto",children:[J("div",{className:"flex flex-col mb-4",children:[A("label",{className:"mb-2",children:"Unique ID"}),A("input",{type:"text",value:t,onChange:p=>e(p.target.value),className:"p-2 border rounded text-black"})]}),J("div",{className:"flex flex-col mb-4",children:[A("label",{className:"mb-2",children:"Contract Name"}),A("input",{type:"text",value:n,onChange:p=>r(p.target.value),className:"p-2 border rounded text-black"})]}),J("div",{className:"flex flex-col mb-4",children:[A("label",{className:"mb-2",children:"Company Name"}),A("input",{type:"text",value:i,onChange:p=>s(p.target.value),className:"p-2 border rounded text-black"})]}),J("div",{className:"flex flex-col mb-4",children:[A("label",{className:"mb-2",children:"Contract Type"}),A("input",{type:"text",value:o,onChange:p=>a(p.target.value),className:"p-2 border rounded text-black"})]}),J("div",{className:"flex flex-col mb-4",children:[A("label",{className:"mb-2",children:"Start Date"}),A("input",{type:"date",value:l,onChange:p=>u(p.target.value),className:"p-2 border rounded text-black"})]}),J("div",{className:"flex flex-col mb-4",children:[A("label",{className:"mb-2",children:"End Date"}),A("input",{type:"date",value:c,onChange:p=>d(p.target.value),className:"p-2 border rounded text-black"})]}),J("div",{className:"flex flex-col mb-4",children:[A("label",{className:"mb-2",children:"Writer"}),A("h2",{className:"p-2 border rounded text-white font-bold",children:h})]}),A("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Submit"})]})]})}const h8="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXUlEQVR4nO1VX0hTURi/QfUk9NRDvfRWD/VuUPSQphChKaQGe8iItR4qikAQRHoIDKOigjmDwp27uXvMNAxN7x0DZ4hN0XLZ/FeUm5imudZGm9u+OGe7Y1tzOLp3Trk/+B7O+c79vvO73/f9DsMoUKBAwbaE6pJaXVB6LkBMVX1FzWwlmDEqKSyrDOUXlwKxU2VV4T4OVTC5DovFspPHqJHnULiovIpenlhR+Xkge8RHzjC5iG6M9wocKwiYBQGj4O26eja/uOQbsbra2iYeswHi4zm2v6cd7WNyCb0m9piAkSt6+UXeZChMPmM2sScEjp2nZzj2uxnrTzK5AB4b1AJG/ujFbOYX7IH1zvYZjft5jAYilUBrAmeoYTYLFozzeA61Rv46/fM6jPHuDc5Jg/gdj9kOHuM9TDbBt7YcFDA7HrkA8gjYUJVpDMGkPytgtBol4TC3GQ8z2ZJIMbGA2clek/7If8Q6xHPILv4IWaVWLD2Rw0i/o04pSm/BOE/ALBffisM63S5GLokUhw8AdkgtBrwcUpsskX1tqICRCTw2HJdUauMlMlsPUHeKaksikZL3ZQbzxm9UajXPj8JWMGbbE2i0ns5J0ygErEoFYNNayDzbBD+8XyEYCsCybw5efboT88WD+Bc809Bur4/5Pf5lSAXtkCrmSxVPMgKvHY00oDewChOLFvgdTdrlaEhI6FiywpeVEQiHQxAKB0E/ei2BwMzyED0j2uPBipjP6f4oHwGn204DtoxepWs0ep2u51bHUyYcdnbQ9YirM4EA+ePJsT1x1WHHbshDwBv4Cf6gN2EvEPTR/VQJzbM6uibV2igBf9ALjqV+eQgAhGmi+L1QeI3uxyckLWN8fwsWPDN0bfn8dN0ZSG4vm/MlbTvduwtyEADa98l7YpJUmP/lgAdvz647A822iwm+ZyOXwR/0USKSE/AF3LRlxPWTwcrYUMcT6J1+BD1T98H0oQbuDZz5p03StZB2SAXDrg7aSpITcLknaEBysXhVIsOdrmczJdBsq6YKJjkB8cKkCnNuOwRCf+i6y3E3IwLpZFQbJTe5ZJWeADHy0JAHLBhegxWfE95MPUw5D+kIpHvItFEChrGb8hDIBdMoBKxKBSArLaTJcWO2LQEFChQoYLKNv1m4VLF1uK/dAAAAAElFTkSuQmCC",f8="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF30lEQVR4nO2Ze2xTVRzHuxg1CsFHMMa4xBh6TwEVUKClE81IXNsx2g50WaKOGKL84SOBmMVHVAxM2R/KIJjNsvHYoPeWu425uQ3FEcimfwwWYDocRFCBJYzHaNnY6/befc25fazd7m27NzU7yS9p2t7f7/vpOed3fr9TjWZ63J0jQROvY0FKygyDyVZnsFjf1MSjeL3JdsxgtkNvsonxBpEQEB8wvdnuNZjsmZp4GfoU22uy6FCIeJsJ/TREHM4E+MQHwGlXgSNbwJEqsMx5cKQdHOn1W7vvPaYSLLNZ/i6f+MCUQgCaBLDaFLCkHCzpBkcwIqPPsKQcLuaVSYcwmG1S+Zf6yyMWrWpMM5xa66RCGC02HP5qyTgBkIAdAU+enhCIbzYs35lkCZ2FCYO4DZaMX9oGr7kHLJNLnR/duhhJqZMCAXBkB409NvGOxfeCZfhQx5MLwRykGkb/y3OkTMmxEoTBYkfK529hkSMbjxdswiMFm5GQv1U2+pq+97wjG6sK38XGPVnYXZyGP9kkwDU3GkjZqGYCHLNN0SG/AFL9+zhcugOG1PQwCL0lHbM//RCa/NyYbQVfgJ6LVZDq35N9K6dc5tuRil8/1MlA3RsQL1ZA6PFAEARsaqzHo59ly6JjgUirKUXbnU5c6epEajUf9lnOyV9ln0KPW44x8MvrShDvxCbeOccIjhF8D+owcHw9vFdP+AL4rb2rE7OK8uTgihBmO3QrrdDql8uWmLYKbR43AuNy1+0wgIeK8nCtqzMshvdqoxybavDvBwEu7bLI4queeNBfBkCqtQre9qYwpwFz/HEqTIAaxLNJySAvLJPtavs1VQBNfi6KWk4rxqIaqBb/LJyjGtUBWGY7XPN7va37JaG/T9EhNWtN6TAB0SDe/mCjDHHF44ZlyBLS5OfCXlOmGo9q8baWSFQbOCZPZemQuVJl8mWv+6K6I7/NOfC94oZkUq3hmUlhJhLTrIrPEqcjalyv+wJQmXyJah0GIDXllAi94etQzWYWblMUoTW8iGeMyREhtIblis/OLNwWU2yh7w6k5rySYQBCW0N1TA6iAFCRkSDUAGYV5cUGQK2toXr4Eqp4KUls2XUhFgeM06EogmabwFJRgyAqS0jn3BWTeLHFcQGHXjYq7wN+0UHx953XozmxKWxiajM+3hAEiAShdE6k15ZFF9+8/RpKF7nUsxCvfQyuuTfExk0eQehXdVTYclr1ZJ29bm10CIXDbs/ZMxGzkNj4RSdc827ASWarAsgQHLHTnCvWZfUKd24qOqQHGT181CDoTNBsQ/cENWalLeKJ/fDuPFzv6lIW3+OGdGydr+Nzal+NKH4QgtkvP1C5os/bcU7R8eYTDSOqeSKVHV+f/E05bXa0QqpM7vcdYqQ4JvHBE5kjp33F23Oi2FqMoUuqs7cHi/m9Y4YwWNJR8dPPQ8T3Q2zdR2NL/lro1IgvAXBg3lNgyfVgMXckE95bf4UF+tdzC08WfzdmCGPqalQfqfP96p5/MHA0K7QnuDnqNhMu3QqwjG8KqZUuhHhmO4TuW0GISx43lpbuGzHE0FLcmLoatXs/AviFIRUo6aMaRiU+COEk6WAZb1hpW74UUvMgCF1OtCSOtLEDRjcsXfM1R48jaeUa9c6OJSJcuowxiQ+ZiYywmQhYhRHSqVx4O87LILQkplUlPSfowURPbGr0NS3Wdp89E8w2NDnU7ctWbE9rcpZ4wTFrxkV8EILTmuQbA5XWb6DaDKkpB+LfVbI4obtjcL90d8gZhX4mNW3BwI+myO2p2SZNyIUyeJ0OLDkbc1NO+93oPS+UICbsVhwlC2bIVx4cCaS48TCp+JNl1ZN6te9vPRvGLJ4l9YFWcUqu9n0XvMwPg310LKJpQmAqlC52p+z/CV8hyKwFxxSAY06CI1fAkh7Z6Gv6HsvkgyNZ0Qoy/fSfLHfJMJjsmcOu9k32Q5p4GvqQ5aQ322otFsv9mngbBpM9k/7y8zMy7ptqLdPjfzf+A/cMn/v09z26AAAAAElFTkSuQmCC";/**
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
 */const ZO="firebasestorage.googleapis.com",e2="storageBucket",p8=2*60*1e3,m8=10*60*1e3,g8=1e3;/**
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
 */class Ue extends vt{constructor(e,n,r=0){super(Ry(e),`Firebase Storage: ${n} (${Ry(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ry(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Ry(t){return"storage/"+t}function T_(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(ke.UNKNOWN,t)}function y8(t){return new Ue(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function v8(t){return new Ue(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function w8(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(ke.UNAUTHENTICATED,t)}function E8(){return new Ue(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _8(t){return new Ue(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function t2(){return new Ue(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n2(){return new Ue(ke.CANCELED,"User canceled the upload/download.")}function I8(t){return new Ue(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function T8(t){return new Ue(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function S8(){return new Ue(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+e2+"' property when initializing the app?")}function r2(){return new Ue(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b8(){return new Ue(ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function k8(){return new Ue(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x8(t){return new Ue(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function X0(t){return new Ue(ke.INVALID_ARGUMENT,t)}function i2(){return new Ue(ke.APP_DELETED,"The Firebase app was deleted.")}function C8(t){return new Ue(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ac(t,e){return new Ue(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function _u(t){throw new Ue(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Sn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Sn.makeFromUrl(e,n)}catch{return new Sn(e,"")}if(r.path==="")return r;throw T8(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),p={bucket:1,path:3},m=n===ZO?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<y.length;_++){const I=y[_],S=I.regex.exec(e);if(S){const T=S[I.indices.bucket];let C=S[I.indices.path];C||(C=""),r=new Sn(T,C),I.postModify(r);break}}if(r==null)throw I8(e);return r}}class A8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function P8(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,t(f,l())},E)}function h(){s&&clearTimeout(s)}function f(E,...v){if(u){h();return}if(E){h(),c.call(null,E,...v);return}if(l()||o){h(),c.call(null,E,...v);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let p=!1;function m(E){p||(p=!0,h(),!u&&(i!==null?(E||(a=2),clearTimeout(i),d(0)):E||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function R8(t){t(!1)}/**
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
 */function N8(t){return t!==void 0}function D8(t){return typeof t=="function"}function O8(t){return typeof t=="object"&&!Array.isArray(t)}function rg(t){return typeof t=="string"||t instanceof String}function Mb(t){return S_()&&t instanceof Blob}function S_(){return typeof Blob<"u"&&!sm()}function $b(t,e,n,r){if(r<e)throw X0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw X0(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Kl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function s2(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Eo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Eo||(Eo={}));/**
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
 */function o2(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class L8{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Mh(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Eo.NO_ERROR,l=s.getStatus();if(!a||o2(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Eo.ABORT;r(!1,new Mh(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Mh(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());N8(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=T_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?i2():n2();o(l)}else{const l=t2();o(l)}};this.canceled_?n(!1,new Mh(!1,null,!0)):this.backoffId_=P8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&R8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mh{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function M8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function F8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function U8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function V8(t,e,n,r,i,s,o=!0){const a=s2(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return F8(u,e),M8(u,n),$8(u,s),U8(u,r),new L8(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function B8(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function j8(...t){const e=B8();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(S_())return new Blob(t);throw new Ue(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function z8(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function q8(t){if(typeof atob>"u")throw x8("base-64");return atob(t)}/**
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
 */const kr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ny{constructor(e,n){this.data=e,this.contentType=n||null}}function W8(t,e){switch(t){case kr.RAW:return new Ny(a2(e));case kr.BASE64:case kr.BASE64URL:return new Ny(l2(t,e));case kr.DATA_URL:return new Ny(H8(e),K8(e))}throw T_()}function a2(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function G8(t){let e;try{e=decodeURIComponent(t)}catch{throw ac(kr.DATA_URL,"Malformed data URL.")}return a2(e)}function l2(t,e){switch(t){case kr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ac(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case kr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ac(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=q8(e)}catch(i){throw i.message.includes("polyfill")?i:ac(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class u2{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ac(kr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Q8(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function H8(t){const e=new u2(t);return e.base64?l2(kr.BASE64,e.rest):G8(e.rest)}function K8(t){return new u2(t).contentType}function Q8(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ui{constructor(e,n){let r=0,i="";Mb(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mb(this.data_)){const r=this.data_,i=z8(r,e,n);return i===null?null:new Ui(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ui(r,!0)}}static getBlob(...e){if(S_()){const n=e.map(r=>r instanceof Ui?r.data_:r);return new Ui(j8.apply(null,n))}else{const n=e.map(o=>rg(o)?W8(kr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ui(i,!0)}}uploadData(){return this.data_}}/**
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
 */function c2(t){let e;try{e=JSON.parse(t)}catch{return null}return O8(e)?e:null}/**
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
 */function Y8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function X8(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function d2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function J8(t,e){return e}class Wt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||J8}}let $h=null;function Z8(t){return!rg(t)||t.length<2?t:d2(t)}function h2(){if($h)return $h;const t=[];t.push(new Wt("bucket")),t.push(new Wt("generation")),t.push(new Wt("metageneration")),t.push(new Wt("name","fullPath",!0));function e(s,o){return Z8(o)}const n=new Wt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Wt("size");return i.xform=r,t.push(i),t.push(new Wt("timeCreated")),t.push(new Wt("updated")),t.push(new Wt("md5Hash",null,!0)),t.push(new Wt("cacheControl",null,!0)),t.push(new Wt("contentDisposition",null,!0)),t.push(new Wt("contentEncoding",null,!0)),t.push(new Wt("contentLanguage",null,!0)),t.push(new Wt("contentType",null,!0)),t.push(new Wt("metadata","customMetadata",!0)),$h=t,$h}function eK(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Sn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function tK(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return eK(r,t),r}function f2(t,e,n){const r=c2(e);return r===null?null:tK(t,r,n)}function nK(t,e,n,r){const i=c2(e);if(i===null||!rg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),f=Kl(h,n,r),p=s2({alt:"media",token:u});return f+p})[0]}function p2(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ta{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ei(t){if(!t)throw T_()}function b_(t,e){function n(r,i){const s=f2(t,i,e);return ei(s!==null),s}return n}function rK(t,e){function n(r,i){const s=f2(t,i,e);return ei(s!==null),nK(s,i,t.host,t._protocol)}return n}function Qd(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=E8():i=w8():n.getStatus()===402?i=v8(t.bucket):n.getStatus()===403?i=_8(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function k_(t){const e=Qd(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=y8(t.path)),s.serverResponse=i.serverResponse,s}return n}function iK(t,e,n){const r=e.fullServerUrl(),i=Kl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ta(i,s,b_(t,n),o);return a.errorHandler=k_(e),a}function sK(t,e,n){const r=e.fullServerUrl(),i=Kl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ta(i,s,rK(t,n),o);return a.errorHandler=k_(e),a}function oK(t,e){const n=e.fullServerUrl(),r=Kl(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new ta(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=k_(e),a}function aK(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function m2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=aK(null,e)),r}function lK(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let _=0;_<2;_++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=m2(e,r,i),c=p2(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",f=Ui.getBlob(d,r,h);if(f===null)throw r2();const p={name:u.fullPath},m=Kl(s,t.host,t._protocol),E="POST",v=t.maxUploadRetryTime,g=new ta(m,E,b_(t,n),v);return g.urlParams=p,g.headers=o,g.body=f.uploadData(),g.errorHandler=Qd(e),g}class xp{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function x_(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{ei(!1)}return ei(!!n&&(e||["active"]).indexOf(n)!==-1),n}function uK(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=m2(e,r,i),a={name:o.fullPath},l=Kl(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=p2(o,n),h=t.maxUploadRetryTime;function f(m){x_(m);let E;try{E=m.getResponseHeader("X-Goog-Upload-URL")}catch{ei(!1)}return ei(rg(E)),E}const p=new ta(l,u,f,h);return p.urlParams=a,p.headers=c,p.body=d,p.errorHandler=Qd(e),p}function cK(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=x_(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ei(!1)}d||ei(!1);const h=Number(d);return ei(!isNaN(h)),new xp(h,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ta(n,o,s,a);return l.headers=i,l.errorHandler=Qd(e),l}const Fb=256*1024;function dK(t,e,n,r,i,s,o,a){const l=new xp(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw b8();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const d=l.current,h=d+c;let f="";c===0?f="finalize":u===c?f="upload, finalize":f="upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},m=r.slice(d,h);if(m===null)throw r2();function E(_,I){const S=x_(_,["active","final"]),T=l.current+c,C=r.size();let D;return S==="final"?D=b_(e,s)(_,I):D=null,new xp(T,C,S==="final",D)}const v="POST",g=e.maxUploadRetryTime,y=new ta(n,v,E,g);return y.headers=p,y.body=m.uploadData(),y.progressCallback=a||null,y.errorHandler=Qd(t),y}const sn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Dy(t){switch(t){case"running":case"pausing":case"canceling":return sn.RUNNING;case"paused":return sn.PAUSED;case"success":return sn.SUCCESS;case"canceled":return sn.CANCELED;case"error":return sn.ERROR;default:return sn.ERROR}}/**
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
 */class hK{constructor(e,n,r){if(D8(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function ca(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class fK{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Eo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Eo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Eo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw _u("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _u("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _u("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _u("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _u("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pK extends fK{initXhr(){this.xhr_.responseType="text"}}function Zs(){return new pK}/**
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
 */class mK{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=h2(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(o2(i.status,[]))if(s)i=t2();else{this.sleepTime=Math.max(this.sleepTime*2,g8),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ke.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=uK(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Zs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=cK(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Zs,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Fb*this._chunkMultiplier,n=new xp(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=dK(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Zs,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Fb*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=iK(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Zs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=lK(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Zs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=n2(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Dy(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new hK(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Dy(this._state)){case sn.SUCCESS:ca(this._resolve.bind(null,this.snapshot))();break;case sn.CANCELED:case sn.ERROR:const n=this._reject;ca(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Dy(this._state)){case sn.RUNNING:case sn.PAUSED:e.next&&ca(e.next.bind(e,this.snapshot))();break;case sn.SUCCESS:e.complete&&ca(e.complete.bind(e))();break;case sn.CANCELED:case sn.ERROR:e.error&&ca(e.error.bind(e,this._error))();break;default:e.error&&ca(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Bo{constructor(e,n){this._service=e,n instanceof Sn?this._location=n:this._location=Sn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bo(e,n)}get root(){const e=new Sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return d2(this._location.path)}get storage(){return this._service}get parent(){const e=Y8(this._location.path);if(e===null)return null;const n=new Sn(this._location.bucket,e);return new Bo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw C8(e)}}function gK(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new mK(t,new Ui(e),n)}function yK(t){t._throwIfRoot("getDownloadURL");const e=sK(t.storage,t._location,h2());return t.storage.makeRequestWithTokens(e,Zs).then(n=>{if(n===null)throw k8();return n})}function vK(t){t._throwIfRoot("deleteObject");const e=oK(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Zs)}function wK(t,e){const n=X8(t._location.path,e),r=new Sn(t._location.bucket,n);return new Bo(t.storage,r)}/**
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
 */function EK(t){return/^[A-Za-z]+:\/\//.test(t)}function _K(t,e){return new Bo(t,e)}function g2(t,e){if(t instanceof C_){const n=t;if(n._bucket==null)throw S8();const r=new Bo(n,n._bucket);return e!=null?g2(r,e):r}else return e!==void 0?wK(t,e):t}function IK(t,e){if(e&&EK(e)){if(t instanceof C_)return _K(t,e);throw X0("To use ref(service, url), the first argument must be a Storage instance.")}else return g2(t,e)}function Ub(t,e){const n=e==null?void 0:e[e2];return n==null?null:Sn.makeFromBucketSpec(n,t)}function TK(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:KA(i,t.app.options.projectId))}class C_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ZO,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=p8,this._maxUploadRetryTime=m8,this._requests=new Set,i!=null?this._bucket=Sn.makeFromBucketSpec(i,this._host):this._bucket=Ub(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sn.makeFromBucketSpec(this._url,e):this._bucket=Ub(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$b("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$b("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bo(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new A8(i2());{const o=V8(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Vb="@firebase/storage",Bb="0.11.2";/**
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
 */const y2="storage";function SK(t,e,n){return t=z(t),gK(t,e,n)}function bK(t){return t=z(t),yK(t)}function cre(t){return t=z(t),vK(t)}function kK(t,e){return t=z(t),IK(t,e)}function xK(t=om(),e){t=z(t);const r=ks(t,y2).getImmediate({identifier:e}),i=GA("storage");return i&&CK(r,...i),r}function CK(t,e,n,r={}){TK(t,e,n,r)}function AK(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new C_(n,r,i,e,yi)}function PK(){An(new Zt(y2,AK,"PUBLIC").setMultipleInstances(!0)),At(Vb,Bb,""),At(Vb,Bb,"esm2017")}PK();function J0(t,e){return J0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},J0(t,e)}function RK({nameOfCompany:t,endDate:e,startDate:n}){const[r,i]=w.useState(null),[s,o]=w.useState(),[a,l]=w.useState();function u(){const h=vn(Qn,"contracts",t),f=kK(xK(),`contracts/${t}`),p=SK(f,r);p.on("state_changed",m=>{m.bytesTransferred/m.totalBytes*100},m=>{console.error(m)},async()=>{const m=await bK(p.snapshot.ref);await Jn(h,{[`${t} / ${n}/ ${e}`]:{[s]:m}},{merge:!0})}),hr.success("File Uploaded"),setTimeout(()=>{o(null),i(null)},2e3)}const c=h=>{const f=h.target.files[0];i(f)};return J("div",{className:"flex flex-row items-center justify-center gap-x-4 ",children:[J("section",{className:"flex flex-col gap-2",children:[A("label",{className:"  rounded-md hover:bg-blue-900 ",children:A("input",{type:"text",placeholder:"Enter Link",onChange:h=>{l(h.target.value)},className:"rounded text-black",onClick:()=>{o("doc")}})}),A("button",{onClick:async()=>{const h=vn(Qn,"contracts",t);await Jn(h,{[`${t} / ${n}/ ${e}`]:{[s]:a}},{merge:!0})},className:"hover:scale-[1.1] hover:underline",children:"Submit"})]}),J("section",{className:"flex flex-col gap-2",children:[J("label",{className:"bg-blue-600 p-2 rounded-md hover:bg-blue-900",children:[A("input",{type:"file",onChange:c,onClick:()=>{o("pdf")},cl:!0}),"Upload PDF"]}),A("button",{className:"hover:scale-[1.1] hover:underline",onClick:u,children:"Submit"})]}),J("section",{className:"flex flex-col gap-2",children:[J("label",{className:"bg-blue-600 p-2 rounded-md hover:bg-blue-900",children:[A("input",{type:"file",onChange:c,onClick:()=>{o("finalPdf")}}),"Upload Final"]}),A("button",{onClick:u,children:"Submit"})]}),A(I_,{})]})}function NK(){const[t,e]=w.useState([]),[n,r]=w.useState(""),[i,s]=w.useState(!1),[o,a]=w.useState(null),[l,u]=w.useState(""),[c,d]=w.useState(""),[h,f]=w.useState(""),[p,m]=w.useState(""),[E,v]=w.useState(""),[g,y]=w.useState(""),[_,I]=w.useState(""),[S,T]=w.useState(""),[C,D]=w.useState(""),{user:R}=w.useContext(Hd);w.useEffect(()=>{(()=>{const V=LE(Qn,"contracts"),H=WE(V,K=>{const ne=K.docs.map(ht=>{const ft=ht.data();return Object.values(ft)});e(ne)});return()=>H()})()},[]);const Y=async()=>{const k=vn(Qn,"contracts",c);Jn(k,{[`${c} / ${g}/ ${_}`]:{description:l}},{merge:!0}),hr.success("Description Updated")},se=async()=>{const k=vn(Qn,"contracts",c);Jn(k,{[`${c} / ${g}/ ${_}`]:{status:"Pending",color:"orange"}},{merge:!0}),hr.success("Contract Status Updated")},ue=async()=>{const k=vn(Qn,"contracts",c);Jn(k,{[`${c} / ${g}/ ${_}`]:{status:"Approved",color:"green"}},{merge:!0}),hr.success("Contract Status Updated")},G=async()=>{const k=vn(Qn,"contracts",c);Jn(k,{[`${c} / ${g}/ ${_}`]:{status:"Rejected",color:"red"}},{merge:!0}),hr.success("Contract Status Updated")},Q=async()=>{const k=vn(Qn,"contracts",c);Jn(k,{[`${c} / ${g}/ ${_}`]:{status:"Completed",color:"gray"}},{merge:!0}),hr.success("Contract Status Updated")},he=async()=>{const k=vn(Qn,"contracts",c);Jn(k,{[`${c} / ${g}/ ${_}`]:{status:"Signed",color:"green"}},{merge:!0}),hr.success("Contract Status Updated")},xe=async()=>{const k=firestoreDoc(Qn,"contracts",c);await vD(k),hr.success("Contract Deleted"),setTimeout(()=>{s(!1)},500)};return w.useEffect(()=>{const k=V=>{V.key==="Escape"&&s(!1)};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[]),J("div",{className:"w",children:[A(I_,{}),A("h1",{className:"text-2xl font-bold mb-4",children:"Contracts"}),A("input",{type:"text",placeholder:"Search contract By Name",value:n,onChange:k=>r(k.target.value),className:"mb-4 text-black"}),A("ul",{className:"flex flex-col gap-y-4",children:t.filter(k=>k[0].companyName.toLowerCase().includes(n.toLowerCase())).map((k,V)=>J("li",{className:"grid grid-cols-2 grid-rows-4  md:grid-cols-4 md:grid-rows-2  lg:grid-cols-8 lg:grid-rows-1  gap-x-4 border p-1 items-center rounded-lg bg-gray-100 text-black text-sm",children:[J("p",{className:"",children:["Type: ",k[0].contractType]}),J("p",{className:"text-black",children:["Company Name: ",k[0].companyName]}),J("p",{className:"",children:[" ContractName: ",k[0].contractName]}),J("p",{className:"",children:["Start Date: ",k[0].startDate]}),J("p",{className:"",children:["End Date: ",k[0].endDate]}),J("p",{className:"",children:["Writer: ",k[0].writer]}),J("p",{className:`bg-${k[0].color}-700 px-2 py-1 rounded-lg text-white`,children:["Status: ",k[0].status]}),A("img",{src:i&&V===o?f8:h8,alt:"open",className:"size-12 cursor-pointer",onClick:()=>{s(!i),a(V),d(k[0].companyName),y(k[0].startDate),I(k[0].endDate),T(k[0].description),f(k[0].doc),m(k[0].pdf),v(k[0].finalDoc),D(k[0].status)}}),A("br",{})]},V))}),i&&A(ho,{children:J("div",{className:"fixed top-0 left-0 desktopX:w-3/4 h-screen overflow-y-auto overflow-x-hidden py-4  bg-secondary bg-opacity-90 flex flex-col  gap-4 justify-top items-center",children:[A("div",{className:"flex flex-wrap px-2 flex-row gap-4",children:(C!=="Approved"||C!=="Signed"||R==="SUPERADMIN"||R==="Charlotte")&&J(ho,{children:[A("button",{className:"bg-orange-700 px-2 py-2 rounded-lg text-white",onClick:se,children:"Pending"}),A("button",{className:"bg-red-700 px-2 py-2 rounded-lg text-white",onClick:G,children:"Rejected"}),A("button",{className:"bg-gray-700 px-2 py-2 rounded-lg text-white",onClick:Q,children:"Completed"}),A("button",{className:"bg-green-700 px-2 py-2 rounded-lg text-white",onClick:ue,children:"Approved"}),A("button",{className:"bg-green-700 px-2 py-2 rounded-lg text-white",onClick:he,children:"Signed"}),A("button",{className:"bg-blue-700 px-2 py-2 rounded-lg text-white",onClick:xe,children:"Delete"})]})}),J("div",{className:"flex w-[95vw] items-center flex-col gap-4 mt-2",children:[A("h1",{className:"text-2xl font-bold mb-4",children:"Contract Details"}),J("section",{className:"bg-white text-black p-4 rounded-lg ",children:[J("h2",{children:[" Company name: ",c," "]}),J("h2",{children:[" ",S," "]})]}),A("textarea",{className:"w-96 h-96 bg-gray-100 p-4 rounded-lg text-black",placeholder:"Enter The Description Of The Contract Here",onChange:k=>u(k.target.value),value:l}),(C==="Approved"||R==="SUPERADMIN"||R==="Charlotte")&&A("button",{className:"bg-orange-700 px-2 py-2 rounded-lg text-white",onClick:Y,children:"Submit"})]}),J("div",{className:"flex flex-row gap-4 mt-2 items-start",children:[A("h1",{className:"text-2xl font-bold mb-4",children:"Documents"}),h===""?null:A("a",{href:h,target:"_blank",rel:"noreferrer",className:"bg-blue-700 px-2 py-2 rounded-lg text-white",children:"Doc"}),p===""?null:A("a",{href:p,target:"_blank",rel:"noreferrer",className:"bg-blue-700 px-2 py-2 rounded-lg text-white",children:"PDF"}),E===""?null:A("a",{href:E,target:"_blank",rel:"noreferrer",className:"bg-blue-700 px-2 py-2 rounded-lg text-white",children:"Signed PDF"})]}),A("hr",{className:"bg-white w-96"}),(C==="Approved"||R==="SUPERADMIN"||R==="Charlotte")&&A(RK,{nameOfCompany:c,endDate:_,startDate:g})]})})]})}function L(){return L=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},L.apply(this,arguments)}function eo(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function v2(t){if(!eo(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=v2(t[n])}),e}function ti(t,e,n={clone:!0}){const r=n.clone?L({},t):t;return eo(t)&&eo(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(eo(e[i])&&i in t&&eo(t[i])?r[i]=ti(t[i],e[i],n):n.clone?r[i]=eo(e[i])?v2(e[i]):e[i]:r[i]=e[i])}),r}function bl(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function ni(t){if(typeof t!="string")throw new Error(bl(7));return t.charAt(0).toUpperCase()+t.slice(1)}function jb(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function DK(t,e=166){let n;function r(...i){const s=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(s,e)}return r.clear=()=>{clearTimeout(n)},r}function rs(t){return t&&t.ownerDocument||document}function Yd(t){return rs(t).defaultView||window}function Z0(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const OK=typeof window<"u"?w.useLayoutEffect:w.useEffect,ew=OK;function zb(t){const e=w.useRef(t);return ew(()=>{e.current=t}),w.useCallback((...n)=>(0,e.current)(...n),[])}function Ql(...t){return w.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{Z0(n,e)})},t)}function LK(t){const e=t.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function w2(t,e){const n=L({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=L({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},s=e[r];n[r]={},!s||!Object.keys(s)?n[r]=i:!i||!Object.keys(i)?n[r]=s:(n[r]=L({},s),Object.keys(i).forEach(o=>{n[r][o]=w2(i[o],s[o])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function Yl(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>{if(o){const a=e(o);a!==""&&s.push(a),n&&n[o]&&s.push(n[o])}return s},[]).join(" ")}),r}const qb=t=>t,MK=()=>{let t=qb;return{configure(e){t=e},generate(e){return t(e)},reset(){t=qb}}},$K=MK(),E2=$K,FK={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function na(t,e,n="Mui"){const r=FK[e];return r?`${n}-${r}`:`${E2.generate(t)}-${e}`}function Xl(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=na(t,i,n)}),r}function _2(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var UK=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,VK=_2(function(t){return UK.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function BK(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function jK(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var zK=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(jK(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=BK(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Ut="-ms-",Cp="-moz-",fe="-webkit-",I2="comm",A_="rule",P_="decl",qK="@import",T2="@keyframes",WK="@layer",GK=Math.abs,ig=String.fromCharCode,HK=Object.assign;function KK(t,e){return bt(t,0)^45?(((e<<2^bt(t,0))<<2^bt(t,1))<<2^bt(t,2))<<2^bt(t,3):0}function S2(t){return t.trim()}function QK(t,e){return(t=e.exec(t))?t[0]:t}function pe(t,e,n){return t.replace(e,n)}function tw(t,e){return t.indexOf(e)}function bt(t,e){return t.charCodeAt(e)|0}function od(t,e,n){return t.slice(e,n)}function fr(t){return t.length}function R_(t){return t.length}function Fh(t,e){return e.push(t),t}function YK(t,e){return t.map(e).join("")}var sg=1,kl=1,b2=0,mn=0,rt=0,Jl="";function og(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:sg,column:kl,length:o,return:""}}function Iu(t,e){return HK(og("",null,null,"",null,null,0),t,{length:-t.length},e)}function XK(){return rt}function JK(){return rt=mn>0?bt(Jl,--mn):0,kl--,rt===10&&(kl=1,sg--),rt}function xn(){return rt=mn<b2?bt(Jl,mn++):0,kl++,rt===10&&(kl=1,sg++),rt}function Nr(){return bt(Jl,mn)}function vf(){return mn}function Xd(t,e){return od(Jl,t,e)}function ad(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function k2(t){return sg=kl=1,b2=fr(Jl=t),mn=0,[]}function x2(t){return Jl="",t}function wf(t){return S2(Xd(mn-1,nw(t===91?t+2:t===40?t+1:t)))}function ZK(t){for(;(rt=Nr())&&rt<33;)xn();return ad(t)>2||ad(rt)>3?"":" "}function e7(t,e){for(;--e&&xn()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Xd(t,vf()+(e<6&&Nr()==32&&xn()==32))}function nw(t){for(;xn();)switch(rt){case t:return mn;case 34:case 39:t!==34&&t!==39&&nw(rt);break;case 40:t===41&&nw(t);break;case 92:xn();break}return mn}function t7(t,e){for(;xn()&&t+rt!==47+10;)if(t+rt===42+42&&Nr()===47)break;return"/*"+Xd(e,mn-1)+"*"+ig(t===47?t:xn())}function n7(t){for(;!ad(Nr());)xn();return Xd(t,mn)}function r7(t){return x2(Ef("",null,null,null,[""],t=k2(t),0,[0],t))}function Ef(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,f=0,p=0,m=1,E=1,v=1,g=0,y="",_=i,I=s,S=r,T=y;E;)switch(p=g,g=xn()){case 40:if(p!=108&&bt(T,d-1)==58){tw(T+=pe(wf(g),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:T+=wf(g);break;case 9:case 10:case 13:case 32:T+=ZK(p);break;case 92:T+=e7(vf()-1,7);continue;case 47:switch(Nr()){case 42:case 47:Fh(i7(t7(xn(),vf()),e,n),l);break;default:T+="/"}break;case 123*m:a[u++]=fr(T)*v;case 125*m:case 59:case 0:switch(g){case 0:case 125:E=0;case 59+c:v==-1&&(T=pe(T,/\f/g,"")),f>0&&fr(T)-d&&Fh(f>32?Gb(T+";",r,n,d-1):Gb(pe(T," ","")+";",r,n,d-2),l);break;case 59:T+=";";default:if(Fh(S=Wb(T,e,n,u,c,i,a,y,_=[],I=[],d),s),g===123)if(c===0)Ef(T,e,S,S,_,s,d,a,I);else switch(h===99&&bt(T,3)===110?100:h){case 100:case 108:case 109:case 115:Ef(t,S,S,r&&Fh(Wb(t,S,S,0,0,i,a,y,i,_=[],d),I),i,I,d,a,r?_:I);break;default:Ef(T,S,S,S,[""],I,0,a,I)}}u=c=f=0,m=v=1,y=T="",d=o;break;case 58:d=1+fr(T),f=p;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&JK()==125)continue}switch(T+=ig(g),g*m){case 38:v=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(fr(T)-1)*v,v=1;break;case 64:Nr()===45&&(T+=wf(xn())),h=Nr(),c=d=fr(y=T+=n7(vf())),g++;break;case 45:p===45&&fr(T)==2&&(m=0)}}return s}function Wb(t,e,n,r,i,s,o,a,l,u,c){for(var d=i-1,h=i===0?s:[""],f=R_(h),p=0,m=0,E=0;p<r;++p)for(var v=0,g=od(t,d+1,d=GK(m=o[p])),y=t;v<f;++v)(y=S2(m>0?h[v]+" "+g:pe(g,/&\f/g,h[v])))&&(l[E++]=y);return og(t,e,n,i===0?A_:a,l,u,c)}function i7(t,e,n){return og(t,e,n,I2,ig(XK()),od(t,2,-2),0)}function Gb(t,e,n,r){return og(t,e,n,P_,od(t,0,r),od(t,r+1,-1),r)}function Za(t,e){for(var n="",r=R_(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function s7(t,e,n,r){switch(t.type){case WK:if(t.children.length)break;case qK:case P_:return t.return=t.return||t.value;case I2:return"";case T2:return t.return=t.value+"{"+Za(t.children,r)+"}";case A_:t.value=t.props.join(",")}return fr(n=Za(t.children,r))?t.return=t.value+"{"+n+"}":""}function o7(t){var e=R_(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function a7(t){return function(e){e.root||(e=e.return)&&t(e)}}var l7=function(e,n,r){for(var i=0,s=0;i=s,s=Nr(),i===38&&s===12&&(n[r]=1),!ad(s);)xn();return Xd(e,mn)},u7=function(e,n){var r=-1,i=44;do switch(ad(i)){case 0:i===38&&Nr()===12&&(n[r]=1),e[r]+=l7(mn-1,n,r);break;case 2:e[r]+=wf(i);break;case 4:if(i===44){e[++r]=Nr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=ig(i)}while(i=xn());return e},c7=function(e,n){return x2(u7(k2(e),n))},Hb=new WeakMap,d7=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Hb.get(r))&&!i){Hb.set(e,!0);for(var s=[],o=c7(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},h7=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function C2(t,e){switch(KK(t,e)){case 5103:return fe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+t+Cp+t+Ut+t+t;case 6828:case 4268:return fe+t+Ut+t+t;case 6165:return fe+t+Ut+"flex-"+t+t;case 5187:return fe+t+pe(t,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Ut+"flex-$1$2")+t;case 5443:return fe+t+Ut+"flex-item-"+pe(t,/flex-|-self/,"")+t;case 4675:return fe+t+Ut+"flex-line-pack"+pe(t,/align-content|flex-|-self/,"")+t;case 5548:return fe+t+Ut+pe(t,"shrink","negative")+t;case 5292:return fe+t+Ut+pe(t,"basis","preferred-size")+t;case 6060:return fe+"box-"+pe(t,"-grow","")+fe+t+Ut+pe(t,"grow","positive")+t;case 4554:return fe+pe(t,/([^-])(transform)/g,"$1"+fe+"$2")+t;case 6187:return pe(pe(pe(t,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),t,"")+t;case 5495:case 3959:return pe(t,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return pe(pe(t,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+t+t;case 4095:case 3583:case 4068:case 2532:return pe(t,/(.+)-inline(.+)/,fe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fr(t)-1-e>6)switch(bt(t,e+1)){case 109:if(bt(t,e+4)!==45)break;case 102:return pe(t,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+Cp+(bt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~tw(t,"stretch")?C2(pe(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(bt(t,e+1)!==115)break;case 6444:switch(bt(t,fr(t)-3-(~tw(t,"!important")&&10))){case 107:return pe(t,":",":"+fe)+t;case 101:return pe(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+fe+(bt(t,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Ut+"$2box$3")+t}break;case 5936:switch(bt(t,e+11)){case 114:return fe+t+Ut+pe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return fe+t+Ut+pe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return fe+t+Ut+pe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return fe+t+Ut+t+t}return t}var f7=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case P_:e.return=C2(e.value,e.length);break;case T2:return Za([Iu(e,{value:pe(e.value,"@","@"+fe)})],i);case A_:if(e.length)return YK(e.props,function(s){switch(QK(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Za([Iu(e,{props:[pe(s,/:(read-\w+)/,":"+Cp+"$1")]})],i);case"::placeholder":return Za([Iu(e,{props:[pe(s,/:(plac\w+)/,":"+fe+"input-$1")]}),Iu(e,{props:[pe(s,/:(plac\w+)/,":"+Cp+"$1")]}),Iu(e,{props:[pe(s,/:(plac\w+)/,Ut+"input-$1")]})],i)}return""})}},p7=[f7],m7=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var E=m.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||p7,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var E=m.getAttribute("data-emotion").split(" "),v=1;v<E.length;v++)s[E[v]]=!0;a.push(m)});var l,u=[d7,h7];{var c,d=[s7,a7(function(m){c.insert(m)})],h=o7(u.concat(i,d)),f=function(E){return Za(r7(E),h)};l=function(E,v,g,y){c=g,f(E?E+"{"+v.styles+"}":v.styles),y&&(p.inserted[v.name]=!0)}}var p={key:n,sheet:new zK({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return p.sheet.hydrate(a),p};function g7(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var y7=function(e){return e()},v7=Qy["useInsertionEffect"]?Qy["useInsertionEffect"]:!1,w7=v7||y7,A2=w.createContext(typeof HTMLElement<"u"?m7({key:"css"}):null);A2.Provider;var E7=function(e){return w.forwardRef(function(n,r){var i=w.useContext(A2);return e(n,i,r)})},P2=w.createContext({}),_7=!0;function I7(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var R2=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||_7===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},T7=function(e,n,r){R2(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}},S7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},b7=/[A-Z]|^ms/g,k7=/_EMO_([^_]+?)_([^]*?)_EMO_/g,N2=function(e){return e.charCodeAt(1)===45},Kb=function(e){return e!=null&&typeof e!="boolean"},Oy=_2(function(t){return N2(t)?t:t.replace(b7,"-$&").toLowerCase()}),Qb=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(k7,function(r,i,s){return pr={name:i,styles:s,next:pr},i})}return S7[e]!==1&&!N2(e)&&typeof n=="number"&&n!==0?n+"px":n};function ld(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pr={name:n.name,styles:n.styles,next:pr},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pr={name:r.name,styles:r.styles,next:pr},r=r.next;var i=n.styles+";";return i}return x7(t,e,n)}case"function":{if(t!==void 0){var s=pr,o=n(t);return pr=s,ld(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function x7(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ld(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":Kb(o)&&(r+=Oy(s)+":"+Qb(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)Kb(o[a])&&(r+=Oy(s)+":"+Qb(s,o[a])+";");else{var l=ld(t,e,o);switch(s){case"animation":case"animationName":{r+=Oy(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var Yb=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pr,C7=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";pr=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=ld(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=ld(r,n,e[a]),i&&(s+=o[a]);Yb.lastIndex=0;for(var l="",u;(u=Yb.exec(s))!==null;)l+="-"+u[1];var c=g7(s)+l;return{name:c,styles:s,next:pr}},A7=VK,P7=function(e){return e!=="theme"},Xb=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?A7:P7},Jb=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},R7=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return R2(n,r,i),w7(function(){return T7(n,r,i)}),null},N7=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=Jb(e,n,r),l=a||Xb(i),u=!l("as");return function(){var c=arguments,d=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var h=c.length,f=1;f<h;f++)d.push(c[f],c[0][f])}var p=E7(function(m,E,v){var g=u&&m.as||i,y="",_=[],I=m;if(m.theme==null){I={};for(var S in m)I[S]=m[S];I.theme=w.useContext(P2)}typeof m.className=="string"?y=I7(E.registered,_,m.className):m.className!=null&&(y=m.className+" ");var T=C7(d.concat(_),E.registered,I);y+=E.key+"-"+T.name,o!==void 0&&(y+=" "+o);var C=u&&a===void 0?Xb(g):l,D={};for(var R in m)u&&R==="as"||C(R)&&(D[R]=m[R]);return D.className=y,D.ref=v,w.createElement(w.Fragment,null,w.createElement(R7,{cache:E,serialized:T,isStringTag:typeof g=="string"}),w.createElement(g,D))});return p.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=e.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=d,p.__emotion_forwardProp=a,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(m,E){return t(m,L({},n,E,{shouldForwardProp:Jb(p,E,!0)})).apply(void 0,d)},p}},D7=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],rw=N7.bind();D7.forEach(function(t){rw[t]=rw(t)});/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.