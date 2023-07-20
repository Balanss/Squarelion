import{r as n,a as s,F as o,j as t}from"./index-a2688619.js";import{U as z,c as G,_ as C,d as b,b as Q,m as H,y as J}from"./index.esm2017-934110da.js";const k="https://Balanss.github.io/Squarelion/assets/mad-a548d970.png",x="https://Balanss.github.io/Squarelion/assets/angry-41c56047.png",y="https://Balanss.github.io/Squarelion/assets/poker-face-4a70decb.png",S="https://Balanss.github.io/Squarelion/assets/smile-7266816c.png",f="https://Balanss.github.io/Squarelion/assets/star-b68b1eaa.png";function O(){const[l,E]=n.useState(""),[F,U]=n.useState(""),[T,$]=n.useState(""),[r,D]=n.useState([]);n.useEffect(()=>{(async()=>{try{const e=await G(C(b,"survey"+l)),c=[];e.forEach(a=>{const w={id:a.id,...a.data()};w.id!=="open"&&c.push(w)});const m=e.docs.find(a=>a.id==="open");m&&c.push({id:m.id,...m.data()}),D(c)}catch(e){console.error("Error retrieving surveys:",e)}})()},[l]);const[q,N]=n.useState("bus"),[v,d]=n.useState(""),[R,p]=n.useState(""),[j,h]=n.useState(""),[B,u]=n.useState(""),[I,g]=n.useState("");n.useState("");const _=()=>{const e=(r.findIndex(c=>c.id===q)+1)%r.length;N(r[e].id)};function A(i){r.map((e,c)=>{const m=v- -R- -j- -B- -I;if(c===i){const a=C(b,"survey"+l),w=Q(a,e.id);H(w,{rating:v,rating1:R,rating2:j,rating3:B,rating4:I,score:m},{merge:!0})}})}function L(){const i=C(b,"survey"+l),e=Q(i,"open");J(e)}const W=r.filter(i=>i.id==="open"?i.id:null);return s(o,{children:[t(z,{setUser:E,user:l,level:F,setLevel:U,setUuid:$,uuid:T}),t("div",{className:"survey-div",children:s("div",{className:"survey-paper",children:[t("h1",{style:{color:"black"},children:" Squarelion Agency Survey "}),W.length===1?r.map((i,e)=>s("div",{children:[q===i.id&&i.id!=="open"&&s("h2",{style:{color:"black",maginBottom:"60px"},onClick:()=>N(i.id),children:["Topic: ",i.id,"  ",`${e+1} / ${r.length}`," "]}),q===i.id&&i.id!=="open"&&s(o,{children:[t("div",{className:i.question0>""?"questions-tap":"",children:i.question0>""&&s(o,{children:[s("p",{style:{color:"black"},children:["Question 1: ",i.question0]}),s("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>d(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>d(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>d(3)}),t("img",{src:S,style:{width:"30px",cursor:"pointer"},onClick:()=>d(4)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>d(5)})]})]})}),t("div",{className:i.question1>""?"questions-tap":"",children:i.question1>""&&s(o,{children:["   ",s("p",{style:{color:"black"},children:["Question 2: ",i.question1]}),s("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>p(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>p(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>p(3)}),t("img",{src:S,style:{width:"30px",cursor:"pointer"},onClick:()=>p(4)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>p(5)})]})," "]})}),t("div",{className:i.question2>""?"questions-tap":"",children:i.question2>""&&s(o,{children:["  ",s("p",{style:{color:"black"},children:["Question 3: ",i.question2]}),s("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>h(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>h(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>h(3)}),t("img",{src:S,style:{width:"30px",cursor:"pointer"},onClick:()=>h(4)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>h(5)})]})," "]})}),t("div",{className:i.question3>""?"questions-tap":"",children:i.question3>""&&s(o,{children:["  ",s("p",{style:{color:"black"},children:["Question 4: ",i.question3]}),s("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>u(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>u(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>u(3)}),t("img",{src:S,style:{width:"30px",cursor:"pointer"},onClick:()=>u(4)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>u(5)})]})," "]})}),t("div",{className:i.question4>""?"questions-tap":"",children:i.question4>""&&s(o,{children:[s("p",{style:{color:"black"},children:["Question 5: ",i.question4]}),s("div",{className:"emoji-rating",children:[t("img",{src:k,style:{width:"30px",cursor:"pointer"},onClick:()=>g(1)}),t("img",{src:x,style:{width:"30px",cursor:"pointer"},onClick:()=>g(2)}),t("img",{src:y,style:{width:"30px",cursor:"pointer"},onClick:()=>g(3)}),t("img",{src:S,style:{width:"30px",cursor:"pointer"},onClick:()=>g(4)}),t("img",{src:f,style:{width:"30px",cursor:"pointer"},onClick:()=>g(5)})]})]})})]}),q===i.id&&s(o,{children:[" ",i.id==="open"?s("p",{style:{color:"black"},children:["Thank you for finishing Squarelion Survey,",l,"!"]}):null,t("button",{className:"next-btn",onClick:()=>{i.id==="open"?L():(_(),A(e))},children:i.id==="open"?"Finished":"Next"}),"  "]})]},e)):null]})})]})}export{O as default};