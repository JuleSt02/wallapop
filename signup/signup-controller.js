import { createUser } from "./signup-model.js";

export const signupController = (signupForm) => {
    
    signupForm.addEventListener('submit', async (event) => {
        //prevent automatic validation in browser
        event.preventDefault();



        //get data from form
        const formData = new FormData(signupForm)
        const email = formData.get('email')
        const password = formData.get('password')
        const passwordConfirm = formData.get('confirm-password')
         
        //validate email
        const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (!emailRegex.test(email)) {

            const emailError = new CustomEvent('invalidEmail', {
                detail: {
                    type:"error",
                    message:"Email is not valid"
                }
            })
            signupForm.dispatchEvent(emailError)
            return

        };
        
        if (password != passwordConfirm) {
             const passwordError = new CustomEvent('failedSignup',  {
                detail : {
                    type:"error",
                    message: "Passwords don´t match"
                }
             
            }) 
            signupForm.dispatchEvent(passwordError)
            return
            
                
            };

        //loader starts just after validation in case there are early returns
        const startedSignup = new CustomEvent('awaitSignUp')
        signupForm.dispatchEvent(startedSignup)

        try {

            await createUser({email, password})
                   
            //If data is valid: inform on successfull login
            const successfullSignUp = new CustomEvent('userCreated' ,{
              detail: {
                type: "success",
                message: "Sign up was successfull."
            }
            
        })

        //Redirect to index
            setTimeout(() =>  {
                window.location = '/'
            },1500)
            signupForm.dispatchEvent(successfullSignUp)

        //if model throws error, ex. user already created we will display the exact error message    
        } catch(error) {


            const failedSignUp = new CustomEvent('signUpError' , {
                detail: {
                    type:"error",
                    message: error.message
                }
            });
            signupForm.dispatchEvent(failedSignUp)

        } finally {
            const signupDone = new CustomEvent('finishSignup')
            signupForm.dispatchEvent(signupDone)
        }



})};