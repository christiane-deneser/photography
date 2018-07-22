'use strict';

var controllers = require( '../src/controllers/' ),
    routes = require( './routes.json' ).route;

/**
 * Application routes
 */
module.exports = function ( app ) {
    for ( var route in routes ) {
        app.get( routes[ route ].path, controllers.renderPage( {
            view: routes[ route ].view,
            model: routes[ route ].model
        } ) );

        app.get( '/raw' + routes[ route ].path, controllers.renderPage( {
            view: 'pages/raw',
            model: routes[ route ].model,
            layout: 'raw'
        } ) );
    }
};
