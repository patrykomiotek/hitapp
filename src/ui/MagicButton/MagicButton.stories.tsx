import type { Meta, StoryObj } from "@storybook/react";

import { MagicButton } from "./MagicButton";
import { MouseEventHandler, useEffect, useRef } from "react";

const meta = {
  title: "UI/MagicButton",
  // tags: ["autodocs"],
  component: MagicButton,
} satisfies Meta<typeof MagicButton>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const Default = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#f00";
      buttonRef.current.style.color = "#fff";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#0f0";
    }
  };
  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#00f";
    }
  };

  return (
    <MagicButton
      ref={buttonRef}
      label="Click me"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
