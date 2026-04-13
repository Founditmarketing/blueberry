import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
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
      }
    }
  },
  server: {
    port: 8080
  }
})
