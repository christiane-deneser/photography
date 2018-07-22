/*
 * https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function (grunt) {
    return {
        main: {
            options: {
                banner: '<%= configGlobal.jsBanner %>',
                footer: '<%= configGlobal.jsFooter %>',
                process: function (src) {
                    src = src.replace(/(^)*('use strict'|'use strict');*\s/g, '');
                    src = grunt.util.normalizelf(src);
                    return src.split(grunt.util.linefeed).map(function (line) {
                        return '\t' + line;
                    }).join(grunt.util.linefeed);
                },
                seperator: ';'
            },
            src: '<%= configGlobal.assetsSrc %>/js/main/**/*.js',
            dest: '<%= configGlobal.assetsDist %>/js/main.js'
        }
    };
};
