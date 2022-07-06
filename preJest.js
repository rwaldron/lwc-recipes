//Even though jest doesn't formally export something, it does have a jest.run, check out the source code (link)

const jest = require('jest');
const { argv } = require('yargs');
const cliReverter = require('yargs-unparser');

// getting the custom variables out of the command line arguments

const { lockerOn, ...restOfArguments } = argv;

// Perform any computation needed here and store them in environment variables. Jest has access to this environment variables set in this file

// process.env.JEST_ENVIRONMENT = require('./DefaultJestEnvironment');
process.env.JEST_ENVIRONMENT = require('./jest.config.js');

if (lockerOn === 'true') {
    // process.env.JEST_ENVIRONMENT = require('./LockerOnJestEnvironment');
    process.env.JEST_ENVIRONMENT = require('./rollup.config.js');
}

// The rest of arguments should be jest-compatible arguments
const objectToPassBackToJest = cliReverter(restOfArguments);

// This will run the jest cli like normal except now you can set a couple of variables that it will use in your test suite
jest.runCLI(objectToPassBackToJest);
