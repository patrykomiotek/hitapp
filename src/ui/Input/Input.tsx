import {
  ComponentPropsWithRef,
  useId,
  forwardRef,
  type ForwardedRef,
} from "react";

type Props = ComponentPropsWithRef<"input"> & {
  label: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { label, ...rest },
    ref
    // ref: ForwardedRef<HTMLInputElement>
  ) => {
    const id = useId();

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} id={id} {...rest} />
      </div>
    );
  }
);
