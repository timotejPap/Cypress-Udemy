class FormLayoutsPage {
  submitUsingTheGridForm(email, password, optionIndex) {
    // Method to submit the form
    cy.contains("nb-card", "Using the Grid").then((form) => {
      // Locate the form
      cy.wrap(form).find('[placeholder="Email"]').type(email); // Use cy.wrap to work with the form element
      cy.wrap(form).find('[placeholder="Password"]').type(password);
      cy.wrap(form)
        .find('[type="radio"]')
        .eq(optionIndex)
        .check({ force: true });
      cy.wrap(form).contains("Sign in").click();
    });
  }

  submitBasicForm(email, password, isCheckBoxChecked) {
    cy.contains("nb-card", "Basic form").then((form) => {
      // Locate the form
      cy.wrap(form).find('[placeholder="Email"]').type(email); // Use cy.wrap to work with the form element
      cy.wrap(form).find('[placeholder="Password"]').type(password); // Use cy.wrap to work with the form element
      if (isCheckBoxChecked) {
        // Conditional to check the checkbox
        cy.wrap(form).find('[type="checkbox"]').check({ force: true }); // Force check in case it's hidden
      }
      cy.wrap(form).contains("Submit").click();
    });
  }
}
export const onFormLayoutsPage = new FormLayoutsPage(); // Create an instance of the class
