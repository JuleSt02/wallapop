import { productsPreview } from "./products/product-list-controller.js";
import {loaderController} from "./loader/loader-controller.js"
import { notificationsController } from "./notifications/notifications-controller.js";
import { authController } from "./auth/auth-controller.js";
import { logOutController } from "./logout/logout-controller.js";

//Nodes, containers
const productsContainer = document.querySelector('.products-container');
const loaderElement = document.querySelector("#loader")
const notificationContainer = document.querySelector('.notifications-container');
const buttonElement = document.querySelector('#logoutbutton')
const authNavContainer = document.querySelector('.authView');
const universalNavContainer = document.querySelector('.universalView');

const { showAuthNav, hideUniversalNav } = authController(authNavContainer, universalNavContainer);

    //deconstruct and define retsaurned functions
const {showLoader, hideLoader} = loaderController(loaderElement);

const buildNotification = notificationsController(notificationContainer);

//obtain loggedIn state
const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

if (isLoggedIn) {
    showAuthNav();
    hideUniversalNav();
}


//always define  event listeners before calling the function where the event lives
productsContainer.addEventListener("productsLoading", showLoader);

productsContainer.addEventListener("productsFailed", buildNotification);

productsContainer.addEventListener("productsLoaded", hideLoader);

productsPreview(productsContainer);

logOutController(buttonElement);


