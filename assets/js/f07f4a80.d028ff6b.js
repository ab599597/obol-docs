"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[24415],{11787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=a(74848),r=a(28453),n=a(49489),o=a(7227);const s={sidebar_position:6,description:"Exit a validator"},l="Exit a DV",c={id:"int/quickstart/quickstart-exit",title:"Exit a DV",description:"Exit a validator",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/quickstart-exit.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-exit",permalink:"/v0.18.0/int/quickstart/quickstart-exit",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/quickstart-exit.md",tags:[],version:"v0.18.0",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Exit a validator"},sidebar:"tutorialSidebar",previous:{title:"Update a DV",permalink:"/v0.18.0/int/quickstart/update"},next:{title:"Run a DV on mainnet",permalink:"/v0.18.0/int/quickstart/quickstart-mainnet"}},d={},h=[{value:"Run the <code>voluntary-exit</code> command on your validator client",id:"run-the-voluntary-exit-command-on-your-validator-client",level:2},{value:"Exit epoch and withdrawable epoch",id:"exit-epoch-and-withdrawable-epoch",level:2},{value:"How to verify a validator exit",id:"how-to-verify-a-validator-exit",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"exit-a-dv",children:"Exit a DV"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Charon is in a beta state and should be used with caution according to its ",(0,i.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:'Users looking to exit staking entirely and withdraw their full balance back must also sign and broadcast a "voluntary exit" message with validator keys which will start the process of exiting from staking. This is done with your validator client and submitted to your beacon node, and does not require gas. In the case of a DV, each charon node needs to broadcast a partial exit to the other nodes of the cluster. Once a threshold of partial exits has been received by any node, the full voluntary exit will be sent to the beacon chain.'}),"\n",(0,i.jsx)(t.p,{children:"This process will take 27 hours or longer depending on the current length of the exit queue."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A threshold of operators needs to run the exit command for the exit to succeed."}),"\n",(0,i.jsx)(t.li,{children:"If a charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has received from the other nodes. If all charon clients restart and thus all partial exits are lost before the required threshold of exit messages are received, operators will have to rebroadcast their partial exit messages."}),"\n"]})}),"\n",(0,i.jsxs)(t.h2,{id:"run-the-voluntary-exit-command-on-your-validator-client",children:["Run the ",(0,i.jsx)(t.code,{children:"voluntary-exit"})," command on your validator client"]}),"\n",(0,i.jsx)(t.p,{children:"Run the appropriate command on your validator client to broadcast an exit message from your validator client to its upstream charon client."}),"\n",(0,i.jsx)(t.p,{children:"It needs to be the validator client that is connected to your charon client taking part in the DV, as you are only signing a partial exit message, with a partial private key share, which your charon client will combine with the other partial exit messages from the other operators."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["All operators need to use the same ",(0,i.jsx)(t.code,{children:"EXIT_EPOCH"})," for the exit to be successful. Assuming you want to exit as soon as possible, the default epoch of ",(0,i.jsx)(t.code,{children:"162304"})," included in the below commands should be sufficient."]}),"\n",(0,i.jsx)(t.li,{children:"Partial exits can be broadcasted by any validator client as long as the sum reaches the threshold for the cluster."}),"\n"]})}),"\n",(0,i.jsxs)(n.A,{groupId:"validator-clients",children:[(0,i.jsx)(o.A,{value:"teku",label:"Teku",default:!0,children:(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:String.raw`docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
    --beacon-node-api-endpoint="http://charon:3600/" \
    --confirmation-enabled=false \
    --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
    --epoch=162304`})})}),(0,i.jsxs)(o.A,{value:"nimbus",label:"Nimbus",children:[(0,i.jsxs)(t.p,{children:["The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path ",(0,i.jsx)("code",{children:"/home/user/data/charon"})," to the newly created ",(0,i.jsx)("code",{children:"/home/user/data/wd"})," directory."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(t.p,{children:["For each file in the ",(0,i.jsx)("code",{children:"/home/user/data/wd/secrets"})," directory, it:\n",(0,i.jsx)("li",{children:"Extracts the filename without the extension as the file name is the public key"}),"\n",(0,i.jsxs)("li",{children:["Appends ",(0,i.jsx)("code",{children:String.raw`--validator=<filename>`})," to the ",(0,i.jsx)("code",{children:"command"})," variable."]}),"\n",(0,i.jsxs)("li",{children:["Executes a program called ",(0,i.jsx)("code",{children:"nimbus_beacon_node"})," with the following arguments:"]})]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"deposits exit"})," : Exits validators"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"$command"})," : The generated command string from the loop."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"--epoch=162304"})," : The epoch upon which to submit the voluntary exit."]}),(0,i.jsxs)("li",{children:[(0,i.jsxs)("code",{children:["--rest-url=",(0,i.jsx)(t.a,{href:"http://charon:3600/",children:"http://charon:3600/"})]})," : Specifies the Charon ",(0,i.jsxs)("code",{children:["host",":port"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"--data-dir=/home/user/charon/"})," : Specifies the ",(0,i.jsx)("code",{children:"Keystore path"})," which has all the validator keys. There will be a ",(0,i.jsx)("code",{children:"secrets"})," and a ",(0,i.jsx)("code",{children:"validators"})," folder inside it."]})]}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c '\
    
        mkdir /home/user/data/wd
        cp -r /home/user/data/charon/ /home/user/data/wd
    
        command=""; \
        for file in /home/user/data/wd/secrets/*; do \
            filename=$(basename "$file" | cut -d. -f1); \
            command+=" --validator=$filename"; \
        done; \
    
/home/user/nimbus_beacon_node deposits exit $command --epoch=162304 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`})})]}),(0,i.jsxs)(o.A,{value:"lodestar",label:"Lodestar",default:!0,children:[(0,i.jsxs)(t.p,{children:["The following executes an interactive command inside the Loestar VC container to exit all validators. It executes\n",(0,i.jsx)("code",{children:"node /usr/app/packages/cli/bin/lodestar validator voluntary-exit"})," with the arguments:"]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsxs)("code",{children:['--beaconNodes="',(0,i.jsx)(t.a,{href:"http://charon:3600",children:"http://charon:3600"}),'"']})," : Specifies the Charon ",(0,i.jsxs)("code",{children:["host",":port"]}),"."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"--data-dir=/opt/data"})," : Specifies the folder where the key stores were imported."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"--exitEpoch=162304"})," : The epoch upon which to submit the voluntary exit."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"--network=goerli"})," : Specifies the network."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"--yes"})," : Skips confirmation prompt."]})]}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit --beaconNodes="http://charon:3600" --dataDir=/opt/data --exitEpoch=162304 --network=goerli --yes'`})})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Once a threshold of exit signatures has been received by any single charon client, it will craft a valid voluntary exit message and will submit it to the beacon chain for inclusion. You can monitor partial exits stored by each node in the ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"Grafana Dashboard"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"exit-epoch-and-withdrawable-epoch",children:"Exit epoch and withdrawable epoch"}),"\n",(0,i.jsx)(t.p,{children:"The process of a validator exiting from staking takes variable amounts of time, depending on how many others are exiting at the same time."}),"\n",(0,i.jsx)(t.p,{children:"Immediately upon broadcasting a signed voluntary exit message, the exit epoch and withdrawable epoch values are calculated based off the current epoch number. These values determine exactly when the validator will no longer be required to be online performing validation, and when the validator is eligible for a full withdrawal respectively."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Exit epoch - epoch at which your validator is no longer active, no longer earning rewards, and is no longer subject to slashing rules."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:'Up until this epoch (while "in the queue") your validator is expected to be online and is held to the same slashing rules as always. Do not turn your DV node off until this epoch is reached.'})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Withdrawable epoch - epoch at which your validator funds are eligible for a full withdrawal during the next validator sweep.\nThis occurs 256 epochs after the exit epoch, which takes ~27.3 hours."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-verify-a-validator-exit",children:"How to verify a validator exit"}),"\n",(0,i.jsx)(t.p,{children:"Consult the examples below and compare them to your validator's monitoring to verify that exits from each operator in the cluster are being received. This example is a cluster of 4 nodes with 2 validators and threshold of 3 nodes broadcasting exits are needed."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Operator 1 broadcasts an exit on validator client 1.\n",(0,i.jsx)(t.img,{alt:"Verify in Grafana Exit panel",src:a(38755).A+"",width:"2988",height:"1226"}),"\n",(0,i.jsx)(t.img,{alt:"Verify in Grafana Exit panel",src:a(90869).A+"",width:"2152",height:"548"})]}),"\n",(0,i.jsxs)(t.li,{children:["Operator 2 broadcasts an exit on validator client 2.\n",(0,i.jsx)(t.img,{alt:"Verify in Grafana Exit panel",src:a(1896).A+"",width:"2974",height:"952"}),"\n",(0,i.jsx)(t.img,{alt:"Verify in Grafana Exit panel",src:a(70494).A+"",width:"2152",height:"582"})]}),"\n",(0,i.jsxs)(t.li,{children:["Operator 3 broadcasts an exit on validator client 3.\n",(0,i.jsx)(t.img,{alt:"Verify in Grafana Exit panel",src:a(12113).A+"",width:"2924",height:"1018"}),"\n",(0,i.jsx)(t.img,{alt:"Verify in Grafana Exit panel",src:a(46279).A+"",width:"2144",height:"608"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["At this point, the threshold of 3 has been reached and the validator exit process will start. The logs will show the following:\n",(0,i.jsx)(t.img,{alt:"Verify in Grafana Exit panel",src:a(80300).A+"",width:"2784",height:"484"})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Once a validator has broadcasted an exit message, it must continue to validate for at least 27 hours or longer. Do not shut off your distributed validator nodes until your validator is fully exited."})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},7227:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var i=a(34164);const r={tabItem:"tabItem_Ymn6"};var n=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:a,children:t})}},49489:(e,t,a)=>{a.d(t,{A:()=>y});var i=a(96540),r=a(34164),n=a(24245),o=a(56347),s=a(36494),l=a(62814),c=a(45167),d=a(69900);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:r}}=e;return{value:t,label:a,attributes:i,default:r}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:n}))),[c,h]=x({queryString:a,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,d.Dv)(a);return[r,(0,i.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:n})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,n]),tabValues:n}}var f=a(11062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function g(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==i&&(c(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...n,className:(0,r.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":i===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,v.jsx)(w,{...e,children:h(e.children)},String(t))}},90869:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/DutyExit-01-cc29cb51c323e290f8ceec9c0256f574.png"},70494:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/DutyExit-02-560e45e9e4064f1ca26a0386f8d7ec16.png"},46279:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/DutyExit-03-12edb85f9744e0ff91264177f37fb753.png"},80300:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ExitLogs-04a7bf322d265372eac30d3671bd916b.png"},38755:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ExitPromQuery-01-7266f9324d942a47c7966bf2f036f167.png"},1896:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ExitPromQuery-02-9592e27d4d27ab70911856badffa662a.png"},12113:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ExitPromQuery-03-d2adbd3dec918750799fe3f07309bed3.png"},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var i=a(96540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);