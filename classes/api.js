class APIRequests{
    #baseURL;
    constructor(){
        this.#baseURL = "http://localhost:8000"; // server address
    }

    async responseParsing(response){
        if(response?.ok){
            try{
                const result = await response.json();
                return result;
            } catch(err){
                console.log('Response json-parsing error | ' + err);
                return null;
            }
        } else {
            console.log('Response status | ' + response?.status);
            return null;
        }
    }

    async getPosts(){
        try{
            const response = await fetch(`${this.#baseURL}/posts`);
            return await this.responseParsing(response);
        } catch(err){
            console.log('Response error | ' + err);
            return null;
        }
    }

    async signIn(login, password){
        try{
            const response = await fetch(
                `${this.#baseURL}/signin`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        login: login,
                        password: password
                    }),
                }
            );
            return await this.responseParsing(response);
        } catch(err){
            console.log('Response error | ' + err);
            return null;
        }
    }
}