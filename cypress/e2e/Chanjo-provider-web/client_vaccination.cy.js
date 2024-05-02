///<reference types="cypress" />

import faker from 'faker';
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
         cy.get('#clientDetails_estimatedAge > :nth-child(1) > :nth-child(2)').click()

       
   // Generate a random date between now and 14 days back
        const currentDate = new Date();
        const startDate = new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000); // 14 days back
        const randomTime = startDate.getTime() + Math.random() * (currentDate.getTime() - startDate.getTime());
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



        cy.get('#clientDetails_identificationType').click() 
        cy.get('#clientDetails_identificationType').trigger("keydown", { keyCode: 13 }); // Enter key  

        // Generate a random 10-digit number
        const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        const randomNumberString = randomNumber.toString();
        cy.get('#clientDetails_identificationNumber').type(randomNumberString);
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
       /* const { firstName, lastName, careGiverName } = clientData;
        cy.contains('Search Client').click()
        cy.wait(2500)       

        // cy.get('.-mx-2').contains('Search Client').click();
          cy.get('#searchInput').type(firstName);
          cy.get('.flex-shrink-0').contains("Search").click();
          cy.wait(2000)
          cy.get('.sm\\:p-6 > .px-10').contains('View').click()
          cy.wait(5000)*/



        cy.get(':nth-child(1) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get(':nth-child(2) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('button').contains('Administer Vaccine').click();



        const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
             switch (randomNumber14) {
             case 0://Administer
                cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
                cy.get('#vaccines_0_batchNumber').click( {force: true})
                for (let i = 0; i < numberOfDownArrowPresses; i++) {
                cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
                  }
                cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
                cy.get('#vaccines_1_batchNumber')
                  .click( {force: true})
                  .type('{downarrow}', {force: true}).wait(1000)
                  .type('{enter}', {force: true});
                  /*cy.get('#vaccines_2_batchNumber')
                .click( {force: true}).wait(1000)
                .type('{downarrow}', {force: true}).wait(1000)
                .type('{enter}', {force: true});*/

               cy.wait(2500)
               cy.get('button').contains('Administer').click();
               cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
               cy.wait(2000)
               cy.get('.mt-8').click()
               //cy.get('button').contains('Close').click()
               });
        break;
             case 1://Contraindicate
               cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
              cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
             // cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
              cy.wait(2000)
              });
             // cy.get('button').contains('Close').click()

        break;
            case 2://Not Administered
              cy.get('.outline').click().then(() => {
              cy.get('#notVaccinatedReason').click({force: true})
              cy.wait(2000)           
              for (let i = 0; i < numberOfDownArrowPresses; i++) {
              cy.get('#notVaccinatedReason').type('{downarrow}');
              }
              cy.get('#notVaccinatedReason').type('{enter}', {force: true});
              cy.get('.ant-picker-input').click()
              cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
                 const numAvailableDates = $dateCells.length        
                 const randomIndex = Math.floor(Math.random() * numAvailableDates)        
                 const randomDateCell = $dateCells.eq(randomIndex) 
                 randomDateCell.click()
           })
     
            cy.wait(2500)
            cy.get('button').contains('Submit').click();
            cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
            .click()
            cy.wait(2000)
            });
            //cy.get('button').contains('Close').click()

            break;
        default:
           
        break;
       }
       cy.wait(10000)
      })
      
     it ('Administer at 6 Weeks', () => {
            cy.viewport(1280, 720);
      cy.wait(5000);
     //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_weeks').clear()
      cy.get('#clientDetails_weeks').type("6").type('{Enter}')
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)
      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });
  
      cy.get('button').contains('Administer Vaccine').click();




      const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
           switch (randomNumber14) {
           case 0://Administer
              cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
              cy.get('#vaccines_0_batchNumber').click( {force: true})
              for (let i = 0; i < numberOfDownArrowPresses; i++) {
              cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
                }
              cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
              cy.get('#vaccines_1_batchNumber')
                .click( {force: true})
                .type('{downarrow}', {force: true}).wait(1000)
                .type('{enter}', {force: true});
                cy.get('#vaccines_2_batchNumber')
                .click( {force: true}).wait(1000)
                .type('{downarrow}', {force: true}).wait(1000)
                .type('{enter}', {force: true});

             cy.wait(2500)
             cy.get('button').contains('Administer').click();
             cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
             .click()
             cy.wait(2000)
             cy.get('.mt-8').click()

             //cy.get('button').contains('Close').click()
             });
      break;
           case 1://Contraindicate
             cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
            cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()

           // cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
            cy.wait(2000)
            });
           // cy.get('button').contains('Close').click()

      break;
          case 2://Not Administered
            cy.get('.outline').click().then(() => {
            cy.get('#notVaccinatedReason').click({force: true})
            cy.wait(2000)           
            for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#notVaccinatedReason').type('{downarrow}');
            }
            cy.get('#notVaccinatedReason').type('{enter}', {force: true});
            cy.get('.ant-picker-input').click()
            cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
               const numAvailableDates = $dateCells.length        
               const randomIndex = Math.floor(Math.random() * numAvailableDates)        
               const randomDateCell = $dateCells.eq(randomIndex) 
               randomDateCell.click()
         })
   
          cy.wait(2500)
          cy.get('button').contains('Submit').click();
          cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
            .click()
            cy.wait(2000)
  
          });
          //cy.get('button').contains('Close').click()

          break;
      default:
         
      break;
     }
    })


    it ('Administer at 10 Weeks', () => {
      cy.viewport(1280, 720);
cy.wait(5000);
//      const { firstName, lastName, careGiverName } = clientData;
cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
cy.wait(5000)
cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
cy.wait(5000)
//cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_weeks').clear()
cy.get('#clientDetails_weeks').type("10").type('{Enter}')
cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)
cy.get('tbody.ant-table-tbody input[type="checkbox"]:not(:disabled)').each(($checkbox) => {
  cy.wrap($checkbox).check({ force: true }); // 'force: true' might be optional depending on the context
})

cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
     switch (randomNumber14) {
     case 0://Administer
        cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
        cy.get('#vaccines_0_batchNumber').click( {force: true})
        for (let i = 0; i < numberOfDownArrowPresses; i++) {
        cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
          }
        cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
        cy.get('#vaccines_1_batchNumber')
          .click( {force: true})
          .type('{downarrow}', {force: true}).wait(1000)
          .type('{enter}', {force: true});
          cy.get('#vaccines_2_batchNumber')
          .click( {force: true}).wait(1000)
          .type('{downarrow}', {force: true}).wait(1000)
          .type('{enter}', {force: true});
          cy.get('#vaccines_3_batchNumber')
          .click( {force: true}).wait(1000)
          .type('{downarrow}', {force: true}).wait(1000)
          .type('{enter}', {force: true});

       cy.wait(2500)
       cy.get('button').contains('Administer').click();
       cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
       .click()
       cy.wait(2000)
       //cy.get('button').contains('Close').click()
       cy.get('.mt-8').click()

       });
break;
     case 1://Contraindicate
       cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
      cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
      cy.wait(2000)
      });
     // cy.get('button').contains('Close').click()

break;
    case 2://Not Administered
      cy.get('.outline').click().then(() => {
      cy.get('#notVaccinatedReason').click({force: true})
      cy.wait(2000)           
      for (let i = 0; i < numberOfDownArrowPresses; i++) {
      cy.get('#notVaccinatedReason').type('{downarrow}');
      }
      cy.get('#notVaccinatedReason').type('{enter}', {force: true});
      cy.get('.ant-picker-input').click()
      cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
         const numAvailableDates = $dateCells.length        
         const randomIndex = Math.floor(Math.random() * numAvailableDates)        
         const randomDateCell = $dateCells.eq(randomIndex) 
         randomDateCell.click()
   })

    cy.wait(2500)
    cy.get('button').contains('Submit').click();
    cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
      .click()
      cy.wait(2000)

    });
    //cy.get('button').contains('Close').click()

    break;
default:
   
break;
}
})

it ('Administer at 14 Weeks', () => {
  cy.viewport(1280, 720);
  cy.wait(5000);
  //      const { firstName, lastName, careGiverName } = clientData;
  cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
  cy.wait(5000)
  cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.wait(5000)
  //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_weeks').clear()
cy.get('#clientDetails_weeks').type("14").type('{Enter}')
cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)
cy.get('table input[type="checkbox"]:not(:disabled)').each(($checkbox) => {
  cy.wrap($checkbox).check(); // No need to use force:true if checkboxes are normally clickable
});

cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
 switch (randomNumber14) {
 case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
    cy.get('#vaccines_0_batchNumber').click( {force: true})
    for (let i = 0; i < numberOfDownArrowPresses; i++) {
    cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
      }
    cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
    cy.get('#vaccines_1_batchNumber')
      .click( {force: true})
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});
      cy.get('#vaccines_2_batchNumber')
      .click( {force: true}).wait(1000)
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});

   cy.wait(2500)
   cy.get('button').contains('Administer').click();
   cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
   .click()
   cy.wait(2000)
   //cy.get('button').contains('Close').click()
   cy.get('.mt-8').click()

   });
break;
 case 1://Contraindicate
   cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
  cy.wait(2000)
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary > span').click()
  });
 // cy.get('button').contains('Close').click()

break;
case 2://Not Administered
  cy.get('.outline').click().then(() => {
  cy.get('#notVaccinatedReason').click({force: true})
  cy.wait(2000)           
  for (let i = 0; i < numberOfDownArrowPresses; i++) {
  cy.get('#notVaccinatedReason').type('{downarrow}');
  }
  cy.get('#notVaccinatedReason').type('{enter}', {force: true});
  cy.get('.ant-picker-input').click()
  cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
     const numAvailableDates = $dateCells.length        
     const randomIndex = Math.floor(Math.random() * numAvailableDates)        
     const randomDateCell = $dateCells.eq(randomIndex) 
     randomDateCell.click()
})

cy.wait(2500)
cy.get('button').contains('Submit').click();
cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
  .click()
  cy.wait(2000)

});
//cy.get('button').contains('Close').click()

break;
default:

break;
}
})


it ('Administer at 6 Months', () => {
  cy.viewport(1280, 720);
cy.wait(5000);
//      const { firstName, lastName, careGiverName } = clientData;
cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
cy.wait(5000)
cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
cy.wait(5000)
//cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_months').type("6").type('{Enter}')
cy.get('#clientDetails_weeks').clear()

cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)
cy.get('table input[type="checkbox"]:not(:disabled)').each(($checkbox) => {
  cy.wrap($checkbox).check(); // No need to use force:true if checkboxes are normally clickable
});

cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
 switch (randomNumber14) {
  case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
    cy.get('#vaccines_0_batchNumber').click( {force: true})
    for (let i = 0; i < numberOfDownArrowPresses; i++) {
    cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
      }
    cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
    cy.get('#vaccines_1_batchNumber')
      .click( {force: true})
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});
      cy.get('#vaccines_2_batchNumber')
      .click( {force: true}).wait(1000)
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});

   cy.wait(2500)
   cy.get('button').contains('Administer').click();
   cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
   .click()
   cy.wait(2000)
   //cy.get('button').contains('Close').click()
   cy.get('.mt-8').click()

   });
break;
 case 1://Contraindicate
   cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
  cy.wait(2000)
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary > span').click()
  });
 // cy.get('button').contains('Close').click()

break;
case 2://Not Administered
  cy.get('.outline').click().then(() => {
  cy.get('#notVaccinatedReason').click({force: true})
  cy.wait(2000)           
  for (let i = 0; i < numberOfDownArrowPresses; i++) {
  cy.get('#notVaccinatedReason').type('{downarrow}');
  }
  cy.get('#notVaccinatedReason').type('{enter}', {force: true});
  cy.get('.ant-picker-input').click()
  cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
     const numAvailableDates = $dateCells.length        
     const randomIndex = Math.floor(Math.random() * numAvailableDates)        
     const randomDateCell = $dateCells.eq(randomIndex) 
     randomDateCell.click()
})

cy.wait(2500)
cy.get('button').contains('Submit').click();
cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
  .click()
  cy.wait(2000)

});
//cy.get('button').contains('Close').click()

break;
default:

break;
}
})


it ('Administer at 7 Months', () => {
  cy.viewport(1280, 720);
  cy.wait(5000);
  //      const { firstName, lastName, careGiverName } = clientData;
  cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
  cy.wait(5000)
  cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.wait(5000)
  //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_months').type("7").type('{Enter}')
cy.get('#clientDetails_weeks').clear()
cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)
cy.get('table input[type="checkbox"]:not(:disabled)').each(($checkbox) => {
  // Check each checkbox. No need to use force:true since we assume they are clickable.
  cy.wrap($checkbox).check();
});

cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
 switch (randomNumber14) {
  case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
    cy.get('#vaccines_0_batchNumber').click( {force: true})
    for (let i = 0; i < numberOfDownArrowPresses; i++) {
    cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
      }
    cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
    cy.get('#vaccines_1_batchNumber')
      .click( {force: true})
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});
      cy.get('#vaccines_2_batchNumber')
      .click( {force: true}).wait(1000)
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});

   cy.wait(2500)
   cy.get('button').contains('Administer').click();
   cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
   .click()
   cy.wait(2000)
   //cy.get('button').contains('Close').click()
   cy.get('.mt-8').click()

   });
break;
 case 1://Contraindicate
   cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
  cy.wait(2000)
  });
 // cy.get('button').contains('Close').click()

break;
case 2://Not Administered
  cy.get('.outline').click().then(() => {
  cy.get('#notVaccinatedReason').click({force: true})
  cy.wait(2000)           
  for (let i = 0; i < numberOfDownArrowPresses; i++) {
  cy.get('#notVaccinatedReason').type('{downarrow}');
  }
  cy.get('#notVaccinatedReason').type('{enter}', {force: true});
  cy.get('.ant-picker-input').click()
  cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
     const numAvailableDates = $dateCells.length        
     const randomIndex = Math.floor(Math.random() * numAvailableDates)        
     const randomDateCell = $dateCells.eq(randomIndex) 
     randomDateCell.click()
})

cy.wait(2500)
cy.get('button').contains('Submit').click();
cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
  .click()
  cy.wait(2000)

});
//cy.get('button').contains('Close').click()

break;
default:

break;
}
})


it ('Administer at 9 Months', () => {
 cy.viewport(1280, 720);
  cy.wait(5000);
  //      const { firstName, lastName, careGiverName } = clientData;
  cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
  cy.wait(5000)
  cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.wait(5000)
  //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_months').type("9").type('{Enter}')
cy.get('#clientDetails_weeks').clear()
cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)

    // Selector for checkboxes within the table
    const checkboxSelector = 'table input[type="checkbox"]';

    // Click each checkbox that is not disabled
    cy.get(checkboxSelector).each(($checkbox) => {
      if (!$checkbox.is(':disabled')) {
        cy.wrap($checkbox).check({ force: true }).should('be.checked');
      }
    });

    // Optionally, verify that each checkbox is checked after interaction
    cy.get(checkboxSelector).should('be.checked');
 

cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
 switch (randomNumber14) {
   case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
    cy.get('#vaccines_0_batchNumber').click( {force: true})
    for (let i = 0; i < numberOfDownArrowPresses; i++) {
    cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
      }
    cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
    cy.get('#vaccines_1_batchNumber')
      .click( {force: true})
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});
      cy.get('#vaccines_2_batchNumber')
      .click( {force: true}).wait(1000)
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});

   cy.wait(2500)
   cy.get('button').contains('Administer').click();
   cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
   .click()
   cy.wait(2000)
   //cy.get('button').contains('Close').click()
   cy.get('.mt-8').click()

   });
break;
 case 1://Contraindicate
   cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
  cy.wait(2000)
  });
 // cy.get('button').contains('Close').click()

break;
case 2://Not Administered
  cy.get('.outline').click().then(() => {
  cy.get('#notVaccinatedReason').click({force: true})
  cy.wait(2000)           
  for (let i = 0; i < numberOfDownArrowPresses; i++) {
  cy.get('#notVaccinatedReason').type('{downarrow}');
  }
  cy.get('#notVaccinatedReason').type('{enter}', {force: true});
  cy.get('.ant-picker-input').click()
  cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
     const numAvailableDates = $dateCells.length        
     const randomIndex = Math.floor(Math.random() * numAvailableDates)        
     const randomDateCell = $dateCells.eq(randomIndex) 
     randomDateCell.click()
})

cy.wait(2500)
cy.get('button').contains('Submit').click();
cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
  .click()
  cy.wait(2000)

});
//cy.get('button').contains('Close').click()

break;
default:

break;
}
})


it ('Administer at 12 Months', () => {
   cy.viewport(1280, 720);
  cy.wait(5000);
  //      const { firstName, lastName, careGiverName } = clientData;
  cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
  cy.wait(5000)
  cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.wait(5000)
  //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_months').type("12").type('{Enter}')
cy.get('#clientDetails_weeks').clear()
cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)

const checkboxSelector = '#headlessui-disclosure-panel-:r1l: input[type="checkbox"]';

// Check each checkbox if it is not disabled
cy.get(checkboxSelector).each(($checkbox) => {
  if (!$checkbox.is(':disabled')) {
    cy.wrap($checkbox).check({ force: true }).should('be.checked');
  }
});

// Optionally verify the state of each checkbox after clicking
cy.get(checkboxSelector).should('be.checked');


cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
 switch (randomNumber14) {
   case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
    cy.get('#vaccines_0_batchNumber').click( {force: true})
    for (let i = 0; i < numberOfDownArrowPresses; i++) {
    cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
      }
    cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
    cy.get('#vaccines_1_batchNumber')
      .click( {force: true})
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});
      cy.get('#vaccines_2_batchNumber')
      .click( {force: true}).wait(1000)
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});

   cy.wait(2500)
   cy.get('button').contains('Administer').click();
   cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
   .click()
   cy.wait(2000)
   //cy.get('button').contains('Close').click()
   cy.get('.mt-8').click()

   });
break;
 case 1://Contraindicate
   cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
  cy.wait(2000)
  });
 // cy.get('button').contains('Close').click()

break;
case 2://Not Administered
  cy.get('.outline').click().then(() => {
  cy.get('#notVaccinatedReason').click({force: true})
  cy.wait(2000)           
  for (let i = 0; i < numberOfDownArrowPresses; i++) {
  cy.get('#notVaccinatedReason').type('{downarrow}');
  }
  cy.get('#notVaccinatedReason').type('{enter}', {force: true});
  cy.get('.ant-picker-input').click()
  cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
     const numAvailableDates = $dateCells.length        
     const randomIndex = Math.floor(Math.random() * numAvailableDates)        
     const randomDateCell = $dateCells.eq(randomIndex) 
     randomDateCell.click()
})

cy.wait(2500)
cy.get('button').contains('Submit').click();
cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
  .click()
  cy.wait(2000)

});
//cy.get('button').contains('Close').click()

break;
default:

break;
}
})


it ('Administer at 18 Months', () => {
  cy.viewport(1280, 720);
  cy.wait(5000);
  //      const { firstName, lastName, careGiverName } = clientData;
  cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
  cy.wait(5000)
  cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.wait(5000)
  //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
  cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_months').type("18").type('{Enter}')
cy.get('#clientDetails_weeks').clear()
cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)

  // Selector to target checkboxes specifically in the '18 Months' section
  const checkboxSelector = '#headlessui-disclosure-panel-:r1p: input[type="checkbox"]';

  // Check each checkbox if it is not disabled
  cy.get(checkboxSelector).each(($checkbox) => {
    if (!$checkbox.is(':disabled')) {
      cy.wrap($checkbox).check({ force: true }).should('be.checked');
    }
  });

  // Optionally verify the state of each checkbox after clicking
  cy.get(checkboxSelector).should('be.checked')

cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
 switch (randomNumber14) {
   case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
    cy.get('#vaccines_0_batchNumber').click( {force: true})
    for (let i = 0; i < numberOfDownArrowPresses; i++) {
    cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
      }
    cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
    cy.get('#vaccines_1_batchNumber')
      .click( {force: true})
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});
      cy.get('#vaccines_2_batchNumber')
      .click( {force: true}).wait(1000)
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});

   cy.wait(2500)
   cy.get('button').contains('Administer').click();
   cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
   .click()
   cy.wait(2000)
   //cy.get('button').contains('Close').click()
   cy.get('.mt-8').click()

   });
break;
 case 1://Contraindicate
   cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
  cy.wait(2000)
  });
 // cy.get('button').contains('Close').click()

break;
case 2://Not Administered
  cy.get('.outline').click().then(() => {
  cy.get('#notVaccinatedReason').click({force: true})
  cy.wait(2000)           
  for (let i = 0; i < numberOfDownArrowPresses; i++) {
  cy.get('#notVaccinatedReason').type('{downarrow}');
  }
  cy.get('#notVaccinatedReason').type('{enter}', {force: true});
  cy.get('.ant-picker-input').click()
  cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
     const numAvailableDates = $dateCells.length        
     const randomIndex = Math.floor(Math.random() * numAvailableDates)        
     const randomDateCell = $dateCells.eq(randomIndex) 
     randomDateCell.click()
})

cy.wait(2500)
cy.get('button').contains('Submit').click();
cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
  .click()
  cy.wait(2000)

});
//cy.get('button').contains('Close').click()

break;
default:

break;
}
})


it ('Administer at 24 Months', () => {
   cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_months').type("24").type('{Enter}')
cy.get('#clientDetails_weeks').clear()
cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)

  // Selector to target checkboxes specifically in the '18 Months' section
  const checkboxSelector = '#headlessui-disclosure-panel-:r1p: input[type="checkbox"]';

  // Check each checkbox if it is not disabled
  cy.get(checkboxSelector).each(($checkbox) => {
    if (!$checkbox.is(':disabled')) {
      cy.wrap($checkbox).check({ force: true }).should('be.checked');
    }
  });

  // Optionally verify the state of each checkbox after clicking
  cy.get(checkboxSelector).should('be.checked')

cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
 switch (randomNumber14) {
   case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
    cy.get('#vaccines_0_batchNumber').click( {force: true})
    for (let i = 0; i < numberOfDownArrowPresses; i++) {
    cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
      }
    cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
    cy.get('#vaccines_1_batchNumber')
      .click( {force: true})
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});
      cy.get('#vaccines_2_batchNumber')
      .click( {force: true}).wait(1000)
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});

   cy.wait(2500)
   cy.get('button').contains('Administer').click();
   cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
   .click()
   cy.wait(2000)
   //cy.get('button').contains('Close').click()
   cy.get('.mt-8').click()

   });
break;
 case 1://Contraindicate
   cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
  cy.wait(2000)
  });
 // cy.get('button').contains('Close').click()

break;
case 2://Not Administered
  cy.get('.outline').click().then(() => {
  cy.get('#notVaccinatedReason').click({force: true})
  cy.wait(2000)           
  for (let i = 0; i < numberOfDownArrowPresses; i++) {
  cy.get('#notVaccinatedReason').type('{downarrow}');
  }
  cy.get('#notVaccinatedReason').type('{enter}', {force: true});
  cy.get('.ant-picker-input').click()
  cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
     const numAvailableDates = $dateCells.length        
     const randomIndex = Math.floor(Math.random() * numAvailableDates)        
     const randomDateCell = $dateCells.eq(randomIndex) 
     randomDateCell.click()
})

cy.wait(2500)
cy.get('button').contains('Submit').click();
cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
  .click()
  cy.wait(2000)

});
//cy.get('button').contains('Close').click()

break;
default:

break;
}
})


it ('Administer at 24 Months', () => {
  cy.viewport(1280, 720);
cy.wait(5000);
//      const { firstName, lastName, careGiverName } = clientData;
cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
cy.wait(5000)
cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
cy.wait(5000)
//cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()
cy.get('#clientDetails_years').clear()
cy.get('#clientDetails_months').clear()
cy.get('#clientDetails_weeks').clear()
cy.get('#clientDetails_weeks').type("97").type('{Enter}')
cy.get('button').contains('Next').click();
cy.get('button').contains('Next').click();
cy.get('button').contains('Preview').click();
cy.get('button').contains('Submit').click();
cy.wait(5000)

    cy.get('#headlessui-disclosure-button-:r1r:').click();

    // Selector for the checkbox specifically in the '24 Months' section
    const checkboxSelector = '#headlessui-disclosure-panel-:r1t: input[type="checkbox"]';

    // Check the checkbox if it is not disabled
    cy.get(checkboxSelector).then(($checkbox) => {
      if (!$checkbox.is(':disabled')) {
        cy.wrap($checkbox).check({ force: true }).should('be.checked');
      }
    });

    // Optionally verify the state of the checkbox after clicking
    cy.get(checkboxSelector).should('be.checked')
cy.get('button').contains('Administer Vaccine').click();



const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
 switch (randomNumber14) {
   case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
    cy.get('#vaccines_0_batchNumber').click( {force: true})
    for (let i = 0; i < numberOfDownArrowPresses; i++) {
    cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
      }
    cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
    cy.get('#vaccines_1_batchNumber')
      .click( {force: true})
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});
      cy.get('#vaccines_2_batchNumber')
      .click( {force: true}).wait(1000)
      .type('{downarrow}', {force: true}).wait(1000)
      .type('{enter}', {force: true});

   cy.wait(2500)
   cy.get('button').contains('Administer').click();
   cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
   .click()
   cy.wait(2000)
   //cy.get('button').contains('Close').click()
   cy.get('.mt-8').click()

   });
break;
 case 1://Contraindicate
   cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
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
  cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
  cy.wait(2000)
  });
 // cy.get('button').contains('Close').click()

break;
case 2://Not Administered
  cy.get('.outline').click().then(() => {
  cy.get('#notVaccinatedReason').click({force: true})
  cy.wait(2000)           
  for (let i = 0; i < numberOfDownArrowPresses; i++) {
  cy.get('#notVaccinatedReason').type('{downarrow}');
  }
  cy.get('#notVaccinatedReason').type('{enter}', {force: true});
  cy.get('.ant-picker-input').click()
  cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
     const numAvailableDates = $dateCells.length        
     const randomIndex = Math.floor(Math.random() * numAvailableDates)        
     const randomDateCell = $dateCells.eq(randomIndex) 
     randomDateCell.click()
})

cy.wait(2500)
cy.get('button').contains('Submit').click();
cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
  .click()
  cy.wait(2000)

});
//cy.get('button').contains('Close').click()

break;
default:

break;
}
})


   
      /*
      

      it('.Register AEFI', () => {
        cy.viewport(1280, 720);
        cy.wait(5000);
        const { firstName, lastName, careGiverName } = clientData;
         // cy.get('.bg-gray-50').contains("Search Client").click()
            //  cy.wait(2500)       
  
          
          cy.wait(2500)
          cy.get(':nth-child(2) > .ant-btn > span').click()

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

      })*/
    }
  })
    
