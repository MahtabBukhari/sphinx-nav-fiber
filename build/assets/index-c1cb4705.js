import{s as y,T as w,j as e,F as r,r as t,c as S}from"./index-8bba1ac7.js";import{B as g}from"./index-6478aa51.js";import{a as v,B as d,j as T,an as B}from"./react-toastify.esm-5ee78250.js";import{u as C}from"./index-7c39f604.js";import{S as E}from"./Skeleton-1c903b57.js";import{C as L}from"./ClipLoader-1e33f199.js";const R=()=>e.jsx(r,{children:e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(b,{children:"Remove node"})})})}),b=y(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,k=()=>{const{close:m}=C("removeNode"),[a,c]=t.useState(!1),[f,l]=t.useState(!1),[s,x]=t.useState(),o=v(),u=()=>{m()};t.useEffect(()=>{(async()=>{if(o){l(!0);try{const{data:i}=await T({search:o==null?void 0:o.name}),p=i.find(h=>h.topic===o.name);x(p)}catch(i){console.error(i)}finally{l(!1)}}})()},[o]);const j=async()=>{if(s!=null&&s.ref_id){c(!0);try{await B(s.ref_id)}catch(n){console.error(n),console.warn(n)}finally{c(!1)}}};return e.jsxs(e.Fragment,{children:[e.jsx(R,{}),f?e.jsx(E,{}):e.jsxs(r,{direction:"row",justify:"space-between",children:[e.jsx(d,{color:"secondary",onClick:u,size:"medium",variant:"outlined",children:"Cancel"}),e.jsxs(d,{disabled:a||!s,onClick:j,size:"medium",variant:"text",children:["Confirm",a&&e.jsx(L,{color:S.BLUE_PRESS_STATE,size:10})]})]})]})},I=()=>e.jsx(g,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(k,{})});export{I as RemoveNodeModal};