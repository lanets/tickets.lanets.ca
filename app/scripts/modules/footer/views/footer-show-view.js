define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'hbs!modules/footer/templates/footer-show-main'
],

function(_, Backbone, Marionette, FooterTemplate) {
  return HeaderShowView = Marionette.ItemView.extend({
    template: FooterTemplate
  });
});
