import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ProductsList } from "./ProductsList";
import { ShopContextProvider } from "../../basket/components/ShopContext";

describe("ProductList component", () => {
  it("should display products", async () => {
    const { debug } = render(
      <MemoryRouter initialEntries={["/", "/products"]}>
        <ShopContextProvider>
          <ProductsList />
        </ShopContextProvider>
      </MemoryRouter>
    );
    // debug();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(await screen.findByText(/product 1/i)).toBeInTheDocument();
    // debug();
  });
});
