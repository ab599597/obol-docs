"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[79549],{16928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(74848),a=r(28453),o=r(49489),s=r(7227);const l={sidebar_position:6,description:"Update your DV cluster with the latest Charon release"},i="Update a DV",u={id:"start/update",title:"Update a DV",description:"Update your DV cluster with the latest Charon release",source:"@site/versioned_docs/version-v0.19.2/start/update.md",sourceDirName:"start",slug:"/start/update",permalink:"/docs/v0.19.2/start/update",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.2/start/update.md",tags:[],version:"v0.19.2",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Update your DV cluster with the latest Charon release"},sidebar:"tutorialSidebar",previous:{title:"Activate a DV",permalink:"/docs/v0.19.2/start/activate-dv"},next:{title:"Exit a DV",permalink:"/docs/v0.19.2/start/quickstart-exit"}},c={},d=[{value:"Navigate to the node directory",id:"navigate-to-the-node-directory",level:3},{value:"Pull latest changes to the repo",id:"pull-latest-changes-to-the-repo",level:3},{value:"Create (or recreate) your DV stack",id:"create-or-recreate-your-dv-stack",level:3},{value:"Conflicts",id:"conflicts",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"update-a-dv",children:"Update a DV"}),"\n",(0,n.jsx)(t.p,{children:"It is highly recommended to upgrade your DV stack from time to time. This ensures that your node is secure, performant, up-to-date and you don't miss important hard forks."}),"\n",(0,n.jsx)(t.p,{children:"To do this, follow these steps:"}),"\n",(0,n.jsx)(t.h3,{id:"navigate-to-the-node-directory",children:"Navigate to the node directory"}),"\n",(0,n.jsxs)(o.A,{groupId:"group-solo",children:[(0,n.jsx)(s.A,{value:"group",label:"charon-distributed-validator-node",default:!0,children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:(0,n.jsx)(t.p,{children:"cd charon-distributed-validator-node"})})})}),(0,n.jsx)(s.A,{value:"solo",label:"charon-distributed-validator-cluster",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:(0,n.jsx)(t.p,{children:"cd charon-distributed-validator-cluster"})})})})]}),"\n",(0,n.jsx)(t.h3,{id:"pull-latest-changes-to-the-repo",children:"Pull latest changes to the repo"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git pull\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-or-recreate-your-dv-stack",children:"Create (or recreate) your DV stack"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"docker compose up -d --build\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"If you run more than one node in a DV Cluster, please take caution upgrading them simultaneously. Particularly if you are updating or changing the validator client used or recreating disks. It is recommended to update nodes on a sequential basis to minimse liveness and safety risks."})}),"\n",(0,n.jsx)(t.h3,{id:"conflicts",children:"Conflicts"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You may get a ",(0,n.jsx)(t.code,{children:"git conflict"})," error similar to this:"]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-markdown",children:"error: Your local changes to the following files would be overwritten by merge:\nprometheus/prometheus.yml\n...\nPlease commit your changes or stash them before you merge.\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This is probably because you have made some changes to some of the files, for example to the ",(0,n.jsx)(t.code,{children:"prometheus/prometheus.yml"})," file."]}),"\n",(0,n.jsx)(t.p,{children:"To resolve this error, you can either:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Stash and reapply changes if you want to keep your custom changes:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git stash          # Stash your local changes\ngit pull           # Pull the latest changes\ngit stash apply    # Reapply your changes from the stash\n"})}),"\n",(0,n.jsx)(t.p,{children:"After reapplying your changes, manually resolve any conflicts that may arise between your changes and the pulled changes using a text editor or Git's conflict resolution tools."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Override changes and recreate configuration if you don't need to preserve your local changes and want to discard them entirely:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git reset --hard    # Discard all local changes and override with the pulled changes\ndocker-compose up -d --build    # Recreate your DV stack\n"})}),"\n",(0,n.jsx)(t.p,{children:"After overriding the changes, you will need to recreate your DV stack using the updated files.\nBy following one of these approaches, you should be able to handle Git conflicts when pulling the latest changes to your repository, either preserving your changes or overriding them as per your requirements."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7227:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},49489:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),o=r(24245),s=r(56347),l=r(36494),i=r(62814),u=r(45167),c=r(69900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:r,groupId:a}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=r(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=l[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);