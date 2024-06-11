import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { AirtableResponse, ProductDto } from "../types";
import { useApi } from "../../../hooks/useApi";

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
  const { data, isError, isLoading } =
    useApi<AirtableResponse<ProductDto[]>>(fetchProducts);

  // const [data, setData] = useState<ProductDto[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   // fetchProducts().then((data) => setData(data.records)).catch(error => console.error(error));

  //   const loadData = async () => {
  //     try {
  //       const responseData = await fetchProducts();
  //       setData(responseData.records);
  //     } catch (error) {
  //       console.error(error);
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   loadData();
  // }, []);

  return (
    <div>
      <h2>Products</h2>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no, an error!</p>}

      {data &&
        data.records.map((elem) => (
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
