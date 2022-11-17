Feature: Amazon product search

Scenario: Login to the practice automation website
    Given I am on the practice automation website
    And I am entering my "username" and "password"
    When I click the submit button 
    Then login message is displayed

Scenario: Fill up the contact form in PA website
    Given I am PA website
    And I click the contact page link
    And I fill up the form
    When I click the submitbutton
    Then I should see the thank you message


Scenario: To search a product in amazon by using search box
    Given I am on the Amazon app
    And I click the searchbox and entered "iphone"
    When I click the searchbutton
    Then I am on "iphone" products page
