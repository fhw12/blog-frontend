class AppController{
    constructor(){
        this.page = document.querySelector('#page');
        this.repository = new Repository();
        this.api = new APIRequests();

        this.createEvents();
        this.authUser();
        this.openHomePage();
    }

    authUser(){
        const token = this.repository.getCookie('token');
        this.api.getCurrentUser(token).then(
            (result) => {
                console.log(result);

                if(result){
                    const headerRightElement = document.querySelector('.header-right');

                    const profileButton = document.createElement('button');
                    profileButton.className = 'button margin-right';
                    profileButton.textContent = `Profile(${result.username})`;

                    const logoutButton = document.createElement('button');
                    logoutButton.className = 'button';
                    logoutButton.textContent = 'Logout';
                    logoutButton.addEventListener('click', this.logout);

                    headerRightElement.innerHTML = '';
                    headerRightElement.appendChild(profileButton);
                    headerRightElement.appendChild(logoutButton);
                }
            }
        );
    }

    logout(){
        document.cookie = "token=; max-age=-1; path=/;";
    }

    createEvents(){
        const websiteNameElement = document.querySelector('#website-name');
        websiteNameElement.addEventListener('click', this.openHomePage.bind(this));

        const signInButton = document.querySelector('#signin');
        const signUpButton = document.querySelector('#signup');

        signInButton.addEventListener('click', this.openSignInPage.bind(this));
        signUpButton.addEventListener('click', this.openSignUpPage.bind(this));
    }

    openHomePage(){
        new HomePageController(this);
    }

    openSignInPage(){
        new SignInPageController(this);
    }

    openSignUpPage(){
        new SignUpPageController(this);
    }

    openPostPage(appController, post){
        new PostPageController(appController, post);
    }
}