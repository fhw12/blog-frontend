class ProfilePageController{
    constructor(appController){
        this.appController = appController;
        this.open();
    }

    open(){
        this.appController.page.innerHTML = 'Empty yet';
    }
}