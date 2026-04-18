const fs = require('fs');
const files = ['federal/services.html', 'federal/soar-workflows.html', 'federal/threat-intelligence.html'];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/<div class=\"ribbon rv\">[\s\S]*?<\/div>/, '<div class=\"ribbon rv\"><span>CMMC 2.0</span><span class=\"sep\"></span><span>NIST 800-171</span><span class=\"sep\"></span><span>ITAR</span><span class=\"sep\"></span><span>SOC 2</span><span class=\"sep\"></span><span>ISO 27001</span><span class=\"sep\"></span><span>HIPAA</span><span class=\"sep\"></span><span>FEDRAMP</span></div>');
  fs.writeFileSync(f, content, 'utf8');
});
