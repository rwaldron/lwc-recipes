const jestTransformer = require(require.resolve('@lwc/jest-transformer'));
const lwsCompiler = require('@locker/rollup-plugin');

const { transform } = lwsCompiler({
    sandboxKey: 'lwc-recipes',
    sandboxSpecifier: 'evaluateInSandbox',
    sourceMap: true
});

module.exports = {
    process(sourceText, sourcePath) {
        let code = sourceText;
        if (sourcePath.endsWith('.test.js')) {
            ({ code } = transform(code, sourcePath));
            console.log(`\nlockerized: ${sourcePath}\n`);
        }
        ({ code } = jestTransformer.process(code, sourcePath));
        return {
            code
        };
    },
    getCacheKey: jestTransformer.getCacheKey
};
