import { loaderController } from "../loader/loader-controller.js";
import { loginUser } from "./login-model.js";



export const loginController = (loginForm) => {

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const startedLogin = new CustomEvent('awaitLogin')
        loginForm.dispatchEvent(startedLogin)


        const formData = new FormData(loginForm);
        const email =  formData.get('email');
        const password = formData.get('password');

        try {
            //receive token from model
           const token = await loginUser({email,password})
            //store token for global acess within app
            localStorage.setItem("userToken", token)
            const loginOk = new CustomEvent('loginSuccessfull', {
                detail: {
                type:"success",
                message:"Login was successfull"
            }}
            )

            //Redirect
            setTimeout(() => {
                window.location = '/'
            
            },1500);
             loginForm.dispatchEvent(loginOk)
             //store loegged in state
             localStorage.setItem("isLoggedIn", "true")
 
        } catch(error) {
            const failedLogin = new CustomEvent('loginUnsuccessfull', {
                detail: {
                type: "error",
                message: error.message
            }
            })
            loginForm.dispatchEvent(failedLogin)
        } finally {
            const loginDone = new CustomEvent('finishLogin')
            loginForm.dispatchEvent(loginDone)
        }


    })
};