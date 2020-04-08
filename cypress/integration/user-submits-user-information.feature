Feature: User Quote Form
  @user-submits-user-information
  @usually-broken-up-into-separate-tests

  Scenario: User submits user information
    Given I navigate to the "main form"
    Then I see that I can provide my "details" information
    And I see that I can provide "firstName"
    And I am informed "Enter your first name" for my "firstName"
    And I see that I am at step "1" of the submission process
    And I see that I can not continue to the next screen

    When I provide "Tester" as my "firstName"
    Then I do not see any errors with my "firstName"

    And I provide "Test" as my "lastName"
    When I provide "asdf" as my "email"
    Then I see errors with my "email"
    And I am informed "The email format is invalid." for my "email"
    When I provide "test@test.com" as my "email"
    Then I do not see any errors with my "email"
    And I do not see any errors with my "phone"

    When I provide "12341234123412341234" as my "phone"
    Then I see errors with my "phone"

    When I provide "0423444444" as my "phone"
    Then I do not see any errors with my "phone"
    And I see that I can continue to the next screen

    When I choose to continue to the next screen
    Then I see that I can provide my "address" information
    And I see that I am at step "2" of the submission process

    And I provide "1" as my "streetNum"
    And I provide "Test" as my "streetName"
    And I choose "Circuit" as my "streetType"
    And I provide "Brisbane" as my "suburb"
    When I provide "1000" as my "postcode"
    Then I see errors with my "postcode"
    When I provide "8000" as my "postcode"
    Then I see errors with my "postcode"
    When I provide "0800" as my "postcode"
    Then I do not see any errors with my "postcode"

    When I choose to submit my information
    Then I see my submission results
