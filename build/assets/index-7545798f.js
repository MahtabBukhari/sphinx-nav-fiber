import{s as c,a as b,T as E,F as s,e as x,q as A,r as l,j as e,aV as O,aW as V,t as P,v as k,B as I,bt as q,br as G,u as Y,aY as H}from"./index-787c3ef8.js";import{n as F,g as J,aI as K}from"./index-77dce891.js";import{S as Q}from"./Skeleton-fe703092.js";import{C as X}from"./ClipLoader-0106d300.js";const Z=/^https:\/\/\S+\.(png|jpe?g|svg)$/;function ee(r){return!!Z.test(r)}function te(r){return r.split("_").map(d=>d.charAt(0).toUpperCase()+d.slice(1)).join(" ")}const ae=()=>{const{open:r}=x("changeNodeType"),{close:d}=x("editNodeName"),{changeNodeTypeFeatureFlag:f}=A(o=>({changeNodeTypeFeatureFlag:o.changeNodeTypeFeatureFlag})),a=F(),j=a==null?void 0:a.node_type,[m,u]=l.useState({});l.useEffect(()=>{a!=null&&a.properties&&u(a.properties)},[a]);const y=()=>{d(),r()},g=(o,n)=>{u(N=>({...N,[o]:n}))};return e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(oe,{children:"Edit Node"}),e.jsxs(se,{children:[e.jsx(J,{type:j}),f&&e.jsx(re,{onClick:y,children:e.jsx(K,{})})]})]})}),e.jsx(ie,{children:Object.keys(m).map(o=>e.jsxs(s,{mb:18,children:[e.jsx(ne,{style:{marginBottom:8},children:te(o)}),e.jsx(O,{id:`cy-${o}`,maxLength:50,name:`properties.${o}`,onChange:n=>g(o,n),placeholder:`Please Enter the ${o}`,rules:o==="name"?{...V}:{}})]},o))})]})},oe=c(E)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ne=c(E)`
  color: ${b.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,se=c.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`,re=c(s)`
  align-items: center;
  cursor: pointer;
`,ie=c(s)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`,ce=()=>{var v,S,w;const{close:r}=x("editNodeName"),d=P({mode:"onChange"}),{watch:f,setValue:a,reset:j,getValues:m}=d,[u,y]=l.useState(!1),[g,o]=l.useState(!1),[n,N]=l.useState(),t=F(),{open:B}=x("removeNode");l.useEffect(()=>(n?Object.keys(n).forEach(i=>{a(i,n[i])}):t&&Object.keys(t).forEach(i=>{a(i,t[i])}),()=>{j()}),[n,a,j,t]),l.useEffect(()=>{(async()=>{if(!(!t||t.type!=="topic")){o(!0);try{const{data:p}=await q({search:t==null?void 0:t.name}),U=p.find(W=>W.name===t.name);N(U)}catch(p){console.error(p)}finally{o(!1)}}})()},[t]);const D=f("imageInputType"),C=f("image_url");l.useEffect(()=>{a("imageInputType",ee(C))},[C,a]);const L=()=>{r()},h=n||t,_=async()=>{y(!0);const i=m();try{await G((h==null?void 0:h.ref_id)||"",{node_data:i});const{updateNode:p}=Y.getState();p({...h,...i}),L()}catch(p){console.warn(p)}finally{y(!1)}},R=async()=>{B()},T=(S=(v=m())==null?void 0:v.name)==null?void 0:S.trim(),$=T&&(n==null?void 0:n.name.trim())!==T,z=m().image_url&&(t==null?void 0:t.image_url)!==((w=m())==null?void 0:w.image_url),M=u||g||!!C&&!D||!$&&!z;return e.jsx(le,{children:e.jsxs(k,{...d,children:[g?e.jsx(s,{my:24,children:e.jsx(Q,{})}):e.jsx(ae,{}),e.jsxs(s,{direction:"row",justify:"space-between",mt:20,children:[e.jsx(s,{direction:"column",children:e.jsx(de,{color:"secondary",disabled:g||!h,onClick:R,size:"large",variant:"contained",children:"Delete"})}),e.jsxs(me,{color:"secondary",disabled:M,onClick:_,size:"large",variant:"contained",children:["Save Changes",u&&e.jsx(pe,{children:e.jsx(X,{color:b.lightGray,size:12})})]})]})]})})},le=c(s)`
  padding: 20px;
`,de=c(I)`
  && {
    color: ${b.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);
    flex: 1;
    margin-right: 10px;

    &:hover,
    &:active,
    &:focus {
      color: ${b.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,pe=c.span`
  margin-top: 4px;
`,me=c(I)`
  width: 80% !important;
  margin: 0 auto !important;
`,fe=()=>{const{close:r}=x("editNodeName");return e.jsx(H,{id:"editNodeName",kind:"regular",onClose:r,preventOutsideClose:!0,children:e.jsx(ce,{})})};export{fe as EditNodeNameModal};
