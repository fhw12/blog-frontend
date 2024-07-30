class HomePageController{
    constructor(appController){
        this.appController = appController;
        this.open();
    }

    open(){
        this.appController.page.innerHTML = '<div class="post-container" id="post-container"></div>';
        
        const posts = [...this.appController.repository.posts].reverse();
        
        posts.forEach((post) => {
            this.addPost(post);
        });
    }

    addPost(post){
        const postContainer = document.querySelector('#post-container');
        postContainer.innerHTML += `
            <div class="post">
                <p class="post-theme-date">${post.topic} - ${post.date}</p>
                <p class="post-title">${post.title}</p>
                <p class="post-description">${post.description}</p>
            </div>
        `;
    }
}