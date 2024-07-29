'use strict';

const postContainer = document.querySelector('#post-container');

function addPost(info, title, description){
    postContainer.innerHTML += `
        <div class="post">
            <p class="post-theme-date">${info}</p>
            <p class="post-title">${title}</p>
            <p class="post-description">${description}</p>
        </div>
    `;
}

for(let i = 0; i < 3; i++){
    addPost(
        'Programming - 29 July, 2024',
        'How to create a website?',
        'In this post you will learn of how to create your own website by using html, css, js'
    );
}