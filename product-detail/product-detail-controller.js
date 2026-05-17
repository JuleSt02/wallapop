import { getProductById, getLoggedUserInfo, removeProduct } from "./product-detail-model.js";
import { printProductDetail } from "./product-detail-view.js";

export const productDetailController = async (productDetailContainer) => {
  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get("id");

  if (!productId) {
    alert("Product does not exist");
    window.location = "/";
    return;
  }

  const startedLoading = new CustomEvent("productDetailLoading");
  productDetailContainer.dispatchEvent(startedLoading);

  try {
    const product = await getProductById(productId);

    printProductDetail(product, productDetailContainer);

    const token = localStorage.getItem("userToken");

    if (token) {
      const loggedUser = await getLoggedUserInfo();

      if (loggedUser.id === product.userId) {
        const deleteButton = productDetailContainer.querySelector(".delete-product-button");
        deleteButton.classList.remove("hidden")

        deleteButton.addEventListener("click", async () => {
          const deleteProduct = window.confirm("Do you really want to delete this product?");

          if (deleteProduct) {
            try {
              await removeProduct(product.id);
              window.location = "/";
            } catch (error) {
              alert(error.message);
            }
          }
        });
      }
    }

  } catch (error) {
    alert(error.message);
  } finally {
    const finishedLoading = new CustomEvent("productDetailFinished");
    productDetailContainer.dispatchEvent(finishedLoading)
  }
};