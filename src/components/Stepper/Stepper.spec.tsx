import { fireEvent, render, screen } from "@testing-library/react";
import { Stepper } from "./Stepper";

describe("Stepper component", () => {
  it("should display initial state", () => {
    const { debug } = render(<Stepper />);
    // debug();
    const element = screen.getByText("0");
    // expect()
    // console.log(element);
    expect(element).toBeInTheDocument();
  });

  it("should decrease value", () => {
    render(<Stepper />);

    const element = screen.getByRole("button", { name: /decrease/i });
    fireEvent.click(element);
    fireEvent.click(element);

    expect(screen.getByText("-2")).toBeInTheDocument();
  });
});
