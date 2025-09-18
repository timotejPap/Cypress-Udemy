declare namespace Cypress {
  interface Chainable {
    /**
     * Command to open the home page of the application.
     */
    openHomePage(): Chainable<void>;
  }
}
