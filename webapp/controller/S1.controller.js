sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.navigation.controller.S1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ovly.navigation.view.S1
		 */
		onInit: function () {

		},
		onItemPress: function (oEvent) {
			
			var oParameters = oEvent.getParameters();
			var oListItem = oParameters.listItem; // NAO EH FUNCAO
			var oContext = oListItem.getBindingContext();
			var sId = oContext.getProperty("Team_Identifier"); 
			
			this.getOwnerComponent().getRouter().navTo("equipe", { 
				idEquipe: sId
			});
		}
	});

});