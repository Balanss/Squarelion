import{r as t,j as e,l as ae,L as ie}from"./index-66abdd09.js";import{U as q,N as H,f as b,_ as I,b as E,y as ne,c as G,d as R}from"./Nav-30026dc9.js";import{T as oe,L as ce,m as N,b as M,t as le,B as W,P as de,a as ue}from"./Title-a51a1387.js";import{F as O}from"./Footer-04b84158.js";import{u as he}from"./useLogo-28cee2dd.js";import"./PartnerLogic-530e8031.js";function me(){const[a,x]=t.useState(""),[j,f]=t.useState("");return e.jsxs("div",{className:"emptyhomepage",children:[e.jsx(q,{setUser:x,setLevel:f}),e.jsx("div",{style:{backgroundColor:"ghostwhite"},children:e.jsx(H,{})}),e.jsxs("div",{className:"profiletextwait",children:[e.jsxs("h2",{children:[" Hello ",a,", Currently you are waiting approval from an admin "]}),e.jsx("img",{src:he,alt:"logo",style:{margin:"0 auto"},className:"sql-logo"}),e.jsx("h3",{children:" Sed dapibus tellus at tempor feugiat. Nullam id vehicula lacus. Aliquam erat volutpat. Vestibulum fermentum hendrerit odio, non blandit metus ullamcorper vel. Nulla sed magna diam. Vestibulum semper arcu augue, et facilisis leo ornare nec. Maecenas dictum metus vel enim ultrices efficitur. "})]}),e.jsx(O,{})]})}function pe({privateChat:a,setChat:x,setDesignerChat:j,setMessage:f}){const T=async()=>{try{b.collection("chat").doc(a).onSnapshot(i=>{if(i.exists){const o=i.data(),n=Object.entries(o).filter(([d])=>d!=="timestamp").sort((d,l)=>new Date(l[0])-new Date(d[0])).reduce((d,[l,m])=>({...d,[l]:m}),{});x(n)}else console.log("privateChat document does not exist"),x("")})}catch(c){console.error("Error fetching chat data:",c)}};t.useEffect(()=>{T()},[a]);const C=async()=>{try{return b.collection("designer").orderBy("timestamp","desc").onSnapshot(i=>{const o=i.docs.map(n=>({id:n.id,...n.data()}));j(o)})}catch(c){console.error("Error fetching designer chat data:",c)}};t.useEffect(()=>{C()},[]);const h=async()=>{try{return b.collection("group").orderBy("timestamp","desc").onSnapshot(i=>{const o=i.docs.map(n=>({id:n.id,...n.data()}));f(o)})}catch(c){console.error("Error fetching message data:",c)}};t.useEffect(()=>{h()},[])}function Ne(){ae();const[a,x]=t.useState(""),[j,f]=t.useState(""),[T,C]=t.useState(""),[h,c]=t.useState("waiting"),[i,o]=t.useState(""),[n,d]=t.useState(""),[l,m]=t.useState("waiting"),[S,V]=t.useState([]),_=async()=>{try{return b.collection("admin").onSnapshot(r=>{const u=r.docs.map(g=>({id:g.id,...g.data()}));u.sort((g,re)=>g.id-re.id),V(u)})}catch(s){console.error("Error fetching work data:",s)}};t.useEffect(()=>{_()},[]);const[k,$]=t.useState([]),[z,J]=t.useState([]),[K,Q]=t.useState(""),[X,Y]=t.useState(),[w,p]=t.useState(!1),[L,y]=t.useState(""),A=S.map(s=>s.Name),B=s=>{const r=I(R,l),u=E(r,s);ne(u).then(()=>{console.log("Document successfully deleted!")}).catch(g=>{console.error("Error removing document:",g)})};function P(s){const r=I(R,"group"),u=E(r,s);G(u,{[a]:0},{merge:!0})}const F=s=>{const r=E(R,"group",s);G(r,{new:"Read"}).then(()=>{console.log("Field successfully updated")}).catch(g=>{})},[Z,ee]=t.useState(!1),[v,se]=t.useState(!1),[D,te]=t.useState(!1);t.useEffect(()=>{setTimeout(()=>{ee(!0)},1e3)},[]);const U=k.map(s=>s[a]).reduce((s,r)=>s+r,null);return e.jsxs(e.Fragment,{children:[e.jsx(pe,{privateChat:l,setChat:Q,setDesignerChat:J,setMessage:$}),e.jsx(oe,{}),e.jsx(q,{setUser:x,user:a,setUuid:f,setIsAccepted:C,level:h,setLevel:c}),h===0&&e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(me,{})})}),h>7?e.jsxs(e.Fragment,{children:["  ",e.jsxs("div",{className:"profile",children:[e.jsxs("div",{style:{margin:"auto",backgroundColor:"white",borderBottom:"2px solid gold"},children:[" ",e.jsx(H,{})," "]}),e.jsxs("div",{className:"real-admin-links",children:[e.jsx(ce,{})," "]}),e.jsxs("div",{className:"group-text",children:[e.jsxs("h2",{onClick:()=>te(D!==!0),children:[" ",D===!1?"Show Priority":"Show All"," "]}),l==="group"&&e.jsx(e.Fragment,{children:D===!0?k.map((s,r)=>e.jsxs("div",{className:"indi-group-text",onClick:()=>F(s.id),children:[" ",s.imp>""?e.jsxs("h2",{className:"style-this-h2",children:["  ",e.jsx("img",{src:N,style:{width:"40px",height:"40px"}})," ",s.text," - ",s.sendBy," "]}):null,s.imp>""?e.jsx("img",{style:{width:"50px",height:"50px",cursor:"pointer"},src:M,onClick:u=>B(s.id)}):null," ",e.jsx("hr",{})," "]},r)):k.map((s,r)=>e.jsxs("div",{className:"indi-group-text",onClick:()=>F(s.id),children:[e.jsxs("h2",{className:"style-this-h2",onClick:()=>P(s.id),children:["  ",s.imp>""?e.jsx("img",{src:N,style:{width:"40px",height:"40px"}}):null," ",s.text," - ",s.sendBy," "]}),e.jsx("img",{style:{width:"50px",height:"50px",cursor:"pointer"},src:M,onClick:u=>B(s.id)})," ",e.jsx("hr",{})," "]},r))}),l==="designer"&&e.jsx(e.Fragment,{children:z.map((s,r)=>e.jsx("div",{className:"indi-group-text",onClick:()=>F(s.id),children:e.jsxs("h2",{className:"style-this-h2",onClick:()=>P(s.id),children:["  ",s.imp>""?e.jsx("img",{src:N,style:{width:"40px",height:"40px"}}):null," ",s.text," - ",s.sendBy," "]})},r))}),l!=="group"&&e.jsx(e.Fragment,{children:l&&e.jsx(e.Fragment,{children:Object.entries(K).map(([s,r])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},className:"style-private-chat",children:[e.jsxs("h2",{className:"indi-group-text",children:["  ",e.jsx("img",{src:le,style:{width:"20px",height:"20px",marginRight:"10px"}}),"  ",s," "]}),e.jsxs("h2",{children:["   ",r," "]}),e.jsx("hr",{style:{color:"black",width:"100px"}})]},s))})})]}),e.jsxs("form",{className:"form-private",onSubmit:s=>s.preventDefault(),children:[e.jsxs("label",{children:[" ",`Send message to ${L} ${v===!0&&L==="Group"?" [Priority] ":""}`," "]}),e.jsxs("div",{children:[e.jsx("textarea",{onChange:s=>d(s.target.value),value:n,className:"textarea",placeholder:"Enter"}),e.jsx("img",{src:N,onClick:()=>{se(v===!1)},className:"img-imp",style:{width:"2rem"}})]}),i==="designer"?e.jsx(W,{allUid:A,user:a,sendTo:i,text:n,uuid:j,imp:v}):null,i==="group"?e.jsx(W,{allUid:A,setText:d,user:a,sendTo:i,text:n,uuid:j,imp:v}):null,i!=="designer"&&i!=="group"?e.jsx(de,{user:a,setText:d,sendTo:i,text:n,trueChat:X}):null]}),e.jsxs("div",{className:"list",children:[w&&h>8&&e.jsx(e.Fragment,{children:e.jsxs("div",{style:{backgroundColor:"white",padding:"10px",borderRadius:"10px",color:"black"},children:[e.jsxs("h2",{onClick:()=>{o("group"),y("Group"),m("group"),p(!1)},style:{cursor:"pointer"},className:"h2-noti",children:[" Group  ",e.jsxs("p",{style:{fontSize:"14px",color:"red"},children:[" ",U>0?U:""," "]})]}),e.jsx("h2",{onClick:()=>{o("designer"),y("designer"),m("designer"),p(!1)},style:{cursor:"pointer"},className:"h2-noti",children:" Designer  "}),S.map((s,r)=>e.jsx("div",{children:e.jsxs("h2",{style:{cursor:"pointer"},onClick:()=>{o("chat"+a+s.Name),m("chat"+a+s.Name),Y("chat"+s.Name+a),y(s.Name),p(!1)},children:[" ",s.Name," "]},r)},r))]})}),w&&h===8&&e.jsx(e.Fragment,{children:e.jsxs("div",{style:{backgroundColor:"white",width:"125px",padding:"10px",borderRadius:"10px",color:"black"},children:[e.jsx("h2",{onClick:()=>{o("designer"),y("designer"),m("designer"),p(!1)},style:{cursor:"pointer"},className:"h2-noti",children:" Chat  "}),S.map((s,r)=>e.jsx("div",{children:e.jsxs("h2",{style:{cursor:"pointer"},onClick:()=>{o("chat"+a+s.Name),m("chat"+a+s.Name),y(s.Name),p(!1)},children:[" ",s.Name," "]},r)},r))]})}),e.jsx("img",{className:"style-meeting",src:ue,style:{cursor:"pointer",width:"50px",height:"50px"},onClick:()=>p(w!==!0)})]}),e.jsx("div",{})]}),"  ",e.jsx(O,{})," "]}):null,Z===!1&&e.jsx(e.Fragment,{children:e.jsx(ie,{})})]})}export{Ne as default};
