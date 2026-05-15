import { getProducts } from "./product-list-model.js"
import { buildProduct} from "./product-list-view.js";

export const productsPreview =  async (productsContainer) => {
    
    try { 
        const startedLoading = new CustomEvent("productsLoading")
        productsContainer.dispatchEvent(startedLoading)
        const products = await getProducts();
        
        //setTimeOut alone doesn´t pause code execution
        //await pauses async function until Promise is settled
        const loaderPause = await pause(3000)
        showProducts(productsContainer, products)
       
    } catch(error) {
        const failedLoading = new CustomEvent("productsFailed", {
            detail: {
                message: "Couldn´t load products",
                type: "error"
            }

        }
    )
        productsContainer.dispatchEvent(failedLoading)
        
    }
    finally {
        const finishedLoading = new CustomEvent("productsLoaded")
        productsContainer.dispatchEvent(finishedLoading)
        
    }

};

const showProducts = (productsContainer, products) => {
        products.forEach((product) => {
        const newProductElement = buildProduct(product);
        productsContainer.appendChild(newProductElement)

})};

const pause = (timeInMs) => {

    //to create delauy wrap setTimeOut around promise
    const promise = new Promise((resolve) => {

        setTimeout(() =>{
            resolve()}, timeInMs)
});
    return promise

};  