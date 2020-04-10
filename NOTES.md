# Support a Test Utilities File with Jest moduleDirectories

For any theme provider or any type of context provider you want to be able to
render the component in the test as if it was being rendered in the regular app
(with whatever provider)

Add the utils - the exported render that you are going to get is one that
provides a wrapper around the providers. you can then import this render into
your tests instead of the one from testing library.

add to
