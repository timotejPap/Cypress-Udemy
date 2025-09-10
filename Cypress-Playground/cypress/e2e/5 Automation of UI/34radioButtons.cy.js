/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
});

it("Radio buttons", () => {
  cy.contains("Form").click();
  cy.contains("Form Layouts").click();

  cy.contains("nb-card", "Using the Grid")
    .find('[type="radio"]')
    .then((allRadioButtons) => {
      cy.wrap(allRadioButtons)
        .eq(0)
        .check({ force: true })
        .should("be.checked"); // force: true is used to check the radio button even if it is not visible
      cy.get(allRadioButtons).eq(1).check({ force: true });
      cy.wrap(allRadioButtons).eq(0).should("not.be.checked");
      cy.wrap(allRadioButtons).eq(2).should("be.disabled");
    });
});

it.only("Radio buttons2", () => {
  cy.contains("Form").click();
  cy.contains("Form Layouts").click();
  //   cy.contains("nb-card", "Using the Grid").contains("Option 1");
  // .click({ force: true });
  cy.contains("nb-card", "Using the Grid")
    .contains("label", "Option 1")
    .find("input")
    .check({ force: true });
});
