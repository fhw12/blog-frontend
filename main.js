'use strict';

class MainPageController{
    constructor(appController){
        this.appController = appController;
        this.open();
    }

    open(){
        this.appController.page.innerHTML = '<div class="post-container" id="post-container"></div>';
        for(let i = 0; i < 30; i++){
            this.addPost(
                'Programming - 29 July, 2024',
                'How to create a website?',
                'In this post you will learn of how to create your own website by using html, css, js'
            );
        }
    }

    addPost(info, title, description){
        const postContainer = document.querySelector('#post-container');
        postContainer.innerHTML += `
            <div class="post">
                <p class="post-theme-date">${info}</p>
                <p class="post-title">${title}</p>
                <p class="post-description">${description}</p>
            </div>
        `;
    }
}

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
                <button class="form-button">Login</button>
            </div>
        `;
    }
}

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
                <button class="form-button">Create a new account</button>
            </div>
        `;
    }
}

class AppController{
    constructor(){
        this.page = document.querySelector('#page');

        this.createEvents();
        this.openMainPage();
    }

    createEvents(){
        const websiteNameElement = document.querySelector('#website-name');
        websiteNameElement.addEventListener('click', this.openMainPage.bind(this));

        const signInButton = document.querySelector('#signin');
        const signUpButton = document.querySelector('#signup');

        signInButton.addEventListener('click', this.openSignInPage.bind(this));
        signUpButton.addEventListener('click', this.openSignUpPage.bind(this));
    }

    openMainPage(){
        new MainPageController(this);
    }

    openSignUpPage(){
        new SignUpPageController(this);
    }

    openSignInPage(){
        new SignInPageController(this);
    }
}

new AppController();