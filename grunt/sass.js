/*
 * https://github.com/gruntjs/grunt-contrib-sass
 */
module.exports = function (grunt) {
    return {
        options: {
            quiet: true,
            sourcemap: 'inline',
            unixNewlines: true
        },
        expanded: {
            options: {
                noCache: true,
                style: 'expanded'
            },
            src: '<%= configGlobal.assetsSrc %>/scss/styles.scss',
            dest: '<%= configGlobal.assetsDist %>/css/styles.css'
        },
        minified: {
            options: {
                noCache: true,
                style: 'compressed'
            },
            src: '<%= configGlobal.assetsSrc %>/scss/styles.scss',
            dest: '<%= configGlobal.assetsDist %>/css/styles.min.css'
        }
    };
};
