'use strict';

var getPageData = require( '../../server/utils/getPageData' );

exports.renderPage = function ( args ) {

    var model = require( '../../data/pages/' + args.model ), // get page data
        view = args.view; // get page view

    return function ( req, res ) {
        getPageData( args.model, function ( model ) {

            // overwrite default layout
            if (args.layout) {
                model.layout = args.layout;
            }

            res.render( view, model );

        } );
    };
};
