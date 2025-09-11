/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Toastr").click();
});

// native select dropdown
it("Dropdowns - native", () => {
  cy.contains("div", "Toast type:")
    .find("select")
    .select("info")
    .should("have.value", "info");
});

// custom select dropdown
it.only("Dropdowns - custom", () => {
  cy.contains("div", "Position:").find("nb-select").click();
  cy.get(".option-list").contains("bottom-end").click();
  cy.contains("div", "Position:")
    .find("nb-select")
    .should("have.text", "bottom-end");

  cy.contains("div", "Position:")
    .find("nb-select")
    .then((dropdown) => {
      cy.wrap(dropdown).click();
      cy.get(".option-list nb-option").each((listItem, index, list) => {
        cy.wrap(listItem).click();
        if (index < list.length - 1) cy.wrap(dropdown).click();
      });
    });
});
