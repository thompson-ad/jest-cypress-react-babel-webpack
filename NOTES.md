# Configure Jest

For this project we are just using regular webpack, not create react app

`npm run dev` too start the development server.

Running at http://localhost:8080

Branches to follow along:

`tjs/jest-00` `tjs/jest-01`... etc

## Folder structure

src --> index - entry for the app. app.js - renders the calculator
calculator.js - most of the logic for the app.

webpack is configured here so that it handles the shared folder almost like a
node modules so you can import like node modules.

Jest has to be configured in such a way to handle this.

We also have CSS modules and jest has to be configured to handle those

To start let's checkout the start branch.
