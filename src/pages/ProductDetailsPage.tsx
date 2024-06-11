import { useParams } from "react-router-dom";
import { ProductsDetails } from "../features/products/components/ProductsDetails";

export const ProductDetailsPage = () => {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <h1>Products details</h1>
      {params.id && <ProductsDetails id={params.id} />}
    </div>
  );
};
