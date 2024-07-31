class PostPageController{
    constructor(appController, post){
        this.appController = appController;
        this.post = post;

        this.open();
    }

    open(){
        this.appController.page.innerHTML = `
            <div class="post-topic">${this.post.topic}</div>
            <time class="post-date">${this.post.date}</time>
            <h2>${this.post.title}</h2>
            <span>${this.post.content}</span>
        `;
    }
}