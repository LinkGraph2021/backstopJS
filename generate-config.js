const fs = require('fs');

const url = process.env.TARGET_URL || 'https://example.com';
const selector = process.env.CSS_SELECTOR || 'document';

const template = fs.readFileSync('backstop.config.template.js', 'utf8');
const config = template
  .replace('{{URL}}', url)
  .replace('{{SELECTOR}}', selector);

fs.writeFileSync('backstop.config.js', config);
