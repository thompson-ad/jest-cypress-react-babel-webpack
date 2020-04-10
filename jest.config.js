module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // note that order does matter here. make sure that modules are handled first and then any other css is handled.
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}
