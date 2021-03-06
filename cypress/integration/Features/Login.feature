Feature: Login validation

Login steps

        Scenario:Login with empty data by desktop
            Given I open Danatrain site by desktop screen
             When I see the logo
              And I enter " " data to user input
              And I enter " " data to password input
             Then I see warning message below user input
              And I see warning message below password input

        Scenario:Login with empty data by iphoneX
            Given I open Danatrain site by iphoneX
             When I see the logo
              And I enter " " data to user input
              And I enter " " data to password input
             Then I see warning message below user input
              And I see warning message below password input

        Scenario:Login with incorrect data by desktop
            Given I open Danatrain site by desktop screen
             When I see the logo
              And I enter "userIncorrect" data to user input
              And I enter "passwordIncorrect" data to password input
              And I click on submit button
             Then I see notification error message

        Scenario:Login with incorrect data by iphoneX
            Given I open Danatrain site by iphoneX
             When I see the logo
              And I enter "userIncorrect" data to user input
              And I enter "passwordIncorrect" data to password input
              And I click on submit button
             Then I see notification error message

        Scenario:Login with incorrect user data by desktop
            Given I open Danatrain site by desktop screen
             When I see the logo
              And I enter "userIncorrect" data to user input
              And I enter "234" data to password input
              And I click on submit button
             Then I see notification error message

        Scenario:Login with incorrect password data by iphoneX
            Given I open Danatrain site by iphoneX
             When I see the logo
              And I enter "admin" data to user input
              And I enter "passwordIncorrect" data to password input
              And I click on submit button
             Then I see notification error message

        Scenario:Login with empty user data by desktop
            Given I open Danatrain site by desktop screen
             When I see the logo
              And I enter " " data to user input
              And I enter "123" data to password input
             Then I see warning message below user input

        Scenario:Login with empty password data by iphoneX
            Given I open Danatrain site by iphoneX
             When I see the logo
              And I enter "admin" data to user input
              And I enter " " data to password input
              And I see warning message below password input

        Scenario:Login success with correct data by desktop
            Given I open Danatrain site by desktop screen
             When I see the logo
              And I enter "admin" data to user input
              And I enter "234" data to password input
              And I click on submit button
             Then I see Menu icon at dashboard page

        Scenario:Login success with correct data by iphoneX
            Given I open Danatrain site by iphoneX
             When I see the logo
              And I enter "admin" data to user input
              And I enter "234" data to password input
              And I click on submit button
             Then I see Menu icon at dashboard page