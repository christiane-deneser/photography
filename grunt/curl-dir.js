/*
 * https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function (grunt) {

    var pages = [
        'http://localhost:3000/raw/adobe-aem-developer-m-w'
    ];

    return {
        pages: {
            src: pages,
            dest: 'dist/html',
            router: function (url) {
                var path =  url.split(':3000/')[1] + '.html';
                path = path.replace(/raw/, '');
                return path;
            }
        }
    };
};
