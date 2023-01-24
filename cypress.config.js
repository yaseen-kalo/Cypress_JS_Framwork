const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout : 6000,
  env:{
    url : 'https://www.rahulshettyacademy.com'
  },
  e2e: {
    // chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern : ['**/1-getting-started/*','**/2-advanced-examples/*'],
    fixturesFolder : 'cypress/fixtures'
  },
});
