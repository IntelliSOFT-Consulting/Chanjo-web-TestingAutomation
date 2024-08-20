
Cypress.Commands.add("login", (username, password) => {
//cy.session([username, password], () => {
  cy.visit("/")
  cy.get('#idNumber').type("1001001")
  cy.get('#password').type("new_password")
  cy.get('#location').click()
  cy.get('[title="Outreach"] > .ant-select-item-option-content').click();
  cy.get('.ant-btn').click()
  
},
{
  cacheAcrossSpecs: true
}
)
//})
