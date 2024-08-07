"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[60752],{14858:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(74848),r=n(28453);const i={sidebar_position:5,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},s="Push Metrics to Obol Monitoring",a={id:"advanced/obol-monitoring",title:"Push Metrics to Obol Monitoring",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/versioned_docs/version-v0.19.2/advanced/obol-monitoring.md",sourceDirName:"advanced",slug:"/advanced/obol-monitoring",permalink:"/docs/v0.19.2/advanced/obol-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.2/advanced/obol-monitoring.md",tags:[],version:"v0.19.2",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Getting Started Monitoring your Node",permalink:"/docs/v0.19.2/advanced/monitoring"},next:{title:"Self-Host a Relay",permalink:"/docs/v0.19.2/advanced/self-relay"}},d={},c=[];function l(e){const o={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"push-metrics-to-obol-monitoring",children:"Push Metrics to Obol Monitoring"}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["This is ",(0,t.jsx)(o.strong,{children:"optional"})," and does not confer any special privileges within the Obol Network."]})}),"\n",(0,t.jsxs)(o.p,{children:["You may have been provided with ",(0,t.jsx)(o.strong,{children:"Monitoring Credentials"})," used to push distributed validator metrics to Obol's central prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance."]}),"\n",(0,t.jsxs)(o.p,{children:["The provided credentials needs to be added in ",(0,t.jsx)(o.code,{children:"prometheus/prometheus.yml"})," replacing ",(0,t.jsx)(o.code,{children:"$PROM_REMOTE_WRITE_TOKEN"})," and will look like:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"obol20tnt8UC...\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The updated ",(0,t.jsx)(o.code,{children:"prometheus/prometheus.yml"})," file should look like:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:'global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20tnt8UC-your-credential-here...\n    write_relabel_configs:\n      - source_labels: [job]\n        regex: "charon"\n        action: keep # Keeps charon metrics and drop metrics from other containers.\n\nscrape_configs:\n  - job_name: "nethermind"\n    static_configs:\n      - targets: ["nethermind:8008"]\n  - job_name: "lighthouse"\n    static_configs:\n      - targets: ["lighthouse:5054"]\n  - job_name: "charon"\n    static_configs:\n      - targets: ["charon:3620"]\n  - job_name: "lodestar"\n    static_configs:\n      - targets: [ "lodestar:5064" ]\n'})})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>a});var t=n(96540);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);