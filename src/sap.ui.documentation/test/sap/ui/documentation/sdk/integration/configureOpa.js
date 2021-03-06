sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/documentation/sdk/test/arrangement/Arrangement",
	// QUnit additions
	"sap/ui/qunit/qunit-css",
	"sap/ui/qunit/qunit-junit",
	"sap/ui/qunit/qunit-coverage",
	// Page Objects
	"sap/ui/documentation/sdk/test/pageobjects/App",
	"sap/ui/documentation/sdk/test/pageobjects/Welcome",
	"sap/ui/documentation/sdk/test/pageobjects/TopicMaster",
	"sap/ui/documentation/sdk/test/pageobjects/ApiMaster",
	"sap/ui/documentation/sdk/test/pageobjects/ControlsMaster",
	"sap/ui/documentation/sdk/test/pageobjects/Demoapps",
	"sap/ui/documentation/sdk/test/pageobjects/Tools"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements : new Arrangement(),
		actions: new Opa5({
			iLookAtTheScreen : function () {
				return this;
			}
		}),
		viewNamespace : "sap.ui.documentation.sdk.view.",
		autoWait: true
	});
});

