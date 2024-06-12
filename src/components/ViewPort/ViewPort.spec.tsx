import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ViewPort } from "./ViewPort";

// jest.mock('../../hooks/useViewPort', () => {
vi.mock("../../hooks/useViewPort", () => ({
  useViewPort: vi.fn().mockImplementation(() => ({ x: 100, y: 200 })),
}));

describe("ViewPort component", () => {
  it("should display values", () => {
    const { debug } = render(<ViewPort />);
    debug();
    // expect(screen.getByText(/x: 1024, y: 768/i)).toBeInTheDocument();
    expect(screen.getByText(/x: 100, y: 200/i)).toBeInTheDocument();
  });
});
