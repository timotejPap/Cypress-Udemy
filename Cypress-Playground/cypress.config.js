import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://playground.bondaracademy.com/",
    setupNodeEvents(_on, _config) {
      specPattern = "cypress/e2e/**/*.cy.js";
      // implement node event listeners here
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  // defaultCommandTimeout: 11000,
});
