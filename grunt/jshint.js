/*
 * https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = function (grunt) {
    return {
        options: {
            curly: true,
            eqeqeq: true,
            es3: true,
            immed: true,
            indent: 4,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            unused: false,
            boss: true,
            eqnull: true,
            globals: {
                jQuery: true,
                JSON: true
            }
        },
        grunt: {
            options: {
                node: true
            },
            src: [ 'Gruntfile.js', 'grunt/**/*.js' ]
        },
        js: {
            options: {
                browser: true,
                devel: true,
                globalstrict: true
            },
            src: [ '<%= configGlobal.assetsSrc %>/js/main/**/*.js' ]
        },
        server: {
            options: {
                node: true
            },
            src: [
                'data/**/*.js',
                'server/**/*.js',
                'src/controllers/**/*.js'
            ]
        }
    };
};
