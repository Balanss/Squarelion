import{j as s,a as n,_ as d,g as i,m as k,y as M,c as $,d as m}from"./index-02cb2f0f.js";import{M as C,B as T}from"./DesignerFunctions-3d6dc44b.js";import{T as _}from"./Typography-421bd3cb.js";import"./Nav-a070d632.js";function G({openModalBar:x,handleCloseBar:p,styleBar:b,title:a,forPost:u,setEditDetails:y,editDetails:l,page:o,month:e,post:f,uniqueId:h,objective:N,type:v,boosting:R,date:w,viewer:A,level:B}){function E(g){if(a==="count"){const c=d(m,o),r=i(c,l+e);k(r,{client:o,color:"orange",count:l,date:w,month:e,objective:N,priority:"No",status:"pending",type:v,unid:h,boosting:R},{merge:!0});const t=d(m,o),j=i(t,f+e);M(j)}else{const c=d(m,o),r=i(c,e),t=`${f+e}.${a}`;$(r,{[t]:l},{merge:!0})}p()}return s(C,{open:x,onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"max-w-[80vw] max-h-[80vw]  ",children:s(T,{sx:b,className:"lg:!top-[50%] 0",children:n(_,{id:"modal-modal-title",variant:"h6",component:"h2",style:{textAlign:"center"},className:"flex flex-col gap-5",children:[n("p",{className:"cursor-pointer",children:[" ","Edit ",a," : ",u," "]}),s("input",{type:"text",className:"border-2 border-black  ",placeholder:`Editing ${u}`,onChange:g=>y(g.target.value)}),n("button",{className:"bg-blue-700 text-white px-3 py-2 rounded-md ml-3",onClick:()=>{E()},children:[" ","Submit"," "]})]})})})}export{G as default};