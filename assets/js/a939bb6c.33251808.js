"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[95424],{7432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(74848),o=t(28453);const s={sidebar_position:9,description:"Self-host a relay"},i="Self-Host a Relay",a={id:"advanced/self-relay",title:"Self-Host a Relay",description:"Self-host a relay",source:"@site/versioned_docs/version-v1.0.0/advanced/self-relay.md",sourceDirName:"advanced",slug:"/advanced/self-relay",permalink:"/docs/advanced/self-relay",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/advanced/self-relay.md",tags:[],version:"v1.0.0",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Self-host a relay"},sidebar:"tutorialSidebar",previous:{title:"Combine DV private key shares",permalink:"/docs/advanced/quickstart-combine"},next:{title:"Deployment Best Practices",permalink:"/docs/advanced/deployment-best-practices"}},c={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"self-host-a-relay",children:"Self-Host a Relay"}),"\n",(0,r.jsx)(n.p,{children:"If you are experiencing connectivity issues with the Obol hosted relays, or you want to improve your clusters latency and decentralization, you can opt to host your own relay on a separate open and static internet port."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Figure out your public IP\ncurl v4.ident.me\n\n# Clone the repo and cd into it.\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\ncd charon-distributed-validator-node\n\n# Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname\n\nnano relay/docker-compose.yml\n\ndocker compose -f relay/docker-compose.yml up\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Test whether the relay is publicly accessible. This should return an ENR:\n",(0,r.jsx)(n.code,{children:"curl http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n",(0,r.jsxs)(n.p,{children:["Ensure the ENR returned by the relay contains the correct public IP and port by decoding it with ",(0,r.jsx)(n.a,{href:"https://enr-viewer.com/",children:"ENR viewer"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Configure ",(0,r.jsx)(n.strong,{children:"ALL"})," charon nodes in your cluster to use this relay:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Either by adding a flag: ",(0,r.jsx)(n.code,{children:"--p2p-relays=http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n",(0,r.jsxs)(n.li,{children:["Or by setting the environment variable: ",(0,r.jsx)(n.code,{children:"CHARON_P2P_RELAYS=http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Note that a local ",(0,r.jsx)(n.code,{children:"relay/.charon/charon-enr-private-key"})," file will be created next to ",(0,r.jsx)(n.code,{children:"relay/docker-compose.yml"})," to ensure a persisted relay ENR across restarts."]}),"\n",(0,r.jsxs)(n.p,{children:["A list of publicly available relays that can be used is maintained ",(0,r.jsx)(n.a,{href:"/docs/faq/risks",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);