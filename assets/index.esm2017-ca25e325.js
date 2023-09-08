import{r as Ka}from"./index-c976163e.js";/**
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
 */const Wf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ew=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ew(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new bw;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sw=function(n){const e=Wf(n);return Qf.encodeByteArray(e,!0)},mo=function(n){return Sw(n).replace(/\./g,"")},Yf=function(n){try{return Qf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function go(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Aw(t)||(n[t]=go(n[t],e[t]));return n}function Aw(n){return n!=="__proto__"}/**
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
 */function kw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cw=()=>kw().__FIREBASE_DEFAULTS__,Rw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yf(n[1]);return e&&JSON.parse(e)},Ho=()=>{try{return Cw()||Rw()||Nw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dw=n=>{var e,t;return(t=(e=Ho())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xf=n=>{const e=Dw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Jf=()=>{var n;return(n=Ho())===null||n===void 0?void 0:n.config},Pw=n=>{var e;return(e=Ho())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Zf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[mo(JSON.stringify(t)),mo(JSON.stringify(o)),a].join(".")}/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ow(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Wo(){var n;const e=(n=Ho())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lw(){return typeof self=="object"&&self.self===self}function Au(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ku(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ep(){const n=Z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mw(){return!Wo()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cr(){try{return typeof indexedDB=="object"}catch{return!1}}function tp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Fw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Uw="FirebaseError";class ge extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Uw,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lt.prototype.create)}}class Lt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Vw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ge(i,a,r)}}function Vw(n,e){return n.replace(Bw,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bw=/\{\$([^}]+)}/g;/**
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
 */function Dh(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $w(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ph(s)&&Ph(o)){if(!yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ph(n){return n!==null&&typeof n=="object"}/**
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
 */function zr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function vi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function np(n,e){const t=new qw(n,e);return t.subscribe.bind(t)}class qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jw(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ha),i.error===void 0&&(i.error=Ha),i.complete===void 0&&(i.complete=Ha);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jw(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ha(){}/**
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
 */const zw=1e3,Gw=2,Kw=4*60*60*1e3,Hw=.5;function xh(n,e=zw,t=Gw){const r=e*Math.pow(t,n),i=Math.round(Hw*r*(Math.random()-.5)*2);return Math.min(Kw,r+i)}/**
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
 */function C(n){return n&&n._delegate?n._delegate:n}class Ve{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const In="[DEFAULT]";/**
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
 */class Ww{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xw;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yw(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qw(n){return n===In?void 0:n}function Yw(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ww(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Cu=[];var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const rp={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Jw=V.INFO,Zw={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},e_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Zw[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hs{constructor(e){this.name=e,this._logLevel=Jw,this._logHandler=e_,this._userLogHandler=null,Cu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}function t_(n){Cu.forEach(e=>{e.setLogLevel(n)})}function n_(n,e){for(const t of Cu){let r=null;e&&e.level&&(r=rp[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:V[s].toLowerCase(),message:a,args:o,type:i.name})}}}const r_=(n,e)=>e.some(t=>n instanceof t);let Oh,Lh;function i_(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s_(){return Lh||(Lh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,Cc=new WeakMap,sp=new WeakMap,Wa=new WeakMap,Ru=new WeakMap;function o_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Xt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ip.set(t,n)}).catch(()=>{}),Ru.set(e,n),e}function a_(n){if(Cc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Cc.set(n,e)}let Rc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function c_(n){Rc=n(Rc)}function u_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Qa(this),e,...t);return sp.set(r,e.sort?e.sort():[e]),Xt(r)}:s_().includes(n)?function(...e){return n.apply(Qa(this),e),Xt(ip.get(this))}:function(...e){return Xt(n.apply(Qa(this),e))}}function l_(n){return typeof n=="function"?u_(n):(n instanceof IDBTransaction&&a_(n),r_(n,i_())?new Proxy(n,Rc):n)}function Xt(n){if(n instanceof IDBRequest)return o_(n);if(Wa.has(n))return Wa.get(n);const e=l_(n);return e!==n&&(Wa.set(n,e),Ru.set(e,n)),e}const Qa=n=>Ru.get(n);function h_(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xt(o.result),c.oldVersion,c.newVersion,Xt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const d_=["get","getKey","getAll","getAllKeys","count"],f_=["put","add","delete","clear"],Ya=new Map;function Mh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=f_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||d_.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Ya.set(e,s),s}c_(n=>({...n,get:(e,t,r)=>Mh(e,t)||n.get(e,t,r),has:(e,t)=>!!Mh(e,t)||n.has(e,t)}));/**
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
 */class p_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(m_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function m_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",Fh="0.9.13";/**
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
 */const Bn=new hs("@firebase/app"),g_="@firebase/app-compat",y_="@firebase/analytics-compat",v_="@firebase/analytics",w_="@firebase/app-check-compat",__="@firebase/app-check",I_="@firebase/auth",T_="@firebase/auth-compat",E_="@firebase/database",b_="@firebase/database-compat",S_="@firebase/functions",A_="@firebase/functions-compat",k_="@firebase/installations",C_="@firebase/installations-compat",R_="@firebase/messaging",N_="@firebase/messaging-compat",D_="@firebase/performance",P_="@firebase/performance-compat",x_="@firebase/remote-config",O_="@firebase/remote-config-compat",L_="@firebase/storage",M_="@firebase/storage-compat",F_="@firebase/firestore",U_="@firebase/firestore-compat",V_="firebase",B_="9.23.0";/**
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
 */const Zt="[DEFAULT]",$_={[Nc]:"fire-core",[g_]:"fire-core-compat",[v_]:"fire-analytics",[y_]:"fire-analytics-compat",[__]:"fire-app-check",[w_]:"fire-app-check-compat",[I_]:"fire-auth",[T_]:"fire-auth-compat",[E_]:"fire-rtdb",[b_]:"fire-rtdb-compat",[S_]:"fire-fn",[A_]:"fire-fn-compat",[k_]:"fire-iid",[C_]:"fire-iid-compat",[R_]:"fire-fcm",[N_]:"fire-fcm-compat",[D_]:"fire-perf",[P_]:"fire-perf-compat",[x_]:"fire-rc",[O_]:"fire-rc-compat",[L_]:"fire-gcs",[M_]:"fire-gcs-compat",[F_]:"fire-fst",[U_]:"fire-fst-compat","fire-js":"fire-js",[V_]:"fire-js-all"};/**
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
 */const en=new Map,Ui=new Map;function vo(n,e){try{n.container.addComponent(e)}catch(t){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function op(n,e){n.container.addOrOverwriteComponent(e)}function Je(n){const e=n.name;if(Ui.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Ui.set(e,n);for(const t of en.values())vo(t,n);return!0}function dn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function q_(n,e,t=Zt){dn(n,e).clearInstance(t)}function j_(){Ui.clear()}/**
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
 */const z_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new Lt("app","Firebase",z_);/**
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
 */let G_=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}};/**
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
 */const Mt=B_;function Nu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(t||(t=Jf()),!t)throw Rt.create("no-options");const s=en.get(i);if(s){if(yo(t,s.options)&&yo(r,s.config))return s;throw Rt.create("duplicate-app",{appName:i})}const o=new Xw(i);for(const c of Ui.values())o.addComponent(c);const a=new G_(t,r,o);return en.set(i,a),a}function Qo(n=Zt){const e=en.get(n);if(!e&&n===Zt&&Jf())return Nu();if(!e)throw Rt.create("no-app",{appName:n});return e}function K_(){return Array.from(en.values())}async function ap(n){const e=n.name;en.has(e)&&(en.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Se(n,e,t){var r;let i=(r=$_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}Je(new Ve(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function cp(n,e){if(n!==null&&typeof n!="function")throw Rt.create("invalid-log-argument");n_(n,e)}function up(n){t_(n)}/**
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
 */const H_="firebase-heartbeat-database",W_=1,Vi="firebase-heartbeat-store";let Xa=null;function lp(){return Xa||(Xa=h_(H_,W_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vi)}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),Xa}async function Q_(n){try{return await(await lp()).transaction(Vi).objectStore(Vi).get(hp(n))}catch(e){if(e instanceof ge)Bn.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(t.message)}}}async function Uh(n,e){try{const r=(await lp()).transaction(Vi,"readwrite");await r.objectStore(Vi).put(e,hp(n)),await r.done}catch(t){if(t instanceof ge)Bn.warn(t.message);else{const r=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bn.warn(r.message)}}}function hp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Y_=1024,X_=30*24*60*60*1e3;class J_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=X_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vh(),{heartbeatsToSend:t,unsentEntries:r}=Z_(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vh(){return new Date().toISOString().substring(0,10)}function Z_(n,e=Y_){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Bh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class eI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cr()?tp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Q_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bh(n){return mo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function tI(n){Je(new Ve("platform-logger",e=>new p_(e),"PRIVATE")),Je(new Ve("heartbeat",e=>new J_(e),"PRIVATE")),Se(Nc,Fh,n),Se(Nc,Fh,"esm2017"),Se("fire-js","")}tI("");const nI=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ge,SDK_VERSION:Mt,_DEFAULT_ENTRY_NAME:Zt,_addComponent:vo,_addOrOverwriteComponent:op,_apps:en,_clearComponents:j_,_components:Ui,_getProvider:dn,_registerComponent:Je,_removeServiceInstance:q_,deleteApp:ap,getApp:Qo,getApps:K_,initializeApp:Nu,onLog:cp,registerVersion:Se,setLogLevel:up},Symbol.toStringTag,{value:"Module"}));var rI="firebase",iI="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se(rI,iI,"app");const sI=(n,e)=>e.some(t=>n instanceof t);let $h,qh;function oI(){return $h||($h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dp=new WeakMap,Dc=new WeakMap,fp=new WeakMap,Ja=new WeakMap,Du=new WeakMap;function cI(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Jt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&dp.set(t,n)}).catch(()=>{}),Du.set(e,n),e}function uI(n){if(Dc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Dc.set(n,e)}let Pc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Dc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lI(n){Pc=n(Pc)}function hI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Za(this),e,...t);return fp.set(r,e.sort?e.sort():[e]),Jt(r)}:aI().includes(n)?function(...e){return n.apply(Za(this),e),Jt(dp.get(this))}:function(...e){return Jt(n.apply(Za(this),e))}}function dI(n){return typeof n=="function"?hI(n):(n instanceof IDBTransaction&&uI(n),sI(n,oI())?new Proxy(n,Pc):n)}function Jt(n){if(n instanceof IDBRequest)return cI(n);if(Ja.has(n))return Ja.get(n);const e=dI(n);return e!==n&&(Ja.set(n,e),Du.set(e,n)),e}const Za=n=>Du.get(n);function fI(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Jt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jt(o.result),c.oldVersion,c.newVersion,Jt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const pI=["get","getKey","getAll","getAllKeys","count"],mI=["put","add","delete","clear"],ec=new Map;function jh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=mI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pI.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return ec.set(e,s),s}lI(n=>({...n,get:(e,t,r)=>jh(e,t)||n.get(e,t,r),has:(e,t)=>!!jh(e,t)||n.has(e,t)}));const pp="@firebase/installations",Pu="0.6.4";/**
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
 */const mp=1e4,gp=`w:${Pu}`,yp="FIS_v2",gI="https://firebaseinstallations.googleapis.com/v1",yI=60*60*1e3,vI="installations",wI="Installations";/**
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
 */const _I={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$n=new Lt(vI,wI,_I);function vp(n){return n instanceof ge&&n.code.includes("request-failed")}/**
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
 */function wp({projectId:n}){return`${gI}/projects/${n}/installations`}function _p(n){return{token:n.token,requestStatus:2,expiresIn:TI(n.expiresIn),creationTime:Date.now()}}async function Ip(n,e){const r=(await e.json()).error;return $n.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Tp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function II(n,{refreshToken:e}){const t=Tp(n);return t.append("Authorization",EI(e)),t}async function Ep(n){const e=await n();return e.status>=500&&e.status<600?n():e}function TI(n){return Number(n.replace("s","000"))}function EI(n){return`${yp} ${n}`}/**
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
 */async function bI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=wp(n),i=Tp(n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:t,authVersion:yp,appId:n.appId,sdkVersion:gp},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ep(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:_p(u.authToken)}}else throw await Ip("Create Installation",c)}/**
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
 */function bp(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function SI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const AI=/^[cdef][\w-]{21}$/,xc="";function kI(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=CI(n);return AI.test(t)?t:xc}catch{return xc}}function CI(n){return SI(n).substr(0,22)}/**
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
 */function Yo(n){return`${n.appName}!${n.appId}`}/**
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
 */const Sp=new Map;function Ap(n,e){const t=Yo(n);kp(t,e),RI(t,e)}function kp(n,e){const t=Sp.get(n);if(t)for(const r of t)r(e)}function RI(n,e){const t=NI();t&&t.postMessage({key:n,fid:e}),DI()}let Cn=null;function NI(){return!Cn&&"BroadcastChannel"in self&&(Cn=new BroadcastChannel("[Firebase] FID Change"),Cn.onmessage=n=>{kp(n.data.key,n.data.fid)}),Cn}function DI(){Sp.size===0&&Cn&&(Cn.close(),Cn=null)}/**
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
 */const PI="firebase-installations-database",xI=1,qn="firebase-installations-store";let tc=null;function xu(){return tc||(tc=fI(PI,xI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qn)}}})),tc}async function wo(n,e){const t=Yo(n),i=(await xu()).transaction(qn,"readwrite"),s=i.objectStore(qn),o=await s.get(t);return await s.put(e,t),await i.done,(!o||o.fid!==e.fid)&&Ap(n,e.fid),e}async function Cp(n){const e=Yo(n),r=(await xu()).transaction(qn,"readwrite");await r.objectStore(qn).delete(e),await r.done}async function Xo(n,e){const t=Yo(n),i=(await xu()).transaction(qn,"readwrite"),s=i.objectStore(qn),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&Ap(n,a.fid),a}/**
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
 */async function Ou(n){let e;const t=await Xo(n.appConfig,r=>{const i=OI(r),s=LI(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===xc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function OI(n){const e=n||{fid:kI(),registrationStatus:0};return Rp(e)}function LI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($n.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=MI(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:FI(n)}:{installationEntry:e}}async function MI(n,e){try{const t=await bI(n,e);return wo(n.appConfig,t)}catch(t){throw vp(t)&&t.customData.serverCode===409?await Cp(n.appConfig):await wo(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function FI(n){let e=await zh(n.appConfig);for(;e.registrationStatus===1;)await bp(100),e=await zh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ou(n);return r||t}return e}function zh(n){return Xo(n,e=>{if(!e)throw $n.create("installation-not-found");return Rp(e)})}function Rp(n){return UI(n)?{fid:n.fid,registrationStatus:0}:n}function UI(n){return n.registrationStatus===1&&n.registrationTime+mp<Date.now()}/**
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
 */async function VI({appConfig:n,heartbeatServiceProvider:e},t){const r=BI(n,t),i=II(n,t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:gp,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ep(()=>fetch(r,a));if(c.ok){const u=await c.json();return _p(u)}else throw await Ip("Generate Auth Token",c)}function BI(n,{fid:e}){return`${wp(n)}/${e}/authTokens:generate`}/**
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
 */async function Lu(n,e=!1){let t;const r=await Xo(n.appConfig,s=>{if(!Np(s))throw $n.create("not-registered");const o=s.authToken;if(!e&&jI(o))return s;if(o.requestStatus===1)return t=$I(n,e),s;{if(!navigator.onLine)throw $n.create("app-offline");const a=GI(s);return t=qI(n,a),a}});return t?await t:r.authToken}async function $I(n,e){let t=await Gh(n.appConfig);for(;t.authToken.requestStatus===1;)await bp(100),t=await Gh(n.appConfig);const r=t.authToken;return r.requestStatus===0?Lu(n,e):r}function Gh(n){return Xo(n,e=>{if(!Np(e))throw $n.create("not-registered");const t=e.authToken;return KI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qI(n,e){try{const t=await VI(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await wo(n.appConfig,r),t}catch(t){if(vp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Cp(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wo(n.appConfig,r)}throw t}}function Np(n){return n!==void 0&&n.registrationStatus===2}function jI(n){return n.requestStatus===2&&!zI(n)}function zI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+yI}function GI(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function KI(n){return n.requestStatus===1&&n.requestTime+mp<Date.now()}/**
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
 */async function HI(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ou(e);return r?r.catch(console.error):Lu(e).catch(console.error),t.fid}/**
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
 */async function WI(n,e=!1){const t=n;return await QI(t),(await Lu(t,e)).token}async function QI(n){const{registrationPromise:e}=await Ou(n);e&&await e}/**
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
 */function YI(n){if(!n||!n.options)throw nc("App Configuration");if(!n.name)throw nc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw nc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function nc(n){return $n.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="installations",XI="installations-internal",JI=n=>{const e=n.getProvider("app").getImmediate(),t=YI(e),r=dn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ZI=n=>{const e=n.getProvider("app").getImmediate(),t=dn(e,Dp).getImmediate();return{getId:()=>HI(t),getToken:i=>WI(t,i)}};function eT(){Je(new Ve(Dp,JI,"PUBLIC")),Je(new Ve(XI,ZI,"PRIVATE"))}eT();Se(pp,Pu);Se(pp,Pu,"esm2017");/**
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
 */const _o="analytics",tT="firebase_id",nT="origin",rT=60*1e3,iT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mu="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ke=new hs("@firebase/analytics");/**
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
 */const sT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new Lt("analytics","Analytics",sT);/**
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
 */function oT(n){if(!n.startsWith(Mu)){const e=Xe.create("invalid-gtag-resource",{gtagURL:n});return Ke.warn(e.message),""}return n}function Pp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function aT(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function cT(n,e){const t=aT("firebase-js-sdk-policy",{createScriptURL:oT}),r=document.createElement("script"),i=`${Mu}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function uT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function lT(n,e,t,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await Pp(t)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){Ke.error(a)}n("config",i,s)}async function hT(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Pp(t);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){Ke.error(s)}}function dT(n,e,t,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await hT(n,e,t,a,c)}else if(s==="config"){const[a,c]=o;await lT(n,e,t,r,a,c)}else if(s==="consent"){const[a]=o;n("consent","update",a)}else if(s==="get"){const[a,c,u]=o;n("get",a,c,u)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){Ke.error(a)}}return i}function fT(n,e,t,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=dT(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function pT(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Mu)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=30,gT=1e3;class yT{constructor(e={},t=gT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xp=new yT;function vT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function wT(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:vT(r)},s=iT.replace("{app-id}",t),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function _T(n,e=xp,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Xe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Xe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ET;return setTimeout(async()=>{a.abort()},t!==void 0?t:rT),Op({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Op(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=xp){var s;const{appId:o,measurementId:a}=n;try{await IT(r,e)}catch(c){if(a)return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await wT(n);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!TT(u)){if(i.deleteThrottleMetadata(o),a)return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?xh(t,i.intervalMillis,mT):xh(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return i.setThrottleMetadata(o,h),Ke.debug(`Calling attemptFetch again in ${l} millis`),Op(n,h,r,i)}}function IT(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function TT(n){if(!(n instanceof ge)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ET{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bT(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(){if(Cr())try{await tp()}catch(n){return Ke.warn(Xe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ke.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AT(n,e,t,r,i,s,o){var a;const c=_T(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&Ke.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ke.error(f)),e.push(c);const u=ST().then(f=>{if(f)return r.getId()}),[l,h]=await Promise.all([c,u]);pT(s)||cT(s,l.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[nT]="firebase",d.update=!0,h!=null&&(d[tT]=h),i("config",l.measurementId,d),l.measurementId}/**
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
 */class kT{constructor(e){this.app=e}_delete(){return delete Ai[this.app.options.appId],Promise.resolve()}}let Ai={},Kh=[];const Hh={};let rc="dataLayer",CT="gtag",Wh,Lp,Qh=!1;function RT(){const n=[];if(Au()&&n.push("This is a browser extension environment."),Fw()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Xe.create("invalid-analytics-context",{errorInfo:e});Ke.warn(t.message)}}function NT(n,e,t){RT();const r=n.options.appId;if(!r)throw Xe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(Ai[r]!=null)throw Xe.create("already-exists",{id:r});if(!Qh){uT(rc);const{wrappedGtag:s,gtagCore:o}=fT(Ai,Kh,Hh,rc,CT);Lp=s,Wh=o,Qh=!0}return Ai[r]=AT(n,Kh,Hh,e,Wh,rc,t),new kT(n)}function DT(n=Qo()){n=C(n);const e=dn(n,_o);return e.isInitialized()?e.getImmediate():PT(n)}function PT(n,e={}){const t=dn(n,_o);if(t.isInitialized()){const i=t.getImmediate();if(yo(e,t.getOptions()))return i;throw Xe.create("already-initialized")}return t.initialize({options:e})}function xT(n,e,t,r){n=C(n),bT(Lp,Ai[n.app.options.appId],e,t,r).catch(i=>Ke.error(i))}const Yh="@firebase/analytics",Xh="0.10.0";function OT(){Je(new Ve(_o,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return NT(r,i,t)},"PUBLIC")),Je(new Ve("analytics-internal",n,"PRIVATE")),Se(Yh,Xh),Se(Yh,Xh,"esm2017");function n(e){try{const t=e.getProvider(_o).getImmediate();return{logEvent:(r,i,s)=>xT(t,r,i,s)}}catch(t){throw Xe.create("interop-component-reg-failed",{reason:t})}}}OT();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t){this._delegate=e,this.firebase=t,vo(e,new Ve("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ap(this._delegate)))}_getService(e,t=Zt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Zt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){vo(this._delegate,e)}_addOrOverwriteComponent(e){op(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const MT={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Jh=new Lt("app-compat","Firebase",MT);/**
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
 */function FT(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Se,setLogLevel:up,onLog:cp,apps:null,SDK_VERSION:Mt,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:nI}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Zt,!Dh(e,u))throw Jh.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Nu(u,l);if(Dh(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Je(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Jh.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&go(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function Mp(){const n=FT(LT);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Mp,extendNamespace:e,createSubscribe:np,ErrorFactory:Lt,deepExtend:go});function e(t){go(n,t)}return n}const UT=Mp();/**
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
 */const Zh=new hs("@firebase/app-compat"),VT="@firebase/app-compat",BT="0.2.13";/**
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
 */function $T(n){Se(VT,BT,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Lw()&&self.firebase!==void 0){Zh.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Zh.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const St=UT;$T();var qT="firebase",jT="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.registerVersion(qT,jT,"app-compat");function Fu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const oi={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ur={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function Fp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GT=zT,KT=Fp,Up=new Lt("auth","Firebase",Fp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new hs("@firebase/auth");function HT(n,...e){Io.logLevel<=V.WARN&&Io.warn(`Auth (${Mt}): ${n}`,...e)}function no(n,...e){Io.logLevel<=V.ERROR&&Io.error(`Auth (${Mt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,...e){throw Uu(n,...e)}function Ae(n,...e){return Uu(n,...e)}function Vp(n,e,t){const r=Object.assign(Object.assign({},KT()),{[e]:t});return new Lt("auth","Firebase",r).create(e,{appName:n.name})}function Gr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ce(n,"argument-error"),Vp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Up.create(n,...e)}function w(n,e,...t){if(!n)throw Uu(e,...t)}function pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw no(e),new Error(e)}function ot(n,e){n||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vu(){return ed()==="http:"||ed()==="https:"}function ed(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vu()||Au()||"connection"in navigator)?navigator.onLine:!0}function QT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=Ow()||ku()}get(){return WT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n,e){ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new ds(3e4,6e4);function he(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fe(n,e,t,r,i={}){return $p(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Bp.fetch()(qp(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function $p(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},YT),e);try{const i=new JT(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw wi(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vp(n,l,u);Ce(n,l)}}catch(i){if(i instanceof ge)throw i;Ce(n,"network-request-failed",{message:String(i)})}}async function Ft(n,e,t,r,i={}){const s=await fe(n,e,t,r,i);return"mfaPendingCredential"in s&&Ce(n,"multi-factor-auth-required",{_serverResponse:s}),s}function qp(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Bu(n.config,i):`${n.config.apiScheme}://${i}`}class JT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ae(this.auth,"network-request-failed")),XT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ae(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(n,e){return fe(n,"POST","/v1/accounts:delete",e)}async function eE(n,e){return fe(n,"POST","/v1/accounts:update",e)}async function tE(n,e){return fe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nE(n,e=!1){const t=C(n),r=await t.getIdToken(e),i=Jo(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ki(ic(i.auth_time)),issuedAtTime:ki(ic(i.iat)),expirationTime:ki(ic(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ic(n){return Number(n)*1e3}function Jo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return no("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yf(t);return i?JSON.parse(i):(no("Failed to decode base64 JWT payload"),null)}catch(i){return no("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rE(n){const e=Jo(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ge&&iE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function iE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $i(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Pt(n,tE(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cE(s.providerUserInfo):[],a=aE(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jp(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function oE(n){const e=C(n);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aE(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cE(n){return n.map(e=>{var{providerId:t}=e,r=Fu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(n,e){const t=await $p(n,{},async()=>{const r=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=qp(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await uE(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new qi;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Pt(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nE(this,e)}reload(){return oE(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pt(this,ZT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,I=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=t.createdAt)!==null&&u!==void 0?u:void 0,L=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:R,emailVerified:O,isAnonymous:q,providerData:F,stsTokenManager:ie}=t;w(R&&ie,e,"internal-error");const xe=qi.fromJSON(this.name,ie);w(typeof R=="string",e,"internal-error"),qt(h,e.name),qt(d,e.name),w(typeof O=="boolean",e,"internal-error"),w(typeof q=="boolean",e,"internal-error"),qt(f,e.name),qt(g,e.name),qt(_,e.name),qt(I,e.name),qt(x,e.name),qt(L,e.name);const ut=new On({uid:R,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:q,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:xe,createdAt:x,lastLoginAt:L});return F&&Array.isArray(F)&&(ut.providerData=F.map(Tw=>Object.assign({},Tw))),I&&(ut._redirectEventId=I),ut}static async _fromIdTokenResponse(e,t,r=!1){const i=new qi;i.updateFromServerResponse(t);const s=new On({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $i(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;function Qe(n){ot(n instanceof Function,"Expected a class definition");let e=td.get(n);return e?(ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,td.set(n,e),e)}/**
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
 */class zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zp.type="NONE";const Rr=zp;/**
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
 */function Ln(n,e,t){return`firebase:${n}:${e}:${t}`}class _r{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ln(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ln("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new _r(Qe(Rr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Qe(Rr);const o=Ln(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=On._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new _r(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new _r(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wp(e))return"Blackberry";if(Qp(e))return"Webos";if($u(e))return"Safari";if((e.includes("chrome/")||Kp(e))&&!e.includes("edge/"))return"Chrome";if(fs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gp(n=Z()){return/firefox\//i.test(n)}function $u(n=Z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kp(n=Z()){return/crios\//i.test(n)}function Hp(n=Z()){return/iemobile/i.test(n)}function fs(n=Z()){return/android/i.test(n)}function Wp(n=Z()){return/blackberry/i.test(n)}function Qp(n=Z()){return/webos/i.test(n)}function Kr(n=Z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lE(n=Z()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function hE(n=Z()){var e;return Kr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dE(){return ep()&&document.documentMode===10}function Yp(n=Z()){return Kr(n)||fs(n)||Qp(n)||Wp(n)||/windows phone/i.test(n)||Hp(n)}function fE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n,e=[]){let t;switch(n){case"Browser":t=nd(Z());break;case"Worker":t=`${nd(Z())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mt}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(n){return(await fe(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Jp(n,e){return fe(n,"GET","/v2/recaptchaConfig",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){return n!==void 0&&n.getResponse!==void 0}function id(n){return n!==void 0&&n.enterprise!==void 0}class Zp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function qu(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ae("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",mE().appendChild(r)})}function em(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const gE="https://www.google.com/recaptcha/enterprise.js?render=",yE="recaptcha-enterprise",vE="NO_RECAPTCHA";class tm{constructor(e){this.type=yE,this.auth=ce(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Jp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Zp(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;id(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(vE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&id(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qu(gE+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function tn(n,e,t,r=!1){const i=new tm(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class wE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.beforeStateQueue=new wE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qe(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _r.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?C(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qe(e))})}async initializeRecaptchaConfig(){const e=await Jp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Zp(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new tm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qe(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[Qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&HT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ce(n){return C(n)}class sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=np(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function IE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Qe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TE(n,e,t){const r=ce(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=nm(e),{host:o,port:a}=EE(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bE()}function nm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function EE(n){const e=nm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:od(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:od(o)}}}function od(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(n,e){return fe(n,"POST","/v1/accounts:resetPassword",he(n,e))}async function im(n,e){return fe(n,"POST","/v1/accounts:update",e)}async function SE(n,e){return fe(n,"POST","/v1/accounts:update",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(n,e){return Ft(n,"POST","/v1/accounts:signInWithPassword",he(n,e))}async function Zo(n,e){return fe(n,"POST","/v1/accounts:sendOobCode",he(n,e))}async function AE(n,e){return Zo(n,e)}async function oc(n,e){return Zo(n,e)}async function ac(n,e){return Zo(n,e)}async function kE(n,e){return Zo(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(n,e){return Ft(n,"POST","/v1/accounts:signInWithEmailLink",he(n,e))}async function RE(n,e){return Ft(n,"POST","/v1/accounts:signInWithEmailLink",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Hr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ji(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ji(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await tn(e,r,"signInWithPassword");return sc(e,i)}else return sc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await tn(e,r,"signInWithPassword");return sc(e,s)}else return Promise.reject(i)});case"emailLink":return CE(e,{email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return im(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RE(e,{idToken:t,email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(n,e){return Ft(n,"POST","/v1/accounts:signInWithIdp",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="http://localhost";class Tt extends Hr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Fu(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Tt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}buildRequest(){const e={requestUri:NE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(n,e){return fe(n,"POST","/v1/accounts:sendVerificationCode",he(n,e))}async function PE(n,e){return Ft(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,e))}async function xE(n,e){const t=await Ft(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,e));if(t.temporaryProof)throw wi(n,"account-exists-with-different-credential",t);return t}const OE={USER_NOT_FOUND:"user-not-found"};async function LE(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ft(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,t),OE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Hr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Mn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Mn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return PE(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return xE(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return LE(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Mn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FE(n){const e=vr(vi(n)).link,t=e?vr(vi(e)).deep_link_id:null,r=vr(vi(n)).deep_link_id;return(r?vr(vi(r)).link:null)||r||t||e||n}class ea{constructor(e){var t,r,i,s,o,a;const c=vr(vi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ME((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=FE(e);try{return new ea(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.providerId=fn.PROVIDER_ID}static credential(e,t){return ji._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ea.parseLink(t);return w(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}fn.PROVIDER_ID="password";fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wr extends Ut{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ir extends Wr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),Tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),Tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ir.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ir.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Ir(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Wr{constructor(){super("facebook.com")}static credential(e){return Tt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return it.credential(t,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Wr{constructor(){super("github.com")}static credential(e){return Tt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="http://localhost";class Nr extends Hr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Nr(r,s)}static _create(e,t){return new Nr(e,t)}buildRequest(){return{requestUri:UE,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="saml.";class To extends Ut{constructor(e){w(e.startsWith(VE),"argument-error"),super(e)}static credentialFromResult(e){return To.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return To.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Nr.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Nr._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Wr{constructor(){super("twitter.com")}static credential(e,t){return Tt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(n,e){return Ft(n,"POST","/v1/accounts:signUp",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await On._fromIdTokenResponse(e,r,i),o=ad(r);return new rt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ad(r);return new rt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ad(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(n){var e;const t=ce(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new rt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await ro(t,{returnSecureToken:!0}),i=await rt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends ge{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Eo(e,t,r,i)}}function sm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eo._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function $E(n,e){const t=C(n);await ta(!0,t,e);const{providerUserInfo:r}=await eE(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=om(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function ju(n,e,t=!1){const r=await Pt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return rt._forOperation(n,"link",r)}async function ta(n,e,t){await $i(e);const r=om(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";w(r.has(t)===n,e.auth,i)}/**
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
 */async function am(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Pt(n,sm(r,i,e,n),t);w(s.idToken,r,"internal-error");const o=Jo(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),rt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ce(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(n,e,t=!1){const r="signIn",i=await sm(n,r,e),s=await rt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function na(n,e){return cm(ce(n),e)}async function um(n,e){const t=C(n);return await ta(!1,t,e.providerId),ju(t,e)}async function lm(n,e){return am(C(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(n,e){return Ft(n,"POST","/v1/accounts:signInWithCustomToken",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(n,e){const t=ce(n),r=await qE(t,{token:e,returnSecureToken:!0}),i=await rt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?zu._fromServerResponse(e,t):"totpInfo"in t?Gu._fromServerResponse(e,t):Ce(e,"internal-error")}}class zu extends ps{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new zu(t)}}class Gu extends ps{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Gu(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n,e,t){var r;w(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(n,e,t){var r;const i=ce(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await tn(i,s,"getOobCode",!0);t&&Tr(i,o,t),await oc(i,o)}else t&&Tr(i,s,t),await oc(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await tn(i,s,"getOobCode",!0);t&&Tr(i,a,t),await oc(i,a)}else return Promise.reject(o)})}async function GE(n,e,t){await rm(C(n),{oobCode:e,newPassword:t})}async function KE(n,e){await SE(C(n),{oobCode:e})}async function hm(n,e){const t=C(n),r=await rm(t,{oobCode:e}),i=r.requestType;switch(w(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,t,"internal-error");default:w(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ps._fromServerResponse(ce(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function HE(n,e){const{data:t}=await hm(C(n),e);return t.email}async function WE(n,e,t){var r;const i=ce(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await tn(i,s,"signUpPassword");o=ro(i,u)}else o=ro(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await tn(i,s,"signUpPassword");return ro(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await rt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function QE(n,e,t){return na(C(n),fn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(n,e,t){var r;const i=ce(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){w(c.handleCodeInApp,i,"argument-error"),c&&Tr(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await tn(i,s,"getOobCode",!0);o(a,t),await ac(i,a)}else o(s,t),await ac(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await tn(i,s,"getOobCode",!0);o(c,t),await ac(i,c)}else return Promise.reject(a)})}function XE(n,e){const t=ea.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function JE(n,e,t){const r=C(n),i=fn.credentialWithLink(e,t||Bi());return w(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),na(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(n,e){return fe(n,"POST","/v1/accounts:createAuthUri",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(n,e){const t=Vu()?Bi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await ZE(C(n),r);return i||[]}async function tb(n,e){const t=C(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Tr(t.auth,i,e);const{email:s}=await AE(t.auth,i);s!==n.email&&await n.reload()}async function nb(n,e,t){const r=C(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Tr(r.auth,s,t);const{email:o}=await kE(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(n,e){return fe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=C(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Pt(r,rb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sb(n,e){return dm(C(n),e,null)}function ob(n,e){return dm(C(n),null,e)}async function dm(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Pt(n,im(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function ab(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Jo(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Er(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new cb(s,i);case"github.com":return new ub(s,i);case"google.com":return new lb(s,i);case"twitter.com":return new hb(s,i,n.screenName||null);case"custom":case"anonymous":return new Er(s,null);default:return new Er(s,r,i)}}class Er{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class fm extends Er{constructor(e,t,r,i){super(e,t,r),this.username=i}}class cb extends Er{constructor(e,t){super(e,"facebook.com",t)}}class ub extends fm{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class lb extends Er{constructor(e,t){super(e,"google.com",t)}}class hb extends fm{constructor(e,t,r){super(e,"twitter.com",t,r)}}function db(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:ab(t)}class Rn{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new Rn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Rn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Rn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Rn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=ce(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ps._fromServerResponse(r,a));w(i.mfaPendingCredential,r,"internal-error");const o=Rn._fromMfaPendingCredential(i.mfaPendingCredential);return new Ku(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await rt._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return w(t.user,r,"internal-error"),rt._forOperation(t.user,t.operationType,u);default:Ce(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function fb(n,e){var t;const r=C(n),i=e;return w(e.customData.operationType,r,"argument-error"),w((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Ku._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:start",he(n,e))}function mb(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:finalize",he(n,e))}function gb(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:withdraw",he(n,e))}class Hu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ps._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Hu(e)}async getSession(){return Rn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Pt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Pt(this.user,gb(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const cc=new WeakMap;function yb(n){const e=C(n);return cc.has(e)||cc.set(e,Hu._fromUser(e)),cc.get(e)}const bo="__sak";/**
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
 */class pm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(){const n=Z();return $u(n)||Kr(n)}const wb=1e3,_b=10;class mm extends pm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vb()&&fE(),this.fallbackToPolling=Yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_b):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mm.type="LOCAL";const Wu=mm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm extends pm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gm.type="SESSION";const jn=gm;/**
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
 */function Ib(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Ib(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ms("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return window}function Eb(n){le().location.href=n}/**
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
 */function Qu(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function bb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ab(){return Qu()?self:null}/**
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
 */const ym="firebaseLocalStorageDb",kb=1,So="firebaseLocalStorage",vm="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ia(n,e){return n.transaction([So],e?"readwrite":"readonly").objectStore(So)}function Cb(){const n=indexedDB.deleteDatabase(ym);return new gs(n).toPromise()}function Oc(){const n=indexedDB.open(ym,kb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(So,{keyPath:vm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(So)?e(r):(r.close(),await Cb(),e(await Oc()))})})}async function cd(n,e,t){const r=ia(n,!0).put({[vm]:e,value:t});return new gs(r).toPromise()}async function Rb(n,e){const t=ia(n,!1).get(e),r=await new gs(t).toPromise();return r===void 0?null:r.value}function ud(n,e){const t=ia(n,!0).delete(e);return new gs(t).toPromise()}const Nb=800,Db=3;class wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Db)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(Ab()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bb(),!this.activeServiceWorker)return;this.sender=new Tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oc();return await cd(e,bo,"1"),await ud(e,bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Rb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ud(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ia(i,!1).getAll();return new gs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wm.type="LOCAL";const zi=wm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n,e){return fe(n,"POST","/v2/accounts/mfaSignIn:start",he(n,e))}function xb(n,e){return fe(n,"POST","/v2/accounts/mfaSignIn:finalize",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=500,Lb=6e4,$s=1e12;class Mb{constructor(e){this.auth=e,this.counter=$s,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Fb(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||$s;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||$s;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||$s;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Fb{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;w(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Ub(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Lb)},Ob))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Ub(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=em("rcb"),Vb=new ds(3e4,6e4),Bb="https://www.google.com/recaptcha/api.js?";class $b{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=le().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return w(qb(t),e,"argument-error"),this.shouldResolveImmediately(t)&&rd(le().grecaptcha)?Promise.resolve(le().grecaptcha):new Promise((r,i)=>{const s=le().setTimeout(()=>{i(Ae(e,"network-request-failed"))},Vb.get());le()[uc]=()=>{le().clearTimeout(s),delete le()[uc];const a=le().grecaptcha;if(!a||!rd(a)){i(Ae(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${Bb}?${zr({onload:uc,render:"explicit",hl:t})}`;qu(o).catch(()=>{clearTimeout(s),i(Ae(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=le().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function qb(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class jb{async load(e){return new Mb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="recaptcha",zb={theme:"light",type:"image"};let Gb=class{constructor(e,t=Object.assign({},zb),r){this.parameters=t,this.type=_m,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ce(r),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;w(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new jb:new $b,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=le()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(Vu()&&!Qu(),this.auth,"internal-error"),await Kb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pE(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Kb(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Mn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Hb(n,e,t){const r=ce(n),i=await sa(r,e,C(t));return new Yu(i,s=>na(r,s))}async function Wb(n,e,t){const r=C(n);await ta(!1,r,"phone");const i=await sa(r.auth,e,C(t));return new Yu(i,s=>um(r,s))}async function Qb(n,e,t){const r=C(n),i=await sa(r.auth,e,C(t));return new Yu(i,s=>lm(r,s))}async function sa(n,e,t){var r;const i=await t.verify();try{w(typeof i=="string",n,"argument-error"),w(t.type===_m,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return w(o.type==="enroll",n,"internal-error"),(await pb(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await Pb(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await DE(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Yb(n,e){await ju(C(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn=class io{constructor(e){this.providerId=io.PROVIDER_ID,this.auth=ce(e)}verifyPhoneNumber(e,t){return sa(this.auth,e,C(t))}static credential(e,t){return Mn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return io.credentialFromTaggedObject(t)}static credentialFromError(e){return io.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Mn._fromTokenResponse(t,r):null}};zn.PROVIDER_ID="phone";zn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function nr(n,e){return e?Qe(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Xu extends Hr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xb(n){return cm(n.auth,new Xu(n),n.bypassAuthState)}function Jb(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),am(t,new Xu(n),n.bypassAuthState)}async function Zb(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),ju(t,new Xu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xb;case"linkViaPopup":case"linkViaRedirect":return Zb;case"reauthViaPopup":case"reauthViaRedirect":return Jb;default:Ce(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new ds(2e3,1e4);async function t0(n,e,t){const r=ce(n);Gr(n,e,Ut);const i=nr(r,t);return new At(r,"signInViaPopup",e,i).executeNotNull()}async function n0(n,e,t){const r=C(n);Gr(r.auth,e,Ut);const i=nr(r.auth,t);return new At(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function r0(n,e,t){const r=C(n);Gr(r.auth,e,Ut);const i=nr(r.auth,t);return new At(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class At extends Im{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=ms();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e0.get())};e()}}At.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="pendingRedirect",Ci=new Map;class s0 extends Im{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ci.get(this.auth._key());if(!e){try{const r=await o0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ci.set(this.auth._key(),e)}return this.bypassAuthState||Ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o0(n,e){const t=Em(e),r=Tm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Ju(n,e){return Tm(n)._set(Em(e),"true")}function a0(){Ci.clear()}function Zu(n,e){Ci.set(n._key(),e)}function Tm(n){return Qe(n._redirectPersistence)}function Em(n){return Ln(i0,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n,e,t){return u0(n,e,t)}async function u0(n,e,t){const r=ce(n);Gr(n,e,Ut),await r._initializationPromise;const i=nr(r,t);return await Ju(i,r),i._openRedirect(r,e,"signInViaRedirect")}function l0(n,e,t){return h0(n,e,t)}async function h0(n,e,t){const r=C(n);Gr(r.auth,e,Ut),await r.auth._initializationPromise;const i=nr(r.auth,t);await Ju(i,r.auth);const s=await bm(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function d0(n,e,t){return f0(n,e,t)}async function f0(n,e,t){const r=C(n);Gr(r.auth,e,Ut),await r.auth._initializationPromise;const i=nr(r.auth,t);await ta(!1,r,e.providerId),await Ju(i,r.auth);const s=await bm(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function p0(n,e){return await ce(n)._initializationPromise,oa(n,e,!1)}async function oa(n,e,t=!1){const r=ce(n),i=nr(r,e),o=await new s0(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function bm(n){const e=ms(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=10*60*1e3;class Sm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Am(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ae(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ld(e))}saveEventToCache(e){this.cachedEventUids.add(ld(e)),this.lastProcessedEventTime=Date.now()}}function ld(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Am({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Am(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(n,e={}){return fe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v0=/^https?/;async function w0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await km(n);for(const t of e)try{if(_0(t))return}catch{}Ce(n,"unauthorized-domain")}function _0(n){const e=Bi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!v0.test(t))return!1;if(y0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const I0=new ds(3e4,6e4);function hd(){const n=le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function T0(n){return new Promise((e,t)=>{var r,i,s;function o(){hd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hd(),t(Ae(n,"network-request-failed"))},timeout:I0.get()})}if(!((i=(r=le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=le().gapi)===null||s===void 0)&&s.load)o();else{const a=em("iframefcb");return le()[a]=()=>{gapi.load?o():t(Ae(n,"network-request-failed"))},qu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw so=null,e})}let so=null;function E0(n){return so=so||T0(n),so}/**
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
 */const b0=new ds(5e3,15e3),S0="__/auth/iframe",A0="emulator/auth/iframe",k0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R0(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bu(e,A0):`https://${n.config.authDomain}/${S0}`,r={apiKey:e.apiKey,appName:n.name,v:Mt},i=C0.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${zr(r).slice(1)}`}async function N0(n){const e=await E0(n),t=le().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:R0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ae(n,"network-request-failed"),a=le().setTimeout(()=>{s(o)},b0.get());function c(){le().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const D0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P0=500,x0=600,O0="_blank",L0="http://localhost";class dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M0(n,e,t,r=P0,i=x0){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},D0),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Z().toLowerCase();t&&(a=Kp(u)?O0:t),Gp(u)&&(e=e||L0,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(hE(u)&&a!=="_self")return F0(e||"",a),new dd(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new dd(h)}function F0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const U0="__/auth/handler",V0="emulator/auth/handler",B0=encodeURIComponent("fac");async function Lc(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mt,eventId:i};if(e instanceof Ut){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",$w(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Wr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${B0}=${encodeURIComponent(c)}`:"";return`${$0(n)}?${zr(a).slice(1)}${u}`}function $0({config:n}){return n.emulator?Bu(n,V0):`https://${n.authDomain}/${U0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="webStorageSupport";class q0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jn,this._completeRedirectFn=oa,this._overrideRedirectResult=Zu}async _openPopup(e,t,r,i){var s;ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Lc(e,t,r,Bi(),i);return M0(e,o,ms())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Lc(e,t,r,Bi(),i);return Eb(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await N0(e),r=new Sm(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lc,{type:lc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lc];o!==void 0&&t(!!o),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=w0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yp()||$u()||Kr()}}const j0=q0;class z0{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return pt("unexpected MultiFactorSessionType")}}}class el extends z0{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new el(e)}_finalizeEnroll(e,t,r){return mb(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return xb(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Cm{constructor(){}static assertion(e){return el._fromCredential(e)}}Cm.FACTOR_ID="phone";var fd="@firebase/auth",pd="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function H0(n){Je(new Ve("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xp(n)},u=new _E(r,i,s,c);return IE(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Je(new Ve("auth-internal",e=>{const t=ce(e.getProvider("auth").getImmediate());return(r=>new G0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(fd,pd,K0(n)),Se(fd,pd,"esm2017")}/**
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
 */const W0=5*60;Pw("authIdTokenMaxAge");H0("Browser");/**
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
 */function Gn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=2e3;async function Y0(n,e,t){var r;const{BuildInfo:i}=Gn();ot(e.sessionId,"AuthEvent did not contain a session ID");const s=await tS(e.sessionId),o={};return Kr()?o.ibi=i.packageName:fs()?o.apn=i.packageName:Ce(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Lc(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function X0(n){const{BuildInfo:e}=Gn(),t={};Kr()?t.iosBundleId=e.packageName:fs()?t.androidPackageName=e.packageName:Ce(n,"operation-not-supported-in-this-environment"),await km(n,t)}function J0(n){const{cordova:e}=Gn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,lE()?"_blank":"_system","location=yes"),t(i)})})}async function Z0(n,e,t){const{cordova:r}=Gn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Ae(n,"redirect-cancelled-by-user"))},Q0))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),fs()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function eS(n){var e,t,r,i,s,o,a,c,u,l;const h=Gn();w(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function tS(n){const e=nS(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function nS(n){if(ot(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=20;class iS extends Sm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function sS(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:cS(),postBody:null,tenantId:n.tenantId,error:Ae(n,"no-auth-event")}}function oS(n,e){return Mc()._set(Fc(n),e)}async function md(n){const e=await Mc()._get(Fc(n));return e&&await Mc()._remove(Fc(n)),e}function aS(n,e){var t,r;const i=lS(e);if(i.includes("/__/auth/callback")){const s=oo(i),o=s.firebaseError?uS(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Ae(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function cS(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<rS;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Mc(){return Qe(Wu)}function Fc(n){return Ln("authEvent",n.config.apiKey,n.name)}function uS(n){try{return JSON.parse(n)}catch{return null}}function lS(n){const e=oo(n),t=e.link?decodeURIComponent(e.link):void 0,r=oo(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return oo(i).link||i||r||t||n}function oo(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return vr(t.join("?"))}/**
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
 */const hS=500;class dS{constructor(){this._redirectPersistence=jn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=oa,this._overrideRedirectResult=Zu}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new iS(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ce(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){eS(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),a0(),await this._originValidation(e);const o=sS(e,r,i);await oS(e,o);const a=await Y0(e,o,t),c=await J0(a);return Z0(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=X0(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Gn(),o=setTimeout(async()=>{await md(e),t.onEvent(gd())},hS),a=async l=>{clearTimeout(o);const h=await md(e);let d=null;h&&(l!=null&&l.url)&&(d=aS(h,l.url)),t.onEvent(d||gd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Gn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const fS=dS;function gd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ae("no-auth-event")}}/**
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
 */function pS(n,e){ce(n)._logFramework(e)}var mS="@firebase/auth-compat",gS="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=1e3;function Ri(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function vS(){return Ri()==="http:"||Ri()==="https:"}function Rm(n=Z()){return!!((Ri()==="file:"||Ri()==="ionic:"||Ri()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function wS(){return ku()||Wo()}function _S(){return ep()&&(document==null?void 0:document.documentMode)===11}function IS(n=Z()){return/Edge\/\d+/.test(n)}function TS(n=Z()){return _S()||IS(n)}function Nm(){try{const n=self.localStorage,e=ms();if(n)return n.setItem(e,"1"),n.removeItem(e),TS()?Cr():!0}catch{return tl()&&Cr()}return!1}function tl(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function hc(){return(vS()||Au()||Rm())&&!wS()&&Nm()&&!tl()}function Dm(){return Rm()&&typeof document<"u"}async function ES(){return Dm()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},yS);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function bS(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={LOCAL:"local",NONE:"none",SESSION:"session"},ai=w,Pm="persistence";function SS(n,e){if(ai(Object.values(We).includes(e),n,"invalid-persistence-type"),ku()){ai(e!==We.SESSION,n,"unsupported-persistence-type");return}if(Wo()){ai(e===We.NONE,n,"unsupported-persistence-type");return}if(tl()){ai(e===We.NONE||e===We.LOCAL&&Cr(),n,"unsupported-persistence-type");return}ai(e===We.NONE||Nm(),n,"unsupported-persistence-type")}async function Uc(n){await n._initializationPromise;const e=xm(),t=Ln(Pm,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function AS(n,e){const t=xm();if(!t)return[];const r=Ln(Pm,n,e);switch(t.getItem(r)){case We.NONE:return[Rr];case We.LOCAL:return[zi,jn];case We.SESSION:return[jn];default:return[]}}function xm(){var n;try{return((n=bS())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=w;class Qt{constructor(){this.browserResolver=Qe(j0),this.cordovaResolver=Qe(fS),this.underlyingResolver=null,this._redirectPersistence=jn,this._completeRedirectFn=oa,this._overrideRedirectResult=Zu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Dm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return kS(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ES();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n){return n.unwrap()}function CS(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n){return Lm(n)}function NS(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new DS(n,fb(n,e))}else if(r){const i=Lm(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Lm(n){const{_tokenResponse:e}=n instanceof ge?n.customData:n;if(!e)return null;if(!(n instanceof ge)&&"temporaryProof"in e&&"phoneNumber"in e)return zn.credentialFromResult(n);const t=e.providerId;if(!t||t===oi.PASSWORD)return null;let r;switch(t){case oi.GOOGLE:r=it;break;case oi.FACEBOOK:r=lt;break;case oi.GITHUB:r=ht;break;case oi.TWITTER:r=dt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Nr._create(t,a):Tt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Ir(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof ge?r.credentialFromError(n):r.credentialFromResult(n)}function Be(n,e){return e.catch(t=>{throw t instanceof ge&&NS(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:RS(t),additionalUserInfo:db(t),user:aa.getOrCreate(i)}})}async function Vc(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Be(n,t.confirm(r))}}class DS{constructor(e,t){this.resolver=t,this.auth=CS(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Be(Om(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa=class _i{constructor(e){this._delegate=e,this.multiFactor=yb(e)}static getOrCreate(e){return _i.USER_MAP.has(e)||_i.USER_MAP.set(e,new _i(e)),_i.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Be(this.auth,um(this._delegate,e))}async linkWithPhoneNumber(e,t){return Vc(this.auth,Wb(this._delegate,e,t))}async linkWithPopup(e){return Be(this.auth,r0(this._delegate,e,Qt))}async linkWithRedirect(e){return await Uc(ce(this.auth)),d0(this._delegate,e,Qt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Be(this.auth,lm(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Vc(this.auth,Qb(this._delegate,e,t))}reauthenticateWithPopup(e){return Be(this.auth,n0(this._delegate,e,Qt))}async reauthenticateWithRedirect(e){return await Uc(ce(this.auth)),l0(this._delegate,e,Qt)}sendEmailVerification(e){return tb(this._delegate,e)}async unlink(e){return await $E(this._delegate,e),this}updateEmail(e){return sb(this._delegate,e)}updatePassword(e){return ob(this._delegate,e)}updatePhoneNumber(e){return Yb(this._delegate,e)}updateProfile(e){return ib(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return nb(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};aa.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=w;class Bc{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ci(r,"invalid-api-key",{appName:e.name}),ci(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Qt:void 0;this._delegate=t.initialize({options:{persistence:PS(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(GT),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?aa.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){TE(this._delegate,e,t)}applyActionCode(e){return KE(this._delegate,e)}checkActionCode(e){return hm(this._delegate,e)}confirmPasswordReset(e,t){return GE(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Be(this._delegate,WE(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return eb(this._delegate,e)}isSignInWithEmailLink(e){return XE(this._delegate,e)}async getRedirectResult(){ci(hc(),this._delegate,"operation-not-supported-in-this-environment");const e=await p0(this._delegate,Qt);return e?Be(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){pS(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=yd(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=yd(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return YE(this._delegate,e,t)}sendPasswordResetEmail(e,t){return zE(this._delegate,e,t||void 0)}async setPersistence(e){SS(this._delegate,e);let t;switch(e){case We.SESSION:t=jn;break;case We.LOCAL:t=await Qe(zi)._isAvailable()?zi:Wu;break;case We.NONE:t=Rr;break;default:return Ce("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Be(this._delegate,BE(this._delegate))}signInWithCredential(e){return Be(this._delegate,na(this._delegate,e))}signInWithCustomToken(e){return Be(this._delegate,jE(this._delegate,e))}signInWithEmailAndPassword(e,t){return Be(this._delegate,QE(this._delegate,e,t))}signInWithEmailLink(e,t){return Be(this._delegate,JE(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Vc(this._delegate,Hb(this._delegate,e,t))}async signInWithPopup(e){return ci(hc(),this._delegate,"operation-not-supported-in-this-environment"),Be(this._delegate,t0(this._delegate,e,Qt))}async signInWithRedirect(e){return ci(hc(),this._delegate,"operation-not-supported-in-this-environment"),await Uc(this._delegate),c0(this._delegate,e,Qt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return HE(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Bc.Persistence=We;function yd(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&aa.getOrCreate(o)),error:e,complete:t}}function PS(n,e){const t=AS(n,e);if(typeof self<"u"&&!t.includes(zi)&&t.push(zi),typeof window<"u")for(const r of[Wu,jn])t.includes(r)||t.push(r);return t.includes(Rr)||t.push(Rr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.providerId="phone",this._delegate=new zn(Om(St.auth()))}static credential(e,t){return zn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}nl.PHONE_SIGN_IN_METHOD=zn.PHONE_SIGN_IN_METHOD;nl.PROVIDER_ID=zn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=w;class OS{constructor(e,t,r=St.app()){var i;xS((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Gb(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="auth-compat";function MS(n){n.INTERNAL.registerComponent(new Ve(LS,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Bc(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ur.EMAIL_SIGNIN,PASSWORD_RESET:ur.PASSWORD_RESET,RECOVER_EMAIL:ur.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ur.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ur.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ur.VERIFY_EMAIL}},EmailAuthProvider:fn,FacebookAuthProvider:lt,GithubAuthProvider:ht,GoogleAuthProvider:it,OAuthProvider:Ir,SAMLAuthProvider:To,PhoneAuthProvider:nl,PhoneMultiFactorGenerator:Cm,RecaptchaVerifier:OS,TwitterAuthProvider:dt,Auth:Bc,AuthCredential:Hr,Error:ge}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(mS,gS)}MS(St);var FS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,rl=rl||{},N=FS||self;function ca(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function ys(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function US(n){return Object.prototype.hasOwnProperty.call(n,dc)&&n[dc]||(n[dc]=++VS)}var dc="closure_uid_"+(1e9*Math.random()>>>0),VS=0;function BS(n,e,t){return n.call.apply(n.bind,arguments)}function $S(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function De(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?De=BS:De=$S,De.apply(null,arguments)}function qs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function we(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pn(){this.s=this.s,this.o=this.o}var qS=0;pn.prototype.s=!1;pn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),qS!=0)&&US(this)};pn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mm=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function il(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function vd(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ca(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Pe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var jS=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",()=>{},e),N.removeEventListener("test",()=>{},e)}catch{}return n}();function Gi(n){return/^[\s\xa0]*$/.test(n)}function ua(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function ft(n){return ua().indexOf(n)!=-1}function sl(n){return sl[" "](n),n}sl[" "]=function(){};function zS(n,e){var t=MA;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var GS=ft("Opera"),Dr=ft("Trident")||ft("MSIE"),Fm=ft("Edge"),$c=Fm||Dr,Um=ft("Gecko")&&!(ua().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),KS=ua().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function Vm(){var n=N.document;return n?n.documentMode:void 0}var qc;e:{var fc="",pc=function(){var n=ua();if(Um)return/rv:([^\);]+)(\)|;)/.exec(n);if(Fm)return/Edge\/([\d\.]+)/.exec(n);if(Dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(KS)return/WebKit\/(\S+)/.exec(n);if(GS)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(pc&&(fc=pc?pc[1]:""),Dr){var mc=Vm();if(mc!=null&&mc>parseFloat(fc)){qc=String(mc);break e}}qc=fc}var jc;if(N.document&&Dr){var wd=Vm();jc=wd||parseInt(qc,10)||void 0}else jc=void 0;var HS=jc;function Ki(n,e){if(Pe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Um){e:{try{sl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:WS[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ki.$.h.call(this)}}we(Ki,Pe);var WS={2:"touch",3:"pen",4:"mouse"};Ki.prototype.h=function(){Ki.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var vs="closure_listenable_"+(1e6*Math.random()|0),QS=0;function YS(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++QS,this.fa=this.ia=!1}function la(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ol(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function XS(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Bm(n){const e={};for(const t in n)e[t]=n[t];return e}const _d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $m(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<_d.length;s++)t=_d[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function ha(n){this.src=n,this.g={},this.h=0}ha.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Gc(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new YS(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function zc(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Mm(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(la(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Gc(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var al="closure_lm_"+(1e6*Math.random()|0),gc={};function qm(n,e,t,r,i){if(r&&r.once)return zm(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)qm(n,e[s],t,r,i);return null}return t=ll(t),n&&n[vs]?n.O(e,t,ys(r)?!!r.capture:!!r,i):jm(n,e,t,!1,r,i)}function jm(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=ys(i)?!!i.capture:!!i,a=ul(n);if(a||(n[al]=a=new ha(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=JS(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)jS||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Km(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function JS(){function n(t){return e.call(n.src,n.listener,t)}const e=ZS;return n}function zm(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)zm(n,e[s],t,r,i);return null}return t=ll(t),n&&n[vs]?n.P(e,t,ys(r)?!!r.capture:!!r,i):jm(n,e,t,!0,r,i)}function Gm(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Gm(n,e[s],t,r,i);else r=ys(r)?!!r.capture:!!r,t=ll(t),n&&n[vs]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Gc(s,t,r,i),-1<t&&(la(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=ul(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Gc(e,t,r,i)),(t=-1<n?e[n]:null)&&cl(t))}function cl(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[vs])zc(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Km(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=ul(e))?(zc(t,n),t.h==0&&(t.src=null,e[al]=null)):la(n)}}}function Km(n){return n in gc?gc[n]:gc[n]="on"+n}function ZS(n,e){if(n.fa)n=!0;else{e=new Ki(e,this);var t=n.listener,r=n.la||n.src;n.ia&&cl(n),n=t.call(r,e)}return n}function ul(n){return n=n[al],n instanceof ha?n:null}var yc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ll(n){return typeof n=="function"?n:(n[yc]||(n[yc]=function(e){return n.handleEvent(e)}),n[yc])}function ve(){pn.call(this),this.i=new ha(this),this.S=this,this.J=null}we(ve,pn);ve.prototype[vs]=!0;ve.prototype.removeEventListener=function(n,e,t,r){Gm(this,n,e,t,r)};function ke(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Pe(e,n);else if(e instanceof Pe)e.target=e.target||n;else{var i=e;e=new Pe(r,n),$m(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=js(o,r,!0,e)&&i}if(o=e.g=n,i=js(o,r,!0,e)&&i,i=js(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=js(o,r,!1,e)&&i}ve.prototype.N=function(){if(ve.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)la(t[r]);delete n.g[e],n.h--}}this.J=null};ve.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ve.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function js(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&zc(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var hl=N.JSON.stringify;class eA{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function tA(){var n=dl;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class nA{constructor(){this.h=this.g=null}add(e,t){const r=Hm.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Hm=new eA(()=>new rA,n=>n.reset());class rA{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function iA(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function sA(n){N.setTimeout(()=>{throw n},0)}let Hi,Wi=!1,dl=new nA,Wm=()=>{const n=N.Promise.resolve(void 0);Hi=()=>{n.then(oA)}};var oA=()=>{for(var n;n=tA();){try{n.h.call(n.g)}catch(t){sA(t)}var e=Hm;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Wi=!1};function da(n,e){ve.call(this),this.h=n||1,this.g=e||N,this.j=De(this.qb,this),this.l=Date.now()}we(da,ve);b=da.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ke(this,"tick"),this.ga&&(fl(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fl(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}b.N=function(){da.$.N.call(this),fl(this),delete this.g};function pl(n,e,t){if(typeof n=="function")t&&(n=De(n,t));else if(n&&typeof n.handleEvent=="function")n=De(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function Qm(n){n.g=pl(()=>{n.g=null,n.i&&(n.i=!1,Qm(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class aA extends pn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qm(this)}N(){super.N(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(n){pn.call(this),this.h=n,this.g={}}we(Qi,pn);var Id=[];function Ym(n,e,t,r){Array.isArray(t)||(t&&(Id[0]=t.toString()),t=Id);for(var i=0;i<t.length;i++){var s=qm(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Xm(n){ol(n.g,function(e,t){this.g.hasOwnProperty(t)&&cl(e)},n),n.g={}}Qi.prototype.N=function(){Qi.$.N.call(this),Xm(this)};Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fa(){this.g=!0}fa.prototype.Ea=function(){this.g=!1};function cA(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function uA(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function wr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+hA(n,t)+(r?" "+r:"")})}function lA(n,e){n.info(function(){return"TIMEOUT: "+e})}fa.prototype.info=function(){};function hA(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return hl(t)}catch{return e}}var rr={},Td=null;function pa(){return Td=Td||new ve}rr.Ta="serverreachability";function Jm(n){Pe.call(this,rr.Ta,n)}we(Jm,Pe);function Yi(n){const e=pa();ke(e,new Jm(e))}rr.STAT_EVENT="statevent";function Zm(n,e){Pe.call(this,rr.STAT_EVENT,n),this.stat=e}we(Zm,Pe);function Fe(n){const e=pa();ke(e,new Zm(e,n))}rr.Ua="timingevent";function eg(n,e){Pe.call(this,rr.Ua,n),this.size=e}we(eg,Pe);function ws(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var ma={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},tg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ml(){}ml.prototype.h=null;function Ed(n){return n.h||(n.h=n.i())}function ng(){}var _s={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gl(){Pe.call(this,"d")}we(gl,Pe);function yl(){Pe.call(this,"c")}we(yl,Pe);var Kc;function ga(){}we(ga,ml);ga.prototype.g=function(){return new XMLHttpRequest};ga.prototype.i=function(){return{}};Kc=new ga;function Is(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Qi(this),this.P=dA,n=$c?125:void 0,this.V=new da(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new rg}function rg(){this.i=null,this.g="",this.h=!1}var dA=45e3,Hc={},Ao={};b=Is.prototype;b.setTimeout=function(n){this.P=n};function Wc(n,e,t){n.L=1,n.v=va(xt(e)),n.s=t,n.S=!0,ig(n,null)}function ig(n,e){n.G=Date.now(),Ts(n),n.A=xt(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),dg(t.i,"t",r),n.C=0,t=n.l.J,n.h=new rg,n.g=xg(n.l,t?e:null,!n.s),0<n.O&&(n.M=new aA(De(n.Pa,n,n.g),n.O)),Ym(n.U,n.g,"readystatechange",n.nb),e=n.I?Bm(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Yi(),cA(n.j,n.u,n.A,n.m,n.W,n.s)}b.nb=function(n){n=n.target;const e=this.M;e&&mt(n)==3?e.l():this.Pa(n)};b.Pa=function(n){try{if(n==this.g)e:{const l=mt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||$c||this.g&&(this.h.h||this.g.ja()||kd(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Yi(3):Yi(2)),ya(this);var t=this.g.da();this.ca=t;t:if(sg(this)){var r=kd(this.g);n="";var i=r.length,s=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),Ni(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,uA(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gi(a)){var u=a;break t}}u=null}if(t=u)wr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qc(this,t);else{this.i=!1,this.o=3,Fe(12),Nn(this),Ni(this);break e}}this.S?(og(this,l,o),$c&&this.i&&l==3&&(Ym(this.U,this.V,"tick",this.mb),this.V.start())):(wr(this.j,this.m,o,null),Qc(this,o)),l==4&&Nn(this),this.i&&!this.J&&(l==4?Rg(this.l,this):(this.i=!1,Ts(this)))}else xA(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Fe(12)):(this.o=0,Fe(13)),Nn(this),Ni(this)}}}catch{}finally{}};function sg(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function og(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=fA(n,t),i==Ao){e==4&&(n.o=4,Fe(14),r=!1),wr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Hc){n.o=4,Fe(15),wr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else wr(n.j,n.m,i,null),Qc(n,i);sg(n)&&i!=Ao&&i!=Hc&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Fe(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),El(e),e.M=!0,Fe(11))):(wr(n.j,n.m,t,"[Invalid Chunked Response]"),Nn(n),Ni(n))}b.mb=function(){if(this.g){var n=mt(this.g),e=this.g.ja();this.C<e.length&&(ya(this),og(this,n,e),this.i&&n!=4&&Ts(this))}};function fA(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Ao:(t=Number(e.substring(t,r)),isNaN(t)?Hc:(r+=1,r+t>e.length?Ao:(e=e.slice(r,r+t),n.C=r+t,e)))}b.cancel=function(){this.J=!0,Nn(this)};function Ts(n){n.Y=Date.now()+n.P,ag(n,n.P)}function ag(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ws(De(n.lb,n),e)}function ya(n){n.B&&(N.clearTimeout(n.B),n.B=null)}b.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(lA(this.j,this.A),this.L!=2&&(Yi(),Fe(17)),Nn(this),this.o=2,Ni(this)):ag(this,this.Y-n)};function Ni(n){n.l.H==0||n.J||Rg(n.l,n)}function Nn(n){ya(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,fl(n.V),Xm(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Qc(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Yc(t.i,n))){if(!n.K&&Yc(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Ro(t),Ia(t);else break e;Tl(t),Fe(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=ws(De(t.ib,t),6e3));if(1>=mg(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Dn(t,11)}else if((n.K||t.g==n)&&Ro(t),!Gi(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(vl(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,K(r.I,r.F,_))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Pg(r,r.J?r.pa:null,r.Y),o.K){gg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ya(a),Ts(a)),r.g=o}else kg(r);0<t.j.length&&Ta(t)}else u[0]!="stop"&&u[0]!="close"||Dn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Dn(t,7):Il(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Yi(4)}catch{}}function pA(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ca(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function mA(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ca(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function cg(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ca(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=mA(n),r=pA(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var ug=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gA(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Fn){this.h=n.h,ko(this,n.j),this.s=n.s,this.g=n.g,Co(this,n.m),this.l=n.l;var e=n.i,t=new Xi;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),bd(this,t),this.o=n.o}else n&&(e=String(n).match(ug))?(this.h=!1,ko(this,e[1]||"",!0),this.s=Ii(e[2]||""),this.g=Ii(e[3]||"",!0),Co(this,e[4]),this.l=Ii(e[5]||"",!0),bd(this,e[6]||"",!0),this.o=Ii(e[7]||"")):(this.h=!1,this.i=new Xi(null,this.h))}Fn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Ti(e,Sd,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Ti(e,Sd,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Ti(t,t.charAt(0)=="/"?wA:vA,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Ti(t,IA)),n.join("")};function xt(n){return new Fn(n)}function ko(n,e,t){n.j=t?Ii(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Co(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function bd(n,e,t){e instanceof Xi?(n.i=e,TA(n.i,n.h)):(t||(e=Ti(e,_A)),n.i=new Xi(e,n.h))}function K(n,e,t){n.i.set(e,t)}function va(n){return K(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ii(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ti(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,yA),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function yA(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Sd=/[#\/\?@]/g,vA=/[#\?:]/g,wA=/[#\?]/g,_A=/[#\?@]/g,IA=/#/g;function Xi(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function mn(n){n.g||(n.g=new Map,n.h=0,n.i&&gA(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}b=Xi.prototype;b.add=function(n,e){mn(this),this.i=null,n=Qr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function lg(n,e){mn(n),e=Qr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function hg(n,e){return mn(n),e=Qr(n,e),n.g.has(e)}b.forEach=function(n,e){mn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};b.ta=function(){mn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};b.Z=function(n){mn(this);let e=[];if(typeof n=="string")hg(this,n)&&(e=e.concat(this.g.get(Qr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};b.set=function(n,e){return mn(this),this.i=null,n=Qr(this,n),hg(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};b.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function dg(n,e,t){lg(n,e),0<t.length&&(n.i=null,n.g.set(Qr(n,e),il(t)),n.h+=t.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Qr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function TA(n,e){e&&!n.j&&(mn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(lg(this,r),dg(this,i,t))},n)),n.j=e}var EA=class{constructor(n,e){this.g=n,this.map=e}};function fg(n){this.l=n||bA,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ka&&N.g.Ka()&&N.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bA=10;function pg(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function mg(n){return n.h?1:n.g?n.g.size:0}function Yc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function vl(n,e){n.g?n.g.add(e):n.h=e}function gg(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}fg.prototype.cancel=function(){if(this.i=yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function yg(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return il(n.i)}var SA=class{stringify(n){return N.JSON.stringify(n,void 0)}parse(n){return N.JSON.parse(n,void 0)}};function AA(){this.g=new SA}function kA(n,e,t){const r=t||"";try{cg(n,function(i,s){let o=i;ys(i)&&(o=hl(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function CA(n,e){const t=new fa;if(N.Image){const r=new Image;r.onload=qs(zs,t,r,"TestLoadImage: loaded",!0,e),r.onerror=qs(zs,t,r,"TestLoadImage: error",!1,e),r.onabort=qs(zs,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=qs(zs,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function zs(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Es(n){this.l=n.fc||null,this.j=n.ob||!1}we(Es,ml);Es.prototype.g=function(){return new wa(this.l,this.j)};Es.prototype.i=function(n){return function(){return n}}({});function wa(n,e){ve.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=wl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}we(wa,ve);var wl=0;b=wa.prototype;b.open=function(n,e){if(this.readyState!=wl)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ji(this)};b.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||N).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=wl};b.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vg(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function vg(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}b.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?bs(this):Ji(this),this.readyState==3&&vg(this)}};b.Za=function(n){this.g&&(this.response=this.responseText=n,bs(this))};b.Ya=function(n){this.g&&(this.response=n,bs(this))};b.ka=function(){this.g&&bs(this)};function bs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ji(n)}b.setRequestHeader=function(n,e){this.v.append(n,e)};b.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ji(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var RA=N.JSON.parse;function ne(n){ve.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wg,this.L=this.M=!1}we(ne,ve);var wg="",NA=/^https?$/i,DA=["POST","PUT"];b=ne.prototype;b.Oa=function(n){this.M=n};b.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Kc.g(),this.C=this.u?Ed(this.u):Ed(Kc),this.g.onreadystatechange=De(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Ad(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=N.FormData&&n instanceof N.FormData,!(0<=Mm(DA,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Tg(this),0<this.B&&((this.L=PA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.ua,this)):this.A=pl(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Ad(this,s)}};function PA(n){return Dr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}b.ua=function(){typeof rl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function Ad(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,_g(n),_a(n)}function _g(n){n.F||(n.F=!0,ke(n,"complete"),ke(n,"error"))}b.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ke(this,"complete"),ke(this,"abort"),_a(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_a(this,!0)),ne.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?Ig(this):this.kb())};b.kb=function(){Ig(this)};function Ig(n){if(n.h&&typeof rl<"u"&&(!n.C[1]||mt(n)!=4||n.da()!=2)){if(n.v&&mt(n)==4)pl(n.La,0,n);else if(ke(n,"readystatechange"),mt(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(ug)[1]||null;!i&&N.self&&N.self.location&&(i=N.self.location.protocol.slice(0,-1)),r=!NA.test(i?i.toLowerCase():"")}t=r}if(t)ke(n,"complete"),ke(n,"success");else{n.m=6;try{var s=2<mt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",_g(n)}}finally{_a(n)}}}}function _a(n,e){if(n.g){Tg(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ke(n,"ready");try{t.onreadystatechange=r}catch{}}}function Tg(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}b.isActive=function(){return!!this.g};function mt(n){return n.g?n.g.readyState:0}b.da=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),RA(e)}};function kd(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case wg:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function xA(n){const e={};n=(n.g&&2<=mt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Gi(n[r]))continue;var t=iA(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}XS(e,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Eg(n){let e="";return ol(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function _l(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Eg(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):K(n,e,t))}function ui(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function bg(n){this.Ga=0,this.j=[],this.l=new fa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ui("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ui("baseRetryDelayMs",5e3,n),this.hb=ui("retryDelaySeedMs",1e4,n),this.eb=ui("forwardChannelMaxRetries",2,n),this.xa=ui("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new fg(n&&n.concurrentRequestLimit),this.Ja=new AA,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=bg.prototype;b.ra=8;b.H=1;function Il(n){if(Sg(n),n.H==3){var e=n.W++,t=xt(n.I);if(K(t,"SID",n.K),K(t,"RID",e),K(t,"TYPE","terminate"),Ss(n,t),e=new Is(n,n.l,e),e.L=2,e.v=va(xt(t)),t=!1,N.navigator&&N.navigator.sendBeacon)try{t=N.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=xg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ts(e)}Dg(n)}function Ia(n){n.g&&(El(n),n.g.cancel(),n.g=null)}function Sg(n){Ia(n),n.u&&(N.clearTimeout(n.u),n.u=null),Ro(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function Ta(n){if(!pg(n.i)&&!n.m){n.m=!0;var e=n.Na;Hi||Wm(),Wi||(Hi(),Wi=!0),dl.add(e,n),n.C=0}}function OA(n,e){return mg(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ws(De(n.Na,n,e),Ng(n,n.C)),n.C++,!0)}b.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Is(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Bm(s),$m(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Ag(this,i,e),t=xt(this.I),K(t,"RID",n),K(t,"CVER",22),this.F&&K(t,"X-HTTP-Session-Id",this.F),Ss(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Eg(s)))+"&"+e:this.o&&_l(t,this.o,s)),vl(this.i,i),this.bb&&K(t,"TYPE","init"),this.P?(K(t,"$req",e),K(t,"SID","null"),i.aa=!0,Wc(i,t,null)):Wc(i,t,e),this.H=2}}else this.H==3&&(n?Cd(this,n):this.j.length==0||pg(this.i)||Cd(this))};function Cd(n,e){var t;e?t=e.m:t=n.W++;const r=xt(n.I);K(r,"SID",n.K),K(r,"RID",t),K(r,"AID",n.V),Ss(n,r),n.o&&n.s&&_l(r,n.o,n.s),t=new Is(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Ag(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),vl(n.i,t),Wc(t,r,e)}function Ss(n,e){n.na&&ol(n.na,function(t,r){K(e,r,t)}),n.h&&cg({},function(t,r){K(e,r,t)})}function Ag(n,e,t){t=Math.min(n.j.length,t);var r=n.h?De(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{kA(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function kg(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Hi||Wm(),Wi||(Hi(),Wi=!0),dl.add(e,n),n.A=0}}function Tl(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ws(De(n.Ma,n),Ng(n,n.A)),n.A++,!0)}b.Ma=function(){if(this.u=null,Cg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=ws(De(this.jb,this),n)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Fe(10),Ia(this),Cg(this))};function El(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Cg(n){n.g=new Is(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=xt(n.wa);K(e,"RID","rpc"),K(e,"SID",n.K),K(e,"AID",n.V),K(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&K(e,"TO",n.qa),K(e,"TYPE","xmlhttp"),Ss(n,e),n.o&&n.s&&_l(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=va(xt(e)),t.s=null,t.S=!0,ig(t,n)}b.ib=function(){this.v!=null&&(this.v=null,Ia(this),Tl(this),Fe(19))};function Ro(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function Rg(n,e){var t=null;if(n.g==e){Ro(n),El(n),n.g=null;var r=2}else if(Yc(n.i,e))t=e.F,gg(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=pa(),ke(r,new eg(r,t)),Ta(n)}else kg(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&OA(n,e)||r==2&&Tl(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Dn(n,5);break;case 4:Dn(n,10);break;case 3:Dn(n,6);break;default:Dn(n,2)}}}function Ng(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Dn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=De(n.pb,n);t||(t=new Fn("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||ko(t,"https"),va(t)),CA(t.toString(),r)}else Fe(2);n.H=0,n.h&&n.h.za(e),Dg(n),Sg(n)}b.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Fe(2)):(this.l.info("Failed to ping google.com"),Fe(1))};function Dg(n){if(n.H=0,n.ma=[],n.h){const e=yg(n.i);(e.length!=0||n.j.length!=0)&&(vd(n.ma,e),vd(n.ma,n.j),n.i.i.length=0,il(n.j),n.j.length=0),n.h.ya()}}function Pg(n,e,t){var r=t instanceof Fn?xt(t):new Fn(t);if(r.g!="")e&&(r.g=e+"."+r.g),Co(r,r.m);else{var i=N.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fn(null);r&&ko(s,r),e&&(s.g=e),i&&Co(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&K(r,t,e),K(r,"VER",n.ra),Ss(n,r),r}function xg(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ne(new Es({ob:!0})):new ne(n.va),e.Oa(n.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function Og(){}b=Og.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function No(){if(Dr&&!(10<=Number(HS)))throw Error("Environmental error: no available transport.")}No.prototype.g=function(n,e){return new Ze(n,e)};function Ze(n,e){ve.call(this),this.g=new bg(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Gi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gi(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Yr(this)}we(Ze,ve);Ze.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Fe(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Pg(n,null,n.Y),Ta(n)};Ze.prototype.close=function(){Il(this.g)};Ze.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=hl(n),n=t);e.j.push(new EA(e.fb++,n)),e.H==3&&Ta(e)};Ze.prototype.N=function(){this.g.h=null,delete this.j,Il(this.g),delete this.g,Ze.$.N.call(this)};function Lg(n){gl.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}we(Lg,gl);function Mg(){yl.call(this),this.status=1}we(Mg,yl);function Yr(n){this.g=n}we(Yr,Og);Yr.prototype.Ba=function(){ke(this.g,"a")};Yr.prototype.Aa=function(n){ke(this.g,new Lg(n))};Yr.prototype.za=function(n){ke(this.g,new Mg)};Yr.prototype.ya=function(){ke(this.g,"b")};function LA(){this.blockSize=-1}function at(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}we(at,LA);at.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function vc(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}at.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)vc(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){vc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){vc(this,r),i=0;break}}this.h=i,this.i+=e};at.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function z(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var MA={};function bl(n){return-128<=n&&128>n?zS(n,function(e){return new z([e|0],0>e?-1:0)}):new z([n|0],0>n?-1:0)}function gt(n){if(isNaN(n)||!isFinite(n))return br;if(0>n)return Ee(gt(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Xc;return new z(e,0)}function Fg(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Ee(Fg(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=gt(Math.pow(e,8)),r=br,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=gt(Math.pow(e,s)),r=r.R(s).add(gt(o))):(r=r.R(t),r=r.add(gt(o)))}return r}var Xc=4294967296,br=bl(0),Jc=bl(1),Rd=bl(16777216);b=z.prototype;b.ea=function(){if(tt(this))return-Ee(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Xc+r)*e,e*=Xc}return n};b.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(kt(this))return"0";if(tt(this))return"-"+Ee(this).toString(n);for(var e=gt(Math.pow(n,6)),t=this,r="";;){var i=Po(t,e).g;t=Do(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,kt(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function kt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function tt(n){return n.h==-1}b.X=function(n){return n=Do(this,n),tt(n)?-1:kt(n)?0:1};function Ee(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new z(t,~n.h).add(Jc)}b.abs=function(){return tt(this)?Ee(this):this};b.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new z(t,t[t.length-1]&-2147483648?-1:0)};function Do(n,e){return n.add(Ee(e))}b.R=function(n){if(kt(this)||kt(n))return br;if(tt(this))return tt(n)?Ee(this).R(Ee(n)):Ee(Ee(this).R(n));if(tt(n))return Ee(this.R(Ee(n)));if(0>this.X(Rd)&&0>n.X(Rd))return gt(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Gs(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Gs(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Gs(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Gs(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new z(t,0)};function Gs(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function li(n,e){this.g=n,this.h=e}function Po(n,e){if(kt(e))throw Error("division by zero");if(kt(n))return new li(br,br);if(tt(n))return e=Po(Ee(n),e),new li(Ee(e.g),Ee(e.h));if(tt(e))return e=Po(n,Ee(e)),new li(Ee(e.g),e.h);if(30<n.g.length){if(tt(n)||tt(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Jc,r=e;0>=r.X(n);)t=Nd(t),r=Nd(r);var i=lr(t,1),s=lr(r,1);for(r=lr(r,2),t=lr(t,2);!kt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=lr(r,1),t=lr(t,1)}return e=Do(n,i.R(e)),new li(i,e)}for(i=br;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gt(t),o=s.R(e);tt(o)||0<o.X(n);)t-=r,s=gt(t),o=s.R(e);kt(s)&&(s=Jc),i=i.add(s),n=Do(n,o)}return new li(i,n)}b.gb=function(n){return Po(this,n).h};b.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new z(t,this.h&n.h)};b.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new z(t,this.h|n.h)};b.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new z(t,this.h^n.h)};function Nd(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new z(t,n.h)}function lr(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new z(i,n.h)}No.prototype.createWebChannel=No.prototype.g;Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;ma.NO_ERROR=0;ma.TIMEOUT=8;ma.HTTP_ERROR=6;tg.COMPLETE="complete";ng.EventType=_s;_s.OPEN="a";_s.CLOSE="b";_s.ERROR="c";_s.MESSAGE="d";ve.prototype.listen=ve.prototype.O;ne.prototype.listenOnce=ne.prototype.P;ne.prototype.getLastError=ne.prototype.Sa;ne.prototype.getLastErrorCode=ne.prototype.Ia;ne.prototype.getStatus=ne.prototype.da;ne.prototype.getResponseJson=ne.prototype.Wa;ne.prototype.getResponseText=ne.prototype.ja;ne.prototype.send=ne.prototype.ha;ne.prototype.setWithCredentials=ne.prototype.Oa;at.prototype.digest=at.prototype.l;at.prototype.reset=at.prototype.reset;at.prototype.update=at.prototype.j;z.prototype.add=z.prototype.add;z.prototype.multiply=z.prototype.R;z.prototype.modulo=z.prototype.gb;z.prototype.compare=z.prototype.X;z.prototype.toNumber=z.prototype.ea;z.prototype.toString=z.prototype.toString;z.prototype.getBits=z.prototype.D;z.fromNumber=gt;z.fromString=Fg;var FA=function(){return new No},UA=function(){return pa()},wc=ma,VA=tg,BA=rr,Dd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$A=Es,Ks=ng,qA=ne,jA=at,Sr=z;const Pd="@firebase/firestore";/**
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
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
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
 */let Xr="9.23.0";/**
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
 */const nn=new hs("@firebase/firestore");function Zc(){return nn.logLevel}function zA(n){nn.setLogLevel(n)}function v(n,...e){if(nn.logLevel<=V.DEBUG){const t=e.map(Sl);nn.debug(`Firestore (${Xr}): ${n}`,...t)}}function se(n,...e){if(nn.logLevel<=V.ERROR){const t=e.map(Sl);nn.error(`Firestore (${Xr}): ${n}`,...t)}}function ct(n,...e){if(nn.logLevel<=V.WARN){const t=e.map(Sl);nn.warn(`Firestore (${Xr}): ${n}`,...t)}}function Sl(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function S(n="Unexpected state"){const e=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+n;throw se(e),new Error(e)}function k(n,e){n||S()}function GA(n,e){n||S()}function E(n,e){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends ge{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ye{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ug{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(me.UNAUTHENTICATED))}shutdown(){}}class HA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class WA{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ye;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ye,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ye)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new Ug(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return k(e===null||typeof e=="string"),new me(e)}}class QA{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class YA{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new QA(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JA{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(k(typeof t.token=="string"),this.T=t.token,new XA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Vg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function D(n,e){return n<e?-1:n>e?1:0}function Pr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Bg(n){return n+"\0"}/**
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
 */class J{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new J(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new J(0,0))}static max(){return new A(new J(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zi{constructor(e,t,r){t===void 0?t=0:t>e.length&&S(),r===void 0?r=e.length-t:r>e.length-t&&S(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Zi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends Zi{construct(e,t,r){return new B(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new B(t)}static emptyPath(){return new B([])}}const ek=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Zi{construct(e,t,r){return new oe(e,t,r)}static isValidIdentifier(e){return ek.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(t)}static emptyPath(){return new oe([])}}/**
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
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(B.fromString(e))}static fromName(e){return new T(B.fromString(e).popFirst(5))}static empty(){return new T(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&B.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new B(e.slice()))}}/**
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
 */class $g{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function eu(n){return n.fields.find(e=>e.kind===2)}function Tn(n){return n.fields.filter(e=>e.kind!==2)}$g.UNKNOWN_ID=-1;class tk{constructor(e,t){this.fieldPath=e,this.kind=t}}class xo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new xo(0,et.min())}}function qg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=A.fromTimestamp(r===1e9?new J(t+1,0):new J(t,r));return new et(i,T.empty(),e)}function jg(n){return new et(n.readTime,n.key,-1)}class et{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new et(A.min(),T.empty(),-1)}static max(){return new et(A.max(),T.empty(),-1)}}function Al(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=T.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gn(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==zg)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,r)=>{t(e)})}static reject(e){return new p((t,r)=>{r(e)})}static waitFor(e){return new p((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=p.resolve(!1);for(const r of e)t=t.next(i=>i?p.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new p((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new p((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Ea{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new ye,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Di(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=kl(r.target.error);this.v.reject(new Di(e,i))}}static open(e,t,r,i){try{return new Ea(t,e.transaction(i,r))}catch(s){throw new Di(t,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new rk(t)}}class st{constructor(e,t,r){this.name=e,this.version=t,this.V=r,st.S(Z())===12.2&&se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),En(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Cr())return!1;if(st.C())return!0;const e=Z(),t=st.S(e),r=0<t&&t<10,i=st.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Di(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Di(e,o))},i.onupgradeneeded=s=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Ea.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class nk{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return En(this.L.delete())}}class Di extends y{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function yn(n){return n.name==="IndexedDbTransactionError"}class rk{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),En(r)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),En(this.store.add(e))}get(e){return En(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),En(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),En(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new p((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new p((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){v("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new p((r,i)=>{t.onerror=s=>{const o=kl(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new p((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new nk(a),u=t(a.primaryKey,a.value,c);if(u instanceof p){const l=u.catch(h=>(c.done(),p.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>p.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function En(n){return new p((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=kl(r.target.error);t(i)}})}let xd=!1;function kl(n){const e=st.S(Z());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xd||(xd=!0,setTimeout(()=>{throw r},0)),r}}return n}class ik{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){v("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{v("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){yn(t)?v("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await gn(t)}await this.et(6e4)})}}class sk{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return p.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return v("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(v("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=jg(s);Al(o,r)>0&&(r=o)}),new et(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class je{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}je.ct=-1;function As(n){return n==null}function es(n){return n===0&&1/n==-1/0}function Kg(n){return typeof n=="number"&&Number.isInteger(n)&&!es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ue(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Od(e)),e=ok(n.get(t),e);return Od(e)}function ok(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Od(n){return n+""}function yt(n){const e=n.length;if(k(e>=2),e===2)return k(n.charAt(0)===""&&n.charAt(1)===""),B.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&S(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:S()}s=o+2}return new B(r)}/**
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
 */const Ld=["userId","batchId"];/**
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
 */function ao(n,e){return[n,Ue(e)]}function Hg(n,e,t){return[n,Ue(e),t]}const ak={},ck=["prefixPath","collectionGroup","readTime","documentId"],uk=["prefixPath","collectionGroup","documentId"],lk=["collectionGroup","readTime","prefixPath","documentId"],hk=["canonicalId","targetId"],dk=["targetId","path"],fk=["path","targetId"],pk=["collectionId","parent"],mk=["indexId","uid"],gk=["uid","sequenceNumber"],yk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vk=["indexId","uid","orderedDocumentKey"],wk=["userId","collectionPath","documentId"],_k=["userId","collectionPath","largestBatchId"],Ik=["userId","collectionGroup","largestBatchId"],Wg=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Tk=[...Wg,"documentOverlays"],Qg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Yg=Qg,Ek=[...Yg,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Gg{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function _e(n,e){const t=E(n);return st.M(t.ht,e)}/**
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
 */function Md(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ir(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class G{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new G(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new G(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hs(this.root,e,this.comparator,!0)}}class Hs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Te.RED,this.left=i??Te.EMPTY,this.right=s??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Te(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(n,e,t,r,i){return this}insert(n,e,t){return new Te(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class W{constructor(e){this.comparator=e,this.data=new G(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fd(this.data.getIterator())}getIteratorFrom(e){return new Fd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof W)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new W(this.comparator);return t.data=e,t}}class Fd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(oe.comparator)}static empty(){return new ze([])}unionWith(e){let t=new W(oe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jg("Invalid base64 string: "+i):i}}(e);return new de(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const Sk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(k(!!n),typeof n=="string"){let e=0;const t=Sk.exec(n);if(k(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(n.seconds),nanos:te(n.nanos)}}function te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sn(n){return typeof n=="string"?de.fromBase64String(n):de.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Cl(n){const e=n.mapValue.fields.__previous_value__;return ba(e)?Cl(e):e}function ts(n){const e=rn(n.mapValue.fields.__local_write_time__.timestampValue);return new J(e.seconds,e.nanos)}/**
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
 */class Ak{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class on{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},co={nullValue:"NULL_VALUE"};function Kn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ba(n)?4:Zg(n)?9007199254740991:10:S()}function Et(n,e){if(n===e)return!0;const t=Kn(n);if(t!==Kn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ts(n).isEqual(ts(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=rn(r.timestampValue),o=rn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return sn(r.bytesValue).isEqual(sn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return te(r.geoPointValue.latitude)===te(i.geoPointValue.latitude)&&te(r.geoPointValue.longitude)===te(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return te(r.integerValue)===te(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=te(r.doubleValue),o=te(i.doubleValue);return s===o?es(s)===es(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Pr(n.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Md(s)!==Md(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Et(s[a],o[a])))return!1;return!0}(n,e);default:return S()}}function ns(n,e){return(n.values||[]).find(t=>Et(t,e))!==void 0}function an(n,e){if(n===e)return 0;const t=Kn(n),r=Kn(e);if(t!==r)return D(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=te(i.integerValue||i.doubleValue),a=te(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ud(n.timestampValue,e.timestampValue);case 4:return Ud(ts(n),ts(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,s){const o=sn(i),a=sn(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=D(te(i.latitude),te(s.latitude));return o!==0?o:D(te(i.longitude),te(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=an(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Yt.mapValue&&s===Yt.mapValue)return 0;if(i===Yt.mapValue)return 1;if(s===Yt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=an(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw S()}}function Ud(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=rn(n),r=rn(e),i=D(t.seconds,r.seconds);return i!==0?i:D(t.nanos,r.nanos)}function xr(n){return nu(n)}function nu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=rn(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?sn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,T.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=nu(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${nu(r.fields[a])}`;return s+"}"}(n.mapValue):S();var e,t}function Hn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ru(n){return!!n&&"integerValue"in n}function rs(n){return!!n&&"arrayValue"in n}function Vd(n){return!!n&&"nullValue"in n}function Bd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function uo(n){return!!n&&"mapValue"in n}function Pi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ir(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Pi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Zg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function kk(n){return"nullValue"in n?co:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Hn(on.empty(),T.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:S()}function Ck(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Hn(on.empty(),T.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Yt:S()}function $d(n,e){const t=an(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function qd(n,e){const t=an(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class be{constructor(e){this.value=e}static empty(){return new be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!uo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pi(t)}setAll(e){let t=oe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Pi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());uo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];uo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ir(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new be(Pi(this.value))}}function ey(n){const e=[];return ir(n.fields,(t,r)=>{const i=new oe([t]);if(uo(r)){const s=ey(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ze(e)}/**
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
 */class H{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new H(e,0,A.min(),A.min(),A.min(),be.empty(),0)}static newFoundDocument(e,t,r,i){return new H(e,1,t,A.min(),r,i,0)}static newNoDocument(e,t){return new H(e,2,t,A.min(),A.min(),be.empty(),0)}static newUnknownDocument(e,t){return new H(e,3,t,A.min(),A.min(),be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof H&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cn{constructor(e,t){this.position=e,this.inclusive=t}}function jd(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),t.key):r=an(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ar{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ty{}class M extends ty{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Nk(e,t,r):t==="array-contains"?new xk(e,r):t==="in"?new ay(e,r):t==="not-in"?new Ok(e,r):t==="array-contains-any"?new Lk(e,r):new M(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Dk(e,r):new Pk(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(an(t,this.value)):t!==null&&Kn(this.value)===Kn(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class j extends ty{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new j(e,t)}matches(e){return Or(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Or(n){return n.op==="and"}function iu(n){return n.op==="or"}function Rl(n){return ny(n)&&Or(n)}function ny(n){for(const e of n.filters)if(e instanceof j)return!1;return!0}function su(n){if(n instanceof M)return n.field.canonicalString()+n.op.toString()+xr(n.value);if(Rl(n))return n.filters.map(e=>su(e)).join(",");{const e=n.filters.map(t=>su(t)).join(",");return`${n.op}(${e})`}}function ry(n,e){return n instanceof M?function(t,r){return r instanceof M&&t.op===r.op&&t.field.isEqual(r.field)&&Et(t.value,r.value)}(n,e):n instanceof j?function(t,r){return r instanceof j&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&ry(s,r.filters[o]),!0):!1}(n,e):void S()}function iy(n,e){const t=n.filters.concat(e);return j.create(t,n.op)}function sy(n){return n instanceof M?function(e){return`${e.field.canonicalString()} ${e.op} ${xr(e.value)}`}(n):n instanceof j?function(e){return e.op.toString()+" {"+e.getFilters().map(sy).join(" ,")+"}"}(n):"Filter"}class Nk extends M{constructor(e,t,r){super(e,t,r),this.key=T.fromName(r.referenceValue)}matches(e){const t=T.comparator(e.key,this.key);return this.matchesComparison(t)}}class Dk extends M{constructor(e,t){super(e,"in",t),this.keys=oy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pk extends M{constructor(e,t){super(e,"not-in",t),this.keys=oy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oy(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>T.fromName(r.referenceValue))}class xk extends M{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rs(t)&&ns(t.arrayValue,this.value)}}class ay extends M{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ns(this.value.arrayValue,t)}}class Ok extends M{constructor(e,t){super(e,"not-in",t)}matches(e){if(ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ns(this.value.arrayValue,t)}}class Lk extends M{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ns(this.value.arrayValue,r))}}/**
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
 */class Mk{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function ou(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Mk(n,e,t,r,i,s,o)}function Wn(n){const e=E(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>su(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),As(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xr(r)).join(",")),e.dt=t}return e.dt}function ks(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ry(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zd(n.startAt,e.startAt)&&zd(n.endAt,e.endAt)}function Oo(n){return T.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Lo(n,e){return n.filters.filter(t=>t instanceof M&&t.field.isEqual(e))}function Gd(n,e,t){let r=co,i=!0;for(const s of Lo(n,e)){let o=co,a=!0;switch(s.op){case"<":case"<=":o=kk(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=co}$d({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];$d({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Kd(n,e,t){let r=Yt,i=!0;for(const s of Lo(n,e)){let o=Yt,a=!0;switch(s.op){case">=":case">":o=Ck(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Yt}qd({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];qd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Vt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function cy(n,e,t,r,i,s,o,a){return new Vt(n,e,t,r,i,s,o,a)}function Jr(n){return new Vt(n)}function Hd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nl(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Sa(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Dl(n){return n.collectionGroup!==null}function Un(n){const e=E(n);if(e.wt===null){e.wt=[];const t=Sa(e),r=Nl(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new Ar(t)),e.wt.push(new Ar(oe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ar(oe.keyField(),s))}}}return e.wt}function He(n){const e=E(n);if(!e._t)if(e.limitType==="F")e._t=ou(e.path,e.collectionGroup,Un(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Un(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Ar(s.field,o))}const r=e.endAt?new cn(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new cn(e.startAt.position,e.startAt.inclusive):null;e._t=ou(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function au(n,e){e.getFirstInequalityField(),Sa(n);const t=n.filters.concat([e]);return new Vt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Mo(n,e,t){return new Vt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Cs(n,e){return ks(He(n),He(e))&&n.limitType===e.limitType}function uy(n){return`${Wn(He(n))}|lt:${n.limitType}`}function cu(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>sy(r)).join(", ")}]`),As(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xr(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xr(r)).join(",")),`Target(${t})`}(He(n))}; limitType=${n.limitType})`}function Rs(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):T.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of Un(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=jd(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Un(t),r)||t.endAt&&!function(i,s,o){const a=jd(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Un(t),r))}(n,e)}function ly(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hy(n){return(e,t)=>{let r=!1;for(const i of Un(n)){const s=Fk(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Fk(n,e,t){const r=n.field.isKeyField()?T.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?an(a,c):S()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return S()}}/**
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
 */class vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ir(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Xg(this.inner)}size(){return this.innerSize}}/**
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
 */const Uk=new G(T.comparator);function Ge(){return Uk}const dy=new G(T.comparator);function Ei(...n){let e=dy;for(const t of n)e=e.insert(t.key,t);return e}function fy(n){let e=dy;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function vt(){return xi()}function py(){return xi()}function xi(){return new vn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Vk=new G(T.comparator),Bk=new W(T.comparator);function P(...n){let e=Bk;for(const t of n)e=e.add(t);return e}const $k=new W(D);function Pl(){return $k}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(e)?"-0":e}}function gy(n){return{integerValue:""+n}}function yy(n,e){return Kg(e)?gy(e):my(n,e)}/**
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
 */class Aa{constructor(){this._=void 0}}function qk(n,e,t){return n instanceof Lr?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ba(i)&&(i=Cl(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Qn?wy(n,e):n instanceof Yn?_y(n,e):function(r,i){const s=vy(r,i),o=Wd(s)+Wd(r.gt);return ru(s)&&ru(r.gt)?gy(o):my(r.serializer,o)}(n,e)}function jk(n,e,t){return n instanceof Qn?wy(n,e):n instanceof Yn?_y(n,e):t}function vy(n,e){return n instanceof Mr?ru(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Lr extends Aa{}class Qn extends Aa{constructor(e){super(),this.elements=e}}function wy(n,e){const t=Iy(e);for(const r of n.elements)t.some(i=>Et(i,r))||t.push(r);return{arrayValue:{values:t}}}class Yn extends Aa{constructor(e){super(),this.elements=e}}function _y(n,e){let t=Iy(e);for(const r of n.elements)t=t.filter(i=>!Et(i,r));return{arrayValue:{values:t}}}class Mr extends Aa{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Wd(n){return te(n.integerValue||n.doubleValue)}function Iy(n){return rs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ns{constructor(e,t){this.field=e,this.transform=t}}function zk(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Qn&&r instanceof Qn||t instanceof Yn&&r instanceof Yn?Pr(t.elements,r.elements,Et):t instanceof Mr&&r instanceof Mr?Et(t.gt,r.gt):t instanceof Lr&&r instanceof Lr}(n.transform,e.transform)}class Gk{constructor(e,t){this.version=e,this.transformResults=t}}class X{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new X}static exists(e){return new X(void 0,e)}static updateTime(e){return new X(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ka{}function Ty(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ei(n.key,X.none()):new Zr(n.key,n.data,X.none());{const t=n.data,r=be.empty();let i=new W(oe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bt(n.key,r,new ze(i.toArray()),X.none())}}function Kk(n,e,t){n instanceof Zr?function(r,i,s){const o=r.value.clone(),a=Yd(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Bt?function(r,i,s){if(!lo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Yd(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Ey(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Oi(n,e,t,r){return n instanceof Zr?function(i,s,o,a){if(!lo(i.precondition,s))return o;const c=i.value.clone(),u=Xd(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Bt?function(i,s,o,a){if(!lo(i.precondition,s))return o;const c=Xd(i.fieldTransforms,a,s),u=s.data;return u.setAll(Ey(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return lo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function Hk(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=vy(r.transform,i||null);s!=null&&(t===null&&(t=be.empty()),t.set(r.field,s))}return t||null}function Qd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Pr(t,r,(i,s)=>zk(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zr extends ka{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bt extends ka{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ey(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Yd(n,e,t){const r=new Map;k(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jk(o,a,t[i]))}return r}function Xd(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,qk(s,o,e))}return r}class ei extends ka{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xl extends ka{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ol{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Kk(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Oi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Oi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=py();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Ty(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),P())}isEqual(e){return this.batchId===e.batchId&&Pr(this.mutations,e.mutations,(t,r)=>Qd(t,r))&&Pr(this.baseMutations,e.baseMutations,(t,r)=>Qd(t,r))}}class Ll{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){k(e.mutations.length===r.length);let i=Vk;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ll(e,t,r,i)}}/**
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
 */class Ml{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ue,U;function by(n){switch(n){default:return S();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Sy(n){if(n===void 0)return se("GRPC error has no .code"),m.UNKNOWN;switch(n){case ue.OK:return m.OK;case ue.CANCELLED:return m.CANCELLED;case ue.UNKNOWN:return m.UNKNOWN;case ue.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ue.INTERNAL:return m.INTERNAL;case ue.UNAVAILABLE:return m.UNAVAILABLE;case ue.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ue.NOT_FOUND:return m.NOT_FOUND;case ue.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ue.ABORTED:return m.ABORTED;case ue.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ue.DATA_LOSS:return m.DATA_LOSS;default:return S()}}(U=ue||(ue={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Fl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ws}static getOrCreateInstance(){return Ws===null&&(Ws=new Fl),Ws}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ws=null;/**
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
 */function Ay(){return new TextEncoder}/**
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
 */const Qk=new Sr([4294967295,4294967295],0);function Jd(n){const e=Ay().encode(n),t=new jA;return t.update(e),new Uint8Array(t.digest())}function Zd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Sr([t,r],0),new Sr([i,s],0)]}class Ul{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new bi(`Invalid padding: ${t}`);if(r<0)throw new bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new bi(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Sr.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(Sr.fromNumber(r)));return i.compare(Qk)===1&&(i=new Sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Jd(e),[r,i]=Zd(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ul(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Jd(e),[r,i]=Zd(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ds{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ps.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ds(A.min(),i,new G(D),Ge(),P())}}class Ps{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ps(r,t,P(),P(),P())}}/**
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
 */class ho{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class ky{constructor(e,t){this.targetId=e,this.Vt=t}}class Cy{constructor(e,t,r=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ef{constructor(){this.St=0,this.Dt=nf(),this.Ct=de.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=P(),t=P(),r=P();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:S()}}),new Ps(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=nf()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Yk{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ge(),this.zt=tf(),this.Wt=new G(D)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Oo(o))if(i===0){const a=new T(o.path);this.Yt(r,a,H.newNoDocument(a,A.min()))}else k(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(t=Fl.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,f,g,_,I,x;const L={localCacheCount:l,existenceFilterCount:h.count},R=h.unchangedNames;return R&&(L.bloomFilter={applied:u===0,hashCount:(d=R==null?void 0:R.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(_=(g=(f=R==null?void 0:R.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&_!==void 0?_:0,padding:(x=(I=R==null?void 0:R.bits)===null||I===void 0?void 0:I.padding)!==null&&x!==void 0?x:0}),L}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=sn(s).toUint8Array()}catch(l){if(l instanceof Jg)return ct("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Ul(c,o,a)}catch(l){return ct(l instanceof bi?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Oo(a.target)){const c=new T(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,H.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=P();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Ds(e,t,this.Wt,this.jt,r);return this.jt=Ge(),this.zt=tf(),this.Wt=new G(D),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new ef,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new W(D),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ef),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function tf(){return new G(T.comparator)}function nf(){return new G(T.comparator)}const Xk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Zk=(()=>({and:"AND",or:"OR"}))();class eC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uu(n,e){return n.useProto3Json||As(e)?e:{value:e}}function Fr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ry(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tC(n,e){return Fr(n,e.toTimestamp())}function ae(n){return k(!!n),A.fromTimestamp(function(e){const t=rn(e);return new J(t.seconds,t.nanos)}(n))}function Vl(n,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Ny(n){const e=B.fromString(n);return k(Vy(e)),e}function is(n,e){return Vl(n.databaseId,e.path)}function _t(n,e){const t=Ny(e);if(t.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new T(Py(t))}function lu(n,e){return Vl(n.databaseId,e)}function Dy(n){const e=Ny(n);return e.length===4?B.emptyPath():Py(e)}function ss(n){return new B(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Py(n){return k(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rf(n,e,t){return{name:is(n,e),fields:t.value.mapValue.fields}}function xy(n,e,t){const r=_t(n,e.name),i=ae(e.updateTime),s=e.createTime?ae(e.createTime):A.min(),o=new be({mapValue:{fields:e.fields}}),a=H.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function nC(n,e){return"found"in e?function(t,r){k(!!r.found),r.found.name,r.found.updateTime;const i=_t(t,r.found.name),s=ae(r.found.updateTime),o=r.found.createTime?ae(r.found.createTime):A.min(),a=new be({mapValue:{fields:r.found.fields}});return H.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){k(!!r.missing),k(!!r.readTime);const i=_t(t,r.missing),s=ae(r.readTime);return H.newNoDocument(i,s)}(n,e):S()}function rC(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(k(u===void 0||typeof u=="string"),de.fromBase64String(u||"")):(k(u===void 0||u instanceof Uint8Array),de.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Sy(c.code);return new y(u,c.message||"")}(o);t=new Cy(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_t(n,r.document.name),s=ae(r.document.updateTime),o=r.document.createTime?ae(r.document.createTime):A.min(),a=new be({mapValue:{fields:r.document.fields}}),c=H.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new ho(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_t(n,r.document),s=r.readTime?ae(r.readTime):A.min(),o=H.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_t(n,r.document),s=r.removedTargetIds||[];t=new ho([],s,i,null)}else{if(!("filter"in e))return S();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Wk(i,s),a=r.targetId;t=new ky(a,o)}}return t}function os(n,e){let t;if(e instanceof Zr)t={update:rf(n,e.key,e.value)};else if(e instanceof ei)t={delete:is(n,e.key)};else if(e instanceof Bt)t={update:rf(n,e.key,e.data),updateMask:uC(e.fieldMask)};else{if(!(e instanceof xl))return S();t={verify:is(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Lr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Qn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Yn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Mr)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw S()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:tC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(n,e.precondition)),t}function hu(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?X.updateTime(ae(i.updateTime)):i.exists!==void 0?X.exists(i.exists):X.none()}(e.currentDocument):X.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)k(o.setToServerValue==="REQUEST_TIME"),a=new Lr;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Qn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Yn(u)}else"increment"in o?a=new Mr(s,o.increment):S();const c=oe.fromServerFormat(o.fieldPath);return new Ns(c,a)}(n,i)):[];if(e.update){e.update.name;const i=_t(n,e.update.name),s=new be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new ze(c.map(u=>oe.fromServerFormat(u)))}(e.updateMask);return new Bt(i,s,o,t,r)}return new Zr(i,s,t,r)}if(e.delete){const i=_t(n,e.delete);return new ei(i,t)}if(e.verify){const i=_t(n,e.verify);return new xl(i,t)}return S()}function iC(n,e){return n&&n.length>0?(k(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?ae(r.updateTime):ae(i);return s.isEqual(A.min())&&(s=ae(i)),new Gk(s,r.transformResults||[])}(t,e))):[]}function Oy(n,e){return{documents:[lu(n,e.path)]}}function Ly(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=lu(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=lu(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Uy(j.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:pr(l.field),direction:oC(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=uu(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function My(n){let e=Dy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){k(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=Fy(l);return h instanceof j&&Rl(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Ar(mr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,As(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new cn(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new cn(d,h)}(t.endAt)),cy(e,i,o,s,a,"F",c,u)}function sC(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fy(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=mr(e.unaryFilter.field);return M.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=mr(e.unaryFilter.field);return M.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(e.unaryFilter.field);return M.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=mr(e.unaryFilter.field);return M.create(s,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(e){return M.create(mr(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return j.create(e.compositeFilter.filters.map(t=>Fy(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(n):S()}function oC(n){return Xk[n]}function aC(n){return Jk[n]}function cC(n){return Zk[n]}function pr(n){return{fieldPath:n.canonicalString()}}function mr(n){return oe.fromServerFormat(n.fieldPath)}function Uy(n){return n instanceof M?function(e){if(e.op==="=="){if(Bd(e.value))return{unaryFilter:{field:pr(e.field),op:"IS_NAN"}};if(Vd(e.value))return{unaryFilter:{field:pr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bd(e.value))return{unaryFilter:{field:pr(e.field),op:"IS_NOT_NAN"}};if(Vd(e.value))return{unaryFilter:{field:pr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pr(e.field),op:aC(e.op),value:e.value}}}(n):n instanceof j?function(e){const t=e.getFilters().map(r=>Uy(r));return t.length===1?t[0]:{compositeFilter:{op:cC(e.op),filters:t}}}(n):S()}function uC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ct{constructor(e,t,r,i,s=A.min(),o=A.min(),a=de.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class By{constructor(e){this.fe=e}}function lC(n,e){let t;if(e.document)t=xy(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=T.fromSegments(e.noDocument.path),i=Jn(e.noDocument.readTime);t=H.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return S();{const r=T.fromSegments(e.unknownDocument.path),i=Jn(e.unknownDocument.version);t=H.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new J(r[0],r[1]);return A.fromTimestamp(i)}(e.readTime)),t}function sf(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Fo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:is(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Fr(i,s.version.toTimestamp()),createTime:Fr(i,s.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Xn(e.version)};else{if(!e.isUnknownDocument())return S();r.unknownDocument={path:t.path.toArray(),version:Xn(e.version)}}return r}function Fo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Xn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Jn(n){const e=new J(n.seconds,n.nanoseconds);return A.fromTimestamp(e)}function bn(n,e){const t=(e.baseMutations||[]).map(s=>hu(n.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>hu(n.fe,s)),i=J.fromMillis(e.localWriteTimeMs);return new Ol(e.batchId,i,t,r)}function Si(n){const e=Jn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Jn(n.lastLimboFreeSnapshotVersion):A.min();let r;var i;return n.query.documents!==void 0?(k((i=n.query).documents.length===1),r=He(Jr(Dy(i.documents[0])))):r=function(s){return He(My(s))}(n.query),new Ct(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,de.fromBase64String(n.resumeToken))}function $y(n,e){const t=Xn(e.snapshotVersion),r=Xn(e.lastLimboFreeSnapshotVersion);let i;i=Oo(e.target)?Oy(n.fe,e.target):Ly(n.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Wn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Bl(n){const e=My({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mo(e,e.limit,"L"):e}function _c(n,e){return new Ml(e.largestBatchId,hu(n.fe,e.overlayMutation))}function of(n,e){const t=e.path.lastSegment();return[n,Ue(e.path.popLast()),t]}function af(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Xn(r.readTime),documentKey:Ue(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{getBundleMetadata(e,t){return cf(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Jn(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return cf(e).put({bundleId:(r=t).id,createTime:Xn(ae(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return uf(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:Bl(i.bundledQuery),readTime:Jn(i.readTime)};var i})}saveNamedQuery(e,t){return uf(e).put(function(r){return{name:r.name,readTime:Xn(ae(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function cf(n){return _e(n,"bundles")}function uf(n){return _e(n,"namedQueries")}/**
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
 */class Ca{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new Ca(e,r)}getOverlay(e,t){return hi(e).get(of(this.userId,t)).next(r=>r?_c(this.serializer,r):null)}getOverlays(e,t){const r=vt();return p.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Ml(t,o);i.push(this.we(e,a))}),p.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ue(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(hi(e).J("collectionPathOverlayIndex",a))}),p.waitFor(s)}getOverlaysForCollection(e,t,r){const i=vt(),s=Ue(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return hi(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=_c(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=vt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return hi(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=_c(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}we(e,t){return hi(e).put(function(r,i,s){const[o,a,c]=of(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:os(r.fe,s.mutation)}}(this.serializer,this.userId,t))}}function hi(n){return _e(n,"documentOverlays")}/**
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
 */class Sn{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(te(e.integerValue));else if("doubleValue"in e){const r=te(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),es(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(sn(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?Zg(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):S()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const i of Object.keys(r))this.Te(i,t),this.me(r[i],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const i of r)this.me(i,t)}ve(e,t){this.ye(t,37),T.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Sn.Ve=new Sn;function dC(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function lf(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=dC(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class fC{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=t.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=t.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const t=this.Fe(e),r=lf(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Le(e){const t=this.Fe(e),r=lf(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class pC{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class mC{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class di{constructor(){this.je=new fC,this.ze=new pC(this.je),this.We=new mC(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class An{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new An(this.indexId,this.documentKey,this.arrayValue,r)}}function jt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=hf(n.arrayValue,e.arrayValue),t!==0?t:(t=hf(n.directionalValue,e.directionalValue),t!==0?t:T.comparator(n.documentKey,e.documentKey)))}function hf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class gC{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){k(e.collectionGroup===this.collectionId);const t=eu(e);if(t!==void 0&&!this.en(t))return!1;const r=Tn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function qy(n){var e,t;if(k(n instanceof M||n instanceof j),n instanceof M){if(n instanceof ay){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>M.create(n.field,"==",s)))||[];return j.create(i,"or")}return n}const r=n.filters.map(i=>qy(i));return j.create(r,n.op)}function yC(n){if(n.getFilters().length===0)return[];const e=pu(qy(n));return k(jy(e)),du(e)||fu(e)?[e]:e.getFilters()}function du(n){return n instanceof M}function fu(n){return n instanceof j&&Rl(n)}function jy(n){return du(n)||fu(n)||function(e){if(e instanceof j&&iu(e)){for(const t of e.getFilters())if(!du(t)&&!fu(t))return!1;return!0}return!1}(n)}function pu(n){if(k(n instanceof M||n instanceof j),n instanceof M)return n;if(n.filters.length===1)return pu(n.filters[0]);const e=n.filters.map(r=>pu(r));let t=j.create(e,n.op);return t=Uo(t),jy(t)?t:(k(t instanceof j),k(Or(t)),k(t.filters.length>1),t.filters.reduce((r,i)=>$l(r,i)))}function $l(n,e){let t;return k(n instanceof M||n instanceof j),k(e instanceof M||e instanceof j),t=n instanceof M?e instanceof M?function(r,i){return j.create([r,i],"and")}(n,e):df(n,e):e instanceof M?df(e,n):function(r,i){if(k(r.filters.length>0&&i.filters.length>0),Or(r)&&Or(i))return iy(r,i.getFilters());const s=iu(r)?r:i,o=iu(r)?i:r,a=s.filters.map(c=>$l(c,o));return j.create(a,"or")}(n,e),Uo(t)}function df(n,e){if(Or(e))return iy(e,n.getFilters());{const t=e.filters.map(r=>$l(n,r));return j.create(t,"or")}}function Uo(n){if(k(n instanceof M||n instanceof j),n instanceof M)return n;const e=n.getFilters();if(e.length===1)return Uo(e[0]);if(ny(n))return n;const t=e.map(i=>Uo(i)),r=[];return t.forEach(i=>{i instanceof M?r.push(i):i instanceof j&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:j.create(r,n.op)}/**
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
 */class vC{constructor(){this.rn=new ql}addToCollectionParentIndex(e,t){return this.rn.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(et.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(et.min())}updateCollectionGroup(e,t,r){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class ql{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new W(B.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new W(B.comparator)).toArray()}}/**
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
 */const Qs=new Uint8Array(0);class wC{constructor(e,t){this.user=e,this.databaseId=t,this.on=new ql,this.un=new vn(r=>Wn(r),(r,i)=>ks(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:Ue(i)};return ff(e).put(s)}return p.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Bg(t),""],!1,!0);return ff(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(yt(o.parent))}return r})}addFieldIndex(e,t){const r=Ys(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=pi(e);return s.next(a=>{o.put(af(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ys(e),i=pi(e),s=fi(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=fi(e);let i=!0;const s=new Map;return p.forEach(this.cn(t),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=P();const a=[];return p.forEach(s,(c,u)=>{var l;v("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(R=>`${R.fieldPath}:${R.kind}`).join(",")}`} to execute ${Wn(t)}`);const h=function(R,O){const q=eu(O);if(q===void 0)return null;for(const F of Lo(R,q.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(u,c),d=function(R,O){const q=new Map;for(const F of Tn(O))for(const ie of Lo(R,F.fieldPath))switch(ie.op){case"==":case"in":q.set(F.fieldPath.canonicalString(),ie.value);break;case"not-in":case"!=":return q.set(F.fieldPath.canonicalString(),ie.value),Array.from(q.values())}return null}(u,c),f=function(R,O){const q=[];let F=!0;for(const ie of Tn(O)){const xe=ie.kind===0?Gd(R,ie.fieldPath,R.startAt):Kd(R,ie.fieldPath,R.startAt);q.push(xe.value),F&&(F=xe.inclusive)}return new cn(q,F)}(u,c),g=function(R,O){const q=[];let F=!0;for(const ie of Tn(O)){const xe=ie.kind===0?Kd(R,ie.fieldPath,R.endAt):Gd(R,ie.fieldPath,R.endAt);q.push(xe.value),F&&(F=xe.inclusive)}return new cn(q,F)}(u,c),_=this.hn(c,u,f),I=this.hn(c,u,g),x=this.ln(c,u,d),L=this.fn(c.indexId,h,_,f.inclusive,I,g.inclusive,x);return p.forEach(L,R=>r.H(R,t.limit).next(O=>{O.forEach(q=>{const F=T.fromSegments(q.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return p.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=yC(j.create(e.filters,"and")).map(r=>ou(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/u]):Qs,f=this.wn(e,d,r[h%u],i),g=this._n(e,d,s[h%u],o),_=a.map(I=>this.wn(e,d,I,!0));l.push(...this.createRange(f,g,_))}return l}wn(e,t,r,i){const s=new An(e,T.empty(),t,r);return i?s:s.Je()}_n(e,t,r,i){const s=new An(e,T.empty(),t,r);return i?s.Je():s}an(e,t){const r=new gC(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return p.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new W(oe.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}mn(e,t){const r=new di;for(const i of Tn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Sn.Ve._e(s,o)}return r.Qe()}dn(e){const t=new di;return Sn.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new di;return Sn.Ve._e(Hn(this.databaseId,t),r.He(function(i){const s=Tn(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new di);let s=0;for(const o of Tn(e)){const a=r[s++];for(const c of i)if(this.yn(t,o.fieldPath)&&rs(a))i=this.pn(i,o,a);else{const u=c.He(o.kind);Sn.Ve._e(a,u)}}return this.In(i)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new di;c.seed(a.Qe()),Sn.Ve._e(o,c.He(t.kind)),s.push(c)}return s}yn(e,t){return!!e.filters.find(r=>r instanceof M&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ys(e),i=pi(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return p.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new xo(l.sequenceNumber,new et(Jn(l.readTime),new T(yt(l.documentKey)),l.largestBatchId)):xo.empty(),d=u.fields.map(([f,g])=>new tk(oe.fromServerFormat(f),g));return new $g(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:D(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ys(e),s=pi(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>p.forEach(a,c=>s.put(af(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return p.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?p.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),p.forEach(a,c=>this.En(e,i,c).next(u=>{const l=this.An(s,c);return u.isEqual(l)?p.resolve():this.vn(e,s,c,u,l)}))))})}Rn(e,t,r,i){return fi(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,i){return fi(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const i=fi(e);let s=new W(jt);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new An(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,t){let r=new W(jt);const i=this.mn(t,e);if(i==null)return r;const s=eu(t);if(s!=null){const o=e.data.field(s.fieldPath);if(rs(o))for(const a of o.arrayValue.values||[])r=r.add(new An(t.indexId,e.key,this.dn(a),i))}else r=r.add(new An(t.indexId,e.key,Qs,i));return r}vn(e,t,r,i,s){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let g=hr(d),_=hr(f);for(;g||_;){let I=!1,x=!1;if(g&&_){const L=u(g,_);L<0?x=!0:L>0&&(I=!0)}else g!=null?x=!0:I=!0;I?(l(_),_=hr(f)):x?(h(g),g=hr(d)):(g=hr(d),_=hr(f))}}(i,s,jt,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),p.waitFor(o)}Tn(e){let t=1;return pi(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>jt(o,a)).filter((o,a,c)=>!a||jt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=jt(o,e),c=jt(o,t);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Qs,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Qs,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return jt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(pf)}getMinOffset(e,t){return p.mapArray(this.cn(t),r=>this.an(e,r).next(i=>i||S())).next(pf)}}function ff(n){return _e(n,"collectionParents")}function fi(n){return _e(n,"indexEntries")}function Ys(n){return _e(n,"indexConfiguration")}function pi(n){return _e(n,"indexState")}function pf(n){k(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Al(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new et(e.readTime,e.documentKey,t)}/**
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
 */const mf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $e{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new $e(e,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{k(a===1)}));const u=[];for(const l of t.mutations){const h=Hg(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return p.waitFor(s).next(()=>u)}function Vo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw S();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */$e.DEFAULT_COLLECTION_PERCENTILE=10,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$e.DEFAULT=new $e(41943040,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$e.DISABLED=new $e(-1,0,0);class Ra{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,t,r,i){k(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ra(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=gr(e),o=zt(e);return o.add({}).next(a=>{k(typeof a=="number");const c=new Ol(a,t,r,i),u=function(d,f,g){const _=g.baseMutations.map(x=>os(d.fe,x)),I=g.mutations.map(x=>os(d.fe,x));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:_,mutations:I}}(this.serializer,this.userId,c),l=[];let h=new W((d,f)=>D(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Hg(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,ak))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),p.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return zt(e).get(t).next(r=>r?(k(r.userId===this.userId),bn(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?p.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return zt(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(k(a.batchId>=r),s=bn(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return zt(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).j("userMutationsIndex",t).next(r=>r.map(i=>bn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ao(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return gr(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=yt(l);if(u===this.userId&&t.path.isEqual(d))return zt(e).get(h).next(f=>{if(!f)throw S();k(f.userId===this.userId),s.push(bn(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new W(D);const i=[];return t.forEach(s=>{const o=ao(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=gr(e).X({range:a},(u,l,h)=>{const[d,f,g]=u,_=yt(f);d===this.userId&&s.path.isEqual(_)?r=r.add(g):h.done()});i.push(c)}),p.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=ao(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new W(D);return gr(e).X({range:o},(c,u,l)=>{const[h,d,f]=c,g=yt(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(zt(e).get(s).next(o=>{if(o===null)throw S();k(o.userId===this.userId),r.push(bn(this.serializer,o))}))}),p.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return zy(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),p.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return p.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return gr(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=yt(s[1]);i.push(c)}else a.done()}).next(()=>{k(i.length===0)})})}containsKey(e,t){return Gy(e,this.userId,t)}xn(e){return Ky(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Gy(n,e,t){const r=ao(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return gr(n).X({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function zt(n){return _e(n,"mutations")}function gr(n){return _e(n,"documentMutations")}function Ky(n){return _e(n,"mutationQueues")}/**
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
 */class Zn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Zn(0)}static Mn(){return new Zn(-1)}}/**
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
 */class _C{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new Zn(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>A.fromTimestamp(new J(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>dr(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(k(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return dr(e).X((o,a)=>{const c=Si(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>p.waitFor(s)).next(()=>i)}forEachTarget(e,t){return dr(e).X((r,i)=>{const s=Si(i);t(s)})}$n(e){return gf(e).get("targetGlobalKey").next(t=>(k(t!==null),t))}On(e,t){return gf(e).put("targetGlobalKey",t)}Fn(e,t){return dr(e).put($y(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Wn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return dr(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Si(a);ks(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Kt(e);return t.forEach(o=>{const a=Ue(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),p.waitFor(i)}removeMatchingKeys(e,t,r){const i=Kt(e);return p.forEach(t,s=>{const o=Ue(s.path);return p.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Kt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Kt(e);let s=P();return i.X({range:r,Y:!0},(o,a,c)=>{const u=yt(o[1]),l=new T(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Ue(t.path),i=IDBKeyRange.bound([r],[Bg(r)],!1,!0);let s=0;return Kt(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,t){return dr(e).get(t).next(r=>r?Si(r):null)}}function dr(n){return _e(n,"targets")}function gf(n){return _e(n,"targetGlobal")}function Kt(n){return _e(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf([n,e],[t,r]){const i=D(n,t);return i===0?D(e,r):i}class IC{constructor(e){this.Ln=e,this.buffer=new W(yf),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class TC{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){v("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yn(t)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await gn(t)}await this.Qn(3e5)})}}class EC{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return p.resolve(je.ct);const r=new IC(t);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(mf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mf):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Zc()<=V.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function bC(n,e){return new EC(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,t){this.db=e,this.garbageCollector=bC(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return Xs(e,r)}removeReference(e,t,r){return Xs(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Xs(e,t)}Xn(e,t){return function(r,i){let s=!1;return Ky(r).Z(o=>Gy(r,o,i).next(a=>(a&&(s=!0),p.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,A.min()),Kt(e).delete([0,Ue(o.path)])))});i.push(c)}}).next(()=>p.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Xs(e,t)}Yn(e,t){const r=Kt(e);let i,s=je.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==je.ct&&t(new T(yt(i)),s),s=u,i=c):s=je.ct}).next(()=>{s!==je.ct&&t(new T(yt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xs(n,e){return Kt(n).put(function(t,r){return{targetId:0,path:Ue(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class Hy{constructor(){this.changes=new vn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,H.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?p.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AC{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return _n(e).put(r)}removeEntry(e,t,r){return _n(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Fo(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=H.newInvalidDocument(t);return _n(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(mi(t))},(i,s)=>{r=this.ts(t,s)}).next(()=>r)}es(e,t){let r={size:0,document:H.newInvalidDocument(t)};return _n(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(mi(t))},(i,s)=>{r={document:this.ts(t,s),size:Vo(s)}}).next(()=>r)}getEntries(e,t){let r=Ge();return this.ns(e,t,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,t){let r=Ge(),i=new G(T.comparator);return this.ns(e,t,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,Vo(o))}).next(()=>({documents:r,rs:i}))}ns(e,t,r){if(t.isEmpty())return p.resolve();let i=new W(_f);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(mi(i.first()),mi(i.last())),o=i.getIterator();let a=o.getNext();return _n(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=T.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&_f(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(mi(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Fo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return _n(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Ge();for(const l of c){const h=this.ts(T.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Rs(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Ge();const o=wf(t,r),a=wf(t,et.max());return _n(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.ts(T.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new kC(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return vf(e).get("remoteDocumentGlobalKey").next(t=>(k(!!t),t))}Zn(e,t){return vf(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=lC(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(A.min())))return r}return H.newInvalidDocument(e)}}function Wy(n){return new AC(n)}class kC extends Hy{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new vn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new W((s,o)=>D(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(t.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=sf(this.os.serializer,o);i=i.add(s.path.popLast());const u=Vo(c);r+=u-a.size,t.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=sf(this.os.serializer,o.convertToNoDocument(A.min()));t.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.os.updateMetadata(e,r)),p.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function vf(n){return _e(n,"remoteDocumentGlobal")}function _n(n){return _e(n,"remoteDocumentsV14")}function mi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function wf(n,e){const t=e.documentKey.path.toArray();return[n,Fo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function _f(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=D(t[s],r[s]),i)return i;return i=D(t.length,r.length),i||(i=D(t[t.length-2],r[r.length-2]),i||D(t[t.length-1],r[r.length-1]))}/**
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
 */class CC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Qy{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Oi(r.mutation,i,ze.empty(),J.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,P()).next(()=>r))}getLocalViewOfDocuments(e,t,r=P()){const i=vt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ei();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=vt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,P()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ge();const o=xi(),a=xi();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Bt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Oi(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,ze.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new CC(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=xi();let i=new G((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||ze.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||P()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=py();l.forEach(d=>{if(!s.has(d)){const f=Ty(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):p.resolve(vt());let a=-1,c=s;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,P())).next(l=>({batchId:a,changes:fy(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new T(t)).next(r=>{let i=Ei();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=Ei();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Vt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,H.newInvalidDocument(u)))});let o=Ei();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Oi(u.mutation,c,ze.empty(),J.now()),Rs(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return p.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:ae(r.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:Bl(r.bundledQuery),readTime:ae(r.readTime)}}(t)),p.resolve()}}/**
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
 */class NC{constructor(){this.overlays=new G(T.comparator),this.ls=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vt();return p.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),p.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),p.resolve()}getOverlaysForCollection(e,t,r){const i=vt(),s=t.length+1,o=new T(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new G((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=vt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=vt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ml(t,r));let s=this.ls.get(t);s===void 0&&(s=P(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
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
 */class jl{constructor(){this.fs=new W(pe.ds),this.ws=new W(pe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new pe(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new pe(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new T(new B([])),r=new pe(t,e),i=new pe(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new T(new B([])),r=new pe(t,e),i=new pe(t,e+1);let s=P();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new pe(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return T.comparator(e.key,t.key)||D(e.As,t.As)}static _s(e,t){return D(e.As,t.As)||T.comparator(e.key,t.key)}}/**
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
 */class DC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new W(pe.ds)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ol(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new W(D);return t.forEach(i=>{const s=new pe(i,0),o=new pe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),p.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new pe(new T(s),0);let a=new W(D);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),p.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){k(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return p.forEach(t.mutations,i=>{const s=new pe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new pe(t,0),i=this.Rs.firstAfterOrEqual(r);return p.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class PC{constructor(e){this.Ds=e,this.docs=new G(T.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return p.resolve(r?r.document.mutableCopy():H.newInvalidDocument(t))}getEntries(e,t){let r=Ge();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():H.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ge();const o=t.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Al(jg(l),r)<=0||(i.has(l.key)||Rs(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(e,t,r,i){S()}Cs(e,t){return p.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xC(this)}getSize(e){return p.resolve(this.size)}}class xC extends Hy{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),p.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
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
 */class OC{constructor(e){this.persistence=e,this.xs=new vn(t=>Wn(t),ks),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Ns=0,this.ks=new jl,this.targetCount=0,this.Ms=Zn.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),p.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.Fn(t),p.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return p.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),p.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),p.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return p.resolve(r)}containsKey(e,t){return p.resolve(this.ks.containsKey(t))}}/**
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
 */class Yy{constructor(e,t){this.$s={},this.overlays={},this.Os=new je(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new OC(this),this.indexManager=new vC,this.remoteDocumentCache=function(r){return new PC(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new By(t),this.qs=new RC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new DC(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const i=new LC(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return p.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class LC extends Gg{constructor(e){super(),this.currentSequenceNumber=e}}class Na{constructor(e){this.persistence=e,this.Qs=new jl,this.js=null}static zs(e){return new Na(e)}get Ws(){if(this.js)return this.js;throw S()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),p.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),p.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ws,r=>{const i=T.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,A.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return p.or([()=>p.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Ea("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ld,{unique:!0}),a.createObjectStore("documentMutations")}(e),If(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=p.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),If(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:A.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ld,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return p.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:wk});c.createIndex("collectionPathOverlayIndex",_k,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Ik,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:ck});c.createIndex("documentKeyIndex",uk),c.createIndex("collectionGroupIndex",lk)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:mk}).createIndex("sequenceNumberIndex",gk,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:yk}).createIndex("documentKeyIndex",vk,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=Vo(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>p.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>p.forEach(a,c=>{k(c.userId===s.userId);const u=bn(this.serializer,c);return zy(e,s.userId,u).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new B(o),u=function(l){return[0,Ue(l)]}(c);s.push(t.get(u).next(l=>l?p.resolve():(h=>t.put({targetId:0,path:Ue(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>p.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:pk});const r=t.store("collectionParents"),i=new ql,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ue(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new B(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=yt(a);return s(l.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,i)=>{const s=Si(i),o=$y(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new T(B.fromString(u.document.name).popFirst(5)):u.noDocument?T.fromSegments(u.noDocument.path):u.unknownDocument?T.fromSegments(u.unknownDocument.path):S()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>p.waitFor(i))}si(e,t){const r=t.store("mutations"),i=Wy(this.serializer),s=new Yy(Na.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:P();bn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),p.forEach(a,(c,u)=>{const l=new me(u),h=Ca.de(this.serializer,l),d=s.getIndexManager(l),f=Ra.de(l,this.serializer,d,s.referenceDelegate);return new Qy(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new tu(t,je.ct),c).next()})})}}function If(n){n.createObjectStore("targetDocuments",{keyPath:dk}).createIndex("documentTargetsIndex",fk,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hk,{unique:!0}),n.createObjectStore("targetGlobal")}const Ic="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class zl{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=l,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!zl.D())throw new y(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new SC(this,i),this.di=t+"main",this.serializer=new By(c),this.wi=new st(this.di,this.ui,new MC(this.serializer)),this.Bs=new _C(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Wy(this.serializer),this.qs=new hC,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&se("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Ic);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new je(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Js(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(yn(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return gi(e).get("owner").next(t=>p.resolve(this.Ri(t)))}Pi(e){return Js(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=_e(t,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return p.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?p.resolve(!0):gi(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Ic);return!1}}return!(!this.networkEnabled||!this.inForeground)||Js(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new tu(e,je.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Js(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return Ra.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new wC(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Ca.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){v("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?Ek:o===14?Yg:o===13?Qg:o===12?Tk:o===11?Wg:void S();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new tu(c,this.Os?this.Os.next():je.ct),t==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new y(m.FAILED_PRECONDITION,zg);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return gi(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(m.FAILED_PRECONDITION,Ic)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return gi(e).put("owner",t)}static D(){return st.D()}Ai(e){const t=gi(e);return t.get("owner").next(r=>this.Ri(r)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):p.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(se(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;Mw()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return se("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){se("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function gi(n){return _e(n,"owner")}function Js(n){return _e(n,"clientMetadata")}function Gl(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Kl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=P(),i=P();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Kl(e,t.fromCache,r,i)}}/**
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
 */class Xy{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(Hd(t))return p.resolve(null);let r=He(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Mo(t,null,"F"),r=He(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=P(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,Mo(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,r,i){return Hd(t)||i.isEqual(A.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(Zc()<=V.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cu(t)),this.Wi(e,o,t,qg(i,-1)))})}ji(e,t){let r=new W(hy(e));return t.forEach((i,s)=>{Rs(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return Zc()<=V.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",cu(t)),this.Ui.getDocumentsMatchingQuery(e,t,et.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new G(D),this.Yi=new vn(s=>Wn(s),ks),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qy(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function Jy(n,e,t,r){return new FC(n,e,t,r)}async function Zy(n,e){const t=E(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=P();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function UC(n,e){const t=E(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const _=c.docVersions.get(f);k(_!==null),g.version.compareTo(_)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=P();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function ev(n){const e=E(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function VC(n,e){const t=E(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(de.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(g,_,I){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,l)&&a.push(t.Bs.updateTargetData(s,f))});let c=Ge(),u=P();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(tv(s,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!r.isEqual(A.min())){const l=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function tv(n,e,t){let r=P(),i=P();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ge();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function BC(n,e){const t=E(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ur(n,e){const t=E(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,p.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new Ct(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function Vr(n,e,t){const r=E(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Bo(n,e,t){const r=E(n);let i=A.min(),s=P();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=E(a),h=l.Yi.get(u);return h!==void 0?p.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(r,o,He(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:A.min(),t?s:P())).next(a=>(iv(r,ly(e),a),{documents:a,ir:s})))}function nv(n,e){const t=E(n),r=E(t.Bs),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function rv(n,e){const t=E(n),r=t.Xi.get(e)||A.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Zi.getAllFromCollectionGroup(i,e,qg(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(iv(t,e,i),i))}function iv(n,e,t){let r=n.Xi.get(e)||A.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function $C(n,e,t,r){const i=E(n);let s=P(),o=Ge();for(const u of t){const l=e.rr(u.metadata.name);u.document&&(s=s.add(l));const h=e.ur(u);h.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Ur(i,function(u){return He(Jr(B.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>tv(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Bs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Bs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.nr,l.sr)).next(()=>l.nr)))}async function qC(n,e,t=P()){const r=await Ur(n,He(Bl(e.bundledQuery))),i=E(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ae(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(de.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,t,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function Tf(n,e){return`firestore_clients_${n}_${e}`}function Ef(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Tc(n,e){return`firestore_targets_${n}_${e}`}class $o{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ar(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new y(i.error.code,i.error.message))),o?new $o(e,t,i.state,s):(se("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Li{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new y(r.error.code,r.error.message))),s?new Li(e,r.state,i):(se("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class qo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Pl();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Kg(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new qo(e,s):(se("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Hl{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Hl(t.clientId,t.onlineState):(se("SharedClientState",`Failed to parse online state: ${e}`),null)}}class mu{constructor(){this.activeTargetIds=Pl()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ec{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new G(D),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=Tf(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new mu),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(Tf(this.persistenceKey,r));if(i){const s=qo.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Tc(this.persistenceKey,e));if(r){const i=Li.ar(e,r);i&&(t=i.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Tc(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void se("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(i){let s=je.ct;if(i!=null)try{const o=JSON.parse(i);k(typeof o=="number"),s=o}catch(o){se("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==je.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const i=new $o(this.currentUser,e,t,r),s=Ef(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const t=Ef(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const i=Tc(this.persistenceKey,e),s=new Li(e,t,r);this.setItem(i,s.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return qo.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return $o.ar(new me(s),i,t)}Ur(e,t){const r=this.Ar.exec(e),i=Number(r[1]);return Li.ar(i,t)}br(e){return Hl.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Pl();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class sv{constructor(){this.Hr=new mu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new mu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jC{Yr(e){}shutdown(){}}/**
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
 */class bf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zs=null;function bc(){return Zs===null?Zs=268435456+Math.round(2147483648*Math.random()):Zs++,"0x"+Zs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class GC{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ne="WebChannelConnection";class KC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=bc(),a=this.To(e,t);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ct("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=zC[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=bc();return new Promise((o,a)=>{const c=new qA;c.setWithCredentials(!0),c.listenOnce(VA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case wc.NO_ERROR:const l=c.getResponseJson();v(Ne,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case wc.TIMEOUT:v(Ne,`RPC '${e}' ${s} timed out`),a(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case wc.HTTP_ERROR:const h=c.getStatus();if(v(Ne,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(_){const I=_.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(I)>=0?I:m.UNKNOWN}(f.status);a(new y(g,f.message))}else a(new y(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(m.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{v(Ne,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);v(Ne,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Ro(e,t,r){const i=bc(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FA(),a=UA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new $A({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");v(Ne,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const g=new GC({ro:I=>{f?v(Ne,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(v(Ne,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),v(Ne,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),_=(I,x,L)=>{I.listen(x,R=>{try{L(R)}catch(O){setTimeout(()=>{throw O},0)}})};return _(h,Ks.EventType.OPEN,()=>{f||v(Ne,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Ks.EventType.CLOSE,()=>{f||(f=!0,v(Ne,`RPC '${e}' stream ${i} transport closed`),g.wo())}),_(h,Ks.EventType.ERROR,I=>{f||(f=!0,ct(Ne,`RPC '${e}' stream ${i} transport errored:`,I),g.wo(new y(m.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ks.EventType.MESSAGE,I=>{var x;if(!f){const L=I.data[0];k(!!L);const R=L,O=R.error||((x=R[0])===null||x===void 0?void 0:x.error);if(O){v(Ne,`RPC '${e}' stream ${i} received error:`,O);const q=O.status;let F=function(xe){const ut=ue[xe];if(ut!==void 0)return Sy(ut)}(q),ie=O.message;F===void 0&&(F=m.INTERNAL,ie="Unknown error status: "+q+" with message "+O.message),f=!0,g.wo(new y(F,ie)),h.close()}else v(Ne,`RPC '${e}' stream ${i} received:`,L),g._o(L)}}),_(a,BA.STAT_EVENT,I=>{I.stat===Dd.PROXY?v(Ne,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===Dd.NOPROXY&&v(Ne,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ov(){return typeof window<"u"?window:null}function fo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){return new eC(n,!0)}/**
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
 */class Wl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class av{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Wl(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(se(t.toString()),se("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new y(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HC extends av{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=rC(this.serializer,e),r=function(i){if(!("targetChange"in i))return A.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?A.min():s.readTime?ae(s.readTime):A.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=ss(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=Oo(a)?{documents:Oy(i,a)}:{query:Ly(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Ry(i,s.resumeToken);const c=uu(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(A.min())>0){o.readTime=Fr(i,s.snapshotVersion.toTimestamp());const c=uu(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=sC(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=ss(this.serializer),t.removeTarget=e,this.Wo(t)}}class WC extends av{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(k(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=iC(e.writeResults,e.commitTime),r=ae(e.commitTime);return this.listener.cu(r,t)}return k(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ss(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>os(this.serializer,r))};this.Wo(t)}}/**
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
 */class QC extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(m.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class YC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(se(t),this.mu=!1):v("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class XC{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{wn(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=E(a);c.vu.add(4),await ti(c),c.bu.set("Unknown"),c.vu.delete(4),await Os(c)}(this))})}),this.bu=new YC(r,i)}}async function Os(n){if(wn(n))for(const e of n.Ru)await e(!0)}async function ti(n){for(const e of n.Ru)await e(!1)}function Da(n,e){const t=E(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Xl(t)?Yl(t):ri(t).Ko()&&Ql(t,e))}function as(n,e){const t=E(n),r=ri(t);t.Au.delete(e),r.Ko()&&cv(t,e),t.Au.size===0&&(r.Ko()?r.jo():wn(t)&&t.bu.set("Unknown"))}function Ql(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(A.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ri(n).su(e)}function cv(n,e){n.Vu.qt(e),ri(n).iu(e)}function Yl(n){n.Vu=new Yk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),ri(n).start(),n.bu.gu()}function Xl(n){return wn(n)&&!ri(n).Uo()&&n.Au.size>0}function wn(n){return E(n).vu.size===0}function uv(n){n.Vu=void 0}async function JC(n){n.Au.forEach((e,t)=>{Ql(n,e)})}async function ZC(n,e){uv(n),Xl(n)?(n.bu.Iu(e),Yl(n)):n.bu.set("Unknown")}async function eR(n,e,t){if(n.bu.set("Online"),e instanceof Cy&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jo(n,r)}else if(e instanceof ho?n.Vu.Ht(e):e instanceof ky?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(A.min()))try{const r=await ev(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(de.EMPTY_BYTE_STRING,u.snapshotVersion)),cv(i,a);const l=new Ct(u.target,a,c,u.sequenceNumber);Ql(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await jo(n,r)}}async function jo(n,e,t){if(!yn(e))throw e;n.vu.add(1),await ti(n),n.bu.set("Offline"),t||(t=()=>ev(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Os(n)})}function lv(n,e){return e().catch(t=>jo(n,t,e))}async function ni(n){const e=E(n),t=un(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;tR(e);)try{const i=await BC(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,nR(e,i)}catch(i){await jo(e,i)}hv(e)&&dv(e)}function tR(n){return wn(n)&&n.Eu.length<10}function nR(n,e){n.Eu.push(e);const t=un(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function hv(n){return wn(n)&&!un(n).Uo()&&n.Eu.length>0}function dv(n){un(n).start()}async function rR(n){un(n).hu()}async function iR(n){const e=un(n);for(const t of n.Eu)e.uu(t.mutations)}async function sR(n,e,t){const r=n.Eu.shift(),i=Ll.from(r,e,t);await lv(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ni(n)}async function oR(n,e){e&&un(n).ou&&await async function(t,r){if(i=r.code,by(i)&&i!==m.ABORTED){const s=t.Eu.shift();un(t).Qo(),await lv(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ni(t)}var i}(n,e),hv(n)&&dv(n)}async function Sf(n,e){const t=E(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=wn(t);t.vu.add(3),await ti(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Os(t)}async function gu(n,e){const t=E(n);e?(t.vu.delete(2),await Os(t)):e||(t.vu.add(2),await ti(t),t.bu.set("Unknown"))}function ri(n){return n.Su||(n.Su=function(e,t,r){const i=E(e);return i.fu(),new HC(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:JC.bind(null,n),ao:ZC.bind(null,n),nu:eR.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),Xl(n)?Yl(n):n.bu.set("Unknown")):(await n.Su.stop(),uv(n))})),n.Su}function un(n){return n.Du||(n.Du=function(e,t,r){const i=E(e);return i.fu(),new WC(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:rR.bind(null,n),ao:oR.bind(null,n),au:iR.bind(null,n),cu:sR.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await ni(n)):(await n.Du.stop(),n.Eu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
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
 */class Jl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Jl(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ii(n,e){if(se("AsyncQueue",`${e}: ${n}`),yn(n))return new y(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class kr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||T.comparator(t.key,r.key):(t,r)=>T.comparator(t.key,r.key),this.keyedMap=Ei(),this.sortedSet=new G(this.comparator)}static emptySet(e){return new kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Af{constructor(){this.Cu=new G(T.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):S():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Br{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Br(e,t,kr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class aR{constructor(){this.Nu=void 0,this.listeners=[]}}class cR{constructor(){this.queries=new vn(e=>uy(e),Cs),this.onlineState="Unknown",this.ku=new Set}}async function Zl(n,e){const t=E(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new aR),i)try{s.Nu=await t.onListen(r)}catch(o){const a=ii(o,`Initialization of query '${cu(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&th(t)}async function eh(n,e){const t=E(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function uR(n,e){const t=E(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&th(t)}function lR(n,e,t){const r=E(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function th(n){n.ku.forEach(e=>{e.next()})}class nh{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=Br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.serializer=e}rr(e){return _t(this.serializer,e)}ur(e){return e.metadata.exists?xy(this.serializer,e.document,!1):H.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return ae(e)}}class dR{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=fv(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=B.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new kf(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||P()).add(s);t.set(o,a)}}return t}async complete(){const e=await $C(this.localStore,new kf(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await qC(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function fv(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class pv{constructor(e){this.key=e}}class mv{constructor(e){this.key=e}}class gv{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=P(),this.mutatedKeys=P(),this.tc=hy(e),this.ec=new kr(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new Af,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Rs(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(r.track({type:3,doc:f}),I=!0):this.rc(d,f)||(r.track({type:2,doc:f}),I=!0,(c&&this.tc(f,c)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(f?(o=o.add(f),s=_?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,l)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return f(h)-f(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new Br(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Af,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=P(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new mv(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new pv(r))}),t}hc(e){this.Yu=e.ir,this.Zu=P();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Br.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class fR{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pR{constructor(e){this.key=e,this.fc=!1}}class mR{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new vn(a=>uy(a),Cs),this._c=new Map,this.mc=new Set,this.gc=new G(T.comparator),this.yc=new Map,this.Ic=new jl,this.Tc={},this.Ec=new Map,this.Ac=Zn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function gR(n,e){const t=ah(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await Ur(t.localStore,He(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await rh(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Da(t.remoteStore,o)}return i}async function rh(n,e,t,r,i){n.Rc=(h,d,f)=>async function(g,_,I,x){let L=_.view.sc(I);L.zi&&(L=await Bo(g.localStore,_.query,!1).then(({documents:q})=>_.view.sc(q,L)));const R=x&&x.targetChanges.get(_.targetId),O=_.view.applyChanges(L,g.isPrimaryClient,R);return yu(g,_.targetId,O.cc),O.snapshot}(n,h,d,f);const s=await Bo(n.localStore,e,!0),o=new gv(e,s.ir),a=o.sc(s.documents),c=Ps.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);yu(n,t,u.cc);const l=new fR(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function yR(n,e){const t=E(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!Cs(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Vr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),as(t.remoteStore,r.targetId),$r(t,r.targetId)}).catch(gn)):($r(t,r.targetId),await Vr(t.localStore,r.targetId,!0))}async function vR(n,e,t){const r=ch(n);try{const i=await function(s,o){const a=E(s),c=J.now(),u=o.reduce((d,f)=>d.add(f.key),P());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ge(),g=P();return a.Zi.getEntries(d,u).next(_=>{f=_,f.forEach((I,x)=>{x.isValidDocument()||(g=g.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(_=>{l=_;const I=[];for(const x of o){const L=Hk(x,l.get(x.key).overlayedDocument);L!=null&&I.push(new Bt(x.key,L,ey(L.value.mapValue),X.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(_=>{h=_;const I=_.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,I)})}).then(()=>({batchId:h.batchId,changes:fy(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new G(D)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,t),await $t(r,i.changes),await ni(r.remoteStore)}catch(i){const s=ii(i,"Failed to persist write");t.reject(s)}}async function yv(n,e){const t=E(n);try{const r=await VC(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(k(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?k(o.fc):i.removedDocuments.size>0&&(k(o.fc),o.fc=!1))}),await $t(t,r,e)}catch(r){await gn(r)}}function Cf(n,e,t){const r=E(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=E(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&th(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wR(n,e,t){const r=E(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new G(T.comparator);o=o.insert(s,H.newNoDocument(s,A.min()));const a=P().add(s),c=new Ds(A.min(),new Map,new G(D),o,a);await yv(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),oh(r)}else await Vr(r.localStore,e,!1).then(()=>$r(r,e,t)).catch(gn)}async function _R(n,e){const t=E(n),r=e.batch.batchId;try{const i=await UC(t.localStore,e);sh(t,r,null),ih(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await $t(t,i)}catch(i){await gn(i)}}async function IR(n,e,t){const r=E(n);try{const i=await function(s,o){const a=E(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(k(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);sh(r,e,t),ih(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await $t(r,i)}catch(i){await gn(i)}}async function TR(n,e){const t=E(n);wn(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=E(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ec.get(r)||[];i.push(e),t.Ec.set(r,i)}catch(r){const i=ii(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ih(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function sh(n,e,t){const r=E(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function $r(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||vv(n,r)})}function vv(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(as(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),oh(n))}function yu(n,e,t){for(const r of t)r instanceof pv?(n.Ic.addReference(r.key,e),ER(n,r)):r instanceof mv?(v("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||vv(n,r.key)):S()}function ER(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(v("SyncEngine","New document in limbo: "+t),n.mc.add(r),oh(n))}function oh(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new T(B.fromString(e)),r=n.Ac.next();n.yc.set(r,new pR(t)),n.gc=n.gc.insert(t,r),Da(n.remoteStore,new Ct(He(Jr(t.path)),r,"TargetPurposeLimboResolution",je.ct))}}async function $t(n,e,t){const r=E(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Kl.Li(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const u=E(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!yn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,g)}}}(r.localStore,s))}async function bR(n,e){const t=E(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await Zy(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new y(m.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $t(t,r.er)}}function SR(n,e){const t=E(n),r=t.yc.get(e);if(r&&r.fc)return P().add(r.key);{let i=P();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function AR(n,e){const t=E(n),r=await Bo(t.localStore,e.query,!0),i=e.view.hc(r);return t.isPrimaryClient&&yu(t,e.targetId,i.cc),i}async function kR(n,e){const t=E(n);return rv(t.localStore,e).then(r=>$t(t,r))}async function CR(n,e,t,r){const i=E(n),s=await function(o,a){const c=E(o),u=E(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Sn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):p.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await ni(i.remoteStore):t==="acknowledged"||t==="rejected"?(sh(i,e,r||null),ih(i,e),function(o,a){E(E(o).mutationQueue).Cn(a)}(i.localStore,e)):S(),await $t(i,s)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function RR(n,e){const t=E(n);if(ah(t),ch(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Rf(t,r.toArray());t.vc=!0,await gu(t.remoteStore,!0);for(const s of i)Da(t.remoteStore,s)}else if(e===!1&&t.vc!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>($r(t,o),Vr(t.localStore,o,!0))),as(t.remoteStore,o)}),await i,await Rf(t,r),function(s){const o=E(s);o.yc.forEach((a,c)=>{as(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new G(T.comparator)}(t),t.vc=!1,await gu(t.remoteStore,!1)}}async function Rf(n,e,t){const r=E(n),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Ur(r.localStore,He(c[0]));for(const u of c){const l=r.wc.get(u),h=await AR(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await nv(r.localStore,o);a=await Ur(r.localStore,u),await rh(r,wv(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function wv(n){return cy(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function NR(n){const e=E(n);return E(E(e.localStore).persistence).$i()}async function DR(n,e,t,r){const i=E(n);if(i.vc)return void v("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await rv(i.localStore,ly(s[0])),a=Ds.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await $t(i,o,a);break}case"rejected":await Vr(i.localStore,e,!0),$r(i,e,r);break;default:S()}}async function PR(n,e,t){const r=ah(n);if(r.vc){for(const i of e){if(r._c.has(i)){v("SyncEngine","Adding an already active target "+i);continue}const s=await nv(r.localStore,i),o=await Ur(r.localStore,s);await rh(r,wv(s),o.targetId,!1,o.resumeToken),Da(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await Vr(r.localStore,i,!1).then(()=>{as(r.remoteStore,i),$r(r,i)}).catch(gn)}}function ah(n){const e=E(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wR.bind(null,e),e.dc.nu=uR.bind(null,e.eventManager),e.dc.Pc=lR.bind(null,e.eventManager),e}function ch(n){const e=E(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_R.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IR.bind(null,e),e}function xR(n,e,t){const r=E(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=E(h),g=ae(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",_=>f.qs.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(fv(a));const c=new dR(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const h=await c.zu(u);h&&o._updateProgress(h),u=await s.bc()}const l=await c.complete();return await $t(i,l.Ju,void 0),await function(h,d){const f=E(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.qs.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Hu)}catch(a){return ct("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class vu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Jy(this.persistence,new Xy,e.initialUser,this.serializer)}createPersistence(e){return new Yy(Na.zs,this.serializer)}createSharedClientState(e){return new sv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _v extends vu{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await ch(this.Vc.syncEngine),await ni(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Jy(this.persistence,new Xy,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new TC(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new sk(t,this.persistence);return new ik(e.asyncQueue,r)}createPersistence(e){const t=Gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new zl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ov(),fo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new sv}}class OR extends _v{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof Ec&&(this.sharedClientState.syncEngine={jr:CR.bind(null,t),zr:DR.bind(null,t),Wr:PR.bind(null,t),$i:NR.bind(null,t),Qr:kR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await RR(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=ov();if(!Ec.D(t))throw new y(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ec(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class uh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bR.bind(null,this.syncEngine),await gu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cR}createDatastore(e){const t=xs(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new KC(i));var i;return function(s,o,a,c){return new QC(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Cf(this.syncEngine,a,0),o=bf.D()?new bf:new jC,new XC(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new mR(r,i,s,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=E(e);v("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await ti(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pa{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):se("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new ye,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const i=await this.$c(r);return new hR(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class MR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=E(r),o=ss(s.serializer)+"/documents",a={documents:i.map(h=>is(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=nC(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());k(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ei(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=T.fromPath(r);this.mutations.push(new xl(i,this.precondition(i)))}),await async function(t,r){const i=E(t),s=ss(i.serializer)+"/documents",o={writes:r.map(a=>os(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw S();t=A.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new y(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(A.min())?X.exists(!1):X.updateTime(t):X.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(A.min()))throw new y(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return X.updateTime(t)}return X.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class FR{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new Wl(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new MR(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!As(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!by(t)}return!1}}/**
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
 */class UR{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=Vg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ii(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function po(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Zy(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lh(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Sf(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Sf(e.remoteStore,s)),n._onlineComponents=e}function Iv(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function lh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await po(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Iv(t))throw t;ct("Error using user provided cache. Falling back to memory cache: "+t),await po(n,new vu)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await po(n,new vu);return n._offlineComponents}async function xa(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await wu(n,n._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await wu(n,new uh))),n._onlineComponents}function Tv(n){return lh(n).then(e=>e.persistence)}function hh(n){return lh(n).then(e=>e.localStore)}function Ev(n){return xa(n).then(e=>e.remoteStore)}function dh(n){return xa(n).then(e=>e.syncEngine)}function VR(n){return xa(n).then(e=>e.datastore)}async function qr(n){const e=await xa(n),t=e.eventManager;return t.onListen=gR.bind(null,e.syncEngine),t.onUnlisten=yR.bind(null,e.syncEngine),t}function BR(n){return n.asyncQueue.enqueue(async()=>{const e=await Tv(n),t=await Ev(n);return e.setNetworkEnabled(!0),function(r){const i=E(r);return i.vu.delete(0),Os(i)}(t)})}function $R(n){return n.asyncQueue.enqueue(async()=>{const e=await Tv(n),t=await Ev(n);return e.setNetworkEnabled(!1),async function(r){const i=E(r);i.vu.add(0),await ti(i),i.bu.set("Offline")}(t)})}function qR(n,e){const t=new ye;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=E(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new y(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=ii(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await hh(n),e,t)),t.promise}function bv(n,e,t={}){const r=new ye;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Pa({next:h=>{s.enqueueAndForget(()=>eh(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new nh(Jr(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Zl(i,l)}(await qr(n),n.asyncQueue,e,t,r)),r.promise}function jR(n,e){const t=new ye;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Bo(r,i,!0),a=new gv(i,o.ir),c=a.sc(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=ii(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await hh(n),e,t)),t.promise}function Sv(n,e,t={}){const r=new ye;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Pa({next:h=>{s.enqueueAndForget(()=>eh(i,l)),h.fromCache&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new nh(o,u,{includeMetadataChanges:!0,Ku:!0});return Zl(i,l)}(await qr(n),n.asyncQueue,e,t,r)),r.promise}function zR(n,e){const t=new Pa(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){E(r).ku.add(i),i.next()}(await qr(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){E(r).ku.delete(i)}(await qr(n),t))}}function GR(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?Ay().encode(s):s,function(c,u){return new LR(c,u)}(function(c,u){if(c instanceof Uint8Array)return Nf(c,u);if(c instanceof ArrayBuffer)return Nf(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,xs(e));n.asyncQueue.enqueueAndForget(async()=>{xR(await dh(n),i,r)})}function KR(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=E(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await hh(n),e))}/**
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
 */function Av(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;/**
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
 */function fh(n,e,t){if(!t)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function kv(n,e,t,r){if(e===!0&&r===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pf(n){if(!T.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xf(n){if(T.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Oa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function $(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Oa(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Cv(n,e){if(e<=0)throw new y(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Av((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Ls{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Of({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Of(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new KA;switch(t.type){case"firstParty":return new YA(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Df.get(e);t&&(v("ComponentProvider","Removing Datastore"),Df.delete(e),t.terminate())}(this),Promise.resolve()}}function Rv(n,e,t,r={}){var i;const s=(n=$(n,Ls))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ct("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=me.MOCK_USER;else{a=Zf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new me(u)}n._authCredentials=new HA(new Ug(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Q(this.firestore,e,this._key)}}class Re{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Re(this.firestore,e,this._query)}}class It extends Re{constructor(e,t,r){super(e,t,Jr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Q(this.firestore,null,new T(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function Nv(n,e,...t){if(n=C(n),fh("collection","path",e),n instanceof Ls){const r=B.fromString(e,...t);return xf(r),new It(n,null,r)}{if(!(n instanceof Q||n instanceof It))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(B.fromString(e,...t));return xf(r),new It(n.firestore,null,r)}}function HR(n,e){if(n=$(n,Ls),fh("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Re(n,null,function(t){return new Vt(B.emptyPath(),t)}(e))}function zo(n,e,...t){if(n=C(n),arguments.length===1&&(e=Vg.A()),fh("doc","path",e),n instanceof Ls){const r=B.fromString(e,...t);return Pf(r),new Q(n,null,new T(r))}{if(!(n instanceof Q||n instanceof It))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(B.fromString(e,...t));return Pf(r),new Q(n.firestore,n instanceof It?n.converter:null,new T(r))}}function Dv(n,e){return n=C(n),e=C(e),(n instanceof Q||n instanceof It)&&(e instanceof Q||e instanceof It)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Pv(n,e){return n=C(n),e=C(e),n instanceof Re&&e instanceof Re&&n.firestore===e.firestore&&Cs(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Wl(this,"async_queue_retry"),this.Xc=()=>{const t=fo();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=fo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new ye;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!yn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw se("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=Jl.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&S()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function _u(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class QR{constructor(){this._progressObserver={},this._taskCompletionResolver=new ye,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=-1;class re extends Ls{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new WR,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xv(this),this._firestoreClient.terminate()}}function XR(n,e){const t=typeof n=="object"?n:Qo(),r=typeof n=="string"?n:e||"(default)",i=dn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xf("firestore");s&&Rv(i,...s)}return i}function Ie(n){return n._firestoreClient||xv(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function xv(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new Ak(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Av(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new UR(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function JR(n,e){Lv(n=$(n,re));const t=Ie(n);if(t._uninitializedComponentsProvider)throw new y(m.FAILED_PRECONDITION,"SDK cache is already specified.");ct("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new uh;return Ov(t,i,new _v(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function ZR(n){Lv(n=$(n,re));const e=Ie(n);if(e._uninitializedComponentsProvider)throw new y(m.FAILED_PRECONDITION,"SDK cache is already specified.");ct("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new uh;return Ov(e,r,new OR(r,t.cacheSizeBytes))}function Ov(n,e,t){const r=new ye;return n.asyncQueue.enqueue(async()=>{try{await po(n,t),await wu(n,e),r.resolve()}catch(i){const s=i;if(!Iv(s))throw s;ct("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function eN(n){if(n._initialized&&!n._terminated)throw new y(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ye;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!st.D())return Promise.resolve();const r=t+"main";await st.delete(r)}(Gl(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function tN(n){return function(e){const t=new ye;return e.asyncQueue.enqueueAndForget(async()=>TR(await dh(e),t)),t.promise}(Ie(n=$(n,re)))}function nN(n){return BR(Ie(n=$(n,re)))}function rN(n){return $R(Ie(n=$(n,re)))}function iN(n,e){const t=Ie(n=$(n,re)),r=new QR;return GR(t,n._databaseId,e,r),r}function sN(n,e){return KR(Ie(n=$(n,re)),e).then(t=>t?new Re(n,null,t.query):null)}function Lv(n){if(n._initialized||n._terminated)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(de.fromBase64String(e))}catch(t){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bt(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._methodName=e}}/**
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
 */class La{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
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
 */const oN=/^__.*__$/;class aN{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zr(e,this.data,t,this.fieldTransforms)}}class Mv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fv(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Ma{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Ma(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Go(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Fv(this.ca)&&oN.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class cN{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||xs(e)}ya(e,t,r,i=!1){return new Ma({ca:e,methodName:t,ga:r,path:oe.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function or(n){const e=n._freezeSettings(),t=xs(n._databaseId);return new cN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Fa(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);yh("Data must be an object, but it was:",o,r);const a=Bv(r,o);let c,u;if(s.merge)c=new ze(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Iu(e,h,t);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);qv(l,d)||l.push(d)}c=new ze(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new aN(new be(a),c,u)}class Ms extends sr{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ms}}function Uv(n,e,t){return new Ma({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ph extends sr{_toFieldTransform(e){return new Ns(e.path,new Lr)}isEqual(e){return e instanceof ph}}class uN extends sr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Uv(this,e,!0),r=this.pa.map(s=>ar(s,t)),i=new Qn(r);return new Ns(e.path,i)}isEqual(e){return this===e}}class lN extends sr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Uv(this,e,!0),r=this.pa.map(s=>ar(s,t)),i=new Yn(r);return new Ns(e.path,i)}isEqual(e){return this===e}}class hN extends sr{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Mr(e.serializer,yy(e.serializer,this.Ia));return new Ns(e.path,t)}isEqual(e){return this===e}}function mh(n,e,t,r){const i=n.ya(1,e,t);yh("Data must be an object, but it was:",i,r);const s=[],o=be.empty();ir(r,(c,u)=>{const l=vh(e,c,t);u=C(u);const h=i.da(l);if(u instanceof Ms)s.push(l);else{const d=ar(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new ze(s);return new Mv(o,a,i.fieldTransforms)}function gh(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[Iu(e,r,t)],c=[i];if(s.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Iu(e,s[d])),c.push(s[d+1]);const u=[],l=be.empty();for(let d=a.length-1;d>=0;--d)if(!qv(u,a[d])){const f=a[d];let g=c[d];g=C(g);const _=o.da(f);if(g instanceof Ms)u.push(f);else{const I=ar(g,_);I!=null&&(u.push(f),l.set(f,I))}}const h=new ze(u);return new Mv(l,h,o.fieldTransforms)}function Vv(n,e,t,r=!1){return ar(t,n.ya(r?4:3,e))}function ar(n,e){if($v(n=C(n)))return yh("Unsupported field value:",e,n),Bv(n,e);if(n instanceof sr)return function(t,r){if(!Fv(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=ar(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=C(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return yy(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=J.fromDate(t);return{timestampValue:Fr(r.serializer,i)}}if(t instanceof J){const i=new J(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Fr(r.serializer,i)}}if(t instanceof La)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof bt)return{bytesValue:Ry(r.serializer,t._byteString)};if(t instanceof Q){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vl(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${Oa(t)}`)}(n,e)}function Bv(n,e){const t={};return Xg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ir(n,(r,i)=>{const s=ar(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function $v(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof La||n instanceof bt||n instanceof Q||n instanceof sr)}function yh(n,e,t){if(!$v(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Oa(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function Iu(n,e,t){if((e=C(e))instanceof ln)return e._internalPath;if(typeof e=="string")return vh(n,e);throw Go("Field path arguments must be of type string or ",n,!1,void 0,t)}const dN=new RegExp("[~\\*/\\[\\]]");function vh(n,e,t){if(e.search(dN)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ln(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Go(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(m.INVALID_ARGUMENT,a+n+c)}function qv(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Q(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ua("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fN extends cs{data(){return super.data()}}function Ua(n,e){return typeof e=="string"?vh(n,e):e instanceof ln?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wh{}class Fs extends wh{}function Gt(n,e,...t){let r=[];e instanceof wh&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof _h).length,o=i.filter(a=>a instanceof Va).length;if(s>1||s>0&&o>0)throw new y(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Va extends Fs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Va(e,t,r)}_apply(e){const t=this._parse(e);return Gv(e._query,t),new Re(e.firestore,e.converter,au(e._query,t))}_parse(e){const t=or(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Mf(l,u);const d=[];for(const f of l)d.push(Lf(a,i,f));h={arrayValue:{values:d}}}else h=Lf(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Mf(l,u),h=Vv(o,s,l,u==="in"||u==="not-in");return M.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pN(n,e,t){const r=e,i=Ua("where",n);return Va._create(i,r,t)}class _h extends wh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _h(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:j.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Gv(s,a),s=au(s,a)}(e._query,t),new Re(e.firestore,e.converter,au(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ih extends Fs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ih(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ar(i,s);return function(a,c){if(Nl(a)===null){const u=Sa(a);u!==null&&Kv(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Re(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Vt(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function mN(n,e="asc"){const t=e,r=Ua("orderBy",n);return Ih._create(r,t)}class Ba extends Fs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ba(e,t,r)}_apply(e){return new Re(e.firestore,e.converter,Mo(e._query,this._limit,this._limitType))}}function gN(n){return Cv("limit",n),Ba._create("limit",n,"F")}function yN(n){return Cv("limitToLast",n),Ba._create("limitToLast",n,"L")}class $a extends Fs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new $a(e,t,r)}_apply(e){const t=zv(e,this.type,this._docOrFields,this._inclusive);return new Re(e.firestore,e.converter,function(r,i){return new Vt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function vN(...n){return $a._create("startAt",n,!0)}function wN(...n){return $a._create("startAfter",n,!1)}class qa extends Fs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new qa(e,t,r)}_apply(e){const t=zv(e,this.type,this._docOrFields,this._inclusive);return new Re(e.firestore,e.converter,function(r,i){return new Vt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function _N(...n){return qa._create("endBefore",n,!1)}function IN(...n){return qa._create("endAt",n,!0)}function zv(n,e,t,r){if(t[0]=C(t[0]),t[0]instanceof cs)return function(i,s,o,a,c){if(!a)throw new y(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Un(i))if(l.field.isKeyField())u.push(Hn(s,a.key));else{const h=a.data.field(l.field);if(ba(h))throw new y(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new y(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new cn(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=or(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new y(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const g=u[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new y(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Dl(s)&&g.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const _=s.path.child(B.fromString(g));if(!T.isDocumentKey(_))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const I=new T(_);d.push(Hn(o,I))}else{const _=Vv(a,c,g);d.push(_)}}return new cn(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Lf(n,e,t){if(typeof(t=C(t))=="string"){if(t==="")throw new y(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dl(e)&&t.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(B.fromString(t));if(!T.isDocumentKey(r))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hn(n,new T(r))}if(t instanceof Q)return Hn(n,t._key);throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oa(t)}.`)}function Mf(n,e){if(!Array.isArray(n)||n.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gv(n,e){if(e.isInequality()){const r=Sa(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new y(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Nl(n);s!==null&&Kv(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Kv(n,e,t){if(!t.isEqual(e))throw new y(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Th{convertValue(e,t="none"){switch(Kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ir(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new La(te(e.latitude),te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Cl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ts(e));default:return null}}convertTimestamp(e){const t=rn(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=B.fromString(e);k(Vy(r));const i=new on(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(t)||se(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class TN extends Th{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ot extends cs{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ua("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Mi extends Ot{data(e={}){return super.data(e)}}class hn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Pn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Mi(this._firestore,this._userDataWriter,r.key,r,new Pn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Mi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Pn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Mi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Pn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:EN(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function EN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}function Hv(n,e){return n instanceof Ot&&e instanceof Ot?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof hn&&e instanceof hn&&n._firestore===e._firestore&&Pv(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(n){n=$(n,Q);const e=$(n.firestore,re);return bv(Ie(e),n._key).then(t=>Eh(e,n,t))}class cr extends Th{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}function SN(n){n=$(n,Q);const e=$(n.firestore,re),t=Ie(e),r=new cr(e);return qR(t,n._key).then(i=>new Ot(e,r,n._key,i,new Pn(i!==null&&i.hasLocalMutations,!0),n.converter))}function AN(n){n=$(n,Q);const e=$(n.firestore,re);return bv(Ie(e),n._key,{source:"server"}).then(t=>Eh(e,n,t))}function kN(n){n=$(n,Re);const e=$(n.firestore,re),t=Ie(e),r=new cr(e);return jv(n._query),Sv(t,n._query).then(i=>new hn(e,r,n,i))}function CN(n){n=$(n,Re);const e=$(n.firestore,re),t=Ie(e),r=new cr(e);return jR(t,n._query).then(i=>new hn(e,r,n,i))}function RN(n){n=$(n,Re);const e=$(n.firestore,re),t=Ie(e),r=new cr(e);return Sv(t,n._query,{source:"server"}).then(i=>new hn(e,r,n,i))}function Ff(n,e,t){n=$(n,Q);const r=$(n.firestore,re),i=ja(n.converter,e,t);return Us(r,[Fa(or(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,X.none())])}function Uf(n,e,t,...r){n=$(n,Q);const i=$(n.firestore,re),s=or(i);let o;return o=typeof(e=C(e))=="string"||e instanceof ln?gh(s,"updateDoc",n._key,e,t,r):mh(s,"updateDoc",n._key,e),Us(i,[o.toMutation(n._key,X.exists(!0))])}function NN(n){return Us($(n.firestore,re),[new ei(n._key,X.none())])}function DN(n,e){const t=$(n.firestore,re),r=zo(n),i=ja(n.converter,e);return Us(t,[Fa(or(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,X.exists(!1))]).then(()=>r)}function Wv(n,...e){var t,r,i;n=C(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_u(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(_u(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof Q)u=$(n.firestore,re),l=Jr(n._key.path),c={next:h=>{e[o]&&e[o](Eh(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=$(n,Re);u=$(h.firestore,re),l=h._query;const d=new cr(u);c={next:f=>{e[o]&&e[o](new hn(u,d,h,f))},error:e[o+1],complete:e[o+2]},jv(n._query)}return function(h,d,f,g){const _=new Pa(g),I=new nh(d,_,f);return h.asyncQueue.enqueueAndForget(async()=>Zl(await qr(h),I)),()=>{_.Dc(),h.asyncQueue.enqueueAndForget(async()=>eh(await qr(h),I))}}(Ie(u),l,a,c)}function PN(n,e){return zR(Ie(n=$(n,re)),_u(e)?e:{next:e})}function Us(n,e){return function(t,r){const i=new ye;return t.asyncQueue.enqueueAndForget(async()=>vR(await dh(t),r,i)),i.promise}(Ie(n),e)}function Eh(n,e,t){const r=t.docs.get(e._key),i=new cr(n);return new Ot(n,i,e._key,r,new Pn(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const xN={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=or(e)}set(e,t,r){this._verifyNotCommitted();const i=Ht(e,this._firestore),s=ja(i.converter,t,r),o=Fa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,X.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Ht(e,this._firestore);let o;return o=typeof(t=C(t))=="string"||t instanceof ln?gh(this._dataReader,"WriteBatch.update",s._key,t,r,i):mh(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,X.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ht(e,this._firestore);return this._mutations=this._mutations.concat(new ei(t._key,X.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ht(n,e){if((n=C(n)).firestore!==e)throw new y(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LN extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=or(e)}get(e){const t=Ht(e,this._firestore),r=new TN(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return S();const s=i[0];if(s.isFoundDocument())return new cs(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new cs(this._firestore,r,t._key,null,t.converter);throw S()})}set(e,t,r){const i=Ht(e,this._firestore),s=ja(i.converter,t,r),o=Fa(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Ht(e,this._firestore);let o;return o=typeof(t=C(t))=="string"||t instanceof ln?gh(this._dataReader,"Transaction.update",s._key,t,r,i):mh(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Ht(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ht(e,this._firestore),r=new cr(this._firestore);return super.get(e).then(i=>new Ot(this._firestore,r,t._key,i._document,new Pn(!1,!1),t.converter))}}function MN(n,e,t){n=$(n,re);const r=Object.assign(Object.assign({},xN),t);return function(i){if(i.maxAttempts<1)throw new y(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ye;return i.asyncQueue.enqueueAndForget(async()=>{const c=await VR(i);new FR(i.asyncQueue,c,o,s,a).run()}),a.promise}(Ie(n),i=>e(new LN(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(){return new Ms("deleteField")}function UN(){return new ph("serverTimestamp")}function VN(...n){return new uN("arrayUnion",n)}function BN(...n){return new lN("arrayRemove",n)}function $N(n){return new hN("increment",n)}(function(n,e=!0){(function(t){Xr=t})(Mt),Je(new Ve("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new re(new WA(t.getProvider("auth-internal")),new JA(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Se(Pd,"3.13.0",n),Se(Pd,"3.13.0","esm2017")})();const qN="@firebase/firestore-compat",jN="0.3.12";/**
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
 */function bh(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Vf(){if(typeof Uint8Array>"u")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function Bf(){if(!bk())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}let Qv=class Tu{constructor(e){this._delegate=e}static fromBase64String(e){return Bf(),new Tu(bt.fromBase64String(e))}static fromUint8Array(e){return Vf(),new Tu(bt.fromUint8Array(e))}toBase64(){return Bf(),this._delegate.toBase64()}toUint8Array(){return Vf(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function Eu(n){return zN(n,["next","error","complete"])}function zN(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class GN{enableIndexedDbPersistence(e,t){return JR(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return ZR(e._delegate)}clearIndexedDbPersistence(e){return eN(e._delegate)}}class Yv{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof on||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&ct("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Rv(this._delegate,e,t,r)}enableNetwork(){return nN(this._delegate)}disableNetwork(){return rN(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,kv("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return tN(this._delegate)}onSnapshotsInSync(e){return PN(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new jr(this,Nv(this._delegate,e))}catch(t){throw Me(t,"collection()","Firestore.collection()")}}doc(e){try{return new nt(this,zo(this._delegate,e))}catch(t){throw Me(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Le(this,HR(this._delegate,e))}catch(t){throw Me(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return MN(this._delegate,t=>e(new Xv(this,t)))}batch(){return Ie(this._delegate),new Jv(new ON(this._delegate,e=>Us(this._delegate,e)))}loadBundle(e){return iN(this._delegate,e)}namedQuery(e){return sN(this._delegate,e).then(t=>t?new Le(this,t):null)}}class za extends Th{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qv(new bt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return nt.forKey(t,this.firestore,null)}}function KN(n){zA(n)}class Xv{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new za(e)}get(e){const t=xn(e);return this._delegate.get(t).then(r=>new us(this._firestore,new Ot(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=xn(e);return r?(bh("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=xn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=xn(e);return this._delegate.delete(t),this}}class Jv{constructor(e){this._delegate=e}set(e,t,r){const i=xn(e);return r?(bh("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=xn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=xn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class er{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Mi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ls(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=er.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new er(e,new za(e),t),i.set(t,s)),s}}er.INSTANCES=new WeakMap;class nt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new za(e)}static forPath(e,t,r){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new nt(t,new Q(t._delegate,r,new T(e)))}static forKey(e,t,r){return new nt(t,new Q(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new jr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new jr(this.firestore,Nv(this._delegate,e))}catch(t){throw Me(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=C(e),e instanceof Q?Dv(this._delegate,e):!1}set(e,t){t=bh("DocumentReference.set",t);try{return t?Ff(this._delegate,e,t):Ff(this._delegate,e)}catch(r){throw Me(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Uf(this._delegate,e):Uf(this._delegate,e,t,...r)}catch(i){throw Me(i,"updateDoc()","DocumentReference.update()")}}delete(){return NN(this._delegate)}onSnapshot(...e){const t=Zv(e),r=ew(e,i=>new us(this.firestore,new Ot(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Wv(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=SN(this._delegate):(e==null?void 0:e.source)==="server"?t=AN(this._delegate):t=bN(this._delegate),t.then(r=>new us(this.firestore,new Ot(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new nt(this.firestore,e?this._delegate.withConverter(er.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Me(n,e,t){return n.message=n.message.replace(e,t),n}function Zv(n){for(const e of n)if(typeof e=="object"&&!Eu(e))return e;return{}}function ew(n,e){var t,r;let i;return Eu(n[0])?i=n[0]:Eu(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class us{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new nt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Hv(this._delegate,e._delegate)}}class ls extends us{data(e){const t=this._delegate.data(e);return GA(t!==void 0),t}}class Le{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new za(e)}where(e,t,r){try{return new Le(this.firestore,Gt(this._delegate,pN(e,t,r)))}catch(i){throw Me(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Le(this.firestore,Gt(this._delegate,mN(e,t)))}catch(r){throw Me(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Le(this.firestore,Gt(this._delegate,gN(e)))}catch(t){throw Me(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Le(this.firestore,Gt(this._delegate,yN(e)))}catch(t){throw Me(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Le(this.firestore,Gt(this._delegate,vN(...e)))}catch(t){throw Me(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Le(this.firestore,Gt(this._delegate,wN(...e)))}catch(t){throw Me(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Le(this.firestore,Gt(this._delegate,_N(...e)))}catch(t){throw Me(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Le(this.firestore,Gt(this._delegate,IN(...e)))}catch(t){throw Me(t,"endAt()","Query.endAt()")}}isEqual(e){return Pv(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=CN(this._delegate):(e==null?void 0:e.source)==="server"?t=RN(this._delegate):t=kN(this._delegate),t.then(r=>new bu(this.firestore,new hn(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Zv(e),r=ew(e,i=>new bu(this.firestore,new hn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Wv(this._delegate,t,r)}withConverter(e){return new Le(this.firestore,e?this._delegate.withConverter(er.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class HN{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ls(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class bu{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Le(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ls(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new HN(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ls(this._firestore,r))})}isEqual(e){return Hv(this._delegate,e._delegate)}}class jr extends Le{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new nt(this.firestore,e):null}doc(e){try{return e===void 0?new nt(this.firestore,zo(this._delegate)):new nt(this.firestore,zo(this._delegate,e))}catch(t){throw Me(t,"doc()","CollectionReference.doc()")}}add(e){return DN(this._delegate,e).then(t=>new nt(this.firestore,t))}isEqual(e){return Dv(this._delegate,e._delegate)}withConverter(e){return new jr(this.firestore,e?this._delegate.withConverter(er.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xn(n){return $(n,Q)}/**
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
 */class Sh{constructor(...e){this._delegate=new ln(...e)}static documentId(){return new Sh(oe.keyField().canonicalString())}isEqual(e){return e=C(e),e instanceof ln?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class kn{constructor(e){this._delegate=e}static serverTimestamp(){const e=UN();return e._methodName="FieldValue.serverTimestamp",new kn(e)}static delete(){const e=FN();return e._methodName="FieldValue.delete",new kn(e)}static arrayUnion(...e){const t=VN(...e);return t._methodName="FieldValue.arrayUnion",new kn(t)}static arrayRemove(...e){const t=BN(...e);return t._methodName="FieldValue.arrayRemove",new kn(t)}static increment(e){const t=$N(e);return t._methodName="FieldValue.increment",new kn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const WN={Firestore:Yv,GeoPoint:La,Timestamp:J,Blob:Qv,Transaction:Xv,WriteBatch:Jv,DocumentReference:nt,DocumentSnapshot:us,Query:Le,QueryDocumentSnapshot:ls,QuerySnapshot:bu,CollectionReference:jr,FieldPath:Sh,FieldValue:kn,setLogLevel:KN,CACHE_SIZE_UNLIMITED:YR};function QN(n,e){n.INTERNAL.registerComponent(new Ve("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},WN)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(n){QN(n,(e,t)=>new Yv(e,t,new GN)),n.registerVersion(qN,jN)}YN(St);const XN={apiKey:"AIzaSyDmeCKj1u6joV57Opj22FUUvQCbgaW7qtI",authDomain:"squarelion-43d29.firebaseapp.com",projectId:"squarelion-43d29",storageBucket:"squarelion-43d29.appspot.com",messagingSenderId:"171439211836",appId:"1:171439211836:web:5aba3918d87876d0d84a39",measurementId:"G-9S8TZFG63M"},tw=St.initializeApp(XN);DT(tw);const $f=St.auth(),JN=St.firestore(),f1=XR(tw);St.firestore();new it;const p1=new St.auth.GoogleAuthProvider;function m1({user:n,setUser:e,setUuid:t,setLevel:r,level:i}){function s(){const[a,c]=Ka.useState(null);return Ka.useEffect(()=>{$f.onAuthStateChanged(u=>{u&&(c(u.uid),t(u.uid))})},[]),a}s();function o(){return Ka.useEffect(()=>{$f.onAuthStateChanged(a=>{a?JN.collection("admin").doc(a.uid).get().then(c=>{e(c.data().Name),localStorage.setItem("user",c.data().Name),r(c.data().level)}):e(null)})},[n]),n}o()}/**
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
 */const nw="firebasestorage.googleapis.com",rw="storageBucket",ZN=2*60*1e3,eD=10*60*1e3,tD=1e3;/**
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
 */class ee extends ge{constructor(e,t,r=0){super(Sc(e),`Firebase Storage: ${t} (${Sc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Y;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Y||(Y={}));function Sc(n){return"storage/"+n}function Ah(){const n="An unknown error occurred, please check the error payload for server response.";return new ee(Y.UNKNOWN,n)}function nD(n){return new ee(Y.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function rD(n){return new ee(Y.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function iD(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ee(Y.UNAUTHENTICATED,n)}function sD(){return new ee(Y.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function oD(n){return new ee(Y.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function iw(){return new ee(Y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sw(){return new ee(Y.CANCELED,"User canceled the upload/download.")}function aD(n){return new ee(Y.INVALID_URL,"Invalid URL '"+n+"'.")}function cD(n){return new ee(Y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function uD(){return new ee(Y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rw+"' property when initializing the app?")}function ow(){return new ee(Y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lD(){return new ee(Y.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function hD(){return new ee(Y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dD(n){return new ee(Y.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Su(n){return new ee(Y.INVALID_ARGUMENT,n)}function aw(){return new ee(Y.APP_DELETED,"The Firebase app was deleted.")}function fD(n){return new ee(Y.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fi(n,e){return new ee(Y.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function yi(n){throw new ee(Y.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Ye{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ye.makeFromUrl(e,t)}catch{return new Ye(e,"")}if(r.path==="")return r;throw cD(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},_=t===nw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,I="([^?#]*)",x=new RegExp(`^https?://${_}/${i}/${I}`,"i"),R=[{regex:a,indices:c,postModify:s},{regex:f,indices:g,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<R.length;O++){const q=R[O],F=q.regex.exec(e);if(F){const ie=F[q.indices.bucket];let xe=F[q.indices.path];xe||(xe=""),r=new Ye(ie,xe),q.postModify(r);break}}if(r==null)throw aD(e);return r}}class pD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function mD(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,n(f,c())},I)}function d(){s&&clearTimeout(s)}function f(I,...x){if(u){d();return}if(I){d(),l.call(null,I,...x);return}if(c()||o){d(),l.call(null,I,...x);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,h(R)}let g=!1;function _(I){g||(g=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},t),_}function gD(n){n(!1)}/**
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
 */function yD(n){return n!==void 0}function vD(n){return typeof n=="function"}function wD(n){return typeof n=="object"&&!Array.isArray(n)}function Ga(n){return typeof n=="string"||n instanceof String}function qf(n){return kh()&&n instanceof Blob}function kh(){return typeof Blob<"u"&&!Wo()}function jf(n,e,t,r){if(r<e)throw Su(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Su(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Vs(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function cw(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
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
 */var Vn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Vn||(Vn={}));/**
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
 */function uw(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class _D{constructor(e,t,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new eo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Vn.NO_ERROR,c=s.getStatus();if(!a||uw(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Vn.ABORT;r(!1,new eo(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new eo(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());yD(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Ah();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?aw():sw();o(c)}else{const c=iw();o(c)}};this.canceled_?t(!1,new eo(!1,null,!0)):this.backoffId_=mD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class eo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ID(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function TD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ED(n,e){e&&(n["X-Firebase-GMPID"]=e)}function bD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function SD(n,e,t,r,i,s,o=!0){const a=cw(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return ED(u,e),ID(u,t),TD(u,s),bD(u,r),new _D(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function AD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function kD(...n){const e=AD();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(kh())return new Blob(n);throw new ee(Y.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function CD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function RD(n){if(typeof atob>"u")throw dD("base-64");return atob(n)}/**
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
 */const wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ac{constructor(e,t){this.data=e,this.contentType=t||null}}function ND(n,e){switch(n){case wt.RAW:return new Ac(lw(e));case wt.BASE64:case wt.BASE64URL:return new Ac(hw(n,e));case wt.DATA_URL:return new Ac(PD(e),xD(e))}throw Ah()}function lw(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function DD(n){let e;try{e=decodeURIComponent(n)}catch{throw Fi(wt.DATA_URL,"Malformed data URL.")}return lw(e)}function hw(n,e){switch(n){case wt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Fi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case wt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Fi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=RD(e)}catch(i){throw i.message.includes("polyfill")?i:Fi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class dw{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Fi(wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=OD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PD(n){const e=new dw(n);return e.base64?hw(wt.BASE64,e.rest):DD(e.rest)}function xD(n){return new dw(n).contentType}function OD(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Wt{constructor(e,t){let r=0,i="";qf(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(qf(this.data_)){const r=this.data_,i=CD(r,e,t);return i===null?null:new Wt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Wt(r,!0)}}static getBlob(...e){if(kh()){const t=e.map(r=>r instanceof Wt?r.data_:r);return new Wt(kD.apply(null,t))}else{const t=e.map(o=>Ga(o)?ND(wt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Wt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function fw(n){let e;try{e=JSON.parse(n)}catch{return null}return wD(e)?e:null}/**
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
 */function LD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function MD(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function pw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function FD(n,e){return e}class Oe{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||FD}}let to=null;function UD(n){return!Ga(n)||n.length<2?n:pw(n)}function mw(){if(to)return to;const n=[];n.push(new Oe("bucket")),n.push(new Oe("generation")),n.push(new Oe("metageneration")),n.push(new Oe("name","fullPath",!0));function e(s,o){return UD(o)}const t=new Oe("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Oe("size");return i.xform=r,n.push(i),n.push(new Oe("timeCreated")),n.push(new Oe("updated")),n.push(new Oe("md5Hash",null,!0)),n.push(new Oe("cacheControl",null,!0)),n.push(new Oe("contentDisposition",null,!0)),n.push(new Oe("contentEncoding",null,!0)),n.push(new Oe("contentLanguage",null,!0)),n.push(new Oe("contentType",null,!0)),n.push(new Oe("metadata","customMetadata",!0)),to=n,to}function VD(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Ye(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function BD(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return VD(r,n),r}function gw(n,e,t){const r=fw(e);return r===null?null:BD(n,r,t)}function $D(n,e,t,r){const i=fw(e);if(i===null||!Ga(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=Vs(d,t,r),g=cw({alt:"media",token:u});return f+g})[0]}function yw(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class si{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Dt(n){if(!n)throw Ah()}function Ch(n,e){function t(r,i){const s=gw(n,i,e);return Dt(s!==null),s}return t}function qD(n,e){function t(r,i){const s=gw(n,i,e);return Dt(s!==null),$D(s,i,n.host,n._protocol)}return t}function Bs(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=sD():i=iD():t.getStatus()===402?i=rD(n.bucket):t.getStatus()===403?i=oD(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vw(n){const e=Bs(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=nD(n.path)),s.serverResponse=i.serverResponse,s}return t}function jD(n,e,t){const r=e.fullServerUrl(),i=Vs(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new si(i,s,Ch(n,t),o);return a.errorHandler=vw(e),a}function zD(n,e,t){const r=e.fullServerUrl(),i=Vs(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new si(i,s,qD(n,t),o);return a.errorHandler=vw(e),a}function GD(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ww(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=GD(null,e)),r}function KD(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let O=0;O<2;O++)R=R+Math.random().toString().slice(2);return R}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ww(e,r,i),l=yw(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Wt.getBlob(h,r,d);if(f===null)throw ow();const g={name:u.fullPath},_=Vs(s,n.host,n._protocol),I="POST",x=n.maxUploadRetryTime,L=new si(_,I,Ch(n,t),x);return L.urlParams=g,L.headers=o,L.body=f.uploadData(),L.errorHandler=Bs(e),L}class Ko{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function Rh(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Dt(!1)}return Dt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function HD(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o=ww(e,r,i),a={name:o.fullPath},c=Vs(s,n.host,n._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=yw(o,t),d=n.maxUploadRetryTime;function f(_){Rh(_);let I;try{I=_.getResponseHeader("X-Goog-Upload-URL")}catch{Dt(!1)}return Dt(Ga(I)),I}const g=new si(c,u,f,d);return g.urlParams=a,g.headers=l,g.body=h,g.errorHandler=Bs(e),g}function WD(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=Rh(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Dt(!1)}h||Dt(!1);const d=Number(h);return Dt(!isNaN(d)),new Ko(d,r.size(),l==="final")}const o="POST",a=n.maxUploadRetryTime,c=new si(t,o,s,a);return c.headers=i,c.errorHandler=Bs(e),c}const zf=256*1024;function QD(n,e,t,r,i,s,o,a){const c=new Ko(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw lD();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},_=r.slice(h,d);if(_===null)throw ow();function I(O,q){const F=Rh(O,["active","final"]),ie=c.current+l,xe=r.size();let ut;return F==="final"?ut=Ch(e,s)(O,q):ut=null,new Ko(ie,xe,F==="final",ut)}const x="POST",L=e.maxUploadRetryTime,R=new si(t,x,I,L);return R.headers=g,R.body=_.uploadData(),R.progressCallback=a||null,R.errorHandler=Bs(n),R}const qe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function kc(n){switch(n){case"running":case"pausing":case"canceling":return qe.RUNNING;case"paused":return qe.PAUSED;case"success":return qe.SUCCESS;case"canceled":return qe.CANCELED;case"error":return qe.ERROR;default:return qe.ERROR}}/**
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
 */class YD{constructor(e,t,r){if(vD(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function fr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class XD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw yi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw yi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw yi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw yi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw yi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class JD extends XD{initXhr(){this.xhr_.responseType="text"}}function yr(){return new JD}/**
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
 */class ZD{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=mw(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Y.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(uw(i.status,[]))if(s)i=iw();else{this.sleepTime=Math.max(this.sleepTime*2,tD),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Y.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=HD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yr,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=WD(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,yr,t,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zf*this._chunkMultiplier,t=new Ko(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=QD(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,yr,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=jD(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,yr,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=KD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yr,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=sw(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=kc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const s=new YD(t||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(kc(this._state)){case qe.SUCCESS:fr(this._resolve.bind(null,this.snapshot))();break;case qe.CANCELED:case qe.ERROR:const t=this._reject;fr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(kc(this._state)){case qe.RUNNING:case qe.PAUSED:e.next&&fr(e.next.bind(e,this.snapshot))();break;case qe.SUCCESS:e.complete&&fr(e.complete.bind(e))();break;case qe.CANCELED:case qe.ERROR:e.error&&fr(e.error.bind(e,this._error))();break;default:e.error&&fr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class tr{constructor(e,t){this._service=e,t instanceof Ye?this._location=t:this._location=Ye.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new tr(e,t)}get root(){const e=new Ye(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pw(this._location.path)}get storage(){return this._service}get parent(){const e=LD(this._location.path);if(e===null)return null;const t=new Ye(this._location.bucket,e);return new tr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw fD(e)}}function e1(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new ZD(n,new Wt(e),t)}function t1(n){n._throwIfRoot("getDownloadURL");const e=zD(n.storage,n._location,mw());return n.storage.makeRequestWithTokens(e,yr).then(t=>{if(t===null)throw hD();return t})}function n1(n,e){const t=MD(n._location.path,e),r=new Ye(n._location.bucket,t);return new tr(n.storage,r)}/**
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
 */function r1(n){return/^[A-Za-z]+:\/\//.test(n)}function i1(n,e){return new tr(n,e)}function _w(n,e){if(n instanceof Nh){const t=n;if(t._bucket==null)throw uD();const r=new tr(t,t._bucket);return e!=null?_w(r,e):r}else return e!==void 0?n1(n,e):n}function s1(n,e){if(e&&r1(e)){if(n instanceof Nh)return i1(n,e);throw Su("To use ref(service, url), the first argument must be a Storage instance.")}else return _w(n,e)}function Gf(n,e){const t=e==null?void 0:e[rw];return t==null?null:Ye.makeFromBucketSpec(t,n)}function o1(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Zf(i,n.app.options.projectId))}class Nh{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZN,this._maxUploadRetryTime=eD,this._requests=new Set,i!=null?this._bucket=Ye.makeFromBucketSpec(i,this._host):this._bucket=Gf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ye.makeFromBucketSpec(this._url,e):this._bucket=Gf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new tr(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new pD(aw());{const o=SD(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Kf="@firebase/storage",Hf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="storage";function g1(n,e,t){return n=C(n),e1(n,e,t)}function y1(n){return n=C(n),t1(n)}function v1(n,e){return n=C(n),s1(n,e)}function w1(n=Qo(),e){n=C(n);const r=dn(n,Iw).getImmediate({identifier:e}),i=Xf("storage");return i&&a1(r,...i),r}function a1(n,e,t,r={}){o1(n,e,t,r)}function c1(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Nh(t,r,i,e,Mt)}function u1(){Je(new Ve(Iw,c1,"PUBLIC").setMultipleInstances(!0)),Se(Kf,Hf,""),Se(Kf,Hf,"esm2017")}u1();export{m1 as U,Nv as _,$f as a,zo as b,Uf as c,f1 as d,w1 as e,JN as f,p1 as g,y1 as h,kN as i,Ff as m,v1 as r,g1 as u,NN as y};
