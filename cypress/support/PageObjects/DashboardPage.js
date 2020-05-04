import AbtractsPage from "../commons/AbtractsPage";

class Dashboard extends AbtractsPage {
    constructor(){
        super();
        this.menuIconDashboard = '.leftHeader > .anticon';
        this.logoDashboard = '.logo-collapsed';
        this.userMenu = '[title="Người dùng"] > .anticon > svg';
        this.createNewUserBtn = '.vActions > .ant-btn';
        this.createNewUserForm = '.drawerContainer > .content';
        this.userLoginNameInput = ':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName';
        this.userNameInput = ':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name';
        this.emailInput = '.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email';
        this.departmentInput = '.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznWqX > .ant-select-selection > .ant-select-selection__rendered';
        this.posittionInput = '.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznWqX > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder';
        this.passwordInput = '#password';
        this.createNewUserInput = '.sc-fzoyTs > .ant-btn-primary';
        this.addImageBtn = '.image-hover > .anticon > svg';
    }

}

export default Dashboard;