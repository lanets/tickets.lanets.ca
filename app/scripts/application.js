define([
    'backbone',
    'communicator',
    'modules/header/main'
],

function( Backbone, Communicator, HeaderModule ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    // Modules initialization
    App.module('Header', HeaderModule);

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
