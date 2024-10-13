/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"jgp/desafio5p/aprovacaosolicitacoes/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});