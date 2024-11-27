"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[57878],{30291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(74848),r=n(28453),i=n(49489),o=n(7227);const s={sidebar_position:4,description:"Activate the Distributed Validator using the deposit contract"},l="Activate a DV",c={id:"int/quickstart/activate-dv",title:"Activate a DV",description:"Activate the Distributed Validator using the deposit contract",source:"@site/versioned_docs/version-v0.17.1/int/quickstart/activate-dv.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/activate-dv",permalink:"/v0.17.1/int/quickstart/activate-dv",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/int/quickstart/activate-dv.md",tags:[],version:"v0.17.1",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Activate the Distributed Validator using the deposit contract"},sidebar:"tutorialSidebar",previous:{title:"Using the CLI",permalink:"/v0.17.1/int/quickstart/group/quickstart-cli"},next:{title:"Exit a DV",permalink:"/v0.17.1/int/quickstart/quickstart-exit"}},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"activate-a-dv",children:"Activate a DV"})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["Charon is in an alpha state and should be used with caution according to its ",(0,a.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"If you have successfully created a distributed validator and you are ready to activate it, congratulations! \ud83c\udf89"}),"\n",(0,a.jsxs)(t.p,{children:["Once you have connected all of your charon clients together, synced all of your ethereum nodes such that the monitoring indicates that they are all healthy and ready to operate, ",(0,a.jsx)(t.strong,{children:"ONE operator"})," may proceed to deposit and activate the validator(s)."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"deposit-data.json"})," to be used to deposit will be located in each operator's ",(0,a.jsx)(t.code,{children:".charon"})," folder. The copies across every node should be identical and any of them can be uploaded."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["If you are being given a ",(0,a.jsx)(t.code,{children:"deposit-data.json"})," file that you didn't generate yourself, please take extreme care to ensure this operator has not given you a malicious ",(0,a.jsx)(t.code,{children:"deposit-data.json"})," file that is not the one you expect. Cross reference the files from multiple operators if there is any doubt. Activating the wrong validator or an invalid deposit could result in complete theft or loss of funds."]})}),"\n",(0,a.jsx)(t.p,{children:"Use any of the following tools to deposit. Please use the third-party tools at your own risk and always double check the staking contract address."}),"\n",(0,a.jsxs)(i.A,{groupId:"network",children:[(0,a.jsx)(o.A,{value:"go\xebrli",label:"Go\xebrli",default:!0,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://goerli.launchpad.obol.tech/",target:"_blank",children:"Obol Distributed Validator Launchpad"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://goerli.launchpad.ethereum.org/en/",target:"_blank",children:"ethereum.org Staking Launchpad"})})]})}),(0,a.jsx)(o.A,{value:"mainnet",label:"Mainnet",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Obol Distributed Validator Launchpad (Soon)"}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://launchpad.ethereum.org/",target:"_blank",children:"ethereum.org Staking Launchpad"})}),(0,a.jsxs)("li",{children:["From a ",(0,a.jsx)("a",{href:"https://safe.global/",children:"SAFE"})," Multisig (Repeat these steps for every validator to deposit in your cluster)"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["From the SAFE UI, click on ",(0,a.jsx)("code",{children:"New Transaction"})," then ",(0,a.jsx)("code",{children:"Transaction Builder"})," to create a new custom transaction"]}),(0,a.jsxs)("li",{children:["Enter the beacon chain contract for Deposit on mainnet - you can find it ",(0,a.jsx)("a",{href:"https://ethereum.org/en/staking/deposit-contract/",children:"here"})]}),(0,a.jsx)("li",{children:"Fill the transaction information"}),(0,a.jsxs)("li",{children:["Set amount to ",(0,a.jsx)("code",{children:"32"})," in ETH"]}),(0,a.jsxs)("li",{children:["Use your ",(0,a.jsx)("code",{children:"deposit-data.json"})," to fill the required data : ",(0,a.jsx)("code",{children:"pubkey"}),",",(0,a.jsx)("code",{children:"withdrawal credentials"}),",",(0,a.jsx)("code",{children:"signature"}),",",(0,a.jsx)("code",{children:"deposit_data_root"}),". Make sure to prefix the input with ",(0,a.jsx)("code",{children:"0x"})," to format them in bytes"]}),(0,a.jsxs)("li",{children:["Click on ",(0,a.jsx)("code",{children:"Add transaction"})]})]}),(0,a.jsxs)("li",{children:["Click on ",(0,a.jsx)("code",{children:"Create Batch"})]}),(0,a.jsxs)("li",{children:["Click on ",(0,a.jsx)("code",{children:"Send Batch"}),", you can click on Simulate to check if the transaction will execute successfully"]}),(0,a.jsx)("li",{children:"Get the minimum threshold of signatures from the other addresses and execute the custom transaction"})]})]})})]}),"\n",(0,a.jsx)(t.p,{children:"The activation process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(96540),r=n(34164),i=n(24245),o=n(56347),s=n(36494),l=n(62814),c=n(45167),u=n(69900);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),v=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);