import{r as n,a as e,F as o,j as t}from"./index-41a557bc.js";import{U as z,c as G,_ as q,d as b,b as E,m as H,y as J}from"./index.esm2017-9f7bab6f.js";const k="/assets/mad-a548d970.png",x="/assets/angry-41c56047.png",y="/assets/poker-face-4a70decb.png",f="/assets/smile-7266816c.png",w="/assets/star-b68b1eaa.png";function O(){const[l,F]=n.useState(""),[U,T]=n.useState(""),[$,B]=n.useState(""),[c,D]=n.useState([]);n.useEffect(()=>{(async()=>{try{const s=await G(q(b,"survey"+l)),r=[];s.forEach(a=>{const S={id:a.id,...a.data()};S.id!=="open"&&r.push(S)});const g=s.docs.find(a=>a.id==="open");g&&r.push({id:g.id,...g.data()}),D(r)}catch(s){console.error("Error retrieving surveys:",s)}})()},[l]);const[C,N]=n.useState("bus"),[v,d]=n.useState(""),[R,p]=n.useState(""),[j,h]=n.useState(""),[I,u]=n.useState(""),[Q,m]=n.useState("");n.useState("");const _=()=>{const s=(c.findIndex(r=>r.id===C)+1)%c.length;N(c[s].id)};function A(i){c.map((s,r)=>{const g=v- -R- -j- -I- -Q;if(r===i){const a=q(b,"survey"+l),S=E(a,s.id);H(S,{rating:v,rating1:R,rating2:j,rating3:I,rating4:Q,score:g},{merge:!0})}})}function L(){const i=q(b,"survey"+l),s=E(i,"open");J(s)}const W=c.filter(i=>i.id==="open"?i.id:null);return e(o,{children:[t(z,{setUser:F,user:l,level:U,setLevel:T,setUuid:B,uuid:$}),t("div",{className:"survey-div",children:e("div",{className:"survey-paper",children:[t("h1",{style:{color:"black"},children:" Squarelion Agency Survey "}),W.length===1?c.map((i,s)=>e("div",{children:[C===i.id&&i.id!=="open"&&e("h2",{style:{color:"black",maginBottom:"60px"},onClick:()=>N(i.id),children:["Topic: ",i.id,"  ",`${s+1} / ${c.length}`," "]}),C===i.id&&i.id!=="open"&&e(o,{children:[t("div",{className:i.question0>""?"questions-tap":"",children:i.question0>""&&e(o,{children:[e("p",{style:{color:"black"},children:["Question 1: ",i.question0]}),e("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>d(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>d(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>d(3)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>d(4)}),t("img",{src:w,style:{width:"30px",cursor:"pointer"},onClick:()=>d(5)})]})]})}),t("div",{className:i.question1>""?"questions-tap":"",children:i.question1>""&&e(o,{children:["   ",e("p",{style:{color:"black"},children:["Question 2: ",i.question1]}),e("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>p(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>p(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>p(3)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>p(4)}),t("img",{src:w,style:{width:"30px",cursor:"pointer"},onClick:()=>p(5)})]})," "]})}),t("div",{className:i.question2>""?"questions-tap":"",children:i.question2>""&&e(o,{children:["  ",e("p",{style:{color:"black"},children:["Question 3: ",i.question2]}),e("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>h(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>h(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>h(3)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>h(4)}),t("img",{src:w,style:{width:"30px",cursor:"pointer"},onClick:()=>h(5)})]})," "]})}),t("div",{className:i.question3>""?"questions-tap":"",children:i.question3>""&&e(o,{children:["  ",e("p",{style:{color:"black"},children:["Question 4: ",i.question3]}),e("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>u(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>u(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>u(3)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>u(4)}),t("img",{src:w,style:{width:"30px",cursor:"pointer"},onClick:()=>u(5)})]})," "]})}),t("div",{className:i.question4>""?"questions-tap":"",children:i.question4>""&&e(o,{children:[e("p",{style:{color:"black"},children:["Question 5: ",i.question4]}),e("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>m(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>m(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>m(3)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>m(4)}),t("img",{src:w,style:{width:"30px",cursor:"pointer"},onClick:()=>m(5)})]})]})})]}),C===i.id&&e(o,{children:[" ",i.id==="open"?e("p",{style:{color:"black"},children:["Thank you for finishing Squarelion Survey,",l,"!"]}):null,t("button",{className:"next-btn",onClick:()=>{i.id==="open"?L():(_(),A(s))},children:i.id==="open"?"Finished":"Next"}),"  "]})]},s)):null]})})]})}export{O as default};
