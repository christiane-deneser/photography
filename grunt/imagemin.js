/**
 * https://github.com/gruntjs/grunt-contrib-imagemin
 */
module.exports = function (grunt) {
    return {
        files: {
            options: {
                optimizationLevel: 3,
                svgoPlugins: [
                    {
                        removeViewBox: false
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= configGlobal.assetsSrc %>/img/',
                    src: [ '**/*.{png,jpg,gif,svg}' ],
                    dest: '<%= configGlobal.assetsDist %>/img/'
                }
            ]
        }
    };
};

