import{g as H,b as Q,r as i,s as A,_ as u,c as Z,d as W,j as e,e as j,f as V,h as B,a as r,S as ce,i as ee,l as de,k as me,u as K,F as M,L as he,m as ue}from"./index-0438859f.js";import{U as re,_ as se,d as oe,b as le,c as ge,a as pe,r as fe,e as be,u as xe,h as ye,m as we}from"./index.esm2017-efb5d827.js";import{B as ve,u as ke,A as Ne,P as Se,N as Ce}from"./Nav-54ce07d2.js";import{T as te}from"./Typography-022c52be.js";import{P as Pe}from"./PartnerLogic-dd9c9dff.js";import{h as Te,c as $e,u as Re,I as Le}from"./client-98ca49dd.js";import Ae from"./SqlProperties-563fc689.js";import"./Modal-b8b4eae0.js";import"./Box-1e38f79e.js";function Ie(t){return H("MuiFormGroup",t)}Q("MuiFormGroup",["root","row","error"]);const Fe=i.createContext(void 0),Be=Fe;function Y(){return i.useContext(Be)}function ne({props:t,states:a,muiFormControl:s}){return a.reduce((o,c)=>(o[c]=t[c],s&&typeof t[c]>"u"&&(o[c]=s[c]),o),{})}const Ue=["className","row"],qe=t=>{const{classes:a,row:s,error:o}=t;return V({root:["root",s&&"row",o&&"error"]},Ie,a)},ze=A("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.root,s.row&&a.row]}})(({ownerState:t})=>u({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})),Ee=i.forwardRef(function(a,s){const o=Z({props:a,name:"MuiFormGroup"}),{className:c,row:d=!1}=o,g=W(o,Ue),p=Y(),l=ne({props:o,muiFormControl:p,states:["error"]}),b=u({},o,{row:d,error:l.error}),h=qe(b);return e(ze,u({className:j(h.root,c),ownerState:b,ref:s},g))}),Me=Ee;function De(t){return H("MuiFormControlLabel",t)}const je=Q("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),D=je,Oe=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],_e=t=>{const{classes:a,disabled:s,labelPlacement:o,error:c,required:d}=t,g={root:["root",s&&"disabled",`labelPlacement${B(o)}`,c&&"error",d&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",c&&"error"]};return V(g,De,a)},Ge=A("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[{[`& .${D.label}`]:a.label},a.root,a[`labelPlacement${B(s.labelPlacement)}`]]}})(({theme:t,ownerState:a})=>u({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${D.disabled}`]:{cursor:"default"}},a.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},a.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},a.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${D.label}`]:{[`&.${D.disabled}`]:{color:(t.vars||t).palette.text.disabled}}})),He=A("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(t,a)=>a.asterisk})(({theme:t})=>({[`&.${D.error}`]:{color:(t.vars||t).palette.error.main}})),Qe=i.forwardRef(function(a,s){var o,c;const d=Z({props:a,name:"MuiFormControlLabel"}),{className:g,componentsProps:p={},control:l,disabled:b,disableTypography:h,label:x,labelPlacement:$="end",required:k,slotProps:E={}}=d,S=W(d,Oe),w=Y(),v=(o=b??l.props.disabled)!=null?o:w==null?void 0:w.disabled,C=k??l.props.required,U={disabled:v,required:C};["checked","name","onChange","value","inputRef"].forEach(I=>{typeof l.props[I]>"u"&&typeof d[I]<"u"&&(U[I]=d[I])});const q=ne({props:d,muiFormControl:w,states:["error"]}),R=u({},d,{disabled:v,labelPlacement:$,required:C,error:q.error}),P=_e(R),z=(c=E.typography)!=null?c:p.typography;let y=x;return y!=null&&y.type!==te&&!h&&(y=e(te,u({component:"span"},z,{className:j(P.label,z==null?void 0:z.className),children:y}))),r(Ge,u({className:j(P.root,g),ownerState:R,ref:s},S,{children:[i.cloneElement(l,U),C?r(ce,{direction:"row",alignItems:"center",children:[y,r(He,{ownerState:R,"aria-hidden":!0,className:P.asterisk,children:[" ","*"]})]}):y]}))}),We=Qe;function Ve(t){return H("PrivateSwitchBase",t)}Q("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Xe=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Je=t=>{const{classes:a,checked:s,disabled:o,edge:c}=t,d={root:["root",s&&"checked",o&&"disabled",c&&`edge${B(c)}`],input:["input"]};return V(d,Ve,a)},Ze=A(ve)(({ownerState:t})=>u({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),Ke=A("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ye=i.forwardRef(function(a,s){const{autoFocus:o,checked:c,checkedIcon:d,className:g,defaultChecked:p,disabled:l,disableFocusRipple:b=!1,edge:h=!1,icon:x,id:$,inputProps:k,inputRef:E,name:S,onBlur:w,onChange:v,onFocus:C,readOnly:U,required:q=!1,tabIndex:R,type:P,value:z}=a,y=W(a,Xe),[I,X]=ke({controlled:c,default:!!p,name:"SwitchBase",state:"checked"}),L=Y(),O=T=>{C&&C(T),L&&L.onFocus&&L.onFocus(T)},J=T=>{w&&w(T),L&&L.onBlur&&L.onBlur(T)},n=T=>{if(T.nativeEvent.defaultPrevented)return;const G=T.target.checked;X(G),v&&v(T,G)};let m=l;L&&typeof m>"u"&&(m=L.disabled);const F=P==="checkbox"||P==="radio",N=u({},a,{checked:I,disabled:m,disableFocusRipple:b,edge:h}),_=Je(N);return r(Ze,u({component:"span",className:j(_.root,g),centerRipple:!0,focusRipple:!b,disabled:m,tabIndex:null,role:void 0,onFocus:O,onBlur:J,ownerState:N,ref:s},y,{children:[e(Ke,u({autoFocus:o,checked:c,defaultChecked:p,className:_.input,disabled:m,id:F?$:void 0,name:S,onChange:n,readOnly:U,ref:E,required:q,ownerState:N,tabIndex:R,type:P},P==="checkbox"&&z===void 0?{}:{value:z},k)),I?d:x]}))}),et=Ye;function tt(t){return H("MuiSwitch",t)}const at=Q("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),f=at,rt=["className","color","edge","size","sx"],st=t=>{const{classes:a,edge:s,size:o,color:c,checked:d,disabled:g}=t,p={root:["root",s&&`edge${B(s)}`,`size${B(o)}`],switchBase:["switchBase",`color${B(c)}`,d&&"checked",g&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=V(p,tt,a);return u({},a,l)},ot=A("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.root,s.edge&&a[`edge${B(s.edge)}`],a[`size${B(s.size)}`]]}})(({ownerState:t})=>u({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${f.thumb}`]:{width:16,height:16},[`& .${f.switchBase}`]:{padding:4,[`&.${f.checked}`]:{transform:"translateX(16px)"}}})),lt=A(et,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.switchBase,{[`& .${f.input}`]:a.input},s.color!=="default"&&a[`color${B(s.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${f.checked}`]:{transform:"translateX(20px)"},[`&.${f.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${f.checked} + .${f.track}`]:{opacity:.5},[`&.${f.disabled} + .${f.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${f.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:a})=>u({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:ee(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.color!=="default"&&{[`&.${f.checked}`]:{color:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:ee(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a.color}DisabledColor`]:`${t.palette.mode==="light"?de(t.palette[a.color].main,.62):me(t.palette[a.color].main,.55)}`}},[`&.${f.checked} + .${f.track}`]:{backgroundColor:(t.vars||t).palette[a.color].main}})),nt=A("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),it=A("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),ct=i.forwardRef(function(a,s){const o=Z({props:a,name:"MuiSwitch"}),{className:c,color:d="primary",edge:g=!1,size:p="medium",sx:l}=o,b=W(o,rt),h=u({},o,{color:d,edge:g,size:p}),x=st(h),$=e(it,{className:x.thumb,ownerState:h});return r(ot,{className:j(x.root,c),sx:l,ownerState:h,children:[e(lt,u({type:"checkbox",icon:$,checkedIcon:$,ref:s,ownerState:h},b,{classes:u({},x,{root:x.switchBase})})),e(nt,{className:x.track,ownerState:h})]})}),dt=ct;A(Se)(({theme:t})=>({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function mt(){const[t,a]=i.useState([]),[s,o]=i.useState(""),[c,d]=i.useState(""),[g,p]=i.useState(""),[l,b]=i.useState("waiting");K();const[h,x]=i.useState("");function $(S,w){w.preventDefault(),t.map((v,C)=>{if(C===S){const U=se(oe,"admin"),q=le(U,v.id),R=parseInt(h);ge(q,{level:R})}})}const[k,E]=i.useState(!1);return r(M,{children:[e(Ne,{setUserPermit:a}),e(re,{setUser:o,user:s,setUuid:d,setIsAccepted:p,level:l,setLevel:b}),e("div",{className:"relative  m-auto ml-[7%] mt-10",children:r("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Name"}),e("th",{scope:"col",className:"px-6 py-3",children:"Level"}),e("th",{scope:"col",className:"px-6 py-3",children:"INPUT HERE"})]})}),e("tbody",{className:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800",children:t.map((S,w)=>r("tr",{children:[e("td",{className:"px-6 py-4",children:r("div",{className:"flex items-center space-x-3",children:[e("div",{className:"flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"}),e("span",{children:S.Name})]})}),e("td",{className:"px-6 py-4",children:e("div",{className:"text-gray-500 dark:text-gray-400",children:S.level})}),e("td",{className:"px-6 py-4",children:e("form",{onSubmit:v=>{$(w,v)},children:S.level!==11?e("input",{className:"text-black",placeholder:"EDIT USER",onChange:v=>x(v.target.value)}):null})})]},w))})]})}),e(Me,{children:e(We,{onClick:()=>E(k===!1),className:"w-[300px]",control:e(dt,{defaultChecked:!0}),style:{color:"black"},label:k===!1?"Approved users":"Un-Approved users"})})]})}const ht="https://Balanss.github.io/Squarelion/assets/new-arrival-b24be3b5.png",ut="https://Balanss.github.io/Squarelion/assets/survey-37b808a5.png",gt="https://Balanss.github.io/Squarelion/assets/sqlProp-9061c7de.jpg";function pt({level:t,user:a,switching:s,setSwitching:o}){const c=K(),d=()=>{pe.signOut().then(()=>{c("/"),window.location.reload()})};function g(){localStorage.setItem("user",a),setTimeout(()=>{c(`/user/${a}`)},1e3)}i.useState(!1);const[p,l]=i.useState(!0);return e("aside",{id:"cta-button-sidebar",className:"fixed top-0 left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar",children:e("div",{className:"h-full px-3 py-4 overflow-y-auto  bg-gray-800 dark:bg-gray-800",children:r("ul",{className:"space-y-2 font-medium",children:[e("li",{children:e("a",{className:"flex items-center p-2  text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:e("span",{className:"ml-3",children:"Dashboard"})})}),e("li",{children:r(he,{to:"/",className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{src:Te,className:"w-[40px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"}),e("span",{className:"ml-3 text-white rounded-lg dark:text-white",children:"Home"})]})}),e("li",{children:r("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>o("Client"),children:[e("img",{className:"w-[40px]",src:$e}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"  CLIENTS  "})]})}),t>9?e("li",{children:r("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{o("Users"),l(!1),setTimeout(()=>l(!0),1e3)},children:[e("img",{src:ht,className:"w-[40px]"}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"USERS"})]})}):null,e("li",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer",children:r("a",{onClick:()=>o("Docs"),className:"flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{src:ut,className:"w-[40px]"}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"Docs"})]})}),t>9?e("li",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer",children:r("a",{onClick:()=>o("SQL"),className:"flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{src:gt,className:"w-[40px]"}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"Sql Properties"})]})}):null,e("li",{children:r("a",{onClick:g,className:`\r
                transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group`,children:[e("img",{src:Re,className:"w-[40px]"}),e("span",{className:"flex-1 ml-3 whitespace-nowrap",children:a})]})}),e("li",{children:r("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:d,children:[e("img",{src:Le,className:"w-[40px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"}),e("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Sign Out"})]})})]})})})}const ae="https://Balanss.github.io/Squarelion/assets/doc-1-a807038b.png",ft="https://Balanss.github.io/Squarelion/assets/doc-2-2258c7b3.png";function bt(){return e(M,{children:r("div",{className:"text-center text-black md:w-4/5 md:absolute md:right-0 font-extrabold bg-slate-400 p-2 ",children:[e("div",{className:"lg:flex xl:w-[1000px] xl:m-auto lg:items-center ",children:r("ul",{children:[e("li",{className:"mb-4 text-3xl",children:"1. Introduction"}),e("li",{className:"mb-4 text-xl ",children:"2. Overview of Squarelion Agency Planning Tool."}),r("li",{className:"mb-4 text-xl ",children:["3. Admin Page Functionality",r("ol",{className:"lg:flex mb-2 lg:items-center lg:mt-5",children:[e("li",{className:"mb-3 mt-2 text-lg lg:mt-auto",children:"3.1 Accessing the Admin Page "}),e("li",{className:"mb-3  text-lg",children:"3.2 Overview of SQL Clients"}),e("li",{className:"text-lg mb-3",children:"3.3 Client Source Hub"}),e("li",{className:"mb-2 text-lg",children:"3.4 Employee Tab and Access Rights Management"})]})]})]})}),r("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"1. Introduction"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:"The Squarelion Agency Planning Tool is a comprehensive platform designed to enhance efficiency and streamline operations. This report provides an overview of the tool's e - the Admin Page. The Admin Page serves as the central hub that aggregates and displays essential links to all SQL clients."}),e("h1",{className:"text-3xl mt-5",children:" 2. Overview of Squarelion Agency Planning Tool "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Squarelion Agency Planning Tool is an innovative solution crafted to optimize workflow and productivity. The tool centralizes all client-related data, making it easier for our team to manage projects, monitor progress, and collaborate effectively. With its intuitive interface and powerful features, the planning tool simplifies complex tasks and empowers our agency to deliver exceptional services to clients."}),e("h1",{className:"text-3xl mt-5",children:" 3. Admin Page Functionality "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Admin Page is a critical component of the Squarelion Agency Planning Tool, providing a bird's-eye view of all SQL clients in one centralized location. This section outlines the key functionalities of the Admin Page."}),e("h1",{className:"text-3xl mt-5",children:" 3.1 Accessing the Admin Page "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"To access the Admin Page, users must log in using their unique credentials. Upon successful login, users, depending on their assigned roles and permissions, are directed to the dashboard with various navigation options. The Admin Page is accessible to authorized personnel only, ensuring data security and confidentiality."}),e("img",{src:ae,alt:ae,className:"mt-10 lg:w-[400px] lg:m-auto lg:mt-10"}),e("h1",{className:"text-3xl mt-5",children:" 3.2 Overview of SQL Clients "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Upon reaching the Admin Page, users are presented with an overview of all SQL clients associated with Squarelion Agency. The page is organized in a user-friendly manner, allowing quick access to essential client pages. Simply click on the client image to view their content."}),e("h1",{className:"text-3xl mt-5",children:" 3.4 Employee Tab and Access Rights Management "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"In addition to the Client Source Hub, the Admin Page also incorporates an Employee Tab that allows high-ranking admins to manage employee access rights efficiently. This feature ensures that the appropriate levels of access are granted to each employee, ranging from Level 0 (lowest) to Level 10 (highest). High-ranking admins have exclusive rights to view the current employee levels and modify them as necessary."}),r("h3",{className:"mt-5 indent-5 font-bold text-2xl ",children:["Access Rights Management",r("ol",{children:[r("li",{className:"mb-2 mt-3 text-sm md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:[" View Employee Levels: ",e("br",{})," High-ranking admins can access a list of all employees along with their current access levels. This clear and organized display allows for quick identification and monitoring of employees' access rights. "]}),r("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["Modify Employee Levels: ",e("br",{})," High-ranking admins have the authority to adjust employees' access levels according to their job roles and responsibilities. They can either restrict access by reducing the level or grant higher privileges by increasing the level, thus customizing access rights to fit individual needs."]}),r("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["New User Approval:  ",e("br",{}),' When a new employee joins the agency, high-ranking admins can approve their access by accessing the "Switch Tab." Here, they can review pending users and assign them the appropriate access level. The switch tab provides an easy-to-use interface to grant the required rights to newcomers promptly.',e("img",{src:ft})]}),r("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["Blocking and Restricting Access:  ",e("br",{})," In cases where an employee changes roles or leaves the agency, high-ranking admins can block or restrict their access as needed. This ensures data security and confidentiality by revoking access for former employees."]})]})]})]})]})})}function Tt(){const[t,a]=i.useState(""),[s,o]=i.useState(""),[c,d]=i.useState(""),[g,p]=i.useState(""),[l,b]=i.useState("waiting"),h=K(),[x,$]=i.useState(),[k,E]=i.useState([]),S=async n=>{const m="https://hooks.zapier.com/hooks/catch/15784808/39lgxy1/";try{const N=await(await fetch(m,{method:"POST",mode:"cors",body:JSON.stringify(n)})).json();console.log(N)}catch(F){console.log(F)}};function w(n){n.preventDefault();const m=fe(be(),`products/partners/${x}`),F=xe(m,x);F.on("state_changed",N=>{N.bytesTransferred/N.totalBytes*100},N=>{console.error(N)},async()=>{const N=await ye(F.snapshot.ref),_=se(oe,"partner"),T=le(_,t);we(T,{imageUrl:N,name:t,status:0},{merge:!0});const G={name:t};try{await S(G)}catch(ie){console.log(ie)}})}const v=n=>{const m=n.target.files[0];$(m)},C=Math.ceil(k.length/2.5),U=k.slice(0,C),q=k.slice(C);function R(n){q.map((m,F)=>{F===n&&(localStorage.setItem("partner",m.name),localStorage.setItem("image",m.imageUrl),setTimeout(()=>{h(`/profile/${m.name}`)},1e3))})}i.useEffect(()=>{const n=setTimeout(()=>{l<8&&h("/"),l>8&&clearTimeout(n)},1e3);return()=>{clearTimeout(n)}},[l,h]);const[P,z]=i.useState(!0);i.useEffect(()=>{const n=setTimeout(()=>{z(!1)},500);return()=>{clearTimeout(n)}},[]);const[y,I]=i.useState("Client"),[X,L]=i.useState(!1);i.useEffect(()=>{const n=()=>{L(window.innerWidth<650)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const[O,J]=i.useState(!0);return i.useEffect(()=>{const n=setTimeout(()=>{J(!1)},1500);return()=>clearTimeout(n)},[]),r(M,{children:[e(Pe,{partner:k,setPartner:E}),e(re,{setUser:o,user:s,setUuid:d,setIsAccepted:p,level:l,setLevel:b}),e("div",{className:"bg-slate-400 min-h-[100vh] flex flex-col items-center justify-between",style:{color:"white"},children:c!==""&&l>9&&P===!1&&e(M,{children:r("div",{children:[r("div",{children:[r("div",{className:"",children:["  ",X&&l>8?e(Ce,{}):null," "]}),e(pt,{level:l,user:s,switching:y,setSwitching:I}),y==="Client"&&e("div",{className:"p-4 w-4/5",children:r("div",{className:"",children:[e("div",{className:"flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800",children:e("div",{className:` text-center text-2l\r
          text-gray-400 dark:text-gray-500 flex flex-col h-[150px] justify-around\r
          `,children:l>9&&e(M,{children:r("form",{onSubmit:w,className:" flex flex-col items-center",children:[e("input",{type:"text",placeholder:"ENTER CLIENT ",onChange:n=>a(n.target.value),className:"w-[160px] mb-[15px]"}),e("input",{type:"file",className:"w-[100px] mt-[15px]",onChange:v}),e("br",{}),e("button",{className:"border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200",children:"Add Client"})]})})})}),r("div",{className:"table-split flex flex-row",children:[O?r("div",{className:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700",children:[" ",e("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200",children:"loading..."})," "]}):r("div",{className:"relative  m-auto ml-[7%] mt-10 w-[400px]",children:[e("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Name"}),e("th",{scope:"col",className:"px-6 py-3",children:"Icon"})]})})}),e("tbody",{className:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800",children:U.map((n,m)=>r("tr",{children:[e("td",{className:"px-6 py-4",children:r("div",{className:"flex items-center space-x-3",children:[e("div",{className:"flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"}),e("span",{children:n.name})]})}),e("td",{className:"px-6 py-4",children:e("div",{className:"text-gray-500 dark:text-gray-400 cursor-pointer hover:scale-110",children:e("button",{onClick:()=>{R(m)},disabled:l!==11&&n.name==="Test",className:l!==11&&n.name==="Test"?"opacity-20":"opacity-100 ",children:e("img",{src:n.imageUrl,style:{width:"600px"}})})})})]},m))})]}),O?r("div",{className:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700",children:[" ",e("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200",children:"loading..."})," "]}):r("div",{className:"relative  m-auto ml-[7%] mt-10 w-[400px]",children:[e("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Name"}),e("th",{scope:"col",className:"px-6 py-3",children:"Icon"})]})})}),e("tbody",{className:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800",children:q.map((n,m)=>r("tr",{children:[e("td",{className:"px-6 py-4",children:r("div",{className:"flex items-center space-x-3",children:[e("div",{className:"flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"}),e("span",{children:n.name})]})}),e("td",{className:"px-6 py-4",children:e("div",{className:"text-gray-500 dark:text-gray-400 cursor-pointer hover:scale-110",children:e("button",{onClick:()=>{R(m)},disabled:l!==11&&n.name==="Test",className:l!==11&&n.name==="Test"?"opacity-20":"opacity-100 ",children:e("img",{src:n.imageUrl,style:{width:"600px"}})})})})]},m))})]})]})]})})]}),y==="Users"&&e(mt,{}),y==="Docs"&&l===11&&e(bt,{}),y==="SQL"&&l>9&&e(Ae,{})]})})}),P===!0&&e(M,{children:e(ue,{})})]})}export{Tt as default};
