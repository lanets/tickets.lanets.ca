define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/transaction/controllers/transaction-show-controller'
],

function(_, Backbone, Marionette, TransactionShowController) {
  return TransactionModule = Marionette.Module.extend({
    startWithParent: true,

    initialize: function() {
      this.controller = new TransactionShowController();
      this.controller.app = this.app;
    },

    onStart: function() {
      this.showEventInfo();
    },

    showEventInfo: function() {
      this.controller.showEventInfo();
    }
  });
});
