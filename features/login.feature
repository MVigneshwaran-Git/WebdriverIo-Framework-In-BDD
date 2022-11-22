Feature: Amazon product search

Scenario: Login to the practice automation website
    Given I am on the practice automation website
    And I am entering my "username" and "password"
    When I click the submit button 
    Then login message is displayed