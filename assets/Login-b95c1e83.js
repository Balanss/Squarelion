import{r as s,u as S,a as n,j as e,U as y,N as I,b as l,g as m,f as k}from"./index-0152fa2a.js";import{s as A}from"./Logo-4b9c1084.js";function U(){const[r,g]=s.useState(""),[c,h]=s.useState(""),[p,f]=s.useState(""),[j,x]=s.useState(""),[C,b]=s.useState(""),[v,w]=s.useState(""),[N,i]=s.useState(""),a=S(),[u,d]=s.useState(!1);return n("div",{children:[e(y,{setUser:f,user:p,setUuid:x,setIsAccepted:b,level:v,setLevel:w}),e(I,{}),n("div",{className:"fixed w-[100%] h-[100%] bg-sky-100 ",children:[e("div",{className:"",children:n("div",{className:"bottom-[250px] md:w-[4/5] absolute inset-0 flex items-center justify-center flex-col sm:flex-row pt-20 ",children:[e("img",{src:A,className:"h-[0] w-[0] sm:h-[375px] sm:w-[375px]   "}),n("form",{className:"flex flex-col h-[400px] items-center justify-around w-[300px] bg-slate-600 sm:h-[375px] sm:w-[375px]  ",onSubmit:t=>{t.preventDefault(),r&&c!==""&&l.signInWithEmailAndPassword(r,c).then(()=>{i("Sucessfully logged in"),d(!0),setTimeout(()=>{d(!1)},1e3),setTimeout(()=>{i(""),a("/")},2e3)}).catch(o=>console.log("error"))},children:[e("input",{type:"text",placeholder:"email",onChange:t=>g(t.target.value)}),e("input",{type:"text",placeholder:"password",onChange:t=>h(t.target.value)}),n("div",{className:"sm:text-center sm:mt-10",children:[e("button",{disabled:u,className:`${u?"opacity-50 cursor-not-allowed from-blue-500 via-blue-600 to-blue-700":"bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"} text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5`,children:"Login"}),e("button",{onClick:()=>a("/signup"),className:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:"Sign-up"}),e("div",{className:"mt-3",children:n("button",{onClick:()=>{l.signInWithPopup(m).then(t=>{t.user.displayName?(i("Sucessfully logged in"),setTimeout(()=>{i(""),a("/")},2e3)):l.signInWithPopup(m).then(o=>{i("Awaiting approval "),k.collection("admin").doc(o.user.uid).set({Name:o.user.displayName,Email:o.user.email,accepted:"no",level:0,noti:0})}).catch(o=>{console.error(o)})}).catch(t=>{console.error(t)})},className:"text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2",children:[e("svg",{className:"w-4 h-4 mr-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 19",children:e("path",{fillRule:"evenodd",d:"M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z",clipRule:"evenodd"})}),"Sign in with Google"]})})]}),n("h2",{className:"text-2xl text-white text-center",children:["  ",N," "]})]})]})}),e("div",{className:"success-msg",children:"   "})]})]})}export{U as default};
