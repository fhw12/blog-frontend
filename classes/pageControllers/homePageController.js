class HomePageController{
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