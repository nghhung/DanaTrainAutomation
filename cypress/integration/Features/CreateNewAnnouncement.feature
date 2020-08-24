Feature: Create new annoucement

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
        And I enter username "VT" on TenDangNhap input
        And I enter lastName and firstName on HoVaTen input
        And I enter email "VT" input
        And I enter department "Phòng TCKT" input
        And I enter posittion "Văn Thư" input
        And I enter password to create new user input
        And I click on cho phep tao thong bao
        And I click on submit new user button
        Then I see success notification message
        And I click on avatar icon
        And I click on logout button

        When I see the logo
        And I enter "VT" account to user input
        And I enter "123456" data to password input
        And I click on submit button
        Then I see Menu icon at dashboard page

        When I click on announcement icon
        And I click on create new announcement button
        Then I see create new announcement form
        And I enter type on announcement type input
        And I enter title on announcement title input
        And I enter content on announcement content input
        And I enter "hung" on nguoi nhan input
        And I upload file on announcement
        And I click on submit new announcement button
        Then I see success notification message