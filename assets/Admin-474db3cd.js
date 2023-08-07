import{g as K,b as Y,r as o,s as U,_ as b,c as ae,d as ee,j as t,e as Z,f as te,h as j,a as r,i as ne,l as me,k as ue,u as re,R as he,F as W,L as ge,m as pe}from"./index-df1e5a2d.js";import{U as ie,_ as M,d as O,b as D,c as X,m as V,f as fe,a as be,r as xe,e as we,u as ve,h as ye}from"./index.esm2017-79fbd37d.js";import{B as ke,u as Ce,A as Ne,M as Se,P as Re,N as Pe}from"./Nav-0bf4f87c.js";import{F as Te}from"./Footer-044ce82e.js";import{u as ce,h as $e,c as Le,I as Ae}from"./client-cfc2cd7d.js";import{T as J}from"./Typography-d892019c.js";import{B as Fe,P as Ie}from"./PartnerLogic-7cad3a12.js";const Be="/assets/thumbup-73273f4b.png",Ue="/assets/thumbdown-fa6379fb.png";function qe(e){return K("MuiFormGroup",e)}Y("MuiFormGroup",["root","row","error"]);const ze=o.createContext(void 0),Ee=ze;function se(){return o.useContext(Ee)}function de({props:e,states:a,muiFormControl:s}){return a.reduce((n,i)=>(n[i]=e[i],s&&typeof e[i]>"u"&&(n[i]=s[i]),n),{})}const Me=["className","row"],Oe=e=>{const{classes:a,row:s,error:n}=e;return te({root:["root",s&&"row",n&&"error"]},qe,a)},De=U("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.root,s.row&&a.row]}})(({ownerState:e})=>b({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),je=o.forwardRef(function(a,s){const n=ae({props:a,name:"MuiFormGroup"}),{className:i,row:h=!1}=n,x=ee(n,Me),w=se(),c=de({props:n,muiFormControl:w,states:["error"]}),y=b({},n,{row:h,error:c.error}),f=Oe(y);return t(De,b({className:Z(f.root,i),ownerState:y,ref:s},x))}),Ge=je;function _e(e){return K("MuiFormControlLabel",e)}const He=Y("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Q=He,We=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Qe=e=>{const{classes:a,disabled:s,labelPlacement:n,error:i,required:h}=e,x={root:["root",s&&"disabled",`labelPlacement${j(n)}`,i&&"error",h&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",i&&"error"]};return te(x,_e,a)},Ve=U("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[{[`& .${Q.label}`]:a.label},a.root,a[`labelPlacement${j(s.labelPlacement)}`]]}})(({theme:e,ownerState:a})=>b({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Q.disabled}`]:{cursor:"default"}},a.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},a.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},a.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${Q.label}`]:{[`&.${Q.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ze=U("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,a)=>a.asterisk})(({theme:e})=>({[`&.${Q.error}`]:{color:(e.vars||e).palette.error.main}})),Xe=o.forwardRef(function(a,s){var n,i;const h=ae({props:a,name:"MuiFormControlLabel"}),{className:x,componentsProps:w={},control:c,disabled:y,disableTypography:f,label:k,labelPlacement:A="end",required:F,slotProps:_={}}=h,H=ee(h,We),I=se(),q=(n=y??c.props.disabled)!=null?n:I==null?void 0:I.disabled,T=F??c.props.required,G={disabled:q,required:T};["checked","name","onChange","value","inputRef"].forEach(L=>{typeof c.props[L]>"u"&&typeof h[L]<"u"&&(G[L]=h[L])});const $=de({props:h,muiFormControl:I,states:["error"]}),z=b({},h,{disabled:q,labelPlacement:A,required:T,error:$.error}),S=Qe(z),R=(i=_.typography)!=null?i:w.typography;let P=k;return P!=null&&P.type!==J&&!f&&(P=t(J,b({component:"span"},R,{className:Z(S.label,R==null?void 0:R.className),children:P}))),r(Ve,b({className:Z(S.root,x),ownerState:z,ref:s},H,{children:[o.cloneElement(c,G),P,T&&r(Ze,{ownerState:z,"aria-hidden":!0,className:S.asterisk,children:[" ","*"]})]}))}),Je=Xe;function Ke(e){return K("PrivateSwitchBase",e)}Y("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ye=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],et=e=>{const{classes:a,checked:s,disabled:n,edge:i}=e,h={root:["root",s&&"checked",n&&"disabled",i&&`edge${j(i)}`],input:["input"]};return te(h,Ke,a)},tt=U(ke)(({ownerState:e})=>b({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),at=U("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),rt=o.forwardRef(function(a,s){const{autoFocus:n,checked:i,checkedIcon:h,className:x,defaultChecked:w,disabled:c,disableFocusRipple:y=!1,edge:f=!1,icon:k,id:A,inputProps:F,inputRef:_,name:H,onBlur:I,onChange:q,onFocus:T,readOnly:G,required:$=!1,tabIndex:z,type:S,value:R}=a,P=ee(a,Ye),[L,d]=Ce({controlled:i,default:!!w,name:"SwitchBase",state:"checked"}),p=se(),l=E=>{T&&T(E),p&&p.onFocus&&p.onFocus(E)},m=E=>{I&&I(E),p&&p.onBlur&&p.onBlur(E)},g=E=>{if(E.nativeEvent.defaultPrevented)return;const oe=E.target.checked;d(oe),q&&q(E,oe)};let u=c;p&&typeof u>"u"&&(u=p.disabled);const C=S==="checkbox"||S==="radio",N=b({},a,{checked:L,disabled:u,disableFocusRipple:y,edge:f}),B=et(N);return r(tt,b({component:"span",className:Z(B.root,x),centerRipple:!0,focusRipple:!y,disabled:u,tabIndex:null,role:void 0,onFocus:l,onBlur:m,ownerState:N,ref:s},P,{children:[t(at,b({autoFocus:n,checked:i,defaultChecked:w,className:B.input,disabled:u,id:C?A:void 0,name:H,onChange:g,readOnly:G,ref:_,required:$,ownerState:N,tabIndex:z,type:S},S==="checkbox"&&R===void 0?{}:{value:R},F)),L?h:k]}))}),st=rt;function ot(e){return K("MuiSwitch",e)}const nt=Y("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),v=nt,lt=["className","color","edge","size","sx"],it=e=>{const{classes:a,edge:s,size:n,color:i,checked:h,disabled:x}=e,w={root:["root",s&&`edge${j(s)}`,`size${j(n)}`],switchBase:["switchBase",`color${j(i)}`,h&&"checked",x&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=te(w,ot,a);return b({},a,c)},ct=U("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.root,s.edge&&a[`edge${j(s.edge)}`],a[`size${j(s.size)}`]]}})(({ownerState:e})=>b({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${v.thumb}`]:{width:16,height:16},[`& .${v.switchBase}`]:{padding:4,[`&.${v.checked}`]:{transform:"translateX(16px)"}}})),dt=U(st,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.switchBase,{[`& .${v.input}`]:a.input},s.color!=="default"&&a[`color${j(s.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${v.checked}`]:{transform:"translateX(20px)"},[`&.${v.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${v.checked} + .${v.track}`]:{opacity:.5},[`&.${v.disabled} + .${v.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${v.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:a})=>b({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:ne(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.color!=="default"&&{[`&.${v.checked}`]:{color:(e.vars||e).palette[a.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ne(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${a.color}DisabledColor`]:`${e.palette.mode==="light"?me(e.palette[a.color].main,.62):ue(e.palette[a.color].main,.55)}`}},[`&.${v.checked} + .${v.track}`]:{backgroundColor:(e.vars||e).palette[a.color].main}})),mt=U("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,a)=>a.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),ut=U("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,a)=>a.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),ht=o.forwardRef(function(a,s){const n=ae({props:a,name:"MuiSwitch"}),{className:i,color:h="primary",edge:x=!1,size:w="medium",sx:c}=n,y=ee(n,lt),f=b({},n,{color:h,edge:x,size:w}),k=it(f),A=t(ut,{className:k.thumb,ownerState:f});return r(ct,{className:Z(k.root,i),sx:c,ownerState:f,children:[t(dt,b({type:"checkbox",icon:A,checkedIcon:A,ref:s,ownerState:f},y,{classes:b({},k,{root:k.switchBase})})),t(mt,{className:k.track,ownerState:f})]})}),gt=ht,pt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,color:"black"};U(Re)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}));function ft(){const[e,a]=o.useState([]),[s,n]=o.useState(""),[i,h]=o.useState(""),[x,w]=o.useState(""),[c,y]=o.useState("waiting");re();const[f,k]=o.useState("");function A(l,m){m.preventDefault(),e.map((g,u)=>{if(u===l){const C=M(O,"admin"),N=D(C,g.id),B=parseInt(f);X(N,{level:B})}})}function F(l){e.map((m,g)=>{if(g===l){const u=M(O,"admin"),C=D(u,m.id);X(C,{request:"Accepted"},{merge:!0});const N=M(O,"notInOffice"),B=D(N,m.Name);V(B,{[m.time]:{request:"Accepted"}},{merge:!0})}})}function _(l){e.map((m,g)=>{if(g===l){const u=M(O,"admin"),C=D(u,m.id);X(C,{request:"Denied"},{merge:!0});const N=M(O,"notInOffice"),B=D(N,m.Name);V(B,{[m.time]:{request:"Denied"}},{merge:!0})}})}function H(l){e.map((m,g)=>{if(g===l){const u=M(O,"admin"),C=D(u,m.id);X(C,{request:""},{merge:!0});const N=M(O,"notInOffice"),B=D(N,m.Name);V(B,{[m.time]:{request:""}},{merge:!0})}})}const[I,q]=o.useState([]),T=async()=>{try{return fe.collection("notInOffice").onSnapshot(m=>{const g=m.docs.map(u=>({id:u.id,...u.data()}));g.sort((u,C)=>u.id-C.id),q(g)})}catch(l){console.error("Error fetching WFH/Office data:",l)}};o.useEffect(()=>{T()},[]);const[G,$]=he.useState(!1),z=()=>$(!0),S=()=>$(!1),[R,P]=o.useState(null),L=l=>{P(l)},[d,p]=o.useState(!1);return r(W,{children:[t(Ne,{setUserPermit:a}),t(ie,{setUser:n,user:s,setUuid:h,setIsAccepted:w,level:c,setLevel:y}),r("div",{className:"  m-auto p-10 grid grid-cols-1 gap-2    md:w-4/5  xl:w-4/5",children:[d===!1?e.map((l,m)=>r("div",{className:` \r
    m-auto md:min-w-[350px] mb-10 p-10  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\r
    h-[350px]  lg:h-[120px] lg:w-[700px]`,children:[r("div",{className:"flex flex-col items-center pb-10 lg:flex lg:flex-row lg:items-center lg:justify-center ",children:[t("img",{className:"w-6 h-6 mb-3 rounded-full shadow-lg lg:mr-10",src:ce}),r("h5",{className:"mb-1 text-xl font-medium text-gray-900 dark:text-white lg:mr-5",children:[" ",l.Name]}),t("span",{className:"text-sm text-gray-500 dark:text-gray-400 lg:mr-5",children:l.level}),r("div",{className:"flex mt-4 space-x-3 md:mt-6  lg:mt-0",children:[t("h3",{className:"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:mr-5",onClick:()=>{z()},children:"  EDIT"}),t("form",{onSubmit:g=>{A(m,g)},children:l.level!==11?t("input",{className:"text-black",placeholder:"EDIT USER",onChange:g=>k(g.target.value)}):null})]})]}),t("div",{className:"flex flex-col items-center pb-3",children:l.request>""?t(W,{children:r("div",{className:" lg:flex lg:flex-row ",children:[l.request!=="Waiting Request"?t("h3",{className:"request-approval mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ",onClick:()=>H(m),children:" Clear  "}):null,r("h3",{className:"request-approval mr-5 bg-slate-900  p-2 rounded-lg text-white",children:[" ",l.request,"  "]}),r("div",{className:"flex flex-row",children:[t("img",{className:"mr-5",src:Be,onClick:()=>F(m),style:{width:"40px",cursor:"pointer"}}),t("img",{src:Ue,onClick:()=>_(m),style:{width:"40px",cursor:"pointer"}})]})]})}):null})]},m)):null,t(Ge,{children:t(Je,{onClick:()=>p(d===!1),className:"w-[300px]",control:t(gt,{defaultChecked:!0}),style:{color:"black"},label:d===!1?"Approved users":"Un-Approved users"})})]}),t(Se,{open:G,onClose:S,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r(Fe,{sx:pt,children:[r(J,{id:"modal-modal-title",variant:"h6",component:"h2",children:[I.map(l=>t("button",{style:{marginLeft:"10px"},onClick:()=>L(l),children:l.id},l.id)),R&&r("div",{children:[r("h2",{children:["Selected User: ",R.id]}),Object.entries(R).map(([l,m])=>{if(l!=="id"){const{reason:g,time:u,user:C}=m;return r("div",{children:[r("p",{children:["Reason: ",g]}),r("p",{children:["Time: ",u]}),t("hr",{})]},l)}return null})]})]}),t(J,{id:"modal-modal-description",sx:{mt:2}})]})})]})}const bt="/assets/new-arrival-b24be3b5.png",xt="/assets/survey-37b808a5.png";function wt({level:e,user:a,switching:s,setSwitching:n}){const i=re(),h=()=>{be.signOut().then(()=>{i("/"),window.location.reload()})};function x(){localStorage.setItem("user",a),setTimeout(()=>{i(`/user/${a}`)},1e3)}o.useState(!1);const[w,c]=o.useState(!0);return t("aside",{id:"cta-button-sidebar",className:"fixed top-0 left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar",children:t("div",{className:"h-full px-3 py-4 overflow-y-auto  bg-gray-800 dark:bg-gray-800",children:r("ul",{className:"space-y-2 font-medium",children:[t("li",{children:t("a",{className:"flex items-center p-2  text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:t("span",{className:"ml-3",children:"Dashboard"})})}),t("li",{children:r(ge,{to:"/",className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[t("img",{src:$e,className:"w-[40px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"}),t("span",{className:"ml-3 text-white rounded-lg dark:text-white",children:"Home"})]})}),t("li",{children:r("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>n("Client"),children:[t("img",{className:"w-[40px]",src:Le}),t("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"  CLIENTS  "})]})}),e>9?t("li",{children:r("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{n("Users"),c(!1),setTimeout(()=>c(!0),1e3)},children:[t("img",{src:bt,className:"w-[40px]"}),t("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"USERS"})]})}):null,t("li",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer",children:r("a",{onClick:()=>n("Docs"),className:"flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[t("img",{src:xt,className:"w-[40px]"}),t("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"Docs"})]})}),t("li",{children:r("a",{onClick:x,className:`\r
                transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group`,children:[t("img",{src:ce,className:"w-[40px]"}),t("span",{className:"flex-1 ml-3 whitespace-nowrap",children:a})]})}),t("li",{children:r("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:h,children:[t("img",{src:Ae,className:"w-[40px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"}),t("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Sign Out"})]})})]})})})}const le="/assets/doc-1-a807038b.png",vt="/assets/doc-2-2258c7b3.png";function yt(){return t(W,{children:r("div",{className:"text-center text-black md:w-4/5 md:absolute md:right-0 font-extrabold bg-slate-400 p-2 ",children:[t("div",{className:"lg:flex xl:w-[1000px] xl:m-auto lg:items-center ",children:r("ul",{children:[t("li",{className:"mb-4 text-3xl",children:"1. Introduction"}),t("li",{className:"mb-4 text-xl ",children:"2. Overview of Squarelion Agency Planning Tool."}),r("li",{className:"mb-4 text-xl ",children:["3. Admin Page Functionality",r("ol",{className:"lg:flex mb-2 lg:items-center lg:mt-5",children:[t("li",{className:"mb-3 mt-2 text-lg lg:mt-auto",children:"3.1 Accessing the Admin Page "}),t("li",{className:"mb-3  text-lg",children:"3.2 Overview of SQL Clients"}),t("li",{className:"text-lg mb-3",children:"3.3 Client Source Hub"}),t("li",{className:"mb-2 text-lg",children:"3.4 Employee Tab and Access Rights Management"})]})]})]})}),r("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[t("h1",{className:"text-3xl",children:"1. Introduction"}),t("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:"The Squarelion Agency Planning Tool is a comprehensive platform designed to enhance efficiency and streamline operations. This report provides an overview of the tool's e - the Admin Page. The Admin Page serves as the central hub that aggregates and displays essential links to all SQL clients."}),t("h1",{className:"text-3xl mt-5",children:" 2. Overview of Squarelion Agency Planning Tool "}),t("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Squarelion Agency Planning Tool is an innovative solution crafted to optimize workflow and productivity. The tool centralizes all client-related data, making it easier for our team to manage projects, monitor progress, and collaborate effectively. With its intuitive interface and powerful features, the planning tool simplifies complex tasks and empowers our agency to deliver exceptional services to clients."}),t("h1",{className:"text-3xl mt-5",children:" 3. Admin Page Functionality "}),t("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Admin Page is a critical component of the Squarelion Agency Planning Tool, providing a bird's-eye view of all SQL clients in one centralized location. This section outlines the key functionalities of the Admin Page."}),t("h1",{className:"text-3xl mt-5",children:" 3.1 Accessing the Admin Page "}),t("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"To access the Admin Page, users must log in using their unique credentials. Upon successful login, users, depending on their assigned roles and permissions, are directed to the dashboard with various navigation options. The Admin Page is accessible to authorized personnel only, ensuring data security and confidentiality."}),t("img",{src:le,alt:le,className:"mt-10 lg:w-[400px] lg:m-auto lg:mt-10"}),t("h1",{className:"text-3xl mt-5",children:" 3.2 Overview of SQL Clients "}),t("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Upon reaching the Admin Page, users are presented with an overview of all SQL clients associated with Squarelion Agency. The page is organized in a user-friendly manner, allowing quick access to essential client pages. Simply click on the client image to view their content."}),t("h1",{className:"text-3xl mt-5",children:" 3.4 Employee Tab and Access Rights Management "}),t("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"In addition to the Client Source Hub, the Admin Page also incorporates an Employee Tab that allows high-ranking admins to manage employee access rights efficiently. This feature ensures that the appropriate levels of access are granted to each employee, ranging from Level 0 (lowest) to Level 10 (highest). High-ranking admins have exclusive rights to view the current employee levels and modify them as necessary."}),r("h3",{className:"mt-5 indent-5 font-bold text-2xl ",children:["Access Rights Management",r("ol",{children:[r("li",{className:"mb-2 mt-3 text-sm md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:[" View Employee Levels: ",t("br",{})," High-ranking admins can access a list of all employees along with their current access levels. This clear and organized display allows for quick identification and monitoring of employees' access rights. "]}),r("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["Modify Employee Levels: ",t("br",{})," High-ranking admins have the authority to adjust employees' access levels according to their job roles and responsibilities. They can either restrict access by reducing the level or grant higher privileges by increasing the level, thus customizing access rights to fit individual needs."]}),r("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["New User Approval:  ",t("br",{}),' When a new employee joins the agency, high-ranking admins can approve their access by accessing the "Switch Tab." Here, they can review pending users and assign them the appropriate access level. The switch tab provides an easy-to-use interface to grant the required rights to newcomers promptly.',t("img",{src:vt})]}),r("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["Blocking and Restricting Access:  ",t("br",{})," In cases where an employee changes roles or leaves the agency, high-ranking admins can block or restrict their access as needed. This ensures data security and confidentiality by revoking access for former employees."]})]})]})]})]})})}function $t(){const[e,a]=o.useState(""),[s,n]=o.useState(""),[i,h]=o.useState(""),[x,w]=o.useState(""),[c,y]=o.useState("waiting"),f=re(),[k,A]=o.useState(),[F,_]=o.useState([]);function H(d){d.preventDefault();const p=M(O,"partner"),l=D(p,e);V(l,{name:e},{merge:!0});const m=xe(we(),`products/partners/${k.name}`),g=ve(m,k);g.on("state_changed",u=>{u.bytesTransferred/u.totalBytes*100},u=>{console.error(u)},async()=>{const u=await ye(g.snapshot.ref),C=M(O,"partner"),N=D(C,e);V(N,{imageUrl:u,name:e,status:0},{merge:!0})},{merge:!0})}const I=d=>{const p=d.target.files[0];A(p)};function q(d){F.map((p,l)=>{l===d&&(localStorage.setItem("partner",p.name),localStorage.setItem("image",p.imageUrl),setTimeout(()=>{f(`/profile/${p.name}`)},1e3))})}o.useEffect(()=>{const d=setTimeout(()=>{c<8&&f("/"),c>8&&clearTimeout(d)},1e3);return()=>{clearTimeout(d)}},[c,f]);const[T,G]=o.useState(!0);o.useEffect(()=>{const d=setTimeout(()=>{G(!1)},500);return()=>{clearTimeout(d)}},[]);const[$,z]=o.useState("Client"),[S,R]=o.useState(!1);o.useEffect(()=>{const d=()=>{R(window.innerWidth<650)};return d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]);const[P,L]=o.useState(!0);return o.useEffect(()=>{const d=setTimeout(()=>{L(!1)},1500);return()=>clearTimeout(d)},[]),r(W,{children:[t(Ie,{partner:F,setPartner:_}),t(ie,{setUser:n,user:s,setUuid:h,setIsAccepted:w,level:c,setLevel:y}),t("div",{className:"bg-slate-400 min-h-[100vh] flex flex-col items-center justify-between",style:{color:"white"},children:i!==""&&c>8&&T===!1&&t(W,{children:r("div",{children:[r("div",{children:[r("div",{className:"",children:["  ",S&&c>8?t(Pe,{}):null," "]}),t(wt,{level:c,user:s,switching:$,setSwitching:z}),$==="Client"&&t("div",{className:"p-4 w-4/5",children:r("div",{className:`p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-[300px]\r
   md:w-[500px] md:overflow-y-hidden md:ml-[100px]\r
   lg:w-[700px]\r
   xl:w-[900px]\r
    `,children:[t("div",{className:"flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800",children:t("div",{className:` text-center text-2l\r
          text-gray-400 dark:text-gray-500 flex flex-col h-[150px] justify-around\r
          `,children:c>9&&t(W,{children:r("form",{onSubmit:H,className:" flex flex-col items-center",children:[t("input",{type:"text",placeholder:"ENTER CLIENT ",onChange:d=>a(d.target.value),className:"w-[160px] mb-[15px]"}),t("input",{type:"file",className:"w-[100px] mt-[15px]",onChange:I}),t("br",{}),t("div",{className:"border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200",children:"Add Client"})]})})})}),t("div",{className:" bg-gray-800 dark:bg-gray-800",children:t("div",{className:"lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-4 pt-10 pl-10 lg:max-h-[100vh] sm:max-h-[500px] sm:overflow-scroll",children:F.map((d,p)=>t("div",{className:"p-10 mt-15 mb-5 flex justify-center w-[180px] md:w-[180px] md:h-[180px] bg-transparent hover:bg-white transition duration-1000 rounded-sm",children:t("button",{onClick:()=>{q(p)},disabled:c!==11&&d.name==="Test",className:c!==11&&d.name==="Test"?"opacity-20":"opacity-100",children:r("div",{className:"relative",children:[P&&r("svg",{"aria-hidden":"true",className:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),t("img",{className:`transform transition-transform ease-in hover:scale-105 cursor-pointer w-[100px] ${P?"opacity-0":"opacity-100"}`,src:d.imageUrl,alt:"Partner Image"})]})})},d.id))})})]})})]}),$==="Users"&&t(ft,{}),$==="Docs"&&c===11&&t(yt,{})]})})}),r("div",{className:"text-black overflow-hidden  ",children:["    ",t(Te,{})," "]}),T===!0&&t(W,{children:t(pe,{})})]})}export{$t as default};
