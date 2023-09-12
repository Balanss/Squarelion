import{r,a as o,j as t}from"./index-08321b18.js";import{_ as N,b as C,c as K,d as D,m as O,f as V}from"./index.esm2017-11e8e1f2.js";import{M as v}from"./Modal-b237895d.js";import{B as S}from"./Box-0c9e546f.js";import{T as w}from"./Typography-ea5ae010.js";const E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function te(){const[y,i]=r.useState(""),[k,c]=r.useState("");r.useState("");const[A,p]=r.useState(""),[R,u]=r.useState(""),[I,h]=r.useState(""),[P,b]=r.useState(""),[T,g]=r.useState(""),[q,f]=r.useState(!1),[j,m]=r.useState(""),[B,n]=r.useState("waitingg"),[M,l]=r.useState("waiting");function U(){f(!0)}function L(e){e.preventDefault();const s=N(D,"sqlProperties"),a=C(s,y);O(a,{Name:y,Email:k,ammount:A,domeinName:R,expireDate:I,renewDate:P,info:T},{merge:!0}),m("Added"),setTimeout(()=>{f(!1),m(""),i(""),c(""),p(""),u(""),h(""),b(""),g("")},2e3)}const[_,Q]=r.useState([]),$=async()=>{try{return V.collection("sqlProperties").onSnapshot(async s=>{const a=s.docs.map(d=>({id:d.id,...d.data()}));a.sort((d,G)=>{const H=parseInt(d.id.split("-")[0]),J=parseInt(G.id.split("-")[0]);return H-J}),Q(a)})}catch(e){console.error(e)}};r.useEffect(()=>{$()},[]);const[z,x]=r.useState(!1);function F(){x(!0)}return o("div",{className:"flex flex-col items-end ml-[20px] ",children:[o("section",{children:[t("div",{className:"mt-10 text-5xl ",children:"SQL Properties"}),o("div",{children:[t("button",{onClick:U,children:" ADD "}),t(v,{open:q,onClose:()=>f(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t(S,{sx:E,children:t(w,{id:"modal-modal-title",variant:"h6",component:"h2",children:o("form",{className:"flex flex-col ",onSubmit:L,children:[t("input",{type:"text",placeholder:"Name",className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:e=>i(e.target.value)}),t("input",{type:"text",placeholder:"Email",className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:e=>c(e.target.value)}),t("input",{type:"text",placeholder:"Amount",className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:e=>p(e.target.value)}),t("input",{type:"text",placeholder:"Domein Name",className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:e=>u(e.target.value)}),t("input",{type:"text",placeholder:"Expire Date",className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:e=>h(e.target.value)}),t("input",{type:"text",placeholder:"Renew Date",className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:e=>b(e.target.value)}),t("input",{type:"text",placeholder:"Info",className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:e=>g(e.target.value)}),t("button",{className:"border-2 border-gray-300 rounded-md p-2 mt-5 bg-blue-500 hover:bg-blue-700",children:"Submit"}),o("h2",{children:["  ",j," "]})]})})})})]})]}),t("section",{className:"mt-10 flex gap-4",children:_.map((e,s)=>o("div",{className:"border-2 border-gray-300 bg-slate-500 rounded-md p-2 mt-5 min-w-[300px] max-w-[400px] overflow-scroll",children:[o("h2",{className:"mt-2 mb-2 text-2xl",children:["Name: ",e.Name]}),o("h2",{className:"mt-2 mb-2 text-2xl",children:["Email:  ",e.Email]}),o("h2",{className:"mt-2 mb-2 text-2xl",children:["Amount:  ",e.ammount]}),o("a",{className:"mt-2 mb-2 cursor-pointer text-2xl",href:`https://${e.domeinName}`,children:["Domein: ",e.domeinName]}),o("h2",{className:"mt-2 mb-2 text-2xl",children:["Expiry Date: ",e.expireDate]}),o("h2",{className:"mt-2 mb-2 text-2xl",children:["Renew Date:  ",e.renewDate]}),o("h2",{className:"mt-2 mb-2 text-2xl",children:["Login-Details:  ",e.info]}),t("button",{onClick:()=>{F()},children:"EDIT"}),t(v,{open:z,onClose:()=>x(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t(S,{sx:E,children:t(w,{id:"modal-modal-title",variant:"h6",component:"h2",children:o("form",{className:"flex flex-col ",children:[t("input",{type:"text",placeholder:e.Email,className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:a=>l(a.target.value),onClick:()=>n("Email")}),t("input",{type:"text",placeholder:e.ammount,className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:a=>l(a.target.value),onClick:()=>n("ammount")}),t("input",{type:"text",placeholder:e.domeinName,className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:a=>l(a.target.value),onClick:()=>n("domeinName")}),t("input",{type:"text",placeholder:e.expireDate,className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:a=>l(a.target.value),onClick:()=>n("expireDate")}),t("input",{type:"text",placeholder:e.renewDate,className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:a=>l(a.target.value),onClick:()=>n("renewDate")}),t("input",{type:"text",placeholder:e.info,className:"border-2 border-gray-300 rounded-md p-2 mt-5",onChange:a=>l(a.target.value),onClick:()=>n("info")}),t("button",{className:"border-2 border-gray-300 rounded-md p-2 mt-5 bg-blue-500 hover:bg-blue-700 ",onClick:()=>{const a=N(D,"sqlProperties"),d=C(a,e.Name);K(d,{[B]:M}),m("Updated"),setTimeout(()=>{x(!1),m(""),i(""),c(""),p(""),u(""),h(""),b(""),g(""),n(""),l("")},2e3)},children:" Update"})]})})})})]},s))})]})}export{te as default};
