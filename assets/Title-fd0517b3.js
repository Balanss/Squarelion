import{r as s,j as g}from"./index-c5efbe35.js";import{U as y,f}from"./index.esm2017-0dfefad9.js";function M({}){const[r,o]=s.useState(""),[p,c]=s.useState(""),[E,u]=s.useState(""),[i,m]=s.useState([]),l=async()=>{try{return f.collection("group").orderBy("timestamp","desc").onSnapshot(n=>{const d=n.docs.map(a=>({id:a.id,...a.data()}));m(d)})}catch(e){console.error("Error fetching message data:",e)}};s.useEffect(()=>{l()},[]);const t=i.map(e=>e[r]).reduce((e,n)=>e+n,null);return s.useEffect(()=>{t===null||t===0||t==="NaN"?document.getElementById("myHead").innerHTML="Squarelion Agency":document.getElementById("myHead").innerHTML=`Squarelion Agency (${t})`},[t]),g.jsx(y,{setUser:o,user:r,setUuid:c,setLevel:u})}export{M as T};