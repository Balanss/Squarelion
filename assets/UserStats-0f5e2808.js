import{r as o,b as X,f as N,a as t,j as i,F as M,I as J,_ as S,R as F,h as T,y as P,i as D,H as V,J as z,U as Q,m as j,z as K}from"./index-8a05ea23.js";import{m as C}from"./Nav-fdc481b2.js";import{B as U,Q as Z}from"./Profile-40c41568.js";import"./useLogo-28cee2dd.js";import"./DesignerFunctions-9e4c86f0.js";import"./Links-57bd483f.js";import"./Logo-4b9c1084.js";import"./Version-10c67649.js";function ee(){const[e,n]=o.useState(null);return o.useEffect(()=>X.onAuthStateChanged(u=>{u?N.collection("admin").doc(u.uid).get().then(h=>{const c=h.data();n(c.dateJoined)}):(setUser(null),setLevel(null))}),[]),t("div",{className:"lg:float-right pt-6",children:t("header",{className:"text-white phones:text-md text-lg font-bold",children:i("p",{children:["Account created on: ",e]})})})}function te({user:e,level:n}){const[a,u]=o.useState(!1),h=new Date().getHours();let c;h<12?c="Good morning":h<18?c="Good afternoon":c="Good evening";const r=new Date,d="5";return i("div",{className:" p-5 border w-[75vw] phones:w-[90vw] border-y-[#2c1f42] phones:m-auto border-x-[#2f3763] rounded-lg shadow text-left bg-[#111d39]  ",children:[i("p",{className:"text-xl xl:text-7xl text-white font-bold pb-5",children:[" ",c,",",t("br",{}),i("span",{className:"text-green-400  font-bold  text-xl  xl:text-4xl",children:[e,"!"]})]}),t("p",{className:"text-gray-400  text-xs md:text-lg",children:r.toString().slice(0,15)}),i("button",{onClick:()=>{u(!a),localStorage.setItem("showNewUpdates",d)},className:"text-white mt-2  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800",type:"button",children:[localStorage.getItem("showNewUpdates")===d?"No updates":"New Updates",t("svg",{className:"w-2.5 h-2.5 ms-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:t("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),a&&t("div",{className:"z-10  absolute text-black font-semibold bg-white divide-y divide-gray-100 rounded-bl-xl rounded-br-xl rounded-tl-md rounded-tr-md shadow w-44 ",children:t("ul",{className:"py-2 text-sm ",children:t("li",{children:i("h1",{className:"block px-4 py-2 max-h-[400px] overflow-auto",children:["Hello ",e,"! There have been updates to Media Pilot:",i("ul",{className:"list-disc list-inside mt-2",children:[t("li",{children:"Designers can now see how many post they have open"}),n>9&&i(M,{children:[" ",t("li",{children:" You can now select which desiger to assign  "})," "]})]})]})})})}),t(ee,{user:e,level:n})]})}function se({setRound:e,user:n}){const a=async()=>{try{return N.collection("partner").onSnapshot(async h=>{const c=h.docs.map(r=>({id:r.id,...r.data()}));e(c.map(r=>r.name))})}catch{console.log("loading")}};o.useEffect(()=>{a()},[n])}function ne({scheduleData:e,setScheduleData:n}){o.useEffect(()=>J(S(D,"schedule"),d=>{const s=[];d.forEach(l=>{s.push({id:l.id,...l.data()})}),s.sort((l,m)=>new Date(l.selectedDate)-new Date(m.selectedDate)),n(s)}),[]);const a=["bg-gradient-to-r from-green-700 to-green-800","bg-gradient-to-r from-blue-700 to-blue-800","bg-gradient-to-r from-indigo-700 to-indigo-800","bg-gradient-to-r from-purple-700 to-purple-800","bg-gradient-to-r from-pink-700 to-pink-800","bg-gradient-to-r from-teal-700 to-teal-800","bg-gradient-to-r from-lime-700 to-lime-800","bg-gradient-to-r from-emerald-700 to-emerald-800","bg-gradient-to-r from-fuchsia-700 to-fuchsia-800"],[u,h]=o.useState("");o.useEffect(()=>{h(a[Math.floor(Math.random()*a.length)])},[]);const c=async r=>{e.map((d,s)=>{if(s!==r)console.log("not equal");else{const l=S(D,"schedule"),m=T(l,d.id);P(m)}})};return i("div",{className:"inline-flex bg-secondary  flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:p-10 phones:w-screen phones:m-auto  p-4 max-h-[400px] lg:max-h-[800px] overflow-y-auto",children:[i("section",{className:"flex flex-col items-start justify-between",children:[t("h2",{className:"text-white mb-2 phones:text-lg  text-2xl font-semibold",children:"Upcoming Events"}),t("hr",{className:"bg-white w-full"})]}),e.length===0?t("p",{className:"text-white phones:text-lg  text-2xl font-bold",children:"No events scheduled"}):e.map((r,d)=>{const s=a[Math.floor(Math.random()*a.length)],l=new Date;l.setHours(0,0,0,0);const m=new Date(r.selectedDate);return m.setDate(m.getDate()+1),m.setHours(0,0,0,0),m<l&&c(d),i(F.Fragment,{children:[i(C.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.75,delay:d*.3},className:`text-white text-xs ${s} p-2 mt-2 rounded-md inline-flex flex-col max-w-[200px] lg:max-w-[500px] break-words `,children:[i("h1",{className:"font-bold mb-2 flex justify-between",children:[r.user," ",i("span",{className:"cursor-pointer hover:text-red-700 ",onClick:()=>{const f=S(D,"schedule"),y=T(f,r.id);P(y)},children:[" ","X"," "]})," "]}),i("p",{children:[r.selectedDate.replace("T"," "),i("span",{className:"ml-1 ",children:[" @ ",r.timer,"  "]}),i("span",{className:"ml-1",children:[" | ",r.Title,"  "]})]})]}),t("hr",{className:"opacity-25"})]},d)})]})}function ae({user:e,setData:n,data:a,setMatchingData:u,matchingData:h,month:c}){const r=()=>{try{return N.collection("partner").onSnapshot(l=>{const m=l.docs.map(x=>({id:x.id,...x.data()}));n(m)})}catch(s){console.error("Error fetching data: ",s)}};o.useEffect(()=>{const s=r();return()=>s()},[c]);const d=async()=>{try{const s=a.map(f=>N.collection(f.name).doc(c).get().then(y=>{if(y.exists){const v=y.data();return Object.keys(v).map(b=>{const g=v[b];return g.user?{client:g.client,AssignedTo:g.AssignedTo,month:g.month,post:g.count,Time:g.Time}:null}).filter(b=>b!==null).sort((b,g)=>b.order-g.order)}else return console.log("No such document!"),[]})),x=(await Promise.all(s)).flat().filter(f=>f.AssignedTo===e);u(x)}catch(s){console.error("Error fetching data:",s)}};return o.useEffect(()=>{d()},[c]),t(M,{children:h.length===0?t("h1",{children:"No current task"}):h.map((s,l)=>e===s.AssignedTo?t("div",{className:"max-h-500px phones:max-h-300px overflow-y-auto",children:i("li",{className:"flex flex-row items-center justify-between",children:[i("div",{className:"flex flex-row items-center gap-2",children:[t("div",{className:"w-2 h-2 rounded-full bg-green-500"}),t("p",{className:"text-white",children:s.client})]}),t("p",{className:"text-white",children:s.month}),t("p",{className:"text-white",children:s.post}),t("p",{className:"text-white",children:s.Time})]})},s.id||l):null)})}function oe({user:e}){const[n,a]=o.useState([]),[u,h]=o.useState([]),[c,r]=o.useState(""),d=new Date,s=d.getFullYear().toString(),l=(d.getMonth()+1).toString().padStart(2,"0");return o.useEffect(()=>{r(`${s}-${l}`)},[l]),i("div",{className:"inline-flex bg-secondary flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:p-10 phones:w-screen phones:m-auto  p-4 max-h-[400px] lg:max-h-[800px] overflow-y-auto",children:[i("section",{className:"flex flex-col items-start justify-between",children:[t("h2",{className:"text-white mb-2 phones:text-lg  text-2xl font-semibold",children:"Current Task"}),t("input",{date:d,className:"bg-[#2f3763] text-white w-full p-2 rounded-md",type:"month",value:c,onChange:m=>r(m.target.value)}),t("hr",{className:"bg-white w-full"})]}),t(ae,{setData:a,month:c,data:n,user:e,setMatchingData:h,matchingData:u})]})}var re=Object.defineProperty,ie=Object.defineProperties,le=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,q=(e,n,a)=>n in e?re(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,E=(e,n)=>{for(var a in n||(n={}))ce.call(n,a)&&q(e,a,n[a]);if(B)for(var a of B(n))de.call(n,a)&&q(e,a,n[a]);return e},k=(e,n)=>ie(e,le(n)),$=class extends o.Component{constructor(e){super(e),this.ref=F.createRef(),this.state={style:{}};const n={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},n,this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout(()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()},0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(e=()=>{},n){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:k(E({},this.state.style),{willChange:"transform"})})),this.setTransition(),e(n)}reset(){window.requestAnimationFrame(()=>{this.setState(Object.assign({},this.state,{style:k(E({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))})}onMouseMove(e=()=>{},n){return n.persist(),this.updateCall!==null&&window.cancelAnimationFrame(this.updateCall),this.event=n,this.updateCall=requestAnimationFrame(this.update.bind(this,n)),e(n)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:k(E({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout(()=>{this.setState(Object.assign({},this.state,{style:k(E({},this.state.style),{transition:""})}))},this.settings.speed)}onMouseLeave(e=()=>{},n){return this.setTransition(),this.settings.reset&&this.reset(),e(n)}getValues(e){const n=(e.nativeEvent.clientX-this.left)/this.width,a=(e.nativeEvent.clientY-this.top)/this.height,u=Math.min(Math.max(n,0),1),h=Math.min(Math.max(a,0),1),c=(this.reverse*(this.settings.max/2-u*this.settings.max)).toFixed(2),r=(this.reverse*(h*this.settings.max-this.settings.max/2)).toFixed(2),d=u*100,s=h*100;return{tiltX:c,tiltY:r,percentageX:d,percentageY:s}}updateElementPosition(){const e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(e){const n=this.getValues(e);this.setState(Object.assign({},this.state,{style:k(E({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${this.settings.axis==="x"?0:n.tiltY}deg) rotateY(${this.settings.axis==="y"?0:n.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const e=Object.assign({},this.props.style,this.state.style);return t("div",{style:e,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}};function he({writtenBy:e,setWrittenBy:n,user:a,round:u,item:h}){const c=async()=>{try{const s=[];for(const l of u){const x=(await N.collection(l).where("TextWrittenBy","==",a).get()).docs.map(f=>({id:f.id,TextWrittenBy:f.data().TextWrittenBy,...f.data()}));s.push(...x)}n(s)}catch(s){console.error(s)}};o.useEffect(()=>{(async()=>{c()})()},[a,u]);const[r,d]=o.useState("Loading");return o.useEffect(()=>{setTimeout(()=>{d(0)},5e3)},[e]),t(M,{children:t($,{children:i(C.div,{variants:h,className:"block max-w-sm p-6 phones:w-[125px]  xl:w-[250px] text-left text-white border border-y-[#2c1f42] border-x-[#2f3763] rounded-lg  bg-[#111d39] shadow-card ",children:[i("h5",{className:' "mb-2 text-4xl font-bold tracking-tight  " ',children:[e.length===0?t("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center  rounded-full animate-pulse bg-blue-900 text-blue-200",children:"loading..."}):e.length!==0?e.length:0," "]}),t("p",{className:"font-normal text-xs xl:text-2xl text-gray-400 ",children:"Written Content"})]})})})}function ue({uploadedBy:e,setUploadedBy:n,user:a,round:u,item:h}){const c=async()=>{try{const s=[];for(const l of u){const x=(await N.collection(l).where("DesignUploadedBy","==",a).get()).docs.map(f=>({id:f.id,DesignUploadedBy:f.data().DesignUploadedBy,...f.data()}));s.push(...x)}n(s),localStorage.setItem("uploadedBy",JSON.stringify(s))}catch(s){console.error(s)}};o.useEffect(()=>{(async()=>{c()})()},[a,u]);const[r,d]=o.useState("Loading");return o.useEffect(()=>{setTimeout(()=>{d(0)},5e3)},[e]),t(M,{children:t($,{children:i(C.div,{variants:h,className:"block max-w-sm p-6 phones:w-[125px]  xl:w-[250px] border border-y-[#2c1f42] border-x-[#2f3763] rounded-lg shadow-card text-left bg-[#111d39] ",children:[t("h5",{className:" 'mb-2 text-4xl  font-bold tracking-tight '",children:e.length===0?r===0?r:t("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center  rounded-full animate-pulse bg-blue-900 text-blue-200",children:r}):e.length}),t("p",{className:"font-normal text-xs xl:text-2xl text-gray-400 ",children:"Design Content"})]})})})}function pe({data:e,setData:n,user:a,round:u,item:h}){const c=async()=>{try{const s=[];for(const l of u){const x=(await N.collection(l).where("CreatedBY","==",a).get()).docs.map(f=>({id:f.id,CreatedBY:f.data().CreatedBY}));s.push(...x)}n(s)}catch(s){console.error(s)}};o.useEffect(()=>{(async()=>{c()})()},[a,u]);const[r,d]=o.useState("Loading");return o.useEffect(()=>{setTimeout(()=>{d(0)},5e3)},[e]),t(M,{children:e===0?null:t($,{children:i(C.div,{variants:h,className:"block max-w-sm p-6 phones:w-[125px] xl:w-[250px] text-white border border-y-[#2c1f42] border-x-[#2f3763] rounded-lg shadow-card text-left bg-[#111d39] ",children:[t("h5",{className:" 'mb-2 text-4xl font-bold tracking-tight ",children:e.length===0?r===0?r:t("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center  rounded-full animate-pulse bg-blue-900 text-blue-200",children:r}):e.length!==0?e.length:0}),t("p",{className:"font-normal text-xs xl:text-2xl text-gray-400 ",children:"Created Content"})]})})})}function me({user:e,setData:n,data:a,setMatchingData:u,matchingData:h,month:c}){const r=()=>{try{return N.collection("partner").onSnapshot(l=>{const m=l.docs.map(x=>({id:x.id,...x.data()}));n(m)})}catch(s){console.error("Error fetching data: ",s)}};o.useEffect(()=>{const s=r();return()=>s()},[c,e]);const d=async()=>{try{const s=a.map(f=>N.collection(f.name).doc(c).get().then(y=>{if(y.exists){const v=y.data();return Object.keys(v).map(b=>{const g=v[b];return g.user?{client:g.client,month:g.month,post:g.count,Time:g.Time,text:g.TextWrittenBy||g.DesignUploadedBy}:null}).filter(b=>b!==null).sort((b,g)=>b.order-g.order)}else return console.log("No such document!"),[]})),x=(await Promise.all(s)).flat().filter(f=>f.Time);u(x)}catch(s){console.error("Error fetching data:",s)}};return o.useEffect(()=>{d()},[c,e,a]),t(M,{children:h.length===0?t("h1",{children:"No current task"}):h.map((s,l)=>{const m=new Date(s.Time);return Math.abs(new Date-m)/36e5<=24&&t("div",{className:"w-[60vw] phones:w-screen flex",children:t("ul",{children:i("li",{className:"flex flex-row  gap-5 items-center justify-between phones:text-xs ",children:[i("div",{className:"flex items-center gap-1",children:[t("div",{className:"w-2 h-2 rounded-full bg-green-500"}),i("p",{className:"text-white phones:w-[120px]",children:[s.client.slice(0,10),".."]})]}),t("p",{className:"text-white phones:w-[120px]",children:s.month}),t("p",{className:"text-white phones:w-[120px]",children:s.post}),t("p",{className:"text-white phones:w-[120px]",children:s.Time.slice()}),t("p",{className:"text-white phones:w-[120px]",children:s.text})]})})},s.id||l)})})}function fe({user:e}){const[n,a]=o.useState([]),[u,h]=o.useState([]),[c,r]=o.useState(""),d=new Date,s=d.getFullYear().toString(),l=(d.getMonth()+1).toString().padStart(2,"0");return o.useEffect(()=>{r(`${s}-${l}`)},[l]),i("div",{className:"inline-flex bg-secondary flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:max-h-[200px]  phones:p-10 p-4 max-h-[400px] lg:max-h-[500px] overflow-scroll",children:[i("section",{className:"flex flex-col items-start justify-between",children:[t("h2",{className:"text-white mb-2 phones:text-lg  text-2xl font-semibold",children:"Latest Task Done"}),t("input",{date:d,className:"bg-[#2f3763] text-white w-full p-2 rounded-md",type:"month",value:c,onChange:m=>r(m.target.value)}),t("hr",{className:"bg-white w-full"})]}),t(me,{setData:a,month:c,data:n,user:e,setMatchingData:h,matchingData:u})]})}function xe({user:e,monthNumbers:n,setData:a}){o.useState([]),o.useEffect(()=>{(async()=>{const c=(await V(S(D,"Request"))).docs.map(l=>l.id),r=[],d=T(D,"Request",`${c}`),s=await z(d);s.exists()&&r.push(s.data()),a(r)})()},[e,n])}function ge(){const[e,n]=o.useState(new Date().toISOString().slice(0,7)),[a,u]=o.useState(""),[h,c]=o.useState([]);o.useState([]);const{user:r,pto:d,wfh:s,level:l}=o.useContext(Q),m=p=>{n(p.target.value);const w=p.target.value.split("-")[1];u(parseInt(w,10))},[x,f]=o.useState([]);o.useEffect(()=>{if(h[0]){const p=Object.values(h[0]);f(p.map(w=>({type:w.type,to:w.to,from:w.from,user:w.user,accepted:w.accepted,askedOn:w.askedOn,id:w.uuid})))}else console.log("data[0] is undefined or null")},[h]);const[y,v]=o.useState(""),[b,g]=o.useState("waiting"),[R,O]=o.useState("none"),[L,A]=o.useState("0"),[W,_]=o.useState("0"),Y=()=>{v("Granted")},I=()=>{v("Denied")};return o.useEffect(()=>{if(y==="Granted"){U.success("granted");const p=S(D,"Request"),w=T(p,`${R}`);j(w,{[`${b}`]:{accepted:!0}},{merge:!0}),setTimeout(()=>{v(""),g(""),O(""),A("")},1e3)}else if(y==="Denied"){U.error("Denied");const p=S(D,"Request"),w=T(p,`${R}`);j(w,{[`${b}`]:{accepted:!1}},{merge:!0});const G=S(D,"admin"),H=T(G,W);j(H,{[L]:K(1)},{merge:!0}),setTimeout(()=>{v(""),g(""),O(""),A("")},3e3)}},[y]),i("div",{className:"inline-flex bg-secondary flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:p-8 phones:w-screen phones:m-auto  p-4 max-h-[400px] lg:max-h-[800px] overflow-x-auto overflow-y-auto",children:[t(xe,{user:r,monthNumber:a,setData:c}),t(Z,{position:"top-center"}),i("section",{className:"flex flex-col items-start justify-between w-screen ",children:[t("h2",{className:"text-white mb-2 phones:text-lg  text-2xl font-semibold",children:"Current Leave"}),i("label",{children:["  Month: ",t("input",{type:"month",value:e,onChange:m,className:"text-black mb-2"})," "]}),t("hr",{className:"bg-white w-full "}),x&&x.length>0?x.map((p,w)=>t("div",{className:"flex flex-col gap-2 text-white ",children:(r===p.user&&l>7||l>9)&&e===p.from.slice(0,7)&&i("section",{className:"flex flex-row gap-10  phones:gap-1 items-center mt-5 max-h-[300px] phones:text-xs",children:[i("p",{className:"text-white phones:w-[100px]",children:["type: ",p.type]}),i("p",{className:"text-white phones:w-[100px]",children:["From: ",p.from]}),i("p",{className:"text-white phones:w-[100px]",children:["To: ",p.to]}),i("p",{className:"text-white w-[120px]",children:["User: ",p.user]}),i("p",{className:`${p.accepted!==""?"flex":"hidden"} phones:w-[100px]`,children:["Accepted: ",p.accepted?"Granted":"Denied"]}),t("p",{className:`${p.accepted===""?"flex":"hidden"} text-white phones:w-[100px]`,children:"Waiting"}),l>9&&i(M,{children:[t("button",{className:`bg-blue-500 text-white p-2 rounded ${p.accepted?"opacity-50 cursor-not-allowed":"hover:bg-blue-700"}`,disabled:!!p.accepted,onClick:()=>{Y(),g(p.askedOn),O(p.user),_(p.id)},children:"Grand"}),t("button",{className:`bg-red-500 text-white p-2 rounded  ${p.accepted?"hover:bg-red-700":"opacity-50 cursor-not-allowed"}`,disabled:!p.accepted,onClick:()=>{I(),g(p.askedOn),O(p.user),A(p.type),_(p.id)},children:"Deny"})]})]})},w)):t("h1",{className:"text-center mt-5 text-5xl font-bold",children:"No current leave"})]})]})}function Te({user:e,level:n}){const[a,u]=o.useState([]),[h,c]=o.useState([]),[r,d]=o.useState([]),[s,l]=o.useState([]),[m,x]=o.useState([]),f={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},y={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return i("div",{className:" text-center text-white w-[75vw]  phones:w-auto flex items-center justify-start xl:items-start xl:justify-between flex-col lg:flex-row mb-5 mt-5 gap-10 hello",children:[t(se,{setRound:u,user:e}),t(C.div,{className:"inline-flex phones:flex-col phones:gap-2 gap-10",variants:f,initial:"hidden",animate:"visible",children:i(C.div,{className:"",variants:y,children:[t(te,{user:e,level:n}),i("section",{className:"flex gap-3 flex-wrap justify-between phones:flex-col ",children:[n>9||e==="Saskia"?t(fe,{user:e,level:n}):null,t(oe,{user:e,level:n}),t(ne,{user:e,level:n,scheduleData:m,setScheduleData:x}),n>7?t(ge,{user:e}):null]}),t("section",{className:"mt-10 flex gap-5 flex-row phones:flex-col"}),i("section",{className:"mt-10 flex gap-5 items-center justify-center flex-row phones:flex-col ",children:[t(he,{user:e,setWrittenBy:l,level:n,round:a,writtenBy:s}),t(ue,{user:e,setUploadedBy:d,level:n,round:a,uploadedBy:r}),t(pe,{user:e,setData:c,level:n,round:a,data:h})]})]})})]})}export{Te as default};
