import{g as J,b as K,r as n,s as B,_ as m,c as oe,d as ee,j as t,e as Z,f as te,h as F,a as s,i as re,l as Re,k as Te,F as U,u as ge,R as ze,L as He,m as De}from"./index-3594be88.js";import{U as me,_ as Q,b as Y,m as ae,d as W,c as je,e as ce,f as _e,a as Ge,r as Qe,h as We,u as Ve,i as Ye}from"./index.esm2017-e1fa3cd3.js";import{B as Xe,u as Ze,A as $e,P as Ee,M as Je,N as Ke}from"./Nav-c4865572.js";import{F as et}from"./Footer-b2b541c7.js";import{u as qe,h as tt,c as ot,I as at}from"./client-98ca49dd.js";import{T as de,B as rt,P as nt}from"./PartnerLogic-d276e0f1.js";const st="https://Balanss.github.io/Squarelion/assets/thumbup-73273f4b.png",lt="https://Balanss.github.io/Squarelion/assets/thumbdown-fa6379fb.png";function it(e){return J("MuiFormGroup",e)}K("MuiFormGroup",["root","row","error"]);const ct=n.createContext(void 0),dt=ct;function fe(){return n.useContext(dt)}function Pe({props:e,states:o,muiFormControl:a}){return o.reduce((l,c)=>(l[c]=e[c],a&&typeof e[c]>"u"&&(l[c]=a[c]),l),{})}const ut=["className","row"],pt=e=>{const{classes:o,row:a,error:l}=e;return te({root:["root",a&&"row",l&&"error"]},it,o)},ht=B("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.row&&o.row]}})(({ownerState:e})=>m({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),gt=n.forwardRef(function(o,a){const l=oe({props:o,name:"MuiFormGroup"}),{className:c,row:i=!1}=l,h=ee(l,ut),u=fe(),d=Pe({props:l,muiFormControl:u,states:["error"]}),w=m({},l,{row:i,error:d.error}),f=pt(w);return t(ht,m({className:Z(f.root,c),ownerState:w,ref:a},h))}),mt=gt;function ft(e){return J("MuiFormControlLabel",e)}const bt=K("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),se=bt,vt=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],wt=e=>{const{classes:o,disabled:a,labelPlacement:l,error:c,required:i}=e,h={root:["root",a&&"disabled",`labelPlacement${F(l)}`,c&&"error",i&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",c&&"error"]};return te(h,ft,o)},yt=B("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[{[`& .${se.label}`]:o.label},o.root,o[`labelPlacement${F(a.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>m({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${se.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${se.label}`]:{[`&.${se.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),xt=B("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${se.error}`]:{color:(e.vars||e).palette.error.main}})),Ct=n.forwardRef(function(o,a){var l,c;const i=oe({props:o,name:"MuiFormControlLabel"}),{className:h,componentsProps:u={},control:d,disabled:w,disableTypography:f,label:C,labelPlacement:R="end",required:S,slotProps:O={}}=i,V=ee(i,vt),T=fe(),q=(l=w??d.props.disabled)!=null?l:T==null?void 0:T.disabled,P=S??d.props.required,j={disabled:q,required:P};["checked","name","onChange","value","inputRef"].forEach(_=>{typeof d.props[_]>"u"&&typeof i[_]<"u"&&(j[_]=i[_])});const I=Pe({props:i,muiFormControl:T,states:["error"]}),z=m({},i,{disabled:q,labelPlacement:R,required:P,error:I.error}),H=wt(z),D=(c=O.typography)!=null?c:u.typography;let k=C;return k!=null&&k.type!==de&&!f&&(k=t(de,m({component:"span"},D,{className:Z(H.label,D==null?void 0:D.className),children:k}))),s(yt,m({className:Z(H.root,h),ownerState:z,ref:a},V,{children:[n.cloneElement(d,j),k,P&&s(xt,{ownerState:z,"aria-hidden":!0,className:H.asterisk,children:[" ","*"]})]}))}),kt=Ct;function St(e){return J("PrivateSwitchBase",e)}K("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Nt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Rt=e=>{const{classes:o,checked:a,disabled:l,edge:c}=e,i={root:["root",a&&"checked",l&&"disabled",c&&`edge${F(c)}`],input:["input"]};return te(i,St,o)},Tt=B(Xe)(({ownerState:e})=>m({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),$t=B("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Et=n.forwardRef(function(o,a){const{autoFocus:l,checked:c,checkedIcon:i,className:h,defaultChecked:u,disabled:d,disableFocusRipple:w=!1,edge:f=!1,icon:C,id:R,inputProps:S,inputRef:O,name:V,onBlur:T,onChange:q,onFocus:P,readOnly:j,required:I=!1,tabIndex:z,type:H,value:D}=o,k=ee(o,Nt),[_,g]=Ze({controlled:c,default:!!u,name:"SwitchBase",state:"checked"}),y=fe(),p=X=>{P&&P(X),y&&y.onFocus&&y.onFocus(X)},b=X=>{T&&T(X),y&&y.onBlur&&y.onBlur(X)},x=X=>{if(X.nativeEvent.defaultPrevented)return;const ne=X.target.checked;g(ne),q&&q(X,ne)};let v=d;y&&typeof v>"u"&&(v=y.disabled);const E=H==="checkbox"||H==="radio",A=m({},o,{checked:_,disabled:v,disableFocusRipple:w,edge:f}),G=Rt(A);return s(Tt,m({component:"span",className:Z(G.root,h),centerRipple:!0,focusRipple:!w,disabled:v,tabIndex:null,role:void 0,onFocus:p,onBlur:b,ownerState:A,ref:a},k,{children:[t($t,m({autoFocus:l,checked:c,defaultChecked:u,className:G.input,disabled:v,id:E?R:void 0,name:V,onChange:x,readOnly:j,ref:O,required:I,ownerState:A,tabIndex:z,type:H},H==="checkbox"&&D===void 0?{}:{value:D},S)),_?i:C]}))}),qt=Et;function Pt(e){return J("MuiSwitch",e)}const Mt=K("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),L=Mt,Ut=["className","color","edge","size","sx"],Bt=e=>{const{classes:o,edge:a,size:l,color:c,checked:i,disabled:h}=e,u={root:["root",a&&`edge${F(a)}`,`size${F(l)}`],switchBase:["switchBase",`color${F(c)}`,i&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=te(u,Pt,o);return m({},o,d)},It=B("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.edge&&o[`edge${F(a.edge)}`],o[`size${F(a.size)}`]]}})(({ownerState:e})=>m({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${L.thumb}`]:{width:16,height:16},[`& .${L.switchBase}`]:{padding:4,[`&.${L.checked}`]:{transform:"translateX(16px)"}}})),At=B(qt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.switchBase,{[`& .${L.input}`]:o.input},a.color!=="default"&&o[`color${F(a.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${L.checked}`]:{transform:"translateX(20px)"},[`&.${L.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${L.checked} + .${L.track}`]:{opacity:.5},[`&.${L.disabled} + .${L.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${L.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:o})=>m({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:re(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${L.checked}`]:{color:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:re(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${L.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${o.color}DisabledColor`]:`${e.palette.mode==="light"?Re(e.palette[o.color].main,.62):Te(e.palette[o.color].main,.55)}`}},[`&.${L.checked} + .${L.track}`]:{backgroundColor:(e.vars||e).palette[o.color].main}})),Lt=B("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),Ft=B("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Ot=n.forwardRef(function(o,a){const l=oe({props:o,name:"MuiSwitch"}),{className:c,color:i="primary",edge:h=!1,size:u="medium",sx:d}=l,w=ee(l,Ut),f=m({},l,{color:i,edge:h,size:u}),C=Bt(f),R=t(Ft,{className:C.thumb,ownerState:f});return s(It,{className:Z(C.root,c),sx:d,ownerState:f,children:[t(At,m({type:"checkbox",icon:R,checkedIcon:R,ref:a,ownerState:f},w,{classes:m({},C,{root:C.switchBase})})),t(Lt,{className:C.track,ownerState:f})]})}),zt=Ot,Ht=n.createContext(),Me=Ht;function Dt(e){return J("MuiTable",e)}K("MuiTable",["root","stickyHeader"]);const jt=["className","component","padding","size","stickyHeader"],_t=e=>{const{classes:o,stickyHeader:a}=e;return te({root:["root",a&&"stickyHeader"]},Dt,o)},Gt=B("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>m({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":m({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})),ye="table",Qt=n.forwardRef(function(o,a){const l=oe({props:o,name:"MuiTable"}),{className:c,component:i=ye,padding:h="normal",size:u="medium",stickyHeader:d=!1}=l,w=ee(l,jt),f=m({},l,{component:i,padding:h,size:u,stickyHeader:d}),C=_t(f),R=n.useMemo(()=>({padding:h,size:u,stickyHeader:d}),[h,u,d]);return t(Me.Provider,{value:R,children:t(Gt,m({as:i,role:i===ye?null:"table",ref:a,className:Z(C.root,c),ownerState:f},w))})}),Wt=Qt,Vt=n.createContext(),ue=Vt;function Yt(e){return J("MuiTableBody",e)}K("MuiTableBody",["root"]);const Xt=["className","component"],Zt=e=>{const{classes:o}=e;return te({root:["root"]},Yt,o)},Jt=B("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-row-group"}),Kt={variant:"body"},xe="tbody",eo=n.forwardRef(function(o,a){const l=oe({props:o,name:"MuiTableBody"}),{className:c,component:i=xe}=l,h=ee(l,Xt),u=m({},l,{component:i}),d=Zt(u);return t(ue.Provider,{value:Kt,children:t(Jt,m({className:Z(d.root,c),as:i,ref:a,role:i===xe?null:"rowgroup",ownerState:u},h))})}),to=eo;function oo(e){return J("MuiTableCell",e)}const ao=K("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ro=ao,no=["align","className","component","padding","scope","size","sortDirection","variant"],so=e=>{const{classes:o,variant:a,align:l,padding:c,size:i,stickyHeader:h}=e,u={root:["root",a,h&&"stickyHeader",l!=="inherit"&&`align${F(l)}`,c!=="normal"&&`padding${F(c)}`,`size${F(i)}`]};return te(u,oo,o)},lo=B("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,o[a.variant],o[`size${F(a.size)}`],a.padding!=="normal"&&o[`padding${F(a.padding)}`],a.align!=="inherit"&&o[`align${F(a.align)}`],a.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>m({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Re(re(e.palette.divider,1),.88):Te(re(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},o.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},o.variant==="body"&&{color:(e.vars||e).palette.text.primary},o.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},o.size==="small"&&{padding:"6px 16px",[`&.${ro.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},o.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},o.padding==="none"&&{padding:0},o.align==="left"&&{textAlign:"left"},o.align==="center"&&{textAlign:"center"},o.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},o.align==="justify"&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),io=n.forwardRef(function(o,a){const l=oe({props:o,name:"MuiTableCell"}),{align:c="inherit",className:i,component:h,padding:u,scope:d,size:w,sortDirection:f,variant:C}=l,R=ee(l,no),S=n.useContext(Me),O=n.useContext(ue),V=O&&O.variant==="head";let T;h?T=h:T=V?"th":"td";let q=d;T==="td"?q=void 0:!q&&V&&(q="col");const P=C||O&&O.variant,j=m({},l,{align:c,component:T,padding:u||(S&&S.padding?S.padding:"normal"),size:w||(S&&S.size?S.size:"medium"),sortDirection:f,stickyHeader:P==="head"&&S&&S.stickyHeader,variant:P}),I=so(j);let z=null;return f&&(z=f==="asc"?"ascending":"descending"),t(lo,m({as:T,ref:a,className:Z(I.root,i),"aria-sort":z,scope:q,ownerState:j},R))}),$=io;function co(e){return J("MuiTableContainer",e)}K("MuiTableContainer",["root"]);const uo=["className","component"],po=e=>{const{classes:o}=e;return te({root:["root"]},co,o)},ho=B("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,o)=>o.root})({width:"100%",overflowX:"auto"}),go=n.forwardRef(function(o,a){const l=oe({props:o,name:"MuiTableContainer"}),{className:c,component:i="div"}=l,h=ee(l,uo),u=m({},l,{component:i}),d=po(u);return t(ho,m({ref:a,as:i,className:Z(d.root,c),ownerState:u},h))}),mo=go;function fo(e){return J("MuiTableHead",e)}K("MuiTableHead",["root"]);const bo=["className","component"],vo=e=>{const{classes:o}=e;return te({root:["root"]},fo,o)},wo=B("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-header-group"}),yo={variant:"head"},Ce="thead",xo=n.forwardRef(function(o,a){const l=oe({props:o,name:"MuiTableHead"}),{className:c,component:i=Ce}=l,h=ee(l,bo),u=m({},l,{component:i}),d=vo(u);return t(ue.Provider,{value:yo,children:t(wo,m({as:i,className:Z(d.root,c),ref:a,role:i===Ce?null:"rowgroup",ownerState:u},h))})}),Co=xo;function ko(e){return J("MuiTableRow",e)}const So=K("MuiTableRow",["root","selected","hover","head","footer"]),ke=So,No=["className","component","hover","selected"],Ro=e=>{const{classes:o,selected:a,hover:l,head:c,footer:i}=e;return te({root:["root",a&&"selected",l&&"hover",c&&"head",i&&"footer"]},ko,o)},To=B("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.head&&o.head,a.footer&&o.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${ke.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${ke.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:re(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:re(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),Se="tr",$o=n.forwardRef(function(o,a){const l=oe({props:o,name:"MuiTableRow"}),{className:c,component:i=Se,hover:h=!1,selected:u=!1}=l,d=ee(l,No),w=n.useContext(ue),f=m({},l,{component:i,hover:h,selected:u,head:w&&w.variant==="head",footer:w&&w.variant==="footer"}),C=Ro(f);return t(To,m({as:i,ref:a,className:Z(C.root,c),role:i===Se?null:"row",ownerState:f},d))}),Ne=$o;function Eo(){const[e,o]=n.useState([]),[a,l]=n.useState(""),[c,i]=n.useState(""),[h,u]=n.useState(""),[d,w]=n.useState("waiting");n.useState(0);const[f,C]=n.useState(""),[R,S]=n.useState(""),[O,V]=n.useState(""),[T,q]=n.useState(""),[P,j]=n.useState(""),[I,z]=n.useState(""),[H,D]=n.useState(""),[k,_]=n.useState([]),[g,y]=n.useState("waiting");n.useState(""),n.useEffect(()=>{(async()=>{try{const N=await je(Q(W,"survey"+g)),M=[];N.forEach(ie=>{const he={id:ie.id,...ie.data()};M.push(he)}),_(M)}catch(N){console.error("Error retrieving surveys:",N)}})()},[g]);const[p,b]=n.useState(""),[x,v]=n.useState(""),[E,A]=n.useState(""),[G,X]=n.useState(""),[ne,Ue]=n.useState(""),[le,be]=n.useState("bus"),Be=()=>{const N=(k.findIndex(M=>M.id===le)+1)%k.length;be(k[N].id)};function pe(r){k.map((N,M)=>{const ie=p- -x- -E- -G- -ne;if(M===r){const he=Q(W,"survey"+a),Oe=Y(he,N.id);ae(Oe,{ratingAdmin:p,rating1Admin:x,rating2Admin:E,rating3Admin:G,rating4Admin:ne,scoreAdmin:ie},{merge:!0})}})}k.map(r=>r.scoreAdmin).filter(r=>typeof r=="number").reduce((r,N)=>r+N,0),k.map(r=>r.score).filter(r=>typeof r=="number").reduce((r,N)=>r+N,0);const[Ie,ve]=n.useState(!1),[Ae,we]=n.useState(!1),Le=()=>{ve(!0),we(!1)},Fe=()=>{ve(!1),we(!0)};return s(U,{children:[t($e,{setUserPermit:o}),t(me,{setUser:l,user:a,setUuid:i,setIsAccepted:u,level:d,setLevel:w}),s("div",{className:"main-surv-div",children:[s("div",{className:"survey-creator",children:[s("div",{children:[t("h5",{children:"Survey Creator"}),t("p",{children:" STEP 1 : Enter the employee name below  "}),t("input",{type:"text",placeholder:"Enter user",onChange:r=>S(r.target.value)})]}),t("hr",{className:"step-1"}),s("div",{children:[t("h5",{children:" Enter the Topic of the Survey "}),t("p",{children:" STEP 2 : Enter the topic "}),t("input",{type:"text",placeholder:"Enter type",onChange:r=>C(r.target.value)})]}),t("hr",{className:"step-1"}),s("div",{children:[t("h5",{children:" Each topic can have a maximum of 5 questions! "}),t("p",{children:" STEP 3 : Enter the questions below "}),t("input",{type:"text",placeholder:"Enter question 1",onChange:r=>V(r.target.value)}),t("input",{type:"text",placeholder:"Enter question 2",onChange:r=>q(r.target.value)}),t("input",{type:"text",placeholder:"Enter question 3",onChange:r=>j(r.target.value)}),t("input",{type:"text",placeholder:"Enter question 4",onChange:r=>z(r.target.value)}),t("input",{type:"text",placeholder:"Enter question 5",onChange:r=>D(r.target.value)})]}),t("hr",{className:"step-1"}),s("div",{children:[t("h4",{children:" Submit Survey"}),t("button",{style:{marginRight:"15px"},onClick:()=>{pe()},children:"Save Survey"}),t("button",{onClick:()=>{const r=Q(W,"survey"+R),N=Y(r,"open");ae(N,{open:!0},{merge:!0})},children:" Make Survey Live"})]})]}),Ie&&s("div",{className:"survey-creator realsurv",children:[t("h3",{children:" LIVE SURVEY "}),t("input",{type:"text",placeholder:"ENTER MATCHED NAME OF EMPLOYEE",onChange:r=>y(r.target.value)}),k.map((r,N)=>s("div",{children:[le===r.id&&r.id!=="open"&&s("h2",{style:{color:"black",maginBottom:"60px"},onClick:()=>be(r.id),children:["Topic: ",r.id,"  ",`${N+1} / ${k.length}`," "]}),le===r.id&&r.id!=="open"&&s(U,{children:[t("div",{className:r.question0>""?"questions-tap":"",children:r.question0>""&&s(U,{children:[s("p",{style:{color:"black"},children:["Question 1: ",r.question0]}),t("div",{className:"emoji-rating",children:t("input",{type:"number",placeholder:"ENTER 1 - 5",onChange:M=>b(M.target.value)})})]})}),t("div",{className:r.question1>""?"questions-tap":"",children:r.question1>""&&s(U,{children:[s("p",{style:{color:"black"},children:["Question 2: ",r.question1]}),t("div",{className:"emoji-rating",children:t("input",{type:"number",placeholder:"ENTER 1 - 5",onChange:M=>v(M.target.value)})})]})}),t("div",{className:r.question2>""?"questions-tap":"",children:r.question2>""&&s(U,{children:[s("p",{style:{color:"black"},children:["Question 3: ",r.question2]}),t("div",{className:"emoji-rating",children:t("input",{type:"number",placeholder:"ENTER 1 - 5",onChange:M=>A(M.target.value)})})]})}),t("div",{className:r.question3>""?"questions-tap":"",children:r.question3>""&&s(U,{children:[s("p",{style:{color:"black"},children:["Question 4: ",r.question3]}),t("div",{className:"emoji-rating",children:t("input",{type:"number",placeholder:"ENTER 1 - 5",onChange:M=>X(M.target.value)})})]})}),t("div",{className:r.question4>""?"questions-tap":"",children:r.question4>""&&s(U,{children:[s("p",{style:{color:"black"},children:["Question 5: ",r.question4]}),t("div",{className:"emoji-rating",children:t("input",{type:"number",placeholder:"ENTER 1 - 5",onChange:M=>Ue(M.target.value)})})]})})]}),le===r.id&&s(U,{children:[r.id==="open"?s("p",{style:{color:"black"},children:["Thank you for finishing Squarelion Survey, ",a,"!"]}):null,r.id!=="open"&&t("button",{className:"next-btn",onClick:()=>{Be(),pe(N)},children:"Next"})]})]},N))]}),Ae&&t("div",{className:"tablediv",children:s(mo,{component:Ee,children:[t("input",{type:"text",placeholder:"Enter Username",onChange:r=>y(r.target.value)}),s(Wt,{sx:{minWidth:650},"aria-label":"simple table",children:[t(Co,{children:s(Ne,{children:[s($,{children:[g," "]}),t($,{align:"right",children:"QUESTION"}),t($,{align:"right",children:"QUESTION"}),t($,{align:"right",children:"QUESTION2"}),t($,{align:"right",children:"QUESTION3"}),t($,{align:"right",children:"QUESTION4"}),t($,{align:"right",children:"MY RATING"}),t($,{align:"right",children:"USER Rating"}),t($,{align:"right",children:"Total SCORE"})]})}),t(to,{children:k.map((r,N)=>r.id!=="open"?s(Ne,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t($,{component:"th",scope:"row",children:r.id}),t($,{align:"right",children:r.question0}),s($,{align:"right",children:[" ",r.question1," "]}),t($,{align:"right",children:r.question2}),t($,{align:"right",children:r.question3}),t($,{align:"right",children:r.question4}),t($,{align:"right",children:r.scoreAdmin}),t($,{align:"right",children:r.rating}),t($,{align:"right",children:r.score- -r.scoreAdmin})]},r.id):null)})]})]})})]}),s("div",{style:{marginBottom:"20px"},children:[t("button",{onClick:Le,style:{marginRight:"15px"},children:g==="waiting"?"ENTER MATCHED EMPLOYEE NAME ":`TAKE SURVEY OF ${g}`}),t("button",{onClick:Fe,children:"SHOW SCORE IN TABLE FORMAT"})]})]})}const qo={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,color:"black"};B(Ee)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}));function Po(){const[e,o]=n.useState([]),[a,l]=n.useState(""),[c,i]=n.useState(""),[h,u]=n.useState(""),[d,w]=n.useState("waiting");ge();const[f,C]=n.useState("");function R(p,b){b.preventDefault(),e.map((x,v)=>{if(v===p){const E=Q(W,"admin"),A=Y(E,x.id),G=parseInt(f);ce(A,{level:G})}})}function S(p){e.map((b,x)=>{if(x===p){const v=Q(W,"admin"),E=Y(v,b.id);ce(E,{request:"Accepted"},{merge:!0});const A=Q(W,"notInOffice"),G=Y(A,b.Name);ae(G,{[b.time]:{request:"Accepted"}},{merge:!0})}})}function O(p){e.map((b,x)=>{if(x===p){const v=Q(W,"admin"),E=Y(v,b.id);ce(E,{request:"Denied"},{merge:!0});const A=Q(W,"notInOffice"),G=Y(A,b.Name);ae(G,{[b.time]:{request:"Denied"}},{merge:!0})}})}function V(p){e.map((b,x)=>{if(x===p){const v=Q(W,"admin"),E=Y(v,b.id);ce(E,{request:""},{merge:!0});const A=Q(W,"notInOffice"),G=Y(A,b.Name);ae(G,{[b.time]:{request:""}},{merge:!0})}})}const[T,q]=n.useState([]),P=async()=>{try{return _e.collection("notInOffice").onSnapshot(b=>{const x=b.docs.map(v=>({id:v.id,...v.data()}));x.sort((v,E)=>v.id-E.id),q(x)})}catch(p){console.error("Error fetching WFH/Office data:",p)}};n.useEffect(()=>{P()},[]);const[j,I]=ze.useState(!1),z=()=>I(!0),H=()=>I(!1),[D,k]=n.useState(null),_=p=>{k(p)},[g,y]=n.useState(!1);return s(U,{children:[t($e,{setUserPermit:o}),t(me,{setUser:l,user:a,setUuid:i,setIsAccepted:u,level:d,setLevel:w}),s("div",{className:"  m-auto p-10 grid grid-cols-1 gap-2    md:w-4/5  xl:w-4/5",children:[g===!1?e.map((p,b)=>s("div",{className:` \r
    m-auto md:min-w-[350px] mb-10 p-10  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\r
    h-[350px]  lg:h-[200px] lg:w-[700px]`,children:[s("div",{className:"flex flex-col items-center pb-10 lg:flex lg:flex-row lg:items-center lg:justify-center ",children:[t("img",{className:"w-6 h-6 mb-3 rounded-full shadow-lg lg:mr-10",src:qe}),s("h5",{className:"mb-1 text-xl font-medium text-gray-900 dark:text-white lg:mr-5",children:[" ",p.Name]}),t("span",{className:"text-sm text-gray-500 dark:text-gray-400 lg:mr-5",children:p.level}),s("div",{className:"flex mt-4 space-x-3 md:mt-6  lg:mt-0",children:[t("h3",{className:"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:mr-5",onClick:()=>{z()},children:"  EDIT"}),t("form",{onSubmit:x=>{R(b,x)},children:p.level!==11?t("input",{className:"text-black",placeholder:"EDIT USER",onChange:x=>C(x.target.value)}):null})]})]}),t("div",{className:"flex flex-col items-center pb-3",children:p.request>""?t(U,{children:s("div",{className:" lg:flex lg:flex-row ",children:[p.request!=="Waiting Request"?t("h3",{className:"request-approval mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ",onClick:()=>V(b),children:" Clear  "}):null,s("h3",{className:"request-approval mr-5 bg-slate-900  p-2 rounded-lg text-white",children:[" ",p.request,"  "]}),s("div",{className:"flex flex-row",children:[t("img",{className:"mr-5",src:st,onClick:()=>S(b),style:{width:"40px",cursor:"pointer"}}),t("img",{src:lt,onClick:()=>O(b),style:{width:"40px",cursor:"pointer"}})]})]})}):null})]},b)):null,t(mt,{children:t(kt,{onClick:()=>y(g===!1),control:t(zt,{defaultChecked:!0}),style:{color:"black"},label:g===!1?"Approved users":"Un-Approved users"})})]}),t(Je,{open:j,onClose:H,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:s(rt,{sx:qo,children:[s(de,{id:"modal-modal-title",variant:"h6",component:"h2",children:[T.map(p=>t("button",{style:{marginLeft:"10px"},onClick:()=>_(p),children:p.id},p.id)),D&&s("div",{children:[s("h2",{children:["Selected User: ",D.id]}),Object.entries(D).map(([p,b])=>{if(p!=="id"){const{reason:x,time:v,user:E}=b;return s("div",{children:[s("p",{children:["Reason: ",x]}),s("p",{children:["Time: ",v]}),t("hr",{})]},p)}return null})]})]}),t(de,{id:"modal-modal-description",sx:{mt:2}})]})})]})}const Mo="https://Balanss.github.io/Squarelion/assets/new-arrival-b24be3b5.png",Uo="https://Balanss.github.io/Squarelion/assets/survey-37b808a5.png";function Bo({level:e,user:o,switching:a,setSwitching:l}){const c=ge(),i=()=>{Ge.signOut().then(()=>{c("/"),window.location.reload()})};function h(){localStorage.setItem("user",o),setTimeout(()=>{c(`/user/${o}`)},1e3)}n.useState(!1);const[u,d]=n.useState(!0);return t("aside",{id:"cta-button-sidebar",className:"fixed top-0 left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar",children:t("div",{className:"h-full px-3 py-4 overflow-y-auto  bg-gray-800 dark:bg-gray-800",children:s("ul",{className:"space-y-2 font-medium",children:[t("li",{children:t("a",{className:"flex items-center p-2  text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:t("span",{className:"ml-3",children:"Dashboard"})})}),t("li",{children:s(He,{to:"/",className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[t("img",{src:tt,className:"w-[40px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"}),t("span",{className:"ml-3 text-white rounded-lg dark:text-white",children:"Home"})]})}),t("li",{children:s("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>l("Client"),children:[t("img",{className:"w-[40px]",src:ot}),t("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"  CLIENTS  "})]})}),e>9?t("li",{children:s("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{l("Users"),d(!1),setTimeout(()=>d(!0),1e3)},children:[t("img",{src:Mo,className:"w-[40px]"}),t("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"USERS"})]})}):null,t("li",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer",children:e===11?s(U,{children:[" ",s("a",{onClick:()=>l("Survey"),className:"flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[t("img",{src:Uo,className:"w-[40px]"}),t("span",{className:"flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"SURVEY"})]}),"  "]}):null}),t("li",{children:s("a",{onClick:h,className:`\r
                transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group`,children:[t("img",{src:qe,className:"w-[40px]"}),t("span",{className:"flex-1 ml-3 whitespace-nowrap",children:o})]})}),t("li",{children:s("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:i,children:[t("img",{src:at,className:"w-[40px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"}),t("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Sign Out"})]})})]})})})}function jo(){const[e,o]=n.useState(""),[a,l]=n.useState(""),[c,i]=n.useState(""),[h,u]=n.useState(""),[d,w]=n.useState("waiting"),f=ge(),[C,R]=n.useState(),[S,O]=n.useState([]);function V(g){g.preventDefault();const y=Q(W,"partner"),p=Y(y,e);ae(p,{name:e},{merge:!0});const b=Qe(We(),`products/partners/${C.name}`),x=Ve(b,C);x.on("state_changed",v=>{v.bytesTransferred/v.totalBytes*100},v=>{console.error(v)},async()=>{const v=await Ye(x.snapshot.ref),E=Q(W,"partner"),A=Y(E,e);ae(A,{imageUrl:v,name:e,status:0},{merge:!0})},{merge:!0})}const T=g=>{const y=g.target.files[0];R(y)};function q(g){S.map((y,p)=>{p===g&&(localStorage.setItem("partner",y.name),localStorage.setItem("image",y.imageUrl),setTimeout(()=>{f(`/profile/${y.name}`)},1e3))})}n.useEffect(()=>{const g=setTimeout(()=>{d<8&&f("/"),d>8&&clearTimeout(g)},1e3);return()=>{clearTimeout(g)}},[d,f]);const[P,j]=n.useState(!0);n.useEffect(()=>{const g=setTimeout(()=>{j(!1)},500);return()=>{clearTimeout(g)}},[]);const[I,z]=n.useState("Client"),[H,D]=n.useState(!1);n.useEffect(()=>{const g=()=>{D(window.innerWidth<650)};return g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]);const[k,_]=n.useState(!0);return n.useEffect(()=>{const g=setTimeout(()=>{_(!1)},1500);return()=>clearTimeout(g)},[]),s(U,{children:[t(nt,{partner:S,setPartner:O}),t(me,{setUser:l,user:a,setUuid:i,setIsAccepted:u,level:d,setLevel:w}),t("div",{className:"bg-slate-400 min-h-[100vh] flex flex-col items-center justify-between",style:{color:"white"},children:c!==""&&d>8&&P===!1&&t(U,{children:s("div",{children:[s("div",{children:[s("div",{className:"",children:["  ",H&&d>8?t(Ke,{}):null," "]}),t(Bo,{level:d,user:a,switching:I,setSwitching:z}),I==="Client"&&t("div",{className:"p-4 w-4/5",children:s("div",{className:`p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-[300px]\r
   md:w-[500px] md:overflow-y-hidden md:ml-[100px]\r
   lg:w-[700px]\r
   xl:w-[900px]\r
    `,children:[t("div",{className:"flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800",children:t("div",{className:` text-center text-2l\r
          text-gray-400 dark:text-gray-500 flex flex-col h-[150px] justify-around\r
          `,children:d>9&&t(U,{children:s("form",{onSubmit:V,className:" flex flex-col items-center",children:[t("input",{type:"text",placeholder:"ENTER CLIENT ",onChange:g=>o(g.target.value),className:"w-[160px] mb-[15px]"}),t("input",{type:"file",className:"w-[100px] mt-[15px]",onChange:T}),t("br",{}),t("div",{className:"border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200",children:"Add Client"})]})})})}),t("div",{className:" bg-gray-800 dark:bg-gray-800",children:t("div",{className:`lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-4 pt-10 pl-10 lg:max-h-[100vh]\r
        sm:max-h-[500px] sm:overflow-scroll\r
        `,children:S.map((g,y)=>t(U,{children:t("div",{className:`p-10  mt-15 mb-5 flex  justify-center w-[180px] md:w-[180px] md:h-[180px]\r
             bg-transparent hover:bg-white transition duration-1000 rounded-sm`,children:t("button",{onClick:()=>{q(y)},disabled:d!==11&&g.name==="Test",className:d!==11&&g.name==="Test"?"opacity-20":"opacity-100",children:s("div",{className:"relative",children:[k&&s("svg",{"aria-hidden":"true",class:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),t("img",{className:`transform transition-transform ease-in hover:scale-105 cursor-pointer w-[100px] ${k?"opacity-0":"opacity-100"}`,src:g.imageUrl,alt:"Partner Image"})]})})},y)}))})})]})})]}),I==="Users"&&t(Po,{}),I==="Survey"&&d===11&&t(Eo,{})]})})}),s("div",{className:"text-black overflow-hidden  ",children:["    ",t(et,{})," "]}),P===!0&&t(U,{children:t(De,{})})]})}export{jo as default};
