define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/header/views/header-show-view'
],

function(_, Backbone, Marionette, HeaderView) {
  return HeaderShowController = Marionette.Controller.extend({
    showHeader: function() {
      this.app.headerRegion.show(new HeaderView({
          text: 'Contacts'
      }));
    }
  });
});
