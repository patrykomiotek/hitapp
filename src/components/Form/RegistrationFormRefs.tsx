import { ChangeEventHandler, FormEventHandler, useRef, useEffect } from "react";
import { Button, Text } from "../../ui";
import { type RefFormData } from "./types";

// RegistrationFormRefs
// RegistrationFormHooks

// type FormStateType = {
//   email: string;
//   password: string;
//   language: string;
// };

type Props = {
  initialData: RefFormData;
  onSubmit: (data: RefFormData) => void;
};

const RegistrationFormRefs = ({ initialData, onSubmit }: Props) => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailFieldRef.current) {
      emailFieldRef.current.focus();
    }
  }, []);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const emailValue = emailFieldRef.current?.value || "";
    const passwordValue = passwordFieldRef.current?.value || "";
    const languageValue = languageFieldRef.current?.value || "";

    onSubmit({
      email: emailValue,
      password: passwordValue,
      language: languageValue,
    });

    // Parent
    // console.log({
    //   email: emailValue,
    //   password: passwordValue,
    //   language: languageValue,
    // });
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // event.target.value
    const emailValue = event.target.value;
    if (!emailValue.includes("@") && emailFieldRef.current) {
      emailFieldRef.current.blur();
      emailFieldRef.current.style.border = "1px solid #f00";
    }
  };

  const handleLanguageChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const languageValue = event.target.value;
    if (languageValue.includes("cobol") && languageFieldRef.current) {
      languageFieldRef.current.value = "*****";
      languageFieldRef.current.style.border = "1px solid #f00";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <Text>
          Email: {formState.email}, password: {formState.password}
        </Text> */}
      </div>
      {/* <Input ref={emailFieldRef} label="E-mail" type="email" /> */}
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          ref={emailFieldRef}
          id="email"
          type="email"
          name="email"
          defaultValue={initialData.email}
          onChange={handleEmailChange}
          // autoFocus={true}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordFieldRef}
          id="password"
          type="password"
          name="password"
          defaultValue={initialData.password}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          ref={languageFieldRef}
          id="language"
          name="language"
          defaultValue={initialData.language}
          onChange={handleLanguageChange}
        />
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

// export default RegistrationFormRefs;
export { RegistrationFormRefs };
