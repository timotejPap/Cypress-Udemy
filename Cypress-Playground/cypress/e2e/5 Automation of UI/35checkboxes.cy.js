/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
});

it("Checkboxes", () => {
  cy.contains("Modal & Overlays").click();
  cy.contains("Toastr").click();

  cy.get('[type="checkbox"]').check({ force: true }).should("be.checked"); // force: true is used to check the checkbox even if it is not visible
  // this script checks all the checkboxes on the page
  cy.get('[type="checkbox"]').uncheck({ force: true }).should("not.be.checked"); // uncheck all the checkboxes
  cy.get('[type="checkbox"]').eq(0).check({ force: true }).should("be.checked"); // check the first checkbox

  // DO NOT USE .click() to check/uncheck checkboxes and radio buttons!!!
});
