module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // we want css files to resolve to an empty object
    // if you run npm t now and put a console.log(styles) in the react component you will see that the styles is just an empty object in the test environment
    // This is fine as we don't really need to test the css anyway
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}
