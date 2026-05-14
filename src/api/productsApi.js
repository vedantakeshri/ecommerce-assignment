import axios from "axios";

const BASE_URL =
  "https://api.escuelajs.co/api/v1";

export const getProducts = async (
  category = ""
) => {
  let url = `${BASE_URL}/products`;

  if (category) {
    url = `${BASE_URL}/categories/${category}/products`;
  }

  const response = await axios.get(url);

  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(
    `${BASE_URL}/categories`
  );

  return response.data;
};