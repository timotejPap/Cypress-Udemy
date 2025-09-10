/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});

it("Extracting values from the page", () => {
  // 1. using JQuery text method
  cy.get('[for="exampleInputEmail1"]').then((label) => {
    // label is a jQuery object
    const emailLabel = label.text(); // extract text using jQuery text() method
    console.log(emailLabel);
  });

  // 2. using Cypress invoke() method
  cy.get('[for="exampleInputEmail1"]')
    .invoke("text")
    .then((emailLabel) => {
      // invoke() method to extract text
      console.log(emailLabel);
    });
  cy.get('[for="exampleInputEmail1"]').invoke("text").as("emailLabel"); // create alias
  cy.get("@emailLabel").should("contain", "Email address"); // use alias

  // 3. Invoke attribute value
  cy.get("#exampleInputEmail1")
    .invoke("attr", "class")
    .then((classValue) => {
      // get the value of the class attribute
      console.log(classValue);
      cy.get("#exampleInputEmail1").should(
        "have.class",
        "input-full-width size-medium status-basic shape-rectangle nb-transition"
      ); // verify the class attribute value
    });

  // 4. Invoke input field value
  cy.get("#exampleInputEmail1").type("Hello");
  cy.get("#exampleInputEmail1")
    .invoke("prop", "value")
    .then((inputValue) => {
      // get the value of the input field
      console.log(inputValue);
    });
});
