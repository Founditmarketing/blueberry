import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        services: resolve(__dirname, 'services/index.html'),
        incidentResponse: resolve(__dirname, 'services/incident-response.html'),
        socTransformation: resolve(__dirname, 'services/soc-transformation.html'),
        defenseAdvisory: resolve(__dirname, 'services/defense-advisory.html'),
        executiveSecurity: resolve(__dirname, 'services/executive-security.html'),
        managedDetection: resolve(__dirname, 'services/managed-detection.html'),
        threatIntelligence: resolve(__dirname, 'services/threat-intelligence.html'),
        compliance: resolve(__dirname, 'services/compliance.html'),
        breachCounsel: resolve(__dirname, 'services/breach-counsel.html'),
        // Sub-specialty pages
        ransomwareResponse: resolve(__dirname, 'services/ransomware-response.html'),
        becInvestigation: resolve(__dirname, 'services/bec-investigation.html'),
        cloudIr: resolve(__dirname, 'services/cloud-incident-response.html'),
        dataBreachInvestigation: resolve(__dirname, 'services/data-breach-investigation.html'),
        siemOptimization: resolve(__dirname, 'services/siem-optimization.html'),
        detectionEngineering: resolve(__dirname, 'services/detection-engineering.html'),
        securityOperationsConsulting: resolve(__dirname, 'services/security-operations-consulting.html'),
        cmmcCompliance: resolve(__dirname, 'services/cmmc-compliance.html'),
        nist800171: resolve(__dirname, 'services/nist-800-171.html'),
        itarCompliance: resolve(__dirname, 'services/itar-compliance.html'),
        executiveCybersecurity: resolve(__dirname, 'services/executive-cybersecurity.html'),
        digitalPrivacy: resolve(__dirname, 'services/digital-privacy.html'),
        securityMonitoring: resolve(__dirname, 'services/security-monitoring.html'),
        edrManagement: resolve(__dirname, 'services/edr-management.html'),
        threatHunting: resolve(__dirname, 'services/threat-hunting.html'),
        darkWebMonitoring: resolve(__dirname, 'services/dark-web-monitoring.html'),
        aptAssessment: resolve(__dirname, 'services/apt-assessment.html'),
        soc2Readiness: resolve(__dirname, 'services/soc2-readiness.html'),
        iso27001: resolve(__dirname, 'services/iso-27001.html'),
        hipaaCompliance: resolve(__dirname, 'services/hipaa-compliance.html'),
        expertWitness: resolve(__dirname, 'services/expert-witness.html'),
        // New service pages
        referralPartnerships: resolve(__dirname, 'services/referral-partnerships.html'),
        whiteLabel: resolve(__dirname, 'services/white-label.html'),
        vciso: resolve(__dirname, 'services/vciso.html'),
        penetrationTesting: resolve(__dirname, 'services/penetration-testing.html'),
        redTeam: resolve(__dirname, 'services/red-team.html'),
        phishingTesting: resolve(__dirname, 'services/phishing-testing.html'),
        digitalForensicsPersonal: resolve(__dirname, 'services/digital-forensics-personal.html'),
        accountRecovery: resolve(__dirname, 'services/account-recovery.html'),
        osintInvestigation: resolve(__dirname, 'services/osint-investigation.html'),
        divorceForensics: resolve(__dirname, 'services/divorce-forensics.html'),
        fedramp: resolve(__dirname, 'services/fedramp.html'),
      }
    }
  },
  server: {
    port: 8080
  }
})
