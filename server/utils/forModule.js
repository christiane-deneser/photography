var fs = require( 'fs' ),
    path = require( 'path' ),
    rootPath = path.normalize( __dirname + '/../../' ),
    modelPath = rootPath + 'data/modules/',
    extend;

// will extend the first object with the data of the second one.
// data with the same index will be overwritten
extend = function ( obj1, obj2 ) {
    for ( var index in obj2 ) {
        obj1[ index ] = obj2[ index ];
    }
};

module.exports = function ( data, module, callback ) {

    var getLocalFile;

    if ( typeof module.module.json !== 'undefined' ) {

        // init empty object of it is not set
        if ( typeof module.module.model === 'undefined' ) {
            module.module.model = {};
        }

        // local json file
        getLocalFile = function () {
            fs.readFile(
                modelPath + module.module.json + '.json',
                { encoding: 'utf-8' },
                function ( err, json ) {

                    if ( err ) {
                        callback( null, err, {} );
                    }
                    else {
                        json = JSON.parse( json );
                        extend( module.module.model, json );
                        callback( null, data, json );
                    }
                }
            );
        };

        getLocalFile();

    }
    else {
        callback( null, data, {} );
    }
};
