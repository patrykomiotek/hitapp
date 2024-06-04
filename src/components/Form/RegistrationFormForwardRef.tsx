import { ChangeEventHandler, FormEventHandler, useRef, useEffect } from "react";
import { Button, Input, Text } from "../../ui";

// RegistrationFormRefs
// RegistrationFormHooks

type FormStateType = {
  email: string;
  password: string;
  language: string;
};

const RegistrationFormForwardRef = () => {
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

    console.log({
      email: emailValue,
      password: passwordValue,
      language: languageValue,
    });
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
      <Input
        ref={emailFieldRef}
        label="E-mail"
        type="email"
        name="email"
        defaultValue="test@wp.pl"
        onChange={handleEmailChange}
      />
      <Input
        ref={passwordFieldRef}
        label="Password"
        type="password"
        name="password"
      />
      <Input ref={languageFieldRef} label="Language" name="language" />
      <Input label="Age" type="number" />
      <Button label="Send" type="submit" />
    </form>
  );
};

// export default RegistrationFormRefs;
export { RegistrationFormForwardRef };
