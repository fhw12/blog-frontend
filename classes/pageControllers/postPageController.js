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
        postTime.className = 'post-date';

        postTopic.textContent = this.post.topic;
        postTime.textContent = this.post.date;
        postTitle.textContent = this.post.title;
        postContent.innerHTML = this.post.content;

        post.appendChild(postTopic);
        post.appendChild(postTime);
        post.appendChild(postTitle);
        post.appendChild(postContent);

        this.appController.page.innerHTML = '';
        this.appController.page.appendChild(post);
    }
}