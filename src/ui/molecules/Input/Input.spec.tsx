import { render } from "@testing-library/react";
import { Input } from "./Input";
import { axe } from "jest-axe";

describe("Input component", () => {
  it("it should not have violations", async () => {
    const { container } = render(<Input label="Type something" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
