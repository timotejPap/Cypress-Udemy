/// <reference types="cypress" />

it("Delete an article", () => {
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
    const accessToken = "Token " + response.body.user.token;

    cy.request({
      url: "https://conduit-api.bondaracademy.com/api/articles",
      method: "POST",
      body: {
        article: {
          title: "Cypress API article",
          description: "Test description",
          body: "Just some text",
          tagList: [],
        },
      },
      headers: { Authorization: accessToken },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.article.title).to.equal("Cypress API article");
    });
  });

  cy.loginToApplication();
  cy.contains("Cypress API article").should("be.visible").click();
  cy.intercept("GET", "**/articles*").as("getArticlesAPI");
  cy.contains("button", "Delete Article").first().click();
  cy.wait("@getArticlesAPI");
  cy.get("app-article-list").should("not.contain.text", "Cypress API article");
});
