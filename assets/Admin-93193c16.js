import{u as V,r as s,j as e,a as t,L as F,b as Z,F as I,I as Y,_ as $,U as B,g as G,c as ee,d as D,e as te,m as ae}from"./index-c2e0a635.js";import{N as le,r as se,g as re,u as ne,a as ie}from"./Nav-acaa1efe.js";import{P as oe}from"./PartnerLogic-e2914dc5.js";import{h as ce,c as de,u as me,I as ge}from"./user-91bb68f7.js";import{V as he}from"./Version-67fdf16a.js";const ue="/assets/new-arrival-b24be3b5.png",pe="/assets/sqlProp-9061c7de.jpg";function xe({level:c,user:g,switching:h,setSwitching:x}){const u=V(),k=()=>{Z.signOut().then(()=>{u("/"),window.location.reload()})};function S(){localStorage.setItem("user",g),setTimeout(()=>{u(`/user/${g}`)},1e3)}const[P,n]=s.useState(!0),y=g.charAt(0).toUpperCase()+g.slice(1).toLowerCase();return e("aside",{id:"cta-button-sidebar",className:"fixed top-0 left-0 z-40 w-1/5 xl:w-[15%] h-screen transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar",children:e("div",{className:"h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800",children:t("ul",{className:"space-y-2 font-medium",children:[e("li",{children:t(F,{to:"/",className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group",children:[e("img",{src:ce,className:"w-6 md:w-[20px] lg:w-[30px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"}),e("span",{className:"md:text-xs lg:text-md ml-3 text-white rounded-lg dark:text-white",children:"Home"})]})}),e("li",{children:t("span",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg dark:text-white dark:hover:bg-gray-700 group",onClick:()=>x("Client"),children:[e("img",{className:"w-6 md:w-[30px] lg:-[40px]",src:de}),e("span",{className:"md:text-xs lg:text-md flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"Clients"})]})}),c>9?e("li",{children:t("span",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group",onClick:()=>{x("Users"),n(!1),setTimeout(()=>n(!0),1e3)},children:[e("img",{src:ue,className:"w-6 md:w-[30px] lg:-[40px]"}),e("span",{className:"md:text-xs lg:text-md flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"Users"})]})}):null,c>9?e("li",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer",children:t("span",{onClick:()=>x(""),className:"flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group",children:[e("img",{src:pe,className:"w-6 md:w-[30px]"}),e(F,{to:"/sqlProp",className:"md:text-xs lg:text-md  flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white",children:"Sql Properties"})]})}):null,e("li",{children:t("span",{onClick:S,className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group",children:[e("img",{src:me,className:"w-6 md:w-[30px] lg:-[40px]"}),e("span",{className:"md:text-xs lg:text-md flex-1 ml-3 whitespace-nowrap",children:y})]})}),e("li",{children:t("span",{className:"transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group",onClick:k,children:[e("img",{src:ge,className:"w-6 md:w-[30px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"}),e("span",{className:"flex-1 ml-3 md:text-xs lg:text-md  whitespace-nowrap ",children:"Sign Out"})]})})]})})})}const Q="/assets/doc-1-a807038b.png",fe="/assets/doc-2-2258c7b3.png";function be(){return e(I,{children:t("div",{className:"text-center text-black md:w-4/5 md:absolute md:right-0 font-extrabold bg-slate-400 p-2 ",children:[e("div",{className:"lg:flex xl:w-[1000px] xl:m-auto lg:items-center ",children:t("ul",{children:[e("li",{className:"mb-4 text-3xl",children:"1. Introduction"}),e("li",{className:"mb-4 text-xl ",children:"2. Overview of Squarelion Agency Planning Tool."}),t("li",{className:"mb-4 text-xl ",children:["3. Admin Page Functionality",t("ol",{className:"lg:flex mb-2 lg:items-center lg:mt-5",children:[e("li",{className:"mb-3 mt-2 text-lg lg:mt-auto",children:"3.1 Accessing the Admin Page "}),e("li",{className:"mb-3  text-lg",children:"3.2 Overview of SQL Clients"}),e("li",{className:"text-lg mb-3",children:"3.3 Client Source Hub"}),e("li",{className:"mb-2 text-lg",children:"3.4 Employee Tab and Access Rights Management"})]})]})]})}),t("div",{className:"mt-10 xl:w-[1200px] xl:m-auto xl:mt-10",children:[e("h1",{className:"text-3xl",children:"1. Introduction"}),e("h2",{className:"mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2",children:"The Squarelion Agency Planning Tool is a comprehensive platform designed to enhance efficiency and streamline operations. This report provides an overview of the tool's e - the Admin Page. The Admin Page serves as the central hub that aggregates and displays essential links to all SQL clients."}),e("h1",{className:"text-3xl mt-5",children:" 2. Overview of Squarelion Agency Planning Tool "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Squarelion Agency Planning Tool is an innovative solution crafted to optimize workflow and productivity. The tool centralizes all client-related data, making it easier for our team to manage projects, monitor progress, and collaborate effectively. With its intuitive interface and powerful features, the planning tool simplifies complex tasks and empowers our agency to deliver exceptional services to clients."}),e("h1",{className:"text-3xl mt-5",children:" 3. Admin Page Functionality "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"The Admin Page is a critical component of the Squarelion Agency Planning Tool, providing a bird's-eye view of all SQL clients in one centralized location. This section outlines the key functionalities of the Admin Page."}),e("h1",{className:"text-3xl mt-5",children:" 3.1 Accessing the Admin Page "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"To access the Admin Page, users must log in using their unique credentials. Upon successful login, users, depending on their assigned roles and permissions, are directed to the dashboard with various navigation options. The Admin Page is accessible to authorized personnel only, ensuring data security and confidentiality."}),e("img",{src:Q,alt:Q,className:"mt-10 lg:w-[400px] lg:m-auto lg:mt-10"}),e("h1",{className:"text-3xl mt-5",children:" 3.2 Overview of SQL Clients "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 ",children:"Upon reaching the Admin Page, users are presented with an overview of all SQL clients associated with Squarelion Agency. The page is organized in a user-friendly manner, allowing quick access to essential client pages. Simply click on the client image to view their content."}),e("h1",{className:"text-3xl mt-5",children:" 3.4 Employee Tab and Access Rights Management "}),e("h2",{className:"mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5",children:"In addition to the Client Source Hub, the Admin Page also incorporates an Employee Tab that allows high-ranking admins to manage employee access rights efficiently. This feature ensures that the appropriate levels of access are granted to each employee, ranging from Level 0 (lowest) to Level 10 (highest). High-ranking admins have exclusive rights to view the current employee levels and modify them as necessary."}),t("h3",{className:"mt-5 indent-5 font-bold text-2xl ",children:["Access Rights Management",t("ol",{children:[t("li",{className:"mb-2 mt-3 text-sm md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:[" View Employee Levels: ",e("br",{})," High-ranking admins can access a list of all employees along with their current access levels. This clear and organized display allows for quick identification and monitoring of employees' access rights. "]}),t("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["Modify Employee Levels: ",e("br",{})," High-ranking admins have the authority to adjust employees' access levels according to their job roles and responsibilities. They can either restrict access by reducing the level or grant higher privileges by increasing the level, thus customizing access rights to fit individual needs."]}),t("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["New User Approval:  ",e("br",{}),' When a new employee joins the agency, high-ranking admins can approve their access by accessing the "Switch Tab." Here, they can review pending users and assign them the appropriate access level. The switch tab provides an easy-to-use interface to grant the required rights to newcomers promptly.',e("img",{src:fe})]}),t("li",{className:"mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2",children:["Blocking and Restricting Access:  ",e("br",{})," In cases where an employee changes roles or leaves the agency, high-ranking admins can block or restrict their access as needed. This ensures data security and confidentiality by revoking access for former employees."]})]})]})]})]})})}function ye(){const[c,g]=s.useState([]),[h,x]=s.useState(""),[u,k]=s.useState([]),[S,P]=s.useState([]),[n,y]=s.useState(""),[w,T]=s.useState(""),[q,v]=s.useState(""),[H,O]=s.useState(""),[z,M]=s.useState("waiting");s.useEffect(()=>{const l=Y($(D,"admin"),i=>{const d=i.docs.reduce((b,N)=>{const o=N.data();return o.logs?[...b,{name:o.Name,logs:o.logs,level:o.level,logsOut:o.logsOut,id:N.id}]:b},[]);g(d)});return()=>l()},[]);const U=l=>{x(l.target.value);const i=c.find(d=>d.name===l.target.value);k(i?i.logs:[]),P(i?i.logsOut:[])},E=l=>l&&l.length>0?l[l.length-1]:"",j=l=>l&&l.length>0?l[l.length-1]:"",L=10,[A,C]=s.useState(L),R=()=>{C(A+L)},f=()=>{C(L)};return t("div",{className:"bg-slate-900 p-4 mt-4",children:[e(B,{setUser:T,user:w,setUuid:v,setIsAccepted:O,level:z,setLevel:M}),e("section",{children:e("div",{className:"flex flex-col items-center justify-center mb-3",children:e("p",{className:"text-2xl font-bold text-white",children:"Squarelion user panel information"})})}),t("div",{className:"flex flex-col items-center justify-center",children:[e("label",{htmlFor:"user-select",children:"Select a user:"}),t("select",{id:"user-select",value:h===""?"Select user":h,onChange:U,children:[e("option",{value:"",className:"text-black",children:"--Select a user--"}),c.map(l=>e("option",{className:"text-black",value:l.name,children:l.name},l.name))]})]}),t("table",{className:"w-full mt-5 text-sm text-left text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:t("tr",{className:"",children:[e("th",{className:"px-6 py-3",children:"User"}),e("th",{className:"px-6 py-3",children:"Level"}),e("th",{className:"px-6 py-3",children:"Latest Login Time"}),e("th",{className:"px-6 py-3",children:"Latest Logout Time"}),e("th",{scope:"col",className:"px-6 py-3",children:"User Level"})]})}),e("tbody",{className:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800",children:c.map((l,i)=>t("tr",{className:"",children:[e("td",{className:"px-6 py-4",children:l.name}),e("td",{className:"px-6 py-4",children:l.level}),e("td",{className:"px-6 py-4",children:E(l.logs)}),e("td",{className:"px-6 py-4",children:j(l.logsOut)}),e("td",{className:"px-6 py-4",children:e("input",{className:"text-black",placeholder:"EDIT USER",onChange:d=>y(d.target.value),onKeyDown:d=>{if(d.key==="Enter"){d.preventDefault();const b=$(D,"admin"),N=G(b,l.id),o=parseInt(n);ee(N,{level:o},{merge:!0}),y(""),alert(`${l.name} has been updated to ${n}`)}}})})]},l.name))})]}),u.length>0&&t("div",{className:"flex gap-5",children:[t("ol",{className:"relative border-l border-gray-200 dark:border-gray-700 mt-5",children:[t("h2",{className:"ml-2",children:[h,"'s logged In"]}),e("ul",{className:"flex flex-col-reverse",children:u.slice(0,A).map((l,i)=>t("li",{className:"mb-10 ml-4",children:[e("div",{className:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"}),e("time",{className:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",children:l})]},i))}),u.length>10&&t("div",{className:"flex justify-center mt-4 ml-2",children:[e("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2",onClick:R,children:"Show More"}),e("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:f,children:"Show Less"})]})]}),t("ol",{className:"relative border-l border-gray-200 dark:border-gray-700 mt-5",children:[t("h2",{className:"ml-2",children:[h,"'s Clocked Out"]}),e("ul",{className:"flex flex-col-reverse",children:S.slice(0,A).map((l,i)=>t("li",{className:"mb-10 ml-4",children:[e("div",{className:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"}),e("time",{className:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",children:l})]},i))}),S.length>10&&t("div",{className:"flex justify-center mt-4 ml-2",children:[e("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2",onClick:R,children:"Show More"}),e("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:f,children:"Show Less"})]})]})]})]})}function Te(){const[c,g]=s.useState(""),[h,x]=s.useState(""),[u,k]=s.useState(""),[S,P]=s.useState(""),[n,y]=s.useState("waiting"),w=V(),[T,q]=s.useState(),[v,H]=s.useState([]),O=async a=>{const r="https://hooks.zapier.com/hooks/catch/15784808/39lgxy1/";try{const p=await(await fetch(r,{method:"POST",mode:"cors",body:JSON.stringify(a)})).json();console.log(p)}catch(m){console.log(m)}};function z(a){a.preventDefault();const r=se(re(),`products/partners/${T}`),m=ne(r,T);m.on("state_changed",p=>{p.bytesTransferred/p.totalBytes*100},p=>{console.error(p)},async()=>{const p=await ie(m.snapshot.ref),W=$(D,"partner"),J=G(W,c);ae(J,{imageUrl:p,name:c,status:0},{merge:!0});const K={name:c};q(""),c("");try{await O(K)}catch(X){console.log(X)}})}const M=a=>{const r=a.target.files[0];q(r)},U=Math.ceil(v.length/2.5),E=v.slice(0,U),j=v.slice(U);function L(a){E.map((r,m)=>{m===a&&(localStorage.setItem("partner",r.name),localStorage.setItem("image",r.imageUrl),localStorage.setItem("preset",r.Preset||"No preset available"),setTimeout(()=>{w(`/profile/${r.name}`)},1e3))})}function A(a){j.map((r,m)=>{m===a&&(localStorage.setItem("partner",r.name),localStorage.setItem("image",r.imageUrl),localStorage.setItem("preset",r.Preset||"No preset available"),setTimeout(()=>{w(`/profile/${r.name}`)},1e3))})}s.useEffect(()=>{const a=setTimeout(()=>{n<8&&w("/"),n>8&&clearTimeout(a)},1e3);return()=>{clearTimeout(a)}},[n,w]);const[C,R]=s.useState(!0);s.useEffect(()=>{const a=setTimeout(()=>{R(!1)},500);return()=>{clearTimeout(a)}},[]);const[f,l]=s.useState("Client"),[i,d]=s.useState(!1);s.useEffect(()=>{const a=()=>{d(window.innerWidth<650)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);const[b,N]=s.useState(!0);s.useEffect(()=>{const a=setTimeout(()=>{N(!1)},500);return()=>clearTimeout(a)},[]);const[o,_]=s.useState(!0);return s.useEffect(()=>{const a=setTimeout(()=>{_(!1)},1800);return()=>clearTimeout(a)},[]),t(I,{children:[e(he,{}),e(oe,{partner:v,setPartner:H}),e(B,{setUser:x,user:h,setUuid:k,setIsAccepted:P,level:n,setLevel:y}),e("div",{className:"bg-slate-400 min-h-screen flex flex-col items-center justify-between",style:{color:"white"},children:u!==""&&n>9&&C===!1&&e(I,{children:e("div",{children:t("div",{children:[e("div",{className:"",children:i&&n>8?e(le,{}):null}),e(xe,{level:n,user:h,switching:f,setSwitching:l}),f==="Client"&&e("div",{className:"p-4 md:w-4/5 md:ml-[20%]",children:t("div",{className:"",children:[e("div",{className:"flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800 border-2 border-slate-900/50",children:e("div",{className:" gap-5 text-center text-2l text-gray-400 dark:text-gray-500 flex flex-col h-[150px] justify-around",children:n>9&&t(I,{children:[e("h1",{className:"text-xl font-semibold text-white",children:"Add a new client and image to the Squarelion database"}),t("form",{onSubmit:z,className:" flex flex-col items-center",children:[e("input",{type:"text",placeholder:"ENTER CLIENT NAME ",onChange:a=>g(a.target.value),className:"w-[160px]"}),e("input",{type:"file",className:"w-[100px] !bg-green-500",onChange:M}),e("br",{}),T>""&&e("button",{className:"border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200",children:"Add Client"})]})]})})}),t("div",{className:"table-split lg:flex gap-10 lg:flex-row bg-slate-900 p-5",children:[b?e("div",{className:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700",children:e("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200",children:"loading..."})}):e("div",{className:"relative  m-auto  mt-10 w-full lg:w-[400px] ",children:t("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Name"}),e("th",{scope:"col",className:"px-6 py-3",children:"Icon"})]})}),e("tbody",{className:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800",children:E.map((a,r)=>t("tr",{children:[e("td",{className:"px-6 py-4",children:t("div",{className:"flex items-center space-x-3",children:[e("div",{className:"flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"}),e("span",{children:a.name})]})}),e("td",{className:"px-6 py-4",children:e("div",{className:"text-gray-500 dark:text-gray-400 cursor-pointer hover:scale-110",children:e("button",{onClick:()=>{L(r)},disabled:n!==11&&a.name==="Test",className:n!==11&&a.name==="Test"?"opacity-20":"opacity-100 ",children:t("div",{className:"flex items-center justify-center  rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700",children:[o===!1?null:e("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200",children:"loading..."}),e("img",{src:a.imageUrl,className:`xs:w-[100px] md:w-[100px] lg:w-[500px] ${o?"hidden opacity-0":"visible transition-opacity duration-1000 ease-in opacity-100  "}`})]})})})})]},r))})]})}),b?e("div",{className:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700",children:e("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200",children:"loading..."})}):e("div",{className:"relative  m-auto  mt-10 w-full lg:w-[400px]",children:t("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Name"}),e("th",{scope:"col",className:"px-6 py-3",children:"Icon"})]})}),e("tbody",{className:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800",children:j.map((a,r)=>t("tr",{children:[e("td",{className:"px-6 py-4",children:t("div",{className:"flex items-center space-x-3",children:[e("div",{className:"flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"}),e("span",{children:a.name})]})}),e("td",{className:"px-6 py-4",children:e("div",{className:"text-gray-500 dark:text-gray-400 cursor-pointer hover:scale-110",children:e("button",{onClick:()=>{A(r)},disabled:n!==11&&a.name==="Test",className:n!==11&&a.name==="Test"?"opacity-20":"opacity-100 ",children:t("div",{className:"flex items-center justify-center  rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700",children:[o===!1?null:e("div",{className:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200",children:"loading..."}),e("img",{src:a.imageUrl,className:`xs:w-[100px] md:w-[100px] lg:w-[500px] ${o?"hidden":"visible"}`})]})})})})]},r))})]})})]})]})}),f==="Users"&&e(ye,{}),f==="Docs"&&n===11&&e(be,{})]})})})}),C===!0&&e(I,{children:e(te,{})})]})}export{Te as default};
