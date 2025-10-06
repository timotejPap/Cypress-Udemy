/// <reference types="cypress" />

it("Delete an article", () => {
  cy.loginToApplication();

  cy.get("@accessToken").then((accessToken) => {
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
      headers: { Authorization: "Token " + accessToken },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.article.title).to.equal("Cypress API article");
    });
  });

  cy.contains("Cypress API article").should("be.visible").click();
  cy.intercept("GET", "**/articles*").as("getArticlesAPI");
  cy.contains("button", "Delete Article").first().click();
  cy.wait("@getArticlesAPI");
  cy.get("app-article-list").should("not.contain.text", "Cypress API article");
});

it("API testing E2E", { browser: "!edge" }, () => {
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
      url: "https://conduit-api.bondaracademy.com/api/articles/",
      method: "POST",
      body: {
        article: {
          title: "Test title Cypress API article",
          description: "Test description",
          body: "Just some text",
          tagList: [],
        },
      },
      headers: { Authorization: accessToken },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.article.title).to.equal(
        "Test title Cypress API article"
      );
    });

    cy.request({
      url: "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0",
      method: "GET",
      headers: { Authorization: accessToken },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.articles[0].title).to.equal(
        "Test title Cypress API article"
      );
      const slugID = response.body.articles[0].slug;

      cy.request({
        url: `https://conduit-api.bondaracademy.com/api/articles/${slugID}`,
        method: "DELETE",
        headers: { Authorization: accessToken },
      }).then((response) => {
        expect(response.status).to.equal(204);
      });
    });

    cy.request({
      url: "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0",
      method: "GET",
      headers: { Authorization: accessToken },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.articles[0].title).to.not.equal(
        "Test title Cypress API article"
      );
    });
  });
});
