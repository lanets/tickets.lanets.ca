define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'hbs!modules/header/templates/header-show-main'
],

function(_, Backbone, Marionette, HeaderTemplate) {
  return HeaderShowView = Marionette.ItemView.extend({
    template: HeaderTemplate
  });
});
