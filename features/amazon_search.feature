Feature: Amazon product search

Scenario: To search a product in amazon by using search box
    Given I am on the Amazon app
    And I click the searchbox and entered "iphone"
    When I click the searchbutton
    Then I am on "iphone" products page

