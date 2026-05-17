import { loginController } from "./login/login-controller.js"
import { notificationsController } from "./notifications/notifications-controller.js"
import {loaderController} from "./loader/loader-controller.js"

const loginForm = document.querySelector('#login-form')
const notificationsContainer = document.querySelector('.notifications-container')
const buildNotification = notificationsController(notificationsContainer)
const loaderContainer = document.querySelector('.loader-container')
const {showLoader, hideLoader} = loaderController(loaderContainer)

loginForm.addEventListener('awaitLogin', showLoader)
loginForm.addEventListener('finishedLogin', hideLoader)
loginForm.addEventListener('loginSuccessfull', buildNotification)
loginForm.addEventListener('loginUnsuccessfull', buildNotification)
loginController(loginForm)