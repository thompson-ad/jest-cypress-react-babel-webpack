# Support Importing CSS files with Jest’s moduleNameMapper

`npm install --save-dev @testing-library/react`

If you run the tests for the auto-scaling-text now you will get an error and
this is because jest is trying to require the css file like it is a commonjs
module.

We need to use the moduleNameMapper.
