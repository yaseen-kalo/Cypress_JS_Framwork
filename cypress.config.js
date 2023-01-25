const { defineConfig } = require("cypress");
// const { config } = require("cypress/types/bluebird");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // implement node event listeners here

  //mochawesome report
  require('cypress-mochawesome-reporter/plugin')(on);

  //Cucumber BDD
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout : 6000,
  env:{
    url : 'https://www.rahulshettyacademy.com'
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // chromeWebSecurity: false,,
    setupNodeEvents,
    excludeSpecPattern : ['**/1-getting-started/*','**/2-advanced-examples/*'],
    fixturesFolder : 'cypress/fixtures',

    // execute only js files so uncomment below line of code..
    // specPattern : "cypress/e2e/Examples/*.js",

    //execute only BDD files/ feature files
    specPattern : "cypress/e2e/Examples/BDD/*.feature"
  },
});