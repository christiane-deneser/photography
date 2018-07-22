'use strict';

var fs = require( 'fs' ),
    exphbs = require( 'express-handlebars' ),
    glob = require( 'glob' ),

    path = require( 'path' ),
    rootPath = path.normalize( __dirname + '/../..' ),
    modulesPath = rootPath + '/src/views/modules/',
    layoutsPath = rootPath + '/src/views/layouts/',


    partials = null,
    moduleHelper,
    getPartials,
    model,
    handlebars = exphbs.create( {
        partialsDir: modulesPath,
        helpers: {
            moduleHelper: moduleHelper,
            model: model
        }
    } ).handlebars,
    template;

/**
 * adds the possibility to call helper functions with dynamic identifiers.
 * @example {{{moduleHelper Module.Name Module.Model}}}
 */
moduleHelper = function ( moduleName, moduleModel ) {

    // read HTML from file
    var html = '',
        template;

    moduleModel = typeof moduleModel !== 'undefined' ? moduleModel : {};

    try {
        html = fs.readFileSync( modulesPath + moduleName + '.hbs' ).toString();
    }
    catch ( err ) {
        html = err;
    }

    // bind HTML to template
    template = handlebars.compile( html );

    // read partials once!
    if ( partials === null ) {
        partials = getPartials();
    }

    // combine template with the data
    try {
        template = template( moduleModel, {
            partialsDir: modulesPath,
            // needed for the helper nested helper model
            // otherwise an exeption will be thrown
            helpers: {
                moduleHelper: moduleHelper
            },
            partials: partials
        } );
    } catch (err) {
        console.log('error: ', err);
        return 'error: ' + err;
    }

    return template;
};

/**
 * read all partials only once! otherwise the test server needs to much time -> bad page load
 */
getPartials = function () {

    var files = glob.sync( modulesPath + '/**/**.hbs' ),
        partialName,
        p,
        f,
        partials = {};

    for ( var i = 0; i < files.length; i++ ) {
        f = files[ i ];
        if ( f.indexOf( '.hbs' ) > 0 ) {
            p = fs.readFileSync( f );
            partialName = f.substr( modulesPath.length ).split( '.' )[ 0 ];
            partials[ partialName ] = p.toString();
        }
    }

    return partials;
};


module.exports = function () {
    return exphbs( {
        extname: '.hbs',
        // Default layout and locate layouts and partials
        defaultLayout: 'main',
        layoutsDir: layoutsPath,
        partialsDir: modulesPath,
        helpers: {
            moduleHelper: moduleHelper
        }
    } );
};
