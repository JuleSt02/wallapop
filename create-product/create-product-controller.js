import { createProduct } from "./create-product-model.js"


export const newProductController = (newProductData) => {
    
        newProductData.addEventListener('submit', async (event) => {
        
        event.preventDefault();
   
        const token = localStorage.getItem("userToken")
        console.log(token)

        if(token) {
            
            const formData = new FormData(newProductData);
            const name = formData.get("name");
            const price = Number(formData.get("price"));
            const type = formData.get("type");
            const description = formData.get("description");
            const image = formData.get("image");

             try {
               await createProduct({name, price, type, description, image})
               const productCreated = new CustomEvent('newProduct', {
                detail : {
                    type: "success",
                    message : "Product has been created successfully"
                }
               })
               newProductData.dispatchEvent(productCreated);
                    setTimeout(() => {
                      window.location = "/";
                        }, 1500);

             } catch(error) {
                alert(error.message)

             }
            

        }

    })
}