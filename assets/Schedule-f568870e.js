import{r,u as D,j as t,F as p,a as s,E as P,h as f}from"./index-58f2d849.js";function j({user:h,level:d,uuid:A}){const[c,x]=r.useState([]),w=D();r.useState(""),r.useState(""),r.useState("");const y=async()=>{try{return f.collection("partner").onSnapshot(n=>{const a=n.docs.map(l=>({id:l.id,...l.data()}));x(a)})}catch(e){console.error("Error fetching data: ",e)}};r.useEffect(()=>{y()},[h]);const[m,g]=r.useState([]),b=async()=>{try{const e=localStorage.getItem("data");if(e){g(JSON.parse(e));return}const n=c.map(o=>f.collection(o.name).where("status","!=","Approved").get().then(v=>v.docs.map(i=>({id:i.id,status:i.data().status,...i.data()})))),u=(await Promise.all(n)).flat().filter(o=>o.status!==0);g(u),localStorage.setItem("data",JSON.stringify(u))}catch(e){console.error("Error fetching data:",e)}};r.useEffect(()=>{b()},[c]);const[N,S]=r.useState(!1);return t(p,{children:s("div",{className:" animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in  overflow-hidden flex flex-wrap items-center gap-2 justify-center sm:w-[70vw] laptop:w-[80vw] laptop:content-start laptopL:overflow-y-scroll phones:p-0  p-5 m-auto  border-2 border-slate-700/50 ",children:[t("section",{className:"",children:N&&s("div",{className:" flex-col  fixed top-0 w-[100vw] bg-slate-600 left-0 z-[100] flex items-center justify-center h-[100vh]",children:[t("img",{src:P,className:"w-[100px] h-[100px]"}),t("p",{className:"text-white text-2xl animate-bounce",children:"Loading..."})]})}),s("table",{className:"w-full text-sm text-left text-gray-400 shadow-md shadow-slate-800",children:[s("caption",{className:"p-5 text-lg font-semibold text-left phones:text-center  text-white bg-gray-800",children:["Squarelion Agency Partners",t("p",{className:"mt-1 text-sm font-normal text-gray-400",children:"Click on any of the images to view the partner page"})]}),t("thead",{className:"text-xs  uppercase bg-gray-700 text-gray-400",children:s("tr",{children:[t("th",{scope:"col",className:"px-2 py-3",children:"Source"}),t("th",{scope:"col",className:"px-6 py-3",children:"Name"}),t("th",{scope:"col",className:" py-3",children:"Pending Post"})]})}),t("tbody",{children:c.map((e,n)=>e.name!=="Test"&&s("tr",{className:" border-b bg-gray-800 border-gray-700",children:[t("th",{scope:"row",className:"px-1 py-1 font-medium  whitespace-nowrap text-white",children:t("img",{className:"bg-slate-200 ml-3 mt-3 mb-3 mr-3 w-[30px] h-[30px] rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out",src:e.imageUrl,onClick:()=>{localStorage.setItem("partner",e.name),localStorage.setItem("image",e.imageUrl),localStorage.setItem("preset",e.Preset||"No preset available"),S(!0),setTimeout(()=>{w(`/profile/${e.name}`)},500)}})}),t("th",{scope:"row",className:"px-1 py-1 font-medium  whitespace-nowrap text-white",children:e.name}),s("td",{className:"px-1 py-1",children:[d>8&&e.name!=="Test"&&s(p,{children:["Pending:"," ",m.filter(a=>a.client===e.name&&a.status==="pending").length," "]}),d===8&&t(p,{children:e.name!=="Test"?s("p",{children:[" ","Pending :"," ",m.filter(a=>a.client===e.name&&a.SendTo===h&&(a.status==="Waiting Designer"||a.status==="Feedback")).length," "]}):null})]})]},n))})]})]})})}export{j as default};
