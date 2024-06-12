import { render } from "@testing-library/react";
import { Button } from "./Button";
import { axe } from "jest-axe";

// vitest + react testing library

describe("Button component", () => {
  it("should render correctly", () => {
    render(<Button label="Click me" />);
    // make an assertion
    // provide callback and check number of calls of this callback
  });
  it("it should not have violations", async () => {
    const { container, debug } = render(<Button label="Click me" />);
    const result = await axe(container);
    // console.log(container);
    // debug();
    expect(result).toHaveNoViolations();
  });
});
