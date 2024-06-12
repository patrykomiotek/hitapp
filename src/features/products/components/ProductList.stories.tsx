import type { Meta, StoryObj } from "@storybook/react";

import { ProductsList } from "./ProductsList";
import { ShopContextProvider } from "../../basket/components/ShopContext";
import { MemoryRouter } from "react-router-dom";
import { HttpResponse, http } from "msw";

const meta = {
  title: "Features/Products/ProductsList",
  component: ProductsList,
  // tags: ["autodocs"],
  // args: { onClick: fn() },
} satisfies Meta<typeof ProductsList>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const Default: Story = {};
export const _ProductList = () => (
  <MemoryRouter>
    <ShopContextProvider>
      <ProductsList />
    </ShopContextProvider>
  </MemoryRouter>
);

_ProductList.parameters = {
  msw: {
    handlers: [
      http.get("https://api.airtable.com/v0/appaJtXeMfWSfEGke/products", () => {
        return HttpResponse.json({
          records: [
            {
              id: "123",
              fields: {
                name: "Product 1",
                description: "Lorem ipsum",
                price: 123,
              },
            },
            {
              id: "125",
              fields: {
                name: "Product 2",
                description: "ipsum dolor",
                price: 55,
              },
            },
          ],
        });
      }),
    ],
  },
};
