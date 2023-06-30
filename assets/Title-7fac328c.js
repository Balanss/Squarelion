import{s as I,_ as g,m as ie,r as u,b as z,c as S,j as s,d as P,i as K,g as oe,a as ae,n as se,o as L,u as le,R as H}from"./index-ad0cde8e.js";import{P as ce,B as de}from"./PartnerLogic-206f1438.js";import{e as pe,u as q,h as ue,j as fe,o as V,T as ge,k as he,l as W,M as me,P as xe,U as Z,B as ve,L as Ae,G as $,f as U,_ as be,b as we,c as O,d as ke}from"./Nav-1ba6dc8b.js";const ye=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],De=t=>{const{absolute:e,children:r,classes:n,flexItem:i,light:m,orientation:l,textAlign:c,variant:f}=t;return K({root:["root",e&&"absolute",f,m&&"light",l==="vertical"&&"vertical",i&&"flexItem",r&&"withChildren",r&&l==="vertical"&&"withChildrenVertical",c==="right"&&l!=="vertical"&&"textAlignRight",c==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},pe,n)},Ee=I("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,r.orientation==="vertical"&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&r.orientation==="vertical"&&e.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&e.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>g({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:ie(t.palette.divider,.08)},e.variant==="inset"&&{marginLeft:72},e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>g({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:e})=>g({},e.children&&e.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:e})=>g({},e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>g({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Te=I("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,r.orientation==="vertical"&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>g({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},e.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),Be=u.forwardRef(function(e,r){const n=z({props:e,name:"MuiDivider"}),{absolute:i=!1,children:m,className:l,component:c=m?"div":"hr",flexItem:f=!1,light:o=!1,orientation:p="horizontal",role:A=c!=="hr"?"separator":void 0,textAlign:v="center",variant:y="fullWidth"}=n,b=S(n,ye),k=g({},n,{absolute:i,component:c,flexItem:f,light:o,orientation:p,role:A,textAlign:v,variant:y}),d=De(k);return s.jsx(Ee,g({as:c,className:P(d.root,l),role:A,ref:r,ownerState:k},b,{children:m?s.jsx(Te,{className:d.wrapper,ownerState:k,children:m}):null}))}),Ce=Be,Re="data:image/png;base64,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",Pe=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ie(t,e,r){const n=e.getBoundingClientRect(),i=r&&r.getBoundingClientRect(),m=V(e);let l;if(e.fakeTransform)l=e.fakeTransform;else{const o=m.getComputedStyle(e);l=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}let c=0,f=0;if(l&&l!=="none"&&typeof l=="string"){const o=l.split("(")[1].split(")")[0].split(",");c=parseInt(o[4],10),f=parseInt(o[5],10)}return t==="left"?i?`translateX(${i.right+c-n.left}px)`:`translateX(${m.innerWidth+c-n.left}px)`:t==="right"?i?`translateX(-${n.right-i.left-c}px)`:`translateX(-${n.left+n.width-c}px)`:t==="up"?i?`translateY(${i.bottom+f-n.top}px)`:`translateY(${m.innerHeight+f-n.top}px)`:i?`translateY(-${n.top-i.top+n.height-f}px)`:`translateY(-${n.top+n.height-f}px)`}function Ye(t){return typeof t=="function"?t():t}function G(t,e,r){const n=Ye(r),i=Ie(t,e,n);i&&(e.style.webkitTransform=i,e.style.transform=i)}const Me=u.forwardRef(function(e,r){const n=q(),i={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},m={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:l,appear:c=!0,children:f,container:o,direction:p="down",easing:A=i,in:v,onEnter:y,onEntered:b,onEntering:k,onExit:d,onExited:h,onExiting:x,style:B,timeout:R=m,TransitionComponent:C=ge}=e,Y=S(e,Pe),D=u.useRef(null),F=ue(f.ref,D,r),E=a=>w=>{a&&(w===void 0?a(D.current):a(D.current,w))},T=E((a,w)=>{G(p,a,o),he(a),y&&y(a,w)}),M=E((a,w)=>{const N=W({timeout:R,style:B,easing:A},{mode:"enter"});a.style.webkitTransition=n.transitions.create("-webkit-transform",g({},N)),a.style.transition=n.transitions.create("transform",g({},N)),a.style.webkitTransform="none",a.style.transform="none",k&&k(a,w)}),j=E(b),ee=E(x),te=E(a=>{const w=W({timeout:R,style:B,easing:A},{mode:"exit"});a.style.webkitTransition=n.transitions.create("-webkit-transform",w),a.style.transition=n.transitions.create("transform",w),G(p,a,o),d&&d(a)}),re=E(a=>{a.style.webkitTransition="",a.style.transition="",h&&h(a)}),ne=a=>{l&&l(D.current,a)},Q=u.useCallback(()=>{D.current&&G(p,D.current,o)},[p,o]);return u.useEffect(()=>{if(v||p==="down"||p==="right")return;const a=fe(()=>{D.current&&G(p,D.current,o)}),w=V(D.current);return w.addEventListener("resize",a),()=>{a.clear(),w.removeEventListener("resize",a)}},[p,v,o]),u.useEffect(()=>{v||Q()},[v,Q]),s.jsx(C,g({nodeRef:D,onEnter:T,onEntered:j,onEntering:M,onExit:te,onExited:re,onExiting:ee,addEndListener:ne,appear:c,in:v,timeout:R},Y,{children:(a,w)=>u.cloneElement(f,g({ref:F,style:g({visibility:a==="exited"&&!v?"hidden":void 0},B,f.props.style)},w))}))}),je=Me;function Ge(t){return oe("MuiDrawer",t)}ae("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Se=["BackdropProps"],Le=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],J=(t,e)=>{const{ownerState:r}=t;return[e.root,(r.variant==="permanent"||r.variant==="persistent")&&e.docked,e.modal]},Ue=t=>{const{classes:e,anchor:r,variant:n}=t,i={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${L(r)}`,n!=="temporary"&&`paperAnchorDocked${L(r)}`]};return K(i,Ge,e)},Fe=I(me,{name:"MuiDrawer",slot:"Root",overridesResolver:J})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),X=I("div",{shouldForwardProp:se,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:J})({flex:"0 0 auto"}),Qe=I(xe,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.paper,e[`paperAnchor${L(r.anchor)}`],r.variant!=="temporary"&&e[`paperAnchorDocked${L(r.anchor)}`]]}})(({theme:t,ownerState:e})=>g({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),_={left:"right",right:"left",top:"down",bottom:"up"};function Ne(t){return["left","right"].indexOf(t)!==-1}function He(t,e){return t.direction==="rtl"&&Ne(e)?_[e]:e}const We=u.forwardRef(function(e,r){const n=z({props:e,name:"MuiDrawer"}),i=q(),m={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:c,children:f,className:o,elevation:p=16,hideBackdrop:A=!1,ModalProps:{BackdropProps:v}={},onClose:y,open:b=!1,PaperProps:k={},SlideProps:d,TransitionComponent:h=je,transitionDuration:x=m,variant:B="temporary"}=n,R=S(n.ModalProps,Se),C=S(n,Le),Y=u.useRef(!1);u.useEffect(()=>{Y.current=!0},[]);const D=He(i,l),E=g({},n,{anchor:l,elevation:p,open:b,variant:B},C),T=Ue(E),M=s.jsx(Qe,g({elevation:B==="temporary"?p:0,square:!0},k,{className:P(T.paper,k.className),ownerState:E,children:f}));if(B==="permanent")return s.jsx(X,g({className:P(T.root,T.docked,o),ownerState:E,ref:r},C,{children:M}));const j=s.jsx(h,g({in:b,direction:_[D],timeout:x,appear:Y.current},d,{children:M}));return B==="persistent"?s.jsx(X,g({className:P(T.root,T.docked,o),ownerState:E,ref:r},C,{children:j})):s.jsx(Fe,g({BackdropProps:g({},c,v,{transitionDuration:x}),className:P(T.root,T.modal,o),open:b,ownerState:E,onClose:y,hideBackdrop:A,ref:r},C,R,{children:j}))}),Oe=We;function qe(){const[t,e]=u.useState([]),r=le(),[n,i]=u.useState(""),[m,l]=u.useState(""),[c,f]=u.useState(""),[o,p]=u.useState("");function A(d){t.map((h,x)=>{x===d&&(localStorage.setItem("partner",h.name),localStorage.setItem("image",h.imageUrl),setTimeout(()=>{r(`/profile/${h.name}`),window.location.reload()},2e3))})}const[v,y]=H.useState({left:!1}),b=(d,h)=>x=>{x.type==="keydown"&&(x.key==="Tab"||x.key==="Shift")||y({...v,[d]:h})},k=d=>s.jsxs(de,{sx:{width:d==="top"||d==="bottom"?"auto":250},role:"presentation",onClick:b(d,!1),onKeyDown:b(d,!1),children:[s.jsx(Ae,{children:t.map((h,x)=>s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[c===11?s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("h2",{onClick:()=>{A(x)},style:{cursor:"pointer",marginLeft:"20px"},children:[" ",h.name,"   "]},x),s.jsxs("p",{style:{color:"red",marginLeft:"10px"},children:[" ",h.status!==0?h.status:null]})]}):null,c!==11&&h.name!=="Test"?s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("h2",{onClick:()=>{A(x)},style:{cursor:"pointer",marginLeft:"20px"},children:[" ",h.name,"   "]},x),s.jsxs("p",{style:{color:"red",marginLeft:"10px"},children:[" ",h.status!==0?h.status:null]})]}):null]},x))}),s.jsx(Ce,{}),s.jsx("img",{src:Re,className:"logo"})]});return s.jsxs(s.Fragment,{children:[s.jsx(ce,{setPartner:e}),s.jsx(Z,{user:n,setUser:i,setUuid:l,setIsAccepted:p,level:c,setLevel:f}),s.jsx("div",{className:"",children:["left"].map(d=>s.jsxs(H.Fragment,{children:[s.jsx(ve,{className:"button-links",onClick:b(d,!0),children:"Partner"}),s.jsx(Oe,{anchor:d,open:v[d],onClose:b(d,!1),children:k(d)})]},d))})]})}function Ve({text:t,sendTo:e,user:r,imp:n,allUid:i,setText:m}){const c=new Date().toLocaleTimeString(),o=new Date().toLocaleString().slice(0,25),[p,A]=u.useState(c),v=$(),b=new Date().toString().slice(0,30);u.useState(0);function k(){A(c),U.collection(e).doc(b).set({text:t,sendBy:r+" /"+o,timestamp:v,imp:n,mail:"https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fmail.png?alt=media&token=bdfde3a5-5c9b-4e2c-aa52-4ee31b2defe0"},{merge:!0}),i.map(d=>{if(r!==d){const h=be(ke,e),x=we(h,b);O(x,{[d]:1},{merge:!0}),O(x,{[r]:0},{merge:!0})}}),m("")}return s.jsx("button",{onClick:k,children:" Send "})}function Ze({sendTo:t,text:e,user:r,trueChat:n,setText:i}){const l=new Date().toLocaleTimeString();new Date().toLocaleString().slice(0,25),u.useState(l),$();const o=new Date().toString().slice(0,25);u.useState(0);function p(){U.collection("chat").doc(t).set({[o]:e+"  - send by  "+r},{merge:!0}),U.collection("chat").doc(n).set({[o]:e+"  - send by  "+r},{merge:!0}),i("")}return s.jsx("button",{onClick:p,children:" private chat "})}const $e="https://Balanss.github.io/Squarelion/assets/bin-a8ff8aa0.png",Je="https://Balanss.github.io/Squarelion/assets/meeting-4135f19a.png",_e="https://Balanss.github.io/Squarelion/assets/time-7815fb36.png",et="https://Balanss.github.io/Squarelion/assets/important-5d688978.png";function tt({}){const[t,e]=u.useState(""),[r,n]=u.useState(""),[i,m]=u.useState(""),[l,c]=u.useState([]),f=async()=>{try{return U.collection("group").orderBy("timestamp","desc").onSnapshot(A=>{const v=A.docs.map(y=>({id:y.id,...y.data()}));c(v)})}catch(p){console.error("Error fetching message data:",p)}};u.useEffect(()=>{f()},[]);const o=l.map(p=>p[t]).reduce((p,A)=>p+A,null);return u.useEffect(()=>{o===null||o===0||o==="NaN"?document.getElementById("myHead").innerHTML="Squarelion Agency":document.getElementById("myHead").innerHTML=`Squarelion Agency (${o})`},[o]),s.jsx(Z,{setUser:e,user:t,setUuid:n,setLevel:m})}export{Ve as B,qe as L,Ze as P,tt as T,Je as a,$e as b,et as m,_e as t};
