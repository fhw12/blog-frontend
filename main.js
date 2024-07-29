'use strict';

const app = document.querySelector('#app');
const websiteNameElement = document.querySelector('#website-name');

websiteNameElement.addEventListener('click', openMainPage);

function addPost(postContainer, info, title, description){
    postContainer.innerHTML += `
        <div class="post">
            <p class="post-theme-date">${info}</p>
            <p class="post-title">${title}</p>
            <p class="post-description">${description}</p>
        </div>
    `;
}

function openMainPage(){
    app.innerHTML = '<div class="post-container" id="post-container"></div>';
    const postContainer = document.querySelector('#post-container');
    for(let i = 0; i < 3; i++){
        addPost(postContainer,
            'Programming - 29 July, 2024',
            'How to create a website?',
            'In this post you will learn of how to create your own website by using html, css, js'
        );
    }
}

function openSignUpPage(){
    app.innerHTML = `
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

function openSignInPage(){
    app.innerHTML = `
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

openMainPage();