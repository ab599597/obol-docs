"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[21137],{52276:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=s(74848),l=s(28453);const i={description:"The client object of the Obol SDK",sidebar_position:6,sidebar_label:"Client"},r=void 0,d={id:"sdk/classes/Client",title:"Client",description:"The client object of the Obol SDK",source:"@site/versioned_docs/version-v0.19.1/sdk/classes/Client.md",sourceDirName:"sdk/classes",slug:"/sdk/classes/Client",permalink:"/v0.19.1/sdk/classes/Client",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/sdk/classes/Client.md",tags:[],version:"v0.19.1",sidebarPosition:6,frontMatter:{description:"The client object of the Obol SDK",sidebar_position:6,sidebar_label:"Client"},sidebar:"apiSidebar",previous:{title:"FORK_MAPPING",permalink:"/v0.19.1/sdk/enumerations/FORK_MAPPING"},next:{title:"ClusterDefintion",permalink:"/v0.19.1/sdk/interfaces/ClusterDefintion"}},c={},h=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new Client(config, signer)",id:"new-clientconfig-signer",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"createClusterDefinition()",id:"createclusterdefinition",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Throws",id:"throws",level:4},{value:"Source",id:"source-1",level:4},{value:"getClusterDefinition()",id:"getclusterdefinition",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Throws",id:"throws-1",level:4},{value:"Source",id:"source-2",level:4},{value:"getClusterLock()",id:"getclusterlock",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Throws",id:"throws-2",level:4},{value:"Source",id:"source-3",level:4},{value:"request()",id:"request",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Source",id:"source-4",level:4},{value:"updateClusterDefinition()",id:"updateclusterdefinition",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Throws",id:"throws-3",level:4},{value:"Source",id:"source-5",level:4}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Obol SDK ",(0,n.jsx)(t.code,{children:"Client"})," can be used for creating, managing and activating distributed validators."]}),"\n",(0,n.jsx)(t.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Base"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(t.h3,{id:"new-clientconfig-signer",children:"new Client(config, signer)"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"new Client"}),"(",(0,n.jsx)(t.code,{children:"config"}),", ",(0,n.jsx)(t.code,{children:"signer"}),"?): ",(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/classes/Client",children:(0,n.jsx)(t.code,{children:"Client"})})]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"config"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Object"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"config.baseUrl"}),"?"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"config.chainId"}),"?"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"signer"}),"?"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Signer"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ethersJS Signer"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/classes/Client",children:(0,n.jsx)(t.code,{children:"Client"})})}),"\n",(0,n.jsx)(t.p,{children:"Obol-SDK Client instance"}),"\n",(0,n.jsxs)(t.p,{children:["An example of how to instantiate obol-sdk Client:\n",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29",children:"obolClient"})]}),"\n",(0,n.jsx)(t.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Base.constructor"})}),"\n",(0,n.jsx)(t.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"index.ts:27"}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Modifier"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Inherited from"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"baseUrl"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"public"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Base.baseUrl"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"chainId"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"public"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Base.chainId"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"fork_version"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"public"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Base.fork_version"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"signer"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"private"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"undefined"})," | ",(0,n.jsx)(t.code,{children:"Signer"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"createclusterdefinition",children:"createClusterDefinition()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"createClusterDefinition"}),"(",(0,n.jsx)(t.code,{children:"newCluster"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.code,{children:"string"})," >"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Creates a cluster definition which contains cluster configuration."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"newCluster"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/interfaces/ClusterPayload",children:(0,n.jsx)(t.code,{children:"ClusterPayload"})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The new unique cluster."})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.code,{children:"string"})," >"]}),"\n",(0,n.jsx)(t.p,{children:"config_hash."}),"\n",(0,n.jsx)(t.h4,{id:"throws",children:"Throws"}),"\n",(0,n.jsx)(t.p,{children:"On duplicate entries, missing or wrong cluster keys."}),"\n",(0,n.jsxs)(t.p,{children:["An example of how to use createClusterDefinition:\n",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts",children:"createObolCluster"})]}),"\n",(0,n.jsx)(t.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"index.ts:42"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"getclusterdefinition",children:"getClusterDefinition()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"getClusterDefinition"}),"(",(0,n.jsx)(t.code,{children:"configHash"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/interfaces/ClusterDefintion",children:(0,n.jsx)(t.code,{children:"ClusterDefintion"})})," >"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"configHash"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/interfaces/ClusterDefintion",children:(0,n.jsx)(t.code,{children:"ClusterDefintion"})})," >"]}),"\n",(0,n.jsx)(t.p,{children:"The  cluster definition for config hash"}),"\n",(0,n.jsx)(t.h4,{id:"throws-1",children:"Throws"}),"\n",(0,n.jsx)(t.p,{children:"On not found config hash."}),"\n",(0,n.jsxs)(t.p,{children:["An example of how to use getClusterDefinition:\n",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts",children:"getObolClusterDefinition"})]}),"\n",(0,n.jsx)(t.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"index.ts:132"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"getclusterlock",children:"getClusterLock()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"getClusterLock"}),"(",(0,n.jsx)(t.code,{children:"configHash"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/interfaces/ClusterLock",children:(0,n.jsx)(t.code,{children:"ClusterLock"})})," >"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"configHash"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/interfaces/ClusterLock",children:(0,n.jsx)(t.code,{children:"ClusterLock"})})," >"]}),"\n",(0,n.jsx)(t.p,{children:"The matched cluster details (lock) from DB"}),"\n",(0,n.jsx)(t.h4,{id:"throws-2",children:"Throws"}),"\n",(0,n.jsx)(t.p,{children:"On not found cluster definition or lock."}),"\n",(0,n.jsxs)(t.p,{children:["An example of how to use getClusterLock:\n",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts",children:"getObolClusterLock"})]}),"\n",(0,n.jsx)(t.h4,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"index.ts:148"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"request()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"protected"})})," ",(0,n.jsx)(t.strong,{children:"request"}),"< ",(0,n.jsx)(t.code,{children:"T"}),">(",(0,n.jsx)(t.code,{children:"endpoint"}),", ",(0,n.jsx)(t.code,{children:"options"}),"?): ",(0,n.jsx)(t.code,{children:"Promise"}),"<  ",(0,n.jsx)(t.code,{children:"T"})," >"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type parameter"})})}),(0,n.jsx)(t.tbody,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"T"})})})})]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"endpoint"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"options"}),"?"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"RequestInit"})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.code,{children:"T"})," >"]}),"\n",(0,n.jsx)(t.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Base.request"})}),"\n",(0,n.jsx)(t.h4,{id:"source-4",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"base.ts:23"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"updateclusterdefinition",children:"updateClusterDefinition()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"updateClusterDefinition"}),"(",(0,n.jsx)(t.code,{children:"operatorPayload"}),", ",(0,n.jsx)(t.code,{children:"configHash"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/interfaces/ClusterDefintion",children:(0,n.jsx)(t.code,{children:"ClusterDefintion"})})," >"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Approves joining a cluster with specific configuration."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"operatorPayload"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/type-aliases/OperatorPayload",children:(0,n.jsx)(t.code,{children:"OperatorPayload"})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The operator data including signatures."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"configHash"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The config hash of the cluster which the operator confirms joining to."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"< ",(0,n.jsx)(t.a,{href:"/v0.19.1/sdk/interfaces/ClusterDefintion",children:(0,n.jsx)(t.code,{children:"ClusterDefintion"})})," >"]}),"\n",(0,n.jsx)(t.p,{children:"The cluster definition."}),"\n",(0,n.jsx)(t.h4,{id:"throws-3",children:"Throws"}),"\n",(0,n.jsx)(t.p,{children:"On unauthorized, duplicate entries, missing keys, not found cluster or invalid data."}),"\n",(0,n.jsxs)(t.p,{children:["An example of how to use updateClusterDefinition:\n",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts",children:"updateClusterDefinition"})]}),"\n",(0,n.jsx)(t.h4,{id:"source-5",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"index.ts:93"})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var n=s(96540);const l={},i=n.createContext(l);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);