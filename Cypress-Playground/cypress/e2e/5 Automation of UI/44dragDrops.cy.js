/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Extra Components").click();
  cy.contains("Drag & Drop").click();
});

it("Drag and drop", () => {
  cy.get(".example-list div").first().trigger("dragstart");
  cy.get("#drop-list").trigger("drop");
});
