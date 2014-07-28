define([
    'backbone',
    'communicator'
],

function( Backbone, Communicator ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({
        headerRegion: "#header",
        mainRegion: "#main",
        footerRegion: "#footer"
    });

    /* Add initializers here */
    App.addInitializer( function () {
        Backbone.history.start({
            pushState: true
        });

        Communicator.mediator.trigger("APP:START");
    });

    return App;
});
