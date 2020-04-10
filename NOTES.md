# Step through Code in Jest using the Node.js Debugger and Chrome DevTools

it would be nice if we could step through the code in the same familiar
development style as with debugger but for our test.

`"test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand --watch"`

--runInBand ensures that we don't get problems from running in parallel
