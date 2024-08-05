class APIRequests{
    #baseURL;
    constructor(){
        this.#baseURL = "http://localhost:8000"; // server address
    }

    async getPosts(){
        try{
            const response = await fetch(`${this.#baseURL}/posts`);

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
        } catch(err){
            console.log('Response error | ' + err);
            return null;
        }
    }
}