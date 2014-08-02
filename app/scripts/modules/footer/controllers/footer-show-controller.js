define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/footer/views/footer-show-view'
],

function(_, Backbone, Marionette, FooterView) {
  return FooterShowController = Marionette.Controller.extend({
    showFooter: function() {
      this.app.footerRegion.show(new FooterView());
    }
  });
});
