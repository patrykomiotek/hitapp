import { useShopContext } from "./ShopContext";

export const ShoppingCart = () => {
  const context = useShopContext();

  return (
    <div>
      <p>Items: {context.amount} </p>
      {context.products.map((elem) => (
        <div key={elem.id}>
          <p>
            {elem.fields.name}, ${elem.fields.price}
          </p>
        </div>
      ))}
    </div>
  );
};
