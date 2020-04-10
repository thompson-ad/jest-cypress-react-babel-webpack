# Install and Run Jest

`npm install --save-dev jest`

This installs our testing framework

check node_modules bin and you should see Jest

Now can add our test script.

if you now run `npm run test` you will get an error saying that 15 files were
checked but none of them matched the route the test runner expected the tests to
be in.

so let's make that directory with an example test in it...

run the test script again and it will run the example.

good practice is to co-locate the test file as close as possible to what it is
testing.

See the `travis.yml` notice that we have a script that runs npm run setup. That
setup script runs `install` and `validate` and that `validate` script runs lint
and build but we also want it to run the test.
