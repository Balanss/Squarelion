import{r,a as s,F as I,j as e,R as Fe,U as je,_ as h,g as m,c as T,m as N,h as L,d as u,y as Be,Q as Ee,K as v}from"./index-d4bac87d.js";import{N as $e,r as _,g as V,u as z,a as K}from"./Nav-8988c65d.js";import{D as Oe,M as Ae,B as Le}from"./App-733fcc03.js";import{T as _e}from"./Typography-72745d50.js";function Ve(){const[f,R]=r.useState(!1);return s(I,{children:[s("div",{className:"border-yellow-500 border-t-2 mt-3 bg-slate-700 flex items-center w-full justify-center gap-10 p-5",children:[e("h1",{className:"text-4xl font-sans font-bold text-slate-200 text-center ",children:"Squarelion Designer Page"}),e("div",{className:"text-center bg-slate-700 ",children:e("button",{onClick:()=>R(!f),style:{backgroundColor:"#f8f9fa",color:"#333",border:"1px solid #ced4da",borderRadius:"4px",padding:"10px 20px",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease"},onMouseOver:b=>b.currentTarget.style.backgroundColor="#e9ecef",onMouseOut:b=>b.currentTarget.style.backgroundColor="#f8f9fa",children:f?"Close tooltip":"Open tooltip"})}),e("h6",{className:"fixed bottom-1 left-2 text-[10px] text-white",children:"V 0.4"})]}),e("div",{children:f&&s("article",{className:"flex flex-row items-stretch justify-around w-full h-full p-10 bg-gray-100  dark:bg-slate-700",children:[s("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click upload image"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 1"})]}),s("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click finish to complete"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 2"})]}),s("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"To see the instructions click on the view button"}),e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"For now you can only upload 4 image at a time and 1 pdf file"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Note"})]})]})})]})}const ze={position:"absolute",bottom:"0",top:"35%",left:"60%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,overflow:"scroll"};function Je(){const[f,R]=r.useState([]),[b,Q]=r.useState(""),[i,W]=r.useState(""),[Y,q]=r.useState(""),[x,H]=r.useState(""),[G,J]=r.useState(""),[X,Z]=r.useState(""),[ee,te]=r.useState(""),[ae,se]=r.useState(""),[re,oe]=r.useState(""),[le,ne]=r.useState(""),[ce,de]=r.useState(""),[ie,me]=r.useState(""),[pe,ge]=r.useState(""),[he,y]=r.useState(""),[ue,M]=r.useState([]),[Ke,fe]=r.useState([]),[Qe,be]=r.useState([]),[xe,F]=Fe.useState(!1),ye=()=>F(!0),j=()=>F(!1),[C,B]=r.useState("");r.useState([]);const[We,we]=r.useState(),U=f.filter(t=>x!==11?!t.id.endsWith("Test"):!0);function Ne(t){U.map((a,p)=>{if(t===p){const l=b,n=_(V(),`products/${l.name}`),c=z(n,l);c.on("state_changed",d=>{const g=d.bytesTransferred/d.totalBytes*100;ge(`Uploading ${g}%`)},d=>{console.error(d)},async()=>{const d=await K(c.snapshot.ref),g=h(u,"DesignerPage"),o=m(g,a.post+a.month+a.page),w=l.type==="application/pdf"?"pdf":"designer",A={};A[w]=d,await T(o,A,{merge:!0}),console.log("success"),y(`${w.toUpperCase()} has been uploaded. Click view button to view ${w}!`),setTimeout(()=>{y("")},7e3)})}else return console.log("error")})}const[k,E]=r.useState(""),[S,$]=r.useState(""),[D,O]=r.useState(""),ve=async t=>{const a=t.target.files;if(!a||a.length>4){alert("You can only upload a maximum of 4 files at once.");return}const p=Array.from(a).map(l=>{const n=_(V(),`products/${name}/${l.name}`),c=z(n,l);return new Promise((d,g)=>{c.on("state_changed",o=>{const w=o.bytesTransferred/o.totalBytes*100;y(`Uploading ${w}%`)},o=>{console.error("Upload Error:",o),g(o)},async()=>{const o=await K(c.snapshot.ref);d({url:o,type:l.type})})})});try{const l=await Promise.all(p),n=l.filter(o=>o.type.startsWith("image/")).map(o=>o.url),c=l.filter(o=>o.type==="application/pdf").map(o=>o.url),d={designer:n[0]||"",designer1:n[1]||"",designer2:n[2]||"",designer3:n[3]||""},g={pdf:c[0]||""};if(n[0]){const o={...d,DesignedUploadedBy:i};await N(m(L,"DesignerPage",k+S+D),o,{merge:!0})}else if(c[0]){const o={...g,DesignedUploadedBy:i};await N(m(L,"DesignerPage",k+S+D),o,{merge:!0})}fe(n),be(a),y("Files have been uploaded. Click view button to view them!"),setTimeout(()=>{y("")},7e3)}catch(l){console.error("Error updating Firestore:",l)}},[ke,P]=r.useState(!1),[Se,De]=r.useState(""),[Re,Ce]=r.useState(""),[Ue,Pe]=r.useState("");function Te(){P(!0)}function Ie(t){U.map((a,p)=>{if(t===p){if(console.log("success",a.post),a.month.includes("2023")){const c=h(u,a.page),d=m(c,a.post+a.month);N(d,{designer:a.designer,designer1:a.designer1,designer2:a.designer2,designer3:a.designer3,pdf:a.pdf||"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:i},{merge:!0})}else{const c=h(u,a.page),d=m(c,a.month);N(d,{[a.post+a.month]:{designer:a.designer,designer1:a.designer1,designer2:a.designer2,designer3:a.designer3,pdf:a.pdf||"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:i}},{merge:!0})}const l=h(u,"DesignerPage"),n=m(l,a.post+a.month+a.page);Be(n),Q("")}else return console.log("error")})}const Me=async t=>{t.preventDefault();const a=h(u,"DesignerPage"),p=m(a,k+S+D);T(p,{subject:Ee(C+" - "+i)});const l=h(u,D),n=m(l,k+S);N(n,{color:"#00eaff",status:"Feedback",StatusText:"Feedback"},{merge:!0}),M(c=>[...c,C+" - "+i]),setTimeout(()=>{B("")},2e3)};return e(I,{children:s("div",{className:" min-h-[100vh] pb-10 bg-slate-800",children:[e($e,{})," ",s("div",{className:"",children:[e(je,{user:i,setUser:W,setUuid:q,uuid:Y,setLevel:H}),e("section",{children:e(Ve,{level:x})}),s("div",{className:" pt-[50px]",children:[s("div",{className:"flex flex-col items-center",children:[e(Oe,{setDesignerData:R,designerData:f,user:i,setNoti:we}),e("section",{children:s("table",{className:"w-full text-sm text-left text-gray-300 shadow-md shadow-slate-800",children:[e("thead",{className:'className="text-xs  uppercase  bg-gray-700 text-gray-200',children:s("tr",{className:"text-center",children:[e("th",{className:"px-4 py-2",children:"Image"}),e("th",{className:"px-4 py-2",children:"Date"}),e("th",{className:"px-4 py-2",children:"Client"}),e("th",{className:"px-4 py-2",children:"Priority"}),e("th",{className:"px-4 py-2",children:"Instructions"}),e("th",{className:"px-4 py-2",children:"Actions"}),x>8&&e("th",{className:"px-4 py-2",children:"Assigned"}),e("th",{className:"px-4 py-2",children:"Send"}),e("th",{className:"px-4 py-2",children:"Reset"})]})}),s("tbody",{children:[U.map((t,a)=>(t.SendTo===i||x>10||i==="Saskia")&&t.hide!==!0?s("tr",{className:"border-b bg-gray-600 border-gray-700 shadow-md hover:scale-105 shadow-black",children:[e("td",{className:"border px-4 py-2",children:e("img",{src:t.img,className:"w-[50px] h-[50px] rounded-md mr-4"})}),s("td",{className:"border px-4 py-2",children:[t.date,"-",t.month]}),e("td",{className:"border px-4 py-2",children:t.page}),e("td",{className:`border px-4 py-2 ${t.prio==="Prio"?"bg-red-600":"bg-gray-600"}`,children:t.prio}),s("td",{className:"border px-4 py-2",children:[s("h1",{className:"cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform ",onClick:()=>{ye(),J(t.designer),Z(t.designer1),te(t.designer2),se(t.designer3),M(t.subject),oe(t.img1),ne(t.img2),de(t.img3),me(t.img4),E(t.post),$(t.month),O(t.page)},children:[" ","View"," "]}),t.pdf===void 0||t.pdf===""?null:s("h1",{className:"cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform ",onClick:()=>{window.open(t.pdf)},children:[" ","View Pdf"]})]}),e("td",{className:"border px-4 py-2",children:e("form",{onSubmit:()=>{Ne(a)},className:"designer-upload  mr-5 ml-4",children:s("label",{onClick:()=>{E(t.post),$(t.month),O(t.page)},className:"custom-file-upload cursor-pointer text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]",children:[e("input",{type:"file",accept:"image/*",multiple:!0,onChange:ve})," Upload"]})})}),x>8&&e("td",{className:"border px-4 py-2 font-bold",children:t.SendTo}),e("td",{className:"border px-4 py-2",children:e("div",{children:t.designer!==void 0||t.pdf!==void 0?s("button",{onClick:()=>{Ie(a)},className:"bg-slate-800 text-white p-2 rounded-md hover:bg-gray-900 cursor-pointer",children:[" ","Finish"," "]}):null})}),e("td",{className:"border px-4 py-2",children:t.designer!==void 0||t.pdf!==void 0?s("button",{onClick:()=>{Te(),De(t.post),Ce(t.month),Pe(t.page)},className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer",children:[" ","Reset"," "]}):null})]},a):null),ke&&e(I,{children:e("div",{className:"fixed top-0 z-[1000] left-0 w-full h-full bg-slate-400/20 gap-4  flex justify-center items-center",children:s("div",{className:"flex gap-3 flex-col bg-white p-5 rounded-md",children:[e("p",{className:"text-black font-semibold text-xl",children:"Are you sure you want to reset this?"}),e("button",{onClick:()=>{const t=h(u,"DesignerPage"),a=m(t,Se+Re+Ue);T(a,{designer:v(),designer1:v(),designer2:v(),designer3:v(),pdf:v()},{merge:!0}),setTimeout(()=>{P(!1)},500)},className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer",children:"Yes"}),e("button",{onClick:()=>P(!1),className:"bg-green-700 text-white p-2 rounded-md hover:bg-green-800 cursor-pointer",children:"No"})]})})})]})]})})]}),s("div",{className:"fixed bottom-0 bg-slate-200 w-full  ",children:[e("h2",{className:"text-xl ml-4",children:pe}),e("h2",{className:"text-xl ml-4",children:he})]})]}),e(Ae,{open:xe,onClose:j,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"max-w-[80vw] max-h-[80vw]  ",children:e(Le,{sx:ze,children:s(_e,{id:"modal-modal-title",variant:"h6",component:"h2",style:{textAlign:"center"},children:[e("div",{children:e("button",{className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800  mb-5 cursor-pointer",onClick:j,children:"Close"})}),s("section",{className:"flex lg:w-[90vw] flex-row items-center flex-wrap content-center  gap-5 justify-center",children:[e("img",{className:"w-[300px]",src:G}),e("img",{className:"w-[300px]",src:X}),e("img",{className:"w-[300px]",src:ee}),e("img",{className:"w-[300px]",src:ae}),e("hr",{className:"w-full border-2 border-black"}),s("div",{children:[ue.map((t,a)=>s("div",{children:[s("p",{className:"w-[80%] m-auto whitespace-pre-wrap",children:[" ",t]}),e("br",{})]},a)),e("div",{children:s("form",{onSubmit:Me,children:[e("input",{type:"text",value:C,onChange:t=>B(t.target.value),placeholder:"Enter your message here",className:"border-2 border-black p-2 rounded-md"}),e("button",{className:"bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800  ml-1 cursor-pointer",children:"Send"})]})}),s("div",{className:"flex flex-row items-center mt-3",children:[e("img",{className:"w-[200px]",src:re}),e("img",{className:"w-[200px]",src:le}),e("img",{className:"w-[200px]",src:ce}),e("img",{className:"w-[200px]",src:ie})]})]})]})]})})})]})," "]})})}export{Je as default};
