// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToApplication", () => {
  cy.request({
    url: "https://conduit-api.bondaracademy.com/api/users/login",
    method: "POST",
    body: {
      user: {
        email: "kocivo6269@cnguopin.com",
        password: "Yr3PN2xZS2pA4z",
      },
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    const accessToken = response.body.user.token;
    cy.wrap(accessToken).as("accessToken");
    cy.visit("/", {
      onBeforeLoad: (win) => {
        win.localStorage.setItem("jwtToken", accessToken);
      },
    });
  });

  //   cy.visit("/login");
  //   cy.contains("Sign in").click();
  //   cy.get('[placeholder="Email"]').type("kocivo6269@cnguopin.com");
  //   cy.get('[placeholder="Password"]').type("Yr3PN2xZS2pA4z");
  //   cy.contains("button", "Sign in").click();
});
