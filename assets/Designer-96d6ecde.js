import{r as s,a as r,F as U,j as e,m as I,g as k,h as X,_ as C,c as O,d as T,y as Ee,R as je,e as $e,U as He,Q as Le,K as R}from"./index-8afa154e.js";import{r as ee,g as te,u as ae,a as se,N as Oe,m as Z}from"./Nav-17e5fa63.js";import{M as Ae,B as Ve,T as _e,D as ze}from"./DesignerFunctions-a7ea44d7.js";import{T as Ke}from"./Typography-f1153996.js";function Qe(){const[c,i]=s.useState(!1);return r(U,{children:[r("div",{className:"border-yellow-500 border-t-2 mt-3 bg-slate-700 flex items-center w-full justify-center gap-10 p-5",children:[e("h1",{className:"text-4xl font-sans font-bold text-slate-200 text-center ",children:"Squarelion Designer Page"}),e("div",{className:"text-center bg-slate-700 ",children:e("button",{onClick:()=>i(!c),style:{backgroundColor:"#f8f9fa",color:"#333",border:"1px solid #ced4da",borderRadius:"4px",padding:"10px 20px",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease"},onMouseOver:d=>d.currentTarget.style.backgroundColor="#e9ecef",onMouseOut:d=>d.currentTarget.style.backgroundColor="#f8f9fa",children:c?"Close tooltip":"Open tooltip"})}),e("h6",{className:"fixed bottom-1 left-2 text-[10px] text-white",children:"V 0.6"})]}),e("div",{children:c&&r("article",{className:"flex flex-row items-stretch justify-around w-full h-full p-10 bg-gray-100  dark:bg-slate-700",children:[r("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click upload image"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 1"})]}),r("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click finish to complete"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 2"})]}),r("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"To see the instructions click on the view button"}),e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"For now you can only upload 4 image at a time and 1 pdf file"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Note"})]})]})})]})}function We({name:c,user:i,dPost:d,dMonth:p,dPage:n,setSuccessfully:g,setImageUrls:h,setFiles:w}){return r("label",{children:[e("input",{type:"file",accept:"image/*",multiple:!0,onChange:async y=>{const a=y.target.files;if(!a||a.length>4){alert("You can only upload a maximum of 4 files at once.");return}const b=Array.from(a).map(m=>{const u=ee(te(),`products/${c}/${m.name}`),l=ae(u,m);return new Promise((x,v)=>{l.on("state_changed",o=>{const D=o.bytesTransferred/o.totalBytes*100;g(`Uploading ${D}%`)},o=>{console.error("Upload Error:",o),v(o)},async()=>{const o=await se(l.snapshot.ref);x({url:o,type:m.type})})})});try{const m=await Promise.all(b),u=m.filter(o=>o.type==="application/pdf").map(o=>o.url),l=m.filter(o=>o.type.startsWith("image/")).map(o=>o.url),x={designer:l[0]||"",designer1:l[1]||"",designer2:l[2]||"",designer3:l[3]||""},v={pdf:u[0]||""};if(l[0]){const o={...x,DesignedUploadedBy:i};await I(k(X,"DesignerPage",d+p+n),o,{merge:!0})}else if(u[0]){const o={...v,DesignedUploadedBy:i};await I(k(X,"DesignerPage",d+p+n),o,{merge:!0})}h(l),w(a),g("Files have been uploaded. Click view button to view them!"),setTimeout(()=>{g("")},7e3)}catch(m){console.error("Error updating Firestore:",m)}}})," Upload"]})}function Ye({user:c,message:i,setMessage:d,dPost:p,dMonth:n,setContent:g,dPage:h,arrayUnion:w}){return r("form",{onSubmit:async y=>{y.preventDefault();const a=C(T,"DesignerPage"),b=k(a,p+n+h);O(b,{subject:w(i+" - "+c),New:!1});const m=C(T,h),u=k(m,p+n);I(u,{color:"#FF4500",status:"Feedback ",StatusText:"Feedback"},{merge:!0}),g(l=>[...l,i+" - "+c]),setTimeout(()=>{d("")},2e3)},children:[e("input",{type:"text",value:i,onChange:y=>d(y.target.value),placeholder:"Enter your message here",className:"border-2 border-black p-2 rounded-md"}),e("button",{className:"bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800  ml-1 cursor-pointer",children:"Send"})]})}const qe={position:"absolute",bottom:"0",top:"35%",left:"60%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,overflow:"scroll"};function Ge({openModal:c,handleClose:i,image:d,image1:p,image2:n,image3:g,content:h,user:w,message:f,setMessage:y,dPost:a,dMonth:b,dPage:m,setContent:u,arrayUnion:l,exampleImg:x,exampleImg1:v,exampleImg2:o,exampleImg3:D}){const P={user:w,message:f,setMessage:y,dPost:a,dMonth:b,dPage:m,setContent:u,arrayUnion:l};return e(Ae,{open:c,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"max-w-[80vw] max-h-[80vw]  ",children:e(Ve,{sx:qe,children:r(Ke,{id:"modal-modal-title",variant:"h6",component:"h2",style:{textAlign:"center"},children:[e("div",{children:e("button",{className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800  mb-5 cursor-pointer",onClick:i,children:"Close"})}),r("section",{className:"flex lg:w-[90vw] flex-row items-center flex-wrap content-center  gap-5 justify-center",children:[e("img",{className:"w-[300px]",src:d}),e("img",{className:"w-[300px]",src:p}),e("img",{className:"w-[300px]",src:n}),e("img",{className:"w-[300px]",src:g}),e("hr",{className:"w-full border-2 border-black"}),r("div",{children:[h.map((M,F)=>r("div",{children:[r("p",{className:"w-[80%] m-auto whitespace-pre-wrap",children:[" ",M]}),e("br",{})]},F)),e(Ye,{...P}),r("div",{className:"flex flex-row items-center mt-3",children:[e("img",{className:"w-[200px]",src:x}),e("img",{className:"w-[200px]",src:v}),e("img",{className:"w-[200px]",src:o}),e("img",{className:"w-[200px]",src:D})]})]})]})]})})})}function Je({newDesigner:c,db:i,id:d,collection:p,doc:n,setDoc:g,user:h,setImageUrl:w}){return e("button",{className:"bg-slate-800 text-white p-2 rounded-md hover:bg-gray-900 cursor-pointer",onClick:async()=>{if(!c.find((a,b)=>b===d))throw new Error("Error occurred");c.map((a,b)=>{if(d===b){if(console.log("success",a.post),a.month.includes("2023")){const l=p(i,a.page),x=n(l,a.post+a.month);g(x,{designer:a.designer||"",designer1:a.designer1||"",designer2:a.designer2||"",designer3:a.designer3||"",pdf:a.pdf||"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:h},{merge:!0})}else{const l=p(i,a.page),x=n(l,a.month);g(x,{[a.post+a.month]:{designer:a.designer||"",designer1:a.designer1||"",designer2:a.designer2||"",designer3:a.designer3||"",pdf:a.pdf||"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:h,Time:new Date().toLocaleString()}},{merge:!0})}const m=p(i,"DesignerPage"),u=n(m,a.post+a.month+a.page);Ee(u),w("")}})},children:"Send"})}function ot(){const[c,i]=s.useState([]),[d,p]=s.useState([]),[n,g]=s.useState(""),[h,w]=s.useState(""),[f,y]=s.useState(""),[a,b]=s.useState(""),[m,u]=s.useState(""),[l,x]=s.useState(""),[v,o]=s.useState(""),[D,P]=s.useState(""),[M,F]=s.useState(""),[re,oe]=s.useState(""),[ne,le]=s.useState(""),[ce,ie]=s.useState(""),[de,B]=s.useState(""),[me,A]=s.useState([]),[Xe,pe]=s.useState([]),[Ze,ge]=s.useState([]),[ue,V]=je.useState(!1),he=()=>V(!0),fe=()=>V(!1),[be,xe]=s.useState(""),[et,ye]=s.useState(),[_,z]=s.useState(""),[K,Q]=s.useState(""),[W,Y]=s.useState(""),[we,E]=s.useState(!1),[Ne,ve]=s.useState(""),[ke,Se]=s.useState(""),[De,Re]=s.useState(""),j=c.filter(t=>f!==11?!t.id.endsWith("Test"):!0);console.log(c);function Ce(t){j.map((N,Me)=>{if(t===Me){const $=d,Fe=ee(te(),`products/${$.name}`),G=ae(Fe,$);G.on("state_changed",S=>{const H=S.bytesTransferred/S.totalBytes*100;ie(`Uploading ${H}%`)},S=>{console.error(S)},async()=>{const S=await se(G.snapshot.ref),H=C(T,"DesignerPage"),Be=k(H,N.post+N.month+N.page),L=$.type==="application/pdf"?"pdf":"designer",J={};J[L]=S,await O(Be,J,{merge:!0}),console.log("success"),B(`${L.toUpperCase()} has been uploaded. Click view button to view ${L}!`),setTimeout(()=>{B("")},7e3)})}else return console.log("error")})}function Te(){E(!0)}const[q,Ue]=s.useState(!0);s.useEffect(()=>{setTimeout(()=>{Ue(!1)},1e3)});const Ie={name,user:n,dPost:_,dMonth:K,dPage:W,setSuccessfully:B,setImageUrls:pe,setFiles:ge},Pe={initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.3,delay:.3}};return r(U,{children:[q&&e(U,{children:e($e,{})}),r("div",{className:" min-h-[100vh] pb-10 bg-primary",children:[e(Oe,{})," ",r("div",{className:"",children:[e(He,{user:n,setUser:g,setUuid:w,uuid:h,setLevel:y}),e(_e,{}),e("section",{children:e(Qe,{level:f})}),r("div",{className:" pt-[50px]",children:[r("div",{className:"flex flex-col items-center",children:[e(ze,{setDesignerData:i,designerData:c,user:n,setNoti:ye}),!q&&e(Z.section,{...Pe,children:r("table",{className:"w-full text-sm text-left text-gray-300 shadow-md shadow-slate-800",children:[e("thead",{className:'className="text-xs  uppercase  bg-gray-700 text-gray-200',children:r("tr",{className:"text-center",children:[e("th",{className:"p-[1px]"}),e("th",{className:"px-4 py-2",children:"Image"}),e("th",{className:"px-4 py-2",children:"Date"}),e("th",{className:"px-4 py-2",children:"Client"}),e("th",{className:"px-4 py-2",children:"Priority"}),e("th",{className:"px-4 py-2",children:"Instructions"}),e("th",{className:"px-4 py-2",children:"Actions"}),f>8&&e("th",{className:"px-4 py-2",children:"Assigned"}),e("th",{className:"px-4 py-2",children:"Send"}),e("th",{className:"px-4 py-2",children:"Reset"}),e("th",{})]})}),r("tbody",{children:[j.map((t,N)=>(t.SendTo===n||f>9||n==="Saskia")&&t.hide!==!0?r("tr",{className:"border-b bg-gray-600 border-gray-700 shadow-md  shadow-black",children:[e("td",{className:`${t.New?"border-l-[5px] border-blue-700  animate-pulse animate-thrice animate-duration-[3000ms] animate-ease-out ":""} `}),e("td",{className:"border px-4 py-2",children:e("img",{src:t.img,className:"w-[50px] h-[50px] rounded-md mr-4"})}),e("td",{className:"border px-4 py-2",children:t.newDate}),e("td",{className:"border px-4 py-2",children:t.page}),e("td",{className:`border px-4 py-2 ${t.prio==="Prio"?"bg-red-600":"bg-gray-600"}`,children:t.prio}),r("td",{className:"border px-4 py-2",children:[e("h1",{className:"cursor-pointer text-black bg-white text-md border-black border-2 p-2 hover:scale-110 transition-transform",onClick:()=>{he(),b(t.designer),u(t.designer1),x(t.designer2),o(t.designer3),A(t.subject),P(t.img1),F(t.img2),oe(t.img3),le(t.img4),z(t.post),Q(t.month),Y(t.page)},children:" View "}),t.pdf===void 0||t.pdf===""?null:e("h1",{className:"cursor-pointer text-black bg-white text-md border-black border-2 p-2 hover:scale-110 transition-transform",onClick:()=>{window.open(t.pdf)},children:" View Pdf "})]}),e("td",{className:"border px-4 py-2",children:e("form",{onSubmit:()=>{Ce(N)},className:"designer-upload  mr-5 ml-4",children:e(Z.label,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},onClick:()=>{z(t.post),Q(t.month),Y(t.page)},className:"custom-file-upload cursor-pointer text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]",children:e(We,{...Ie})})})}),f>8&&e("td",{className:"border px-4 py-2 font-bold",children:t.SendTo}),e("td",{className:"border px-4 py-2",children:e("div",{children:t.designer!==void 0||t.pdf!==void 0?e(Je,{newDesigner:j,id:N,db:T,collection:C,doc:k,setDoc:I,user:n,setImageUrl:p}):null})}),e("td",{className:"border px-4 py-2",children:t.designer!==void 0||t.pdf!==void 0?r("button",{onClick:()=>{Te(),ve(t.post),Se(t.month),Re(t.page)},className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer relative z-[2]",children:[" ","Reset"," "]}):null})]},N):null),we&&e(U,{children:e("div",{className:"fixed top-0 z-[1000] left-0 w-full h-full bg-slate-400/20 gap-4  flex justify-center items-center",children:r("div",{className:"flex gap-3 flex-col bg-white p-5 rounded-md",children:[e("p",{className:"text-black font-semibold text-xl",children:"Are you sure you want to reset this?"}),e("button",{onClick:()=>{const t=C(T,"DesignerPage"),N=k(t,Ne+ke+De);O(N,{designer:R(),designer1:R(),designer2:R(),designer3:R(),pdf:R()},{merge:!0}),setTimeout(()=>{E(!1)},500)},className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer",children:"Yes"}),e("button",{onClick:()=>E(!1),className:"bg-green-700 text-white p-2 rounded-md hover:bg-green-800 cursor-pointer",children:"No"})]})})})]})]})})]}),r("div",{className:"fixed bottom-0 bg-slate-200 w-full  ",children:[e("h2",{className:"text-xl ml-4",children:ce}),e("h2",{className:"text-xl ml-4",children:de})]})]}),e(Ge,{openModal:ue,handleClose:fe,image:a,image1:m,image2:l,image3:v,content:me,user:n,message:be,setMessage:xe,dPost:_,dMonth:K,dPage:W,setContent:A,arrayUnion:Le,exampleImg:D,exampleImg1:M,exampleImg2:re,exampleImg3:ne})]})," "]})]})}export{ot as default};
