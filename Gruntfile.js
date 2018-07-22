var assetspath = require('./grunt/custom/assetspath');

module.exports = function ( grunt ) {
    'use strict';

    // measures the time each task takes
    require( 'time-grunt' )( grunt );

    // load grunt config
    require( 'load-grunt-config' )( grunt, {
        init: true,
        data: {
            configGlobal: {
                assetsSrc: 'src/assets/',
                assetsDist: 'dist/assets/',
                jsBanner: grunt.file.read( 'src/assets/js/main-assets/banner.txt' ),
                jsFooter: grunt.file.read( 'src/assets/js/main-assets/footer.txt' )
            },
            pkg: grunt.file.readJSON( 'package.json' )
        }
    });

    grunt.registerTask('assetspath', assetspath);

    // default task
    grunt.registerTask( 'default', [ 'bowercopy', 'scss', 'js' ] );

    // custom tasks
    grunt.registerTask( 'dev', [ 'default', 'express:dev', 'watch' ] );

    grunt.registerTask( 'export', [ 'default', 'express:dev', 'curl-dir', 'copy', 'assetspath' ]);

    grunt.registerTask( 'scss', [ 'scsslint', 'sass' ] );
    grunt.registerTask( 'js', [ 'jscs', 'jshint', 'concat', 'uglify' ] );
};
