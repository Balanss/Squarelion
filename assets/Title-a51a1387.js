import{s as Y,_ as u,m as ne,r as f,b as z,c as U,j as d,d as P,i as K,g as ie,a as oe,n as ae,o as L,u as se,R as H}from"./index-66abdd09.js";import{P as le,B as ce}from"./PartnerLogic-530e8031.js";import{e as de,u as q,h as pe,j as ue,o as V,T as fe,k as ge,l as W,M as he,P as me,B as xe,L as ve,G as Z,f as S,_ as Ae,b as be,c as O,d as we,U as ke}from"./Nav-30026dc9.js";const De=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],ye=t=>{const{absolute:e,children:r,classes:n,flexItem:s,light:g,orientation:l,textAlign:p,variant:o}=t;return K({root:["root",e&&"absolute",o,g&&"light",l==="vertical"&&"vertical",s&&"flexItem",r&&"withChildren",r&&l==="vertical"&&"withChildrenVertical",p==="right"&&l!=="vertical"&&"textAlignRight",p==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},de,n)},Ee=Y("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,r.orientation==="vertical"&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&r.orientation==="vertical"&&e.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&e.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>u({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:ne(t.palette.divider,.08)},e.variant==="inset"&&{marginLeft:72},e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>u({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:e})=>u({},e.children&&e.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:e})=>u({},e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>u({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Te=Y("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,r.orientation==="vertical"&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>u({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},e.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),Be=f.forwardRef(function(e,r){const n=z({props:e,name:"MuiDivider"}),{absolute:s=!1,children:g,className:l,component:p=g?"div":"hr",flexItem:o=!1,light:i=!1,orientation:a="horizontal",role:x=p!=="hr"?"separator":void 0,textAlign:h="center",variant:w="fullWidth"}=n,k=U(n,De),b=u({},n,{absolute:s,component:p,flexItem:o,light:i,orientation:a,role:x,textAlign:h,variant:w}),D=ye(b);return d.jsx(Ee,u({as:p,className:P(D.root,l),role:x,ref:r,ownerState:b},k,{children:g?d.jsx(Te,{className:D.wrapper,ownerState:b,children:g}):null}))}),Re=Be,Ce="data:image/png;base64,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",Pe=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ye(t,e,r){const n=e.getBoundingClientRect(),s=r&&r.getBoundingClientRect(),g=V(e);let l;if(e.fakeTransform)l=e.fakeTransform;else{const i=g.getComputedStyle(e);l=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let p=0,o=0;if(l&&l!=="none"&&typeof l=="string"){const i=l.split("(")[1].split(")")[0].split(",");p=parseInt(i[4],10),o=parseInt(i[5],10)}return t==="left"?s?`translateX(${s.right+p-n.left}px)`:`translateX(${g.innerWidth+p-n.left}px)`:t==="right"?s?`translateX(-${n.right-s.left-p}px)`:`translateX(-${n.left+n.width-p}px)`:t==="up"?s?`translateY(${s.bottom+o-n.top}px)`:`translateY(${g.innerHeight+o-n.top}px)`:s?`translateY(-${n.top-s.top+n.height-o}px)`:`translateY(-${n.top+n.height-o}px)`}function Ie(t){return typeof t=="function"?t():t}function G(t,e,r){const n=Ie(r),s=Ye(t,e,n);s&&(e.style.webkitTransform=s,e.style.transform=s)}const Me=f.forwardRef(function(e,r){const n=q(),s={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},g={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:l,appear:p=!0,children:o,container:i,direction:a="down",easing:x=s,in:h,onEnter:w,onEntered:k,onEntering:b,onExit:D,onExited:B,onExiting:T,style:E,timeout:C=g,TransitionComponent:R=fe}=e,I=U(e,Pe),v=f.useRef(null),F=pe(o.ref,v,r),A=c=>m=>{c&&(m===void 0?c(v.current):c(v.current,m))},y=A((c,m)=>{G(a,c,i),ge(c),w&&w(c,m)}),M=A((c,m)=>{const N=W({timeout:C,style:E,easing:x},{mode:"enter"});c.style.webkitTransition=n.transitions.create("-webkit-transform",u({},N)),c.style.transition=n.transitions.create("transform",u({},N)),c.style.webkitTransform="none",c.style.transform="none",b&&b(c,m)}),j=A(k),_=A(T),ee=A(c=>{const m=W({timeout:C,style:E,easing:x},{mode:"exit"});c.style.webkitTransition=n.transitions.create("-webkit-transform",m),c.style.transition=n.transitions.create("transform",m),G(a,c,i),D&&D(c)}),te=A(c=>{c.style.webkitTransition="",c.style.transition="",B&&B(c)}),re=c=>{l&&l(v.current,c)},Q=f.useCallback(()=>{v.current&&G(a,v.current,i)},[a,i]);return f.useEffect(()=>{if(h||a==="down"||a==="right")return;const c=ue(()=>{v.current&&G(a,v.current,i)}),m=V(v.current);return m.addEventListener("resize",c),()=>{c.clear(),m.removeEventListener("resize",c)}},[a,h,i]),f.useEffect(()=>{h||Q()},[h,Q]),d.jsx(R,u({nodeRef:v,onEnter:y,onEntered:j,onEntering:M,onExit:ee,onExited:te,onExiting:_,addEndListener:re,appear:p,in:h,timeout:C},I,{children:(c,m)=>f.cloneElement(o,u({ref:F,style:u({visibility:c==="exited"&&!h?"hidden":void 0},E,o.props.style)},m))}))}),je=Me;function Ge(t){return ie("MuiDrawer",t)}oe("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Ue=["BackdropProps"],Le=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],$=(t,e)=>{const{ownerState:r}=t;return[e.root,(r.variant==="permanent"||r.variant==="persistent")&&e.docked,e.modal]},Se=t=>{const{classes:e,anchor:r,variant:n}=t,s={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${L(r)}`,n!=="temporary"&&`paperAnchorDocked${L(r)}`]};return K(s,Ge,e)},Fe=Y(he,{name:"MuiDrawer",slot:"Root",overridesResolver:$})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),X=Y("div",{shouldForwardProp:ae,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:$})({flex:"0 0 auto"}),Qe=Y(me,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.paper,e[`paperAnchor${L(r.anchor)}`],r.variant!=="temporary"&&e[`paperAnchorDocked${L(r.anchor)}`]]}})(({theme:t,ownerState:e})=>u({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),J={left:"right",right:"left",top:"down",bottom:"up"};function Ne(t){return["left","right"].indexOf(t)!==-1}function He(t,e){return t.direction==="rtl"&&Ne(e)?J[e]:e}const We=f.forwardRef(function(e,r){const n=z({props:e,name:"MuiDrawer"}),s=q(),g={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:p,children:o,className:i,elevation:a=16,hideBackdrop:x=!1,ModalProps:{BackdropProps:h}={},onClose:w,open:k=!1,PaperProps:b={},SlideProps:D,TransitionComponent:B=je,transitionDuration:T=g,variant:E="temporary"}=n,C=U(n.ModalProps,Ue),R=U(n,Le),I=f.useRef(!1);f.useEffect(()=>{I.current=!0},[]);const v=He(s,l),A=u({},n,{anchor:l,elevation:a,open:k,variant:E},R),y=Se(A),M=d.jsx(Qe,u({elevation:E==="temporary"?a:0,square:!0},b,{className:P(y.paper,b.className),ownerState:A,children:o}));if(E==="permanent")return d.jsx(X,u({className:P(y.root,y.docked,i),ownerState:A,ref:r},R,{children:M}));const j=d.jsx(B,u({in:k,direction:J[v],timeout:T,appear:I.current},D,{children:M}));return E==="persistent"?d.jsx(X,u({className:P(y.root,y.docked,i),ownerState:A,ref:r},R,{children:j})):d.jsx(Fe,u({BackdropProps:u({},p,h,{transitionDuration:T}),className:P(y.root,y.modal,i),open:k,ownerState:A,onClose:w,hideBackdrop:x,ref:r},R,C,{children:j}))}),Oe=We;function qe(){const[t,e]=f.useState([]),r=se();function n(o){t.map((i,a)=>{a===o&&(localStorage.setItem("partner",i.name),localStorage.setItem("image",i.imageUrl),setTimeout(()=>{r(`/profile/${i.name}`),window.location.reload()},2e3))})}const[s,g]=H.useState({left:!1}),l=(o,i)=>a=>{a.type==="keydown"&&(a.key==="Tab"||a.key==="Shift")||g({...s,[o]:i})},p=o=>d.jsxs(ce,{sx:{width:o==="top"||o==="bottom"?"auto":250},role:"presentation",onClick:l(o,!1),onKeyDown:l(o,!1),children:[d.jsx(ve,{children:t.map((i,a)=>d.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[d.jsxs("h2",{onClick:()=>{n(a)},style:{cursor:"pointer",marginLeft:"20px"},children:[" ",i.name,"  "]},a),d.jsxs("p",{style:{color:"red",marginLeft:"10px"},children:[" ",i.status!==0?i.status:null]})]},a))}),d.jsx(Re,{}),d.jsx("img",{src:Ce,className:"logo"})]});return d.jsxs(d.Fragment,{children:[d.jsx(le,{setPartner:e}),d.jsx("div",{className:"",children:["left"].map(o=>d.jsxs(H.Fragment,{children:[d.jsx(xe,{className:"button-links",onClick:l(o,!0),children:"Partner"}),d.jsx(Oe,{anchor:o,open:s[o],onClose:l(o,!1),children:p(o)})]},o))})]})}function Ve({text:t,sendTo:e,user:r,imp:n,allUid:s,setText:g}){const p=new Date().toLocaleTimeString(),i=new Date().toLocaleString().slice(0,25),[a,x]=f.useState(p),h=Z(),k=new Date().toString().slice(0,30);f.useState(0);function b(){x(p),S.collection(e).doc(k).set({text:t,sendBy:r+" /"+i,timestamp:h,imp:n,mail:"https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fmail.png?alt=media&token=bdfde3a5-5c9b-4e2c-aa52-4ee31b2defe0"},{merge:!0}),s.map(D=>{if(r!==D){const B=Ae(we,e),T=be(B,k);O(T,{[D]:1},{merge:!0}),O(T,{[r]:0},{merge:!0})}}),g("")}return d.jsx("button",{onClick:b,children:" Send "})}function Ze({sendTo:t,text:e,user:r,trueChat:n,setText:s}){const l=new Date().toLocaleTimeString();new Date().toLocaleString().slice(0,25),f.useState(l),Z();const i=new Date().toString().slice(0,25);f.useState(0);function a(){S.collection("chat").doc(t).set({[i]:e+"  - send by  "+r},{merge:!0}),S.collection("chat").doc(n).set({[i]:e+"  - send by  "+r},{merge:!0}),s("")}return d.jsx("button",{onClick:a,children:" private chat "})}const $e="https://Balanss.github.io/Squarelion/assets/bin-a8ff8aa0.png",Je="https://Balanss.github.io/Squarelion/assets/meeting-4135f19a.png",_e="https://Balanss.github.io/Squarelion/assets/time-7815fb36.png",et="https://Balanss.github.io/Squarelion/assets/important-5d688978.png";function tt({}){const[t,e]=f.useState(""),[r,n]=f.useState(""),[s,g]=f.useState(""),[l,p]=f.useState([]),o=async()=>{try{return S.collection("group").orderBy("timestamp","desc").onSnapshot(x=>{const h=x.docs.map(w=>({id:w.id,...w.data()}));p(h)})}catch(a){console.error("Error fetching message data:",a)}};f.useEffect(()=>{o()},[]);const i=l.map(a=>a[t]).reduce((a,x)=>a+x,null);return f.useEffect(()=>{i===null||i===0||i==="NaN"?document.getElementById("myHead").innerHTML="Squarelion Agency":document.getElementById("myHead").innerHTML=`Squarelion Agency (${i})`},[i]),d.jsx(ke,{setUser:e,user:t,setUuid:n,setLevel:g})}export{Ve as B,qe as L,Ze as P,tt as T,Je as a,$e as b,et as m,_e as t};
