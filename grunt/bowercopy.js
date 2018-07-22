/*
 * https://github.com/timmywil/grunt-bowercopy
 */
module.exports = function (grunt) {
    return {
        options: {
            // Bower components folder will be removed afterwards
            clean: false
        },
        bourbon: {
            files: {
                '<%= configGlobal.assetsSrc %>/scss/vendor/bourbon': 'bourbon/app/assets/stylesheets/*'
            }
        },
        modernizer: {
            files: {
                '<%= configGlobal.assetsDist %>/js/vendor/modernizr': 'modernizr/modernizr.js'
            }
        },
        neat: {
            files: {
                '<%= configGlobal.assetsSrc %>/scss/vendor/neat': 'neat/app/assets/stylesheets'
            }
        },
        'normalize-scss': {
            files: {
                '<%= configGlobal.assetsSrc %>/scss/vendor/normalize-scss': 'normalize-scss/_normalize.scss'
            }
        },
        picturefill: {
            files: {
                '<%= configGlobal.assetsDist %>/js/vendor/picturefill': 'picturefill/dist/picturefill*.js'
            }
        }
    };
};
