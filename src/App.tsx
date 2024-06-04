import { MouseEventHandler, useEffect, useRef, useState } from "react";

import "./App.css";
import { Button, MagicButton, Text } from "./ui";
import { Generator } from "./components/Generator";
import {
  RegistrationFormState,
  RegistrationFormForwardRef,
} from "./components/Form";
import { RegistrationFormRefs } from "./components/Form/RegistrationFormRefs";
import { RegistrationFormHookForm } from "./components/Form";
import { FormContainer } from "./components/Form/FormContainer";

function App() {
  // const [count, setCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#f00";
      buttonRef.current.style.color = "#fff";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#0f0";
    }
  };
  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#00f";
    }
  };

  return (
    <>
      <FormContainer />
      {/* <MagicButton
        ref={buttonRef}
        label="Click me"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      /> */}
      {/* <RegistrationFormHookForm /> */}
      {/* <RegistrationFormForwardRef /> */}
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
