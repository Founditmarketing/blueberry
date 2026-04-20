import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.vercel') return;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (fullPath.endsWith('.html')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk(rootDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Title & Meta tags
    content = content.replace(/Varcoe Cybersecurity/g, 'Digital Forensics .company');
    
    // Navbar
    content = content.replace(/<a href="\/" class="nl"><i>.*?<\/i>\s*Digital Forensics \.company<\/a>/g, `<a href="/" class="nl"><i>D</i> Digital Forensics <span class="tld">.company</span></a>`);
    
    // Footer brand
    content = content.replace(/<div class="ft-brand"><i>.*?<\/i>\s*Digital Forensics \.company<\/div>/g, `<div class="ft-brand"><i>D</i> Digital Forensics <span class="tld">.company</span></div>`);

    // Copyright
    content = content.replace(/© 2026 Digital Forensics \.company LLC/g, '© 2026 Digital Forensics .company LLC');

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced in ' + files.length + ' files');
