import{x as p,y as B,r as x,z as N,e as P,c as g,j as y,_ as C,d as E,A as T,T as _,C as b}from"./index-5a27fc07.js";import{f as j}from"./index.esm2017-77c9a932.js";const S=["className","component"];function I(n={}){const{themeId:s,defaultTheme:o,defaultClassName:a="MuiBox-root",generateClassName:t}=n,e=p("div",{shouldForwardProp:r=>r!=="theme"&&r!=="sx"&&r!=="as"})(B);return x.forwardRef(function(u,i){const c=N(o),d=P(u),{className:l,component:f="div"}=d,h=g(d,S);return y.jsx(e,C({as:f,ref:i,className:E(l,t?t(a):a),theme:s&&c[s]||c},h))})}const M=T(),R=I({themeId:_,defaultTheme:M,defaultClassName:"MuiBox-root",generateClassName:b.generate}),A=R;function F({setPartner:n}){const s=async()=>{try{return j.collection("partner").onSnapshot(a=>{const t=a.docs.map(e=>({id:e.id,...e.data()}));t.sort((e,m)=>e.id-m.id),n(t)})}catch(o){console.error("Error fetching partner data:",o)}};x.useEffect(()=>{s()},[])}export{A as B,F as P};
