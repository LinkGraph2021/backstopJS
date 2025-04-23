module.exports = {
  id: "dynamic-test",
  viewports: [
    { label: "mobile", width: 375, height: 812 },
    { label: "tablet", width: 768, height: 1024 },
    { label: "desktop", width: 1440, height: 900 }
  ],
  scenarios: [
    {
      label: "Dynamic Test",
      url: "{{URL}}",
      selectors: ["{{SELECTOR}}"],
      selectorExpansion: true,
      delay: 500
    }
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report"
  },
  engine: "puppeteer",
  report: ["browser"],
  debug: false
};
