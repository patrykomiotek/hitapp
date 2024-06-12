import { vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { ProductsDetails } from "./ProductsDetails";
import { useApi } from "../../../hooks/useApi";
import { ShopContextProvider } from "../../basket/components/ShopContext";

vi.mock("../../../hooks/useApi");

describe("ProductDetails component", () => {
  it("should display Loading indicator", async () => {
    vi.mocked(useApi).mockReturnValueOnce({
      // mockResolvedValue or mockRejectedValue
      data: undefined,
      isLoading: true,
      isError: false,
    });
    const { debug } = render(
      <ShopContextProvider>
        <ProductsDetails id="qwerty" />
      </ShopContextProvider>
    );
    // debug();
    expect(await screen.findByText(/loading/i));
  });
  it("should display Error indicator", async () => {
    vi.mocked(useApi).mockReturnValueOnce({
      // mockResolvedValue or mockRejectedValue
      data: undefined,
      isLoading: false,
      isError: true,
    });
    const { debug } = render(
      <ShopContextProvider>
        <ProductsDetails id="qwerty" />
      </ShopContextProvider>
    );
    // debug();
    expect(await screen.findByText(/oh no, an error!/i));
  });
  it("should display data inside component", async () => {
    vi.mocked(useApi).mockReturnValueOnce({
      // mockResolvedValue or mockRejectedValue
      data: {
        id: "sdjflksdjf",
        fields: {
          name: "One product",
          description: "lorem ipsum",
          price: 123,
        },
      },
      isLoading: false,
      isError: false,
    });
    const { debug } = render(
      <ShopContextProvider>
        <ProductsDetails id="qwerty" />
      </ShopContextProvider>
    );
    debug();
    expect(await screen.findByText(/One product/i));
    expect(await screen.findByText(/lorem ipsum, \$123/i));
    // expect(await screen.findByText("lorem ipsum, $123")); // it wont work in older versions of testing library
  });
});
