var forModule = require( './forModule' ),
    async = require( 'async' );

module.exports = function ( data, elements, callback ) {
    // if it's an array of modules -> load modules by json name
    if ( Array.isArray( elements ) || typeof elements === 'object' ) {
        // for each module in array
        async.each( elements, function ( module, cb2 ) {
            forModule( data, module, cb2 );
            // add content of array to the other elements
        }, callback );
        // if it's not an array -> just add
    }
    else {
        callback( null, data, {} );
    }
};
