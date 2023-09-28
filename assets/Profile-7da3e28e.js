import{r as t,a,j as e,F as d,u as Z,L as U,q,m as G}from"./index-ed5fa20c.js";import{U as B,N as X,f as O,a as Y}from"./Nav-be383499.js";import{u as K}from"./useLogo-9216b0a5.js";import{T as V}from"./Title-7b62baa3.js";import{R as J,L as $}from"./quill.snow-6770517c.js";import{h as _,c as ee,u as te,I as ae}from"./client-cfc2cd7d.js";import"./App-33874d91.js";import{V as ne}from"./Version-a62c8fed.js";import"./Logo-4b9c1084.js";import"./PartnerLogic-73c7eb42.js";import"./TransitionGroupContext-13c493ed.js";function se(){const[r,g]=t.useState(""),[w,c]=t.useState("");return a("div",{className:"emptyhomepage",children:[e(B,{setUser:g,setLevel:c}),e("div",{style:{backgroundColor:"ghostwhite"},children:e(X,{})}),a("div",{className:"profiletextwait mt-10",children:[a("h2",{className:"text-center mb-10 text-2xl",children:[" Hello ",r,", Currently you are waiting approval from an admin "]}),e("img",{src:K,alt:"logo",style:{margin:"0 auto"},className:"sql-logo"})]})]})}function le({user:r}){const[g,w]=t.useState([]);t.useState([]);const[c,x]=t.useState(""),u=async()=>{try{return O.collection("partner").onSnapshot(s=>{const l=s.docs.map(i=>({id:i.id,...i.data()}));w(l)})}catch(n){console.error("Error fetching data: ",n)}};t.useEffect(()=>{u()},[r]);const[o,p]=t.useState([]);t.useEffect(()=>{const n=localStorage.getItem("cachedData");n?p(JSON.parse(n)):b()},[]);const b=async()=>{const n=[];if(localStorage.getItem("cachedData"))p(JSON.parse(localStorage.getItem("cachedData"))),console.log("Data fetched from local storage");else{for(const s of g){const l=s.name;try{const S=(await O.collection(l).get()).docs.map(v=>({id:v.id,status:v.data().status,...v.data()})).filter(v=>v.status!=="Approved"&&v.name!=="Test");n.push(...S)}catch(i){console.error(`Error fetching data from collection ${l}:`,i)}}p(n),localStorage.setItem("cachedData",JSON.stringify(n)),console.log("Data fetched from Firebase")}},[m,N]=t.useState(!1),A=()=>{localStorage.removeItem("cachedData"),b(),alert("Data refreshed successfully  "),N(!0),setTimeout(()=>{N(!1)},3e3)},[y,k]=t.useState(!1);return a(d,{children:[a("section",{className:"flex justify-center ",children:[e("button",{disabled:m,onMouseLeave:()=>k(!1),onMouseEnter:()=>k(!0),onClick:A,className:"bg-slate-600  outline hover:outline-2 outline-slate-400 text-white px-4 py-2 rounded-md mt-5 mb-10",children:"Refresh Data"}),y&&e("p",{className:"text-white absolute mt-16 ",children:"Updates to current workflow"})]}),e("div",{className:"overflow-hidden flex flex-wrap sm:w-[60vw]",children:g.map((n,s)=>a("section",{className:"mb-8 bg-slate-600 p-2 text-white max-h-[50vh] overflow-y-auto",children:[n.name!=="Test"?e("img",{className:"bg-slate-200 ml-3 mb-3 w-[80px] h-[80px] rounded-md cursor-pointer hover:scale-110 transition duration-300 ease-in-out",src:n.imageUrl,onClick:()=>x(c===n.name?"":n.name)}):null,e("ul",{className:"px-6 space-y-2 ",children:o.filter(l=>l.client===n.name&&c===n.name).map((l,i)=>l.status==="Approved"?null:a("li",{className:"break-words bg-slate-700 p-2",children:[l.status," ",e("br",{})," ",l.month,"-",l.date]},i))}),e("ul",{className:"px-6 space-y-2 ",children:n.name!=="Test"?a("p",{children:[" Pending : ",o.filter(l=>l.client===n.name&&l.status!=="Approved"&&n.name!=="Test").length," "]}):null})]},s))})]})}const oe=()=>e("iframe",{src:"https://calendar.google.com/calendar/embed?src=5d1252e5a5dcf866e4c382b1905392535fbe277c313d19a7e522971ac12a589e%40group.calendar.google.com&ctz=America%2FParamaribo",className:"w-[95vw] md:w-[50vw]  h-[400px] h-min-[400px] cal:w-[40vw] cal:h-[65vh]  m-auto",title:"Google Calendar"}),re=()=>e("div",{className:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700",children:e("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200",children:"loading..."})}),ie=({user:r,level:g})=>{t.useState(null),t.useState({}),t.useState(""),t.useState(0);const[w,c]=t.useState("");t.useState("");const[x,u]=t.useState(""),[o,p]=t.useState(""),[b,m]=t.useState("Submit");t.useState([]);const N=async s=>{const l="https://hooks.zapier.com/hooks/catch/15784808/39o6i61/";try{const h=await(await fetch(l,{method:"POST",mode:"cors",body:JSON.stringify(s)})).json();console.log(h)}catch(i){console.log(i)}};async function A(s){s.preventDefault();const l={from:w,user:r,description:o,title:x};try{await N(l)}catch(i){console.log(i)}setTimeout(()=>{c(""),p(""),u("")},1500),m("Submitted.. Page after you refresh"),setTimeout(()=>{m("Submit")},3e3)}const y=s=>{p(s)},[k,n]=t.useState(!0);return t.useEffect(()=>{setTimeout(()=>{n(!1)},900)},[]),a(d,{children:[a("section",{className:"cal:flex md:ml-[20%] gap-5 mt-10",children:[a("form",{onSubmit:A,className:"mt-10 mr-2 gap-5 flex flex-col items-center mb-2 ",children:[e("input",{type:"datetime-local",onChange:s=>c(s.target.value),value:w}),e("input",{type:"text",placeholder:"Title",onChange:s=>u(s.target.value),value:x}),e(J,{value:o,onChange:y,style:{color:"black",backgroundColor:"white"},placeholder:"Detailed Text here...",className:"max-w-[90vw] lg:max-w-[500px]  "}),a("button",{className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer relative",children:["  ",b,"   "]})]}),k!==!1?e(re,{}):null,e(oe,{})]}),e("div",{className:" px-4 py-8 md:m-auto  md:w-[40vw] ",children:e("div",{className:"mt-5",children:g>8?e(le,{user:r}):null})}),e("div",{className:"flex flex-col md:flex-row md:justify-center md:items-center md:space-x-8"})]})},ce=ie,de="/assets/admin-fefab388.png",me="/assets/wfh-163826c8.png",he="/assets/schedule-b8a7255f.png",ge="/assets/Designer-c6e75348.jpg";function I({level:r,showWfh:g,setShowWfh:w,user:c,hideList:x,setHideList:u,sum:o,work:p,setSendTo:b,setDisplayTo:m,setPrivateChat:N,setTrueChat:A,setPan:y,pan:k}){const[n,s]=t.useState(!1),l=Z(),i=()=>{Y.signOut().then(()=>{l("/"),window.location.reload()})};return e("aside",{id:"cta-button-sidebar",className:n?"  w-full sm:w-1/5 fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0":"fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0","aria-label":"Sidebar",children:e("div",{className:"h-full px-3 py-4 overflow-y-auto bg-slate-800 dark:bg-slate-800 fixed ",children:a("ul",{className:"space-y-2 font-medium",children:[e("li",{children:a(U,{to:"/",className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:_}),e("span",{className:"ml-3",children:"Home"})]})}),e("li",{children:a("a",{onClick:()=>{w("start"),y(k===!1)},className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:he}),e("span",{className:"ml-3",children:"CALENDAR"})]})}),e("li",{children:r>9?a(U,{to:"/admindashboard",className:"  transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:de}),e("span",{className:"flex-1 ml-3 whitespace-nowrap  rounded-lg  dark:text-white",children:"ADMIN"})]}):null}),e("li",{children:a("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:ee}),a("span",{className:"flex-1 ml-3 whitespace-nowrap   dark:text-white ",children:["  ",e($,{})," "]})]})}),e("li",{children:a(U,{to:"/designer",className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px] rounded-xl",src:ge}),e("span",{className:"flex-1 ml-3 whitespace-nowrap   dark:text-white ",children:"  Designer "})]})}),e("li",{children:a("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{w("Docs"),s(!0)},children:[e("img",{className:"w-[40px]",src:me}),e("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Docs"})]})}),e("li",{children:a("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:te}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:c})]})}),e("li",{children:a("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:i,children:[e("img",{className:"w-[40px]",src:ae}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:"Sign Out"})]})}),e("li",{children:r>7&&g==="chat"&&e(d,{children:a("div",{className:"pt-200px",children:[r>8?a("h2",{onClick:()=>{b("group"),m("Group"),N("group"),s(!0),u(x!==!0)},style:{cursor:"pointer"},className:"bg-slate-400 mt-2 p-2 mr-2 rounded-sm xl lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer ",children:["Group  ",a("p",{style:{fontSize:"14px",color:"red"},children:[" ",o>0?o:""," "]})]}):null,e("h2",{onClick:()=>{b("designer"),m("designer"),N("designer"),s(!0),u(x!==!0)},style:{cursor:"pointer"},className:"bg-slate-400 p-2 mt-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer",children:" Designer  "}),p.map((h,S)=>e("div",{className:"pt-2",children:a("p",{className:"bg-slate-400 p-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer ",style:{cursor:"pointer"},onClick:()=>{b("chat"+c+h.Name),N("chat"+c+h.Name),s(!0),A("chat"+h.Name+c),m(h.Name),u(x!==!0)},children:[" ",h.Name," "]},S)},S))]})})})]})})})}const ue="/assets/doc-6-133b4fd9.png",pe="/assets/doc-7-ae900980.png",fe="data:image/png;base64,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";function we(){return e(d,{children:a("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"8. Adding Content Details"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:" The Content Planner is responsible for adding essential content information for each client. "}),a("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:[" On the client's page, you will find fields to fill in:",e("p",{children:"0. Post Unique ID : Each post will have an unique ID. KEEP IN MIND THIS IS NOT THE POST COUNT AS THE POST COUNT HAS TO BE ADDED AFTER ID"}),e("p",{children:"1. Post Count: Specify the number of posts required for the client's content. "}),e("p",{children:"2. Social Media Channel: Indicate the platform(s) where the content will be published."}),e("p",{children:"3. Date of Delivery: Set the deadline for when the content should be completed."}),e("p",{children:"4. Post Subject: Provide a brief description of the content subject.."}),e("p",{children:"5. Boosting : Add the amount of boosting for the post"}),e("p",{children:'6. AI Feature : You can now prompt the ai to already make to the post content. Once the Ai button is pressed wait for the "post content button" to finish loading to post the content '}),e("img",{src:ue,className:"mt-5"})]}),e("h1",{className:"text-3xl mt-5",children:" 9. Tracking Content Progress "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:' To identify pending content creation, the Content Editor can look for posts marked in orange with a "Pending" status. '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:' Click on the "Open" button next to a pending post to access its content creation workspace. '}),e("img",{src:pe,className:"mt-5 m-auto mb-10"}),e("h1",{className:"text-3xl mt-5",children:"10. Content Creation Workspace "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Inside the content creation workspace, the Content Editor can:"}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:"1. Write the text for the post."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 2. Add emojis to enhance the content."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 3.Delete the entire post if necessary.. "}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 4. Add designs or media to complement the content."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:' 5. You also have the option to prompt the ai to make content. Once the AI response simply press the " add text content" button '}),e("h1",{className:"text-3xl mt-5",children:" 11. Designer Content Upload "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:" The designer has the option to upload the final design for each post on the client's page "}),e("img",{src:fe,className:"m-auto mb-10 mt-5"}),e("h1",{className:"text-3xl mt-5",children:" 12. Example Tab for Sending Instructions "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:'Below the Designer Content Upload section, you will find the "Example Tab".'}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Example Tab allows the Content Planner to provide instructions to the designer. It includes fields to add images and text as references."}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Content Planner can open up to a maximum of three Example Tabs for different instructions."}),e("h1",{className:"text-3xl mt-5",children:' 13. Changing Post Status to "Waiting" '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'After the Content writers have written the content for a post, they can change the post status to "Waiting" by clicking on the "Waiting" button. '}),e("h1",{className:"text-3xl mt-5",children:" 14. Approving the Post "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  Once the Content Planner has reviewed and approved the content, they can click on the "Approved" tab. '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'The "Approved" tab will change the status of the post to "Green," signifying its approval.'}),e("h1",{className:"text-3xl mt-5",children:" 15. Downloading content PDF "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"  The person in charge of content can download a single text file for a specific post. "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'By checking the box next to "Waiting for checkmark," they can download the text content in a convenient PDF format.'}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"The Pdf will be saved in a service please contact Gilmon for further assistance."}),e("h1",{className:"text-3xl mt-5",children:" 16. Closing the Post "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  To close a post, the user can click on the button with an "X" '}),e("h1",{className:"text-3xl mt-5",children:" 17. Memo Functionalities  "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"The Memo button allows users, typically Content Planners, to create or delete memos as reminders or notes related to content management tasks."})]})})}const xe="/assets/doc-4-0d1fe929.png";function be(){return e(d,{children:e("div",{className:"text-center text-black md:w-full md:absolute md:right-0 font-extrabold bg-slate-400 p-2 lg:w-4/5 lg:m-auto ",children:a("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"1. Introduction"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:"Welcome to the User Profile Guide for SQL Client Planning Tool. In this guide, we will walk you through the functionalities of the tool on your user profile page"}),e("h1",{className:"text-3xl mt-5",children:" 2. Accessing the Calendar "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Upon loading your user profile page, you will be presented with a calendar view that displays all your tasks and notes. The calendar will be the central hub for organizing your to-do list."}),e("h1",{className:"text-3xl mt-5",children:" 3. Adding a New Note "}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:"1. To add a new note, simply fill in the time and date , the title for the note and the description "}),e("img",{src:xe,className:"mt-10 pb-5"}),e("h1",{className:"text-3xl mt-5",children:" 7. Accessing the Clients Tab "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  To access the Clients Tab, look for the "Clients" option on the side panel of your user profile page. Click on it to open a small window that displays all your SQL clients. '}),e(we,{})]})})})}function Oe(){q();const[r,g]=t.useState(""),[w,c]=t.useState(""),[x,u]=t.useState(""),[o,p]=t.useState("waiting"),[b,m]=t.useState("");t.useState("");const[N,A]=t.useState("waiting"),[y,k]=t.useState([]),n=async()=>{try{return O.collection("admin").onSnapshot(P=>{const W=P.docs.map(T=>({id:T.id,...T.data()}));W.sort((T,R)=>T.id-R.id),k(W)})}catch(f){console.error("Error fetching work data:",f)}};t.useEffect(()=>{n()},[]);const[s,l]=t.useState([]),[i,h]=t.useState(),[S,v]=t.useState(!1),[Ne,L]=t.useState(""),[C,E]=t.useState(!1),[Q,M]=t.useState(!1);t.useEffect(()=>{setTimeout(()=>{M(!0)},1e3)},[]);const H=s.map(f=>f[r]).reduce((f,P)=>f+P,null),[D,z]=t.useState("start"),[j,F]=t.useState(!1);return t.useEffect(()=>{const f=()=>{F(window.innerWidth<767)};return f(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}},[]),a(d,{children:[e(V,{}),e(ne,{}),e(B,{setUser:g,user:r,setUuid:c,setIsAccepted:u,level:o,setLevel:p}),o===0&&e(d,{children:e("div",{className:"min-h-[100vh] bg-slate-600",children:e(se,{})})}),e("button",{onClick:()=>E(C!==!0),"data-drawer-target":"default-sidebar","data-drawer-toggle":"default-sidebar","aria-controls":"default-sidebar",type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:e("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),a("div",{className:"flex flex-col sm:flex-row   bg-slate-500",children:[C===!0&&j===!0&&o>7&&a(d,{children:[e(I,{level:o,showWfh:D,setShowWfh:z,user:r,hideList:S,setHideList:v,sum:H,work:y,setSendTo:m,setDisplayTo:L,setPrivateChat:A,setTrueChat:h,pan:C,setPan:E})," "]}),j===!1&&o>7&&a(d,{children:[e(I,{level:o,showWfh:D,setShowWfh:z,user:r,hideList:S,setHideList:v,sum:H,work:y,setSendTo:m,setDisplayTo:L,setPrivateChat:A,setTrueChat:h,pan:C,setPan:E})," "]}),o>7?a(d,{children:["  ",a("div",{className:"w-full sm:w-4/5 lg:w-full md:absolute right-0 bg-slate-500   ",children:[D==="start"&&e("div",{className:"laptopL:!w-5/5 xl:w-[1100px] lg:min-h-[100vh] xl:m-auto flex flex-col items-center bg-slate-500  ",children:e(ce,{user:r,level:o})}),D==="Docs"&&e(d,{children:e(be,{})})]}),"  "]}):null]}),Q===!1&&e(d,{children:e(G,{})})]})}export{Oe as default};
