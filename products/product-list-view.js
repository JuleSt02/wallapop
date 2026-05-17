export const buildProduct = (product) => {
    const transformedProducts = document.createElement('a');

    transformedProducts.classList.add('product');
    transformedProducts.setAttribute('href', `product-detail.html?id=${product.id}`);

    transformedProducts.innerHTML = `
        <h4>${product.type}</h4>
        <h5>${product.name}</h5>
        <p>${product.price}</p>
        <p>${product.description}</p>

        ${
            product.image
                ? `<img src="${product.image}" alt="${product.name}">`
                : ''
        }
    `;

    return transformedProducts;
};

    //another option :
    // variable.textContent = content
    //div.appendChild(variable);



