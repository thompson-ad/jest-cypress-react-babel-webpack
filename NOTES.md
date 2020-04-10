# Configure Jest’s Test Environment for Testing Node or Browser Code

Jest, by default, allows you to simulate a browser environment in node using
JSDom.

if you `console.log(window)` in the test you will get the window object logged
to the console.

in testing the utils, we should run the tests in the node environment as there
is nothing in their that depends on the browser.

If you run `npm run test -- --env=node` that will only run the tests in the node
environment.

But we don't want to have to do this every time we run the tests so setup a
`jest.config.js` file.

Now running `npm t` will pick up this configuration and jest won't bother
setting up jsdom for the task.

But we actually do want jsdom running so we can put that in the config.
