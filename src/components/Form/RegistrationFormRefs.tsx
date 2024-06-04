import { ChangeEventHandler, FormEventHandler, useRef } from "react";
import { Button, Text } from "../../ui";

// RegistrationFormRefs
// RegistrationFormHooks

type FormStateType = {
  email: string;
  password: string;
  language: string;
};

const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const emailValue = emailFieldRef.current?.value || "";
    const passwordValue = passwordFieldRef.current?.value || "";
    const languageValue = languageFieldRef.current?.value || "";

    console.log({
      email: emailValue,
      password: passwordValue,
      language: languageValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <Text>
          Email: {formState.email}, password: {formState.password}
        </Text> */}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input ref={emailFieldRef} id="email" type="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordFieldRef}
          id="password"
          type="password"
          name="password"
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input ref={languageFieldRef} id="language" name="language" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
      </div>
      <Button label="Send" type="submit" />
      <Button label="Send2" type="button" />
    </form>
  );
};

export default RegistrationFormRefs;
