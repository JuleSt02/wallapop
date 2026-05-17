import { productDetailController } from "./product-detail/product-detail-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";
import { loaderController } from "./loader/loader-controller.js";
import { authController } from "./auth/auth-controller.js";

const productDetailContainer = document.querySelector(".product-detail");
const notificationsContainer = document.querySelector(".notifications-container");
const buildNotification = notificationsController(notificationsContainer);
const loaderContainer = document.querySelector(".loader-container");
const { showLoader, hideLoader } = loaderController(loaderContainer);


productDetailContainer.addEventListener("productDetailLoading", showLoader);
productDetailContainer.addEventListener("productDetailFinished", hideLoader);

productDetailController(productDetailContainer);