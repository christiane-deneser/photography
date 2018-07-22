/*
 * https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function (grunt) {
    return {
        options: {
            compress: {
                drop_console: false
            },
            preserveComments: 'some',
            report: 'gzip',
            sourceMap: true
        },
        main: {
            src: '<%= configGlobal.assetsDist %>/js/main.js',
            dest: '<%= configGlobal.assetsDist %>/js/main.min.js'
        },
        modernizr: {
            src: '<%= configGlobal.assetsDist %>/js/vendor/modernizr/modernizr.js',
            dest: '<%= configGlobal.assetsDist %>/js/vendor/modernizr/modernizr.min.js'
        }
    };
};
