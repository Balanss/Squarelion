import{r as l,b as F,f as v,a as e,j as n,F as S,I,h as y,R as L,m as T,i as D,y as E,k as N,n as O,l as C,z as G}from"./index-ffbd0b64.js";import{L as H}from"./Profile-6d6f21fd.js";import{Q as P,B as R}from"./ReactToastify-5a8cf4a6.js";import"./useLogo-28cee2dd.js";import"./defineProperty-381500fa.js";import"./Version-13db1b98.js";function B(){const[a,d]=l.useState(null);return l.useEffect(()=>F.onAuthStateChanged(x=>{x?v.collection("admin").doc(x.uid).get().then(u=>{const c=u.data();d(c.dateJoined)}):(setUser(null),setLevel(null))}),[]),e("div",{className:"lg:float-right pt-6",children:e("header",{className:"text-white phones:text-md text-lg font-bold",children:n("p",{children:["Account created on: ",a]})})})}function J({user:a,level:d}){const[h,x]=l.useState(!1),u=new Date().getHours();let c;u<12?c="Good morning":u<18?c="Good afternoon":c="Good evening";const o=new Date,i="5";return n("div",{className:" phones:mb-4 p-5 border w-[75vw] phones:w-[90vw] border-y-[#2c1f42] phones:m-auto border-x-[#2f3763] rounded-lg shadow text-left bg-[#111d39]  ",children:[n("p",{className:"text-xl xl:text-7xl text-white font-bold pb-5",children:[" ",c,",",e("br",{}),n("span",{className:"text-green-400  font-bold  text-xl  xl:text-4xl",children:[a,"!"]})]}),e("p",{className:"text-gray-400  text-xs md:text-lg",children:o.toString().slice(0,15)}),n("button",{onClick:()=>{x(!h),localStorage.setItem("showNewUpdates",i)},className:"text-white mt-2  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800",type:"button",children:[localStorage.getItem("showNewUpdates")===i?"No updates":"New Updates",e("svg",{className:"w-2.5 h-2.5 ms-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),h&&e("div",{className:"z-10  absolute text-black font-semibold bg-white divide-y divide-gray-100 rounded-bl-xl rounded-br-xl rounded-tl-md rounded-tr-md shadow w-44 ",children:e("ul",{className:"py-2 text-sm ",children:e("li",{children:n("h1",{className:"block px-4 py-2 max-h-[400px] overflow-auto",children:["Hello ",a,"! There have been updates to Media Pilot:",n("ul",{className:"list-disc list-inside mt-2",children:[e("li",{children:"Designers can now see how many post they have open"}),d>9&&n(S,{children:[" ",e("li",{children:" You can now select which desiger to assign  "})," "]})]})]})})})}),e(B,{user:a,level:d})]})}function q({setRound:a,user:d}){const h=async()=>{try{return v.collection("partner").onSnapshot(async u=>{const c=u.docs.map(o=>({id:o.id,...o.data()}));a(c.map(o=>o.name))})}catch{console.log("loading")}};l.useEffect(()=>{h()},[d])}function z({scheduleData:a,setScheduleData:d}){l.useEffect(()=>I(y(N,"schedule"),i=>{const t=[];i.forEach(r=>{t.push({id:r.id,...r.data()})}),t.sort((r,m)=>new Date(r.selectedDate)-new Date(m.selectedDate)),d(t)}),[]);const h=["bg-gradient-to-r from-green-700 to-green-800","bg-gradient-to-r from-blue-700 to-blue-800","bg-gradient-to-r from-indigo-700 to-indigo-800","bg-gradient-to-r from-purple-700 to-purple-800","bg-gradient-to-r from-pink-700 to-pink-800","bg-gradient-to-r from-teal-700 to-teal-800","bg-gradient-to-r from-lime-700 to-lime-800","bg-gradient-to-r from-emerald-700 to-emerald-800","bg-gradient-to-r from-fuchsia-700 to-fuchsia-800"],[x,u]=l.useState("");l.useEffect(()=>{u(h[Math.floor(Math.random()*h.length)])},[]);const c=async o=>{a.map((i,t)=>{if(t!==o)console.log("not equal");else{const r=y(N,"schedule"),m=D(r,i.id);E(m)}})};return n("div",{className:"inline-flex bg-secondary  flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:p-10 phones:w-screen phones:m-auto  p-4 max-h-[400px] lg:max-h-[800px] overflow-y-auto",children:[n("section",{className:"flex flex-col items-start justify-between",children:[e("h2",{className:"text-white mb-2 phones:text-lg  text-2xl font-semibold",children:"Upcoming Events"}),e("hr",{className:"bg-white w-full"})]}),a.length===0?e("p",{className:"text-white phones:text-lg  text-left",children:"No events scheduled"}):a.map((o,i)=>{const t=h[Math.floor(Math.random()*h.length)],r=new Date;r.setHours(0,0,0,0);const m=new Date(o.selectedDate);return m.setDate(m.getDate()+1),m.setHours(0,0,0,0),m<r&&c(i),n(L.Fragment,{children:[n(T.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.75,delay:i*.3},className:`text-white text-xs ${t} p-2 mt-2 rounded-md inline-flex flex-col max-w-[200px] lg:max-w-[500px] break-words `,children:[n("h1",{className:"font-bold mb-2 flex justify-between",children:[o.user," ",n("span",{className:"cursor-pointer hover:text-red-700 ",onClick:()=>{const w=y(N,"schedule"),b=D(w,o.id);E(b)},children:[" ","X"," "]})," "]}),n("p",{children:[o.selectedDate.replace("T"," "),n("span",{className:"ml-1 ",children:[" @ ",o.timer,"  "]}),n("span",{className:"ml-1",children:[" | ",o.Title,"  "]})]})]}),e("hr",{className:"opacity-25"})]},i)})]})}function W({user:a,setData:d,data:h,setMatchingData:x,matchingData:u,month:c}){const o=()=>{try{return v.collection("partner").onSnapshot(r=>{const m=r.docs.map(g=>({id:g.id,...g.data()}));d(m)})}catch(t){console.error("Error fetching data: ",t)}};l.useEffect(()=>{const t=o();return()=>t()},[c]);const i=async()=>{try{const t=h.map(w=>v.collection(w.name).doc(c).get().then(b=>{if(b.exists){const s=b.data();return Object.keys(s).map(p=>{const f=s[p];return f.user?{client:f.client,AssignedTo:f.AssignedTo,month:f.month,post:f.count,Time:f.Time}:null}).filter(p=>p!==null).sort((p,f)=>p.order-f.order)}else return console.log("No such document!"),[]})),g=(await Promise.all(t)).flat().filter(w=>w.AssignedTo===a);x(g)}catch(t){console.error("Error fetching data:",t)}};return l.useEffect(()=>{i()},[c]),e(S,{children:u.length===0?e("h1",{className:"text-left",children:"No current task"}):u.map((t,r)=>a===t.AssignedTo?e("div",{className:"max-h-500px phones:max-h-300px overflow-y-auto",children:n("li",{className:"flex flex-row items-center justify-between",children:[n("div",{className:"flex flex-row items-center gap-2",children:[e("div",{className:"w-2 h-2 rounded-full bg-green-500"}),e("p",{className:"text-white",children:t.client})]}),e("p",{className:"text-white",children:t.month}),e("p",{className:"text-white",children:t.post}),e("p",{className:"text-white",children:t.Time})]})},t.id||r):null)})}function Y({user:a}){const[d,h]=l.useState([]),[x,u]=l.useState([]),[c,o]=l.useState(""),i=new Date,t=i.getFullYear().toString(),r=(i.getMonth()+1).toString().padStart(2,"0");return l.useEffect(()=>{o(`${t}-${r}`)},[r]),n("div",{className:"inline-flex bg-secondary flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:p-10 phones:w-screen phones:m-auto  p-4 max-h-[400px] lg:max-h-[800px] overflow-y-auto",children:[n("section",{className:"flex flex-col items-start justify-between",children:[e("h2",{className:"text-white mb-2 phones:text-lg  text-2xl font-semibold",children:"Current Task"}),e("input",{date:i,className:"bg-[#2f3763] text-white w-full p-2 rounded-md",type:"month",value:c,onChange:m=>o(m.target.value)}),e("hr",{className:"bg-white w-full mt-2"})]}),e(W,{setData:h,month:c,data:d,user:a,setMatchingData:u,matchingData:x})]})}function V({user:a,setData:d,data:h,setMatchingData:x,matchingData:u,month:c}){const o=()=>{try{return v.collection("partner").onSnapshot(r=>{const m=r.docs.map(g=>({id:g.id,...g.data()}));d(m)})}catch(t){console.error("Error fetching data: ",t)}};l.useEffect(()=>{const t=o();return()=>t()},[c,a]);const i=async()=>{try{const t=h.map(w=>v.collection(w.name).doc(c).get().then(b=>{if(b.exists){const s=b.data();return Object.keys(s).map(p=>{const f=s[p];return f.user?{client:f.client,month:f.month,post:f.count,Time:f.Time,text:f.TextWrittenBy||f.DesignUploadedBy}:null}).filter(p=>p!==null).sort((p,f)=>p.order-f.order)}else return console.log("No such document!"),[]})),g=(await Promise.all(t)).flat().filter(w=>w.Time);x(g)}catch(t){console.error("Error fetching data:",t)}};return l.useEffect(()=>{i()},[c,a,h]),e(S,{children:u.length===0?e("h1",{className:"text-left",children:"No current task"}):u.map((t,r)=>{const m=new Date(t.Time);return Math.abs(new Date-m)/36e5<=24&&e("div",{className:" phones:w-screen  grid grid-cols-1 items-center",children:e("ul",{children:n("li",{className:" grid    justify-items-center  grid-cols-5   gap-5 items-center laptop:justify-between phones:text-xs ",children:[n("div",{className:"flex items-center gap-1",children:[e("div",{className:"w-2 h-2 rounded-full bg-green-500"}),n("p",{className:"text-white phones:w-[30px]",children:[t.client.slice(0,10),".."]})]}),e("p",{className:"text-white phones:w-[50px]",children:t.month}),e("span",{className:"text-white phones:w-[10px]",children:t.post}),e("p",{className:"text-white w-[80px]",children:t.Time.slice()}),e("p",{className:"text-white phones:w-[80px]",children:t.text})]})})},t.id||r)})})}function Q({user:a}){const[d,h]=l.useState([]),[x,u]=l.useState([]),[c,o]=l.useState(""),i=new Date,t=i.getFullYear().toString(),r=(i.getMonth()+1).toString().padStart(2,"0");return l.useEffect(()=>{o(`${t}-${r}`)},[r]),n("div",{className:"inline-flex bg-secondary flex-col mt-10 gap-5 w-[70vw] m-auto border border-y-[#2c1f42] border-x-[#2f3763] phones:max-h-[200px] phones:w-screen phones:m-auto  phones:px-10 phones:py-10 p-4 max-h-[400px] lg:max-h-[500px] rounded overflow-x-auto overflow-y-auto",children:[n("section",{className:"flex flex-col items-start justify-between",children:[e("h2",{className:"text-white mb-2 phones:text-lg  text-2xl font-semibold",children:"Latest Task Done"}),e("input",{date:i,className:"bg-[#2f3763] text-white w-full p-2 rounded-md",type:"month",value:c,onChange:m=>o(m.target.value)}),e("hr",{className:"bg-white w-full mt-2"})]}),e(V,{setData:h,month:c,data:d,user:a,setMatchingData:u,matchingData:x})]})}function X(){const[a,d]=l.useState(new Date().getMonth()+1),[h,x]=l.useState(new Date().toISOString().slice(0,7)),[u,c]=l.useState([]);l.useState([]);const{user:o,pto:i,wfh:t,level:r}=l.useContext(O),m=s=>{const p=s.target.value.split("-")[1];d(parseInt(p,10)),x(s.target.value)},g=async s=>{const{user:p,askedOn:f}=s,k=y(N,"Request"),M=D(k,`${p}`);await C(M,{[`${s.month}/${s.day}`]:{accepted:"Approved"}},{merge:!0}),R.success("granted")};async function w(s){const{uuid:p,type:f,user:k,askedOn:M}=s,j=y(N,"Request"),A=D(j,`${k}`);await C(A,{[`${s.month}/${s.day}`]:{accepted:"Denied"}},{merge:!0}),R.error("Denied");const $=y(N,"admin"),U=D($,p);await C(U,{[f]:G(1)},{merge:!0})}const b=u.flatMap(s=>s.filter(p=>p.user));return n("div",{className:"inline-flex bg-secondary flex-col  mt-10 gap-5  border border-y-[#2c1f42] border-x-[#2f3763] phones:px-8 phones:w-screen phones:m-auto  px-4 max-h-[400px] lg:max-h-[800px] lg:overflow-y-auto",children:[e(H,{user:o,monthNumber:h,setData:c,monthNumbers:h,pto:i,wfh:t}),e(P,{position:"top-center"}),n("section",{className:"flex flex-col items-start justify-between  ",children:[e("h2",{className:"text-white mb-2 phones:text-lg  text-2xl font-semibold",children:"Current Leave"}),e("input",{type:"month",value:h,onChange:m,className:"text-white rounded-md mb-2 bg-[#2f3763]"}),e("hr",{className:"bg-white w-full "}),b&&b.length>0?b.map((s,p)=>e("div",{className:"flex flex-col gap-2 py-2 px-1 text-white  ",children:(s&&s.user&&o===s.user&&r>7||r>9)&&s.month===a?n("section",{className:`${s.accepted?"bg-blue-900 text-white":"bg-red-900"} flex flex-row gap-2 lg:w-[500px]  p-2 rounded-md phones:gap-1 items-center mt-5 max-h-[300px] phones:text-xs`,children:[n("p",{className:"text-white phones:w-[100px]",children:[s.type," "]}),r>9&&s.accepted==="pending"&&n(S,{children:[e("button",{className:"bg-blue-500 text-white p-1 rounded ",onClick:()=>{g(s)},children:"Grand"}),e("button",{className:"bg-red-500 text-white p-1 rounded",onClick:()=>{w(s)},children:"Deny"})]}),e("p",{className:"text-white ",children:s.user}),n("p",{className:"text-white ",children:["Date: ",s.month,"/",s.day]}),e("p",{className:`${s.accepted!==""?"flex":"hidden"} phones:w-[100px]`,children:s.accepted}),e("p",{className:`${s.accepted===""?"flex":"hidden"} text-white phones:w-[100px]`,children:"Waiting"})]}):null},p)):e("div",{className:" lg: min-w-[400px] phones:min-w-screen overflow-hidden",children:e("h1",{className:"text-center",children:"No current leaves"})})]})]})}function se({user:a,level:d}){const[h,x]=l.useState([]);l.useState([]),l.useState([]),l.useState([]);const[u,c]=l.useState([]),o={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},i={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return n("div",{className:" text-center text-white w-[75vw]   phones:w-auto flex items-center justify-start xl:items-start xl:justify-between flex-col lg:flex-row mb-5 mt-5 gap-10 hello",children:[e(q,{setRound:x,user:a}),e(T.div,{className:"inline-flex phones:flex-col phones:gap-2 gap-10",variants:o,initial:"hidden",animate:"visible",children:n(T.div,{className:"",variants:i,children:[e(J,{user:a,level:d}),n("section",{className:"flex gap-3 flex-wrap justify-between phones:flex-col ",children:[d>9||a==="Saskia"?e(Q,{user:a,level:d}):null,e(Y,{user:a,level:d}),e(z,{user:a,level:d,scheduleData:u,setScheduleData:c}),d>5?e(X,{user:a}):null]}),e("section",{className:"mt-10 flex gap-5 flex-row phones:flex-col"})]})})]})}export{se as default};
