

QUnit.config.autostart = false;
QUnit.config.urlConfig.push({
    id: "canStart",
    label: "Start the tests",
    tooltip: "Allows a user to set options before tests start."
});

QUnit.config.urlConfig.push({
    id: "next",
    label: "Next tracking lib.",
    tooltip: "Next tracking lib."
});


require.config({ baseUrl: "Scripts/Tests" });
require([
      "paramTests",
      "miscTests",
      "koSpecificTests",
      "attachTests",
      "classRewriteTests",
      "metadataTests",
      "entityManagerTests",
      "entityTests",
      "queryTests",
      "queryCtorTests",
      "queryDatatypeTests",
      "queryLocalTests",
      "queryNamedTests",
      "queryRawOdataTests",
      "querySelectTests",
      "validateTests",
      "validateEntityTests",
       "saveTests"

], function (testFns) {
    
    document.getElementById("title").appendChild(document.createElement('pre')).innerHTML = testFns.message;
    if (QUnit.config.canStart) {

        QUnit.start(); //Tests loaded, run tests
    }

});

