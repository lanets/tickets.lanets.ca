require([
    'backbone',
    'application',
    'regionManager',
    'controller',
    'router'
],
function ( Backbone, App, RegionManager, Controller, Router ) {
    'use strict';

    App.appRouter = new Router({
        controller: new Controller()
    });

    App.start();
});
