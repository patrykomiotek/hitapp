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
import { ViewPort } from "./components/ViewPort";
import { Counter } from "./components/Counter";
import { AuthInfo } from "./components/Auth/AuthInfo";
import {
  AuthContext,
  AuthContextProvider,
} from "./components/Auth/AuthContext";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ProductsList } from "./features/products/components/ProductsList";
import { ProductsDetails } from "./features/products/components/ProductsDetails";
import { ShopContextProvider } from "./features/basket/components/ShopContext";
import { ShoppingCart } from "./features/basket/components/ShoppingCart";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Stepper } from "./components/Stepper";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   // log on console

  //   if (count !== sth) {
  //     // logic 1
  //   } else if (value1) {
  //     // logic 2
  //   }

  // }, [count, value1, value2, setCount]);

  // useEffect(() => {}, [count]);
  // useEffect(() => {}, [value1, vlaue2]);

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
      <ThemeProvider>
        {/* <ThemeSwitcher /> */}
        <AuthContextProvider>
          <ShopContextProvider>
            <ShoppingCart />
            <Stepper />
            <RouterProvider router={router} />
            {/* <ProductsDetails id="recVhBqT4hXbvSogN" /> */}
            {/* <ProductsList /> */}

            {/* <Text>Hello from text</Text>
          <AuthInfo /> */}
          </ShopContextProvider>
        </AuthContextProvider>
      </ThemeProvider>

      {/* <ErrorBoundary fallback={<p>Auth info error, try again</p>}>
        <AuthInfo />
      </ErrorBoundary> */}

      {/* <Counter /> */}
      {/* <ViewPort /> */}
      {/* <FormContainer /> */}
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
