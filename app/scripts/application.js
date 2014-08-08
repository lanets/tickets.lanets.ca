define([
    'backbone',
    'communicator',
    'modules/header/main',
    'modules/footer/main',
    'modules/transaction/main'
],

function( Backbone, Communicator, HeaderModule, FooterModule ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    // Modules initialization
    App.module('Header', HeaderModule);
    App.module('Footer', FooterModule);
    App.module('Transaction', TransactionModule);

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
