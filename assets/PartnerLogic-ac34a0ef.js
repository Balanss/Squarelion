import{v as P,w as W,r as y,x as R,y as B,d as T,j as v,_ as l,e as b,g as _,b as $,s as E,h as C,c as w,f as U,z as j,T as I,C as L}from"./index-bfcaf2af.js";import{f as z}from"./index.esm2017-961b8d41.js";const A=["className","component"];function D(a={}){const{themeId:t,defaultTheme:o,defaultClassName:n="MuiBox-root",generateClassName:e}=a,r=P("div",{shouldForwardProp:s=>s!=="theme"&&s!=="sx"&&s!=="as"})(W);return y.forwardRef(function(g,u){const p=R(o),c=B(g),{className:h,component:m="div"}=c,d=T(c,A);return v(r,l({as:m,ref:u,className:b(h,e?e(n):n),theme:t&&p[t]||p},d))})}function F(a){return _("MuiTypography",a)}$("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const S=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],G=a=>{const{align:t,gutterBottom:o,noWrap:n,paragraph:e,variant:r,classes:i}=a,s={root:["root",r,a.align!=="inherit"&&`align${C(t)}`,o&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return U(s,F,i)},H=E("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,o.variant&&t[o.variant],o.align!=="inherit"&&t[`align${C(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>l({margin:0},t.variant&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},J={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=a=>J[a]||a,V=y.forwardRef(function(t,o){const n=w({props:t,name:"MuiTypography"}),e=O(n.color),r=B(l({},n,{color:e})),{align:i="inherit",className:s,component:g,gutterBottom:u=!1,noWrap:p=!1,paragraph:c=!1,variant:h="body1",variantMapping:m=x}=r,d=T(r,S),f=l({},r,{align:i,color:e,className:s,component:g,gutterBottom:u,noWrap:p,paragraph:c,variant:h,variantMapping:m}),N=g||(c?"p":m[h]||x[h])||"span",M=G(f);return v(H,l({as:N,ref:o,ownerState:f,className:b(M.root,s)},d))}),X=V,k=j(),q=D({themeId:I,defaultTheme:k,defaultClassName:"MuiBox-root",generateClassName:L.generate}),Y=q;function Z({setPartner:a}){const t=async()=>{try{return z.collection("partner").onSnapshot(n=>{const e=n.docs.map(r=>({id:r.id,...r.data()}));e.sort((r,i)=>r.id-i.id),a(e)})}catch(o){console.error("Error fetching partner data:",o)}};y.useEffect(()=>{t()},[])}export{Y as B,Z as P,X as T};
