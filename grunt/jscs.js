/*
 * https://github.com/gustavohenke/grunt-jscs
 */
module.exports = function (grunt) {
    return {
        options: {
            requireCurlyBraces: [
                'if',
                'else',
                'for',
                'while',
                'do',
                'try',
                'catch',
                'case',
                'default'
            ],
            requireSpaceAfterKeywords: [
                'if',
                'else',
                'for',
                'while',
                'do',
                'switch',
                'return',
                'try',
                'catch'
            ],
            requireSpaceBeforeBlockStatements: true,
            requireParenthesesAroundIIFE: true,
            requireSpacesInConditionalExpression: true,
            requireSpacesInFunctionExpression: {
                beforeOpeningCurlyBrace: true
            },
            requireSpacesInAnonymousFunctionExpression: {
                beforeOpeningCurlyBrace: true
            },
            requireSpacesInNamedFunctionExpression: {
                beforeOpeningCurlyBrace: true
            },
            requireSpacesInFunctionDeclaration: {
                beforeOpeningCurlyBrace: true
            },
            requireMultipleVarDecl: true,
            requireBlocksOnNewline: true,
            disallowEmptyBlocks: true,
            requireSpacesInsideObjectBrackets: 'allButNested',
            requireSpacesInsideArrayBrackets: 'allButNested',
            disallowDanglingUnderscores: true,
            disallowSpaceAfterObjectKeys: true,
            requireCommaBeforeLineBreak: true,
            requireOperatorBeforeLineBreak: true,
            disallowSpaceAfterPrefixUnaryOperators: [
                '++',
                '--',
                '+',
                '-',
                '~',
                '!'
            ],
            disallowSpaceBeforePostfixUnaryOperators: [
                '++',
                '--'
            ],
            requireSpaceBeforeBinaryOperators: [
                '=',
                '+',
                '-',
                '/',
                '*',
                '==',
                '===',
                '!=',
                '!=='
            ],
            requireSpaceAfterBinaryOperators: [
                '=',
                ',',
                '+',
                '-',
                '/',
                '*',
                '==',
                '===',
                '!=',
                '!=='
            ],
            requireCamelCaseOrUpperCaseIdentifiers: 'ignoreProperties',
            disallowKeywords: [
                'with'
            ],
            disallowMultipleLineStrings: true,
            validateLineBreaks: 'LF',
            validateQuoteMarks: '\'',
            validateIndentation: 4,
            disallowMixedSpacesAndTabs: 'smart',
            disallowTrailingWhitespace: true,
            disallowTrailingComma: true,
            requireKeywordsOnNewLine: [
                'else'
            ],
            requireCapitalizedConstructors: true,
            safeContextKeyword: [
                'that'
            ],
            requireDotNotation: true,
            disallowYodaConditions: true,
            validateJSDoc: {
                checkParamNames: true,
                checkRedundantParams: true,
                requireParamTypes: true
            },
            requireSpaceAfterLineComment: true
        },
        grunt: {
            src: [ 'Gruntfile.js', 'grunt/**/*.js' ]
        },
        js: {
            src: [
                '<%= configGlobal.assetsSrc %>/js/main/**/*.js'
            ]
        },
        server: {
            src: [
                'server/**/*.js',
                'src/controllers/**/*.js'
            ]
        }
    };
};
