const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
setupFilesAfterEnv.push('<rootDir>/jest-sa11y-setup.js');
setupFilesAfterEnv.push('<rootDir>/jest-crypto-setup.js');

const pattern = '^.+\\.(js|html|css)$';
const transform = process.env.LWS
    ? {
          ...jestConfig.transform,
          [pattern]: '<rootDir>/lws.transformer.js'
      }
    : jestConfig.transform;

const config = {
    ...jestConfig,

    // A map from regular expressions to module names or to arrays of module names
    // that allow to stub out resources
    moduleNameMapper: {
        '^@salesforce/apex$': '<rootDir>/force-app/test/jest-mocks/apex',
        '^@salesforce/schema$': '<rootDir>/force-app/test/jest-mocks/schema',
        '^lightning/navigation$':
            '<rootDir>/force-app/test/jest-mocks/lightning/navigation',
        '^lightning/platformShowToastEvent$':
            '<rootDir>/force-app/test/jest-mocks/lightning/platformShowToastEvent',
        '^lightning/uiRecordApi$':
            '<rootDir>/force-app/test/jest-mocks/lightning/uiRecordApi',
        '^lightning/messageService$':
            '<rootDir>/force-app/test/jest-mocks/lightning/messageService',
        '^lightning/actions$':
            '<rootDir>/force-app/test/jest-mocks/lightning/actions'
    },

    // A list of paths to modules that run some code to configure or set up the testing env.
    setupFiles: ['jest-canvas-mock'],

    // A list of paths to modules that run some code to configure or set up the testing
    // framework before each test file in that suite is executed
    setupFilesAfterEnv,

    // Default timeout of a test in milliseconds
    testTimeout: 10000,

    // A map from regular expressions to paths to transformers.
    transform
};

if (process.env.LWS) {
    config.setupFiles = ['<rootDir>/lws.setup.js'];
}

console.log(config);

module.exports = config;
