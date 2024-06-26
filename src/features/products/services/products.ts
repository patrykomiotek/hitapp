import { AirtableResponse, ProductDto } from "../types";

// Vite
const API_URL = import.meta.env.VITE_API_URL;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

// Webpack
// create-react-app, prefix REACT_APP_
// custom: plugin

const headers = {
  Authorization: `Bearer ${AIRTABLE_TOKEN}`,
  "content-type": "application/json",
};

export const fetchProducts = (): Promise<AirtableResponse<ProductDto[]>> => {
  return fetch(`${API_URL}/products`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      // TODO: parse using zod
      // 1. create validation schema (productsSchema)
      // 2. parse / safeParse / parseAsync / safeParseAsync (productsSchema.parseAsync(response.json))
      // 3. depending on the result -> response or an error
      return response.json();
    }
    throw new Error("Response error");
  });
};

export const fetchProduct = (id: ProductDto["id"]): Promise<ProductDto> => {
  return fetch(`${API_URL}/products/${id}`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Response error");
  });
};

export const createProduct = (
  product: ProductDto["fields"]
): Promise<ProductDto> => {
  return fetch(`${API_URL}/products`, {
    headers,
    method: "POST",
    body: JSON.stringify({ records: [{ fields: product }] }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Response error");
  });
};
