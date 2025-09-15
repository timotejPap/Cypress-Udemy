/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Dialog").click();
});

it("iFrames", () => {
  cy.frameLoaded('[data-cy="esc-close-iframe"]');

  cy.iframe('[data-cy="esc-close-iframe"]')
    .contains("Open Dialog with esc close")
    .click();
  cy.contains("This is a title passed to the dialog component");
  cy.contains("Dismiss Dialog").click();

  cy.enter('[data-cy="esc-close-iframe"]').then((getBody) => {
    getBody().contains("Open Dialog with esc close").click();
    cy.contains("This is a title passed to the dialog component");
    cy.contains("Dismiss Dialog").click();
    getBody().contains("Open Dialog without esc close").click();
    cy.contains("OK").click();
  });
});
