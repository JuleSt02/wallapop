import { displayNotification } from "./notification-view.js";

export const notificationsController = (notificationsContainer) => {

    const buildNotification = (userNotification) => {
            const notification = displayNotification(userNotification);
            notificationsContainer.appendChild(notification);

    }

    return buildNotification

}