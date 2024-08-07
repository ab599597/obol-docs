"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[99175],{77713:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=o(74848),n=o(28453);const s={sidebar_position:3,description:"Move the private key shares to the nodes and run the cluster"},i="Deploy the cluster",a={id:"int/quickstart/alone/deploy",title:"Deploy the cluster",description:"Move the private key shares to the nodes and run the cluster",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/alone/deploy.md",sourceDirName:"int/quickstart/alone",slug:"/int/quickstart/alone/deploy",permalink:"/docs/v0.17.0/int/quickstart/alone/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/alone/deploy.md",tags:[],version:"v0.17.0",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Move the private key shares to the nodes and run the cluster"},sidebar:"tutorialSidebar",previous:{title:"Create the private key shares",permalink:"/docs/v0.17.0/int/quickstart/alone/create-keys"},next:{title:"Run a cluster as a group",permalink:"/docs/v0.17.0/int/quickstart/group/"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"deploy-the-cluster",children:"Deploy the cluster"}),"\n",(0,r.jsxs)(t.p,{children:["To distribute your cluster physically and start the DV, each node needs a directory called ",(0,r.jsx)(t.code,{children:".charon"})," with one (or several) private key shares within it as per the structure below."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\u251c\u2500\u2500 .charon\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 ...\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-N.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-N.txt\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\ud83d\udc49"," Use the single node ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"docker compose"}),", the kubernetes ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-k8s-distributed-validator-node",children:"manifests"}),", or the ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/helm-charts",children:"helm chart"})," example repos to get your nodes up and connected after loading the ",(0,r.jsx)(t.code,{children:".charon"})," folder artifacts into them appropriately."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Right now, the ",(0,r.jsx)(t.code,{children:"charon-distributed-node-cluster"})," repo ",(0,r.jsx)(t.a,{href:"./create-keys",children:"used earlier to create the private keys"})," outputs a folder structure like ",(0,r.jsx)(t.code,{children:".charon/ cluster/node0/validator_keys"}),". Make sure to grab the ",(0,r.jsx)(t.code,{children:"./node0/*"})," folder, RENAME it to ",(0,r.jsx)(t.code,{children:".charon"})," and then move it to one of the single node repo above to have a working cluster as per the folder structure shown above."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var r=o(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);