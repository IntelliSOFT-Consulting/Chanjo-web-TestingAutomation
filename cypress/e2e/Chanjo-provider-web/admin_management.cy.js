import faker from 'faker';


let clientData;

context('Actions', () => {
    // Perform login once before running all tests
    before(() => {
      //cy.session('login', ()=>{
        cy.baseurl();
       // cy.login();
    })
//  })
    const numberOfDownArrowPresses = Cypress._.random(1, 10);

   /* const numberOfRuns = 1;

   for (let i = 0; i < numberOfRuns; i++) {//loop again
      describe(`Test Run ${i + 1}`, () => {
        runTest();
      }); 
}*/
   // function runTest() {

   it('.type() - Register a user', () => {
    cy.viewport(1280, 720);

    const firstName = faker.name.firstName();
    const familyName = faker.name.lastName();
    const lastName = faker.name.lastName();
    const randomEmail = faker.internet.email();
    const randomPhoneNumber = faker.phone.phoneNumberFormat();


 
   cy.wait(2500)
   cy.get('#headlessui-disclosure-button-\\:r3\\:').click()
   cy.get('div[data-headlessui-state="open"]').contains('Add User').click()
   cy.get('.ml-4').click()
        cy.wait(2500)       
        cy.get('#firstName').type(firstName)
        cy.get('#lastName').type(familyName)
        cy.get('#username').type(familyName)
        cy.get('#phoneNumber').type('0712345678')
        cy.get('#email').type(randomEmail)
        cy.get('#phoneNumber').type(randomPhoneNumber)
        cy.get('#county').click()
         for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#county').type('{downarrow}', {force: true})
           }
           cy.get('#county').type('{Enter}',{force: true});
            cy.wait(1000)
           cy.get('#subCounty').click( {force: true})
           for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#subCounty',  {force: true}).type('{downarrow}', {force: true})
           }
           cy.get('#subCounty').type('{Enter}',{force: true});
           cy.wait(1000)

           cy.get('#ward').click({force: true})
           for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#ward').type('{downarrow}', {force: true})
           }
           cy.get('#ward').type('{Enter}',{force: true});
           cy.wait(1000)

           cy.get('#facility').click({force: true})
           for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#facility').type('{downarrow}', {force: true})
           }
           cy.get('#facility').type('{Enter}' ,{force: true});
           cy.wait(1000)

          cy.get('#roleGroup').click({force: true})
           for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#roleGroup').type('{downarrow}', {force: true})
           }
           cy.get('#roleGroup').type('{Enter}', {force: true});
           cy.wait(1000)

        cy.get('button').contains('Submit').click()   

        clientData = { firstName, lastName, familyName };       
    
           })



 it('.type() - Register Facility', () => {
   cy.viewport(1280, 720);
   cy.wait(2500)
   cy.get('#headlessui-disclosure-button-\\:rp\\:').click()
   cy.get(':nth-child(2) > .hover\\:bg-gray-50\\]').click()
   cy.get('.ant-card-extra > .ant-btn').click()
           
        cy.get('#name').type("Facility A")
        cy.get('#county').click()
        for (let i = 0; i < numberOfDownArrowPresses; i++) {
           cy.get('#county').type('{downarrow}', {force: true}).wait(1000).type('{enter}', {force: true});
          }
          cy.get('#subCounty').click( {force: true})
          for (let i = 0; i < numberOfDownArrowPresses; i++) {
           cy.get('#subCounty',  {force: true}).type('{downarrow}', {force: true}).wait(1000).type('{enter}', {force: true});
          }
          cy.get('#ward').click({force: true})
          for (let i = 0; i < numberOfDownArrowPresses; i++) {
           cy.get('#ward').type('{downarrow}', {force: true}).wait(1000).type('{enter}', {force: true});
          }
          cy.get('#kmflCode').type('12345')

          cy.get('#level').click({force: true})
          for (let i = 0; i < numberOfDownArrowPresses; i++) {
           cy.get('#level').type('{downarrow}', {force: true}).wait(1000).type('{enter}', {force: true});
          }
          
          cy.get('#ownership').click({force: true})
          for (let i = 0; i < numberOfDownArrowPresses; i++) {
           cy.get('#ownership').type('{downarrow}', {force: true}).wait(1000).type('{enter}', {force: true});
          }




           })
        })