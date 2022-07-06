// import lockerRollupPlugin from '@locker/rollup-plugin';
const lockerRollupPlugin = require('@locker/rollup-plugin');
const path = require('path');
// import from 'rollup-jest';

export class CustomLockerTestEnvironment extends lockerRollupPlugin {}

// TODO: We are somehow calling node_modules/rollup instead of node_modules/@locker/rollup-plugin

const sandboxSpecifier = 'evaluateInSandboxForJest';

function createLockerRollupPluginOptions(overrides) {
    return {
        // Exclude tests themselves since they don't need to be compiled.
        exclude: ['*.spec.js'],
        include: [path.resolve(testPath, '**/*.js')],
        sandboxKey: 'test',
        sandboxPackage: 'integration-karma',
        sandboxSpecifier: sandboxSpecifier,
        sourceMap: true,
        ...overrides
    };
}

const basePath = path.resolve(__dirname, '../');
const testPath = path.resolve(basePath, 'force-app/main/default/lwc');

console.log(testPath);

// let config
// config = {
//     // TODO: This input file is wrong! Let's fix it :)
//     // input: './src/main.js',
//     plugins: [
//         lockerRollupPlugin(
//             createLockerRollupPluginOptions({
//                 exclude: [path.resolve(testPath, '**/*.js')],
//                 include: [path.resolve(testPath, '**/__tests__/*.test.js')],
//                 sandboxKey: 'lws',
//             })
//         )
//     ],
// }

export default config;

// -------------------------------------------------------------------------------------
const lockerRollupPlugin = require('@locker/rollup-plugin');

let config;
config = {
    // TODO: This input file is wrong! Let's fix it :)
    // input: './src/main.js',

    // TODO: Do we want this? From jest configurations
    verbose: true,

    // TODO: What files do we want to exclude & include?
    plugins: [
        lockerRollupPlugin(
            createLockerRollupPluginOptions({
                exclude: [path.resolve(testPath, '**/*.js')],
                include: [path.resolve(testPath, '**/__tests__/*.test.js')],
                sandboxKey: 'lws'
            })
        )
    ]
};

module.exports = config;
// -------------------------------------------------------------------------------------

// TODO: This is the jest.config.js file -- might want to be doing something similar
// Should compile Locker here, then send those files over to jest.config.js?

// const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
// const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
// setupFilesAfterEnv.push('<rootDir>/jest-sa11y-setup.js');
// setupFilesAfterEnv.push('<rootDir>/jest-crypto-setup.js');
// module.exports = {
//     ...jestConfig,

//     // A map from regular expressions to module names or to arrays of module names
//     // that allow to stub out resources
//     moduleNameMapper: {
//         '^@salesforce/apex$': '<rootDir>/force-app/test/jest-mocks/apex',
//         '^@salesforce/schema$': '<rootDir>/force-app/test/jest-mocks/schema',
//         '^lightning/navigation$':
//             '<rootDir>/force-app/test/jest-mocks/lightning/navigation',
//         '^lightning/platformShowToastEvent$':
//             '<rootDir>/force-app/test/jest-mocks/lightning/platformShowToastEvent',
//         '^lightning/uiRecordApi$':
//             '<rootDir>/force-app/test/jest-mocks/lightning/uiRecordApi',
//         '^lightning/messageService$':
//             '<rootDir>/force-app/test/jest-mocks/lightning/messageService',
//         '^lightning/actions$':
//             '<rootDir>/force-app/test/jest-mocks/lightning/actions'
//     },

//     // A list of paths to modules that run some code to configure or set up the testing env.
//     setupFiles: ['jest-canvas-mock'],

//     // A list of paths to modules that run some code to configure or set up the testing
//     // framework before each test file in that suite is executed
//     setupFilesAfterEnv,

//     // Default timeout of a test in milliseconds
//     testTimeout: 10000,

//     // TODO: Need to figure out the expression that we want here -- what we want rolled up with jest

//     // TODO: Thinking maybe we move anything from this file that we added into rollup.config.js since we added the custom flag

//     // A map from regular expressions to paths to transformers.
//     // transform: {
//     //     '\\.js$': ['rollup-jest', { configFile: './rollup.config.js' }]
//     // }

//     // options:
//     // sourcemap, configFile, React, useCache, resolveImports, args, plugins
// };

// TODO: I feel like I'm currently combining locker-rollup-plugin & rollup-jest
// Are they two separate things? -- Yes but I think rollup-jest calls locker-rollup-plugin (?)
// Thinking this is okay because the example from rollup-jest in the section "use inline config"

// const sandboxSpecifier = 'evaluateInSandboxForKarma';

// export default {
//     plugins: [
//         lockerRollupPlugin({
//             sandboxKey: 'lws',
//             sandboxSpecifier,
//         })
//     ],
// };

// export default {
//     plugins: [lockerRollupPlugin()]
// };

// let config
// if (process.env.NODE_ENV === 'test') {
//     config = {
//         plugins: [inject({React: 'react'})],
//     }
// }

// export default config;

// let config
// if (process.env.NODE_ENV === 'test') {
//     config = {
//         plugins: [lockerRollupPlugin()],
//     }
// }

// export default config

// const basePath = path.resolve(__dirname, '../');
// const testPath = path.resolve(basePath, 'force-app/main/default/lwc');

// let config
// config = {
//     input: './src/main.js',
//     plugins: [
//         lockerRollupPlugin(
//             createLockerRollupPluginOptions({
//                 include: [path.resolve(testPath, '**/__tests__/*.test.js')],
//                 // sandboxKey: 'lws',
//                 // sandboxSpecifier: 'evaluateInSandboxForJest',
//             })
//         )
//     ],
// }

// export default config;

// const basePath = path.resolve(__dirname, '../');
// const testPath = path.resolve(basePath, 'force-app/main/default/lwc');

// let options
// options = {
//     include: [path.resolve(testPath, '**/__tests__/*.test.js')],
//     sandboxKey: 'lws',
//     sandboxSpecifier: 'evaluateInSandboxForJest',
// }

// let config
// config = {
//     input: './src/main.js',
//     plugins: [
//         lockerRollupPlugin(options)
//     ],
// }

// export default config;
