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

// type Story = StoryObj<typeof meta>;

// export const Default: Story = {};
export const _ProductListWithResolvedData = () => (
  <MemoryRouter>
    <ShopContextProvider>
      <ProductsList />
    </ShopContextProvider>
  </MemoryRouter>
);

_ProductListWithResolvedData.parameters = {
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

export const _ProductListWith404 = () => (
  <MemoryRouter>
    <ShopContextProvider>
      <ProductsList />
    </ShopContextProvider>
  </MemoryRouter>
);

_ProductListWith404.parameters = {
  msw: {
    handlers: [
      http.get("https://api.airtable.com/v0/appaJtXeMfWSfEGke/products", () => {
        return HttpResponse.json({}, { status: 404 });
      }),
    ],
  },
};

export const _ProductListWith500 = () => (
  <MemoryRouter>
    <ShopContextProvider>
      <ProductsList />
    </ShopContextProvider>
  </MemoryRouter>
);

_ProductListWith500.parameters = {
  msw: {
    handlers: [
      http.get("https://api.airtable.com/v0/appaJtXeMfWSfEGke/products", () => {
        return HttpResponse.json(null, { status: 500 });
      }),
    ],
  },
};

export const _ProductListWithBrokenEndpoint = () => (
  <MemoryRouter>
    <ShopContextProvider>
      <ProductsList />
    </ShopContextProvider>
  </MemoryRouter>
);

// _ProductListWithBrokenEndpoint.parameters = {
//   msw: {
//     handlers: [
//       http.get("https://api.airtable.com/sdfsdf", () => {
//         return HttpResponse.json(null, { status: 500 });
//       }),
//     ],
//   },
// };
