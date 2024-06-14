const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false
  },
});



/*const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
// const { pa11y } = require("@cypress-audit/pa11y");
module.exports = {
e2e: {
baseUrl: "http://chanjoke.intellisoftkenya.com:8099/", // this is your app
setupNodeEvents(on, config) {
on("before:browser:launch", (browser = {}, launchOptions) => {
prepareAudit(launchOptions);
});
on("task", {
lighthouse: lighthouse(),
// pa11y: pa11y(console.log.bind(console)),
});
},
},
};*/
