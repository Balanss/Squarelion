import{r as t,a as s,F as g,j as e,b as N}from"./index-fd77fd3f.js";import{N as b}from"./Nav-005c4aac.js";import{u as v}from"./useLogo-9216b0a5.js";const w="/assets/rocket-04ec670c.jpg",y="/assets/fast-47ab88df.jpg",j="/assets/Ai-home-bea1a29e.jpg";function E(){const[l,c]=t.useState(""),[o,i]=t.useState(""),[n,r]=t.useState(""),[m,u]=t.useState(!0),[I,d]=t.useState(0),[x,p]=t.useState(!0);t.useEffect(()=>{d(9999);const a=setTimeout(()=>{u(!1)},800);return()=>clearTimeout(a)},[]);const[f,h]=t.useState("https://source.unsplash.com/random/1600x900/?marketing");return t.useEffect(()=>{const a=setInterval(()=>{p(!0),h(`https://source.unsplash.com/random/1600x900/?technology&t=${Date.now()}`)},12e3);return()=>clearInterval(a)},[]),s(g,{children:[e("div",{className:`${m?"absolute w-full z-[100]":"hidden"}`,children:e(N,{})}),s("div",{className:"relative h-screen",children:[e("div",{className:"absolute z-50 top-2 inset-0 opacity-100",children:e(b,{user:l,level:o,uuid:n,setUser:c,setLevel:i,setUuid:r})}),e("img",{className:`object-cover w-full h-full transition-opacity duration-1000 ${x?"opacity-75":"opacity-0"}`,src:f,alt:"Header Background"}),e("div",{className:"absolute inset-0 bg-black opacity-25"}),s("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center",children:[e("img",{className:"w-[400px] h-[200px]",src:v,alt:"Logo"}),e("h1",{className:"text-5xl text-white font-bold mb-4",children:"Welcome to Squarelion Media Pilot"}),e("p",{className:"text-2xl text-white mb-4",children:"An innovative and rapid marketing solution. Kindly be aware that Media Pilot is currently undergoing internal development."}),s("div",{className:"flex justify-center gap-10",children:[s("span",{className:"flex flex-col ",children:[e("img",{className:"w-[90px] h-[90px] mr-4 rounded-full",src:w,alt:"Logo 1"}),e("p",{className:"text-2xl mt-2 text-white mb-4",children:"Fast"})]}),s("span",{className:"flex flex-col ",children:[e("img",{className:"w-[90px] h-[90px] mr-4 rounded-full",src:y,alt:"Logo 2"}),e("p",{className:"text-2xl mt-2 text-white mb-4",children:"Efficient"})]}),s("span",{className:"flex flex-col ",children:[e("img",{className:"w-[90px] h-[90px] rounded-full",src:j,alt:"Logo 3"}),e("p",{className:"text-2xl mt-2 text-white mb-4",children:"Automation"})]})]})]})]})," "]})}export{E as default};
