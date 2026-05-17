export const printProductDetail = (product, productDetailContainer) => {
  const productImage = productDetailContainer.querySelector(".product-image");
  const productName = productDetailContainer.querySelector(".product-name");
  const productDescription = productDetailContainer.querySelector(".product-description");
  const productPrice = productDetailContainer.querySelector(".product-price");
  const productType = productDetailContainer.querySelector(".product-type");

  productName.textContent = product.name;
  productDescription.textContent = product.description;
  productPrice.textContent = `${product.price} €`;
  productType.textContent = product.type;

  if (product.image) {
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.classList.remove("hidden");
  }
};