**# Sweet-Shop**  
**Automation Framework for Sweet Shop**  
**Cypress Set Up**    
If you want to use Cypress with Behavior-Driven Development (BDD), you can integrate it with a testing framework that supports BDD syntax, such as Cucumber or Mocha with Chai. Here's a basic guide on how you can set up Cypress with Cucumber, a popular BDD framework:

**Install Dependencies:**

**Install Cypress and Cucumber dependencies using npm. Run the following commands:**  
npm install cypress --save-dev  
npm install cypress-cucumber-preprocessor --save-dev  
Create Cypress Configuration File:  

Create a cypress.config.js file in your project's root directory if you don't have one already. Add the following configuration to include the Cucumber preprocessor:   

**Create Cucumber Configuration File:**

Create a cypress/plugins/index.js file and configure the Cucumber preprocessor:  

Create a Cucumber Feature File:  

Create a feature file (e.g., cypress/integration/myFeature.feature) with your BDD scenarios using Gherkin syntax. 

**Write Cucumber Step Definitions:**

Create step definition files (e.g., cypress/integration/myFeature/myFeature_steps.js) to define the steps in your scenarios. For example:
javascript  

**Run Tests:**

**Run Cypress using the following command:**  
npm install  
npx cypress open  

Cypress Test Runner will open, and you can select your feature file to run the tests.
This setup allows you to write BDD-style scenarios in your feature files and implement the corresponding step definitions in JavaScript files. The Cucumber preprocessor helps Cypress recognize and execute these scenarios.  

**Scenarios covered in this test**  
**1.All the selected items are present in basket.**  
    Given User is logged in to the system  
    When I added "Chocolate Cups" to cart  
    And I added "Sherbert Straws" to cart  
    And I added "Sherbet Discs" to cart  
    And I added "Strawberry Bon Bons" to cart  
    And I get inside the basket  
    Then I check basket contains "Chocolate Cups","Sherbert Straws","Sherbet Discs","Strawberry Bon Bons"  
**BUGS:**  
1.When user add 4 product and go inside the basket he is not able to see any product and shows that Your Basket 0. When user changes the Delivery he will able to see the products.  

**2.Test the total price in GBP is correct i.e., matches the price of individual items based on quantity.**  
    And Add price of all items  

**3.Change the delivery type to Standard Shipping and verify the total price.**  
    And I Change the delivery type to Standard Shipping and verify the total price  
**BUGS:**  
1.When delivery radio button is selected as Standard Shipping Total (GBP) is coming as NaN.But when it is changed to Collect (FREE) it is coming as per the expected value.  
    
**4.Fill the details and click on checkout.**  
    And I type name "firstName" as "Md Junaid" in text box  
    And I type name "lastName" as "Ansari" in text box  
    And I type "email" as "abc@gmail.com" in text box  
    And I type "address" as "Munnekolal" in text box  
    And I type "address2" as "Bangalore" in text box  
    And I select "United Kingdom" from "country" dropdown  
    And I select "Swansea" from "city" dropdown  
    And I type "zip" as "560037" in text box  
    And I type "cc-name" as "Md Junaid Ansari" in text box  
    And I type "cc-number" as "1234567890" in text box  
    And I type "cc-expiration" as "10/2029" in text box  
    And I type "cc-cvv" as "123" in text box  
    And I click "Continue to checkout" button  
  
