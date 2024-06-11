import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { AirtableResponse, ProductDto } from "../types";
import { useApi } from "../../../hooks/useApi";
import { Button } from "../../../ui";
import { useShopContext } from "../../basket/components/ShopContext";
import { Link } from "react-router-dom";
import { Route } from "../../../routes";

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
  const context = useShopContext();

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
      <Link to={Route.CREATE_PRODUCT.path}>Create product</Link>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no, an error!</p>}

      {data &&
        data.records.map((elem) => (
          <div key={elem.id}>
            <h4>
              <Link to={`/products/${elem.id}`}>{elem.fields.name}</Link>
            </h4>
            <p>
              {elem.fields.description}, ${elem.fields.price}
            </p>
            <br />
            <Button
              label="Add to basket"
              onClick={() => context.addToBasket(elem)}
            />
            <Button
              label="Remove from the basket"
              onClick={() => context.removeFromBasket(elem.id)}
            />
          </div>
        ))}
    </div>
  );
};
