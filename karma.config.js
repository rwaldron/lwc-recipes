// Karma configuration
// Generated on Wed Jul 06 2022 12:41:01 GMT-0400 (Eastern Daylight Time)
const path = require('path');
const lwc = require('@lwc/rollup-plugin');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replaceRollupPlugin = require('@rollup/plugin-replace');

const basePath = __dirname;

const bundleReplacements = {
    'c/apexImperativeMethod': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexImperativeMethod'
    ),
    'c/apexImperativeMethodWithComplexParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexImperativeMethodWithComplexParams'
    ),
    'c/apexWireMethodToFunction': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodToFunction'
    ),
    'c/apexImperativeMethodWithParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexImperativeMethodWithParams'
    ),
    'c/apexWireMethodWithParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodWithParams'
    ),
    'c/apexWireMethodWithParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodWithParams'
    ),
    'c/apexStaticSchema': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexStaticSchema'
    ),
    'c/apexWireMethodWithComplexParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodWithComplexParams'
    ),
    'c/apiProperty': path.resolve(
        basePath,
        './force-app/main/default/lwc/apiProperty'
    ),
    'c/apexWireMethodToProperty': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodToProperty'
    ),
    'c/apiMethod': path.resolve(
        basePath,
        './force-app/main/default/lwc/apiMethod'
    ),
    'c/clock': path.resolve(basePath, './force-app/main/default/lwc/clock'),
    'c/categoryFilter': path.resolve(
        basePath,
        './force-app/main/default/lwc/categoryFilter'
    ),
    'c/apiSetterGetter': path.resolve(
        basePath,
        './force-app/main/default/lwc/apiSetterGetter'
    ),
    'c/compositionBasics': path.resolve(
        basePath,
        './force-app/main/default/lwc/compositionBasics'
    ),
    'c/chartBar': path.resolve(
        basePath,
        './force-app/main/default/lwc/chartBar'
    ),
    'c/compositionIteration': path.resolve(
        basePath,
        './force-app/main/default/lwc/compositionIteration'
    ),
    'c/compositionContactSearch': path.resolve(
        basePath,
        './force-app/main/default/lwc/compositionContactSearch'
    ),
    'c/compositionWithAppBuilder': path.resolve(
        basePath,
        './force-app/main/default/lwc/compositionWithAppBuilder'
    ),
    'c/contactInfo': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactInfo'
    ),
    'c/contactListItem': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactListItem'
    ),
    'c/contactList': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactList'
    ),
    'c/contactListItemBubbling': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactListItemBubbling'
    ),
    'c/contactTile': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactTile'
    ),
    'c/contactSelector': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactSelector'
    ),
    'c/datatableCustomDataType': path.resolve(
        basePath,
        './force-app/main/default/lwc/datatableCustomDataType'
    ),
    'c/datatableInlineEditWithApex': path.resolve(
        basePath,
        './force-app/main/default/lwc/datatableInlineEditWithApex'
    ),
    'c/eventBubbling': path.resolve(
        basePath,
        './force-app/main/default/lwc/eventBubbling'
    ),
    'c/datatableInlineEditWithUiApi': path.resolve(
        basePath,
        './force-app/main/default/lwc/datatableInlineEditWithUiApi'
    ),
    'c/errorPanel': path.resolve(
        basePath,
        './force-app/main/default/lwc/errorPanel'
    ),
    'c/hello': path.resolve(basePath, './force-app/main/default/lwc/hello'),
    'c/helloConditionalRendering': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloConditionalRendering'
    ),
    'c/eventWithData': path.resolve(
        basePath,
        './force-app/main/default/lwc/eventWithData'
    ),
    'c/helloBinding': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloBinding'
    ),
    'c/helloForEach': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloForEach'
    ),
    'c/helloExpressions': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloExpressions'
    ),

    "'c/": `'${path.resolve(basePath, './force-app/main/default/lwc/')}`,
    '@salesforce/apex': path.resolve(
        basePath,
        './force-app/test/jest-mocks/apex'
    ),
    '@salesforce/schema': path.resolve(
        basePath,
        './force-app/test/jest-mocks/schema'
    ),
    'lightning/navigation': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/navigation'
    ),
    'lightning/platformShowToastEvent': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/platformShowToastEvent'
    ),
    'lightning/uiRecordApi': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/uiRecordApi'
    ),
    'lightning/messageService': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/messageService'
    ),
    'lightning/actions': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/actions'
    ),
    objectGuards: true,
    preventAssignment: true
};

console.log(basePath);
console.log(__dirname);
console.log(bundleReplacements);
// process.exit();

const pattern = 'force-app/main/default/lwc/**/__tests__/*.test.js';

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath,

        // frameworks to use
        // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [{ pattern, type: 'module', watched: true }],

        // list of files / patterns to exclude
        exclude: [
            path.resolve(
                basePath,
                './force-app/main/default/lwc/editRecordScreenAction/__tests__/editRecordScreenAction.test.js'
            )
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
        preprocessors: {
            [pattern]: ['rollup']
        },

        // custom preprocessor
        rollupPreprocessor: {
            preserveEntrySignatures: 'exports-only',
            treeshake: false,
            plugins: [
                replaceRollupPlugin(bundleReplacements),
                nodeResolve({
                    preferBuiltins: true
                }),
                lwc()
            ],
            output: {
                format: 'es',
                sourcemap: 'inline'
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser instances should be started simultaneously
        concurrency: Infinity

        // proxies: {
        //   '^@salesforce/apex$': '<rootDir>/force-app/test/jest-mocks/apex',
        //   '^@salesforce/schema$': '<rootDir>/force-app/test/jest-mocks/schema',
        //   '^lightning/navigation$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/navigation',
        //   '^lightning/platformShowToastEvent$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/platformShowToastEvent',
        //   '^lightning/uiRecordApi$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/uiRecordApi',
        //   '^lightning/messageService$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/messageService',
        //   '^lightning/actions$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/actions'
        // }
    });
};
