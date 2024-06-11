import { useReducer } from "react";
import { Button } from "../../ui";

type State = {
  count: number;
};

enum ActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

// provide descriminated union
type Action = {
  type: ActionType;
};

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Button
        label="Decrease"
        onClick={() => dispatch({ type: ActionType.DECREMENT })}
      />
      <span>{state.count}</span>
      <Button
        label="Increase"
        onClick={() => dispatch({ type: ActionType.INCREMENT })}
      />
    </div>
  );
};
