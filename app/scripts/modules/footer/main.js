define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/footer/controllers/footer-show-controller'
],

function(_, Backbone, Marionette, FooterShowController, FooterView) {
  return FooterModule = Marionette.Module.extend({
    startWithParent: true,

    initialize: function() {
      this.controller = new FooterShowController();
      this.controller.app = this.app;
    },

    onStart: function() {
      this.showFooter();
    },

    showFooter: function() {
      this.controller.showFooter();
    }
  });
});
