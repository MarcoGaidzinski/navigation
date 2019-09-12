sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.navigation.controller.S2", {

		onInit: function () {

		},

		onBack: function(oEvent){
			this.getOwnerComponent().getRouter().navTo("inicial");
		},
		
		onPress: function(oEvent){
			
		}
	});

});