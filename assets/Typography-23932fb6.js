import{f as T,h as B,s as W,n as u,b as i,j as C,p as M,a as P,k as R,l as j}from"./DesignerFunctions-7ac1d881.js";import{r as U,j as N}from"./index-82c25be8.js";function _(t){return T("MuiTypography",t)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=t=>{const{align:a,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=t,s={root:["root",o,t.align!=="inherit"&&`align${u(a)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return j(s,_,p)},k=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${u(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>i({margin:0},a.variant&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=t=>w[t]||t,A=U.forwardRef(function(a,r){const n=C({props:a,name:"MuiTypography"}),e=z(n.color),o=M(i({},n,{color:e})),{align:p="inherit",className:s,component:g,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:h="body1",variantMapping:c=y}=o,v=P(o,$),m=i({},o,{align:p,color:e,className:s,component:g,gutterBottom:d,noWrap:f,paragraph:l,variant:h,variantMapping:c}),x=g||(l?"p":c[h]||y[h])||"span",b=L(m);return N(k,i({as:x,ref:r,ownerState:m,className:R(b.root,s)},v))}),J=A;export{J as T};
