/*
 * https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function ( grunt ) {
    return {
        options: {
            livereload: true,
            spawn: false
        },
        data: {
            files: [ 'data/**/*.json' ],
            tasks: [ 'newer:jsonlint:models' ]
        },
        express: {
            files: [
                'server/**/*.js',
                'src/controllers/**/*.js'
            ],
            tasks: [ 'jscs:server', 'jshint:server', 'express:dev' ]
        },
        grunt: {
            files: [ 'Gruntfile.js', 'grunt/**/*.js' ],
            tasks: [ 'jscs:grunt', 'jshint:grunt' ]
        },
        js: {
            files: [ '<%= configGlobal.assetsSrc %>/js/main/**/*.js' ],
            tasks: [ 'newer:jscs:js', 'newer:jshint:js', 'concat', 'newer:uglify' ]
        },
        routes: {
            files: [ 'server/routes.json' ],
            tasks: [ 'jsonlint:routes', 'express:dev' ]
        },
        sass: {
            files: [ '<%= configGlobal.assetsSrc %>/scss/**/*.scss' ],
            tasks: [ 'scsslint', 'sass' ]
        },
        imagemin: {
            files: [ '<%= configGlobal.assetsSrc %>/img/**/*' ],
            tasks: [ 'newer:imagemin' ]
        },
        views: {
            files: [ 'src/views/**/*' ]
        }
    };
};
