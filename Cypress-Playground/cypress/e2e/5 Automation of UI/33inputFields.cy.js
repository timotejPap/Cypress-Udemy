/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
});

it.only("Input fields", () => {
  cy.contains("Form").click();
  cy.contains("Form Layouts").click();

  const email = "const@email.com";
  cy.get("#inputEmail1").type("hello@test.com", { delay: 100 }).clear(); // type with delay of 200ms
  //   cy.get("#inputEmail1").type("hello@test.com").clear().type("timo@test.com"); // clear and type again
  //   cy.contains("nb-card", "Using the Grid").contains("Email").clear().type('alias@email.com'); // ".clear" does not work here
  cy.contains("nb-card", "Using the Grid").contains("Email").type(`${email}`); // use variable

  cy.get("#inputEmail1")
    .should("have.value", email)
    .clear()
    .type("typing something else"); // verify the value
  cy.press(Cypress.Keyboard.Keys.TAB); // custom command to press tab key
});

it("Checkboxes", () => {
  cy.contains("Auth").click();
  cy.contains("Login").click();
  cy.get("#input-email").type("jozko@mrkvicka.com");
  cy.get("#input-password").type("Jozko123{enter}");
});
