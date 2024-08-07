"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[79483],{37571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(74848),a=r(28453),s=r(49489),l=r(7227);const o={sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},i="Create the private key shares",c={id:"int/quickstart/alone/create-keys",title:"Create the private key shares",description:"Run all nodes in a distributed validator cluster",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/alone/create-keys.md",sourceDirName:"int/quickstart/alone",slug:"/int/quickstart/alone/create-keys",permalink:"/docs/v0.17.0/int/quickstart/alone/create-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/alone/create-keys.md",tags:[],version:"v0.17.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"Run a test cluster locally",permalink:"/docs/v0.17.0/int/quickstart/alone/test-locally"},next:{title:"Deploy the cluster",permalink:"/docs/v0.17.0/int/quickstart/alone/deploy"}},u={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Create the key shares locally",id:"create-the-key-shares-locally",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-the-private-key-shares",children:"Create the private key shares"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Charon is in an alpha state and should be used with caution according to its ",(0,n.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"Running a Distributed Validator alone means that a single operator manages all of the nodes of the DV. Depending on the operators security preferences, the private key shares can be created centrally, and distributed securely to each node. This is the focus of the below guide."}),(0,n.jsxs)(t.p,{children:["Alternatively, the private key shares can be created in a lower-trust manner with a ",(0,n.jsx)(t.a,{href:"/docs/v0.17.0/int/key-concepts#distributed-validator-key-generation-ceremony",children:"Distributed Key Generation"})," process, which avoids the validator private key being stored in full anywhere, at any point in its lifecycle. Follow the ",(0,n.jsx)(t.a,{href:"/docs/v0.17.0/int/quickstart/group/",children:"group quickstart"})," instead for this latter case."]})]}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Ensure you have ",(0,n.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed."]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure ",(0,n.jsx)(t.code,{children:"docker"})," is running before executing the commands below."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-the-key-shares-locally",children:"Create the key shares locally"}),"\n",(0,n.jsxs)(s.A,{groupId:"create-keys",children:[(0,n.jsxs)(l.A,{value:"docker",label:"Docker CLI",default:!0,children:[(0,n.jsxs)(t.p,{children:["Create the artifacts needed to run a DV cluster by running the following command to setup the inputs for the DV.\nCheck the ",(0,n.jsx)("a",{href:"../../../charon/charon-cli-reference",children:"Charon CLI reference"})," for additional optional flags to set."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("pre",{children:(0,n.jsxs)("code",{children:[(0,n.jsx)(t.p,{children:"WITHDRAWAL_ADDR=[ENTER YOUR WITHDRAWAL ADDRESS HERE]"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.p,{children:"FEE_RECIPIENT_ADDR=[ENTER YOUR FEE RECIPIENT ADDRESS HERE]"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.p,{children:"NB_NODES=[ENTER AMOUNT OF DESIRED NODES]"})]})}),(0,n.jsxs)(t.p,{children:["Then, run this command to create all the key shares and cluster artifacts locally:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:(0,n.jsxs)(t.p,{children:['docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon',":v0",'.17.0 create cluster --name="Quickstart Cluster" --withdrawal-addresses="',"${WITHDRAWAL_ADDR}",'" --fee-recipient-addresses="',"${FEE_RECIPIENT_ADDR}",'" --nodes="',"${NB_NODES}",'" --network="goerli" --num-validators=1 --cluster-dir="cluster"']})})})]}),(0,n.jsx)(l.A,{value:"launchpad",label:"Launchpad UI",children:(0,n.jsxs)(t.p,{children:["Go to the ",(0,n.jsx)("a",{href:"https://goerli.launchpad.obol.tech",children:"Obol Launchpad"})," and select ",(0,n.jsx)("code",{children:"Create a distributed validator alone"}),". Follow the steps to configure your DV cluster."]})})]}),"\n",(0,n.jsxs)(t.p,{children:["After successful completion, a subdirectory ",(0,n.jsx)(t.code,{children:".charon/cluster"})," should be created. In it are as many folders as nodes of the cluster. Each folder contains partial private keys that together make up the distributed validator described in ",(0,n.jsx)(t.code,{children:".charon/cluster/cluster-lock.json"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Once ready, you can move to ",(0,n.jsx)(t.a,{href:"/docs/v0.17.0/int/quickstart/alone/deploy",children:"deploying this cluster physically"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7227:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},49489:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),a=r(34164),s=r(24245),l=r(56347),o=r(36494),i=r(62814),c=r(45167),u=r(69900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:r,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==n&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(x,{...t,...e}),(0,y.jsx)(k,{...t,...e})]})}function g(e){const t=(0,m.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);