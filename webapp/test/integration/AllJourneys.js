jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"myworklist/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"myworklist/test/integration/pages/Worklist",
		"myworklist/test/integration/pages/Object",
		"myworklist/test/integration/pages/NotFound",
		"myworklist/test/integration/pages/Browser",
		"myworklist/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "myworklist.view."
	});

	sap.ui.require([
		"myworklist/test/integration/WorklistJourney",
		"myworklist/test/integration/ObjectJourney",
		"myworklist/test/integration/NavigationJourney",
		"myworklist/test/integration/NotFoundJourney",
		"myworklist/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
