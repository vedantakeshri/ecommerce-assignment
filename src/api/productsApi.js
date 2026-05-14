import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getProducts = async (categoryId = "") => {
  let url = `${BASE_URL}/products`;

  if (categoryId) {
    url = `${BASE_URL}/categories/${categoryId}/products`;
  }

  const response = await axios.get(url);

  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);

  return response.data;
};