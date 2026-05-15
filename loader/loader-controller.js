export const loaderController = (loaderElement) => {


     const showLoader = () => {
     loaderElement.classList.remove('hidden')

};

     const hideLoader = () => {
        loaderElement.classList.add('hidden')

    };

    return {
        showLoader,
        hideLoader
    }

}

