import{r as c,h as i}from"./index-c6f27251.js";import"./Nav-522a44d5.js";function d({setPartner:n}){const a=async()=>{try{return i.collection("partner").onSnapshot(e=>{const o=e.docs.map(r=>({id:r.id,...r.data()}));o.sort((r,s)=>r.id-s.id),n(o)})}catch(t){console.error("Error fetching partner data:",t)}};c.useEffect(()=>{a()},[])}export{d as P};