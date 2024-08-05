class Repository{
    constructor(){
        this.posts = new Array();
        this.apiRequests = new APIRequests();
    }

    addPost(id, title, topic, date, description, content){
        this.posts.push(
            new PostModel(id, title, topic, date, description, content)
        );
    }

    clearPosts(){
        this.posts = [];
    }

    loadPosts(callbackFunction){
        this.apiRequests.getPosts().then(
            result => {
                if(result){
                    this.clearPosts();
                    result.forEach((post) => {
                        this.addPost(
                            post.id,
                            post.title,
                            post.topic,
                            post.date,
                            post.description,
                            post.content,
                        );
                    });

                    callbackFunction();
                }
            }
        );
    }
}