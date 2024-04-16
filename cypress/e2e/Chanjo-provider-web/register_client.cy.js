///<reference types="cypress" />

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

    const numberOfRuns = 1;//Comment out this line if you are running the script only once

   /* for (let i = 0; i < numberOfRuns; i++) {//loop again
      describe(`Test Run ${i + 1}`, () => {
        runTest();
      });
    
     
}*/
const randomNumberOfKeyPresses = Math.floor(Math.random() * 5) + 1;
   // function runTest() {
   it('.type() - Register a Client', () => {
    cy.viewport(1280, 720);

    const firstName = faker.name.firstName();
    const familyName = faker.name.lastName();
    const lastName = faker.name.lastName();
    const careGiverName = faker.name.findName();
 
   cy.wait(2500)
   cy.get(':nth-child(5) > .hover\\:bg-gray-50\\]').contains("Register Client").click()
        cy.wait(2500)       
        cy.get('#clientDetails_firstName').type(firstName)
        cy.get('#clientDetails_middleName').type(familyName)
        cy.get('#clientDetails_lastName').type(lastName)

        clientData = { firstName, lastName, careGiverName };       
    
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
        })

        const randomPresses11 = Math.floor(Math.random() * 0); // Change 2 to 3 to include the first option

        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control >.ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click() // cy.get("#patientForm_xED9XkpCeUe").trigger("keydown", { keyCode: 40 }); // Down arrow key
        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').trigger("keydown", { keyCode: 13 }); // Enter key  

        // Generate a random 10-digit number
        const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        const randomNumberString = randomNumber.toString();
        cy.get('#clientDetails_identificationNumber').type(randomNumberString);
        cy.get('button').contains('Next').click();

        //**********CAREGIVER*****************************************************************/
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
        //***************************************************************************/


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
 
          cy.get('.ant-select-selection-search-input').eq(0).type(randomCounty).type("{downarrow}").type('{Enter}');
          //.type(randomCounty).wait(1000).type("{downarrow}").type('{Enter}');//county

              cy.get('.ant-select-selection-search-input').eq(1).click()//subcounty 
                cy.wait(1000)           
                  for (let i = 0; i < numberOfDownArrowPresses; i++) {
                  cy.get('.ant-select-selection-search-input').eq(1).type('{downarrow}').type('{enter}');
                   }
                  
                   cy.get('.ant-select-selection-search-input').eq(2).click()//ward 
                   cy.wait(1000)           
                   for (let i = 0; i < numberOfDownArrowPresses; i++) {
                   cy.get('.ant-select-selection-search-input').eq(2).type('{downarrow}').type('{enter}');
                   }
            cy.get('button').contains('Preview').click();
            cy.get('button').contains('Submit').click();
            cy.wait(2500)
            cy.get('button').contains('Close').click();
            cy.wait(5000)
            //cy.log()
            //cy.debug()
                    
                  })

      it('.View CLient Details', () => {
            cy.viewport(1280, 720);
      cy.wait(5000);
      const { firstName, lastName, careGiverName } = clientData;
        cy.get(':nth-child(4) > .hover\\:bg-gray-50\\]').contains("Search Client").click()
            cy.wait(2500)       

        cy.get('.-mx-2').contains('Search Client').click();
        cy.get('#searchInput').type(firstName);
        cy.get('.flex-shrink-0').contains("Search").click();
        cy.wait(2000)
        cy.get('.sm\\:p-6 > .px-10').contains('View').click()
        cy.get('.right-0 > .text-\\[\\#163C94\\]').click()



                  })
             
                


                  /*************Administer Vaccines***********************************************/
                
     it('.Administer Vaccine', () => {
      cy.viewport(1280, 720);
      cy.wait(5000);
      const { firstName, lastName, careGiverName } = clientData;
        cy.get(':nth-child(4) > .hover\\:bg-gray-50\\]').contains("Search Client").click()
            cy.wait(2500)       

        cy.get('.-mx-2').contains('Search Client').click();
        cy.get('#searchInput').type(firstName);
        cy.get('.flex-shrink-0').contains("Search").click();
        cy.wait(2000)
        cy.get('.sm\\:p-6 > .px-10').contains('View').click()



      cy.get(':nth-child(1) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
      cy.get(':nth-child(2) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
      cy.get('button').contains('Administer Vaccine').click();



      const randomNumber14 = Math.floor(Math.random() * 2); // Generates a number between 0 and 2
             switch (randomNumber14) {
             case 0://Administer
               cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
               cy.wait(2500)
               cy.get('button').contains('Administer').click();
               cy.wait(2000)
               cy.get('button').contains('Close').click()
               });
        break;
             case 1://Contraindicate
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
              cy.get('button').contains('Close').click()

        break;
             default:
           
        break;
       }
      })

      it('.Register AEFI', () => {
        cy.viewport(1280, 720);
        cy.wait(5000);
        const { firstName, lastName, careGiverName } = clientData;
         // cy.get('.bg-gray-50').contains("Search Client").click()
            //  cy.wait(2500)       
  
          cy.get('.-mx-2').contains('Search Client').click();
          cy.get('#searchInput').type(firstName);
          cy.get('.flex-shrink-0').contains("Search").click();
          cy.wait(2000)
          cy.get('.sm\\:p-6 > .px-10').contains('View').click()
          cy.get(':nth-child(2) > .overflow-hidden').click()

          const randomNumber = Math.random();
          if (randomNumber < 0.5) {
            cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click();
               } else {
                cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click();
              
          }
       
          
          cy.get('#aefiType').click()//type of AEFI
          cy.wait(1000)           
          for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#aefiType').type('{downarrow}').type('{enter}');

          }

            const details = [
              "Fever",
              "Swelling",
                           ];
            const randomIndex1 = Math.floor(Math.random() * details.length);
            const aefiDetails = details[randomIndex1];
            cy.get('#aefiDetails').type(aefiDetails)

            cy.get('#eventOnset').click()
            cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
              const numAvailableDates = $dateCells.length        
              const randomIndex = Math.floor(Math.random() * numAvailableDates)        
              const randomDateCell = $dateCells.eq(randomIndex) 
              randomDateCell.click()
              })
              cy.get('#pastMedicalHistory').type('none')
              cy.get('button').contains('Next').click()
              .click()
             .click()
              
          const randomNumberOutcome = Math.random();
          if (randomNumberOutcome < 0.5) {
            cy.get('.ant-form > .px-6').contains('Treatment Given').click();
               } else {
            cy.get('.ant-form > .px-6').contains('Specimen collected for investigation').click();
                }

          cy.get('#aefiOutcome').click()
          for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#aefiOutcome').type('{downarrow}').type('{enter}');

          }
          cy.get('button').contains('Submit').click()

      })
  })
    
          
            

        























