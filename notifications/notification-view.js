

export const displayNotification = (userNotification) => {

    const notification = document.createElement('div');
    notification.classList.add('notification')

      if (userNotification.detail.type === 'error'){
        notification.classList.add('error')
    } else if (userNotification.detail.type === 'success'){
        notification.classList.add('success')
    };

    notification.innerHTML = 
       `<p>${userNotification.detail.message}</p>`
    


    return notification
    
}