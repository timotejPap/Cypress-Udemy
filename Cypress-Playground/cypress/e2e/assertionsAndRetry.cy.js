/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});

it("Assertions using 'should'", () => {
  cy.get('[for="exampleInputEmail1"]').should("contain", "Email"); // assert that the label contains the text "Email address". "Contain" is partial match
  cy.get('[for="exampleInputEmail1"]').should("have.text", "Email address"); // assert that the label has the exact text "Email address". "Have text" is exact match
});

it("Assertions using 'expect'", () => {
  cy.get('[for="exampleInputEmail1"]').then((label) => {
    // label is a jQuery object
    expect(label).to.contain("Email"); // assert that the label text is "Email address"
    expect(label).to.have.text("Email address"); // assert that the label text is "Email address"
  });
});
