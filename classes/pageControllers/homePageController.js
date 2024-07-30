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

    openPost(post){
        this.appController.openPostPage(this.appController, post);
    }

    addPost(post){
        const postContainer = document.querySelector('#post-container');
        const postElement = document.createElement('div');
        const postInfoElement = document.createElement('p');
        const postTitleElement = document.createElement('p');
        const postDescriptionElement = document.createElement('p');
        
        postElement.className = 'post';
        
        postInfoElement.className = 'post-theme-date';
        postTitleElement.className = 'post-title';
        postDescriptionElement.className = 'post-description';

        postInfoElement.innerText = `${post.topic} - ${post.date}`;
        postTitleElement.innerText = post.title;
        postDescriptionElement.innerText = post.description;

        postElement.appendChild(postInfoElement);
        postElement.appendChild(postTitleElement);
        postElement.appendChild(postDescriptionElement);

        postElement.addEventListener('click',
            () => { this.openPost(post); }
        );

        postContainer.appendChild(postElement);
    }
}