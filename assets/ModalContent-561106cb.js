import{r as m,R as z,a as s,F as c,j as e,_ as d,g,c as h,d as u}from"./index-42deaaf8.js";import{b as p}from"./Page-276e9fa8.js";import"./quill.snow-7a2211e7.js";import{M as D,B as I}from"./Box-5330965c.js";import"./Nav-6dbdd2d4.js";import{T as w}from"./Typography-a9ad73fe.js";import"./Version-d1b7eda5.js";import"./Logo-4b9c1084.js";import"./PartnerLogic-8a18dbfd.js";const B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"ghostwhite",boxShadow:24};function K({level:o,page:l,round:f,type:y,show:b}){const[v,k]=m.useState(""),[N,C]=m.useState(""),[R,H]=m.useState(""),[W,j]=m.useState(""),[S,x]=z.useState(!1),n=t=>{x(!0),f.map((i,a)=>{a===b&&(k(i.designer),C(i.designer1),H(i.designer2),j(i.designer3))})},M=()=>x(!1);return s(c,{children:[f.map((t,i)=>e("div",{children:i===b&&s(c,{children:[t.designer>""&&e(c,{children:s("span",{className:"flex items-center justify-around ",children:[e("img",{src:t.designer,className:"m-auto mt-[50px]",style:{maxWidth:"200px",maxHeight:"200px",cursor:"zoom-in"},onClick:()=>{n()}}),o>8&&e("img",{src:p,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const a=d(u,l),r=g(a,t.id);h(r,{designer:""},{merge:!0})}})]})}),y==="Stories"&&s(c,{children:[s("span",{className:"flex items-center justify-around mt-3",children:[e("img",{src:t.designer1,style:{maxWidth:"20vw",maxHeight:"20vh",margin:"auto"},onClick:()=>{n()}}),t.designer1&&o>8&&e("img",{src:p,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const a=d(u,l),r=g(a,t.id);h(r,{designer1:""},{merge:!0})}})]}),s("span",{className:"flex items-center justify-around",children:[e("img",{src:t.designer2,style:{maxWidth:"20vw",maxHeight:"20vh",margin:"auto"},onClick:()=>{n()}}),t.designer2>""&&o>8&&e("img",{src:p,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const a=d(u,l),r=g(a,t.id);h(r,{designer2:""},{merge:!0})}})]}),s("span",{className:"flex items-center justify-around",children:[e("img",{src:t.designer3,style:{maxWidth:"20vw",maxHeight:"20vh",margin:"auto"},onClick:()=>{n()}}),t.designer3>""&&o>8&&e("img",{src:p,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const a=d(u,l),r=g(a,t.id);h(r,{designer3:""},{merge:!0})}})]})]})]})},t.id)),e(D,{open:S,onClose:M,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"max-w-[80vw] max-h-[80vw]  ",children:s(I,{sx:B,children:[s(w,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{mt:2},style:{textAlign:"center"},className:"flex",children:[e("img",{src:v,style:{maxWidth:"50vw",maxHeight:"50vh",margin:"auto"}}),e("img",{src:N,style:{maxWidth:"50vw",maxHeight:"50vh",margin:"auto"}})]}),s(w,{id:"modal-modal-description",sx:{mt:2},className:"flex",children:[e("img",{src:R,style:{maxWidth:"50vw",maxHeight:"50vh",margin:"auto"}}),e("img",{src:W,style:{maxWidth:"50vw",maxHeight:"50vh",margin:"auto"}})]})]})})]})}export{K as default};
