/*
 * https://github.com/brandonramirez/grunt-jsonlint
 */
module.exports = function (grunt) {
    return {
        models: {
            src: [ 'data/**/*.json' ]
        },
        routes: {
            src: [ 'server/routes.json' ]
        }
    };
};
