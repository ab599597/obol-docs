"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[56974],{89318:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(74848),i=s(28453);const r={sidebar_position:4,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},o="Getting Started Monitoring your Node",a={id:"int/quickstart/advanced/monitoring",title:"Getting Started Monitoring your Node",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/advanced/monitoring.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/monitoring",permalink:"/v0.18.0/int/quickstart/advanced/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/advanced/monitoring.md",tags:[],version:"v0.18.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Split existing validator private keys",permalink:"/v0.18.0/int/quickstart/advanced/quickstart-split"},next:{title:"Push Metrics to Obol Monitoring",permalink:"/v0.18.0/int/quickstart/advanced/obol-monitoring"}},l={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Import Pre-Configured Charon Dashboards",id:"import-pre-configured-charon-dashboards",level:2},{value:"Example Alerting Rules",id:"example-alerting-rules",level:2},{value:"Understanding Alert Rules",id:"understanding-alert-rules",level:2},{value:"Best Practices for Monitoring Charon Nodes &amp; Cluster",id:"best-practices-for-monitoring-charon-nodes--cluster",level:2},{value:"Third-Party Services for Uptime Testing",id:"third-party-services-for-uptime-testing",level:2},{value:"Key metrics to watch to verify node health based on jobs",id:"key-metrics-to-watch-to-verify-node-health-based-on-jobs",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"getting-started-monitoring-your-node",children:"Getting Started Monitoring your Node"})}),"\n",(0,t.jsx)(n.p,{children:"Welcome to this comprehensive guide, designed to assist you in effectively monitoring your Charon cluster and nodes, and setting up alerts based on specified parameters."}),"\n",(0,t.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure the following software are installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Docker: Find the installation guide for Ubuntu ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"here"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Prometheus: You can install it using the guide available ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/installation/",children:"here"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Grafana: Follow this ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/setup-grafana/installation/",children:"link"})})," to install Grafana"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"import-pre-configured-charon-dashboards",children:"Import Pre-Configured Charon Dashboards"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/ObolNetwork/monitoring/tree/main/dashboards",children:"repository"})})," that contains a variety of Grafana dashboards. For this demonstration, we will utilize the Charon Dashboard json."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In your Grafana interface, create a new dashboard and select the import option."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Copy the content of the Charon Dashboard json from the repository and paste it into the import box in Grafana. Click "Load" to proceed.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Finalize the import by clicking on the "Import" button. At this point, your dashboard should begin displaying metrics. Ensure your Charon client and Prometheus are operational for this to occur.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-alerting-rules",children:"Example Alerting Rules"}),"\n",(0,t.jsx)(n.p,{children:'To create alerts for Node-Exporter, follow these steps based on the sample rules provided on the "Awesome Prometheus alerts" page:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Visit the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://samber.github.io/awesome-prometheus-alerts/rules.html#host-and-hardware",children:"Awesome Prometheus alerts"})})," page. Here, you will find lists of Prometheus alerting rules categorized by hardware, system, and services."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Depending on your need, select the category of alerts. For example, if you want to set up alerts for your system's CPU usage, click on the 'CPU' under the 'Host & Hardware' category."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On the selected page, you'll find specific alert rules like 'High CPU Usage'. Each rule will provide the PromQL expression, alert name, and a brief description of what the alert does. You can copy these rules."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Paste the copied rules into your Prometheus configuration file under the ",(0,t.jsx)(n.code,{children:"rules"})," section. Make sure you understand each rule before adding it to avoid unnecessary alerts."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Finally, save and apply the configuration file. Prometheus should now trigger alerts based on these rules."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For alerts specific to Charon/Alpha, refer to the alerting rules available on this ",(0,t.jsx)(n.a,{href:"https://github.com/ObolNetwork/monitoring/tree/main/alerting-rules",children:"ObolNetwork/monitoring"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"understanding-alert-rules",children:"Understanding Alert Rules"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterBeaconNodeDown"}),"This alert is activated when the beacon node in a specified Alpha cluster is offline. The beacon node is crucial for validating transactions and producing new blocks. Its unavailability could disrupt the overall functionality of the cluster."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterBeaconNodeSyncing"}),"This alert indicates that the beacon node in a specified Alpha cluster is synchronizing, i.e., catching up with the latest blocks in the cluster."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterNodeDown"}),"This alert is activated when a node in a specified Alpha cluster is offline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterMissedAttestations"}),":This"," alert indicates that there have been missed attestations in a specified Alpha cluster. Missed attestations may suggest that validators are not operating correctly, compromising the security and efficiency of the cluster."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterInUnknownStatus"}),": This alert is designed to activate when a node within the cluster is detected to be in an unknown state. The condition is evaluated by checking whether the maximum of the app_monitoring_readyz metric is 0."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterInsufficientPeers"}),":This"," alert is set to activate when the number of peers for a node in the Alpha M1 Cluster #1 is insufficient. The condition is evaluated by checking whether the maximum of the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"app_monitoring_readyz"})})," equals 4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterFailureRate"}),": This alert is activated when the failure rate of the Alpha M1 Cluster #1 exceeds a certain threshold."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterVCMissingValidators"}),": This alert is activated if any validators in the Alpha M1 Cluster #1 are missing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterHighPctFailedSyncMsgDuty"}),': This alert is activated if a high percentage of sync message duties failed in the cluster. The alert is activated if the sum of the increase in failed duties tagged with "sync_message" in the last hour divided by the sum of the increase in total duties tagged with "sync_message" in the last hour is greater than 0.1.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ClusterNumConnectedRelays"}),": This alert is activated if the number of connected relays in the cluster falls to 0."]}),"\n",(0,t.jsx)(n.li,{children:"PeerPingLatency: 1. This alert is activated if the 90th percentile of the ping latency to the peers in a cluster exceeds 500ms within 2 minutes."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"best-practices-for-monitoring-charon-nodes--cluster",children:"Best Practices for Monitoring Charon Nodes & Cluster"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Establish Baselines"}),": Familiarize yourself with the normal operation metrics like CPU, memory, and network usage. This will help you detect anomalies."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Define Key Metrics"}),": Set up alerts for essential metrics, encompassing both system-level and Charon-specific ones."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Configure Alerts"}),": Based on these metrics, set up actionable alerts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Monitor Network"}),": Regularly assess the connectivity between nodes and the network."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Perform Regular Health Checks"}),": Consistently evaluate the status of your nodes and clusters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Monitor System Logs"}),": Keep an eye on logs for error messages or unusual activities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Assess Resource Usage"}),": Ensure your nodes are neither over- nor under-utilized."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automate Monitoring"}),": Use automation to ensure no issues go undetected."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Conduct Drills"}),": Regularly simulate failure scenarios to fine-tune your setup."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update Regularly"}),": Keep your nodes and clusters updated with the latest software versions."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"third-party-services-for-uptime-testing",children:"Third-Party Services for Uptime Testing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://updown.io/",children:"updown.io"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://grafana.com/grafana/plugins/grafana-synthetic-monitoring-app/",children:"Grafana synthetic Monitoring"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"key-metrics-to-watch-to-verify-node-health-based-on-jobs",children:"Key metrics to watch to verify node health based on jobs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Node Exporter:"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CPU Usage"}),": High or spiking CPU usage can be a sign of a process demanding more resources than it should."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Memory Usage"}),": If a node is consistently running out of memory, it could be due to a memory leak or simply under-provisioning."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Disk I/O"}),": Slow disk operations can cause applications to hang or delay responses. High disk I/O can indicate storage performance issues or a sign of high load on the system."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Network Usage"}),": High network traffic or packet loss can signal network configuration issues, or that a service is being overwhelmed by requests."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Disk Space"}),": Running out of disk space can lead to application errors and data loss."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Uptime"}),": The amount of time a system has been up without any restarts. Frequent restarts can indicate instability in the system."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Error Rates"}),": The number of errors encountered by your application. This could be 4xx/5xx HTTP errors, exceptions, or any other kind of error your application may log."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Latency"}),": The delay before a transfer of data begins following an instruction for its transfer."]}),"\n",(0,t.jsx)(n.p,{children:"It is also important to check:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NTP clock skew"}),"\n",(0,t.jsxs)(n.li,{children:["Process restarts and failures (eg. through\xa0",(0,t.jsx)(n.code,{children:"node_systemd"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"alert on high error and panic log counts."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);