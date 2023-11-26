import { When } from "cypress-cucumber-preprocessor/steps";


const path = require('path');
const fs = require('fs');

When("User is logged in to the system", () => {
  cy.login();
});

When("I added {string} to cart", (text) => {
  cy.get(`[data-name="${text}"]`).should('be.visible').click();
});

When("I get inside the basket", (text) => {
  cy.get(`[href="/basket"]`).should('be.visible').click();
});

When("I check basket contains {string},{string},{string},{string}", (item1,item2,item3,item4) => {
  cy.get(`label[for="exampleRadios2"]`).should('be.visible').click();
  cy.get(`label[for="exampleRadios1"]`).should('be.visible').click();
    cy.get('ul[id="basketItems"] li').contains(item1)
    cy.get('ul[id="basketItems"] li').contains(item2)
    cy.get('ul[id="basketItems"] li').contains(item3)
    cy.get('ul[id="basketItems"] li').contains(item4)
  });

When("Add price of all items", () => {
    let sum = 0;
    cy.get('ul[id="basketItems"] li>span').each(($li) => {
      // Extract text content of each li element
      const text = $li.text();
    
      const numberText = text.replace(/[^0-9.]/g, '');
      // Convert text content to a number (assuming the text is a number)
      const number = parseFloat(numberText);
    
      // Check if the conversion is successful and add the number to the sum
      if (!isNaN(number)) {
        sum += number;
      }
    }).then(() => {
  // Limit the sum to two decimal places
  const sumFormatted = sum.toFixed(2);
   // Log the final sum after processing all li elements
  cy.log(`Sum of numbers (formatted): £${sumFormatted}`);

  //Total (GBP) in UI.
  const total=cy.get('strong').invoke('text')
  .then((text) => {
  const totalnumberText = text.replace(/[^0-9.]/g, '');
  // Convert text content to a number (assuming the text is a number)
  const totalnumber = parseFloat(totalnumberText);
  const totalPrice = totalnumber.toFixed(2);

  //Test the total price in GBP is correct i.e., matches the price of individual items based on quantity.
  if(totalPrice===sumFormatted)
  {
    cy.log(" Total price in GBP is correct")
  }
 
     })
    });
  });

When("I Change the delivery type to Standard Shipping and verify the total price", () => {

      cy.get(`label[for="exampleRadios1"]`).should('be.visible').click();
      const totalCollect=cy.get('strong').invoke('text')
      .then((text) => {
      const totalnumberTextCollect = text.replace(/[^0-9.]/g, '');
      // Convert text content to a number (assuming the text is a number)
      const totalNumberCollect = parseFloat(totalnumberTextCollect);
      const totalPriceCollect = totalNumberCollect.toFixed(2);
      

      cy.get(`label[for="exampleRadios2"]`).should('be.visible').click();
      const totalStandardShipping=cy.get('strong').invoke('text')
      .then((text) => {
      const totalnumberTextStandardShipping = text.replace(/[^0-9.]/g, '');
      // Convert text content to a number (assuming the text is a number)
      const totalNumberStandardShipping = parseFloat(totalnumberTextStandardShipping);
      const totalPriceStandardShipping = totalNumberStandardShipping.toFixed(2);
      

      if(totalPriceStandardShipping-1.99===totalPriceCollect)
      {
        cy.log("Total price verified")
      }
      else{
        throw new Error("Total is not as per Expectation");
      }
    })
  })

});

When("I type name {string} as {string} in text box", (text,name) => {
  if(text==="firstName")
  {
  cy.get(`:nth-child(1) > #name`).click().type(name);
  }
  else if(text==="lastName")
  {
  cy.get(`:nth-child(2) > #name`).click().type(name);
  }
  else if(text==="email")
  {
    cy.get(`[id="email"]`).click().type(name);
  }
});

When("I type {string} as {string} in text box", (text,name) => {
    cy.get(`[id="${text}"]`).click().type(name);
});

When("I select {string} from {string} dropdown", (name,text) => {
  cy.get(`[id="${text}"]`).select(name);
});

When("I click {string} button", (text) => {
  cy.get("button").contains(text).should("have.text", text).click({ force: true });
});