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
        this.departmentInput = '.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fzoXzr > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder';
        this.posittionInput = '.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fzoXzr > .ant-select-selection > .ant-select-selection__rendered';
        this.passwordInput = '#password';
        this.createNewUserBtn = '.sc-fznWqX > .ant-btn-primary';
        this.addImageBtn = '.image-hover > .anticon > svg';
        this.notification = '.ant-notification-notice';
        this.modalTitle = '.modalTitle';
        this.isCanCreateIM = '#isCanAddAnnouncement';

        this.avatarIcon = '.rightHeader > .ant-avatar > .anticon > svg';
        this.logoutBtn = '.ant-dropdown-menu > :nth-child(3)';

        this.announcementIcon = '[title="Thông báo"] > .anticon > svg'
        this.internalMessageIcon = '[title="Tin nhắn nội bộ"] > .anticon > svg > path';
        this.createNewAnnouncementBtnAtDashboard = '.vActions > .ant-btn';
        this.typeAnnouncementInput = '.ant-form > :nth-child(1) > :nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fzoXzr > .ant-select-selection > .ant-select-selection__rendered';
        this.titleAnnouncementInput = '#title';
        this.contentAnnouncementInput = '#content';
        this.uploadFileAnnouncement = '.overlayImage > img';
        this.typeAnnouncementForm = '.ant-drawer-body';
        this.createNewAnnouncementBtn = '.sc-fzoiQi > .ant-btn-primary';
        this.nguoiNhan = ':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fzoXzr > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder';


    }

}

export default Dashboard;