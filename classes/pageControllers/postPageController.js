class PostPageController{
    constructor(appController, post){
        this.appController = appController;
        this.post = post;

        this.open();
    }

    open(){
        this.appController.page.innerHTML = `
            <h2>${this.post.title}</h2>
            <span>${this.post.content}</span>
        `;
    }
}