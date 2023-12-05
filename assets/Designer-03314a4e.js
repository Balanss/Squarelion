import{r as s,a as r,F as I,j as e,R as Fe,U as je,_ as h,g as m,c as P,m as N,h as L,d as u,y as Be,Q as $e,K as v}from"./index-b63f7435.js";import{N as Ee,r as _,g as z,u as V,a as K}from"./Nav-c76ed5c5.js";import{T as Oe,D as Ae,M as Le,B as _e}from"./App-da86dc9d.js";import{T as ze}from"./Typography-ac7e52f8.js";function Ve(){const[b,R]=s.useState(!1);return r(I,{children:[r("div",{className:"border-yellow-500 border-t-2 mt-3 bg-slate-700 flex items-center w-full justify-center gap-10 p-5",children:[e("h1",{className:"text-4xl font-sans font-bold text-slate-200 text-center ",children:"Squarelion Designer Page"}),e("div",{className:"text-center bg-slate-700 ",children:e("button",{onClick:()=>R(!b),style:{backgroundColor:"#f8f9fa",color:"#333",border:"1px solid #ced4da",borderRadius:"4px",padding:"10px 20px",fontSize:"16px",cursor:"pointer",transition:"all 0.3s ease"},onMouseOver:f=>f.currentTarget.style.backgroundColor="#e9ecef",onMouseOut:f=>f.currentTarget.style.backgroundColor="#f8f9fa",children:b?"Close tooltip":"Open tooltip"})}),e("h6",{className:"fixed bottom-1 left-2 text-[10px] text-white",children:"V 0.4"})]}),e("div",{children:b&&r("article",{className:"flex flex-row items-stretch justify-around w-full h-full p-10 bg-gray-100  dark:bg-slate-700",children:[r("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click upload image"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 1"})]}),r("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Click finish to complete"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Step 2"})]}),r("div",{className:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"To see the instructions click on the view button"}),e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"For now you can only upload 4 image at a time and 1 pdf file"}),e("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:"Note"})]})]})})]})}const Ke={position:"absolute",bottom:"0",top:"35%",left:"60%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,overflow:"scroll"};function Xe(){const[b,R]=s.useState([]),[f,Q]=s.useState(""),[d,W]=s.useState(""),[Y,q]=s.useState(""),[x,H]=s.useState(""),[G,J]=s.useState(""),[X,Z]=s.useState(""),[ee,te]=s.useState(""),[ae,se]=s.useState(""),[re,oe]=s.useState(""),[le,ne]=s.useState(""),[ce,de]=s.useState(""),[ie,me]=s.useState(""),[pe,ge]=s.useState(""),[he,y]=s.useState(""),[ue,M]=s.useState([]),[Qe,be]=s.useState([]),[We,fe]=s.useState([]),[xe,F]=Fe.useState(!1),ye=()=>F(!0),j=()=>F(!1),[C,B]=s.useState("");s.useState([]);const[Ye,we]=s.useState(),T=b.filter(t=>x!==11?!t.id.endsWith("Test"):!0);function Ne(t){T.map((a,p)=>{if(t===p){const n=f,i=_(z(),`products/${n.name}`),l=V(i,n);l.on("state_changed",c=>{const g=c.bytesTransferred/c.totalBytes*100;ge(`Uploading ${g}%`)},c=>{console.error(c)},async()=>{const c=await K(l.snapshot.ref),g=h(u,"DesignerPage"),o=m(g,a.post+a.month+a.page),w=n.type==="application/pdf"?"pdf":"designer",A={};A[w]=c,await P(o,A,{merge:!0}),console.log("success"),y(`${w.toUpperCase()} has been uploaded. Click view button to view ${w}!`),setTimeout(()=>{y("")},7e3)})}else return console.log("error")})}const[k,$]=s.useState(""),[S,E]=s.useState(""),[D,O]=s.useState("");s.useState(!1);const ve=async t=>{const a=t.target.files;if(!a||a.length>4){alert("You can only upload a maximum of 4 files at once.");return}const p=Array.from(a).map(n=>{const i=_(z(),`products/${name}/${n.name}`),l=V(i,n);return new Promise((c,g)=>{l.on("state_changed",o=>{const w=o.bytesTransferred/o.totalBytes*100;y(`Uploading ${w}%`)},o=>{console.error("Upload Error:",o),g(o)},async()=>{const o=await K(l.snapshot.ref);c({url:o,type:n.type})})})});try{const n=await Promise.all(p),i=n.filter(o=>o.type==="application/pdf").map(o=>o.url),l=n.filter(o=>o.type.startsWith("image/")).map(o=>o.url),c={designer:l[0]||"",designer1:l[1]||"",designer2:l[2]||"",designer3:l[3]||""},g={pdf:i[0]||""};if(l[0]){const o={...c,DesignedUploadedBy:d};await N(m(L,"DesignerPage",k+S+D),o,{merge:!0})}else if(i[0]){const o={...g,DesignedUploadedBy:d};await N(m(L,"DesignerPage",k+S+D),o,{merge:!0})}be(l),fe(a),y("Files have been uploaded. Click view button to view them!"),setTimeout(()=>{y("")},7e3)}catch(n){console.error("Error updating Firestore:",n)}},[ke,U]=s.useState(!1),[Se,De]=s.useState(""),[Re,Ce]=s.useState(""),[Te,Ue]=s.useState("");function Pe(){U(!0)}function Ie(t){T.map((a,p)=>{if(t===p){if(console.log("success",a.post),a.month.includes("2023")){const l=h(u,a.page),c=m(l,a.post+a.month);N(c,{designer:a.designer,designer1:a.designer1,designer2:a.designer2,designer3:a.designer3,pdf:a.pdf||"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:d},{merge:!0})}else{const l=h(u,a.page),c=m(l,a.month);N(c,{[a.post+a.month]:{designer:a.designer,designer1:a.designer1,designer2:a.designer2,designer3:a.designer3,pdf:a.pdf||"",hide:!0,color:"#00eaff",status:"Design Done",StatusText:"Design Done",DesignUploadedBy:d}},{merge:!0})}const n=h(u,"DesignerPage"),i=m(n,a.post+a.month+a.page);Be(i),Q("")}else return console.log("error")})}const Me=async t=>{t.preventDefault();const a=h(u,"DesignerPage"),p=m(a,k+S+D);P(p,{subject:$e(C+" - "+d),New:!1});const n=h(u,D),i=m(n,k+S);N(i,{color:"#FF4500",status:"Feedback ",StatusText:"Feedback"},{merge:!0}),M(l=>[...l,C+" - "+d]),setTimeout(()=>{B("")},2e3)};return e(I,{children:r("div",{className:" min-h-[100vh] pb-10 bg-slate-800",children:[e(Ee,{})," ",r("div",{className:"",children:[e(je,{user:d,setUser:W,setUuid:q,uuid:Y,setLevel:H}),e(Oe,{}),e("section",{children:e(Ve,{level:x})}),r("div",{className:" pt-[50px]",children:[r("div",{className:"flex flex-col items-center",children:[e(Ae,{setDesignerData:R,designerData:b,user:d,setNoti:we}),e("section",{children:r("table",{className:"w-full text-sm text-left text-gray-300 shadow-md shadow-slate-800",children:[e("thead",{className:'className="text-xs  uppercase  bg-gray-700 text-gray-200',children:r("tr",{className:"text-center",children:[e("th",{className:"p-[1px]"}),e("th",{className:"px-4 py-2",children:"Image"}),e("th",{className:"px-4 py-2",children:"Date"}),e("th",{className:"px-4 py-2",children:"Client"}),e("th",{className:"px-4 py-2",children:"Priority"}),e("th",{className:"px-4 py-2",children:"Instructions"}),e("th",{className:"px-4 py-2",children:"Actions"}),x>8&&e("th",{className:"px-4 py-2",children:"Assigned"}),e("th",{className:"px-4 py-2",children:"Send"}),e("th",{className:"px-4 py-2",children:"Reset"}),e("th",{})]})}),r("tbody",{children:[T.map((t,a)=>(t.SendTo===d||x>9||d==="Saskia")&&t.hide!==!0?r("tr",{className:"border-b bg-gray-600 border-gray-700 shadow-md  shadow-black",children:[e("td",{className:`${t.New?"border-l-[5px] border-blue-700  animate-pulse animate-thrice animate-duration-[3000ms] animate-ease-out ":""} `}),e("td",{className:"border px-4 py-2",children:e("img",{src:t.img,className:"w-[50px] h-[50px] rounded-md mr-4"})}),r("td",{className:"border px-4 py-2",children:[t.date,"-",t.month]}),e("td",{className:"border px-4 py-2",children:t.page}),e("td",{className:`border px-4 py-2 ${t.prio==="Prio"?"bg-red-600":"bg-gray-600"}`,children:t.prio}),r("td",{className:"border px-4 py-2",children:[r("h1",{className:"cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform ",onClick:()=>{ye(),J(t.designer),Z(t.designer1),te(t.designer2),se(t.designer3),M(t.subject),oe(t.img1),ne(t.img2),de(t.img3),me(t.img4),$(t.post),E(t.month),O(t.page)},children:[" ","View"," "]}),t.pdf===void 0||t.pdf===""?null:r("h1",{className:"cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform ",onClick:()=>{window.open(t.pdf)},children:[" ","View Pdf"]})]}),e("td",{className:"border px-4 py-2",children:e("form",{onSubmit:()=>{Ne(a)},className:"designer-upload  mr-5 ml-4",children:r("label",{onClick:()=>{$(t.post),E(t.month),O(t.page)},className:"custom-file-upload cursor-pointer text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]",children:[e("input",{type:"file",accept:"image/*",multiple:!0,onChange:ve})," Upload"]})})}),x>8&&e("td",{className:"border px-4 py-2 font-bold",children:t.SendTo}),e("td",{className:"border px-4 py-2",children:e("div",{children:t.designer!==void 0||t.pdf!==void 0?r("button",{onClick:()=>{Ie(a)},className:"bg-slate-800 text-white p-2 rounded-md hover:bg-gray-900 cursor-pointer",children:[" ","Finish"," "]}):null})}),e("td",{className:"border px-4 py-2",children:t.designer!==void 0||t.pdf!==void 0?r("button",{onClick:()=>{Pe(),De(t.post),Ce(t.month),Ue(t.page)},className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer relative z-[2]",children:[" ","Reset"," "]}):null})]},a):null),ke&&e(I,{children:e("div",{className:"fixed top-0 z-[1000] left-0 w-full h-full bg-slate-400/20 gap-4  flex justify-center items-center",children:r("div",{className:"flex gap-3 flex-col bg-white p-5 rounded-md",children:[e("p",{className:"text-black font-semibold text-xl",children:"Are you sure you want to reset this?"}),e("button",{onClick:()=>{const t=h(u,"DesignerPage"),a=m(t,Se+Re+Te);P(a,{designer:v(),designer1:v(),designer2:v(),designer3:v(),pdf:v()},{merge:!0}),setTimeout(()=>{U(!1)},500)},className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer",children:"Yes"}),e("button",{onClick:()=>U(!1),className:"bg-green-700 text-white p-2 rounded-md hover:bg-green-800 cursor-pointer",children:"No"})]})})})]})]})})]}),r("div",{className:"fixed bottom-0 bg-slate-200 w-full  ",children:[e("h2",{className:"text-xl ml-4",children:pe}),e("h2",{className:"text-xl ml-4",children:he})]})]}),e(Le,{open:xe,onClose:j,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"max-w-[80vw] max-h-[80vw]  ",children:e(_e,{sx:Ke,children:r(ze,{id:"modal-modal-title",variant:"h6",component:"h2",style:{textAlign:"center"},children:[e("div",{children:e("button",{className:"bg-red-700 text-white p-2 rounded-md hover:bg-red-800  mb-5 cursor-pointer",onClick:j,children:"Close"})}),r("section",{className:"flex lg:w-[90vw] flex-row items-center flex-wrap content-center  gap-5 justify-center",children:[e("img",{className:"w-[300px]",src:G}),e("img",{className:"w-[300px]",src:X}),e("img",{className:"w-[300px]",src:ee}),e("img",{className:"w-[300px]",src:ae}),e("hr",{className:"w-full border-2 border-black"}),r("div",{children:[ue.map((t,a)=>r("div",{children:[r("p",{className:"w-[80%] m-auto whitespace-pre-wrap",children:[" ",t]}),e("br",{})]},a)),e("div",{children:r("form",{onSubmit:Me,children:[e("input",{type:"text",value:C,onChange:t=>B(t.target.value),placeholder:"Enter your message here",className:"border-2 border-black p-2 rounded-md"}),e("button",{className:"bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800  ml-1 cursor-pointer",children:"Send"})]})}),r("div",{className:"flex flex-row items-center mt-3",children:[e("img",{className:"w-[200px]",src:re}),e("img",{className:"w-[200px]",src:le}),e("img",{className:"w-[200px]",src:ce}),e("img",{className:"w-[200px]",src:ie})]})]})]})]})})})]})," "]})})}export{Xe as default};