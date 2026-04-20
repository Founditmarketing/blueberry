const fs = require('fs');

// 1. Build the Federal services hub
let servicesHtml = fs.readFileSync('services/index.html', 'utf8');

// Replace the Hero text
let federalServices = servicesHtml.replace(/<h1>How We Serve Our Clients<\/h1>/g, '<h1>Federal Cybersecurity Services</h1>');
federalServices = federalServices.replace(/<p class=\"page-desc\">From active breach response.*/g, '<p class=\"page-desc\">Advanced threat intelligence, incident response, and defense operations customized for the federal landscape and the defense industrial base.</p>');
federalServices = federalServices.replace(/<div class=\"page-breadcrumb\"><a href=\"\/\">Home<\/a><span>\u203a<\/span> Services<\/div>/g, '<div class=\"page-breadcrumb\"><a href=\"/\">Home</a><span>›</span> Federal</div>');
federalServices = federalServices.replace(/<div class=\"page-label\">Practice Areas<\/div>/g, '<div class=\"page-label\">Federal Operations</div>');

// Ensure the directory exists
try { fs.mkdirSync('federal'); } catch(e) {}

fs.writeFileSync('federal/services.html', federalServices, 'utf8');


// 2. Build the Personal Cybersecurity Hub (sub homepage feel)
let indexHtml = fs.readFileSync('index.html', 'utf8');

let personalHub = indexHtml.replace(/<h1>[\s\S]*?<\/h1>/, '<h1><span class=\"l1\">Concierge</span><span class=\"l2\">Digital Protection</span></h1>');
personalHub = personalHub.replace(/<div class=\"hero-overline\">.*<\/div>/, '<div class=\"hero-overline\">PERSONAL CYBERSECURITY</div>');
personalHub = personalHub.replace(/<p class=\"hero-desc\">[\s\S]*?<\/p>/, '<p class=\"hero-desc\">We partner with <strong>high-net-worth individuals</strong>, executives, and families as their private digital security detail. When you suspect a compromise or need absolute privacy, we provide discreet, enterprise-grade protection.</p>');
personalHub = personalHub.replace(/<div class=\"h-stat\"><div class=\"val\">Fortune <em>50<\/em><\/div><div class=\"lbl\">Pedigree<\/div><\/div>[\s\S]*?<div class=\"val\">24\/<em>7<\/em><\/div><div class=\"lbl\">Incident Response<\/div><\/div>/, '<div class=\"h-stat\"><div class=\"val\">100<em>%</em></div><div class=\"lbl\">Discretion</div></div><div class=\"h-stat\"><div class=\"val\">24/<em>7</em></div><div class=\"lbl\">On-Call Support</div></div>');

fs.writeFileSync('services/personal-cybersecurity.html', personalHub, 'utf8');

// 3. Create SOAR Workflows page
let template = fs.readFileSync('services/incident-response.html', 'utf8');
let soarPage = template.replace(/<h1>Incident Response &<br>Digital Forensics<\/h1>/, '<h1>SOAR Workflows &<br>Automation Operations</h1>');
soarPage = soarPage.replace(/<p class=\"page-desc\">When a breach occurs.*/, '<p class=\"page-desc\">Rapid, automated response workflows utilizing advanced SOAR implementations (Security Orchestration, Automation, and Response) to dramatically reduce MTTR and alert fatigue.</p>');
soarPage = soarPage.replace(/<h2>When Every Hour Counts<\/h2>[\s\S]*?<div class=\"svc-sidebar\">/, '<h2>Accelerating Defensive Operations</h2><p>Modern security operations require more than just detection—they require instantaneous, automated action. We design, build, and maintain sophisticated SOAR playbooks that integrate tightly into your existing technology stack, allowing your team to automate tier-1 triage and instantly isolate threats.</p><h3>Capabilities</h3><ul><li>Custom playbook and workflow engineering</li><li>API integration across EDR, SIEM, and firewall platforms</li><li>Alert enrichment automation</li><li>Automated incident ticketing and escalation</li><li>Phishing analysis automation</li></ul></div><div class=\"svc-sidebar\">');
soarPage = soarPage.replace(/<div class=\"page-breadcrumb\">.*/, '<div class=\"page-breadcrumb\"><a href=\"/\">Home</a><span>›</span><a href=\"/services/\">Services</a><span>›</span> SOAR Workflows</div>');
fs.writeFileSync('federal/soar-workflows.html', soarPage, 'utf8');

// 4. Create Threat Intelligence ("buying our intelligence")
let intelPage = template.replace(/<h1>Incident Response &<br>Digital Forensics<\/h1>/, '<h1>Threat Intelligence<br>Operations</h1>');
intelPage = intelPage.replace(/<p class=\"page-desc\">When a breach occurs.*/, '<p class=\"page-desc\">Actionable, adversary-focused intelligence reporting. We provide tailored intelligence feeds directly to your SOC, giving you advance warning of campaigns targeting your specific vertical.</p>');
intelPage = intelPage.replace(/<h2>When Every Hour Counts<\/h2>[\s\S]*?<div class=\"svc-sidebar\">/, '<h2>Intelligence Built for Action</h2><p>Our threat intelligence is not just a feed of raw indicators from open sources. We produce heavily vetted intelligence reports, IoCs, and detection signatures based on our active incident response engagements and dark web monitoring. When you purchase our intelligence feeds, you are actively hardening your environment against the exact tactics adversaries are using in the wild right now.</p><h3>Deliverables</h3><ul><li>Direct API access to proprietary threat feeds</li><li>Weekly briefing reports specifically targeting your vertical</li><li>Custom YARA, Sigma, and Snort signatures</li><li>Dark web exposure notifications</li><li>Adversary infrastructure tracking updates</li></ul></div><div class=\"svc-sidebar\">');
intelPage = intelPage.replace(/<div class=\"page-breadcrumb\">.*/, '<div class=\"page-breadcrumb\"><a href=\"/\">Home</a><span>›</span><a href=\"/services/\">Services</a><span>›</span> Threat Intelligence</div>');
fs.writeFileSync('federal/threat-intelligence.html', intelPage, 'utf8');

console.log("Pages generated");
