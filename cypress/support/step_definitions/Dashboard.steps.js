import Dashboard from "../PageObjects/DashboardPage";

const dashboard  = new Dashboard();

When(/^I click on listing user icon$/, function () {
    dashboard.getElementByCssAndClick(dashboard.userListingMenu);
  });

  Then(/^I see create new user form$/, function () {
    dashboard.checkElementVisibleByCss(dashboard.createNewUserForm);
  });

  And(/^I click on create new user button$/, function () {
    dashboard.getElementByCssAndClick(dashboard.createNewUserBtnAtDashboard);
  });

  And(/^I enter username on TenDangNhap input$/, function () {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.userLoginNameInput, 'hung'+ dashboard.random);
  });

  And(/^I enter lastName and firstName on HoVaTen input$/, function () {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.userNameInput, 'hung'+ dashboard.random);
  });

  And(/^I enter email input$/, function () {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.emailInput, 'hung.nguyen+'+ dashboard.random + '@enouvo.com');
  });

  And(/^I enter department input$/, function () {
    // dashboard.getElementByCssAndClick(dashboard.departmentInput);
    dashboard.checkElementVisibleAndTypeByCss(dashboard.departmentInput, 'Ban Giám Đốc')
  });

  And(/^I enter posittion input$/, function () {
    // dashboard.getElementByCssAndClick(dashboard.posittionInput);
    dashboard.checkElementVisibleAndTypeByCss(dashboard.posittionInput, 'Chuyên Viên')
  });

  And(/^I enter password to create new user input$/, function () {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.passwordInput, '123456')
  });

  And(/^I click on submit new user button$/, function () {
    dashboard.getElementByCssAndClick(dashboard.createNewUserBtn)
  });

  Then(/^I see success notification message$/, function () {
    dashboard.getElementByCssAndClick(dashboard.notification)
  });
