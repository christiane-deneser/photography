var async = require( 'async' ),
    fs = require( 'fs' ),
    forElement = require( './forElement' ),

    path = require( 'path' ),
    rootPath = path.normalize( __dirname + '/../../' ),
    pageModelPath = rootPath + 'data/pages/';

module.exports = function ( file, callback ) {

    async.waterfall( [
        function ( callback ) {
            fs.readFile( pageModelPath + file + '.json', 'utf8', callback );
        },
        function ( elements, callback ) {
            try {
                elements = JSON.parse( elements );
            }
            catch ( e ) {
                callback( e );
            }

            async.each( Object.keys( elements ), function ( element, cb ) {
                forElement( elements, elements[ element ], cb );
            }, function ( err ) {
                callback( err, elements );
            } );
        }
    ], function ( err, data ) {
        callback( data );
    } );
};
