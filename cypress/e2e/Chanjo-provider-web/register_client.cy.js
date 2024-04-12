/// <reference types="cypress" />
import faker from 'faker';


context('Actions', () => {
    beforeEach(() => {
        cy.baseurl()
        cy.login()
    })

    const firstName = faker.name.firstName();
    const familyName = faker.name.lastName();
    const lastName = faker.name.lastName();
    const careGiverName = faker.name.findName();
    const numberOfRuns = 10;
    const numberOfDownArrowPresses = Cypress._.random(1, 10);

  
    const randomNumberOfKeyPresses = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
    function runTest() {
    it('.type() - Register a Client', () => {
        cy.get('.max-w-7xl > [href="/register-client/_"]').click()
        cy.wait(2500)
        cy.get('#clientDetails_firstName').type(firstName)
        cy.get('#clientDetails_middleName').type(familyName)
        cy.get('#clientDetails_lastName').type(lastName)
        cy.get('#clientDetails_gender > :nth-child(2) > .ant-radio > .ant-radio-input').click()
       // cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()

        //select a random date back 5 years
        cy.get('.ant-picker-input').click()
        cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
        const numAvailableDates = $dateCells.length        
        const randomIndex = Math.floor(Math.random() * numAvailableDates)        
        const randomDateCell = $dateCells.eq(randomIndex)        
       // const dateTitle = randomDateCell.attr('title')        
       // const [year, month, day] = dateTitle.split('-')
       // const formattedDate = `${day}-${month}-${year.slice(-2)}`        
        randomDateCell.click()


        const randomPresses11 = Math.floor(Math.random() * 0); // Change 2 to 3 to include the first option

        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control >.ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click() // cy.get("#patientForm_xED9XkpCeUe").trigger("keydown", { keyCode: 40 }); // Down arrow key
        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').trigger("keydown", { keyCode: 13 }); // Enter key  

        // Generate a random 10-digit number
        const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        const randomNumberString = randomNumber.toString();
        cy.get('#clientDetails_identificationNumber').type(randomNumberString);
        cy.get('button').contains('Next').click();

        //**********CAREGIVER*****************************************************************//
        const randomPresses12 = Math.floor(Math.random() * 0);
        cy.get('#caregiverType').click()        
        cy.get('#caregiverType').trigger("keydown", { keyCode: 13 }); 
        cy.get('#caregiverName').type(careGiverName)

        const randomNumber2 =
        "07" +
        Math.floor(Math.random() * 1000000000)
          .toString()
          .padStart(8, "0");
  
          cy.get('#phoneNumber').type(randomNumber); // Phone number
        //***************************************************************************//


        cy.get('.grid > .ml-4').click()
        cy.get('button').contains('Next').click();
        cy.wait(1500)

        /*************ADDRESS DETAILS***********************************************/

        const county = [
            "BARINGO",
            "BUSIA",
            "NAIROBI",
            "KISUMU",
            "MOMBASAl",
            "KERICHO",
            "MAKUENI",
            "BUNGOMA",
            "KISII",
               ];
          const randomIndex1 = Math.floor(Math.random() * county.length);
          const randomCounty = county[randomIndex1];
 
            cy.get('#rc_select_13').type(randomCounty).wait(1000).type("{downarrow}").type('{Enter}');//county

            cy.get('#rc_select_14').click()//subcounty            
             for (let i = 0; i < numberOfDownArrowPresses; i++) {
              cy.get('#rc_select_14').type('{downarrow}');
               }
               cy.get('#rc_select_14').type('{enter}');


               cy.get('#rc_select_15').click()//ward            
               for (let i = 0; i < numberOfDownArrowPresses; i++) {
                cy.get('#rc_select_15').type('{downarrow}');
                 }
                 cy.get('#rc_select_15').type('{enter}');


           // cy.get('#rc_select_14').trigger("keydown", { keyCode: 13 }); // Enter key  
    
            //cy.get('#rc_select_15').type("E").wait(1000).type("{downarrow}").type('{Enter}');
            cy.get('button').contains('Preview').click();
            cy.get('button').contains('Submit').click();
            cy.wait(2500)
            cy.get('button').contains('Close').click();
            cy.wait(1500)
            cy.get(':nth-child(1) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
            cy.get(':nth-child(2) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
            cy.get('button').contains('Administer Vaccine').click();



            const randomNumber14 = Math.floor(Math.random() * 2); // Generates a number between 0 and 2

    // Execute one of the Cypress commands based on the random number
    switch (randomNumber14) {
      case 0:
        cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
          cy.wait(2500)
          cy.get('button').contains('Administer').click();
        });
        break;
      case 1:
        cy.get('.mt-5 > .bg-\\[\\#5370B0\\]').click().then(() => {
          cy.get('#contraindicationDetails').type("patient has an injury")
          cy.get('.ant-picker-input').click()
        cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
        const numAvailableDates = $dateCells.length        
        const randomIndex = Math.floor(Math.random() * numAvailableDates)        
        const randomDateCell = $dateCells.eq(randomIndex) 
        randomDateCell.click()
        })
       

          
          cy.wait(2500)
          cy.get('button').contains('Contraindicate').click();
        });
        break;
      default:
        // Handle unexpected cases
        break;
    }



          
           



            
   


        })
      
  //})
  //it('.type() - Administer Vaccine', () => {

      
    
  })
    }
  for (let i = 0; i < numberOfRuns; i++) {
    describe(`Test Run ${i + 1}`, () => {
      runTest();
    });
  
}

})
  