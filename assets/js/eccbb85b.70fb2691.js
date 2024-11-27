"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[76859],{1257:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(74848),s=t(28453);const r={sidebar_position:7,description:"Run Prysm VCs in a DV"},i="Run Prysm validators as part of a DV Cluster",a={id:"int/quickstart/advanced/prysm-vc",title:"Run Prysm validators as part of a DV Cluster",description:"Run Prysm VCs in a DV",source:"@site/versioned_docs/version-v0.16.0/int/quickstart/advanced/prysm-vc.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/prysm-vc",permalink:"/v0.16.0/int/quickstart/advanced/prysm-vc",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/quickstart/advanced/prysm-vc.md",tags:[],version:"v0.16.0",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Run Prysm VCs in a DV"},sidebar:"tutorialSidebar",previous:{title:"Advanced Docker Configs",permalink:"/v0.16.0/int/quickstart/advanced/adv-docker-configs"},next:{title:"Self-Host a Relay",permalink:"/v0.16.0/int/quickstart/advanced/self-relay"}},d={},c=[];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"run-prysm-validators-as-part-of-a-dv-cluster",children:"Run Prysm validators as part of a DV Cluster"})}),"\n",(0,n.jsxs)(o.admonition,{type:"info",children:[(0,n.jsx)(o.mdxAdmonitionTitle,{}),(0,n.jsxs)(o.p,{children:["Support for prysm validator clients is in an experimental phase as prysm doesn't provide ",(0,n.jsx)(o.a,{href:"https://github.com/prysmaticlabs/prysm/issues/11580",children:"complete support"}),"\nfor running their validator client on a beacon node REST API yet. Stay up to date on the latest support information for all validator clients at ",(0,n.jsx)(o.a,{href:"https://dvt.obol.tech",children:"dvt.obol.tech"}),"."]})]}),"\n",(0,n.jsxs)(o.p,{children:["We have provided experimental support of prysm validator client through ",(0,n.jsx)(o.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster/blob/main/compose-prysm.yml",children:"compose-prysm.yml"}),"\nwhich needs a prysm beacon node to work alongside a REST based beacon node. Here are the steps to test prysm in a DV Cluster:"]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Run the following command:","\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"cp docker-compose.override.yml.sample docker-compose.override.yml\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Disable"})," the VCs in ",(0,n.jsx)(o.code,{children:"docker-compose.override.yml"})," that are to be replaced by corresponding prysm VCs by un-commenting the ",(0,n.jsx)(o.code,{children:"profiles"})," field\n(",(0,n.jsx)(o.a,{href:"https://docs.docker.com/compose/profiles/",children:"more details on profiles"}),"). Also disable the prysm VCs that are not required in the cluster in ",(0,n.jsx)(o.code,{children:"docker-compose.override.yml"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Run the following command:","\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"docker compose -f docker-compose.yml -f compose-prysm.yml -f docker-compose.override.yml up --build\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var n=t(96540);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);