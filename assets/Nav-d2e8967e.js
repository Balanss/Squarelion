import{t as W,v as De,w as Le,x as Be,z as Me,C as Fe,A as ae,B as qe,S as He,D as ze,E as je,r as N,h as _e,u as $e,R as Ge,a as $,F as Y,j as E,U as Xe,b as Ve,L as We}from"./index-2ebb3764.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="firebasestorage.googleapis.com",me="storageBucket",Ke=2*60*1e3,Ze=10*60*1e3,Ye=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends ze{constructor(e,n,s=0){super(J(e),`Firebase Storage: ${n} (${J(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return J(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function J(t){return"storage/"+t}function ne(){const t="An unknown error occurred, please check the error payload for server response.";return new _(h.UNKNOWN,t)}function Je(t){return new _(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Qe(t){return new _(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function et(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _(h.UNAUTHENTICATED,t)}function tt(){return new _(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nt(t){return new _(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ge(){return new _(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function be(){return new _(h.CANCELED,"User canceled the upload/download.")}function st(t){return new _(h.INVALID_URL,"Invalid URL '"+t+"'.")}function rt(t){return new _(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function it(){return new _(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+me+"' property when initializing the app?")}function Re(){return new _(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ot(){return new _(h.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function at(){return new _(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ut(t){return new _(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function te(t){return new _(h.INVALID_ARGUMENT,t)}function we(){return new _(h.APP_DELETED,"The Firebase app was deleted.")}function lt(t){return new _(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function H(t,e){return new _(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function q(t){throw new _(h.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=U.makeFromUrl(e,n)}catch{return new U(e,"")}if(s.path==="")return s;throw rt(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",u=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function l(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${p}/${c}/b/${r}/o${m}`,"i"),b={bucket:1,path:3},y=n===pe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",A=new RegExp(`^https?://${y}/${r}/${f}`,"i"),R=[{regex:u,indices:a,postModify:i},{regex:g,indices:b,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<R.length;w++){const S=R[w],P=S.regex.exec(e);if(P){const F=P[S.indices.bucket];let I=P[S.indices.path];I||(I=""),s=new U(F,I),S.postModify(s);break}}if(s==null)throw st(e);return s}}class ct{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e,n){let s=1,r=null,i=null,o=!1,u=0;function a(){return u===2}let l=!1;function c(...f){l||(l=!0,e.apply(null,f))}function p(f){r=setTimeout(()=>{r=null,t(g,a())},f)}function m(){i&&clearTimeout(i)}function g(f,...A){if(l){m();return}if(f){m(),c.call(null,f,...A);return}if(a()||o){m(),c.call(null,f,...A);return}s<64&&(s*=2);let R;u===1?(u=2,R=0):R=(s+Math.random())*1e3,p(R)}let b=!1;function y(f){b||(b=!0,m(),!l&&(r!==null?(f||(u=2),clearTimeout(r),p(0)):f||(u=1)))}return p(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function dt(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t!==void 0}function _t(t){return typeof t=="function"}function pt(t){return typeof t=="object"&&!Array.isArray(t)}function K(t){return typeof t=="string"||t instanceof String}function ue(t){return se()&&t instanceof Blob}function se(){return typeof Blob<"u"&&!je()}function le(t,e,n,s){if(s<e)throw te(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw te(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Te(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(x||(x={}));/**
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
 */function ye(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,s,r,i,o,u,a,l,c,p,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,b)=>{this.resolve_=g,this.reject_=b,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new G(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=u=>{const a=u.loaded,l=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const u=i.getErrorCode()===x.NO_ERROR,a=i.getStatus();if(!u||ye(a,this.additionalRetryCodes_)&&this.retry){const c=i.getErrorCode()===x.ABORT;s(!1,new G(!1,null,c));return}const l=this.successCodes_.indexOf(a)!==-1;s(!0,new G(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(u,u.getResponse());ft(a)?i(a):i()}catch(a){o(a)}else if(u!==null){const a=ne();a.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,a)):o(a)}else if(r.canceled){const a=this.appDelete_?we():be();o(a)}else{const a=ge();o(a)}};this.canceled_?n(!1,new G(!1,null,!0)):this.backoffId_=ht(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class G{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function gt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Rt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Tt(t,e,n,s,r,i,o=!0){const u=Te(t.urlParams),a=t.url+u,l=Object.assign({},t.headers);return Rt(l,e),gt(l,n),bt(l,i),wt(l,s),new mt(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function kt(...t){const e=yt();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(se())return new Blob(t);throw new _(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Ut(t){if(typeof atob>"u")throw ut("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Q{constructor(e,n){this.data=e,this.contentType=n||null}}function At(t,e){switch(t){case O.RAW:return new Q(ke(e));case O.BASE64:case O.BASE64URL:return new Q(Ee(t,e));case O.DATA_URL:return new Q(Nt(e),Ot(e))}throw ne()}function ke(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function St(t){let e;try{e=decodeURIComponent(t)}catch{throw H(O.DATA_URL,"Malformed data URL.")}return ke(e)}function Ee(t,e){switch(t){case O.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw H(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case O.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw H(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ut(e)}catch(r){throw r.message.includes("polyfill")?r:H(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ue{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw H(O.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=vt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Nt(t){const e=new Ue(t);return e.base64?Ee(O.BASE64,e.rest):St(e.rest)}function Ot(t){return new Ue(t).contentType}function vt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,n){let s=0,r="";ue(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(ue(this.data_)){const s=this.data_,r=Et(s,e,n);return r===null?null:new C(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new C(s,!0)}}static getBlob(...e){if(se()){const n=e.map(s=>s instanceof C?s.data_:s);return new C(kt.apply(null,n))}else{const n=e.map(o=>K(o)?At(O.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let u=0;u<o.length;u++)r[i++]=o[u]}),new C(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){let e;try{e=JSON.parse(t)}catch{return null}return pt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ct(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Se(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){return e}class T{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||It}}let X=null;function xt(t){return!K(t)||t.length<2?t:Se(t)}function Ne(){if(X)return X;const t=[];t.push(new T("bucket")),t.push(new T("generation")),t.push(new T("metageneration")),t.push(new T("name","fullPath",!0));function e(i,o){return xt(o)}const n=new T("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new T("size");return r.xform=s,t.push(r),t.push(new T("timeCreated")),t.push(new T("updated")),t.push(new T("md5Hash",null,!0)),t.push(new T("cacheControl",null,!0)),t.push(new T("contentDisposition",null,!0)),t.push(new T("contentEncoding",null,!0)),t.push(new T("contentLanguage",null,!0)),t.push(new T("contentType",null,!0)),t.push(new T("metadata","customMetadata",!0)),X=t,X}function Dt(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new U(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Lt(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Dt(s,t),s}function Oe(t,e,n){const s=Ae(e);return s===null?null:Lt(t,s,n)}function Bt(t,e,n,s){const r=Ae(e);if(r===null||!K(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const c=t.bucket,p=t.fullPath,m="/b/"+o(c)+"/o/"+o(p),g=z(m,n,s),b=Te({alt:"media",token:l});return g+b})[0]}function ve(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class M{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t){if(!t)throw ne()}function re(t,e){function n(s,r){const i=Oe(t,r,e);return v(i!==null),i}return n}function Mt(t,e){function n(s,r){const i=Oe(t,r,e);return v(i!==null),Bt(i,r,t.host,t._protocol)}return n}function j(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=tt():r=et():n.getStatus()===402?r=Qe(t.bucket):n.getStatus()===403?r=nt(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Pe(t){const e=j(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Je(t.path)),i.serverResponse=r.serverResponse,i}return n}function Ft(t,e,n){const s=e.fullServerUrl(),r=z(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new M(r,i,re(t,n),o);return u.errorHandler=Pe(e),u}function qt(t,e,n){const s=e.fullServerUrl(),r=z(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new M(r,i,Mt(t,n),o);return u.errorHandler=Pe(e),u}function Ht(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ce(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Ht(null,e)),s}function zt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function u(){let R="";for(let w=0;w<2;w++)R=R+Math.random().toString().slice(2);return R}const a=u();o["Content-Type"]="multipart/related; boundary="+a;const l=Ce(e,s,r),c=ve(l,n),p="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+l.contentType+`\r
\r
`,m=`\r
--`+a+"--",g=C.getBlob(p,s,m);if(g===null)throw Re();const b={name:l.fullPath},y=z(i,t.host,t._protocol),f="POST",A=t.maxUploadRetryTime,d=new M(y,f,re(t,n),A);return d.urlParams=b,d.headers=o,d.body=g.uploadData(),d.errorHandler=j(e),d}class V{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function ie(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{v(!1)}return v(!!n&&(e||["active"]).indexOf(n)!==-1),n}function jt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Ce(e,s,r),u={name:o.fullPath},a=z(i,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=ve(o,n),m=t.maxUploadRetryTime;function g(y){ie(y);let f;try{f=y.getResponseHeader("X-Goog-Upload-URL")}catch{v(!1)}return v(K(f)),f}const b=new M(a,l,g,m);return b.urlParams=u,b.headers=c,b.body=p,b.errorHandler=j(e),b}function $t(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const c=ie(l,["active","final"]);let p=null;try{p=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{v(!1)}p||v(!1);const m=Number(p);return v(!isNaN(m)),new V(m,s.size(),c==="final")}const o="POST",u=t.maxUploadRetryTime,a=new M(n,o,i,u);return a.headers=r,a.errorHandler=j(e),a}const ce=256*1024;function Gt(t,e,n,s,r,i,o,u){const a=new V(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw ot();const l=a.total-a.current;let c=l;r>0&&(c=Math.min(c,r));const p=a.current,m=p+c;let g="";c===0?g="finalize":l===c?g="upload, finalize":g="upload";const b={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${a.current}`},y=s.slice(p,m);if(y===null)throw Re();function f(w,S){const P=ie(w,["active","final"]),F=a.current+c,I=s.size();let Z;return P==="final"?Z=re(e,i)(w,S):Z=null,new V(F,I,P==="final",Z)}const A="POST",d=e.maxUploadRetryTime,R=new M(n,A,f,d);return R.headers=b,R.body=y.uploadData(),R.progressCallback=u||null,R.errorHandler=j(t),R}const k={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(t){switch(t){case"running":case"pausing":case"canceling":return k.RUNNING;case"paused":return k.PAUSED;case"success":return k.SUCCESS;case"canceled":return k.CANCELED;case"error":return k.ERROR;default:return k.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,s){if(_t(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Vt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=x.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=x.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=x.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw q("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw q("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw q("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw q("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw q("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Wt extends Vt{initXhr(){this.xhr_.responseType="text"}}function B(){return new Wt}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Ne(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(h.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(ye(r.status,[]))if(i)r=ge();else{this.sleepTime=Math.max(this.sleepTime*2,Ye),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(h.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=jt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,B,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=$t(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,B,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ce*this._chunkMultiplier,n=new V(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Gt(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const u=this._ref.storage._makeRequest(o,B,r,i,!1);this._request=u,u.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ce*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=Ft(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,B,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=zt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,B,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=be(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new Xt(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ee(this._state)){case k.SUCCESS:L(this._resolve.bind(null,this.snapshot))();break;case k.CANCELED:case k.ERROR:const n=this._reject;L(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ee(this._state)){case k.RUNNING:case k.PAUSED:e.next&&L(e.next.bind(e,this.snapshot))();break;case k.SUCCESS:e.complete&&L(e.complete.bind(e))();break;case k.CANCELED:case k.ERROR:e.error&&L(e.error.bind(e,this._error))();break;default:e.error&&L(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class D{constructor(e,n){this._service=e,n instanceof U?this._location=n:this._location=U.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new D(e,n)}get root(){const e=new U(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Se(this._location.path)}get storage(){return this._service}get parent(){const e=Pt(this._location.path);if(e===null)return null;const n=new U(this._location.bucket,e);return new D(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lt(e)}}function Zt(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Kt(t,new C(e),n)}function Yt(t){t._throwIfRoot("getDownloadURL");const e=qt(t.storage,t._location,Ne());return t.storage.makeRequestWithTokens(e,B).then(n=>{if(n===null)throw at();return n})}function Jt(t,e){const n=Ct(t._location.path,e),s=new U(t._location.bucket,n);return new D(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){return/^[A-Za-z]+:\/\//.test(t)}function en(t,e){return new D(t,e)}function Ie(t,e){if(t instanceof oe){const n=t;if(n._bucket==null)throw it();const s=new D(n,n._bucket);return e!=null?Ie(s,e):s}else return e!==void 0?Jt(t,e):t}function tn(t,e){if(e&&Qt(e)){if(t instanceof oe)return en(t,e);throw te("To use ref(service, url), the first argument must be a Storage instance.")}else return Ie(t,e)}function he(t,e){const n=e==null?void 0:e[me];return n==null?null:U.makeFromBucketSpec(n,t)}function nn(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:qe(r,t.app.options.projectId))}class oe{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=pe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ke,this._maxUploadRetryTime=Ze,this._requests=new Set,r!=null?this._bucket=U.makeFromBucketSpec(r,this._host):this._bucket=he(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=U.makeFromBucketSpec(this._url,e):this._bucket=he(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){le("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){le("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new D(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new ct(we());{const o=Tt(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const de="@firebase/storage",fe="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="storage";function ln(t,e,n){return t=W(t),Zt(t,e,n)}function cn(t){return t=W(t),Yt(t)}function hn(t,e){return t=W(t),tn(t,e)}function dn(t=Be(),e){t=W(t);const s=De(t,xe).getImmediate({identifier:e}),r=Le("storage");return r&&sn(s,...r),s}function sn(t,e,n,s={}){nn(t,e,n,s)}function rn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new oe(n,s,r,e,He)}function on(){Me(new Fe(xe,rn,"PUBLIC").setMultipleInstances(!0)),ae(de,fe,""),ae(de,fe,"esm2017")}on();function an({setUserPermit:t}){const e=async()=>{try{return _e.collection("admin").onSnapshot(s=>{const r=s.docs.map(i=>({id:i.id,...i.data()}));r.sort((i,o)=>i.id-o.id),t(r)})}catch(n){console.error("Error fetching user permit data:",n)}};N.useEffect(()=>{e()},[])}function fn(){const[t,e]=N.useState(0),[n,s]=N.useState(""),[r,i]=N.useState(""),[o,u]=N.useState(""),a=$e();Ge.useState(null),N.useEffect(()=>{u(localStorage.getItem("user"))},[o]);const[l,c]=N.useState([]),p=async()=>{try{return _e.collection("admin").onSnapshot(R=>{const w=R.docs.map(S=>({id:S.id,...S.data()}));w.sort((S,P)=>{const F=parseInt(S.id.split("-")[0]),I=parseInt(P.id.split("-")[0]);return F-I}),c(w)})}catch{}};N.useEffect(()=>{p()},[]);const[m,g]=N.useState(!1);N.useEffect(()=>{const d=()=>{g(window.innerWidth<768)};return d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]);const[b,y]=N.useState([]),f=b.filter(d=>d.request>="Awaiting Request");f.length>0&&f.length;const A=[{id:`/user/${t}`,title:t},{id:"/admindashboard",title:"Admin"},{id:"logout",title:"Logout"}];return $(Y,{children:[E(an,{setUserPermit:y}),E(Xe,{setUser:e,user:t,level:n,setLevel:s,setUuid:i,uuid:r}),r&&n>2&&E(Y,{children:E("div",{className:"flex font-mono items-center justify-center sm:w-[400px] mt-2 sm:items-center sm:m-auto sm:justify-around ",children:A.map((d,R)=>n<10&&d.id==="/admindashboard"?null:$("span",{className:" cursor-pointer mr-5 relative mt-2 mb-2 md:px-5 md:py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group",onClick:()=>{d.id==="logout"&&Ve.signOut().then(()=>{a("/"),localStorage.clear(),e(0),s(0),i(null)}),d.id==="/admindashboard"&&a("/admindashboard"),d.id===`/user/${t}`&&a(`/user/${t}`)},children:[E("span",{className:"absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow-600 group-hover:w-full ease"}),E("span",{className:"absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow-600 group-hover:w-full ease"}),E("span",{className:"absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"}),E("span",{className:"absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"}),E("span",{className:"absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-900 opacity-0 group-hover:opacity-100"}),E("span",{className:"relative transition-colors duration-300 delay-200 group-hover:text-white ease",children:E("button",{className:" text-center text-sm cursor-pointer  p1  m-auto ",children:d.title.charAt(0).toUpperCase()+d.title.slice(1).toLowerCase()})})]},R))})}),!r&&E(Y,{children:E("div",{className:"flex font-mono items-center justify-center sm:w-[300px]  sm:items-center sm:m-auto sm:justify-around ",children:$("button",{type:"button",className:"w-[80px] text-white bg-gradient-to-r mt-2 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:[" ",$(We,{to:"/login",className:"mr-10 mt-4",children:[" ","Login"," "]})]})})})]})}export{fn as N,cn as a,dn as g,hn as r,ln as u};
