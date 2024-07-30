class Repository{
    constructor(){
        this.posts = new Array();
        this.addTestPosts();
    }

    addPost(id, title, topic, date, description, content){
        this.posts.push(
            new PostModel(id, title, topic, date, description, content)
        );
    }

    addTestPosts(){
        this.addPost(
            0,
            'First post',
            'Info',
            '30 July, 2024',
            'First post in this blog, click to continue reading',
            'First post content'
        );

        this.addPost(
            1,
            'How to create a website?',
            'Programming',
            '30 July, 2024',
            'Learn of how to create your website',
            'Learn html, css, js and frameworks'
        );

        this.addPost(
            2,
            'Your first website',
            'Programming',
            '30 July, 2024',
            'You will do your first website',
            'Create a index.html, write code and after it open this file by using your browser to see result',
        );
    }
}