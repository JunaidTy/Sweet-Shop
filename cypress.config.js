const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;



const fs = require("fs");

const CYPRESS_SPEC_PATTERN = "cypress/e2e/**/*.feature";
const CYPRESS_EXCLUDE_SPEC_PATTERN = "cypress/e2e/**/*-test.feature";

module.exports = defineConfig({
  numTestsKeptInMemory: 10,
  defaultCommandTimeout: 120000,
  viewportHeight: 768,
  viewportWidth: 1366,
  increasedRequestTimeout: 5000,
  pageLoadTimeout: 120000,
  //defaultCommandTimeout: 120000,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  video: false,
  videoUploadOnPasses: false,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "artifacts/run-results/jUnit-xml/[hash].xml",
    toConsole: false,
    testsuitesTitle: true,
    testCaseSwitchClassnameAndName: true,
    properties: {
      RUN_ID: 4291,
    },
  },
  chromeWebSecurity: false,
  env: {
    STAGE: "dev",
    TAGS: "@e2e and not @ignore",
    allure: false,
    allureLogCypress: true,
    allureAttachRequests: true,
    allureOmitPreviousAttemptScreenshots: true,
  },
  e2e: {
    nonGlobalStepDefinitions: false,
    stepDefinitions: "cypress/e2e",
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    specPattern: CYPRESS_SPEC_PATTERN,
    excludeSpecPattern: CYPRESS_EXCLUDE_SPEC_PATTERN,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      on("before:run", (details) => {
        /** */
      });
      on("after:run", (results) => {
        generateCucumberHTMLReport(results);
        writeRunLog(results);
        setAllureEnvProp(results);
        setAllureCategories(results);
      });
    },
  },
});