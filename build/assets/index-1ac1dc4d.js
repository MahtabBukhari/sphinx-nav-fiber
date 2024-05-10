import{g as te,a as se,s as L,_ as v,a7 as Fe,r as x,b as ne,j as s,d as re,c as E,e as oe,u as fe,aR as Re,aZ as Z,a_ as ae,a5 as de,a$ as Te,b0 as Pe,f as S,F as m,T as _,i as _e,k as me,K as Ie,C as ie,h as B,Z as Me,b1 as Ee,b2 as Y,U as ee,b3 as Le,V as T,b4 as De,ax as Ae,l as Ge,b5 as We,x as Ve,I as Oe}from"./index-aa76214e.js";import{B as xe}from"./index-0ff3ebae.js";import{u as A}from"./index-5a27753a.js";import{o as Ue,h as qe,c as ge,F as be,C as J,p as Ke,i as He,I as Ze,B as G,n as Je}from"./react-toastify.esm-983de2b3.js";import{B as ye,T as Qe,a as Xe}from"./index-d11487ff.js";import{T as H}from"./index-d368ba67.js";import{D as Ye,P as we}from"./PlusIcon-d4e9f673.js";import{L as et,m as tt,b as st,S as nt,H as rt,C as ot}from"./Selection-a973c2c5.js";import{L as at}from"./index-aa5c1db4.js";import{e as it,A as je}from"./index-0b03b6fb.js";import{a as pe,N as ct,S as lt,b as q,c as dt}from"./index-3891d646.js";import{p as pt,c as ut}from"./index-30d16895.js";import{u as ht}from"./Popover-508ec29c.js";import{u as ft}from"./index-e6865c46.js";import{M as mt,a as xt}from"./NoFilterResultIcon-046496e6.js";import"./useSlotProps-f7ca023e.js";import"./index.esm-816c4a04.js";import"./InfoIcon-19456e74.js";import"./Popper-776a6341.js";import"./generateCategoricalChart-68ff353d.js";import"./index-5feb1daa.js";import"./CheckIcon-576d2ee6.js";function gt(e){return te("PrivateSwitchBase",e)}se("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const bt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],yt=e=>{const{classes:t,checked:r,disabled:n,edge:o}=e,a={root:["root",r&&"checked",n&&"disabled",o&&`edge${E(o)}`],input:["input"]};return oe(a,gt,t)},wt=L(Ue)(({ownerState:e})=>v({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),jt=L("input",{shouldForwardProp:Fe})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),vt=x.forwardRef(function(t,r){const{autoFocus:n,checked:o,checkedIcon:a,className:l,defaultChecked:c,disabled:d,disableFocusRipple:u=!1,edge:i=!1,icon:h,id:f,inputProps:b,inputRef:p,name:g,onBlur:y,onChange:C,onFocus:N,readOnly:W,required:V=!1,tabIndex:M,type:F,value:w}=t,$=ne(t,bt),[z,j]=ft({controlled:o,default:!!c,name:"SwitchBase",state:"checked"}),P=ht(),Ce=R=>{N&&N(R),P&&P.onFocus&&P.onFocus(R)},Be=R=>{y&&y(R),P&&P.onBlur&&P.onBlur(R)},ze=R=>{if(R.nativeEvent.defaultPrevented)return;const le=R.target.checked;j(le),C&&C(R,le)};let O=d;P&&typeof O>"u"&&(O=P.disabled);const Ne=F==="checkbox"||F==="radio",Q=v({},t,{checked:z,disabled:O,disableFocusRipple:u,edge:i}),ce=yt(Q);return s.jsxs(wt,v({component:"span",className:re(ce.root,l),centerRipple:!0,focusRipple:!u,disabled:O,tabIndex:null,role:void 0,onFocus:Ce,onBlur:Be,ownerState:Q,ref:r},$,{children:[s.jsx(jt,v({autoFocus:n,checked:o,defaultChecked:c,className:ce.input,disabled:O,id:Ne?f:void 0,name:g,onChange:ze,readOnly:W,ref:p,required:V,ownerState:Q,tabIndex:M,type:F},F==="checkbox"&&w===void 0?{}:{value:w},b)),z?a:h]}))}),St=vt,kt=x.createContext(),ue=kt;function $t(e){return te("MuiGrid",e)}const Ct=[0,1,2,3,4,5,6,7,8,9,10],Bt=["column-reverse","column","row-reverse","row"],zt=["nowrap","wrap-reverse","wrap"],U=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Nt=se("MuiGrid",["root","container","item","zeroMinWidth",...Ct.map(e=>`spacing-xs-${e}`),...Bt.map(e=>`direction-xs-${e}`),...zt.map(e=>`wrap-xs-${e}`),...U.map(e=>`grid-xs-${e}`),...U.map(e=>`grid-sm-${e}`),...U.map(e=>`grid-md-${e}`),...U.map(e=>`grid-lg-${e}`),...U.map(e=>`grid-xl-${e}`)]),K=Nt,Ft=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function D(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function Rt({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((n,o)=>{let a={};if(t[o]&&(r=t[o]),!r)return n;if(r===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=Z({values:t.columns,breakpoints:e.breakpoints.values}),c=typeof l=="object"?l[o]:l;if(c==null)return n;const d=`${Math.round(r/c*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const i=e.spacing(t.columnSpacing);if(i!=="0px"){const h=`calc(${d} + ${D(i)})`;u={flexBasis:h,maxWidth:h}}}a=v({flexBasis:d,flexGrow:0,maxWidth:d},u)}return e.breakpoints.values[o]===0?Object.assign(n,a):n[e.breakpoints.up(o)]=a,n},{})}function Tt({theme:e,ownerState:t}){const r=Z({values:t.direction,breakpoints:e.breakpoints.values});return ae({theme:e},r,n=>{const o={flexDirection:n};return n.indexOf("column")===0&&(o[`& > .${K.item}`]={maxWidth:"none"}),o})}function ve({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(o=>{r===""&&t[o]!==0&&(r=o)});const n=Object.keys(e).sort((o,a)=>e[o]-e[a]);return n.slice(0,n.indexOf(r))}function Pt({theme:e,ownerState:t}){const{container:r,rowSpacing:n}=t;let o={};if(r&&n!==0){const a=Z({values:n,breakpoints:e.breakpoints.values});let l;typeof a=="object"&&(l=ve({breakpoints:e.breakpoints.values,values:a})),o=ae({theme:e},a,(c,d)=>{var u;const i=e.spacing(c);return i!=="0px"?{marginTop:`-${D(i)}`,[`& > .${K.item}`]:{paddingTop:D(i)}}:(u=l)!=null&&u.includes(d)?{}:{marginTop:0,[`& > .${K.item}`]:{paddingTop:0}}})}return o}function _t({theme:e,ownerState:t}){const{container:r,columnSpacing:n}=t;let o={};if(r&&n!==0){const a=Z({values:n,breakpoints:e.breakpoints.values});let l;typeof a=="object"&&(l=ve({breakpoints:e.breakpoints.values,values:a})),o=ae({theme:e},a,(c,d)=>{var u;const i=e.spacing(c);return i!=="0px"?{width:`calc(100% + ${D(i)})`,marginLeft:`-${D(i)}`,[`& > .${K.item}`]:{paddingLeft:D(i)}}:(u=l)!=null&&u.includes(d)?{}:{width:"100%",marginLeft:0,[`& > .${K.item}`]:{paddingLeft:0}}})}return o}function It(e,t,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const n=[];return t.forEach(o=>{const a=e[o];Number(a)>0&&n.push(r[`spacing-${o}-${String(a)}`])}),n}const Mt=L("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:n,direction:o,item:a,spacing:l,wrap:c,zeroMinWidth:d,breakpoints:u}=r;let i=[];n&&(i=It(l,u,t));const h=[];return u.forEach(f=>{const b=r[f];b&&h.push(t[`grid-${f}-${String(b)}`])}),[t.root,n&&t.container,a&&t.item,d&&t.zeroMinWidth,...i,o!=="row"&&t[`direction-xs-${String(o)}`],c!=="wrap"&&t[`wrap-xs-${String(c)}`],...h]}})(({ownerState:e})=>v({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Tt,Pt,_t,Rt);function Et(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return t.forEach(n=>{const o=e[n];if(Number(o)>0){const a=`spacing-${n}-${String(o)}`;r.push(a)}}),r}const Lt=e=>{const{classes:t,container:r,direction:n,item:o,spacing:a,wrap:l,zeroMinWidth:c,breakpoints:d}=e;let u=[];r&&(u=Et(a,d));const i=[];d.forEach(f=>{const b=e[f];b&&i.push(`grid-${f}-${String(b)}`)});const h={root:["root",r&&"container",o&&"item",c&&"zeroMinWidth",...u,n!=="row"&&`direction-xs-${String(n)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...i]};return oe(h,$t,t)},Dt=x.forwardRef(function(t,r){const n=fe({props:t,name:"MuiGrid"}),{breakpoints:o}=Re(),a=it(n),{className:l,columns:c,columnSpacing:d,component:u="div",container:i=!1,direction:h="row",item:f=!1,rowSpacing:b,spacing:p=0,wrap:g="wrap",zeroMinWidth:y=!1}=a,C=ne(a,Ft),N=b||p,W=d||p,V=x.useContext(ue),M=i?c||12:V,F={},w=v({},C);o.keys.forEach(j=>{C[j]!=null&&(F[j]=C[j],delete w[j])});const $=v({},a,{columns:M,container:i,direction:h,item:f,rowSpacing:N,columnSpacing:W,wrap:g,zeroMinWidth:y,spacing:p},F,{breakpoints:o.keys}),z=Lt($);return s.jsx(ue.Provider,{value:M,children:s.jsx(Mt,v({ownerState:$,className:re(z.root,l),as:u,ref:r},w))})}),I=Dt;function At(e){return te("MuiSwitch",e)}const Gt=se("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),k=Gt,Wt=["className","color","edge","size","sx"],Vt=e=>{const{classes:t,edge:r,size:n,color:o,checked:a,disabled:l}=e,c={root:["root",r&&`edge${E(r)}`,`size${E(n)}`],switchBase:["switchBase",`color${E(o)}`,a&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=oe(c,At,t);return v({},t,d)},Ot=L("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.edge&&t[`edge${E(r.edge)}`],t[`size${E(r.size)}`]]}})(({ownerState:e})=>v({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${k.thumb}`]:{width:16,height:16},[`& .${k.switchBase}`]:{padding:4,[`&.${k.checked}`]:{transform:"translateX(16px)"}}})),Ut=L(St,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.switchBase,{[`& .${k.input}`]:t.input},r.color!=="default"&&t[`color${E(r.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${k.checked}`]:{transform:"translateX(20px)"},[`&.${k.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${k.checked} + .${k.track}`]:{opacity:.5},[`&.${k.disabled} + .${k.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${k.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>v({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:de(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${k.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:de(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${e.palette.mode==="light"?Te(e.palette[t.color].main,.62):Pe(e.palette[t.color].main,.55)}`}},[`&.${k.checked} + .${k.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),qt=L("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),Kt=L("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Ht=x.forwardRef(function(t,r){const n=fe({props:t,name:"MuiSwitch"}),{className:o,color:a="primary",edge:l=!1,size:c="medium",sx:d}=n,u=ne(n,Wt),i=v({},n,{color:a,edge:l,size:c}),h=Vt(i),f=s.jsx(Kt,{className:h.thumb,ownerState:i});return s.jsxs(Ot,{className:re(h.root,o),sx:d,ownerState:i,children:[s.jsx(Ut,v({type:"checkbox",icon:f,checkedIcon:f,ref:r,ownerState:i},u,{classes:v({},h,{root:h.switchBase})})),s.jsx(qt,{className:h.track,ownerState:i})]})}),Zt=Ht,Jt=({onClose:e})=>{const[t]=_e(n=>[n.graphStyle]),r=()=>{localStorage.setItem("graphStyle",t),e()};return s.jsxs(Qt,{direction:"column",children:[s.jsx(Xt,{children:"Default graph view:"}),s.jsx(qe,{}),s.jsx(m,{mt:308,children:s.jsx(ye,{kind:"big",onClick:r,children:"Save Changes"})})]})},Qt=S(m)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,Xt=S(_)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,Yt=({initialValues:e})=>{const t=ge({defaultValues:e,mode:"onSubmit"}),{isSubmitting:r}=t.formState,n=me(a=>a.setAppMetaData),o=t.handleSubmit(async a=>{try{(await Ie(a)).status==="success"&&n(a)}catch(l){console.log(l),console.warn(l)}});return s.jsx(be,{...t,children:s.jsx(ts,{id:"add-node-form",onSubmit:o,children:s.jsxs(s.Fragment,{children:[s.jsxs(m,{children:[s.jsx(m,{pt:20,children:s.jsx(H,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...ie}})}),s.jsx(m,{pt:20,children:s.jsx(H,{id:"cy-about-id",label:"Graph Description",maxLength:100,name:"description",placeholder:"Type graph description here..."})})]}),s.jsx(m,{mt:210,py:24,children:r?s.jsx(es,{children:s.jsx(J,{color:B.white,size:20})}):s.jsx(ye,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save Changes"})})]})})})},es=S(m).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,ts=S.form`
  padding: 36px;
`,ss={schemas:[],links:[]},Se=Me(e=>({...ss,setSchemas:t=>{e({schemas:t})},setSchemaLinks:t=>{e({links:t})}})),ns=e=>{const t=e.find(a=>a.type==="Thing"),r=[],n=2,o=(a,l,c,d=0,u=0)=>{const i=e.find(h=>h.ref_id===a);if(i){const h=l?2*Math.PI/l:0,f=c*h+d,b=u*n*Math.cos(f),p=u*n*Math.sin(f);r.push({...i,x:b,y:p,z:0}),i.children.forEach((g,y)=>{o(g,i.children.length,y,f,u+1)})}};return t!=null&&t.ref_id&&o(t==null?void 0:t.ref_id,0,0),r},rs=/^[a-z0-9_]+$/,os=({parentParam:e})=>{const[t,r]=x.useState(!1),[n,o]=x.useState([]),{fields:a,append:l,replace:c,remove:d}=Ke({name:"attributes"}),{setValue:u,watch:i}=He();return x.useEffect(()=>{const h=async()=>{try{let f=[{required:!1,type:"string",key:""}];if(e!==ct.value.toLowerCase()){r(!0);const b=await Ee(e);f=pt(b)}c(f),o(f)}catch(f){console.warn(f)}finally{r(!1)}};n.length===0&&h()},[e,u,c,n.length]),s.jsxs(s.Fragment,{children:[t?s.jsx(m,{align:"center",children:s.jsx(J,{color:B.SECONDARY_BLUE,size:"30"})}):s.jsx(as,{py:8,children:s.jsx(I,{container:!0,spacing:2,children:a.map((h,f)=>{const b=i(`attributes[${f}].type`),p=i(`attributes[${f}].required`),g=h.isNew||!1;return s.jsxs(x.Fragment,{children:[s.jsx(I,{item:!0,xs:5,children:s.jsx(H,{autoComplete:"off",className:"text-input",disabled:!g,id:"cy-item-name",maxLength:50,name:`attributes.${f}.key`,placeholder:"Enter value",rules:{...ie,pattern:{message:"Please avoid special characters, spaces and uppercase",value:rs}}})}),s.jsx(I,{item:!0,xs:4,children:s.jsx(je,{onSelect:y=>u(`attributes[${f}].type`,y==null?void 0:y.value),options:pe,selectedValue:pe.find(y=>y.value===b)})}),s.jsxs(I,{item:!0,xs:3,children:[s.jsx(Zt,{checked:p,disabled:!1,name:`attributes.${f}.required`,onChange:y=>u(`attributes[${f}].required`,y.target.checked),size:"small"}),s.jsx(Ze,{onClick:()=>d(f),children:s.jsx(Ye,{})})]})]},h.id)})})}),s.jsx(m,{align:"flex-start",py:12,children:s.jsx(G,{onClick:()=>l({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:s.jsx(we,{}),variant:"contained",children:"Add Attribute"})})]})},as=S(m)`
  max-height: 260px;
  overflow: auto;
  width: calc(100% + 20px);
`,is=({parent:e})=>{const t=e;return s.jsxs(m,{children:[s.jsx(m,{direction:"row",mb:10,children:s.jsxs(I,{container:!0,spacing:2,children:[s.jsx(I,{item:!0,xs:5,children:s.jsx(X,{style:{marginRight:180},children:"Attributes"})}),s.jsx(I,{item:!0,xs:4,children:s.jsx(X,{style:{marginRight:130},children:"Type"})}),s.jsx(I,{item:!0,xs:3,children:s.jsx(X,{children:"Required"})})]})}),t&&s.jsx(os,{parentParam:t},t)]})},X=S(_)`
  font-size: 15px;
  color: gray;
`,cs={type:"",parent:""},ls=async(e,t=!1)=>{try{const{attributes:r,...n}=e,o={...n,...ut(r)};let a;if(t?a=await ee.put("/schema",JSON.stringify(o),{}):a=await ee.post("/schema",JSON.stringify({...o,node_key:"name"}),{}),a.error){const{message:l}=a.error;throw new Error(l)}}catch(r){let n=Y;if(r.status===400){const o=await r.json();n=o.errorCode||(o==null?void 0:o.status)||Y}else r instanceof Error&&(n=r.message);throw new Error(n)}},ds=({onSchemaCreate:e,selectedSchema:t,onDelete:r})=>{const{close:n,visible:o}=A("addType"),[a,l]=x.useState(!1),c=ge({mode:"onChange",defaultValues:t?{type:t.type,parent:t.parent}:cs}),{watch:d,setValue:u,reset:i}=c,[h,f]=x.useState(!1),[b,p]=x.useState(!1),[g,y]=x.useState(null);x.useEffect(()=>()=>{i()},[o,i]);const C=w=>w.charAt(0).toUpperCase()+w.slice(1);x.useEffect(()=>{t||(async()=>{p(!0);try{const z=(await Le()).schemas.filter(j=>!j.is_deleted&&j.type).map(j=>(j==null?void 0:j.type)==="thing"?{label:"No Parent",value:j.type}:{label:C(j.type),value:j.type});y(z)}catch($){console.warn($)}finally{p(!1)}})()},[t]);const N=d("parent"),W=()=>{n()},V=async()=>{if(t!=null&&t.type)try{await ee.delete(`/schema/${t.type}`),r(t.type),n()}catch(w){console.warn(w)}finally{l(!1)}},M=c.handleSubmit(async w=>{f(!0);try{await ls(w,!!t),e({type:w.type,parent:N||"",ref_id:(t==null?void 0:t.ref_id)||"new"}),W()}catch($){if(($==null?void 0:$.status)===400){const z=await $.json();z.errorCode||z!=null&&z.status||Y}else $ instanceof Error&&$.message}finally{f(!1),l(!1)}}),F=()=>g==null?void 0:g.find(w=>w.value===N);return s.jsx(m,{children:!a&&!t?s.jsx(m,{mt:20,children:s.jsx(G,{onClick:()=>l(!0),children:"Create new"})}):s.jsx(m,{children:s.jsx(be,{...c,children:s.jsxs("form",{id:"add-type-form",onSubmit:M,children:[s.jsxs(m,{children:[s.jsx(m,{align:"center",direction:"row",justify:"space-between",mb:18,children:s.jsx(m,{align:"center",direction:"row",children:s.jsx(_,{children:"Enter details"})})}),t?s.jsx(m,{mb:20,children:s.jsxs(_,{kind:"headingBold",children:["Parent: ",t.parent]})}):s.jsxs(s.Fragment,{children:[s.jsx(m,{mb:20,children:s.jsx(_,{children:"Select Parent"})}),s.jsx(m,{direction:"row",mb:20,children:s.jsx(je,{autoFocus:!t,disabled:b,isLoading:b,onSelect:w=>u("parent",(w==null?void 0:w.value)||""),options:g,selectedValue:F()},N)})]}),t?s.jsx(m,{mb:20,children:s.jsxs(_,{kind:"headingBold",children:["Type: ",t.type]})}):s.jsxs(s.Fragment,{children:[s.jsx(m,{mb:4,children:s.jsx(_,{children:"Type name"})}),s.jsx(m,{mb:12,children:s.jsx(H,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...ie},value:N})})]})]}),s.jsx(is,{parent:t?t.type:N}),s.jsxs(m,{direction:"row",justify:"space-between",mt:20,children:[t?s.jsx(ps,{color:"secondary",onClick:V,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}):null,s.jsx(G,{color:"secondary",disabled:h,onClick:M,size:"large",startIcon:h?s.jsx(J,{color:B.white,size:24}):null,variant:"contained",children:"Save"})]})]})})})})},ps=S(G)`
  && {
    color: ${B.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${B.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,us=new T,he=x.forwardRef(function({start:t=[0,0,0],end:r=[0,0,0],mid:n,segments:o=20,...a},l){const c=x.useRef(null),[d]=x.useState(()=>new De(void 0,void 0,void 0)),u=x.useCallback((h,f,b,p=20)=>(h instanceof T?d.v0.copy(h):d.v0.set(...h),f instanceof T?d.v2.copy(f):d.v2.set(...f),b instanceof T?d.v1.copy(b):d.v1.copy(d.v0.clone().add(d.v2.clone().sub(d.v0)).add(us.set(0,d.v0.y-d.v2.y,0))),d.getPoints(p)),[]);x.useLayoutEffect(()=>{c.current.setPoints=(h,f,b)=>{const p=u(h,f,b);c.current.geometry&&c.current.geometry.setPositions(p.map(g=>g.toArray()).flat())}},[]);const i=x.useMemo(()=>u(t,r,n,o),[t,r,n,o]);return x.createElement(et,v({ref:tt([c,l]),points:i},a))}),ke=({links:e})=>{const t=x.useRef(null),r=x.useMemo(()=>{const n=[];return e.forEach((o,a)=>{const l=a%2===0?1:-1,{start:c,end:d}=o,u=new T(c.x,c.y,c.z),i=new T(d.x,d.y,d.z),h=new T(0,l*.25,0),f=new T(0,l*.25,0),b=u.clone().add(h),p=i.clone().add(f);n.push({start:b,end:p})}),n},[e]);return st((n,o)=>{t.current&&t.current.children.forEach(a=>{const c=a.material;c!=null&&c.uniforms&&"dashOffset"in c.uniforms&&(c.uniforms.dashOffset.value-=o*10)})}),s.jsx("group",{ref:t,children:r.map((n,o)=>s.jsxs(x.Fragment,{children:[s.jsx(he,{...n,color:"white",dashed:!0,dashScale:50,gapSize:20}),s.jsx(he,{...n,color:"white",lineWidth:.5,opacity:.1,transparent:!0})]},o))})};ke.displayName="Lines";const hs=new Ae(4,4,4),$e=x.memo(({node:e,setSelectedNode:t,isSelected:r})=>{const[n]=x.useState(hs);return x.useEffect(()=>function(){n.dispose()},[n]),s.jsx(nt,{children:s.jsx("group",{onClick:t,position:new T(e.x,e.y,e.z),children:s.jsx(rt,{center:!0,sprite:!0,zIndexRange:[0,0],children:s.jsx(fs,{className:Ge({selected:r}),onClick:t,children:e.type})})})})});$e.displayName="Node";const fs=S(m)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: ${B.white};
  border: 1px solid ${B.white};
  align-items: center;
  justify-content: center;

  &.selected {
    font-size: 20px;
  }
`,ms=({nodes:e,setSelectedSchemaId:t,selectedId:r})=>s.jsx(s.Fragment,{children:e.map(n=>s.jsx($e,{isSelected:n.ref_id===r,node:{x:n.x,y:n.y,z:n.z,id:n.ref_id||"",type:n.type||""},setSelectedNode:()=>n.ref_id&&t(n.ref_id)},n.ref_id))}),xs=()=>{const[e,t]=x.useState(""),[r,n,o]=Se(p=>[p.schemas,p.links,p.setSchemas]),a=r.filter(p=>p.ref_id&&!p.is_deleted),l=[];a.forEach(p=>{l.some(g=>g.ref_id===p.ref_id)||l.push(p)});const c=p=>{const g=r.some(y=>y.ref_id===p.ref_id);o(g?r.map(y=>y.type===p.type?p:y):[...r,p])},d=p=>{o(r.filter(g=>g.type!==p))},u=l.map(p=>({...p,children:l.filter(g=>g.parent===p.type).map(g=>g.ref_id||"")})),i=ns(u),f=n.filter(p=>p.edge_type==="CHILD_OF"&&i.some(g=>g.ref_id===p.source||g.ref_id===p.target)).map(p=>{const g=i.find(C=>C.ref_id===p.source)||{x:0,y:0,z:0},y=i.find(C=>C.ref_id===p.target)||{x:0,y:0,z:0};return{...p,start:{x:g.x,y:g.y,z:g.z},end:{x:y.x,y:y.y,z:y.z}}}),b=r.find(p=>p.ref_id===e)||null;return s.jsxs(gs,{direction:"row",children:[s.jsx("div",{className:"graph",children:s.jsxs(ot,{camera:{zoom:80},id:"schema-canvas",orthographic:!0,children:[s.jsx(at,{}),s.jsx(ke,{links:f}),s.jsx(s.Fragment,{children:s.jsx(ms,{nodes:i,selectedId:e,setSelectedSchemaId:t})})]})}),s.jsx("div",{className:"editor",children:s.jsx(ds,{onDelete:d,onSchemaCreate:c,selectedSchema:b})})]})},gs=S(m)`
  flex: 1 1 100%;
  justify-content: center;
  align-items: top;
  .graph {
    flex-grow: 1;
  }

  .editor {
    position: relative;
    width: 400px;
    padding: 16px;
    border-left: 1px solid ${B.black};
  }
`,bs=()=>{const{close:e}=A("blueprintGraph"),t=()=>{e()};return s.jsx(xe,{id:"blueprintGraph",kind:"full",onClose:t,preventOutsideClose:!0,children:s.jsx(xs,{})})};function ys(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const ws=({schema:e})=>s.jsx(s.Fragment,{children:s.jsxs(lt,{children:[s.jsx(q,{className:"empty"}),s.jsx(q,{children:ys(e.type??"")})]})}),js=x.memo(ws),vs=({schemas:e})=>s.jsx(s.Fragment,{children:s.jsxs(mt,{component:"table",children:[s.jsx(dt,{children:s.jsxs(xt,{component:"tr",children:[s.jsx(q,{className:"empty"}),s.jsx(q,{children:"Type"}),s.jsx(q,{className:"empty"})]})}),s.jsx("tbody",{children:e==null?void 0:e.map(t=>s.jsx(js,{schema:t},t==null?void 0:t.type))})]})}),Ss=()=>{const[e,t]=x.useState(!0),[r,n,o]=Se(c=>[c.schemas,c.setSchemas,c.setSchemaLinks]),{open:a}=A("blueprintGraph"),{open:l}=A("addType");return x.useEffect(()=>{(async()=>{try{const d=await We();n(d.schemas.filter(u=>u.ref_id&&!u.is_deleted)),o(d.edges),t(!1)}catch(d){console.error("Error fetching data:",d),t(!1)}})()},[n,o]),s.jsxs(m,{grow:1,shrink:1,children:[s.jsxs(m,{direction:"row",justify:"space-between",px:37,py:21,children:[s.jsx(G,{color:"primary",onClick:l,size:"medium",startIcon:s.jsx(we,{}),type:"submit",variant:"contained",children:"Create New Type"}),s.jsx(G,{onClick:a,startIcon:s.jsx(Je,{}),variant:"text",children:"Graph View"})]}),s.jsx(ks,{align:e?"center":"flex-start",justify:e?"center":"flex-start",children:e?s.jsx(J,{color:B.white}):s.jsx(s.Fragment,{children:s.jsx(vs,{schemas:r})})}),s.jsx(bs,{})]})},ks=S(m)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,$s=e=>{const{children:t,value:r,index:n,...o}=e;return r===n?s.jsx(Rs,{"aria-labelledby":`simple-tab-${n}`,hidden:r!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...o,children:t}):null};function Cs(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const Bs=({onClose:e})=>{const[t,r]=x.useState(0),[n]=Ve(i=>[i.isAdmin,i.setPubKey]),o=Oe(i=>i.customSchemaFeatureFlag),a=me(i=>i.appMetaData),l=()=>n?"Admin Settings":"Settings",c=({children:i})=>s.jsxs(Ns,{children:[s.jsx(m,{direction:"row",pt:3,children:s.jsx(Ps,{"data-testid":"setting-label",children:l()})}),i]}),d=(i,h)=>{r(h)},u=[...n?[{label:"General",component:Yt}]:[],{label:"Appearance",component:Jt},...n&&o?[{label:"Blueprint",component:Ss}]:[]];return s.jsxs(Ts,{"data-testid":"settings-modal",direction:"column",children:[s.jsx(c,{children:s.jsx(zs,{"aria-label":"settings tabs",onChange:d,value:t,children:u.map((i,h)=>s.jsx(Fs,{disableRipple:!0,label:i.label,...Cs(h)},i.label))})}),u.map((i,h)=>s.jsx($s,{index:h,value:t,children:a&&s.jsx(i.component,{initialValues:a,onClose:e})},i.label))]})},zs=S(Qe)`
  && {
    .MuiTabs-indicator {
      background: ${B.primaryBlue};
    }
    padding-left: 34px;
  }
`,Ns=S(m)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,Fs=S(Xe)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${B.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${B.white};
    }
  }
`,Rs=S(m)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
  overflow: hidden;
  border-radius: 9px;
`,Ts=S(m)`
  min-height: 0;
  flex: 1;
`,Ps=S(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,sn=()=>{const{close:e}=A("settings"),{visible:t}=A("addItem");return t?null:s.jsx(xe,{background:"BG1",id:"settings",noWrap:!0,onClose:e,preventOutsideClose:!0,children:s.jsx(Bs,{onClose:e})})};export{sn as SettingsModal};