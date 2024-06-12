import { fireEvent, render, screen } from "@testing-library/react";
import { Generator } from "./Generator";

describe("Generator component", () => {
  it("should generate different values", () => {
    const { debug } = render(<Generator />);
    debug();

    // const id = screen.getByRole("paragraph").textContent;
    const id = screen.getByText(/[a-z0-9-]{36}/i).textContent;

    fireEvent.click(screen.getByRole("button"));

    // const nextId = screen.getByRole("paragraph").textContent;
    const nextId = screen.getByText(/[a-z0-9-]{36}/i).textContent;

    const paragraphs = screen.getAllByRole("paragraph");

    expect(nextId).not.toBe(id);
    expect(paragraphs.length).toEqual(2);
  });
});
