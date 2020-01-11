report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Portfolio_Demo_0_document_0_phone.png",
        "test": "../bitmaps_test/20200111-103806/backstop_default_Portfolio_Demo_0_document_0_phone.png",
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
          "misMatchPercentage": "0.19",
          "analysisTime": 99
        },
        "diffImage": "../bitmaps_test/20200111-103806/failed_diff_backstop_default_Portfolio_Demo_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Portfolio_Demo_0_document_1_tablet.png",
        "test": "../bitmaps_test/20200111-103806/backstop_default_Portfolio_Demo_0_document_1_tablet.png",
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
          "misMatchPercentage": "0.12",
          "analysisTime": 181
        },
        "diffImage": "../bitmaps_test/20200111-103806/failed_diff_backstop_default_Portfolio_Demo_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});