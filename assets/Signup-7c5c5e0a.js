import{j as e,F as d,a as s,r as n,u as j,U as A,b as c,h as u,f as E}from"./index-79292528.js";import{N as L}from"./Nav-599d8571.js";import{s as F}from"./Logo-4b9c1084.js";function M({setCode:a,code:l}){return e(d,{children:e("div",{className:"fixed w-[100%] h-[100%] bg-sky-100 ",children:e("div",{className:" absolute inset-0 flex flex-col items-center flex-wrap justify-center",children:s("div",{className:"text-center p-20 rounded-sm bg-slate-400",children:[e("h2",{className:"text-3xl mb-10",children:" Enter Code "}),e("input",{type:"number",onChange:r=>a(r.target.value)}),e("br",{}),s("button",{className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:()=>a(l),style:{marginTop:"15px"},children:[" Enter   ",e("svg",{className:"ml-3 w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})})]})]})})})})}function q(){const[a,l]=n.useState(""),[r,m]=n.useState(""),[h,g]=n.useState(""),[U,p]=n.useState(""),[I,b]=n.useState(""),[x,f]=n.useState(""),[v,w]=n.useState("");n.useState("");const[N,o]=n.useState(""),[i,S]=n.useState("");n.useState("");const y=j();function k(t){t.preventDefault(),c.createUserWithEmailAndPassword(r,v).then(C=>{u.collection("admin").doc(C.user.uid).set({Name:a,Email:r,accepted:"no",level:0,noti:0})}).then(()=>{o("Awaiting approval ")})}return s(d,{children:[e(A,{setUser:g,user:h,setUuid:p,setIsAccepted:b,level:x,setLevel:f}),s("div",{className:"",children:[s("div",{className:"bg-gray-100 flex justify-center  pb-4 pt-4 border-b-yellow-500 border-solid border-2 flex-col",children:["  ",e(L,{})," "]}),i==="123456"?e("div",{className:"fixed w-[100%] h-[100%] bg-sky-100",children:s("div",{className:"bottom-[250px] absolute inset-0 flex items-center justify-center flex-col sm:flex-row mt-10",children:[e("div",{children:e("img",{src:F,className:"h-[0] w-[0] sm:h-[375px] sm:w-[375px]"})}),s("form",{className:"flex flex-col h-[400px] items-center justify-around w-[300px] bg-slate-600 sm:h-[375px] sm:w-[375px]",onSubmit:k,children:[e("input",{type:"text",className:"mt-10 bt-10",placeholder:"naam",onChange:t=>l(t.target.value)}),e("input",{type:"text",placeholder:"email",onChange:t=>m(t.target.value)}),e("input",{type:"text",placeholder:"password",onChange:t=>w(t.target.value)}),s("div",{className:"sm:text-center sm:mt-10",children:[e("button",{className:`  text-white 
bg-gradient-to-r from-blue-500 via-blue-600
 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5`,children:"Signup"}),e("button",{onClick:()=>y("/login"),className:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:"Login"}),e("div",{className:"mt-3",children:s("button",{onClick:()=>{c.signInWithPopup(E).then(t=>{o("Awaiting approval "),u.collection("admin").doc(t.user.uid).set({Name:t.user.displayName,Email:t.user.email,accepted:"no",level:0,noti:0})}).catch(t=>{console.error(t)})},className:"text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2",children:[e("svg",{className:"w-4 h-4 mr-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 19",children:e("path",{fillRule:"evenodd",d:"M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z",clipRule:"evenodd"})}),"Sign in with Google"]})})]}),s("h2",{className:"text-2xl text-white",children:["  ",N," "]})]})]})}):e(M,{setCode:S,code:i}),e("div",{className:"",children:"   "})]})]})}export{q as default};