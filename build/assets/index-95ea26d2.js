import{ac as Z,w as g,x as b,F as t,H as T,E as V,r as y,j as e,z as C,aW as ee,b4 as te,al as se,aU as L,aV as F,b9 as B,ba as ne,a0 as oe,bb as re,bc as ie,bd as ae,M as O,a1 as ce,v as le,aS as de,aT as I,aX as pe,a3 as xe,ae as ue,ad as me,b7 as he}from"./index-0490ee14.js";import{aA as fe,a9 as ye,e as ge}from"./index-2d987ba7.js";import{C as U}from"./ClipLoader-854a2e59.js";import{p as R}from"./index-d206d03e.js";import{A as je}from"./index-960d91b2.js";import{c as we}from"./index-64f1c910.js";import"./three.module-d9fcef06.js";import"./Stack-da6c2641.js";import"./createSvgIcon-45e0ff9f.js";import"./TextareaAutosize-1515c1dc.js";const be=async(o,a,c="")=>await Z.post(`/${o}`,JSON.stringify(a),{Authorization:c}),Se=async(o,a,c,u,d,r)=>{const x=o==="Create custom type"?"schema":"node",l={node_data:{...a,...o==="Image"&&{source_link:c}},node_type:o,name:u,pubkey:r};return be(x,l,d)},Ne=({onClick:o,loading:a,error:c})=>{const u=V(l=>l.budget),[d,r]=y.useState(10),x="node";return y.useEffect(()=>{(async()=>{try{const h=await te(x);r(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[x]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ke,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[d," sats"]})]}),e.jsxs(Ce,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[fe(u)," sats"]})]})]}),e.jsx(t,{children:e.jsx(C,{color:"secondary","data-testid":"check-icon",disabled:a||!!c,onClick:o,size:"large",startIcon:a?e.jsx(q,{children:e.jsx(U,{color:b.lightGray,size:12})}):e.jsxs(q,{children:[" ",e.jsx(ye,{})]}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsx(ze,{children:e.jsxs(ve,{children:[e.jsx(ee,{className:"errorIcon"}),e.jsx("span",{children:c})]})}):null]})},Te=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${b.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${b.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${b.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,Ce=g(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${b.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,ke=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ve=g(t)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    letter-spacing: 0.2px;
    cursor: pointer;
    padding-left: 4px;
    font-size: 13px;
    font-family: Barlow;
    line-height: 18px;
  }
`,ze=g(t)`
  display: flex;
  align-items: center;
  color: ${b.primaryRed};
  position: relative;
  margin-top: 20px;
`,q=g.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Be=({type:o,onclose:a})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(G,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(G,{children:["Type: ",o]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:a,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),G=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ie=({handleSelectType:o,skipToStep:a,nodeType:c})=>{const[u,d]=y.useState(!1),[r,x]=y.useState(),{watch:l,setValue:h,formState:{isValid:w}}=se();y.useEffect(()=>{(async()=>{d(!0);const m=await ne(c),A=(m.attributes&&typeof m.attributes=="object"?R(m.attributes):R(m)).filter(E=>E.key!=="node_key");x(A),d(!1)})()},[c,l]);const f=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),n=r?[...r].sort((s,m)=>s.required&&!m.required?-1:!s.required&&m.required?1:0):[],j=()=>{o(""),a("sourceType")},p=()=>{r==null||r.forEach(({key:s,required:m})=>{if(m){const S=l(s);typeof S=="string"&&h(s,S.trim(),{shouldValidate:!0})}}),w&&!u&&(r!=null&&r.every(s=>!s.required||l(s.key)))&&a("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ae,{children:"Set Attributes"})})}),e.jsx(Ee,{children:u?e.jsx(t,{style:{margin:"auto"},children:e.jsx(U,{color:b.lightGray})}):e.jsx(t,{className:"input__wrapper",children:n==null?void 0:n.map(({key:s,required:m})=>e.jsxs(_e,{children:[e.jsx(T,{children:f(s)}),e.jsx(L,{id:"item-name",maxLength:50,name:s,placeholder:m?"Required":"Optional",rules:{...m?{...F,pattern:{message:"No leading whitespace allowed",value:B}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:j,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!w||u||(r==null?void 0:r.some(s=>s.required&&!l(s.key))),onClick:p,size:"large",variant:"contained",children:"Next"})})]})]})},Ae=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=g(t)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,_e=g(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${b.GRAY7};
    -webkit-text-fill-color: ${b.GRAY7};
  }
`,Le=({type:o,skipToStep:a,name:c,sourceLink:u})=>{const d=x=>B.test(x??""),r=o==="Image"?d(c)&&d(u):d(c);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Fe,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(T,{children:[o," name"]})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...F,pattern:{message:"No leading whitespace allowed",value:B}}})}),o==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(T,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(L,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...F,pattern:{message:"Please avoid special characters and spaces",value:B}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(C,{color:"secondary",onClick:()=>a("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(C,{color:"secondary",disabled:!r,onClick:()=>a("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Fe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Me=({skipToStep:o,allowNextStep:a,onSelectType:c,selectedType:u})=>{const[d]=oe(f=>[f.customSchemaFeatureFlag]),[r,x]=y.useState(null),[l,h]=y.useState(!1);y.useEffect(()=>{(async()=>{if(d){h(!0);try{const n=await re(),j=["about","schema"],p=n.schemas.filter(s=>s.ref_id&&!j.includes(s.type)&&!s.is_deleted).map(s=>({label:we(s.type),value:s.type,action:()=>o("setAttribues")}));x(p)}catch(n){console.warn(n)}finally{h(!1)}}else x([...ie,ae])})()},[u,d,o]);const w=f=>{c((f==null?void 0:f.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Pe,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(je,{autoFocus:!0,isLoading:l,onSelect:w,options:r})}),e.jsx(t,{children:e.jsx(C,{color:"secondary",disabled:!a,onClick:()=>o("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Pe=g(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,$e=async(o,a,c)=>{var f;const u=Object.entries(o).reduce((n,[j,p])=>(p!=null&&p!==""&&(n[j]=p),n),{}),{nodeType:d,typeName:r,sourceLink:x,...l}=u;let h="",w="";d!=="Create custom type"&&await ue(async()=>{const n=await me.enable();w=n==null?void 0:n.pubkey,h=await he()});try{const n=await Se(d,l,x,r,h,w);c(o,(f=n==null?void 0:n.data)==null?void 0:f.ref_id)}catch(n){let j=I;if(n.status===400){const p=await n.json();j=p.message||p.errorCode||(p==null?void 0:p.status)||I}else n instanceof Error&&(j=n.message);throw new Error(j)}},Je=()=>{const[o,a]=y.useState("sourceType"),{close:c,visible:u}=O("addItem"),{open:d}=O("addType"),{setBudget:r}=V(i=>i),x=ce({mode:"onChange"}),{watch:l,setValue:h,reset:w}=x,[f,n]=y.useState(!1),[j,p]=y.useState(""),{addNewNode:s}=le(i=>i),[m]=ge(i=>[i.setSelectedNode]);y.useEffect(()=>()=>{a("sourceType"),w()},[u,w]);const S=l("nodeType"),A=l("typeName"),E=l("sourceLink"),W=l("type");l("title");const M=()=>{c()},_=i=>{p(""),a(i)},Y=(i,N)=>{const v=N||`new-id-${Math.random()}`,k=i.nodeType.toLocaleLowerCase(),X=Object.entries(i).reduce((D,[Q,z])=>(z!=null&&z!==""&&(D[Q]=z),D),{}),$={name:i.typeName??i.name,type:k,label:i.typeName??i.name,node_type:k,id:v,edge_count:0,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.source_link?{source_link:i.source_link}:{},properties:{...X}};s({nodes:[$],links:[]}),m($)},H=x.handleSubmit(async i=>{p(""),n(!0);try{await $e(i,r,Y),de("Item Added"),M()}catch(N){let v=I;if((N==null?void 0:N.status)===400){const k=await N.json();v=k.errorCode||(k==null?void 0:k.status)||I}else N instanceof Error&&(v=N.message);p(String(v))}finally{n(!1)}}),P=i=>{i==="Create custom type"?d():h("nodeType",i)},J={sourceType:e.jsx(Me,{allowNextStep:!!S,onSelectType:P,selectedType:S,skipToStep:_}),source:e.jsx(Le,{name:A,skipToStep:_,sourceLink:E||"",type:S}),setBudget:e.jsx(Ne,{error:j,loading:f,onClick:()=>null}),createConfirmation:e.jsx(Be,{onclose:M,type:W}),setAttribues:e.jsx(Ie,{handleSelectType:P,nodeType:S,skipToStep:_})},K="small";return e.jsx(pe,{id:"addItem",kind:K,onClose:c,preventOutsideClose:!0,children:e.jsx(xe,{...x,children:e.jsx("form",{id:"add-node-form",onSubmit:H,children:J[o]})})})};export{Je as AddItemModal};
