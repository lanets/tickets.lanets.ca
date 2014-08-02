define([
    'backbone', 
    'backbone.marionette'
],

function ( Backbone, Marionette ) {
    return Router = Marionette.AppRouter.extend({
        //"index" must be a method in AppRouter's controller
        appRoutes: {
            '': 'index'
        }
    });
});
