import{s as d,g,r as i,y as C,o as E,a as F,j as t,F as S,T,a$ as L,b4 as $}from"./index-b52b9a36.js";import{p as G,g as N}from"./index-7bdbb31f.js";import{f as K}from"./index-1d388c98.js";import{B as P}from"./index-ff5556f4.js";import{C as R}from"./ClipLoader-43a4190e.js";import"./index-75b3152e.js";import"./index-eb4113fc.js";import"./SourcesTableIcon-cda6696b.js";import"./CheckIcon-e8369aef.js";import"./DeleteNodeIcon-6d83e413.js";import"./SoundIcon-b5df968c.js";import"./SucessFeedBackIcon-12c8d842.js";import"./Stack-89f040b9.js";import"./clsx-8500b90d.js";import"./createSvgIcon-c718cb6e.js";import"./TextareaAutosize-681fdf58.js";import"./FormControlLabel-278abf1c.js";import"./Typography-194334a1.js";import"./Switch-7c8f543a.js";const U=()=>{const[l,n]=i.useState(""),[p,m]=i.useState(!0),[u,h]=i.useState(!1),[x,f]=i.useState(0),[_,v]=i.useState([]),[c,j]=i.useState(),{close:A}=C("nodeAction"),s=K(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=E(e=>e),{pubKey:z}=F();async function D(e){if(j(e),e.bounty){f(2);return}await y(e,null)}const M=async e=>{if(c){await y(c,e);return}n("Node Action not selected")},k=()=>{n(""),B(),A()},y=async(e,a)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:z,action_name:e.name,bounty:a};await G(o),A(),L("Submitted"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return i.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await N(b[o].action);v(r.actions),f(1),m(!1)}catch(r){console.error(r)}}const a=w();if(!a){e();return}j(a),a.bounty?f(2):y(a,null),m(!1)},[b,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(S,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(Y,{children:c==null?void 0:c.display_name})}),p&&t.jsxs(H,{children:[t.jsx(R,{color:g.lightGray,size:50})," "]}),x===1&&t.jsx(S,{mb:16,mt:16,children:_.map(e=>t.jsx(O,{onClick:()=>D(e),children:e.display_name},e.name))}),x===2&&t.jsx(P,{cancelBounty:k,loading:u,setBounty:M}),l&&t.jsx(W,{children:l})]})},H=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,O=d(T)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${g.white};

  &:hover {
    color: ${g.GRAY3};
  }
`,W=d(S)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,Y=d(T)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,pe=()=>{const{close:l}=C("nodeAction"),{removeSelectedActionDetail:n}=E(u=>u),p=()=>{n(),l()},m="small";return t.jsx($,{id:"nodeAction",kind:m,onClose:p,preventOutsideClose:!0,children:t.jsx(U,{})})};export{pe as NodeActionModal};
