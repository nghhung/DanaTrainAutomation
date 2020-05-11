import AbtractsPage from "../commons/AbtractsPage";

class Dashboard extends AbtractsPage {
    constructor(){
        super();
        this.menuIconDashboard = '.leftHeader > .anticon';
        this.logoDashboard = '.logo-collapsed';
        this.userListingMenu = '[title="Người dùng"] > .anticon > svg';
        this.createNewUserBtnAtDashboard = '.vActions > .ant-btn';
        this.createNewUserForm = '.drawerContainer > .content';
        this.userLoginNameInput = ':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName';
        this.userNameInput = ':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name';
        this.emailInput = '.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email';
        this.departmentInput = '.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fzpjYC > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder';
        this.posittionInput = '.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fzpjYC > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder';
        this.passwordInput = '#password';
        this.createNewUserBtn = '.sc-fzoiQi > .ant-btn-primary';
        this.addImageBtn = '.image-hover > .anticon > svg';
        this.notification = '.ant-notification-notice';

        this.announcementIcon = '[title="Thông báo"]';
        this.createNewAnnouncementBtnAtDashboard = '.vActions > .ant-btn';
        this.typeAnnouncementInput = '.ant-form > :nth-child(1) > :nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fzpjYC > .ant-select-selection > .ant-select-selection__rendered';
        this.titleAnnouncementInput = '#title';
        this.contentAnnouncementInput = '#content';
        this.uploadFileAnnouncement = '.overlayImage > img';
        this.typeAnnouncementForm = '.ant-drawer-body';
        this.createNewAnnouncementBtn = '.sc-fzoiQi > .ant-btn-primary';
    }

}

export default Dashboard;