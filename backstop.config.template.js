// backstop.config.template.js

module.exports = {
  id: 'visual_regression',
  viewports: [
    {
      label: 'desktop',
      width: 1280,
      height: 800,
    },
    {
      label: 'mobile',
      width: 375,
      height: 812,
    }
  ],
  scenarios: [
    // This array will be overwritten dynamically by generate-config.js
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  report: ['browser'],
  debug: false
};
