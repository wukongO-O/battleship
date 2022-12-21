/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */


module.exports = {
    transformIgnorePatterns: [
        'node_modules/(?!' + 
            [
                'node-fetch',
                'fetch-blob',
                'data-uri-to-buffer',
                'jest-runtime',
                'formdata-polyfill'
            ].join('|') +
        ')',
    ],
};