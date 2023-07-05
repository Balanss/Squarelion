import{r as c,g as J,a as Q,s as M,_ as w,b as oe,e as xe,c as Y,j as s,d as V,f as re,h as ae,i as ee,k as D,l as ce,m as ve,n as we,u as pe,R as Se,L as ke}from"./index-75200845.js";import{u as Ce,B as je,b as ye,A as $e,U as me,M as Re,P as fe,_ as O,c as A,d as te,m as Z,f as Ne,e as W,N as Pe,r as Be,h as Fe,i as Le,j as Ie}from"./Nav-e401f1e9.js";import{F as Te}from"./Footer-bf70f7e8.js";import{T as se}from"./Typography-ec46063a.js";import{B as he,P as Me}from"./PartnerLogic-91b2192b.js";const Ue=c.createContext(),de=Ue;function Ge(e){return J("MuiGrid",e)}const ze=[0,1,2,3,4,5,6,7,8,9,10],Ee=["column-reverse","column","row-reverse","row"],qe=["nowrap","wrap-reverse","wrap"],K=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],X=Q("MuiGrid",["root","container","item","zeroMinWidth",...ze.map(e=>`spacing-xs-${e}`),...Ee.map(e=>`direction-xs-${e}`),...qe.map(e=>`wrap-xs-${e}`),...K.map(e=>`grid-xs-${e}`),...K.map(e=>`grid-sm-${e}`),...K.map(e=>`grid-md-${e}`),...K.map(e=>`grid-lg-${e}`),...K.map(e=>`grid-xl-${e}`)]),Oe=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function _(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function Ae({theme:e,ownerState:t}){let o;return e.breakpoints.keys.reduce((r,n)=>{let a={};if(t[n]&&(o=t[n]),!o)return r;if(o===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=re({values:t.columns,breakpoints:e.breakpoints.values}),f=typeof u=="object"?u[n]:u;if(f==null)return r;const i=`${Math.round(o/f*1e8)/1e6}%`;let d={};if(t.container&&t.item&&t.columnSpacing!==0){const l=e.spacing(t.columnSpacing);if(l!=="0px"){const x=`calc(${i} + ${_(l)})`;d={flexBasis:x,maxWidth:x}}}a=w({flexBasis:i,flexGrow:0,maxWidth:i},d)}return e.breakpoints.values[n]===0?Object.assign(r,a):r[e.breakpoints.up(n)]=a,r},{})}function We({theme:e,ownerState:t}){const o=re({values:t.direction,breakpoints:e.breakpoints.values});return ae({theme:e},o,r=>{const n={flexDirection:r};return r.indexOf("column")===0&&(n[`& > .${X.item}`]={maxWidth:"none"}),n})}function ge({breakpoints:e,values:t}){let o="";Object.keys(t).forEach(n=>{o===""&&t[n]!==0&&(o=n)});const r=Object.keys(e).sort((n,a)=>e[n]-e[a]);return r.slice(0,r.indexOf(o))}function De({theme:e,ownerState:t}){const{container:o,rowSpacing:r}=t;let n={};if(o&&r!==0){const a=re({values:r,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=ge({breakpoints:e.breakpoints.values,values:a})),n=ae({theme:e},a,(f,i)=>{var d;const l=e.spacing(f);return l!=="0px"?{marginTop:`-${_(l)}`,[`& > .${X.item}`]:{paddingTop:_(l)}}:(d=u)!=null&&d.includes(i)?{}:{marginTop:0,[`& > .${X.item}`]:{paddingTop:0}}})}return n}function _e({theme:e,ownerState:t}){const{container:o,columnSpacing:r}=t;let n={};if(o&&r!==0){const a=re({values:r,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=ge({breakpoints:e.breakpoints.values,values:a})),n=ae({theme:e},a,(f,i)=>{var d;const l=e.spacing(f);return l!=="0px"?{width:`calc(100% + ${_(l)})`,marginLeft:`-${_(l)}`,[`& > .${X.item}`]:{paddingLeft:_(l)}}:(d=u)!=null&&d.includes(i)?{}:{width:"100%",marginLeft:0,[`& > .${X.item}`]:{paddingLeft:0}}})}return n}function Ve(e,t,o={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o[`spacing-xs-${String(e)}`]];const r=[];return t.forEach(n=>{const a=e[n];Number(a)>0&&r.push(o[`spacing-${n}-${String(a)}`])}),r}const Ke=M("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:r,direction:n,item:a,spacing:u,wrap:f,zeroMinWidth:i,breakpoints:d}=o;let l=[];r&&(l=Ve(u,d,t));const x=[];return d.forEach(S=>{const k=o[S];k&&x.push(t[`grid-${S}-${String(k)}`])}),[t.root,r&&t.container,a&&t.item,i&&t.zeroMinWidth,...l,n!=="row"&&t[`direction-xs-${String(n)}`],f!=="wrap"&&t[`wrap-xs-${String(f)}`],...x]}})(({ownerState:e})=>w({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),We,De,_e,Ae);function He(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const o=[];return t.forEach(r=>{const n=e[r];if(Number(n)>0){const a=`spacing-${r}-${String(n)}`;o.push(a)}}),o}const Ze=e=>{const{classes:t,container:o,direction:r,item:n,spacing:a,wrap:u,zeroMinWidth:f,breakpoints:i}=e;let d=[];o&&(d=He(a,i));const l=[];i.forEach(S=>{const k=e[S];k&&l.push(`grid-${S}-${String(k)}`)});const x={root:["root",o&&"container",n&&"item",f&&"zeroMinWidth",...d,r!=="row"&&`direction-xs-${String(r)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...l]};return ee(x,Ge,t)},Xe=c.forwardRef(function(t,o){const r=oe({props:t,name:"MuiGrid"}),{breakpoints:n}=Ce(),a=xe(r),{className:u,columns:f,columnSpacing:i,component:d="div",container:l=!1,direction:x="row",item:S=!1,rowSpacing:k,spacing:U=0,wrap:E="wrap",zeroMinWidth:I=!1}=a,N=Y(a,Oe),F=k||U,z=i||U,P=c.useContext(de),T=l?f||12:P,j={},C=w({},N);n.keys.forEach(g=>{N[g]!=null&&(j[g]=N[g],delete C[g])});const B=w({},a,{columns:T,container:l,direction:x,item:S,rowSpacing:F,columnSpacing:z,wrap:E,zeroMinWidth:I,spacing:U},j,{breakpoints:n.keys}),L=Ze(B);return s.jsx(de.Provider,{value:T,children:s.jsx(Ke,w({ownerState:B,className:V(L.root,u),as:d,ref:o},C))})}),ue=Xe,ne="https://Balanss.github.io/Squarelion/assets/user-def15e8d.png",Je="https://Balanss.github.io/Squarelion/assets/thumbup-73273f4b.png",Qe="https://Balanss.github.io/Squarelion/assets/thumbdown-fa6379fb.png";function Ye(e){return J("MuiFormGroup",e)}Q("MuiFormGroup",["root","row","error"]);const et=c.createContext(void 0),tt=et;function ie(){return c.useContext(tt)}function be({props:e,states:t,muiFormControl:o}){return t.reduce((r,n)=>(r[n]=e[n],o&&typeof e[n]>"u"&&(r[n]=o[n]),r),{})}const st=["className","row"],ot=e=>{const{classes:t,row:o,error:r}=e;return ee({root:["root",o&&"row",r&&"error"]},Ye,t)},rt=M("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.row&&t.row]}})(({ownerState:e})=>w({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),nt=c.forwardRef(function(t,o){const r=oe({props:t,name:"MuiFormGroup"}),{className:n,row:a=!1}=r,u=Y(r,st),f=ie(),i=be({props:r,muiFormControl:f,states:["error"]}),d=w({},r,{row:a,error:i.error}),l=ot(d);return s.jsx(rt,w({className:V(l.root,n),ownerState:d,ref:o},u))}),at=nt;function it(e){return J("MuiFormControlLabel",e)}const lt=Q("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),H=lt,ct=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],dt=e=>{const{classes:t,disabled:o,labelPlacement:r,error:n,required:a}=e,u={root:["root",o&&"disabled",`labelPlacement${D(r)}`,n&&"error",a&&"required"],label:["label",o&&"disabled"],asterisk:["asterisk",n&&"error"]};return ee(u,it,t)},ut=M("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${H.label}`]:t.label},t.root,t[`labelPlacement${D(o.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>w({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${H.disabled}`]:{cursor:"default"}},t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${H.label}`]:{[`&.${H.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),pt=M("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${H.error}`]:{color:(e.vars||e).palette.error.main}})),mt=c.forwardRef(function(t,o){var r,n;const a=oe({props:t,name:"MuiFormControlLabel"}),{className:u,componentsProps:f={},control:i,disabled:d,disableTypography:l,label:x,labelPlacement:S="end",required:k,slotProps:U={}}=a,E=Y(a,ct),I=ie(),N=(r=d??i.props.disabled)!=null?r:I==null?void 0:I.disabled,F=k??i.props.required,z={disabled:N,required:F};["checked","name","onChange","value","inputRef"].forEach(L=>{typeof i.props[L]>"u"&&typeof a[L]<"u"&&(z[L]=a[L])});const P=be({props:a,muiFormControl:I,states:["error"]}),T=w({},a,{disabled:N,labelPlacement:S,required:F,error:P.error}),j=dt(T),C=(n=U.typography)!=null?n:f.typography;let B=x;return B!=null&&B.type!==se&&!l&&(B=s.jsx(se,w({component:"span"},C,{className:V(j.label,C==null?void 0:C.className),children:B}))),s.jsxs(ut,w({className:V(j.root,u),ownerState:T,ref:o},E,{children:[c.cloneElement(i,z),B,F&&s.jsxs(pt,{ownerState:T,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]}))}),ft=mt;function ht(e){return J("PrivateSwitchBase",e)}Q("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const gt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],bt=e=>{const{classes:t,checked:o,disabled:r,edge:n}=e,a={root:["root",o&&"checked",r&&"disabled",n&&`edge${D(n)}`],input:["input"]};return ee(a,ht,t)},xt=M(je)(({ownerState:e})=>w({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),vt=M("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),wt=c.forwardRef(function(t,o){const{autoFocus:r,checked:n,checkedIcon:a,className:u,defaultChecked:f,disabled:i,disableFocusRipple:d=!1,edge:l=!1,icon:x,id:S,inputProps:k,inputRef:U,name:E,onBlur:I,onChange:N,onFocus:F,readOnly:z,required:P=!1,tabIndex:T,type:j,value:C}=t,B=Y(t,gt),[L,g]=ye({controlled:n,default:!!f,name:"SwitchBase",state:"checked"}),v=ie(),p=q=>{F&&F(q),v&&v.onFocus&&v.onFocus(q)},h=q=>{I&&I(q),v&&v.onBlur&&v.onBlur(q)},m=q=>{if(q.nativeEvent.defaultPrevented)return;const le=q.target.checked;g(le),N&&N(q,le)};let b=i;v&&typeof b>"u"&&(b=v.disabled);const y=j==="checkbox"||j==="radio",$=w({},t,{checked:L,disabled:b,disableFocusRipple:d,edge:l}),G=bt($);return s.jsxs(xt,w({component:"span",className:V(G.root,u),centerRipple:!0,focusRipple:!d,disabled:b,tabIndex:null,role:void 0,onFocus:p,onBlur:h,ownerState:$,ref:o},B,{children:[s.jsx(vt,w({autoFocus:r,checked:n,defaultChecked:f,className:G.input,disabled:b,id:y?S:void 0,name:E,onChange:m,readOnly:z,ref:U,required:P,ownerState:$,tabIndex:T,type:j},j==="checkbox"&&C===void 0?{}:{value:C},k)),L?a:x]}))}),St=wt;function kt(e){return J("MuiSwitch",e)}const Ct=Q("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),R=Ct,jt=["className","color","edge","size","sx"],yt=e=>{const{classes:t,edge:o,size:r,color:n,checked:a,disabled:u}=e,f={root:["root",o&&`edge${D(o)}`,`size${D(r)}`],switchBase:["switchBase",`color${D(n)}`,a&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},i=ee(f,kt,t);return w({},t,i)},$t=M("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${D(o.edge)}`],t[`size${D(o.size)}`]]}})(({ownerState:e})=>w({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${R.thumb}`]:{width:16,height:16},[`& .${R.switchBase}`]:{padding:4,[`&.${R.checked}`]:{transform:"translateX(16px)"}}})),Rt=M(St,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${R.input}`]:t.input},o.color!=="default"&&t[`color${D(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${R.checked}`]:{transform:"translateX(20px)"},[`&.${R.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${R.checked} + .${R.track}`]:{opacity:.5},[`&.${R.disabled} + .${R.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${R.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>w({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:ce(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${R.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ce(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${R.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${e.palette.mode==="light"?ve(e.palette[t.color].main,.62):we(e.palette[t.color].main,.55)}`}},[`&.${R.checked} + .${R.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),Nt=M("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),Pt=M("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Bt=c.forwardRef(function(t,o){const r=oe({props:t,name:"MuiSwitch"}),{className:n,color:a="primary",edge:u=!1,size:f="medium",sx:i}=r,d=Y(r,jt),l=w({},r,{color:a,edge:u,size:f}),x=yt(l),S=s.jsx(Pt,{className:x.thumb,ownerState:l});return s.jsxs($t,{className:V(x.root,n),sx:i,ownerState:l,children:[s.jsx(Rt,w({type:"checkbox",icon:S,checkedIcon:S,ref:o,ownerState:l},d,{classes:w({},x,{root:x.switchBase})})),s.jsx(Nt,{className:x.track,ownerState:l})]})}),Ft=Bt,Lt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,color:"black"};M(fe)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}));function It(){const[e,t]=c.useState([]),[o,r]=c.useState(""),[n,a]=c.useState(""),[u,f]=c.useState(""),[i,d]=c.useState("waiting");pe();const[l,x]=c.useState("");function S(p,h){h.preventDefault(),e.map((m,b)=>{if(b===p){const y=O(W,"admin"),$=A(y,m.id),G=parseInt(l);te($,{level:G})}})}function k(p){e.map((h,m)=>{if(m===p){const b=O(W,"admin"),y=A(b,h.id);te(y,{request:"Accepted"},{merge:!0});const $=O(W,"notInOffice"),G=A($,h.Name);Z(G,{[h.time]:{request:"Accepted"}},{merge:!0})}})}function U(p){e.map((h,m)=>{if(m===p){const b=O(W,"admin"),y=A(b,h.id);te(y,{request:"Denied"},{merge:!0});const $=O(W,"notInOffice"),G=A($,h.Name);Z(G,{[h.time]:{request:"Denied"}},{merge:!0})}})}function E(p){e.map((h,m)=>{if(m===p){const b=O(W,"admin"),y=A(b,h.id);te(y,{request:""},{merge:!0});const $=O(W,"notInOffice"),G=A($,h.Name);Z(G,{[h.time]:{request:""}},{merge:!0})}})}const[I,N]=c.useState([]),F=async()=>{try{return Ne.collection("notInOffice").onSnapshot(h=>{const m=h.docs.map(b=>({id:b.id,...b.data()}));m.sort((b,y)=>b.id-y.id),N(m)})}catch(p){console.error("Error fetching WFH/Office data:",p)}};c.useEffect(()=>{F()},[]);const[z,P]=Se.useState(!1),T=()=>P(!0),j=()=>P(!1),[C,B]=c.useState(null),L=p=>{B(p)},[g,v]=c.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx($e,{setUserPermit:t}),s.jsx(me,{setUser:r,user:o,setUuid:a,setIsAccepted:f,level:i,setLevel:d}),i>9&&s.jsx(s.Fragment,{children:s.jsxs("div",{className:"user-settings-admin",children:[s.jsx(at,{children:s.jsx(ft,{onClick:()=>v(g===!1),control:s.jsx(Ft,{defaultChecked:!0}),style:{color:"black"},label:g===!1?"Approved users":"Un-Approved users"})}),s.jsx("div",{className:"user-levels",children:g===!1?s.jsx("div",{className:"inside-user-levels",children:e.map((p,h)=>{if(p.level>0)return s.jsxs("div",{className:"user-level-div",children:[s.jsx("img",{className:"user-pfp",src:ne,style:{width:"30px"}}),s.jsx("h4",{onClick:()=>{T()},className:"user-name-edit",children:p.Name}),s.jsx(Re,{open:z,onClose:j,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:s.jsxs(he,{sx:Lt,children:[s.jsxs(se,{id:"modal-modal-title",variant:"h6",component:"h2",children:[I.map(m=>s.jsx("button",{style:{marginLeft:"10px"},onClick:()=>L(m),children:m.id},m.id)),C&&s.jsxs("div",{children:[s.jsxs("h2",{children:["Selected User: ",C.id]}),Object.entries(C).map(([m,b])=>{if(m!=="id"){const{reason:y,time:$,user:G}=b;return s.jsxs("div",{children:[s.jsxs("p",{children:["Reason: ",y]}),s.jsxs("p",{children:["Time: ",$]}),s.jsx("hr",{})]},m)}return null})]})]}),s.jsx(se,{id:"modal-modal-description",sx:{mt:2}})]})}),s.jsxs("h4",{className:"user-level",children:["User Level: ",p.level]}),s.jsx("form",{onSubmit:m=>{S(h,m)},children:p.level!==11?s.jsx("input",{className:"user-input",placeholder:"EDIT USER",onChange:m=>x(m.target.value)}):null}),p.request>""?s.jsx(s.Fragment,{children:s.jsxs("div",{className:"div-request-approval",children:[p.request!=="Waiting Request"?s.jsx("h3",{className:"request-approval",onClick:()=>E(h),children:" Clear  "}):null,s.jsxs("h3",{className:"request-approval",children:[" ",p.request,"  "]}),s.jsxs("div",{children:[s.jsx("img",{src:Je,onClick:()=>k(h),style:{width:"40px",cursor:"pointer"}}),s.jsx("img",{src:Qe,onClick:()=>U(h),style:{width:"40px",cursor:"pointer"}})]})]})}):null]},h)})}):s.jsx("div",{className:"user-levels-await",children:s.jsx("div",{children:e.map((p,h)=>{if(p.level===0)return s.jsxs("div",{className:"user-level-div",children:[s.jsx("img",{src:ne,style:{width:"30px"}}),s.jsx("h1",{children:p.Name}),s.jsxs("h1",{children:[" User Level: ",p.level]}),s.jsx("form",{onSubmit:m=>{S(h,m)},children:s.jsx("input",{placeholder:"EDIT USER",onChange:m=>x(m.target.value)})})]},h)})})})})]})})]})}const Tt="https://Balanss.github.io/Squarelion/assets/client-acfcdaca.png";M(fe)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}));function qt(){const[e,t]=c.useState(""),[o,r]=c.useState(""),[n,a]=c.useState(""),[u,f]=c.useState(""),[i,d]=c.useState("waiting"),l=pe(),[x,S]=c.useState(),[k,U]=c.useState([]);function E(g){g.preventDefault();const v=O(W,"partner"),p=A(v,e);Z(p,{name:e},{merge:!0});const h=Be(Fe(),`products/partners/${x.name}`),m=Le(h,x);m.on("state_changed",b=>{b.bytesTransferred/b.totalBytes*100},b=>{console.error(b)},async()=>{const b=await Ie(m.snapshot.ref),y=O(W,"partner"),$=A(y,e);Z($,{imageUrl:b,name:e,status:0},{merge:!0})},{merge:!0})}const I=g=>{const v=g.target.files[0];S(v)};function N(g){k.map((v,p)=>{p===g&&(localStorage.setItem("partner",v.name),localStorage.setItem("image",v.imageUrl),setTimeout(()=>{l(`/profile/${v.name}`)},2e3))})}c.useEffect(()=>{const g=setTimeout(()=>{i<8&&l("/"),i>8&&clearTimeout(g)},1e3);return()=>{clearTimeout(g)}},[i,l]);const[F,z]=c.useState(!0);c.useEffect(()=>{const g=setTimeout(()=>{z(!1)},1e3);return()=>{clearTimeout(g)}},[]);const[P,T]=c.useState(!1),[j,C]=c.useState(!1),B=()=>{C(!0)},L=()=>{C(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(Me,{partner:k,setPartner:U}),s.jsxs("div",{className:"signup-main",style:{color:"white"},children:[s.jsx(me,{setUser:r,user:o,setUuid:a,setIsAccepted:f,level:i,setLevel:d}),n!==""&&i>8&&F===!1&&s.jsx(s.Fragment,{children:s.jsxs("div",{style:{backgroundColor:"#194375",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[s.jsxs("div",{style:{backgroundColor:"white"},children:[" ",s.jsx(Pe,{})," "]}),i>9&&s.jsx(s.Fragment,{children:s.jsx("div",{className:"admin-page-btn-switch hover-container",style:{marginTop:"30px"},children:s.jsxs("h1",{onMouseEnter:B,onMouseLeave:L,className:"switching",onClick:()=>T(P===!1),children:[" ",P===!1?s.jsx("img",{className:"usersimg",src:ne}):s.jsx("img",{className:"clientimg",src:Tt}),j&&s.jsx("p",{className:"hover-text",children:P===!1?"Switch to users":"Switch to clients"})]})})}),P===!1&&s.jsx(s.Fragment,{children:s.jsxs("div",{className:"style-admin-page",children:[i>9&&s.jsx(s.Fragment,{children:s.jsxs("form",{onSubmit:E,className:"form-admindb",children:[s.jsx("input",{type:"text",placeholder:"ENTER PARTNER",onChange:g=>t(g.target.value),className:"input-admindb"}),s.jsxs("label",{children:["Image:",s.jsx("input",{type:"file",onChange:I})]}),s.jsx("button",{className:"add-partner",children:" Add Client "})]})}),s.jsx("div",{className:"partner-links",children:s.jsx(he,{sx:{flexGrow:1},children:s.jsx(ue,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:k.map((g,v)=>s.jsxs(ue,{item:!0,xs:2,sm:4,md:4,children:[i===11?s.jsx("img",{className:"partner-image",src:g.imageUrl,onClick:()=>{N(v)},style:{cursor:"pointer",backgroundColor:"white"}},v):null,i!==11&&g.name!=="Test"?s.jsx("img",{className:"partner-image",src:g.imageUrl,onClick:()=>{N(v)},style:{cursor:"pointer",backgroundColor:"white"}},v):null]},v))})})})]})}),P===!0&&s.jsx(It,{}),s.jsx(Te,{})]})}),F===!0&&s.jsx(s.Fragment,{children:s.jsx(ke,{})})]})]})}export{qt as default};
