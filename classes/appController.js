class AppController{
    constructor(){
        this.page = document.querySelector('#page');

        this.createEvents();
        this.openHomePage();
    }

    createEvents(){
        const websiteNameElement = document.querySelector('#website-name');
        websiteNameElement.addEventListener('click', this.openHomePage.bind(this));

        const signInButton = document.querySelector('#signin');
        const signUpButton = document.querySelector('#signup');

        signInButton.addEventListener('click', this.openSignInPage.bind(this));
        signUpButton.addEventListener('click', this.openSignUpPage.bind(this));
    }

    openHomePage(){
        new HomePageController(this);
    }

    openSignUpPage(){
        new SignUpPageController(this);
    }

    openSignInPage(){
        new SignInPageController(this);
    }
}