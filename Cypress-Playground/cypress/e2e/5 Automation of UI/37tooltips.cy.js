/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Tooltip").click();
});

it("Tooltips", () => {
  cy.contains("button", "Top").trigger("mouseenter");
  cy.get("nb-tooltip").should("be.visible").and("have.text", "This is a tooltip");
});
