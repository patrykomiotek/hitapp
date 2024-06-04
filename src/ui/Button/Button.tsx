import { type MouseEventHandler, type ComponentProps } from "react";

type PaletteKey =
  | "carrot"
  | "alizarin"
  | "peter-river"
  | "clouds"
  | "midnight-blue";

// const palette: Record<PaletteKey, string> = {
//   carrot: "#e67e22",
//   alizarin: "#e74c3c",
//   "peter-river": "#3498db",
//   clouds: "#ecf0f1",
//   "midnight-blue": "#2c3e50",
//   // "sdhfkshdkfhk":
// };

const palette = {
  carrot: "#e67e22",
  alizarin: "#e74c3c",
  "peter-river": "#3498db",
  clouds: "#ecf0f1",
  "midnight-blue": "#2c3e50",
  yellow: "#ff0",
};

type Color = keyof typeof palette;

type Props = ComponentProps<"button"> & {
  label: string;
  // bgColor: PaletteKey;
  // color: PaletteKey;

  bgColor?: Color;
  color?: Color;

  // onClick?: MouseEventHandler<HTMLButtonElement>;
  // type?: "button" | "submit" | "reset";
};

export const Button = ({
  label,
  // onClick,
  color = "clouds",
  bgColor = "midnight-blue",
  // type = "button",
  ...rest
}: Props) => {
  const styles = {
    color: palette[color],
    backgroundColor: palette[bgColor],
  };

  return (
    <button style={styles} {...rest}>
      {label}
    </button>
  );
};
