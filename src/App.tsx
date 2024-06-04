import { useState } from "react";

import "./App.css";
import { Button, Text } from "./ui";
import { Generator } from "./components/Generator";
import {
  RegistrationFormState,
  RegistrationFormForwardRef,
} from "./components/Form";
import { RegistrationFormRefs } from "./components/Form/RegistrationFormRefs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RegistrationFormForwardRef />
      {/* <RegistrationFormState /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <Generator /> */}

      {/* <Text>Today is Monday</Text>
      <Button label="One" bgColor="carrot" color="clouds" />
      <Button label="Two" bgColor="clouds" color="carrot" />
      <Button label="Three" bgColor="peter-river" color="clouds" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  );
}

export default App;
