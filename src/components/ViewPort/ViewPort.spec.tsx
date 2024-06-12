import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ViewPort } from "./ViewPort";
import { useViewPort } from "../../hooks/useViewPort";

// jest.mock("../../hooks/useViewPort", () => ({
//   useViewPort: jest.fn(), // useViewPort -> undefined
// }));

vi.mock("../../hooks/useViewPort", () => ({
  // useViewPort: vi.fn().mockImplementation(() => ({ x: 100, y: 200 })),
  useViewPort: vi.fn(), // useViewPort -> undefined
}));

// jest only
const mockedUseViewPort = useViewPort as jest.Mock;
// const mockedUseViewPort = useViewPort as

describe("ViewPort component", () => {
  it("should display values", () => {
    // for the jest
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 100, y: 200 }));
    // for the vitest
    // const mock = vi.fn().mockImplementation(useViewPort);
    // mock.mockImplementationOnce(() => ({ x: 100, y: 200 }));

    const { debug } = render(<ViewPort />);
    debug();
    expect(screen.getByText(/x: 100, y: 200/i)).toBeInTheDocument();
  });
  it("should display different values", () => {
    // for the jest
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 300, y: 200 }));
    // const mock = vi.fn().mockImplementation(useViewPort);
    // mock.mockImplementationOnce(() => ({ x: 300, y: 200 }));
    const { debug } = render(<ViewPort />);
    expect(mockedUseViewPort).toHaveBeenCalledTimes(2);
    debug();
    expect(screen.getByText(/x: 300, y: 200/i)).toBeInTheDocument();
  });
});
