import{r as n,a,j as e,u as ge,L as V,F as d,n as ue,m as pe}from"./index-df1e5a2d.js";import{U as ae,f as I,a as fe,_ as J,d as W,b as H,y as we,c as Y}from"./index.esm2017-79fbd37d.js";import{R as xe,L as be,a as Ae,m as D,b as $,t as Ne,B as _,P as ve}from"./quill.snow-bb169e7c.js";import{N as ye}from"./Nav-0bf4f87c.js";import{F as Ce}from"./Footer-044ce82e.js";import{u as ke}from"./useLogo-9216b0a5.js";import{T as Se}from"./Title-275c4b09.js";/* empty css               */import{h as Ee,c as Qe,u as Ue,I as De}from"./client-cfc2cd7d.js";import"./Logo-4b9c1084.js";import"./PartnerLogic-7cad3a12.js";function Ie(){const[o,w]=n.useState(""),[p,m]=n.useState("");return a("div",{className:"emptyhomepage",children:[e(ae,{setUser:w,setLevel:m}),e("div",{style:{backgroundColor:"ghostwhite"},children:e(ye,{})}),a("div",{className:"profiletextwait",children:[a("h2",{children:[" Hello ",o,", Currently you are waiting approval from an admin "]}),e("img",{src:ke,alt:"logo",style:{margin:"0 auto"},className:"sql-logo"}),e("h3",{children:" Sed dapibus tellus at tempor feugiat. Nullam id vehicula lacus. Aliquam erat volutpat. Vestibulum fermentum hendrerit odio, non blandit metus ullamcorper vel. Nulla sed magna diam. Vestibulum semper arcu augue, et facilisis leo ornare nec. Maecenas dictum metus vel enim ultrices efficitur. "})]}),e(Ce,{})]})}function Te({privateChat:o,setChat:w,setDesignerChat:p,setMessage:m}){const x=async()=>{try{I.collection("chat").doc(o).onSnapshot(s=>{if(s.exists){const u=s.data(),l=Object.entries(u).filter(([c])=>c!=="timestamp").sort((c,r)=>new Date(r[0])-new Date(c[0])).reduce((c,[r,A])=>({...c,[r]:A}),{});w(l)}else console.log("privateChat document does not exist"),w("")})}catch(h){console.error("Error fetching chat data:",h)}};n.useEffect(()=>{x()},[o]);const f=async()=>{try{return I.collection("designer").orderBy("timestamp","desc").onSnapshot(s=>{const u=s.docs.map(l=>({id:l.id,...l.data()}));p(u)})}catch(h){console.error("Error fetching designer chat data:",h)}};n.useEffect(()=>{f()},[]);const g=async()=>{try{return I.collection("group").orderBy("timestamp","desc").onSnapshot(s=>{const u=s.docs.map(l=>({id:l.id,...l.data()}));m(u)})}catch(h){console.error("Error fetching message data:",h)}};n.useEffect(()=>{g()},[])}const Be=()=>e("iframe",{src:"https://calendar.google.com/calendar/embed?src=5d1252e5a5dcf866e4c382b1905392535fbe277c313d19a7e522971ac12a589e%40group.calendar.google.com&ctz=America%2FParamaribo",className:"w-[95vw] md:w-[57vw]  h-[400px] h-min-[400px] cal:w-[65vw] cal:h-[65vh] ",frameBorder:"0",scrolling:"no",title:"Google Calendar"}),Pe=({user:o})=>{n.useState(null),n.useState({}),n.useState(""),n.useState(0);const[w,p]=n.useState("");n.useState("");const[m,x]=n.useState(""),[f,g]=n.useState("");n.useState([]);const h=async l=>{const c="https://hooks.zapier.com/hooks/catch/15784808/39o6i61/";try{const A=await(await fetch(c,{method:"POST",mode:"cors",body:JSON.stringify(l)})).json();console.log(A)}catch(r){console.log(r)}};async function s(l){l.preventDefault();const c={from:w,user:o,description:f,title:m};try{await h(c)}catch(r){console.log(r)}setTimeout(()=>{p(""),g(""),x("")},1500)}return a("div",{className:" px-4 py-8 md:m-auto  md:w-[40vw] ",children:[e(Be,{}),e("div",{className:"",children:a("form",{onSubmit:s,className:"mt-20 gap-5 flex flex-col items-center ",children:[e("input",{type:"datetime-local",onChange:l=>p(l.target.value),value:w}),e("input",{type:"text",placeholder:"Title",onChange:l=>x(l.target.value),value:m}),e(xe,{value:f,onChange:l=>{g(l)},style:{color:"black",backgroundColor:"white"},placeholder:"Detailed Text here...",className:"max-w-[90vw] lg:max-w-[500px]  "}),e("button",{className:"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer",children:"Submit"})]})})]})},Ke=Pe,We="/assets/admin-fefab388.png",He="/assets/wfh-163826c8.png",Re="/assets/schedule-b8a7255f.png";function ee({level:o,showWfh:w,setShowWfh:p,user:m,hideList:x,setHideList:f,sum:g,work:h,setSendTo:s,setDisplayTo:u,setPrivateChat:l,setTrueChat:c,setPan:r,pan:A}){const[C,N]=n.useState(!1),T=ge(),k=()=>{fe.signOut().then(()=>{T("/"),window.location.reload()})};return e("aside",{id:"cta-button-sidebar",className:C?"  w-full sm:w-1/5 fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0":"fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0","aria-label":"Sidebar",children:e("div",{className:"h-full px-3 py-4 overflow-y-auto bg-slate-800 dark:bg-slate-800",children:a("ul",{className:"space-y-2 font-medium",children:[e("li",{children:a(V,{to:"/",className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Ee}),e("span",{className:"ml-3",children:"Home"})]})}),e("li",{children:a("a",{onClick:()=>{p("start"),r(A===!1)},className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Re}),e("span",{className:"ml-3",children:"CALENDAR"})]})}),e("li",{children:o>8?a(V,{to:"/admindashboard",className:"  transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:We}),e("span",{className:"flex-1 ml-3 whitespace-nowrap  rounded-lg  dark:text-white",children:"ADMIN"})]}):null}),e("li",{children:a("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white  rounded-lg dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Qe}),a("span",{className:"flex-1 ml-3 whitespace-nowrap   dark:text-white ",children:["  ",e(be,{})," "]})]})}),e("li",{children:a("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{f(x!==!0),p("chat"),N("false")},children:[e("img",{className:"style-meeting",src:Ae,style:{cursor:"pointer",width:"40px"}}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:"Chat"})]})}),e("li",{children:a("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:()=>{p("Docs"),N(!0)},children:[e("img",{className:"w-[40px]",src:He}),e("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Docs"})]})}),e("li",{children:a("a",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group",children:[e("img",{className:"w-[40px]",src:Ue}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:m})]})}),e("li",{children:a("a",{className:" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group",onClick:k,children:[e("img",{className:"w-[40px]",src:De}),e("span",{className:"flex-1 ml-3 whitespace-nowrap text-white",children:"Sign Out"})]})}),e("l1",{children:o>7&&w==="chat"&&e(d,{children:a("div",{className:"pt-200px",children:[o>8?a("h2",{onClick:()=>{s("group"),u("Group"),l("group"),N(!0),f(x!==!0)},style:{cursor:"pointer"},className:"bg-slate-400 mt-2 p-2 mr-2 rounded-sm xl lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer ",children:["Group  ",a("p",{style:{fontSize:"14px",color:"red"},children:[" ",g>0?g:""," "]})]}):null,e("h2",{onClick:()=>{s("designer"),u("designer"),l("designer"),N(!0),f(x!==!0)},style:{cursor:"pointer"},className:"bg-slate-400 p-2 mt-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer",children:" Designer  "}),h.map((v,E)=>e("div",{className:"pt-2",children:a("p",{className:"bg-slate-400 p-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer ",style:{cursor:"pointer"},onClick:()=>{s("chat"+m+v.Name),l("chat"+m+v.Name),N(!0),c("chat"+v.Name+m),u(v.Name),f(x!==!0)},children:[" ",v.Name," "]},E)},E))]})})})]})})})}const Fe="/assets/doc-6-5b8b28b7.png",ze="/assets/doc-7-ae900980.png",Le="data:image/png;base64,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",Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAACPCAYAAABaksRKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAH3klEQVR4Xu3cW69UZxnAcS79FN77GbxtrCZGU4ForQpUYiRsyg2K2DY2vTDaxIo1NFppNIVWa6xVsdZDrFI5ypmyh0PZHEprCQUK+AGW8w6Z6d6bZ23WlrLXsya/i18ye9Zh1nPz/jOz18yij37s4xUAZCBKAKQhSgCkIUoApCFKAKQhSgCkIUoApLHo0raPVACQgSgBkMaifZPnKwDIQJQASEOUAEhDlABIQ5QASEOUAEhDlABIQ5QASEOUAEhDlABIQ5QASEOUAEhDlABIQ5QASEOUAEhDlABIQ5QASEOUAEhDlABIQ5QASEOUAEhDlABIQ5QASEOUYB729/omz/WdbdWuI1Ph9UHXiRI0dODYVDXZ61W93rHWrfn2D4WJsSRK0FCWIBX3LJmo1j6ysdq+70R4rdBVogQNRXFoS4lSMfHwk+G1QleJEjQUxaEtwygNw+QdE+NClKChKA5tmR6l4qFHNvofE2NBlKChKA5tmR2lorxjEia6TpSgoSgObYmiVJR3TD7Ko8tECRqK4tCWKEhDbn6gy0QJGori0JYoRtO5+YGuEiVoKIpDW6IQzebmB7pIlKChKA5tiSIUcfMDXSNK0FAUh7ZEAarj5ge6RJSgoSgObYniMxc3P9AVogQNRXFoSxSe23HzA10gStBQFIe2LF6x/v/y6BPPhLNBFqIEDUVx6KJoNshClKChaIHvomg2yEKUoKFoge+iaDbIQpSgoWiB76JoNshClKChaIHvomg2yEKUoKFoge+iaDbIQpSgoWiB76JoNshClKChaIHvomg2yEKUoKFoge+iaDbIQpSgoWiB76JoNshClKChaIHvomg2yEKUoKFogS82bX6h+tQX1oY/gtqGT/avpVxTdK1FNBtkIUrQULTAF8smvhPGoU3lmqJrLaLZIAtRgoaiBb7YvmNntfEnz1U/2PSLFMq1lGuKrrWIZoMsRAkaihb4LopmgyxECRqKFvguimaDLEQJGooW+C6KZoMsRAkaihb4LopmgyxECRqKFvjCjQ7w4RElaCha4Itlq90SDh8WUYKGogW+KF9ULV9YjeLQhvJF3k3P+vIs3SRK0FC0wHdRNBtkIUrQULTAd1E0G2QhStBQtMB3UTQbZCFK0FC0wHdRNBtkIUrQULTAd1E0G2QhStBQtMB3UTQbZCFKMIc3tzxfXV35QPX+8iXVtWWLx0KZ5erKLw5mi2aGNokS1CiL9o3F91b//dw9Y6nMdmrL1nB2aIsoQY3yDilazMdJeccUzQ5tESWoUT7mihbycVJmjGaHtogS1BAlWHiiBDVECRaeKEGN+Ubp4uMbqpO7Xq9O7t4xpzMv/aq6tOGh6s3X/lodP3JocFx0rrKt7HNp/Zrq7Itbw3PN0H/ti49/65ZzzUWUyEaUoMZ8o3TmpV+G3wua7cSBf1enX/3D6O9Tr79W3Vj6wV1+5XF5brh9attvqxP79oz+nsuZ37ww45puR5TIRpSgxnyj9N66VdXpv7xSnf7bqwPHjx4exeJEeSfzr3/2/aM6v/XZ6vLE8qo3bftbm58eneetzZtGz5d9rqxeVl14+snReU9t//toe3mN4fPltcs1TL+m2xElshElqDHfKM12qh+gYTyurHnwlu1vP/X9qjf5xs24HD5QXf36lwfK48Fx/W1ln9nHlXMNz1teY/b2+RAlshElqHG3o3T9S5+tTuzdPdrn3PM/Hxj+fWLvrur6A5+55ThRYpyJEtS421EqLq1bVR0/eujmfpNHb+o/Ls/VfRQnSowzUYIaCxGl4vyWzaP9hs4/97Nw30KUGGeiBDUWKkoXH/vmaL+hi4+tD/ctRIlxJkpQYyGiVG7/nvrT70f7DZ3+87YZt4lPJ0qMM1GCGgsRpQs//dEHd+Ad3DcwOKb/3IVnfhweI0qMM1GCGnc7SlcmVlTHDx+8uc+xo9W73310oDwuzx0/crB/3IpbjxMlxpgoQY27GaUbSz5RTf3x5dH28hNB1+//9MDJHdtHz0+98rv+vjM/xhMlxpkoQY27GaV3Nn5vtK33xpHq8tqvjrZd7u87/dcg3pn1BVpRYpyJEtS44yhN+/26K6uXj54v75LOvPziaFv5wuz044pzW54dbS/7lmOG28q5htvKa0w/br5EiWxECWrcaZTKrd7lI7q3n3piRlSKa8vuG/x46sk9O6urX7t/xrbi/ZWfH3ykd/bXW6trX7lvxrZyrnLOcu7yGtO3zZcokY0oQY07jVIXiBLZiBLUuLp8abiQj5MyYzQ7tEWUoMZ/NqwLF/Jx8u7D3whnh7aIEtQ4uOdIdXniwVv+HzQOykzv9Wc71J8xmh3aIkowh/2HTvUX7qPVod1HqpN7d46FMkuZqcwWzQxtEiVoaHgbdtdFs0EWogQNRQt8F0WzQRaiBA1N9nrhIt8lxyZ74WyQhShBQwcnp/phmgwX+y4oUT3UmwpngyxECeblXLV/4GzH9K+5dy6YB3IRJQDSECUA0hAlANIQJQDSECUA0hAlANIQJQDSECUA0hAlANIQJQDSECUA0hAlANIQJQDSECUA0hAlANIQJQDSECUA0hAlANIQJQDSECUA0hAlANIQJQDSECUA0lh079JVFQBkIEoApCFKAKQhSgCkIUoApCFKAKQhSgCkIUoApCFKAKQhSgCkIUoApCFKAKQhSgCkIUoAJLGq+h/O/+YnBUlGLgAAAABJRU5ErkJggg==";function Oe(){return e(d,{children:a("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"8. Adding Content Details"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:" The Content Planner is responsible for adding essential content information for each client. "}),a("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:[" On the client's page, you will find fields to fill in:",e("p",{children:"1. Post Count: Specify the number of posts required for the client's content. "}),e("p",{children:"2. Social Media Channel: Indicate the platform(s) where the content will be published."}),e("p",{children:"3. Date of Delivery: Set the deadline for when the content should be completed."}),e("p",{children:"4. Post Subject: Provide a brief description of the content subject.."}),e("img",{src:Fe,className:"mt-5"})]}),e("h1",{className:"text-3xl mt-5",children:" 9. Tracking Content Progress "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:' To identify pending content creation, the Content Editor can look for posts marked in orange with a "Pending" status. '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:' Click on the "Open" button next to a pending post to access its content creation workspace. '}),e("img",{src:ze,className:"mt-5 m-auto mb-10"}),e("h1",{className:"text-3xl mt-5",children:"10. Content Creation Workspace "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Inside the content creation workspace, the Content Editor can:"}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:"1. Write the text for the post."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 2. Add emojis to enhance the content."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 3.Delete the entire post if necessary.. "}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 4. Add designs or media to complement the content."}),e("h1",{className:"text-3xl mt-5",children:" 11. Designer Content Upload "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:" The designer has the option to upload the final design for each post on the client's page "}),e("img",{src:Le,className:"m-auto mb-10 mt-5"}),e("h1",{className:"text-3xl mt-5",children:" 12. Example Tab for Sending Instructions "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:'Below the Designer Content Upload section, you will find the "Example Tab".'}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Example Tab allows the Content Planner to provide instructions to the designer. It includes fields to add images and text as references."}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Content Planner can open up to a maximum of three Example Tabs for different instructions."}),e("h1",{className:"text-3xl mt-5",children:' 13. Changing Post Status to "Waiting"s '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'After the Content writers have written the content for a post, they can change the post status to "Waiting" by clicking on the "Waiting" button. '}),e("h1",{className:"text-3xl mt-5",children:" 14. Approving the Post "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  Once the Content Planner has reviewed and approved the content, they can click on the "Approved" tab. '}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'The "Approved" tab will change the status of the post to "Green," signifying its approval.'}),e("h1",{className:"text-3xl mt-5",children:" 15. Downloading Text File or Entire Page "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"  The person in charge of content can download a single text file for a specific post. "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'By checking the box next to "Download Text File," they can download the text content in a convenient file format.'}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"Alternatively, they can choose to download the entire page, which includes all content and designs related to the client if they are approved."}),e("img",{src:Me,className:"mt-5 m-auto mb-10"}),e("h1",{className:"text-3xl mt-5",children:" 16. Closing the Post "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  To close a post, the user can click on the button with an "X" next to "Open." '}),e("h1",{className:"text-3xl mt-5",children:" 17. Chat and Memo Functionalities  "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"  The Chat functionality on the client's page works similarly to the one on the user profile page, enabling smooth communication between team members. "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"The Memo button allows users, typically Content Planners, to create or delete memos as reminders or notes related to content management tasks."})]})})}const je="/assets/doc-3-e54fd314.png",Ge="/assets/doc-4-b7ba4b65.png",te="/assets/doc-5-1791e995.png";function Ze(){return e(d,{children:e("div",{className:"text-center text-black md:w-full md:absolute md:right-0 font-extrabold bg-slate-400 p-2 lg:w-4/5 lg:m-auto ",children:a("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"1. Introduction"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:"Welcome to the User Profile Guide for SQL Client Planning Tool. In this guide, we will walk you through the functionalities of the tool on your user profile page"}),e("h1",{className:"text-3xl mt-5",children:" 2. Accessing the Calendar "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Upon loading your user profile page, you will be presented with a calendar view that displays all your tasks and notes. The calendar will be the central hub for organizing your to-do list."}),e("h1",{className:"text-3xl mt-5",children:" 3. Adding a New Note "}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:"1. To add a new note, simply click on the desired date on the calendar. A note editor will appear, allowing you to input your task details and notes."}),e("img",{src:je,className:"mt-10 pb-5"}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:" 2. Type your task or note into the input field provided. You can include any relevant information, such as priority, or additional details."}),e("p",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word",children:' 3. After completing the note, click on the "+" icon to save it. The new note will be added to the calendar, appearing alongside any existing notes for that date. '}),e("img",{src:Ge,className:"mt-10 pb-5"}),e("h1",{className:"text-3xl mt-5",children:" 4. Marking Tasks as Completed "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"When you have finished a task, click on the small circle associated with the note on the calendar. The card will turn green, indicating that the task has been completed."}),e("img",{src:te,alt:te,className:"mt-10   md:mt-10 "}),e("h1",{className:"text-3xl mt-5",children:" 5. Deleting Notes "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:'To remove a note entirely, click on the "Delete" option associated with the note on the calendar.'}),e("h1",{className:"text-3xl mt-5",children:" 6. Automatic Removal of Expired Notes "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"When the due date of a note has passed, the system will automatically remove the note from inside the card."}),e("h1",{className:"text-3xl mt-5",children:" 7. Accessing the Clients Tab "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:'  To access the Clients Tab, look for the "Clients" option on the side panel of your user profile page. Click on it to open a small window that displays all your SQL clients. '}),e(Oe,{})]})})})}function lt(){ue();const[o,w]=n.useState(""),[p,m]=n.useState(""),[x,f]=n.useState(""),[g,h]=n.useState("waiting"),[s,u]=n.useState(""),[l,c]=n.useState(""),[r,A]=n.useState("waiting"),[C,N]=n.useState([]),T=async()=>{try{return I.collection("admin").onSnapshot(i=>{const b=i.docs.map(y=>({id:y.id,...y.data()}));b.sort((y,me)=>y.id-me.id),N(b)})}catch(t){console.error("Error fetching work data:",t)}};n.useEffect(()=>{T()},[]);const[k,v]=n.useState([]),[E,ne]=n.useState([]),[le,oe]=n.useState(""),[se,R]=n.useState(),[F,z]=n.useState(!1),[L,M]=n.useState(""),[Q,B]=n.useState(!1),O=C.map(t=>t.Name),j=t=>{const i=J(W,r),b=H(i,t);we(b).then(()=>{console.log("Document successfully deleted!")}).catch(y=>{console.error("Error removing document:",y)})};function G(t){const i=J(W,"group"),b=H(i,t);Y(b,{[o]:0},{merge:!0})}const P=t=>{const i=H(W,"group",t);Y(i,{new:"Read"}).then(()=>{console.log("Field successfully updated")}).catch(y=>{})},[re,ie]=n.useState(!1),[U,ce]=n.useState(!1),[K,de]=n.useState(!1);n.useEffect(()=>{setTimeout(()=>{ie(!0)},1e3)},[]);const Z=k.map(t=>t[o]).reduce((t,i)=>t+i,null),[S,q]=n.useState("start"),[X,he]=n.useState(!1);return n.useEffect(()=>{const t=()=>{he(window.innerWidth<767)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),a(d,{children:[e(Te,{privateChat:r,setChat:oe,setDesignerChat:ne,setMessage:v}),e(Se,{}),e(ae,{setUser:w,user:o,setUuid:m,setIsAccepted:f,level:g,setLevel:h}),g===0&&e(d,{children:e("div",{className:"min-h-[100vh] bg-slate-600",children:e(Ie,{})})}),e("button",{onClick:()=>B(Q!==!0),"data-drawer-target":"default-sidebar","data-drawer-toggle":"default-sidebar","aria-controls":"default-sidebar",type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:e("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),a("div",{className:"flex flex-col sm:flex-row   bg-slate-500",children:[Q===!0&&X===!0&&a(d,{children:[e(ee,{level:g,showWfh:S,setShowWfh:q,user:o,hideList:F,setHideList:z,sum:Z,work:C,setSendTo:u,setDisplayTo:M,setPrivateChat:A,setTrueChat:R,pan:Q,setPan:B})," "]}),X===!1&&a(d,{children:[e(ee,{level:g,showWfh:S,setShowWfh:q,user:o,hideList:F,setHideList:z,sum:Z,work:C,setSendTo:u,setDisplayTo:M,setPrivateChat:A,setTrueChat:R,pan:Q,setPan:B})," "]}),g>7?a(d,{children:["  ",a("div",{className:"w-full sm:w-4/5 lg:w-full md:absolute right-0 bg-slate-500   ",children:[S==="start"&&e("div",{className:"lg:w-5/5 xl:w-[1100px] lg:min-h-[100vh] xl:m-auto flex flex-col items-center bg-slate-500  ",children:e(Ke,{user:o})}),S==="chat"&&e(d,{children:a("div",{className:"bg-slate-100   min-h-[500px]   md:flex md:justify-center ",children:[a("h2",{onClick:()=>de(K!==!0),children:[" ",K===!1?"Show Priority":"Show All","  "]}),a("div",{className:"min-h-[90vh] max-h-[90vh] overflow-y-auto overflow-x-hidden p-10 ",children:[r==="group"&&e(d,{children:K===!0?k.map((t,i)=>a("div",{className:"flex flex-col items-center",onClick:()=>P(t.id),children:[" ",t.imp>""?a("h2",{className:"",children:["  ",e("img",{src:D,style:{width:"40px",height:"40px"}})," ",t.text," - ",t.sendBy," "]}):null,t.imp>""?e("img",{style:{width:"50px",height:"50px",cursor:"pointer"},src:$,onClick:b=>j(t.id)}):null," ",e("hr",{})," "]},i)):k.map((t,i)=>a("div",{className:"",onClick:()=>P(t.id),children:[a("h2",{className:"md:max-w-[1000px] break-all",onClick:()=>G(t.id),children:["  ",t.imp>""?e("img",{src:D,style:{width:"40px",height:"40px"}}):null," ",t.text," - ",t.sendBy," "]}),e("img",{style:{width:"50px",height:"50px",cursor:"pointer"},src:$,onClick:b=>j(t.id)})," ",e("hr",{})," "]},i))}),r==="designer"&&e(d,{children:E.map((t,i)=>e("div",{className:"flex flex-col items-center",onClick:()=>P(t.id),children:a("h2",{className:"break-all",onClick:()=>G(t.id),children:["  ",t.imp>""?e("img",{src:D,style:{width:"40px",height:"40px"}}):null," ",t.text," - ",t.sendBy," "]})},i))}),r!=="group"&&e(d,{children:r&&e(d,{children:Object.entries(le).map(([t,i])=>a("div",{className:"pb-10",children:[a("h2",{children:["  ",e("img",{src:Ne,style:{width:"20px",height:"20px",marginRight:"10px"}}),"  ",t," "]}),a("h2",{className:"break-all",children:["   ",i," "]}),e("hr",{style:{color:"black",width:"100px"}})]},t))})})]}),a("form",{className:"flex fixed right-0 left-0 bottom-0 justify-around flex-col md:justify-end border-t-2 border-black pt-[10px] pb-[10px] lg:fixed lg:bottom-0 lg:w-full bg-slate-800",onSubmit:t=>t.preventDefault(),children:[a("div",{className:"flex flex-row items-center justify-around mb-10 lg:w-[300px] lg:pb-[20px] lg:m-auto",children:[e("textarea",{onChange:t=>c(t.target.value),value:l,className:"textarea",placeholder:`Send message to ${L} ${U===!0&&L==="Group"?" [Priority] ":""}`}),e("img",{src:D,onClick:()=>{ce(U===!1)},className:"img-imp",style:{width:"2rem"}})]}),s==="designer"?e(_,{allUid:O,user:o,sendTo:s,text:l,uuid:p,imp:U}):null,s==="group"?e(_,{allUid:O,setText:c,user:o,sendTo:s,text:l,uuid:p,imp:U}):null,s!=="designer"&&s!=="group"?e(ve,{user:o,setText:c,sendTo:s,text:l,trueChat:se}):null]})]})}),S==="Docs"&&e(d,{children:e(Ze,{})})]}),"  "]}):null]}),re===!1&&e(d,{children:e(pe,{})})]})}export{lt as default};
