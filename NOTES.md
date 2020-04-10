# Compile Modules with Babel in Jest Tests

get rid of the example.js test, we are going to test the `utils.js` file.

run the tests `npm t`.

You will get a SyntaxError. This is because Jest runs in Node but node does not
support import statements.

The problem here is that, we have webpack handling the compiling of our import
statements and babel has set the handling of it to `false` so that webpack can
do it.

Jest uses the babel config and so cannot compile imports.

Jest automatically sets the node env to 'test' and so in our babelrc we can add
this and conditionally set how we handle our modules.

no we should have our test passing
