"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[47069],{23001:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(74848),i=r(28453);const s={sidebar_position:4,description:"Handling DKG failure"},o="Handling DKG failure",a={id:"int/faq/dkg_failure",title:"Handling DKG failure",description:"Handling DKG failure",source:"@site/versioned_docs/version-v0.18.0/int/faq/dkg_failure.md",sourceDirName:"int/faq",slug:"/int/faq/dkg_failure",permalink:"/v0.18.0/int/faq/dkg_failure",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/faq/dkg_failure.md",tags:[],version:"v0.18.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Handling DKG failure"},sidebar:"tutorialSidebar",previous:{title:"Centralization risks and mitigation",permalink:"/v0.18.0/int/faq/risks"},next:{title:"Introduction",permalink:"/v0.18.0/charon/intro"}},l={},c=[{value:"Cleaning up the <code>.charon</code> directory",id:"cleaning-up-the-charon-directory",level:2},{value:"Further debugging",id:"further-debugging",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"handling-dkg-failure",children:"Handling DKG failure"})}),"\n",(0,t.jsx)(n.p,{children:"While the DKG process has been tested and validated against many different configuration instances, it can still encounter issues which might result in failure."}),"\n",(0,t.jsx)(n.p,{children:"Our DKG is designed in a way that doesn't allow for inconsistent results: either it finishes correctly for every peer, or it fails."}),"\n",(0,t.jsxs)(n.p,{children:["This is a ",(0,t.jsx)(n.strong,{children:"safety"})," feature: you don't want to deposit an Ethereum distributed validator that not every operator is able to participate to, or even reach threshold for."]}),"\n",(0,t.jsx)(n.p,{children:"The most common source of issues lies in the network stack: if any of the peer's Internet connection glitches substantially, the DKG will fail."}),"\n",(0,t.jsx)(n.p,{children:"Charon's DKG doesn't allow peer reconnection once the process is started, but it does allow for re-connections before that."}),"\n",(0,t.jsx)(n.p,{children:"When you see the following message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"14:08:34.505 INFO dkg        Waiting to connect to all peers...\n"})}),"\n",(0,t.jsx)(n.p,{children:"this means your Charon instance is waiting for all the other cluster peers to start their DKG process: at this stage, peers can disconnect and reconnect at will, the DKG process will still continue."}),"\n",(0,t.jsx)(n.p,{children:"A log line will confirm the connection of a new peer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'14:08:34.523 INFO dkg        Connected to peer 1 of 3                 {"peer": "fantastic-adult"}\n14:08:34.529 INFO dkg        Connected to peer 2 of 3                 {"peer": "crazy-bunch"}\n14:08:34.673 INFO dkg        Connected to peer 3 of 3                 {"peer": "considerate-park"}\n'})}),"\n",(0,t.jsx)(n.p,{children:"As soon as all the peers are connected, this message will be shown:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"14:08:34.924 INFO dkg        All peers connected, starting DKG ceremony\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Past this stage ",(0,t.jsx)(n.strong,{children:"no disconnections are allowed"}),", and ",(0,t.jsx)(n.em,{children:"all peers must leave their terminals open"})," in order for the DKG process to complete: this is a synchronous phase, and every peer is required in order to reach completion."]}),"\n",(0,t.jsx)(n.p,{children:"If for some reason the DKG process fails, you would see error logs that resemble this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"14:28:46.691 ERRO cmd        Fatal error: sync step: p2p connection failed, please retry DKG: context canceled\n"})}),"\n",(0,t.jsx)(n.p,{children:"As the error message suggests, the DKG process needs to be retried."}),"\n",(0,t.jsxs)(n.h2,{id:"cleaning-up-the-charon-directory",children:["Cleaning up the ",(0,t.jsx)(n.code,{children:".charon"})," directory"]}),"\n",(0,t.jsx)(n.p,{children:"One cannot simply retry the DKG process: Charon refuses to overwrite any runtime file in order to avoid inconsistencies and private key loss."}),"\n",(0,t.jsxs)(n.p,{children:["When attempting to re-run a DKG with an unclean data directory -- which is either ",(0,t.jsx)(n.code,{children:".charon"})," or what was specified with the ",(0,t.jsx)(n.code,{children:"--data-dir"})," CLI parameter -- this is the error that will be shown:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'14:44:13.448 ERRO cmd        Fatal error: data directory not clean, cannot continue {"disallowed_entity": "cluster-lock.json", "data-dir": "/compose/node0"}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"disallowed_entity"})," field lists all the files that Charon refuses to overwrite, while ",(0,t.jsx)(n.code,{children:"data-dir"})," is the full path of the runtime directory the DKG process is using."]}),"\n",(0,t.jsx)(n.p,{children:"In order to retry the DKG process one must delete the following entities, if present:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"validator_keys"})," directory"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cluster-lock.json"})," file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"deposit-data.json"})," file"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"charon-enr-private-key"})," file ",(0,t.jsx)(n.strong,{children:"must be preserved"}),", failure to do so requires the DKG process to be restarted from the beginning by creating a new cluster definition."]})}),"\n",(0,t.jsxs)(n.p,{children:["If you're doing a DKG with a custom cluster definition - for example, create with ",(0,t.jsx)(n.code,{children:"charon create dkg"})," rather than the Obol Launchpad - you can re-use the same file."]}),"\n",(0,t.jsx)(n.p,{children:"Once this process has been completed, the cluster operators can retry a DKG."}),"\n",(0,t.jsx)(n.h2,{id:"further-debugging",children:"Further debugging"}),"\n",(0,t.jsxs)(n.p,{children:["If for some reason the DKG process fails again, node operators are adviced to reach out to the Obol team by opening an ",(0,t.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/issues",children:"issue"}),", detailing what troubleshooting steps were taken and providing ",(0,t.jsx)(n.strong,{children:"debug logs"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable debug logs first clean up the Charon data directory as explained in ",(0,t.jsx)(n.a,{href:"#cleaning-up-the-charon-directory",children:"the previous paragraph"}),", then run your DKG command by appending ",(0,t.jsx)(n.code,{children:"--log-level=debug"})," at the end."]}),"\n",(0,t.jsx)(n.p,{children:"In order for the Obol team to debug your issue as quickly and precisely as possible please provide full logs in textual form, not through screenshots or display photos."}),"\n",(0,t.jsx)(n.p,{children:"Providing complete logs is particularly important, since it allows the team to reconstruct precisely what happened."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);