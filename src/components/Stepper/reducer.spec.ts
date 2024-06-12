import { ActionType, reducer } from "./Stepper";

describe("Stepper reducer", () => {
  it("should return default state", () => {
    const initialState = { count: 0 };

    const result = reducer(initialState, { type: ActionType.SET_VALUE });

    // === toBe
    // == toEqual
    expect(result).toStrictEqual(initialState);
  });

  it("should increase", () => {
    const initialState = { count: 0 };

    const result = reducer(initialState, { type: ActionType.INCREMENT });

    // === toBe
    // == toEqual
    expect(result).toStrictEqual({ count: 1 });
  });
});
