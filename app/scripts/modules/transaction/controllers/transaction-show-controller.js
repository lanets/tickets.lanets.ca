define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/transaction/views/transaction-info-view',
  'entities/events'
],

function(_, Backbone, Marionette, TransactionInfoView, Events) {
  return TransactionShowController = Marionette.Controller.extend({
    showEventInfo: function() {
      var events = new Events();
      events.fetch({
        success: _.bind(function(listEvents) {
          this.app.mainRegion.show(new TransactionInfoView({
            curEvent: listEvents.get(2015)
          }));
        }, this)
      });
    }
  });
});
