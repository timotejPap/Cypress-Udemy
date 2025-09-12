/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Tables & Data").click();
  cy.contains("Smart Table").click();
});

// 1. how to find by text
it("Table row age update", () => {
  cy.get("tbody")
    .contains("tr", "Larry")
    .then((tablerow) => {
      cy.wrap(tablerow).find(".nb-edit").click();
      cy.wrap(tablerow).find('[placeholder="Age"]').clear().type("25");
      cy.wrap(tablerow).find(".nb-checkmark").click();
      cy.wrap(tablerow).find("td").last().should("contain", "25");
    });
});

// 2. how to find by index
it.only("Table row input", () => {
  cy.get(".nb-plus").click();
  cy.get("thead tr")
    .eq(2)
    .then((tableRow) => {
      cy.wrap(tableRow).find('[placeholder="ID"]').type("0");
      cy.wrap(tableRow).find('[placeholder="First Name"]').type("Timotej");
      cy.wrap(tableRow).find('[placeholder="Last Name"]').type("Pap");
      cy.wrap(tableRow).find('[placeholder="Username"]').type("Timi");
      cy.wrap(tableRow)
        .find('[placeholder="E-mail"]')
        .type("timotej.pap@example.com");
      cy.wrap(tableRow).find('[placeholder="Age"]').type("33");
      cy.wrap(tableRow).find(".nb-checkmark").click();
    });
  cy.get("tbody tr")
    .first()
    .find("td")
    .then((tableColumns) => {
      cy.wrap(tableColumns).eq(1).should("contain", "0");
      cy.wrap(tableColumns).eq(2).should("contain", "Timotej");
      cy.wrap(tableColumns).eq(3).should("contain", "Pap");
      cy.wrap(tableColumns).eq(4).should("contain", "Timi");
      cy.wrap(tableColumns).eq(5).should("contain", "timotej.pap@example.com");
    });
});
