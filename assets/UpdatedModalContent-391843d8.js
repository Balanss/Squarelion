import{r as d,R as C,a as r,F as c,j as i,_ as D,h as j,m as y,i as S}from"./index-1894bab0.js";import{b as t}from"./SwitchingFromLegacyToNew-45ad7779.js";import"./Nav-8bc968d1.js";import"./unseen-6b8fd270.js";import"./Links-2cbc71db.js";import"./Logo-4b9c1084.js";import"./ReactToastify-5abdc891.js";import"./Version-8350ff10.js";function J({level:M,page:h,round:g,type:I,show:u,month:p,post:m}){const[R,f]=d.useState(""),[z,w]=d.useState(""),[E,b]=d.useState(""),[F,k]=d.useState(""),[L,N]=d.useState(!1),[O,v]=C.useState(!1),o=e=>{v(!0),g.map((s,l)=>{l===u&&(f(s.designer),w(s.designer1),b(s.designer2),k(s.designer3))})};d.useEffect(()=>{const e=()=>{N(window.innerWidth<639)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const n=e=>{const s=D(S,h),l=j(s,p);y(l,{[m+p]:{[e]:""}},{merge:!0})};return r(c,{children:g.map((e,s)=>{const l="auto",a="auto";return r("div",{className:"inline-flex pb-[50px] pt-[50px] gap-6 flex-wrap items-center justify-center m-auto",children:s===u&&r(c,{children:e.designer&&r(c,{children:i("div",{className:"flex flex-col gap-y-2",children:[e&&e.designer&&(e.designer.includes(".jpg")||e.designer.includes(".png")||e.designer.includes(".gif")||e.designer.includes(".jpeg"))?r("div",{className:"flex flex-col gap-y-2",children:i("span",{className:"flex flex-row",children:[r("img",{src:e.designer,style:{width:l,height:a},onClick:()=>{o()}}),r("img",{src:t,alt:"Delete",className:"bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8 h-8",onClick:()=>n("designer")})]})}):e.designer&&i("span",{className:"flex flex-row gap-x-2 text-white",children:[r("a",{href:e.designer,download:!0,children:"Download"})," ",r("img",{src:t,alt:"Delete",className:"bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8",onClick:()=>n(e.designer)})]}),e&&e.designer1&&(e.designer1.includes(".jpg")||e.designer1.includes(".png")||e.designer1.includes(".gif")||e.designer1.includes(".jpeg"))?i("span",{className:"flex flex-row",children:[r("img",{src:e.designer1,style:{width:l,height:a},onClick:()=>{o()}}),r("img",{src:t,alt:"Delete",className:"bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8 h-8",onClick:()=>n("designer1")})]}):e.designer1&&i("span",{className:"flex flex-row gap-x-2 text-white",children:[r("a",{href:e.designer1,download:!0,children:"Download"})," ",r("img",{src:t,alt:"Delete",className:"bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8",onClick:()=>n(e.designer1)})]}),e&&e.designer2&&(e.designer2.includes(".jpg")||e.designer2.includes(".png")||e.designer2.includes(".gif")||e.designer2.includes(".jpeg"))?i("span",{className:"flex flex-row",children:[r("img",{src:e.designer2,style:{width:l,height:a},onClick:()=>{o()}}),r("img",{src:t,alt:"Delete",className:"bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8 h-8",onClick:()=>n("designer2")})]}):e.designer2&&i("span",{className:"flex flex-row gap-x-2 text-white",children:[r("a",{href:e.designer2,download:!0,children:"Download"})," ",r("img",{src:t,alt:"Delete",className:"bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8",onClick:()=>n(e.designer2)})]}),e&&e.designer3&&(e.designer3.includes(".jpg")||e.designer3.includes(".png")||e.designer3.includes(".gif")||e.designer3.includes(".jpeg"))?i("span",{className:"flex flex-row",children:[r("img",{src:e.designer3,style:{width:l,height:a},onClick:()=>{o()}}),r("img",{src:t,alt:"Delete",className:"bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8 h-8",onClick:()=>n("designer3")})]}):e.designer3&&i("span",{className:"flex flex-row gap-x-2 text-white",children:[r("a",{href:e.designer3,download:!0,children:"Download"})," ",r("img",{src:t,alt:"Delete",className:"bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8",onClick:()=>n(e.designer3)})]})]})})})},s)})})}export{J as default};
