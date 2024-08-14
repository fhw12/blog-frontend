class Repository{
    constructor(){
        this.posts = new Array();
        this.apiRequests = new APIRequests();
        this.role = '';
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

    getCookie(name){
        const cookie = document.cookie;
        const cookieArray = cookie.split('; ');
        const result = cookieArray.find(
            (item) => {
                if(item.startsWith(name + '=')){
                    return item;
                }
            }
        )
        return result ? result.split('=')[1] : null;
    }
}