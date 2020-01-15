report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Portfolio_Demo_0_document_0_phone.png",
        "test": "../bitmaps_test/20200114-201018/backstop_default_Portfolio_Demo_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Portfolio_Demo_0_document_0_phone.png",
        "label": "Portfolio Demo",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://127.0.0.1:5500/index.html",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "6.58",
          "analysisTime": 73
        },
        "diffImage": "../bitmaps_test/20200114-201018/failed_diff_backstop_default_Portfolio_Demo_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Portfolio_Demo_0_document_1_tablet.png",
        "test": "../bitmaps_test/20200114-201018/backstop_default_Portfolio_Demo_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Portfolio_Demo_0_document_1_tablet.png",
        "label": "Portfolio Demo",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://127.0.0.1:5500/index.html",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "16.71",
          "analysisTime": 117
        },
        "diffImage": "../bitmaps_test/20200114-201018/failed_diff_backstop_default_Portfolio_Demo_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});