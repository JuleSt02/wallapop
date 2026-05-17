
export const getProductById = async (productId) => {
 
  const url = `http://localhost:8000/api/products/${productId}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Product doesn´t exist");
  }

  return data;
};

export const getLoggedUserInfo = async () => {
  const url = "http://localhost:8000/auth/me";
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `bearer ${token}`
    }
  });

  const data = await response.json();

  return data;
};

export const removeProduct = async (productId) => {
  const url = `http://localhost:8000/api/products/${productId}`;
  const token = localStorage.getItem("userToken");

  await fetch(url, {
    method: "DELETE",
    headers: {
      "Authorization": `bearer ${token}`
    }
  });
};