import { productsPreview } from "./products/product-list-controller.js";
import {loaderController} from "./loader/loader-controller.js"
import { notificationsController } from "./notifications/notifications-controller.js";

//Nodes, containers
const productsContainer = document.querySelector('.products-container');
const loaderElement = document.querySelector("#loader")
const notificationContainer = document.querySelector('.notifications-container');


//deconstruct and define retsaurned functions
const {showLoader, hideLoader} = loaderController(loaderElement)

const buildNotification = notificationsController(notificationContainer)

//always define  event listeners before calling the function where the event lives
productsContainer.addEventListener("productsLoading", showLoader);

productsContainer.addEventListener("productsFailed", buildNotification)

productsContainer.addEventListener("productsLoaded", hideLoader);

productsPreview(productsContainer);


