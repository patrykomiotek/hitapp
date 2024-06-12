import { render, screen } from "@testing-library/react";
import { Stepper } from "./Stepper";

describe("Stepper component", () => {
  it("should display initial state", () => {
    const { debug } = render(<Stepper />);
    // debug();
    const element = screen.getByText("0");
    // expect()
    // console.log(element);
    expect(element).toBeInTheDocument(); // FIXME: ts
  });
});
