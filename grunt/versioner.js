/*
 * https://github.com/amkirwan/grunt-versioner
 */
module.exports = function (grunt) {
    return {
        options: {
            bump: true,
            file: './package.json',
            gitAdd: true,
            gitCommit: true,
            gitPush: true,
            gitTag: true,
            gitPushTag: true,
            gitDescribeOptions: '--tags --always --dirty=-d',
            tagPrefix: 'v',
            commitMessagePrefix: 'Release: ',
            tagMessagePrefix: 'Version: ',
            readmeText: 'Version:',
            pushTo: 'origin',
            branch: 'master',
            npm: false,
            mode: 'production' // production or test
        },
        'default': {
            files: {
                './package.json': [ './package.json' ],
                './bower.json': [ './bower.json' ],
                './README.md': [ './README.md' ]
            }
        }
    };
};
