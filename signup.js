import { signupController } from "./signup/signup-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";
import {loaderController} from "./loader/loader-controller.js"

const signupForm = document.querySelector('#signup-form');
const notificationsContainer = document.querySelector('.notifications-container')
const buildNotification = notificationsController(notificationsContainer)
const loaderContainer = document.querySelector('.loader-container')
const {showLoader, hideLoader} = loaderController(loaderContainer)
 
signupForm.addEventListener('awaitSignUp', showLoader)
signupForm.addEventListener('finishSignup', hideLoader)
signupForm.addEventListener('failedSignup', buildNotification)
signupForm.addEventListener('invalidEmail', buildNotification)
signupForm.addEventListener('userCreated', buildNotification)
signupForm.addEventListener('signUpError', buildNotification)

signupForm.addEventListener('failedSignup',buildNotification)
signupForm.addEventListener('invalidEmail', buildNotification)
signupForm.addEventListener('userCreated', buildNotification)
signupForm.addEventListener('signUpError', buildNotification)


signupController(signupForm)