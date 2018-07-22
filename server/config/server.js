'use strict';

var express = require( 'express' ),
    exphbs = require( 'express-handlebars' ),
    compression = require( 'compression' ),
    fs = require( 'fs' ),
    logger = require( 'morgan' ),

    path = require( 'path' ),
    rootPath = path.normalize( __dirname ),

    hbsHelper = require( path.join( rootPath, '../utils/hbsHelper' ) ),

    app = express(),

    hbs,
    accessLogStream,
    logDirectory = path.join( rootPath, '../../logs');

module.exports = (function ( app ) {

    // Register `hbs` as our view engine using its bound `engine()` function.
    app.engine( '.hbs', hbsHelper() );
    app.set( 'views', path.join( rootPath, '../../src/views' ) );
    app.set( 'view engine', '.hbs' );

    app.use( compression() );

    app.use( express[ 'static' ]( path.join( rootPath, '../../dist/' ) ) );

    if (process.env.NODE_ENV === 'dev') {
        app.use( require( 'connect-livereload' )() );
    }

    // logging
    // ensure log directory exists
    if (!fs.existsSync(logDirectory)) {
        fs.mkdirSync(logDirectory);
    }
    accessLogStream = fs.createWriteStream( path.join( logDirectory, 'access.log' ), { flags: 'a' } );
    app.use( logger( 'combined', { stream: accessLogStream } ) );

    // Routing
    require( path.join( rootPath, '../routes' ) )( app );

    var server = app.listen( 3000, function () {
        console.log( 'Listening on %s:%d', server.address().address, server.address().port );
    } );

})( app );
