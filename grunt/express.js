/*
 * https://github.com/ericclemmons/grunt-express-server
 */
module.exports = function (grunt) {
    return {
        options: {
            script: 'server/config/server.js',
            port: 3000
        },
        dev: {
            options: {
                debug: true
            }
        },
        prod: {
            options: {
                background: false
            }
        }
    };
};
