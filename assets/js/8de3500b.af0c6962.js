"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[9e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18679:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},73992:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(87462),n=r(67294),o=r(86010),i=r(72957),l=r(16550),u=r(75238),s=r(33609),c=r(92560);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=m({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=u??d;return h({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=r(51048);const v="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==l&&(d(t),u(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.Z)("tabs__item",y,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},7963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(73992),i=r(18679);const l={sidebar_position:6,description:"Exit a validator"},u="Exit a validator",s={unversionedId:"int/quickstart/quickstart-exit",id:"int/quickstart/quickstart-exit",title:"Exit a validator",description:"Exit a validator",source:"@site/docs/int/quickstart/quickstart-exit.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-exit",permalink:"/docs/next/int/quickstart/quickstart-exit",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/quickstart-exit.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Exit a validator"},sidebar:"tutorialSidebar",previous:{title:"Combine DV keyshares",permalink:"/docs/next/int/quickstart/quickstart-combine"},next:{title:"Frequently asked questions",permalink:"/docs/next/int/faq/general"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Confirm the <code>EXIT_EPOCH</code>",id:"step-1-confirm-the-exit_epoch",level:2},{value:"Step 2. Run the <code>voluntary-exit</code> command on your validator client",id:"step-2-run-the-voluntary-exit-command-on-your-validator-client",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:d};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exit-a-validator"},"Exit a validator"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet.")),(0,n.kt)("p",null,"Exiting your validator keys can be useful in situations where you want to stop staking and withdraw your staked ETH."),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A quorum of operators needs to run the same exit command for the exit to succeed."),(0,n.kt)("li",{parentName:"ul"},"If a charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has stored. If all charon clients restart before the required threshold of exit messages are received, operators will have to rebroadcast the exit messages. ")),(0,n.kt)("h2",{id:"step-1-confirm-the-exit_epoch"},"Step 1. Confirm the ",(0,n.kt)("inlineCode",{parentName:"h2"},"EXIT_EPOCH")),(0,n.kt)("p",null,"Confirm the earliest ",(0,n.kt)("inlineCode",{parentName:"p"},"EXIT_EPOCH")," to use for your validators. Assuming you want to exit as soon as possible, the default epoch of ",(0,n.kt)("inlineCode",{parentName:"p"},"112260")," is sufficient."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export EXIT_EPOCH=112260\n")),(0,n.kt)("h2",{id:"step-2-run-the-voluntary-exit-command-on-your-validator-client"},"Step 2. Run the ",(0,n.kt)("inlineCode",{parentName:"h2"},"voluntary-exit")," command on your validator client"),(0,n.kt)("p",null,"Run the appropriate command to broadcast an exit message from your validator client to its upstream charon client."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This command should be executed on your running validator client, not your charon client. It needs to be the validator client that is connected to your charon client taking part in the Distributed Validator Cluster, and not a standalone VC connected to a different consensus layer client, as you are only signing a partial exit message, with a partial private key share, which charon will combine with the other partial exit messages from the other operators in the cluster before broadcasting to the consensus layer when it valid. ")),(0,n.kt)(o.Z,{groupId:"validator-clients",mdxType:"Tabs"},[(0,n.kt)(i.Z,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,String.raw`docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
      --beacon-node-api-endpoint="http://charon:3600/" \
      --confirmation-enabled=false \
      --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
      --epoch=$\{EXIT_EPOCH:-112260}`)))]),(0,n.kt)("p",null,"Once a threshold of exit signatures has been received by any single charon client, it will craft a valid exit message and will submit it to the beacon chain for inclusion."),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)("p",null,"If you have gotten this far through the process, and whether you succeeded or failed at exiting a validator, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/n6ebKsX46w"},"Discord"),". Also, feel free to add issues to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork"},"GitHub repos"),"."))}h.isMDXComponent=!0}}]);