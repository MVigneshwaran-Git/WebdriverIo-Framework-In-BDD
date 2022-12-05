Feature: Login to VA Document site

Scenario: To login into VA Document site
    Given I am on the VA login page 
    And I entering my "username" and "password"
    And I am choosing the role
    When I click the select button
    Then I am on homepage
    And I click on the upload button and browsing my files
    And I am choosing the file from my local memory
    When I click the continue button
    Then the chosen file will be uploaded
