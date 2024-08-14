class EditPostPageController{
    constructor(appController, post){
        this.appController = appController;
        this.post = post;

        this.open();
    }

    open(){
        const post = document.createElement('div');
        const postTopic = document.createElement('div');
        const postTime = document.createElement('time');
        const postTitle = document.createElement('input');
        const postContent = document.createElement('textarea');

        postTopic.className = 'post-topic';
        postTime.className = 'post-date margin-right';
        postTitle.style = 'width: 100%; padding: 10px; margin-bottom: 10px;';
        postContent.style = 'width: 100%; min-height: 50vh;';

        postTopic.textContent = this.post.topic;
        postTime.textContent = this.post.date;
        postTitle.value = this.post.title;
        postContent.innerHTML = this.post.content;

        post.appendChild(postTopic);
        post.appendChild(postTime);
        post.appendChild(postTitle);
        post.appendChild(postContent);

        this.appController.page.innerHTML = '';
        this.appController.page.appendChild(post);
    }
}