import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { ProductDto } from "../types";

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

export const ProductsList = () => {
  const [data, setData] = useState<ProductDto[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setData(data.records));
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
