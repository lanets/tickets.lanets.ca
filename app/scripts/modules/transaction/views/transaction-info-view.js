define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'hbs/handlebars',
  'hbs!modules/transaction/templates/transaction-event-info'
],

function(_, Backbone, Marionette, Handlebars, TransactionTemplate) {
  return TransactionShowView = Marionette.ItemView.extend({
    events: {
      'click .next-step-btn': 'onNextStep'
    },

    initialize: function(options) {
      this.options = options;

      this.template = TransactionTemplate(this.options.curEvent.attributes);
      this.render();
    },

    onNextStep: function() {
      console.log('TODO: Next step');
    }
  });
});
