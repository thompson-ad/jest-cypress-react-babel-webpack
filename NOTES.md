# Support Custom Module Resolution with Jest moduleDirectories

if you run `npm t` for the calculator you will get an issue.

It will tell you it can't find calculator display

it can't find it because we have webpack set up to treat anything in shared like
a node module.

We need to add a module directories configuration to jest config.

npm t will pass now.

SO if you are using webpacks resolve modules configuration you will want to
configure jest to resolve in the same way.
