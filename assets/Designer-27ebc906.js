import{r,a as s,F as V,j as e,R as ve,U as Se,_ as y,g as p,c as E,m as D,h as $,d as w,y as De,Q as Ce}from"./index-0e7cf087.js";import{N as Ue,r as O,g as A,u as L,a as _}from"./Nav-693e22d4.js";import{D as Re,M as Ie,B as Te}from"./DesignerFunctions-aed6fe2a.js";import{T as Pe}from"./Typography-6f287c0a.js";function Me(){const[h,C]=r.useState(!1);return s(V,{children:[s("div",{className:"border-yellow-500 border-t-2 mt-3 bg-slate-700 flex items-center w-full justify-center gap-10 p-5",children:[e("h1",{className:"text-4xl font-sans font-bold text-slate-200 text-center ",children:"Squarelion Designer Page"}),e("div",{className:"text-center bg-slate-700 ",children:e("button",{onClick:()=>C(!h),style:{backgroundColor:"#f8f9fa",color:"#333",border:"1px solid #ced4da",borderRadius:"4px",padding:"10px 20px",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease"},onMouseOver:u=>u.currentTarget.style.backgroundColor="#e9ecef",onMouseOut:u=>u.currentTarget.style.backgroundColor="#f8f9fa",children:h?"Close tooltip":"Open tooltip"})}),e("h6",{className:"fixed bottom-1 left-2 text-[10px] text-white",children:"V 0.4"})]}),e("div",{children:h&&s("article",{className:"flex flex-row items-stretch justify-around w-full h-full p-10 bg-gray-100  dark:bg-slate-700",children:[s("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click upload image"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 1"})]}),s("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click finish to complete"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 2"})]}),s("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"To see the instructions click on the view button"}),e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"For now you can only upload 4 image at a time and 1 pdf file"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Note"})]})]})})]})}const Fe={position:"absolute",bottom:"0",top:"35%",left:"60%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,overflow:"scroll"};function _e(){const[h,C]=r.useState([]),[u,Q]=r.useState(""),[i,W]=r.useState(""),[q,z]=r.useState(""),[b,H]=r.useState(""),[Y,G]=r.useState(""),[J,K]=r.useState(""),[X,Z]=r.useState(""),[ee,te]=r.useState(""),[ae,se]=r.useState(""),[re,oe]=r.useState(""),[le,ne]=r.useState(""),[ce,de]=r.useState(""),[ie,me]=r.useState(""),[ge,f]=r.useState(""),[pe,R]=r.useState([]),[je,he]=r.useState([]),[Be,ue]=r.useState([]),[be,I]=ve.useState(!1),fe=()=>I(!0),T=()=>I(!1),[U,P]=r.useState("");r.useState([]);const[Ee,xe]=r.useState(),N=h.filter(t=>b!==11?!t.id.endsWith("Test"):!0);function ye(t){N.map((a,m)=>{if(t===m){const l=u,n=O(A(),`products/${l.name}`),c=L(n,l);c.on("state_changed",d=>{const g=d.bytesTransferred/d.totalBytes*100;me(`Uploading ${g}%`)},d=>{console.error(d)},async()=>{const d=await _(c.snapshot.ref),g=y(w,"DesignerPage"),o=p(g,a.post+a.month+a.page),x=l.type==="application/pdf"?"pdf":"designer",B={};B[x]=d,await E(o,B,{merge:!0}),console.log("success"),f(`${x.toUpperCase()} has been uploaded. Click view button to view ${x}!`),setTimeout(()=>{f("")},7e3)})}else return console.log("error")})}const[k,M]=r.useState(""),[v,F]=r.useState(""),[S,j]=r.useState(""),we=async t=>{const a=t.target.files;if(!a||a.length>4){alert("You can only upload a maximum of 4 files at once.");return}const m=Array.from(a).map(l=>{const n=O(A(),`products/${name}/${l.name}`),c=L(n,l);return new Promise((d,g)=>{c.on("state_changed",o=>{const x=o.bytesTransferred/o.totalBytes*100;f(`Uploading ${x}%`)},o=>{console.error("Upload Error:",o),g(o)},async()=>{const o=await _(c.snapshot.ref);d({url:o,type:l.type})})})});try{const l=await Promise.all(m),n=l.filter(o=>o.type.startsWith("image/")).map(o=>o.url),c=l.filter(o=>o.type==="application/pdf").map(o=>o.url),d={designer:n[0]||"",designer1:n[1]||"",designer2:n[2]||"",designer3:n[3]||""},g={pdf:c[0]||""};if(n[0]){const o={...d,DesignedUploadedBy:i};await D(p($,"DesignerPage",k+v+S),o,{merge:!0})}else if(c[0]){const o={...g,DesignedUploadedBy:i};await D(p($,"DesignerPage",k+v+S),o,{merge:!0})}he(n),ue(a),f("Files have been uploaded. Click view button to view them!"),setTimeout(()=>{f("")},7e3)}catch(l){console.error("Error updating Firestore:",l)}};function Ne(t){N.map((a,m)=>{if(t===m){console.log("success",a.post);const l=y(w,a.page),n=p(l,a.post+a.month);D(n,{designer:a.designer,designer1:a.designer1,designer2:a.designer2,designer3:a.designer3,pdf:a.pdf||"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:i},{merge:!0});const c=y(w,"DesignerPage"),d=p(c,a.post+a.month+a.page);De(d),Q("")}else return console.log("error")})}const ke=async t=>{t.preventDefault();const a=y(w,"DesignerPage"),m=p(a,k+v+S);E(m,{subject:Ce(U+" - "+i)});const l=y(w,S),n=p(l,k+v);D(n,{color:"#00eaff",status:"Feedback",StatusText:"Feedback"},{merge:!0}),R(c=>[...c,U+" - "+i]),setTimeout(()=>{P("")},2e3)};return console.log(N.filter(t=>t.SendTo===i)),e(V,{children:s("div",{className:" h-[100vh]  bg-slate-800",children:[e(Ue,{})," ",s("div",{className:"",children:[e(Se,{user:i,setUser:W,setUuid:z,uuid:q,setLevel:H}),e("section",{children:e(Me,{level:b})}),s("div",{className:" pt-[50px]",children:[s("div",{className:"flex flex-col items-center",children:[e(Re,{setDesignerData:C,designerData:h,user:i,setNoti:xe}),e("section",{children:s("table",{className:"w-full text-sm text-left text-gray-300 shadow-md shadow-slate-800",children:[e("thead",{className:'className="text-xs  uppercase  bg-gray-700 text-gray-200',children:s("tr",{className:"text-center",children:[e("th",{className:"px-4 py-2",children:"Image"}),e("th",{className:"px-4 py-2",children:"Date"}),e("th",{className:"px-4 py-2",children:"Client"}),e("th",{className:"px-4 py-2",children:"Priority"}),e("th",{className:"px-4 py-2",children:"Instructions"}),e("th",{className:"px-4 py-2",children:"Actions"}),b>9&&e("th",{className:"px-4 py-2",children:"Assigned"})]})}),e("tbody",{children:N.map((t,a)=>(t.SendTo===i||b===11)&&t.hide!==!0?s("tr",{className:"border-b bg-gray-600 border-gray-700 shadow-md hover:scale-105 shadow-black",children:[e("td",{className:"border px-4 py-2",children:e("img",{src:t.img,className:"w-[50px] h-[50px] rounded-md mr-4"})}),s("td",{className:"border px-4 py-2",children:[t.date,"-",t.month]}),e("td",{className:"border px-4 py-2",children:t.page}),e("td",{className:`border px-4 py-2 ${t.prio==="Prio"?"bg-red-600":"bg-gray-600"}`,children:t.prio}),s("td",{className:"border px-4 py-2",children:[s("h1",{className:"cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform ",onClick:()=>{fe(),G(t.designer),K(t.designer1),Z(t.designer2),te(t.designer3),R(t.subject),se(t.img1),oe(t.img2),ne(t.img3),de(t.img4),M(t.post),F(t.month),j(t.page)},children:[" ","View"," "]}),t.pdf===void 0?null:s("h1",{className:"cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform ",onClick:()=>{window.open(t.pdf)},children:[" ","View Pdf"]})]}),e("td",{className:"border px-4 py-2",children:e("form",{onSubmit:()=>{ye(a)},className:"designer-upload  mr-5 ml-4",children:s("label",{onClick:()=>{M(t.post),F(t.month),j(t.page)},className:"custom-file-upload cursor-pointer text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]",children:[e("input",{type:"file",accept:"image/*",multiple:!0,onChange:we})," Upload Image"]})})}),b>9&&e("td",{className:"border px-4 py-2 font-bold",children:t.SendTo}),e("td",{className:"border px-4 py-2",children:e("div",{children:t.designer===void 0?null:s("button",{onClick:()=>{Ne(a)},className:"bg-slate-800 text-white p-2 rounded-md hover:bg-gray-900 cursor-pointer",children:[" ","Finish"," "]})})})]},a):null)})]})})]}),s("div",{className:"fixed bottom-0 bg-slate-200 w-full  ",children:[e("h2",{className:"text-xl ml-4",children:ie}),e("h2",{className:"text-xl ml-4",children:ge})]})]}),e(Ie,{open:be,onClose:T,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"max-w-[80vw] max-h-[80vw]  ",children:e(Te,{sx:Fe,children:s(Pe,{id:"modal-modal-title",variant:"h6",component:"h2",style:{textAlign:"center"},children:[e("div",{children:e("button",{className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800  mb-5 cursor-pointer",onClick:T,children:"Close"})}),s("section",{className:"flex lg:w-[90vw] flex-row items-center flex-wrap content-center  gap-5 justify-center",children:[e("img",{className:"w-[300px]",src:Y}),e("img",{className:"w-[300px]",src:J}),e("img",{className:"w-[300px]",src:X}),e("img",{className:"w-[300px]",src:ee}),e("hr",{className:"w-full border-2 border-black"}),s("div",{children:[pe.map((t,a)=>s("div",{children:[s("p",{className:"w-[80%] m-auto whitespace-pre-wrap",children:[" ",t]}),e("br",{})]},a)),e("div",{children:s("form",{onSubmit:ke,children:[e("input",{type:"text",value:U,onChange:t=>P(t.target.value),placeholder:"Enter your message here",className:"border-2 border-black p-2 rounded-md"}),e("button",{className:"bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800  ml-1 cursor-pointer",children:"Send"})]})}),s("div",{className:"flex flex-row items-center mt-3",children:[e("img",{className:"w-[200px]",src:ae}),e("img",{className:"w-[200px]",src:re}),e("img",{className:"w-[200px]",src:le}),e("img",{className:"w-[200px]",src:ce})]})]})]})]})})})]})," "]})})}export{_e as default};
