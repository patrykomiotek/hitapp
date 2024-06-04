import { MouseEventHandler, forwardRef } from "react";

type Props = {
  label: string;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
};

const styles = {
  backgroundColor: "#00f",
  color: "#000",
};

export const MagicButton = forwardRef<HTMLButtonElement, Props>(
  ({ label, onMouseEnter, onMouseLeave }, ref) => {
    return (
      <button
        ref={ref}
        style={styles}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
      </button>
    );
  }
);
