import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "UI/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const Red: Story = {
  args: {
    label: "Button",
    bgColor: "carrot",
    color: "clouds",
  },
};

export const Blue: Story = {
  args: {
    label: "Button",
    bgColor: "peter-river",
    color: "carrot",
  },
};
