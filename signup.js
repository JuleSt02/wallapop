import { signupController } from "./signup/signup-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";

const signupForm = document.querySelector('form');

const notificationContainer = document.querySelector('.notifications-container')
const buildNotification = notificationsController(notificationContainer)


signupForm.addEventListener('failedSignup',buildNotification)
signupForm.addEventListener('invalidEmail', buildNotification)
signupForm.addEventListener('userCreated', buildNotification)
signupForm.addEventListener('signUpError', buildNotification)
signupController(signupForm)