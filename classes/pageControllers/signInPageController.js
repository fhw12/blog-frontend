class SignInPageController{
    constructor(appController){
        this.appController = appController;
        this.open();
    }

    open(){
        const form = document.createElement('form');
        const formName = document.createElement('h2');
        const loginText = document.createElement('p');
        const loginInput = document.createElement('input');
        const passwordText = document.createElement('p');
        const passwordInput = document.createElement('input');
        const submitButton = document.createElement('button');

        loginText.className = 'field-label';
        loginInput.className = 'input-field';
        passwordText.className = 'field-label';
        passwordInput.className = 'input-field';
        submitButton.classList.add('form-button', 'button');

        loginInput.setAttribute('placeholder', 'Login');
        loginInput.setAttribute('id', 'login');
        passwordInput.setAttribute('placeholder', 'Password');
        passwordInput.setAttribute('id', 'password');
        submitButton.setAttribute('type', 'submit');

        formName.textContent = 'Log in';
        loginText.textContent = 'Your login:';
        passwordText.textContent = 'Your password:';
        submitButton.textContent = 'Login';

        submitButton.addEventListener('click', async (event) => {
            event.preventDefault();
            const login = loginInput.value;
            const password = passwordInput.value;

            if(login.length < 4) {
                alert("Min length of the login: 4");
                return;
            }

            if(password.length < 8){
                alert('Min length of the password: 8');
                return;
            }

            const api = new APIRequests()
            const result = await api.signIn(login, password);

            if(result){
                console.log(result);

                if(result.message === "Successfully"){
                    document.cookie = `token=${result.token}`;
                }

                alert(result.message);
            }
        });

        form.appendChild(formName);
        form.appendChild(loginText);
        form.appendChild(loginInput);
        form.appendChild(passwordText);
        form.appendChild(passwordInput);
        form.appendChild(submitButton);

        this.appController.page.innerHTML = '';
        this.appController.page.appendChild(form);
    }
}