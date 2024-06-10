import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import { Input } from "./Input";

const meta = {
  title: "UI/Molecules/Input",
  component: Input,
  // tags: ["autodocs"],
  // args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
  },
};
export const Email: Story = {
  args: {
    label: "E-mail",
    type: "email",
  },
};

export const NumberField: Story = {
  args: {
    label: "Choose number",
    type: "number",
  },
};
