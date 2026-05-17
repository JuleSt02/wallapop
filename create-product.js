import { notificationsController } from "./notifications/notifications-controller.js"
import {loaderController} from "./loader/loader-controller.js"
import { newProductController } from "./create-product/create-product-controller.js"

const newProductData = document.querySelector('#create-product-form')
const notificationsContainer = document.querySelector('.notifications-container')
const buildNotification = notificationsController(notificationsContainer)
const loaderContainer = document.querySelector('.loader-container')
const {showLoader, hideLoader} = loaderController(loaderContainer)

newProductData.addEventListener('newProduct', buildNotification)
newProductController(newProductData)




