import{r as n,R as D,a as s,F as c,j as t,_ as g,g as h,c as u,d as f}from"./index-3d21f9c5.js";import{b as p}from"./SwitchingFromLegacyToNew-c8d875a6.js";import{M as E,B as _}from"./App-1ecd1ebd.js";import"./Nav-2831b8f8.js";import{T as y}from"./Typography-55e1a402.js";import"./Links-dd893bc7.js";import"./Logo-4b9c1084.js";import"./PartnerLogic-ec9267f4.js";import"./Version-13ad4e50.js";const B={position:"absolute",top:"50%",left:"60%",transform:"translate(-50%, -50%)",bgcolor:"ghostwhite",boxShadow:24},F={position:"absolute",top:"100%",left:"63%",transform:"translate(-50%, -50%)",bgcolor:"ghostwhite",boxShadow:24};function P({level:l,page:m,round:b,type:w,show:v}){const[k,N]=n.useState(""),[C,R]=n.useState(""),[S,W]=n.useState(""),[z,H]=n.useState(""),[r,M]=n.useState(!1),[j,x]=D.useState(!1),d=e=>{x(!0),b.map((o,i)=>{i===v&&(N(o.designer),R(o.designer1),W(o.designer2),H(o.designer3))})},I=()=>x(!1);return n.useEffect(()=>{const e=()=>{M(window.innerWidth<639)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),s(c,{children:[b.map((e,o)=>t("div",{children:o===v&&s(c,{children:[e.pdf?t("a",{className:"text-white",href:e.pdf,target:"_blank",rel:"noreferrer",children:" View pdf "}):null,e.designer>""&&t(c,{children:s("span",{className:"flex items-center justify-around ",children:[t("img",{src:e.designer,className:"m-auto mt-[50px]",style:{maxWidth:"20vw",maxHeight:"20vh",cursor:"zoom-in"},onClick:()=>{d()}}),l>8&&t("img",{src:p,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const i=g(f,m),a=h(i,e.id);u(a,{designer:""},{merge:!0})}})]})}),(w==="Stories"||w==="stories")&&s(c,{children:[s("span",{className:"flex items-center justify-around mt-3 mb-2",children:[t("img",{src:e.designer1,style:{maxWidth:"20vw",maxHeight:"20vh",margin:"auto"},onClick:()=>{d()}}),e.designer1&&l>8&&t("img",{src:p,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const i=g(f,m),a=h(i,e.id);u(a,{designer1:""},{merge:!0})}})]}),s("span",{className:"flex items-center justify-around mt-3 mb-3",children:[t("img",{src:e.designer2,style:{maxWidth:"20vw",maxHeight:"20vh",margin:"auto"},onClick:()=>{d()}}),e.designer2>""&&l>8&&t("img",{src:p,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const i=g(f,m),a=h(i,e.id);u(a,{designer2:""},{merge:!0})}})]}),s("span",{className:"flex items-center justify-around",children:[t("img",{src:e.designer3,style:{maxWidth:"20vw",maxHeight:"20vh",margin:"auto"},onClick:()=>{d()}}),e.designer3>""&&l>8&&t("img",{src:p,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const i=g(f,m),a=h(i,e.id);u(a,{designer3:""},{merge:!0})}})]})]})]})},e.id)),t(E,{open:j,onClose:I,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"max-w-[80vw] max-h-[80vw]  ",children:s(_,{sx:r?F:B,children:[s(y,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{mt:2},style:{textAlign:"center"},className:"flex",children:[t("img",{src:k,style:{maxWidth:r?"50vw":"40vw",maxHeight:r?"50vh":"40vh",margin:"auto"}}),t("img",{src:C,style:{maxWidth:r?"50vw":"40vw",maxHeight:r?"50vh":"40vh",margin:"auto"}})]}),s(y,{id:"modal-modal-description",sx:{mt:2},className:"flex",children:[t("img",{src:S,style:{maxWidth:r?"50vw":"40vw",maxHeight:r?"50vh":"40vh",margin:"auto"}}),t("img",{src:z,style:{maxWidth:r?"50vw":"40vw",maxHeight:r?"50vh":"40vh",margin:"auto"}})]})]})})]})}export{P as default};
