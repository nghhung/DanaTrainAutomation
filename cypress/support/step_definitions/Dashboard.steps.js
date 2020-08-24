import Dashboard from "../PageObjects/DashboardPage";
import LoginPage from "../PageObjects/LoginPage";

const dashboard  = new Dashboard();
const loginPage = new LoginPage();

//create new user steps

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
    const dashboard  = new Dashboard();
    dashboard.checkElementVisibleAndTypeByCss(dashboard.userLoginNameInput, 'hung'+ dashboard.random);
  });

  And(/^I enter username \"([^\"]*)\" on TenDangNhap input$/, function (name) {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.userLoginNameInput, 'hung'+ dashboard.random + name);
  });

  And(/^I enter lastName and firstName on HoVaTen input$/, function () {
    const dashboard  = new Dashboard();
    dashboard.checkElementVisibleAndTypeByCss(dashboard.userNameInput, 'hung'+ dashboard.random);
  });

  And(/^I enter email input$/, function () {
    const dashboard  = new Dashboard();
    dashboard.checkElementVisibleAndTypeByCss(dashboard.emailInput, 'hung.nguyen+'+ dashboard.random + '@enouvo.com');
  });

  And(/^I enter email \"([^\"]*)\" input$/, function (email) {
    const emailUser = 'hung.nguyen+'+ dashboard.random + email + '@enouvo.com';
    dashboard.checkElementVisibleAndTypeByCss(dashboard.emailInput, emailUser);
  });

  And(/^I enter department \"([^\"]*)\" input$/, function (department) {
    // dashboard.getElementByCssAndClick(dashboard.departmentInput);
    dashboard.checkElementVisibleAndTypeByCss(dashboard.departmentInput, department)
    dashboard.getElementByCssAndClick(dashboard.modalTitle)
  });

  And(/^I enter posittion \"([^\"]*)\" input$/, function (position) {
    // dashboard.getElementByCssAndClick(dashboard.posittionInput);
    dashboard.checkElementVisibleAndTypeByCss(dashboard.posittionInput, position)
    dashboard.getElementByCssAndClick(dashboard.modalTitle)
  });

  And(/^I enter password to create new user input$/, function () {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.passwordInput, '123456')
  });

  And(/^I click on cho phep tao thong bao$/, function () {
    dashboard.getElementByCssAndClick(dashboard.isCanCreateIM)
  });

  And(/^I click on submit new user button$/, function () {
    dashboard.getElementByCssAndClick(dashboard.createNewUserBtn)
  });

  Then(/^I see success notification message$/, function () {
    dashboard.checkElementVisibleByCss(dashboard.notification)
  });

  And(/^I click on avatar icon$/, function () {
    dashboard.getElementByCssAndClick(dashboard.avatarIcon)
  });

  And(/^I click on logout button$/, function () {
    dashboard.getElementByCssAndClick(dashboard.logoutBtn)
  });

  And(/^I enter \"([^\"]*)\" account to user input$/, function (user) {
    loginPage.checkElementVisibleAndTypeByCss(loginPage.userName,'hung'+ dashboard.random + user)
  });

  //announcement steps

  When(/^I click on announcement icon$/, function () {
    dashboard.getElementByCssAndClick(dashboard.announcementIcon);
  });

  When(/^I click on internal message icon$/, function () {
    dashboard.getElementByCssAndClick(dashboard.internalMessageIcon);
  });

  Then(/^I see create new announcement form$/, function () {
    dashboard.checkElementVisibleByCss(dashboard.typeAnnouncementForm);
  });

  And(/^I click on create new announcement button$/, function () {
    dashboard.getElementByCssAndClick(dashboard.createNewAnnouncementBtnAtDashboard);
  });
  
  And(/^I enter type on announcement type input$/, function () {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.typeAnnouncementInput,'Bình thường');
    dashboard.getElementByCssAndClick('.modalTitle');
  });

  And(/^I enter title on announcement title input$/, function () {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.titleAnnouncementInput, 'Đây là thông báo automation test' + dashboard.random)
  });

  And(/^I enter content on announcement content input$/, function () {
    dashboard.checkElementVisibleAndTypeByCss(dashboard.contentAnnouncementInput, 'This is automation test')
  });

  And(/^I enter "hung" on nguoi nhan input$/, function () {
    dashboard.checkElementVisibleAndTypeByCssThenEnter(dashboard.nguoiNhan, 'hung')
    dashboard.getElementByCssAndClick(dashboard.modalTitle)
  });

  And(/^I upload file on announcement$/, function () {
    dashboard.uploadJPEGImage(dashboard.uploadFileAnnouncement,'download.jpeg')
    dashboard.checkElementVisibleByCss('.image');
    // dashboard.checkElementVisibleByCss('.name-file');
  });

  And(/^I click on submit new announcement button$/, function () {
    dashboard.getElementByCssAndClick(dashboard.createNewUserBtn)
  });
