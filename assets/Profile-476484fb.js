import{r as a,j as e,f as S,t as W,v as I,w as j,J as ge,y as O,a as n,U as ae,N as ue,u as pe,L as R,F as f,b as fe,I as we,z as be,H as xe}from"./index-0152fa2a.js";import{u as Ne}from"./useLogo-28cee2dd.js";import{T as ve}from"./Title-4af4e0d6.js";/* empty css               */import{R as ye,L as ke}from"./quill.snow-c39ee0b2.js";import{h as Ae,c as $,u as Ce,I as Se}from"./client-98ca49dd.js";import"./Logo-4b9c1084.js";import"./PartnerLogic-f7d18d4b.js";function _({text:s,sendTo:h,user:i,imp:g,allUid:w,setText:p}){const m=new Date().toLocaleTimeString(),c=new Date().toLocaleString().slice(0,25),[r,b]=a.useState(m),o=ge(),x=new Date().toString().slice(0,30);a.useState(0);function v(){b(m),S.collection(h).doc(x).set({text:s,sendBy:i+" /"+c,timestamp:o,imp:g,mail:"https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fmail.png?alt=media&token=bdfde3a5-5c9b-4e2c-aa52-4ee31b2defe0"},{merge:!0}),w.map(D=>{if(i!==D){const A=W(O,h),y=I(A,x);j(y,{[D]:1},{merge:!0}),j(y,{[i]:0},{merge:!0})}}),p("")}return e("button",{onClick:v,type:"button",className:"text-white bg-gradient-to-r  md:w-[500px] !m-auto from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:"Chat"})}function De({sendTo:s,text:h,user:i,trueChat:g,setText:w}){const d=new Date().toLocaleTimeString();new Date().toLocaleString().slice(0,25),a.useState(d);const c=new Date().toString().slice(0,25);a.useState(0);function r(){S.collection("chat").doc(s).set({[c]:h+"  - send by  "+i},{merge:!0}),S.collection("chat").doc(g).set({[c]:h+"  - send by  "+i},{merge:!0}),w("")}return e("button",{onClick:r,type:"button",className:"text-white bg-gradient-to-r   md:w-[500px] !m-auto from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:"Chat"})}const ee="https://Balanss.github.io/Squarelion/assets/bin-a8ff8aa0.png",Te="https://Balanss.github.io/Squarelion/assets/meeting-4135f19a.png",Ee="https://Balanss.github.io/Squarelion/assets/time-7815fb36.png",U="https://Balanss.github.io/Squarelion/assets/important-5d688978.png";function Pe(){const[s,h]=a.useState(""),[i,g]=a.useState("");return n("div",{className:"emptyhomepage",children:[e(ae,{setUser:h,setLevel:g}),e("div",{style:{backgroundColor:"ghostwhite"},children:e(ue,{})}),n("div",{className:"profiletextwait mt-10",children:[n("h2",{className:"text-center mb-10 text-2xl",children:[" Hello ",s,", Currently you are waiting approval from an admin "]}),e("img",{src:Ne,alt:"logo",style:{margin:"0 auto"},className:"sql-logo"})]})]})}function Be({privateChat:s,setChat:h,setDesignerChat:i,setMessage:g}){const w=async()=>{try{S.collection("chat").doc(s).onSnapshot(l=>{if(l.exists){const c=l.data(),r=Object.entries(c).filter(([b])=>b!=="timestamp").sort((b,o)=>new Date(o[0])-new Date(b[0])).reduce((b,[o,N])=>({...b,[o]:N}),{});h(r)}else console.log("privateChat document does not exist"),h("")})}catch(m){console.error("Error fetching chat data:",m)}};a.useEffect(()=>{w()},[s]);const p=async()=>{try{return S.collection("designer").orderBy("timestamp","desc").onSnapshot(l=>{const c=l.docs.map(r=>({id:r.id,...r.data()}));i(c)})}catch(m){console.error("Error fetching designer chat data:",m)}};a.useEffect(()=>{p()},[]);const d=async()=>{try{return S.collection("group").orderBy("timestamp","desc").onSnapshot(l=>{const c=l.docs.map(r=>({id:r.id,...r.data()}));g(c)})}catch(m){console.error("Error fetching message data:",m)}};a.useEffect(()=>{d()},[])}const Ue=()=>e("iframe",{src:"https://calendar.google.com/calendar/embed?src=5d1252e5a5dcf866e4c382b1905392535fbe277c313d19a7e522971ac12a589e%40group.calendar.google.com&ctz=America%2FParamaribo",className:"w-[95vw] md:w-[57vw]  h-[400px] h-min-[400px] cal:w-[65vw] cal:h-[65vh] ",frameBorder:"0",scrolling:"no",title:"Google Calendar"}),Ie=({user:s})=>{a.useState(null),a.useState({}),a.useState(""),a.useState(0);const[h,i]=a.useState("");a.useState("");const[g,w]=a.useState(""),[p,d]=a.useState(""),[m,l]=a.useState("Submit");a.useState([]);const c=async o=>{const N="https://hooks.zapier.com/hooks/catch/15784808/39o6i61/";try{const v=await(await fetch(N,{method:"POST",mode:"cors",body:JSON.stringify(o)})).json();console.log(v)}catch(x){console.log(x)}};async function r(o){o.preventDefault();const N={from:h,user:s,description:p,title:g};try{await c(N)}catch(x){console.log(x)}setTimeout(()=>{i(""),d(""),w("")},1500),l("Submitted.. Page after you refresh"),setTimeout(()=>{l("Submit")},3e3)}return n("div",{className:" px-4 py-8 md:m-auto  md:w-[40vw] ",children:[e(Ue,{}),e("div",{className:"",children:n("form",{onSubmit:r,className:"mt-20 gap-5 flex flex-col items-center ",children:[e("input",{type:"datetime-local",onChange:o=>i(o.target.value),value:h}),e("input",{type:"text",placeholder:"Title",onChange:o=>w(o.target.value),value:g}),e(ye,{value:p,onChange:o=>{d(o)},style:{color:"black",backgroundColor:"white"},placeholder:"Detailed Text here...",className:"max-w-[90vw] lg:max-w-[500px]  "}),n("button",{className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer",children:["  ",m,"   "]})]})})]})},Oe=Ie,je="https://Balanss.github.io/Squarelion/assets/admin-fefab388.png",ze="https://Balanss.github.io/Squarelion/assets/wfh-163826c8.png",He="https://Balanss.github.io/Squarelion/assets/schedule-b8a7255f.png";function te({level:s,showWfh:h,setShowWfh:i,user:g,hideList:w,setHideList:p,sum:d,work:m,setSendTo:l,setDisplayTo:c,setPrivateChat:r,setTrueChat:b,setPan:o,pan:N}){const[x,v]=a.useState(!1),D=pe(),A=()=>{fe.signOut().then(()=>{D("/"),window.location.reload()})};return e("aside",{id:"cta-button-sidebar",className:x?"  w-full sm:w-1/5 fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0":"fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0","aria-label":"Sidebar",children:e("div",{className:"h-full px-3 py-4 overflow-y-auto bg-slate-800 dark:bg-slate-800",children:n("ul",{className:"space-y-2 font-medium",children:[e("li",{children:n(R,{to:"/",className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Ae}),e("span",{className:"ml-3",children:"Home"})]})}),e("li",{children:n("a",{onClick:()=>{i("start"),o(N===!1)},className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:He}),e("span",{className:"ml-3",children:"CALENDAR"})]})}),e("li",{children:s>9?n(R,{to:"/admindashboard",className:"  transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:je}),e("span",{className:"flex-1 ml-3 whitespace-nowrap  rounded-lg  dark:text-white",children:"ADMIN"})]}):null}),e("li",{children:n("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:$}),n("span",{className:"flex-1 ml-3 whitespace-nowrap   dark:text-white ",children:["  ",e(ke,{})," "]})]})}),e("li",{children:n(R,{to:"/designer",className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:$}),e("span",{className:"flex-1 ml-3 whitespace-nowrap   dark:text-white ",children:"  Designer "})]})}),e("li",{children:n("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{p(w!==!0),i("chat"),v("false")},children:[e("img",{className:"style-meeting",src:Te,style:{cursor:"pointer",width:"40px"}}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:"Chat"})]})}),e("li",{children:n("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{i("Docs"),v(!0)},children:[e("img",{className:"w-[40px]",src:ze}),e("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Docs"})]})}),e("li",{children:n("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Ce}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:g})]})}),e("li",{children:n("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:A,children:[e("img",{className:"w-[40px]",src:Se}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:"Sign Out"})]})}),e("l1",{children:s>7&&h==="chat"&&e(f,{children:n("div",{className:"pt-200px",children:[s>8?n("h2",{onClick:()=>{l("group"),c("Group"),r("group"),v(!0),p(w!==!0)},style:{cursor:"pointer"},className:"bg-slate-400 mt-2 p-2 mr-2 rounded-sm xl lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer ",children:["Group  ",n("p",{style:{fontSize:"14px",color:"red"},children:[" ",d>0?d:""," "]})]}):null,e("h2",{onClick:()=>{l("designer"),c("designer"),r("designer"),v(!0),p(w!==!0)},style:{cursor:"pointer"},className:"bg-slate-400 p-2 mt-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer",children:" Designer  "}),m.map((y,E)=>e("div",{className:"pt-2",children:n("p",{className:"bg-slate-400 p-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer ",style:{cursor:"pointer"},onClick:()=>{l("chat"+g+y.Name),r("chat"+g+y.Name),v(!0),b("chat"+y.Name+g),c(y.Name),p(w!==!0)},children:[" ",y.Name," "]},E)},E))]})})})]})})})}const Le="https://Balanss.github.io/Squarelion/assets/doc-6-133b4fd9.png",Re="https://Balanss.github.io/Squarelion/assets/doc-7-ae900980.png",We="data:image/png;base64,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";function Qe(){return e(f,{children:n("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"8. Adding Content Details"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:" The Content Planner is responsible for adding essential content information for each client. "}),n("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:[" On the client's page, you will find fields to fill in:",e("p",{children:"0. Post Unique ID : Each post will have an unique ID. KEEP IN MIND THIS IS NOT THE POST COUNT AS THE POST COUNT HAS TO BE ADDED AFTER ID"}),e("p",{children:"1. Post Count: Specify the number of posts required for the client's content. "}),e("p",{children:"2. Social Media Channel: Indicate the platform(s) where the content will be published."}),e("p",{children:"3. Date of Delivery: Set the deadline for when the content should be completed."}),e("p",{children:"4. Post Subject: Provide a brief description of the content subject.."}),e("p",{children:"5. Boosting : Add the amount of boosting for the post"}),e("p",{children:'6. AI Feature : You can now prompt the ai to already make to the post content. Once the Ai button is pressed wait for the "post content button" to finish loading to post the content '}),e("img",{src:Le,className:"mt-5"})]}),e("h1",{className:"text-3xl mt-5",children:" 9. Tracking Content Progress "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:' To identify pending content creation, the Content Editor can look for posts marked in orange with a "Pending" status. '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:' Click on the "Open" button next to a pending post to access its content creation workspace. '}),e("img",{src:Re,className:"mt-5 m-auto mb-10"}),e("h1",{className:"text-3xl mt-5",children:"10. Content Creation Workspace "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Inside the content creation workspace, the Content Editor can:"}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:"1. Write the text for the post."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 2. Add emojis to enhance the content."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 3.Delete the entire post if necessary.. "}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 4. Add designs or media to complement the content."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:' 5. You also have the option to prompt the ai to make content. Once the AI response simply press the " add text content" button '}),e("h1",{className:"text-3xl mt-5",children:" 11. Designer Content Upload "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:" The designer has the option to upload the final design for each post on the client's page "}),e("img",{src:We,className:"m-auto mb-10 mt-5"}),e("h1",{className:"text-3xl mt-5",children:" 12. Example Tab for Sending Instructions "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:'Below the Designer Content Upload section, you will find the "Example Tab".'}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Example Tab allows the Content Planner to provide instructions to the designer. It includes fields to add images and text as references."}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Content Planner can open up to a maximum of three Example Tabs for different instructions."}),e("h1",{className:"text-3xl mt-5",children:' 13. Changing Post Status to "Waiting" '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'After the Content writers have written the content for a post, they can change the post status to "Waiting" by clicking on the "Waiting" button. '}),e("h1",{className:"text-3xl mt-5",children:" 14. Approving the Post "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  Once the Content Planner has reviewed and approved the content, they can click on the "Approved" tab. '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'The "Approved" tab will change the status of the post to "Green," signifying its approval.'}),e("h1",{className:"text-3xl mt-5",children:" 15. Downloading content PDF "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"  The person in charge of content can download a single text file for a specific post. "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'By checking the box next to "Waiting for checkmark," they can download the text content in a convenient PDF format.'}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"The Pdf will be saved in a service please contact Gilmon for further assistance."}),e("h1",{className:"text-3xl mt-5",children:" 16. Closing the Post "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  To close a post, the user can click on the button with an "X" '}),e("h1",{className:"text-3xl mt-5",children:" 17. Memo Functionalities  "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"The Memo button allows users, typically Content Planners, to create or delete memos as reminders or notes related to content management tasks."})]})})}const Fe="https://Balanss.github.io/Squarelion/assets/doc-4-0d1fe929.png";function Me(){return e(f,{children:e("div",{className:"text-center text-black md:w-full md:absolute md:right-0 font-extrabold bg-slate-400 p-2 lg:w-4/5 lg:m-auto ",children:n("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"1. Introduction"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:"Welcome to the User Profile Guide for SQL Client Planning Tool. In this guide, we will walk you through the functionalities of the tool on your user profile page"}),e("h1",{className:"text-3xl mt-5",children:" 2. Accessing the Calendar "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Upon loading your user profile page, you will be presented with a calendar view that displays all your tasks and notes. The calendar will be the central hub for organizing your to-do list."}),e("h1",{className:"text-3xl mt-5",children:" 3. Adding a New Note "}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:"1. To add a new note, simply fill in the time and date , the title for the note and the description "}),e("img",{src:Fe,className:"mt-10 pb-5"}),e("h1",{className:"text-3xl mt-5",children:" 7. Accessing the Clients Tab "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  To access the Clients Tab, look for the "Clients" option on the side panel of your user profile page. Click on it to open a small window that displays all your SQL clients. '}),e(Qe,{})]})})})}function $e(){we();const[s,h]=a.useState(""),[i,g]=a.useState(""),[w,p]=a.useState(""),[d,m]=a.useState("waiting"),[l,c]=a.useState(""),[r,b]=a.useState(""),[o,N]=a.useState("waiting"),[x,v]=a.useState([]),D=async()=>{try{return S.collection("admin").onSnapshot(u=>{const k=u.docs.map(C=>({id:C.id,...C.data()}));k.sort((C,he)=>C.id-he.id),v(k)})}catch(t){console.error("Error fetching work data:",t)}};a.useEffect(()=>{D()},[]);const[A,y]=a.useState([]),[E,ne]=a.useState([]),[se,oe]=a.useState(""),[le,Q]=a.useState(),[F,M]=a.useState(!1),[q,Z]=a.useState(""),[P,z]=a.useState(!1),G=x.map(t=>t.Name),X=t=>{const u=W(O,o),k=I(u,t);xe(k).then(()=>{console.log("Document successfully deleted!")}).catch(C=>{console.error("Error removing document:",C)})};function Y(t){const u=W(O,"group"),k=I(u,t);j(k,{[s]:0},{merge:!0})}const H=t=>{const u=I(O,"group",t);j(u,{new:"Read"}).then(()=>{console.log("Field successfully updated")}).catch(C=>{})},[re,ie]=a.useState(!1),[B,ce]=a.useState(!1),[L,de]=a.useState(!1);a.useEffect(()=>{setTimeout(()=>{ie(!0)},1e3)},[]);const K=A.map(t=>t[s]).reduce((t,u)=>t+u,null),[T,V]=a.useState("start"),[J,me]=a.useState(!1);return a.useEffect(()=>{const t=()=>{me(window.innerWidth<767)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),n(f,{children:[e(Be,{privateChat:o,setChat:oe,setDesignerChat:ne,setMessage:y}),e(ve,{}),e(ae,{setUser:h,user:s,setUuid:g,setIsAccepted:p,level:d,setLevel:m}),d===0&&e(f,{children:e("div",{className:"min-h-[100vh] bg-slate-600",children:e(Pe,{})})}),e("button",{onClick:()=>z(P!==!0),"data-drawer-target":"default-sidebar","data-drawer-toggle":"default-sidebar","aria-controls":"default-sidebar",type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:e("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),n("div",{className:"flex flex-col sm:flex-row   bg-slate-500",children:[P===!0&&J===!0&&d>7&&n(f,{children:[e(te,{level:d,showWfh:T,setShowWfh:V,user:s,hideList:F,setHideList:M,sum:K,work:x,setSendTo:c,setDisplayTo:Z,setPrivateChat:N,setTrueChat:Q,pan:P,setPan:z})," "]}),J===!1&&d>7&&n(f,{children:[e(te,{level:d,showWfh:T,setShowWfh:V,user:s,hideList:F,setHideList:M,sum:K,work:x,setSendTo:c,setDisplayTo:Z,setPrivateChat:N,setTrueChat:Q,pan:P,setPan:z})," "]}),d>7?n(f,{children:["  ",n("div",{className:"w-full sm:w-4/5 lg:w-full md:absolute right-0 bg-slate-500   ",children:[T==="start"&&e("div",{className:"lg:w-5/5 xl:w-[1100px] lg:min-h-[100vh] xl:m-auto flex flex-col items-center bg-slate-500  ",children:e(Oe,{user:s})}),T==="chat"&&e(f,{children:n("div",{className:"bg-slate-100   min-h-[500px]   md:flex md:justify-center ",children:[n("h2",{onClick:()=>de(L!==!0),children:[" ",L===!1?"Show Priority":"Show All","  "]}),n("div",{className:"min-h-[90vh] max-h-[90vh] overflow-y-auto overflow-x-hidden p-10 ",children:[o==="group"&&e(f,{children:L===!0?A.map((t,u)=>n("div",{className:"flex flex-col items-center",onClick:()=>H(t.id),children:[" ",t.imp>""?n("h2",{className:"",children:["  ",e("img",{src:U,style:{width:"40px",height:"40px"}})," ",t.text," - ",t.sendBy," "]}):null,t.imp>""?e("img",{style:{width:"50px",height:"50px",cursor:"pointer"},src:ee,onClick:k=>X(t.id)}):null," ",e("hr",{})," "]},u)):A.map((t,u)=>n("div",{className:"",onClick:()=>H(t.id),children:[n("h2",{className:"md:max-w-[1000px] break-all",onClick:()=>Y(t.id),children:["  ",t.imp>""?e("img",{src:U,style:{width:"40px",height:"40px"}}):null," ",t.text," - ",t.sendBy," "]}),e("img",{style:{width:"50px",height:"50px",cursor:"pointer"},src:ee,onClick:k=>X(t.id)})," ",e("hr",{})," "]},u))}),o==="designer"&&e(f,{children:E.map((t,u)=>e("div",{className:"flex flex-col items-center",onClick:()=>H(t.id),children:n("h2",{className:"break-all",onClick:()=>Y(t.id),children:["  ",t.imp>""?e("img",{src:U,style:{width:"40px",height:"40px"}}):null," ",t.text," - ",t.sendBy," "]})},u))}),o!=="group"&&e(f,{children:o&&e(f,{children:Object.entries(se).map(([t,u])=>n("div",{className:"pb-10",children:[n("h2",{children:["  ",e("img",{src:Ee,style:{width:"20px",height:"20px",marginRight:"10px"}}),"  ",t," "]}),n("h2",{className:"break-all",children:["   ",u," "]}),e("hr",{style:{color:"black",width:"100px"}})]},t))})})]}),n("form",{className:"flex fixed right-0 left-0 bottom-0 justify-around flex-col md:justify-end border-t-2 border-black pt-[10px] pb-[10px] lg:fixed lg:bottom-0 lg:w-full bg-slate-800",onSubmit:t=>t.preventDefault(),children:[n("div",{className:"flex flex-row items-center justify-around mb-10 lg:w-[300px] lg:pb-[20px] lg:m-auto",children:[e("textarea",{onChange:t=>b(t.target.value),value:r,className:"textarea",placeholder:`Send message to ${q} ${B===!0&&q==="Group"?" [Priority] ":""}`}),e("img",{src:U,onClick:()=>{ce(B===!1)},className:"img-imp",style:{width:"2rem"}})]}),l==="designer"?e(_,{allUid:G,user:s,sendTo:l,text:r,uuid:i,imp:B}):null,l==="group"?e(_,{allUid:G,setText:b,user:s,sendTo:l,text:r,uuid:i,imp:B}):null,l!=="designer"&&l!=="group"?e(De,{user:s,setText:b,sendTo:l,text:r,trueChat:le}):null]})]})}),T==="Docs"&&e(f,{children:e(Me,{})})]}),"  "]}):null]}),re===!1&&e(f,{children:e(be,{})})]})}export{$e as default};
