
export const authController = (authNav, universalNav) => {

    const showAuthNav = () => {
        authNav.classList.remove('hidden');
    };

    const hideUniversalNav = () => {
        universalNav.classList.add('hidden');
    };

    return {
        showAuthNav,
        hideUniversalNav
    };
};