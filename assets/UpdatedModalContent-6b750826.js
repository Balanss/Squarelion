import{r as c,R as D,j as s,F as b,a as d,_ as h,g as p,m as w,d as k}from"./index-b68e2a5d.js";import{b as v}from"./SwitchingFromLegacyToNew-43d2b269.js";import"./Nav-941606ea.js";import"./App-f43a2b72.js";import"./Links-2659aafc.js";import"./Logo-4b9c1084.js";import"./PartnerLogic-d484259e.js";import"./Version-f69dcbed.js";import"./Typography-0c13a155.js";function P({level:o,page:g,round:R,type:N,show:C,month:i,post:m}){const[E,y]=c.useState(""),[_,j]=c.useState(""),[F,z]=c.useState(""),[L,S]=c.useState(""),[O,M]=c.useState(!1),[W,I]=D.useState(!1),u=e=>{I(!0),R.map((l,f)=>{f===C&&(y(l.designer),j(l.designer1),z(l.designer2),S(l.designer3))})};return c.useEffect(()=>{const e=()=>{M(window.innerWidth<639)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),s(b,{children:R.map((e,l)=>{const f=[e.designer,e.designer1,e.designer2,e.designer3].filter(Boolean).length;let t;switch(f){case 1:t="60vw";break;case 2:t="45vw";break;case 3:t="30vw";break;case 4:t="20vw";break;default:t="20vw"}let r;switch(f){case 1:r="80vh";break;case 2:r="60vh";break;case 3:r="40vh";break;case 4:r="30vh";break;default:r="30vh"}return s("div",{className:"inline-flex pb-[50px] pt-[50px] gap-6 flex-wrap items-center  justify-center m-auto",children:l===C&&d(b,{children:[e.pdf?s("a",{className:"text-white",href:e.pdf,target:"_blank",rel:"noreferrer",children:" View pdf "}):null,e.designer>""&&s(b,{children:d("span",{className:"flex items-end justify-end ",children:[s("img",{src:e.designer,style:{width:t,height:r},onClick:()=>{u()}}),o>8&&s("img",{src:v,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const a=h(k,g),n=p(a,i);w(n,{[m+i]:{designer:""}},{merge:!0})}})]})}),N==="Stories"&&d(b,{children:[e.designer1>""&&o>8&&d("span",{className:"flex items-end justify-end  ",children:[s("img",{src:e.designer1,style:{width:t,height:r},onClick:()=>{u()}}),s("img",{src:v,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const a=h(k,g),n=p(a,i);w(n,{[m+i]:{designer1:""}},{merge:!0})}})]}),e.designer2>""&&o>8&&d("span",{className:"flex items-end justify-end ",children:[s("img",{src:e.designer2,style:{width:t,height:r},onClick:()=>{u()}}),s("img",{src:v,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const a=h(k,g),n=p(a,i);w(n,{[m+i]:{designer2:""}},{merge:!0})}})]}),e.designer3>""&&o>8&&d("span",{className:"flex items-end justify-end",children:[s("img",{src:e.designer3,style:{maxWidth:t,height:r,margin:"auto"},onClick:()=>{u()}}),s("img",{src:v,alt:"Delete",className:"absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10",onClick:()=>{const a=h(k,g),n=p(a,i);w(n,{[m+i]:{designer3:""}},{merge:!0})}})]})]})]})},e.id)})})}export{P as default};