import { fetchProduct } from "../services/products";
import { ProductDto } from "../types";
import { useApi } from "../../../hooks/useApi";
import { useShopContext } from "../../basket/components/ShopContext";
import { Button } from "../../../ui";
import { Route } from "../../../routes";
import { Link } from "react-router-dom";

type Props = {
  id: ProductDto["id"];
};

export const ProductsDetails = ({ id }: Props) => {
  const { data, isError, isLoading } = useApi<ProductDto | null>(() =>
    fetchProduct(id)
  );
  const context = useShopContext();
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

  const renderProduct = (elem: ProductDto) => {
    return (
      <div>
        <h1>{elem.fields.name}</h1>
        <p>
          {elem.fields.description}, ${elem.fields.price}
        </p>
        <Button
          label="Add to basket"
          onClick={() => context.addToBasket(elem)}
        />
        <Button
          label="Remove from the basket"
          onClick={() => context.removeFromBasket(elem.id)}
        />
      </div>
    );
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no, an error!</p>}

      {data && renderProduct(data)}
    </div>
  );
};
