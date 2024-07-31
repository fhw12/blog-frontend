class SignInPageController{
    constructor(appController){
        this.appController = appController;
        this.open();
    }

    open(){
        this.appController.page.innerHTML = `
            <div>
                <h2>Log in</h2>
                <p class="field-label">Your login:</p>
                <input class="input-field" placeholder="Login" id="login">
                <p class="field-label">Your password:</p>
                <input class="input-field" placeholder="Password" id="password">
                <button class="form-button button">Login</button>
            </div>
        `;
    }
}