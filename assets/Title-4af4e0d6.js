import{r as s,j as f,U as g,f as p}from"./index-0152fa2a.js";function E({}){const[a,o]=s.useState(""),[S,c]=s.useState(""),[y,u]=s.useState(""),[i,l]=s.useState([]),m=async()=>{try{return p.collection("group").orderBy("timestamp","desc").onSnapshot(r=>{const d=r.docs.map(n=>({id:n.id,...n.data()}));l(d)})}catch(e){console.error("Error fetching message data:",e)}};s.useEffect(()=>{m()},[]);const t=i.map(e=>e[a]).reduce((e,r)=>e+r,null);return s.useEffect(()=>{t===null||isNaN(t)||t===0?document.title="Squarelion Agency":document.title=`Squarelion Agency (${t})`},[t]),f(g,{setUser:o,user:a,setUuid:c,setLevel:u})}export{E as T};
