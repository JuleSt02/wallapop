

export const createUser = async (userData) => {

    const url = 'http://localhost:8000/auth/register'

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

}