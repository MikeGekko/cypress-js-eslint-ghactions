const {defineConfig} = require('cypress');

module.exports = defineConfig({
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Laphil.com Automation Reporter',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    env: {
        USER_EMAIL: '',
        USER_PASSWORD: '',
    },
    e2e: {
        baseUrl: 'https://my.laphil.com',
        testIsolation: false,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        specPattern: ['cypress/e2e/*/**'],
    },
});
