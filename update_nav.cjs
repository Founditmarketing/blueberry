const fs = require('fs');
const path = require('path');

const federalMenu = `    <div class="nav-dd">
      <a href="/federal/">Federal</a>
      <div class="mega mega-federal">
        <div class="mega-inner" style="grid-template-columns: repeat(2, 1fr);">
          <div class="mega-col">
            <div class="mega-col-title"><a href="/federal/">Federal Practice</a></div>
            <a href="/federal/services.html" class="mega-link">Federal Services</a>
            <a href="/federal/soc-design.html" class="mega-link">SOC Design & Operation</a>
          </div>
          <div class="mega-col">
            <div class="mega-col-title"><a href="/federal/capabilities.html">Capabilities</a></div>
            <a href="/federal/soar-workflows.html" class="mega-link">SOAR Workflows</a>
            <a href="/federal/threat-intelligence.html" class="mega-link">Threat Intelligence Operations</a>
          </div>
        </div>
      </div>
    </div>`;

const federalMobile = `  <button class="mm-dd-toggle">Federal</button>
  <div class="mm-dd-sub">
    <a href="/federal/">Federal Practice</a>
    <a href="/federal/services.html">Federal Services</a>
    <a href="/federal/soc-design.html">SOC Design & Operation</a>
    <a href="/federal/soar-workflows.html">SOAR Workflows</a>
    <a href="/federal/threat-intelligence.html">Threat Intelligence</a>
  </div>`;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory && f !== 'node_modules' && f !== '.git' && f !== 'dist') {
      walkDir(dirPath, callback);
    } else if (f.endsWith('.html')) {
      callback(path.join(dir, f));
    }
  });
}

walkDir('.', function(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  if (!content.includes('Federal Practice')) {
    content = content.replace(/<div class=\"nav-dd\">\s*<a href=\"\/partnerships\/\">Partnerships<\/a>/g, federalMenu + '\n    <div class=\"nav-dd\">\n      <a href=\"/partnerships/\">Partnerships</a>');
    
    content = content.replace(/<button class=\"mm-dd-toggle\">Partnerships<\/button>/g, federalMobile + '\n  <button class=\"mm-dd-toggle\">Partnerships</button>');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Added federal nav to', filePath);
  }
});
