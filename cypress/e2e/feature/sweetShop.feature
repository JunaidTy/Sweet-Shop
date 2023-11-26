@e2e
Feature: Login EngineB

    The user has to be logged in to the system via username/password provided in "auth-settings.json" file

Scenario: Show app when user is logged in
   #1.All the selected items are present in basket.
    Given User is logged in to the system
    When I added "Chocolate Cups" to cart
    And I added "Sherbert Straws" to cart
    And I added "Sherbet Discs" to cart
    And I added "Strawberry Bon Bons" to cart
    And I get inside the basket
    Then I check basket contains "Chocolate Cups","Sherbert Straws","Sherbet Discs","Strawberry Bon Bons"

  #2.Test the total price in GBP is correct i.e., matches the price of individual items based on quantity.
    And Add price of all items

  #3.Change the delivery type to Standard Shipping and verify the total price.  
    And I Change the delivery type to Standard Shipping and verify the total price

  #4.Fill the details and click on checkout.  
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

