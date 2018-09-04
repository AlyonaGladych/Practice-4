// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: 0,
    allScriptsTimeout: 30,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
      maxInstances: 1
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['./tests/demo_test.js'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
      defaultTimeoutInterval: 45000
    },

   exports.config = {
    framework: 'jasmine2',
    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
    }));
  }
}
  
