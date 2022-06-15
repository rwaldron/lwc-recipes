import lockerRollupPlugin from '@locker/rollup-plugin';

// const sandboxSpecifier = 'evaluateInSandboxForKarma';

// export default {
//     plugins: [
//         lockerRollupPlugin({
//             sandboxKey: 'lws',
//             sandboxSpecifier,
//         })
//     ],
// };

export default {
    plugins: [lockerRollupPlugin()]
};
