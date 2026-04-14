import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'services', 'index.html');
let content = fs.readFileSync(file, 'utf8');

const newServicesHtml = `
<section class="sect">
  <div class="sect-inner">
    <div class="sect-head rv">
      <div class="sect-label">Primary Capabilities</div>
      <div class="sect-title">Digital Forensics & Incident Response</div>
      <p class="sect-desc">Our flagship practice. When crisis strikes, we provide rapid containment, meticulous forensic investigation, and litigation-ready evidence preservation.</p>
    </div>
    <div class="svc-hub-grid stagger">
      <a href="/services/digital-forensics.html" class="svc-hub-card rv" style="background:rgba(196,162,101,.03);border:1px solid var(--gold);">
        <div class="pa-num">i.</div>
        <h3>Digital Forensics Investigation</h3>
        <p>Deep-dive analysis to determine how a breach occurred, what data was accessed, and who was responsible.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/incident-response.html" class="svc-hub-card rv">
        <div class="pa-num">ii.</div>
        <h3>Incident Response (Breach Containment)</h3>
        <p>Rapid emergency response to stop active attacks in their tracks and secure compromised environments.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/ransomware-response.html" class="svc-hub-card rv">
        <div class="pa-num">iii.</div>
        <h3>Ransomware Response & Recovery</h3>
        <p>Negotiation, decryption, and secure restoration of critical business systems affected by ransomware.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/evidence-preservation.html" class="svc-hub-card rv">
        <div class="pa-num">iv.</div>
        <h3>Evidence Preservation & Chain of Custody</h3>
        <p>Legally sound preservation of digital evidence for use in civil and criminal proceedings.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/breach-counsel.html" class="svc-hub-card rv">
        <div class="pa-num">v.</div>
        <h3>Breach Attorney Support</h3>
        <p>Privileged forensic investigation and technical expertise for law firms navigating complex cyber litigation.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/expert-witness.html" class="svc-hub-card rv">
        <div class="pa-num">vi.</div>
        <h3>Expert Witness Testimony</h3>
        <p>Technical consulting and expert testimony in cybersecurity matters for legal proceedings.</p>
        <span class="card-link">Explore Service →</span>
      </a>
    </div>
  </div>
</section>

<section class="sect sect-alt">
  <div class="sect-inner">
    <div class="sect-head rv">
      <div class="sect-label">Additional Capabilities</div>
      <div class="sect-title">Blue Team & Managed Services</div>
      <p class="sect-desc">Proactive defense operations to harden your environment against future attacks.</p>
      <div style="margin-top:16px;background:rgba(196,162,101,.05);border:1px dashed var(--gold);padding:12px 20px;font-size:12px;color:var(--gold);display:inline-block">Note for Quinn: Please confirm which of these capabilities you want to keep.</div>
    </div>
    <div class="svc-hub-grid stagger">
      <a href="/services/soc-transformation.html" class="svc-hub-card rv">
        <div class="pa-num">i.</div>
        <h3>SOC Transformation & Optimization</h3>
        <p>Design, build, and optimize Security Operations Centers.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/detection-engineering.html" class="svc-hub-card rv">
        <div class="pa-num">ii.</div>
        <h3>Detection Engineering</h3>
        <p>Custom detection rules, SIEM tuning, and alert noise reduction.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/managed-detection.html" class="svc-hub-card rv">
        <div class="pa-num">iii.</div>
        <h3>Managed Detection & Response (MDR)</h3>
        <p>24/7 monitoring, threat hunting, and incident escalation.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/threat-intelligence.html" class="svc-hub-card rv">
        <div class="pa-num">iv.</div>
        <h3>Threat Intelligence & Hunting</h3>
        <p>Adversary-focused intelligence and proactive threat hunting.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/apt-tracking.html" class="svc-hub-card rv">
        <div class="pa-num">v.</div>
        <h3>APT Group Tracking & Analysis</h3>
        <p>Targeted monitoring of Advanced Persistent Threat actors relevant to your industry.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/dark-web-monitoring.html" class="svc-hub-card rv">
        <div class="pa-num">vi.</div>
        <h3>Dark Web Monitoring</h3>
        <p>Continuous surveillance of dark web marketplaces for compromised credentials and data.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/threat-modeling.html" class="svc-hub-card rv">
        <div class="pa-num">vii.</div>
        <h3>MITRE ATT&CK Threat Modeling</h3>
        <p>Evaluating your defensive posture against known adversary techniques.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/vciso.html" class="svc-hub-card rv">
        <div class="pa-num">viii.</div>
        <h3>Virtual CISO (vCISO) Services</h3>
        <p>Executive-level security leadership, strategy, and guidance.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/executive-briefings.html" class="svc-hub-card rv">
        <div class="pa-num">ix.</div>
        <h3>Executive Threat Briefings</h3>
        <p>Translating complex technical threats into actionable board-level reporting.</p>
        <span class="card-link">Explore Service →</span>
      </a>
    </div>
  </div>
</section>

<section class="sect">
  <div class="sect-inner">
    <div class="sect-head rv">
      <div class="sect-label">Adversary Simulation</div>
      <div class="sect-title">Red Team & Offensive</div>
      <p class="sect-desc">Identifying vulnerabilities before adversaries do.</p>
      <div style="margin-top:16px;background:rgba(196,162,101,.05);border:1px dashed var(--gold);padding:12px 20px;font-size:12px;color:var(--gold);display:inline-block">Note for Quinn: Please confirm which of these capabilities you want to keep.</div>
    </div>
    <div class="svc-hub-grid stagger">
      <a href="/services/penetration-testing.html" class="svc-hub-card rv">
        <div class="pa-num">i.</div>
        <h3>Penetration Testing</h3>
        <p>Network, application, and cloud penetration testing.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/red-team.html" class="svc-hub-card rv">
        <div class="pa-num">ii.</div>
        <h3>Red Team Operations</h3>
        <p>Full-scope adversary simulation including physical and social engineering chains.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/phishing-testing.html" class="svc-hub-card rv">
        <div class="pa-num">iii.</div>
        <h3>Phishing & Social Engineering</h3>
        <p>Realistic phishing campaigns and vishing attacks to measure human awareness.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/apt-assessment.html" class="svc-hub-card rv">
        <div class="pa-num">iv.</div>
        <h3>APT Threat Assessment</h3>
        <p>Security posture evaluation against nation-state adversaries.</p>
        <span class="card-link">Explore Service →</span>
      </a>
    </div>
  </div>
</section>

<section class="sect sect-alt">
  <div class="sect-inner">
    <div class="sect-head rv">
      <div class="sect-label">Regulatory & Federal</div>
      <div class="sect-title">Compliance & Government</div>
      <div style="margin-top:16px;background:rgba(196,162,101,.05);border:1px dashed var(--gold);padding:12px 20px;font-size:12px;color:var(--gold);display:inline-block">Note for Quinn: Please confirm which of these capabilities you want to keep.</div>
    </div>
    <div class="svc-hub-grid stagger">
      <a href="/services/cmmc-compliance.html" class="svc-hub-card rv">
        <div class="pa-num">i.</div>
        <h3>CMMC 2.0 Compliance</h3>
        <p>End-to-end CMMC assessment preparation and gap remediation.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/nist-800-171.html" class="svc-hub-card rv">
        <div class="pa-num">ii.</div>
        <h3>NIST 800-171 Implementation</h3>
        <p>Protecting Controlled Unclassified Information (CUI).</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/itar-compliance.html" class="svc-hub-card rv">
        <div class="pa-num">iii.</div>
        <h3>ITAR Compliance</h3>
        <p>Compliance for defense contractors handling export-controlled technical data.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/fedramp.html" class="svc-hub-card rv">
        <div class="pa-num">iv.</div>
        <h3>FedRAMP Advisory</h3>
        <p>Authorization support for cloud service providers serving federal agencies.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/compliance.html" class="svc-hub-card rv">
        <div class="pa-num">v.</div>
        <h3>SOC 2 / ISO 27001 / HIPAA</h3>
        <p>Security audits, gap analysis, and compliance readiness.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/contractor-training.html" class="svc-hub-card rv">
        <div class="pa-num">vi.</div>
        <h3>Defense Contractor Training</h3>
        <p>Specialized training including Kubernetes and secure staff operations.</p>
        <span class="card-link">Explore Service →</span>
      </a>
    </div>
  </div>
</section>

<section class="sect">
  <div class="sect-inner">
    <div class="sect-head rv">
      <div class="sect-label">Personal & Executive</div>
      <div class="sect-title">Personal Cybersecurity (Luxury)</div>
      <p class="sect-desc">Concierge digital protection for high-value individuals with digital paranoia.</p>
    </div>
    <div class="svc-hub-grid stagger">
      <a href="/services/digital-forensics-personal.html" class="svc-hub-card rv">
        <div class="pa-num">i.</div>
        <h3>Personal Digital Forensics</h3>
        <p>Device analysis and digital evidence collection for individuals.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="#personal-pricing" class="svc-hub-card rv">
        <div class="pa-num">ii.</div>
        <h3>Device Forensic Audits</h3>
        <p>Monthly recurring deep-dive inspections of all personal hardware.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/account-recovery.html" class="svc-hub-card rv">
        <div class="pa-num">iii.</div>
        <h3>Account Compromise & Recovery</h3>
        <p>Rapid response for hacked accounts, identity theft, and SIM swaps.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/digital-privacy.html" class="svc-hub-card rv">
        <div class="pa-num">iv.</div>
        <h3>Privacy Hardening & Data Removal</h3>
        <p>Personal data footprint reduction and strict privacy architecture.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/osint-investigation.html" class="svc-hub-card rv">
        <div class="pa-num">v.</div>
        <h3>OSINT / Online Investigation</h3>
        <p>Open-source intelligence gathering and digital footprint tracking.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="/services/divorce-forensics.html" class="svc-hub-card rv">
        <div class="pa-num">vi.</div>
        <h3>Divorce Digital Forensics</h3>
        <p>Forensic device analysis and evidence preservation for family law.</p>
        <span class="card-link">Explore Service →</span>
      </a>
      <a href="#personal-pricing" class="svc-hub-card rv">
        <div class="pa-num">vii.</div>
        <h3>Digital Paranoia Retainer</h3>
        <p>Ongoing peace of mind spanning 3 comprehensive luxury subscription tiers.</p>
        <span class="card-link">Explore Service →</span>
      </a>
    </div>
  </div>
</section>

<section class="sect sect-alt">
  <div class="sect-inner">
    <div class="sect-head rv">
      <div class="sect-label">Partnerships</div>
      <div class="sect-title">Partner Programs</div>
    </div>
    <div class="svc-hub-grid stagger">
      <a href="/services/white-label.html" class="svc-hub-card rv">
        <div class="pa-num">i.</div>
        <h3>White Label Cybersecurity for IT/MSPs</h3>
        <p>Deliver enterprise-grade cybersecurity under your brand. We operate behind the scenes while you own the client relationship.</p>
        <span class="card-link">Learn More →</span>
      </a>
      <a href="/services/referral-partnerships.html" class="svc-hub-card rv">
        <div class="pa-num">ii.</div>
        <h3>Cybersecurity Referral Partnerships</h3>
        <p>Revenue-sharing referral program for IT providers, MSPs, attorneys, and trusted advisors.</p>
        <span class="card-link">Learn More →</span>
      </a>
    </div>
  </div>
</section>
`;

const startIndex = content.indexOf('<section class="sect">');
const endIndex = content.indexOf('<div class="cta-band rv">');

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = content.substring(0, startIndex) + newServicesHtml + '\n' + content.substring(endIndex);
  fs.writeFileSync(file, newContent, 'utf8');
  console.log('Replaced services content.');
} else {
  console.log('Could not find start/end bounds.');
}
