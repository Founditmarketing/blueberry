const fs = require('fs');
const path = require('path');

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

  // Replace unicode replacement char 
  content = content.replace(/\uFFFD/g, '—');
  content = content.replace(/don—t/gi, "don't");
  content = content.replace(/we—re/gi, "we're");
  content = content.replace(/you—re/gi, "you're");
  content = content.replace(/what—s/gi, "what's");
  content = content.replace(/Home—/g, 'Home ›');
  content = content.replace(/Services—/g, 'Services ›');
  content = content.replace(/Partnerships—/g, 'Partnerships ›');
  content = content.replace(/<span>—<\/span>/g, '<span>›</span>');

  // Copyright fix
  content = content.replace(/© 2026 Digital Forensics \.company LLC/g, '© 2026 Blueberry Security Global, Inc.');
  
  // Log4j fix
  content = content.replace(/<li>Log4j Response Veteran<\/li>/g, '');
  content = content.replace(/Log4j Response/g, 'Advanced Response');
  
  // Phone number addition in footer
  if (!content.includes('301-352-4855')) {
    content = content.replace(/<div class=\"ft-col\"><h4>Company<\/h4>/g, '<div class=\"ft-col\"><h4>Company</h4><a href=\"tel:3013524855\">301-352-4855</a>');
  }

  // Calendly link update
  content = content.replace(/href=\"\/contact\.html\"[^>]*>Schedule Consultation<\/a>/g, 'href=\"https://calendly.com/quinnlan-varcoe\" target=\"_blank\">Schedule Consultation</a>');
  content = content.replace(/href=\"\/contact\.html\" class=\"ncta\">Consultation<\/a>/g, 'href=\"https://calendly.com/quinnlan-varcoe\" target=\"_blank\" class=\"ncta\">Consultation</a>');
  content = content.replace(/href=\"\/contact\.html\"[^>]*>Schedule Assessment<\/a>/g, 'href=\"https://calendly.com/quinnlan-varcoe\" target=\"_blank\">Schedule Assessment</a>');

  // Referral Percentage Fixes
  content = content.replace(/Earn \d+% commission referring clients/g, 'Earn competitive ongoing commissions referring clients');
  content = content.replace(/Earn \d+% on every engagement you refer/g, 'Earn competitive ongoing commissions on every engagement you refer');
  content = content.replace(/you earn \d+% of the engagement value/g, 'you earn competitive ongoing commissions');
  content = content.replace(/<li><strong>Standard commission:<\/strong> \d+% of total engagement value<\/li>/g, '<li><strong>Standard commission:</strong> Competitive ongoing commissions</li>');
  content = content.replace(/<li><strong>Recurring engagements:<\/strong> \d+% on all work during the first 12 months/g, '<li><strong>Recurring engagements:</strong> Competitive ongoing commissions');
  content = content.replace(/<li>Commission: <strong>\d+%<\/strong><\/li>/g, '<li>Commission: <strong>Ongoing</strong></li>');
  content = content.replace(/commission: <strong>\d+%<\/strong>/g, 'commission: <strong>Ongoing</strong>');
  content = content.replace(/Referral commission: <strong>\d+%<\/strong>/g, 'Referral commission: <strong>Competitive Ongoing</strong>');
  content = content.replace(/Earn \d+% on every engagement/g, 'Earn competitive commissions on every engagement');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed:', filePath);
  }
});
