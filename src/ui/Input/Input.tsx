import {
  ComponentPropsWithRef,
  useId,
  forwardRef,
  type ForwardedRef,
} from "react";
import { FieldError } from "react-hook-form";

type Props = ComponentPropsWithRef<"input"> & {
  label: string;
  error?: FieldError;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { label, error, ...rest },
    ref
    // ref: ForwardedRef<HTMLInputElement>
  ) => {
    const id = useId();

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} id={id} {...rest} />
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
);
