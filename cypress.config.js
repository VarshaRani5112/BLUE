const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({

    e2e: {
        // setupNodeEvents(on, config) {
        // implement node event listeners here
        //},
        viewportHeight: 900,
        viewportWidth: 1100,
        specPattern: 'cypress/e2e/*.cy.js',
        baseUrl: 'https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca',
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            "reportDir": "cypress/reports/mochawesome-report",
            "reportFilename": "report",
            "overwrite": false,
            "html": true,
            "json": true
        },
        env: {
            // Your record key here
            CYPRESS_RECORD_KEY: 'your-record-key'
        }

    },
});