class SignUpPageController{
    constructor(appController){
        this.appController = appController;
        this.open();
    }

    open(){
        this.appController.page.innerHTML = `
            <div>
                <h2>Create an account</h2>
                <p class="field-label">Your login:</p>
                <input class="input-field" placeholder="Login" id="login">
                <p class="field-label">Your password:</p>
                <input class="input-field" placeholder="Password" id="password">
                <p class="field-label">Repeat your password:</p>
                <input class="input-field" placeholder="Repeat the password" id="repeatedPassword">
                <button class="form-button button">Create a new account</button>
            </div>
        `;
    }
}