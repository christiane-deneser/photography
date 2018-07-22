/*
 * https://github.com/ahmednuaman/grunt-scss-lint
 */
module.exports = function (grunt) {
    return {
        options: {
            config: 'scss-lint.yml'
        },
        all: [
            '<%= configGlobal.assetsSrc %>/scss/**/*.scss',
            '!<%= configGlobal.assetsSrc %>/scss/vendor/**/*.scss'
        ]
    };
};
