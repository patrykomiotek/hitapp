import { fireEvent, render, screen } from "@testing-library/react";
import { AuthCredentials } from "./AuthCredentials";
import { AuthContextProvider } from "./AuthContext";

describe("AuthCredentials component", () => {
  it("should toggle values", () => {
    const { debug } = render(
      <AuthContextProvider>
        <AuthCredentials />
      </AuthContextProvider>
    );
    // debug();
    expect(screen.getByText(/is user logged: no/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/is user logged: yes/i)).toBeInTheDocument();
  });
});
