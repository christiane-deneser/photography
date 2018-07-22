/*
 * https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function ( grunt ) {
    return {
        'dist': [
            'dist/'
        ],
        'export-static': [
            'export-static/'
        ],
        'vendor-js': [
            '<%= configGlobal.assetsDist %>/js/vendor'
        ],
        'vendor-scss': [
            '<%= configGlobal.assetsSrc %>/scss/vendor'
        ]
    };
};
