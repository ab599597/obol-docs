"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[22959],{32042:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=i(74848),r=i(28453);const o={sidebar_position:3,description:"Centralization Risks and mitigation"},s="Centralization risks and mitigation",a={id:"int/faq/risks",title:"Centralization risks and mitigation",description:"Centralization Risks and mitigation",source:"@site/versioned_docs/version-v0.19.1/int/faq/risks.md",sourceDirName:"int/faq",slug:"/int/faq/risks",permalink:"/v0.19.1/int/faq/risks",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/int/faq/risks.md",tags:[],version:"v0.19.1",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Centralization Risks and mitigation"},sidebar:"tutorialSidebar",previous:{title:"Errors & Resolutions",permalink:"/v0.19.1/int/faq/errors"},next:{title:"Handling DKG failure",permalink:"/v0.19.1/int/faq/dkg_failure"}},l={},h=[{value:"Risk: Obol hosting the relay infrastructure",id:"risk-obol-hosting-the-relay-infrastructure",level:2},{value:"Risk: Obol being able to update Charon code",id:"risk-obol-being-able-to-update-charon-code",level:2},{value:"Risk: Obol hosting the DV Launchpad",id:"risk-obol-hosting-the-dv-launchpad",level:2},{value:"Risk: Obol going bust/rogue",id:"risk-obol-going-bustrogue",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"centralization-risks-and-mitigation",children:"Centralization risks and mitigation"})}),"\n",(0,n.jsx)(t.h2,{id:"risk-obol-hosting-the-relay-infrastructure",children:"Risk: Obol hosting the relay infrastructure"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mitigation"}),": Self-host a relay"]}),"\n",(0,n.jsxs)(t.p,{children:["One of the risks associated with Obol hosting the ",(0,n.jsx)(t.a,{href:"/v0.19.1/charon/networking",children:"LibP2P relays"})," infrastructure allowing peer discovery is that if Obol-hosted relays go down, peers won't be able to discover each other and perform the DKG. To mitigate this risk, external organizations and node operators can consider self-hosting a relay. This way, if Obol's relays go down, the clusters can still operate through other relays in the network. Ensure that all nodes in the cluster use the same relays, or they will not be able to find each other if they are connected to different relays."]}),"\n",(0,n.jsxs)(t.p,{children:["The following non-Obol entities run relays that you can consider adding to your cluster (you can have more than one per cluster, see the ",(0,n.jsx)(t.code,{children:"--p2p-relays"})," flag of ",(0,n.jsx)(t.a,{href:"/v0.19.1/charon/charon-cli-reference#the-run-command",children:(0,n.jsx)(t.code,{children:"charon run"})}),"):"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Entity"}),(0,n.jsx)(t.th,{children:"Relay URL"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.dsrvlabs.com/",children:"DSRV"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://charon-relay.dsrvlabs.dev",children:"https://charon-relay.dsrvlabs.dev"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://infstones.com/",children:"Infstones"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://obol-relay.infstones.com:3640/",children:"https://obol-relay.infstones.com:3640/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.hashquark.io/",children:"Hashquark"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://relay-2.prod-relay.721.land/",children:"https://relay-2.prod-relay.721.land/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://figment.io/",children:"Figment"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://relay-1.obol.figment.io/",children:"https://relay-1.obol.figment.io/"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"risk-obol-being-able-to-update-charon-code",children:"Risk: Obol being able to update Charon code"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mitigation"}),": Pin specific docker versions or compile from source on a trusted commit"]}),"\n",(0,n.jsxs)(t.p,{children:["Another risk associated with Obol is having the ability to update the ",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon",children:"Charon code"})," running on the network which could introduce vulnerabilities or malicious code. To mitigate this risk, operators can consider pinning specific versions of the code that have been thoroughly tested and accepted by the network. This would ensure that any updates are carefully vetted and reviewed by the community."]}),"\n",(0,n.jsx)(t.h2,{id:"risk-obol-hosting-the-dv-launchpad",children:"Risk: Obol hosting the DV Launchpad"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mitigation"}),": Use ",(0,n.jsx)(t.a,{href:"/v0.19.1/charon/charon-cli-reference",children:(0,n.jsx)(t.code,{children:"create cluster"})})," or ",(0,n.jsx)(t.a,{href:"/v0.19.1/charon/charon-cli-reference",children:(0,n.jsx)(t.code,{children:"create dkg"})})," locally and distribute the files manually"]}),"\n",(0,n.jsxs)(t.p,{children:["Hosting the first Charon frontend, the ",(0,n.jsx)(t.a,{href:"/v0.19.1/dvl/intro",children:"DV Launchpad"}),", on a centralized server could create a single point of failure, as users would have to rely on Obol's server to access the protocol. This could limit the decentralization of the protocol and could make it vulnerable to attacks or downtime. Obol hosting the launchpad on a decentralized network, such as IPFS is a first step but not enough. This is why the Charon code is open-source and contains a CLI interface to interact with the protocol locally."]}),"\n",(0,n.jsxs)(t.p,{children:["To mitigate the risk of launchpad failure, consider using the ",(0,n.jsx)(t.code,{children:"create cluster"})," or ",(0,n.jsx)(t.code,{children:"create dkg"})," commands locally and distributing the key shares files manually."]}),"\n",(0,n.jsx)(t.h2,{id:"risk-obol-going-bustrogue",children:"Risk: Obol going bust/rogue"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mitigation"}),": Use key recovery"]}),"\n",(0,n.jsx)(t.p,{children:"The final centralization risk associated with Obol is the possibility of the company going bankrupt or acting maliciously, which would lead to a loss of control over the network and potentially cause damage to the ecosystem. To mitigate this risk, Obol has implemented a key recovery mechanism. This would allow the clusters to continue operating and to retrieve full private keys even if Obol is no longer able to provide support."}),"\n",(0,n.jsxs)(t.p,{children:["A guide to recombine key shares into a single private key can be accessed ",(0,n.jsx)(t.a,{href:"/v0.19.1/advanced/quickstart-combine",children:"here"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);