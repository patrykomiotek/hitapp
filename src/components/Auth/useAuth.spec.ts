import { renderHook, act } from "@testing-library/react";
import { useAuth } from "./AuthContext";

describe("useAuth hook", () => {
  it("should change values", () => {
    // const value = useAuth();
    const { result } = renderHook(() => useAuth());

    expect(result.current.isUserLogged).toBeFalsy();
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isUserLogged).toBeTruthy();
  });
});
