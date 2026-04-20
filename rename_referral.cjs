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

  // Replace occurrences of "Referral Partnerships" with "Referral Programs"
  content = content.replace(/Referral Partnerships/g, 'Referral Programs');
  content = content.replace(/Cybersecurity Referral Partnerships/g, 'Cybersecurity Referral Programs');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Renamed referral programs in', filePath);
  }
});
