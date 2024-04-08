Cypress.Commands.add("baseurl",()=>{
  cy.viewport(1280, 720);
    cy.visit('http://chanjoke.intellisoftkenya.com:8099/');


})

Cypress.Commands.add('login',()=>{
  cy.get('#idNumber').type('101011')
  cy.get('#password').type('password')
  cy.get('#location').click();

   // randomly select a facility
   const randomNumber = Math.floor(Math.random() * 2)
   if (randomNumber === 0) {
          cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click()
   } else {
         cy.get('[title="Facility"] > .ant-select-item-option-content').click()
   }
   cy.get('.ant-btn').click()
  })


 //Cypress.Commands.add("typeWithClear", { prevSubject: true }, (subject, text) => {
  // Clear the field using cy.clear() if it already has data
 // cy.wrap(subject).then((element) => {
   // if (element.val() !== "") {
      //cy.wrap(element).clear();
  //  }
 // });

  // Type the specified text into the field
  //cy.wrap(subject).type(text);
//});

 
 Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})