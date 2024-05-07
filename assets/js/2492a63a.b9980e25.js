"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[36065],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7227:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(96540),n=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:a},t)}},49489:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(58168),n=a(96540),o=a(20053),i=a(24245),l=a(56347),u=a(62814),s=a(45167),c=a(81269);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=m({queryString:a,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=u??d;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var b=a(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==l&&(d(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},i,{className:(0,o.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.A)("tabs-container",v.tabList)},n.createElement(y,(0,r.A)({},e,t)),n.createElement(g,(0,r.A)({},e,t)))}function k(e){const t=(0,b.A)();return n.createElement(w,(0,r.A)({key:String(t)},e))}},78624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(58168),n=(a(96540),a(15680)),o=a(49489),i=a(7227);const l={sidebar_position:4,description:"Activate the Distributed Validator using the deposit contract"},u="Activate a DV",s={unversionedId:"int/quickstart/activate-dv",id:"version-v0.16.0/int/quickstart/activate-dv",title:"Activate a DV",description:"Activate the Distributed Validator using the deposit contract",source:"@site/versioned_docs/version-v0.16.0/int/quickstart/activate-dv.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/activate-dv",permalink:"/docs/v0.16.0/int/quickstart/activate-dv",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/quickstart/activate-dv.md",tags:[],version:"v0.16.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Activate the Distributed Validator using the deposit contract"},sidebar:"tutorialSidebar",previous:{title:"Using the CLI",permalink:"/docs/v0.16.0/int/quickstart/group/quickstart-cli"},next:{title:"Exit a DV",permalink:"/docs/v0.16.0/int/quickstart/quickstart-exit"}},c={},d=[],p={toc:d},f="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(f,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"activate-a-dv"},"Activate a DV"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Charon is in an alpha state and should be used with caution according to its ",(0,n.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,n.yg)("p",null,"If you have successfully created a distributed validator and you are ready to activate it, congratulations.  "),(0,n.yg)("p",null,"Once you have connected all of your charon clients together, synced all of your ethereum nodes such that the monitoring indicates that they are all healthy and ready to operate, ",(0,n.yg)("strong",{parentName:"p"},"ONE operator")," may proceed to activate the validators using one of the following websites: "),(0,n.yg)(o.A,{groupId:"network",mdxType:"Tabs"},(0,n.yg)(i.A,{value:"go\xebrli",label:"Go\xebrli",default:!0,mdxType:"TabItem"},(0,n.yg)("a",{href:"https://goerli.launchpad.obol.tech/",target:"_blank"},"Obol Distributed Validator Launchpad")),(0,n.yg)(i.A,{value:"mainnet",label:"Mainnet",mdxType:"TabItem"},(0,n.yg)("a",{href:"https://launchpad.ethereum.org/",target:"_blank"},"ethereum.org Staking Launchpad"))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"deposit-data.json")," to be uploaded to the launchpad will be located in each operator's ",(0,n.yg)("inlineCode",{parentName:"p"},".charon")," folder. The copies across every node should be identical and any of them can be uploaded. Only one, 32 ether deposit, needs to be made for each validator operated by the cluster. "),(0,n.yg)("admonition",{type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"If you are being given a ",(0,n.yg)("inlineCode",{parentName:"p"},"deposit-data.json")," file that you didn't generate yourself, please take extreme care to ensure this operator has not given you a malicious ",(0,n.yg)("inlineCode",{parentName:"p"},"deposit-data.json")," file that is not the one you expect. Cross reference the files from multiple operators if there is any doubt. Activating the wrong validator or an invalid deposit could result in complete theft or loss of funds. ")),(0,n.yg)("p",null,"The activation process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks."))}m.isMDXComponent=!0}}]);