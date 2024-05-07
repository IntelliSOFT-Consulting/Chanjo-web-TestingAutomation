///<reference types="cypress" />

import faker from 'faker';
const { administerVaccine } = require('./functions');
let clientData;
const numberOfRuns = 1;
const numberOfDownArrowPresses = Cypress._.random(1, 10);

context('Actions', () => {
    // Perform login once before running all tests
    before(() => {
      //cy.session('login', ()=>{
        cy.baseurl();
        //cy.login();//enable this for first time login then disable since cypress is storing the sessions
  //  })
 })
 for (let i = 0; i < numberOfRuns; i++) {//loop again
  describe(`Test Run ${i + 1}`, () => {
    runTest();
  });
}
  
   function runTest() {
   it('.type() - Register a Client', () => {
    cy.viewport(1280, 720);

    const firstName = faker.name.firstName();
    const familyName = faker.name.lastName();
    const lastName = faker.name.lastName();
    const careGiverName = faker.name.findName();
   // const randomNumber = faker.datatype.number({ min: 10000, max: 99999 });
 
   cy.wait(2500)
   cy.get(':nth-child(5) > .hover\\:bg-gray-50\\]').contains("Register Client").click()
        cy.wait(2500)       
        cy.get('#clientDetails_firstName').type(firstName)
        cy.get('#clientDetails_middleName').type(familyName)
        cy.get('#clientDetails_lastName').type(lastName)

        clientData = { firstName, lastName, careGiverName };       
    
         cy.get('#clientDetails_gender > :nth-child(2) > .ant-radio > .ant-radio-input').click()
         //cy.get('#clientDetails_estimatedAge > :nth-child(1) > :nth-child(2)').click()
         
         cy.get('#clientDetails_identificationType').click() 
         cy.get('#clientDetails_identificationType').trigger("keydown", { keyCode: 13 }); // Enter key  

         
        // Generate a random 10-digit number
        const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        const randomNumberString = randomNumber.toString();
        cy.get('#clientDetails_identificationNumber').type(randomNumberString);

        cy.get('#clientDetails_vaccineType > :nth-child(2) > .ant-radio > .ant-radio-input').click()
 

       
         // Generate a random date between now and 14 days back
         const currentDate = new Date();
         const minStartDate = new Date(new Date().setFullYear(currentDate.getFullYear() - 10)); // 10 years back
         const maxStartDate = new Date(new Date().setFullYear(currentDate.getFullYear() - 5));  // 5 years back
   
         const randomTime = minStartDate.getTime() + Math.random() * (maxStartDate.getTime() - minStartDate.getTime());
         const randomDate = new Date(randomTime);
   
        // Extract day, month, and year
        const day = randomDate.getDate().toString().padStart(2, '0');
        const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
        let year = randomDate.getFullYear().toString().slice(-2);
        // Convert two-digit year to four digits if necessary
        year = year < 50 ? '20' + year : '19' + year;

        // Format the date as DD/MM/YY
        const formattedDate = `${day}-${month}-${year}`;

        // Write the formatted date into the input field
        cy.get('#clientDetails_dateOfBirth').type(formattedDate).type('{Enter}');



        
        cy.get('button').contains('Next').click();

        /**********CAREGIVER*****************************************************************/
        cy.get('#caregiverType').click() 
        cy.wait(1000)       
        cy.get('#caregiverType').click()
        for (let i = 0; i < numberOfDownArrowPresses; i++) {
          cy.get('#caregiverType').type('{downarrow}');
          }
          cy.get('#caregiverType').type('{enter}');
          cy.get('#caregiverName').type(careGiverName)
          cy.get('#caregiverID').type(randomNumber)

        const randomNumber2 = "07" + Math.floor(Math.random() * 1000000000).toString().padStart(8, "0");// Phone number
        cy.get('#phoneNumber').type(randomNumber2); 
        /***************************************************************************/


       cy.get('button').contains('Add Caregiver').click()
        cy.get('button').contains('Next').click();
        cy.wait(1500)

        /*************ADDRESS DETAILS***********************************************/

        const county = [
            "BARINGO",
            "BUSIA",
            "NAIROBI",
            "KISUMU",
            "MOMBASA",
            "KERICHO",
            "NYANDARUA",
            "MERU",
            "KISII",
               ];
               const randomIndex1 = Math.floor(Math.random() * county.length);
               const randomCounty = county[randomIndex1];
      
               cy.get('#clientDetails_county').type(randomCounty, {force: true}).wait(1000).type("{downarrow}").type('{Enter}');
            
               cy.get('#clientDetails_subCounty').click( {force: true})//subcounty 
                     cy.wait(1000)           
                       for (let i = 0; i < numberOfDownArrowPresses; i++) {
                        cy.get('#clientDetails_subCounty').type('{downarrow}');
                        }
                        cy.get('#clientDetails_subCounty').type('{enter}');
                          
                        cy.get('#clientDetails_ward').click({force: true})//ward 
                        cy.wait(1000)           
                        for (let i = 0; i < numberOfDownArrowPresses; i++) {
                          cy.get('#clientDetails_ward').type('{downarrow}');
                        }
                          cy.get('#clientDetails_ward').type('{enter}');
                 cy.get('button').contains('Preview').click();
                 cy.get('button').contains('Submit').click();
                 cy.wait(5000)
                // cy.get('button').contains('Close').click();
                                               
                  })
       /*************Administer Vaccines***********************************************/
                    
     it('.Administer Vaccine', () => {
        cy.viewport(1280, 720);
        cy.wait(5000);
       
      })
    }
  })
    
