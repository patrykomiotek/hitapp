import { useEffect, useState } from "react";
import { fetchProduct } from "../services/products";
import { ProductDto } from "../types";
import { useApi } from "../../../hooks/useApi";

type Props = {
  id: ProductDto["id"];
};

export const ProductsDetails = ({ id }: Props) => {
  const { data, isError, isLoading } = useApi<ProductDto | null>(() =>
    fetchProduct(id)
  );
  // const {} = useApi<AirtableResponse<ProductDto[]>>(fetchProducts);

  // const [data, setData] = useState<ProductDto | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const responseData = await fetchProduct(id);
  //       setData(responseData);
  //     } catch (error) {
  //       console.error(error);
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   loadData();
  // }, []);

  const renderProduct = () => {
    if (data) {
      return (
        <div>
          <h4>{data.fields.name}</h4>
          <p>
            {data.fields.description}, ${data.fields.price}
          </p>
          <br />
        </div>
      );
    }
    return <p>Not found</p>;
  };

  return (
    <div>
      <h2>One Product</h2>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no, an error!</p>}

      {renderProduct()}
    </div>
  );
};
