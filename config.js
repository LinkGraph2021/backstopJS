report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Home_page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20250423-205428/backstop_default_Home_page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Home_page_0_document_0_desktop.png",
        "label": "Home page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://example.com",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Home_page_0_document_1_mobile.png",
        "test": "../bitmaps_test/20250423-205428/backstop_default_Home_page_0_document_1_mobile.png",
        "selector": "document",
        "fileName": "backstop_default_Home_page_0_document_1_mobile.png",
        "label": "Home page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://example.com",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});