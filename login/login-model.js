

export const loginUser = async (userData) => {
    

    const url = 'http://localhost:8000/auth/login'

    const response = await fetch(url, {
        

        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({

            //api contract, expected datatype
            username: userData.email,
            password: userData.password
        })
    })

    const data = await response.json()
    //get info from endpoint if the request is unsuccessfull, return token i
    if (!response.ok) {
        throw new Error(data.message)
    } else {

        return data.accessToken;
    }
        
     

}