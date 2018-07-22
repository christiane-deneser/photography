/*
 * https://github.com/gruntjs/grunt-copy
 */
module.exports = function (grunt) {
    return {
        html: {
            expand: true,
            cwd: 'dist/html/',
            src: [ '**' ],
            dest: 'export/'
        },
        assets: {
            expand: true,
            cwd: 'dist/',
            src: [ 'assets/**' ],
            dest: 'export/'
        }
    };
};
