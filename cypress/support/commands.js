
Cypress.Commands.add("baseurl", () => {
  //cy.clearCookies();
cy.visit("https://provider.intellisoftkenya.com")
  })
  
  Cypress.Commands.add('login', () => {
  cy.get('#idNumber').type("10009")
  cy.get('#password').type("Money11!")
  cy.get('#location').click()
  cy.get('[title="Outreach"] > .ant-select-item-option-content').click();
  cy.get('.ant-btn').click()
  
},

)
//})

  Cypress.Commands.add("typeWithClear", { prevSubject: true }, (subject, text) => {
    // Clear the field using cy.clear() if it already has data
    cy.wrap(subject).then((element) => {
      if (element.val() !== "") {
        cy.wrap(element).clear();
      }
    });
  
    // Type the specified text into the field
    cy.wrap(subject).type(text);
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Suppress uncaught exceptions
    return false;
  })