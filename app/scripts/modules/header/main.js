define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/header/controllers/header-show-controller',
  'modules/header/views/header-show-view'
],

function(_, Backbone, Marionette, HeaderShowController, HeaderView) {
  return HeaderModule = Marionette.Module.extend({
    startWithParent: true,

    initialize: function() {
      this.controller = new HeaderShowController();
      this.controller.app = this.app;
    },

    onStart: function() {
      this.showHeader();
    },

    showHeader: function() {
      this.controller.showHeader();
    }
  });
});
