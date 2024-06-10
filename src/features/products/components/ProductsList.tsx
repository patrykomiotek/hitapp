import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    fields: {
      name: "Product 1",
      description: "Lorem",
      price: 123,
    },
  },
  {
    id: 2,
    fields: {
      name: "Product 2",
      description: "Lorem",
      price: 5555,
    },
  },
  {
    id: 4,
    fields: {
      name: "Product 4",
      description: "Lorem",
      price: 444,
    },
  },
];

// Vite
const API_URL = import.meta.env.VITE_API_URL;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

// Webpack
// create-react-app, prefix REACT_APP_
// custom: plugin

type ProductDto = {
  id: number;
  fields: {
    name: string;
    description: string;
    price: number;
  };
};

export const ProductsList = () => {
  const [data, setData] = useState<ProductDto[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Response error");
      })
      .then((data) => {
        // console.log({ data });
        // setData
        setData(data.records);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {data.map((elem) => (
        <div key={elem.id}>
          <h4>{elem.fields.name}</h4>
          <p>
            {elem.fields.description}, ${elem.fields.price}
          </p>
          <br />
        </div>
      ))}
    </div>
  );
};
