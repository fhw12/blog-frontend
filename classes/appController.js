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

                const headerRightElement = document.querySelector('.header-right');
                headerRightElement.innerHTML = '';

                if(result){
                    const profileButton = document.createElement('button');
                    profileButton.classList.add('button', 'margin-right');
                    profileButton.textContent = `Profile(${result.username})`;

                    const logoutButton = document.createElement('button');
                    logoutButton.className = 'button';
                    logoutButton.textContent = 'Logout';
                    logoutButton.addEventListener('click', this.logout.bind(this));

                    headerRightElement.appendChild(profileButton);
                    headerRightElement.appendChild(logoutButton);
                } else {
                    const signInButton = document.createElement('button');
                    const signUpButton = document.createElement('button');

                    signInButton.setAttribute('type', 'button');
                    signUpButton.setAttribute('type', 'button');

                    signInButton.classList.add('sign-in', 'button', 'margin-right');
                    signUpButton.classList.add('sign-up', 'button');

                    signInButton.id = 'signin';
                    signUpButton.id = 'signup';

                    signInButton.textContent = 'Sign In';
                    signUpButton.textContent = 'Sign Up';

                    signInButton.addEventListener('click', this.openSignInPage.bind(this));
                    signUpButton.addEventListener('click', this.openSignUpPage.bind(this));

                    headerRightElement.appendChild(signInButton);
                    headerRightElement.appendChild(signUpButton);
                }
            }
        );
    }

    logout(){
        document.cookie = "token=; max-age=-1; path=/;";
        this.authUser();
    }

    createEvents(){
        const websiteNameElement = document.querySelector('#website-name');
        websiteNameElement.addEventListener('click', this.openHomePage.bind(this));
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