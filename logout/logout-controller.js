

export const logOutController = (buttonElement) => {

    buttonElement.addEventListener("click", (event) => {

        localStorage.removeItem("userToken");
        localStorage.removeItem("isLoggedIn");

        window.location = '/';
    })
};