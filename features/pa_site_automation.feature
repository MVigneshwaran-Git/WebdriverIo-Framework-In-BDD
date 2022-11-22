Feature: Automation in PA website

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



