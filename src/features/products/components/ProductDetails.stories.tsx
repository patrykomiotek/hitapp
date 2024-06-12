import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ProductsDetails } from "./ProductsDetails";
import { ShopContextProvider } from "../../basket/components/ShopContext";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Features/Products/ProductsDetails",
  component: ProductsDetails,
  // tags: ["autodocs"],
  // args: { onClick: fn() },
} satisfies Meta<typeof ProductsDetails>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const _ProductDetails = () => (
  <MemoryRouter>
    <ShopContextProvider>
      <ProductsDetails id="recVhBqT4hXbvSogN" />
    </ShopContextProvider>
  </MemoryRouter>
);
