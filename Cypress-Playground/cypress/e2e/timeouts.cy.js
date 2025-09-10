/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Modal").click();
  cy.contains("Dialog").click();
});

it("Timeouts - 3 seconds", () => {
  cy.contains("Open with delay 3 seconds").click();
  cy.get("nb-dialog-container nb-card-header").should(
    "have.text",
    "Friendly reminder"
  );
});
it("Timeouts - 10 seconds", () => {
  cy.contains("Open with delay 10 seconds").click();
  cy.get("nb-dialog-container nb-card-header", { timeout: 11000 }).should(
    "have.text",
    "Friendly reminder"
  );
});
