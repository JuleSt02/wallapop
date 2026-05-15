

export const buildProduct = (product) => {

    const transformedProducts = document.createElement('div')
    transformedProducts.classList.add('product')

    transformedProducts.innerHTML = `
        <h4>${product.type}</h4>
        <h5>${product.name}</h5>
        <p>${product.price}</p>
        
    `
    
    return transformedProducts

    //another option :
    // variable.textContent = content
    //div.appendChild(variable);

};

