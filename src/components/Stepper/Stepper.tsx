import { KeyboardEventHandler, useReducer, useRef } from "react";
import { Button, Input } from "../../ui";

type State = {
  count: number;
};

export enum ActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  SET_VALUE = "set-value",
}

// provide descriminated union
type Action = {
  type: ActionType;
  payload?: number;
};

const initialState: State = { count: 0 };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    case ActionType.SET_VALUE:
      if (action.payload) {
        return { count: action.payload };
      }
      return state;
    default:
      return state;
  }
};

const increase = () => ({ type: ActionType.INCREMENT });
const decrease = () => ({ type: ActionType.DECREMENT });
const setValue = (value: number) => ({
  type: ActionType.SET_VALUE,
  payload: value,
});

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const valueFieldRef = useRef<HTMLInputElement>(null);

  const handleOnKeyEvent: KeyboardEventHandler<HTMLInputElement> = (event) => {
    // console.log({ event: event.key });
    if (valueFieldRef.current) {
      const value = parseInt(valueFieldRef.current.value, 10) || 0;

      if (event.key === "Enter") {
        dispatch(setValue(value));
      }
    }
  };

  return (
    <div>
      <Button label="Decrease" onClick={() => dispatch(decrease())} />
      <span>{state.count}</span>
      <Button label="Increase" onClick={() => dispatch(increase())} />
      <Input label="Value" ref={valueFieldRef} onKeyDown={handleOnKeyEvent} />
    </div>
  );
};
