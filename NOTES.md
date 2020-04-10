# Support using Webpack CSS modules with jest

`npm install --save-dev identity-obj-proxy`

we want to map all of the imports for the .module.css

now for css modules, jest will not import the css module it will replace it with
a string that is the same name as the module

if you run `npm t` now you will get a class printed out. So even though we
aren't loading the styles into JSDOM we can at least make an assertion on the
class name that is being used on our css modules as maybe there is some logic to
it.
