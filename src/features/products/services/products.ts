import { AirtableResponse, ProductDto } from "../types";

// Vite
const API_URL = import.meta.env.VITE_API_URL;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

// Webpack
// create-react-app, prefix REACT_APP_
// custom: plugin

export const fetchProducts = (): Promise<AirtableResponse<ProductDto[]>> => {
  return fetch(`${API_URL}/products`, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Response error");
  });
};
