import { createUser } from "./signup-model.js";

export const signupController = (signupForm) => {
    
    signupForm.addEventListener('submit', async (event) => {


        //prevent automatic validation in browser
        event.preventDefault();
        console.log("preventdefault executed ")

        //obtain data from form
        const form = new FormData(signupForm)
        const email = form.get('email')
        const password = form.get('password')
        const passwordConfirm = form.get('confirm-password')
         
        //validate email
        const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (!emailRegex.test(email)) {

            const emailError = new CustomEvent('invalidEmail', {
                detail: {
                    type:"error",
                    message:"Email is not valid"
                }
            })
            signupForm.dispatchEvent('emailError')
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

        try {

            await createUser({email, password})
                   
            //If data is valid: inform on logn
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

        //message of    
        } catch(error) {

            const failedSignUp = new CustomEvent('signUpError' , {
                detail: {
                    type:"error",
                    message: error.message
                }
            });
            signupForm.dispatchEvent(failedSignUp)
        }



})};