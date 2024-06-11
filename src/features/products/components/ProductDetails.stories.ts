import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ProductsDetails } from "./ProductsDetails";

const meta = {
  title: "Features/Products/ProductsDetails",
  component: ProductsDetails,
  // tags: ["autodocs"],
  // args: { onClick: fn() },
} satisfies Meta<typeof ProductsDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "recVhBqT4hXbvSogN",
  },
};
