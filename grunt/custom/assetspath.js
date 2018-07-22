var glob = require('glob'),
    path = require('path'),
    fs = require('fs');

function replaceAssetPath (filePath, searchFor, replaceBy, cb) {

    var p = path.join(__dirname, '../../', filePath);

    glob(p, function (err, files) {

        if (err) {
            throw err;
        }

        if (files.length < 1) {
            cb();
        }

        files.forEach(function (file) {
            fs.readFile(file, function (err, fileContent) {
                if (err) {
                    throw err;
                }
                var newContent = fileContent.toString().replace(new RegExp(searchFor, 'g'), replaceBy);
                fs.writeFile(file, newContent, function (err) {
                    if (err) {
                        throw err;
                    }
                    cb();
                });
            });
        });
    });
}

module.exports = function () {

    var done = this.async();

    replaceAssetPath('export/*.html', '\/assets', './assets', function () {
        replaceAssetPath('export/assets/**/*.css', '\/assets', '..', done);
    });
};


