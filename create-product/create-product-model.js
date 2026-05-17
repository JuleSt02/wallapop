

export const createProduct = async (newProduct) => {
  
  const url = 'http://localhost:8000/api/products';
  const token = localStorage.getItem('userToken');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`,
    },
    body: JSON.stringify(newProduct)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  } else {
    return data;
  }
};
