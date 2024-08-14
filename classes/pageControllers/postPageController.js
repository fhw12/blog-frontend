class PostPageController{
    constructor(appController, post){
        this.appController = appController;
        this.post = post;

        this.open();
    }

    open(){
        const post = document.createElement('div');
        const postTopic = document.createElement('div');
        const postTime = document.createElement('time');
        const postTitle = document.createElement('h2');
        const postContent = document.createElement('span');

        postTopic.className = 'post-topic';
        postTime.className = 'post-date margin-right';

        postTopic.textContent = this.post.topic;
        postTime.textContent = this.post.date;
        postTitle.textContent = this.post.title;
        postContent.innerHTML = this.post.content;

        if(this.appController.repository.role == 'owner'){
            const containerElement = document.createElement('div');
            containerElement.classList.add('margin-bottom');

            const editPost = document.createElement('button');
            const deletePost = document.createElement('button');

            editPost.textContent = 'Edit';
            editPost.classList.add('button', 'margin-right');

            editPost.addEventListener('click', () => {
                this.appController.openEditPostPage(this.appController, this.post);
            });

            deletePost.textContent = 'Delete';
            deletePost.classList.add('button');

            containerElement.appendChild(editPost);
            containerElement.appendChild(deletePost);
            post.appendChild(containerElement);
        }

        post.appendChild(postTopic);
        post.appendChild(postTime);
        post.appendChild(postTitle);
        post.appendChild(postContent);

        this.appController.page.innerHTML = '';
        this.appController.page.appendChild(post);
    }
}