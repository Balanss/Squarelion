import{r as a,j as e,a as n,u as ue,L as Y,F as w,n as pe,m as fe}from"./index-4f6b9d2f.js";import{G as ae,f as k,_ as H,d as B,b as P,c as K,U as ne,a as we,y as be}from"./index.esm2017-7d8bf77e.js";import{N as xe}from"./Nav-c60ca315.js";import{F as Ae}from"./Footer-9f9662d8.js";import{u as Ne}from"./useLogo-28cee2dd.js";import{T as ve}from"./Title-57d438e4.js";/* empty css               */import{R as ye,L as Ce}from"./quill.snow-6f556514.js";import{h as Se,c as ke,u as Ee,I as De}from"./client-98ca49dd.js";import"./Logo-4b9c1084.js";import"./PartnerLogic-e2b011e5.js";function $({text:l,sendTo:h,user:r,imp:m,allUid:b,setText:f}){const c=new Date().toLocaleTimeString(),d=new Date().toLocaleString().slice(0,25),[o,g]=a.useState(c),i=ae(),y=new Date().toString().slice(0,30);a.useState(0);function N(){g(c),k.collection(h).doc(y).set({text:l,sendBy:r+" /"+d,timestamp:i,imp:m,mail:"https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fmail.png?alt=media&token=bdfde3a5-5c9b-4e2c-aa52-4ee31b2defe0"},{merge:!0}),b.map(E=>{if(r!==E){const C=H(B,h),x=P(C,y);K(x,{[E]:1},{merge:!0}),K(x,{[r]:0},{merge:!0})}}),f("")}return e("button",{onClick:N,type:"button",className:"text-white bg-gradient-to-r  md:w-[500px] !m-auto from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:"Chat"})}function Qe({sendTo:l,text:h,user:r,trueChat:m,setText:b}){const p=new Date().toLocaleTimeString();new Date().toLocaleString().slice(0,25),a.useState(p),ae();const d=new Date().toString().slice(0,25);a.useState(0);function o(){k.collection("chat").doc(l).set({[d]:h+"  - send by  "+r},{merge:!0}),k.collection("chat").doc(m).set({[d]:h+"  - send by  "+r},{merge:!0}),b("")}return e("button",{onClick:o,type:"button",className:"text-white bg-gradient-to-r   md:w-[500px] !m-auto from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:"Chat"})}const _="https://Balanss.github.io/Squarelion/assets/bin-a8ff8aa0.png",Ue="https://Balanss.github.io/Squarelion/assets/meeting-4135f19a.png",Ie="https://Balanss.github.io/Squarelion/assets/time-7815fb36.png",T="https://Balanss.github.io/Squarelion/assets/important-5d688978.png";function Te(){const[l,h]=a.useState(""),[r,m]=a.useState("");return n("div",{className:"emptyhomepage",children:[e(ne,{setUser:h,setLevel:m}),e("div",{style:{backgroundColor:"ghostwhite"},children:e(xe,{})}),n("div",{className:"profiletextwait",children:[n("h2",{children:[" Hello ",l,", Currently you are waiting approval from an admin "]}),e("img",{src:Ne,alt:"logo",style:{margin:"0 auto"},className:"sql-logo"}),e("h3",{children:" Sed dapibus tellus at tempor feugiat. Nullam id vehicula lacus. Aliquam erat volutpat. Vestibulum fermentum hendrerit odio, non blandit metus ullamcorper vel. Nulla sed magna diam. Vestibulum semper arcu augue, et facilisis leo ornare nec. Maecenas dictum metus vel enim ultrices efficitur. "})]}),e(Ae,{})]})}function Be({privateChat:l,setChat:h,setDesignerChat:r,setMessage:m}){const b=async()=>{try{k.collection("chat").doc(l).onSnapshot(s=>{if(s.exists){const d=s.data(),o=Object.entries(d).filter(([g])=>g!=="timestamp").sort((g,i)=>new Date(i[0])-new Date(g[0])).reduce((g,[i,A])=>({...g,[i]:A}),{});h(o)}else console.log("privateChat document does not exist"),h("")})}catch(c){console.error("Error fetching chat data:",c)}};a.useEffect(()=>{b()},[l]);const f=async()=>{try{return k.collection("designer").orderBy("timestamp","desc").onSnapshot(s=>{const d=s.docs.map(o=>({id:o.id,...o.data()}));r(d)})}catch(c){console.error("Error fetching designer chat data:",c)}};a.useEffect(()=>{f()},[]);const p=async()=>{try{return k.collection("group").orderBy("timestamp","desc").onSnapshot(s=>{const d=s.docs.map(o=>({id:o.id,...o.data()}));m(d)})}catch(c){console.error("Error fetching message data:",c)}};a.useEffect(()=>{p()},[])}const Pe=()=>e("iframe",{src:"https://calendar.google.com/calendar/embed?src=5d1252e5a5dcf866e4c382b1905392535fbe277c313d19a7e522971ac12a589e%40group.calendar.google.com&ctz=America%2FParamaribo",className:"w-[95vw] md:w-[57vw]  h-[400px] h-min-[400px] cal:w-[65vw] cal:h-[65vh] ",frameBorder:"0",scrolling:"no",title:"Google Calendar"}),Ke=({user:l})=>{a.useState(null),a.useState({}),a.useState(""),a.useState(0);const[h,r]=a.useState("");a.useState("");const[m,b]=a.useState(""),[f,p]=a.useState("");a.useState([]);const c=async o=>{const g="https://hooks.zapier.com/hooks/catch/15784808/39o6i61/";try{const A=await(await fetch(g,{method:"POST",mode:"cors",body:JSON.stringify(o)})).json();console.log(A)}catch(i){console.log(i)}};async function s(o){o.preventDefault();const g={from:h,user:l,description:f,title:m};try{await c(g)}catch(i){console.log(i)}setTimeout(()=>{r(""),p(""),b("")},1500)}return n("div",{className:" px-4 py-8 md:m-auto  md:w-[40vw] ",children:[e(Pe,{}),e("div",{className:"",children:n("form",{onSubmit:s,className:"mt-20 gap-5 flex flex-col items-center ",children:[e("input",{type:"datetime-local",onChange:o=>r(o.target.value),value:h}),e("input",{type:"text",placeholder:"Title",onChange:o=>b(o.target.value),value:m}),e(ye,{value:f,onChange:o=>{p(o)},style:{color:"black",backgroundColor:"white"},placeholder:"Detailed Text here...",className:"max-w-[90vw] lg:max-w-[500px]  "}),e("button",{className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer",children:"Submit"})]})})]})},We=Ke,Re="https://Balanss.github.io/Squarelion/assets/admin-fefab388.png",Fe="https://Balanss.github.io/Squarelion/assets/wfh-163826c8.png",He="https://Balanss.github.io/Squarelion/assets/schedule-b8a7255f.png";function ee({level:l,showWfh:h,setShowWfh:r,user:m,hideList:b,setHideList:f,sum:p,work:c,setSendTo:s,setDisplayTo:d,setPrivateChat:o,setTrueChat:g,setPan:i,pan:A}){const[y,N]=a.useState(!1),E=ue(),C=()=>{we.signOut().then(()=>{E("/"),window.location.reload()})};return e("aside",{id:"cta-button-sidebar",className:y?"  w-full sm:w-1/5 fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0":"fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0","aria-label":"Sidebar",children:e("div",{className:"h-full px-3 py-4 overflow-y-auto bg-slate-800 dark:bg-slate-800",children:n("ul",{className:"space-y-2 font-medium",children:[e("li",{children:n(Y,{to:"/",className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Se}),e("span",{className:"ml-3",children:"Home"})]})}),e("li",{children:n("a",{onClick:()=>{r("start"),i(A===!1)},className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:He}),e("span",{className:"ml-3",children:"CALENDAR"})]})}),e("li",{children:l>8?n(Y,{to:"/admindashboard",className:"  transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Re}),e("span",{className:"flex-1 ml-3 whitespace-nowrap  rounded-lg  dark:text-white",children:"ADMIN"})]}):null}),e("li",{children:n("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:ke}),n("span",{className:"flex-1 ml-3 whitespace-nowrap   dark:text-white ",children:["  ",e(Ce,{})," "]})]})}),e("li",{children:n("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{f(b!==!0),r("chat"),N("false")},children:[e("img",{className:"style-meeting",src:Ue,style:{cursor:"pointer",width:"40px"}}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:"Chat"})]})}),e("li",{children:n("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{r("Docs"),N(!0)},children:[e("img",{className:"w-[40px]",src:Fe}),e("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Docs"})]})}),e("li",{children:n("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Ee}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:m})]})}),e("li",{children:n("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:C,children:[e("img",{className:"w-[40px]",src:De}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:"Sign Out"})]})}),e("l1",{children:l>7&&h==="chat"&&e(w,{children:n("div",{className:"pt-200px",children:[l>8?n("h2",{onClick:()=>{s("group"),d("Group"),o("group"),N(!0),f(b!==!0)},style:{cursor:"pointer"},className:"bg-slate-400 mt-2 p-2 mr-2 rounded-sm xl lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer ",children:["Group  ",n("p",{style:{fontSize:"14px",color:"red"},children:[" ",p>0?p:""," "]})]}):null,e("h2",{onClick:()=>{s("designer"),d("designer"),o("designer"),N(!0),f(b!==!0)},style:{cursor:"pointer"},className:"bg-slate-400 p-2 mt-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer",children:" Designer  "}),c.map((x,Q)=>e("div",{className:"pt-2",children:n("p",{className:"bg-slate-400 p-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer ",style:{cursor:"pointer"},onClick:()=>{s("chat"+m+x.Name),o("chat"+m+x.Name),N(!0),g("chat"+x.Name+m),d(x.Name),f(b!==!0)},children:[" ",x.Name," "]},Q)},Q))]})})})]})})})}const Le="https://Balanss.github.io/Squarelion/assets/doc-6-5b8b28b7.png",ze="https://Balanss.github.io/Squarelion/assets/doc-7-ae900980.png",qe="data:image/png;base64,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",Me="data:image/png;base64,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";function Oe(){return e(w,{children:n("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"8. Adding Content Details"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:" The Content Planner is responsible for adding essential content information for each client. "}),n("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:[" On the client's page, you will find fields to fill in:",e("p",{children:"1. Post Count: Specify the number of posts required for the client's content. "}),e("p",{children:"2. Social Media Channel: Indicate the platform(s) where the content will be published."}),e("p",{children:"3. Date of Delivery: Set the deadline for when the content should be completed."}),e("p",{children:"4. Post Subject: Provide a brief description of the content subject.."}),e("img",{src:Le,className:"mt-5"})]}),e("h1",{className:"text-3xl mt-5",children:" 9. Tracking Content Progress "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:' To identify pending content creation, the Content Editor can look for posts marked in orange with a "Pending" status. '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:' Click on the "Open" button next to a pending post to access its content creation workspace. '}),e("img",{src:ze,className:"mt-5 m-auto mb-10"}),e("h1",{className:"text-3xl mt-5",children:"10. Content Creation Workspace "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Inside the content creation workspace, the Content Editor can:"}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:"1. Write the text for the post."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 2. Add emojis to enhance the content."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 3.Delete the entire post if necessary.. "}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 4. Add designs or media to complement the content."}),e("h1",{className:"text-3xl mt-5",children:" 11. Designer Content Upload "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:" The designer has the option to upload the final design for each post on the client's page "}),e("img",{src:qe,className:"m-auto mb-10 mt-5"}),e("h1",{className:"text-3xl mt-5",children:" 12. Example Tab for Sending Instructions "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:'Below the Designer Content Upload section, you will find the "Example Tab".'}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Example Tab allows the Content Planner to provide instructions to the designer. It includes fields to add images and text as references."}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Content Planner can open up to a maximum of three Example Tabs for different instructions."}),e("h1",{className:"text-3xl mt-5",children:' 13. Changing Post Status to "Waiting"s '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'After the Content writers have written the content for a post, they can change the post status to "Waiting" by clicking on the "Waiting" button. '}),e("h1",{className:"text-3xl mt-5",children:" 14. Approving the Post "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  Once the Content Planner has reviewed and approved the content, they can click on the "Approved" tab. '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'The "Approved" tab will change the status of the post to "Green," signifying its approval.'}),e("h1",{className:"text-3xl mt-5",children:" 15. Downloading Text File or Entire Page "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"  The person in charge of content can download a single text file for a specific post. "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'By checking the box next to "Download Text File," they can download the text content in a convenient file format.'}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"Alternatively, they can choose to download the entire page, which includes all content and designs related to the client if they are approved."}),e("img",{src:Me,className:"mt-5 m-auto mb-10"}),e("h1",{className:"text-3xl mt-5",children:" 16. Closing the Post "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  To close a post, the user can click on the button with an "X" next to "Open." '}),e("h1",{className:"text-3xl mt-5",children:" 17. Chat and Memo Functionalities  "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"  The Chat functionality on the client's page works similarly to the one on the user profile page, enabling smooth communication between team members. "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"The Memo button allows users, typically Content Planners, to create or delete memos as reminders or notes related to content management tasks."})]})})}const Ge="https://Balanss.github.io/Squarelion/assets/doc-3-e54fd314.png",je="https://Balanss.github.io/Squarelion/assets/doc-4-b7ba4b65.png",te="https://Balanss.github.io/Squarelion/assets/doc-5-1791e995.png";function Ze(){return e(w,{children:e("div",{className:"text-center text-black md:w-full md:absolute md:right-0 font-extrabold bg-slate-400 p-2 lg:w-4/5 lg:m-auto ",children:n("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"1. Introduction"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:"Welcome to the User Profile Guide for SQL Client Planning Tool. In this guide, we will walk you through the functionalities of the tool on your user profile page"}),e("h1",{className:"text-3xl mt-5",children:" 2. Accessing the Calendar "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Upon loading your user profile page, you will be presented with a calendar view that displays all your tasks and notes. The calendar will be the central hub for organizing your to-do list."}),e("h1",{className:"text-3xl mt-5",children:" 3. Adding a New Note "}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:"1. To add a new note, simply click on the desired date on the calendar. A note editor will appear, allowing you to input your task details and notes."}),e("img",{src:Ge,className:"mt-10 pb-5"}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 2. Type your task or note into the input field provided. You can include any relevant information, such as priority, or additional details."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:' 3. After completing the note, click on the "+" icon to save it. The new note will be added to the calendar, appearing alongside any existing notes for that date. '}),e("img",{src:je,className:"mt-10 pb-5"}),e("h1",{className:"text-3xl mt-5",children:" 4. Marking Tasks as Completed "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"When you have finished a task, click on the small circle associated with the note on the calendar. The card will turn green, indicating that the task has been completed."}),e("img",{src:te,alt:te,className:"mt-10   md:mt-10 "}),e("h1",{className:"text-3xl mt-5",children:" 5. Deleting Notes "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:'To remove a note entirely, click on the "Delete" option associated with the note on the calendar.'}),e("h1",{className:"text-3xl mt-5",children:" 6. Automatic Removal of Expired Notes "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"When the due date of a note has passed, the system will automatically remove the note from inside the card."}),e("h1",{className:"text-3xl mt-5",children:" 7. Accessing the Clients Tab "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  To access the Clients Tab, look for the "Clients" option on the side panel of your user profile page. Click on it to open a small window that displays all your SQL clients. '}),e(Oe,{})]})})})}function lt(){pe();const[l,h]=a.useState(""),[r,m]=a.useState(""),[b,f]=a.useState(""),[p,c]=a.useState("waiting"),[s,d]=a.useState(""),[o,g]=a.useState(""),[i,A]=a.useState("waiting"),[y,N]=a.useState([]),E=async()=>{try{return k.collection("admin").onSnapshot(u=>{const v=u.docs.map(S=>({id:S.id,...S.data()}));v.sort((S,ge)=>S.id-ge.id),N(v)})}catch(t){console.error("Error fetching work data:",t)}};a.useEffect(()=>{E()},[]);const[C,x]=a.useState([]),[Q,oe]=a.useState([]),[le,se]=a.useState(""),[re,L]=a.useState(),[z,q]=a.useState(!1),[M,O]=a.useState(""),[U,W]=a.useState(!1),G=y.map(t=>t.Name),j=t=>{const u=H(B,i),v=P(u,t);be(v).then(()=>{console.log("Document successfully deleted!")}).catch(S=>{console.error("Error removing document:",S)})};function Z(t){const u=H(B,"group"),v=P(u,t);K(v,{[l]:0},{merge:!0})}const R=t=>{const u=P(B,"group",t);K(u,{new:"Read"}).then(()=>{console.log("Field successfully updated")}).catch(S=>{})},[ie,ce]=a.useState(!1),[I,de]=a.useState(!1),[F,he]=a.useState(!1);a.useEffect(()=>{setTimeout(()=>{ce(!0)},1e3)},[]);const X=C.map(t=>t[l]).reduce((t,u)=>t+u,null),[D,V]=a.useState("start"),[J,me]=a.useState(!1);return a.useEffect(()=>{const t=()=>{me(window.innerWidth<767)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),n(w,{children:[e(Be,{privateChat:i,setChat:se,setDesignerChat:oe,setMessage:x}),e(ve,{}),e(ne,{setUser:h,user:l,setUuid:m,setIsAccepted:f,level:p,setLevel:c}),p===0&&e(w,{children:e("div",{className:"min-h-[100vh] bg-slate-600",children:e(Te,{})})}),e("button",{onClick:()=>W(U!==!0),"data-drawer-target":"default-sidebar","data-drawer-toggle":"default-sidebar","aria-controls":"default-sidebar",type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:e("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),n("div",{className:"flex flex-col sm:flex-row   bg-slate-500",children:[U===!0&&J===!0&&n(w,{children:[e(ee,{level:p,showWfh:D,setShowWfh:V,user:l,hideList:z,setHideList:q,sum:X,work:y,setSendTo:d,setDisplayTo:O,setPrivateChat:A,setTrueChat:L,pan:U,setPan:W})," "]}),J===!1&&n(w,{children:[e(ee,{level:p,showWfh:D,setShowWfh:V,user:l,hideList:z,setHideList:q,sum:X,work:y,setSendTo:d,setDisplayTo:O,setPrivateChat:A,setTrueChat:L,pan:U,setPan:W})," "]}),p>7?n(w,{children:["  ",n("div",{className:"w-full sm:w-4/5 lg:w-full md:absolute right-0 bg-slate-500   ",children:[D==="start"&&e("div",{className:"lg:w-5/5 xl:w-[1100px] lg:min-h-[100vh] xl:m-auto flex flex-col items-center bg-slate-500  ",children:e(We,{user:l})}),D==="chat"&&e(w,{children:n("div",{className:"bg-slate-100   min-h-[500px]   md:flex md:justify-center ",children:[n("h2",{onClick:()=>he(F!==!0),children:[" ",F===!1?"Show Priority":"Show All","  "]}),n("div",{className:"min-h-[90vh] max-h-[90vh] overflow-y-auto overflow-x-hidden p-10 ",children:[i==="group"&&e(w,{children:F===!0?C.map((t,u)=>n("div",{className:"flex flex-col items-center",onClick:()=>R(t.id),children:[" ",t.imp>""?n("h2",{className:"",children:["  ",e("img",{src:T,style:{width:"40px",height:"40px"}})," ",t.text," - ",t.sendBy," "]}):null,t.imp>""?e("img",{style:{width:"50px",height:"50px",cursor:"pointer"},src:_,onClick:v=>j(t.id)}):null," ",e("hr",{})," "]},u)):C.map((t,u)=>n("div",{className:"",onClick:()=>R(t.id),children:[n("h2",{className:"md:max-w-[1000px] break-all",onClick:()=>Z(t.id),children:["  ",t.imp>""?e("img",{src:T,style:{width:"40px",height:"40px"}}):null," ",t.text," - ",t.sendBy," "]}),e("img",{style:{width:"50px",height:"50px",cursor:"pointer"},src:_,onClick:v=>j(t.id)})," ",e("hr",{})," "]},u))}),i==="designer"&&e(w,{children:Q.map((t,u)=>e("div",{className:"flex flex-col items-center",onClick:()=>R(t.id),children:n("h2",{className:"break-all",onClick:()=>Z(t.id),children:["  ",t.imp>""?e("img",{src:T,style:{width:"40px",height:"40px"}}):null," ",t.text," - ",t.sendBy," "]})},u))}),i!=="group"&&e(w,{children:i&&e(w,{children:Object.entries(le).map(([t,u])=>n("div",{className:"pb-10",children:[n("h2",{children:["  ",e("img",{src:Ie,style:{width:"20px",height:"20px",marginRight:"10px"}}),"  ",t," "]}),n("h2",{className:"break-all",children:["   ",u," "]}),e("hr",{style:{color:"black",width:"100px"}})]},t))})})]}),n("form",{className:"flex fixed right-0 left-0 bottom-0 justify-around flex-col md:justify-end border-t-2 border-black pt-[10px] pb-[10px] lg:fixed lg:bottom-0 lg:w-full bg-slate-800",onSubmit:t=>t.preventDefault(),children:[n("div",{className:"flex flex-row items-center justify-around mb-10 lg:w-[300px] lg:pb-[20px] lg:m-auto",children:[e("textarea",{onChange:t=>g(t.target.value),value:o,className:"textarea",placeholder:`Send message to ${M} ${I===!0&&M==="Group"?" [Priority] ":""}`}),e("img",{src:T,onClick:()=>{de(I===!1)},className:"img-imp",style:{width:"2rem"}})]}),s==="designer"?e($,{allUid:G,user:l,sendTo:s,text:o,uuid:r,imp:I}):null,s==="group"?e($,{allUid:G,setText:g,user:l,sendTo:s,text:o,uuid:r,imp:I}):null,s!=="designer"&&s!=="group"?e(Qe,{user:l,setText:g,sendTo:s,text:o,trueChat:re}):null]})]})}),D==="Docs"&&e(w,{children:e(Ze,{})})]}),"  "]}):null]}),ie===!1&&e(w,{children:e(fe,{})})]})}export{lt as default};
