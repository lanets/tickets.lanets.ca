define([
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/header/controllers/header-show-controller',
  'modules/header/views/header-show-view'
],

function(_, Backbone, Marionette, HeaderShowController, HeaderView) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'showHeader'
    }
  });

  return HeaderModule = Marionette.Module.extend({
    startWithParent: true,

    initialize: function() {

    },

    showHeader: function() {
      this.app.headerRegion.show(new HeaderView({
          text: 'Contacts'
      }));
    },

    onStart: function() {
      new Router({
        controller: this
      });
    }
  });
});
