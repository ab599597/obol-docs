"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[73496],{2964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(74848),a=n(28453);n(49489),n(7227);const o={sidebar_position:1,description:"Activate the Distributed Validator using the deposit contract"},i="Activate a DV",s={id:"run/running/activate-dv",title:"Activate a DV",description:"Activate the Distributed Validator using the deposit contract",source:"@site/docs/run/running/activate-dv.mdx",sourceDirName:"run/running",slug:"/run/running/activate-dv",permalink:"/next/run/running/activate-dv",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/run/running/activate-dv.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Activate the Distributed Validator using the deposit contract"},sidebar:"tutorialSidebar",previous:{title:"Test a Cluster",permalink:"/next/run/prepare/test-command"},next:{title:"Update a DV",permalink:"/next/run/running/update"}},l={},c=[];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"activate-a-dv",children:"Activate a DV"})}),"\n",(0,r.jsx)(t.p,{children:"If you have successfully created a distributed validator and you are ready to activate it, congratulations! \ud83c\udf89"}),"\n",(0,r.jsxs)(t.p,{children:["Once you have connected all of your Charon clients together, synced all of your ethereum nodes such that the monitoring indicates that they are all healthy and ready to operate, ",(0,r.jsx)(t.strong,{children:"ONE operator"})," may proceed to deposit and activate the validator(s)."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"deposit-data.json"})," to be used to deposit will be located in each operator's ",(0,r.jsx)(t.code,{children:".charon"})," folder. The copies across every node should be identical and any of them can be uploaded."]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["If you are being given a ",(0,r.jsx)(t.code,{children:"deposit-data.json"})," file that you didn't generate yourself, please take extreme care to ensure this operator has not given you a malicious ",(0,r.jsx)(t.code,{children:"deposit-data.json"})," file that is not the one you expect. Cross reference the files from multiple operators if there is any doubt. Activating the wrong validator or an invalid deposit could result in complete theft or loss of funds."]})}),"\n",(0,r.jsx)(t.p,{children:"Use any of the following tools to deposit. Please use the third-party tools at your own risk and always double check the staking contract address."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)("a",{href:"https://launchpad.obol.org/deposit/advisories/",target:"_blank",children:"Obol Distributed Validator Launchpad"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)("a",{href:"https://launchpad.ethereum.org/",target:"_blank",children:"ethereum.org Staking Launchpad"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["From a ",(0,r.jsx)("a",{href:"https://safe.global/",children:"SAFE"})," Multisig:",(0,r.jsx)("br",{}),"\n(Repeat these steps for every validator to deposit in your cluster)","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["From the SAFE UI, click on ",(0,r.jsx)("code",{children:"New Transaction"})," then ",(0,r.jsx)("code",{children:"Transaction Builder"})," to create a new custom transaction"]}),"\n",(0,r.jsxs)(t.li,{children:["Enter the beacon chain contract for Deposit on mainnet - you can find it ",(0,r.jsx)("a",{href:"https://ethereum.org/en/staking/deposit-contract/",children:"here"})]}),"\n",(0,r.jsx)(t.li,{children:"Fill the transaction information"}),"\n",(0,r.jsxs)(t.li,{children:["Set amount to ",(0,r.jsx)("code",{children:"32"})," in ETH"]}),"\n",(0,r.jsxs)(t.li,{children:["Use your ",(0,r.jsx)("code",{children:"deposit-data.json"})," to fill the required data : ",(0,r.jsx)("code",{children:"pubkey"}),",",(0,r.jsx)("code",{children:"withdrawal credentials"}),",",(0,r.jsx)("code",{children:"signature"}),",",(0,r.jsx)("code",{children:"deposit_data_root"}),". Make sure to prefix the input with ",(0,r.jsx)("code",{children:"0x"})," to format them in bytes"]}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)("code",{children:"Add transaction"})]}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)("code",{children:"Create Batch"})]}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)("code",{children:"Send Batch"}),", you can click on ",(0,r.jsx)("code",{children:"Simulate"})," to check if the transaction will execute successfully"]}),"\n",(0,r.jsx)(t.li,{children:"Get the minimum threshold of signatures from the other addresses and execute the custom transaction"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The activation process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(34164),o=n(24245),i=n(56347),s=n(36494),l=n(62814),c=n(45167),u=n(69900);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);