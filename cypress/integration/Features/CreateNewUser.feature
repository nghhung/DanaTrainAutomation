Feature: Login validation

Create new user

        Scenario:Login success with correct data by desktop
            Given I open Danatrain site by desktop screen
             When I see the logo
              And I enter "admin" data to user input
              And I enter "234" data to password input
              And I click on submit button
             Then I see Menu icon at dashboard page
             When I click on listing user icon
              And I click on create new user button
             Then I see create new user form
              And I enter username on TenDangNhap input
              And I enter lastName and firstName on HoVaTen input
              And I enter email input
              And I enter department input
              And I enter posittion input
              And I enter password to create new user input
              And I click on submit new user button
             Then I see success notification message