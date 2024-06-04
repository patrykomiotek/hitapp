import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Button, Text } from "../../ui";

// RegistrationFormRefs
// RegistrationFormHooks

type FormStateType = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormState = () => {
  const [formState, setFormState] = useState<FormStateType>({
    email: "",
    password: "",
    language: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [language, setLanguage] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ formState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Text>
          Email: {formState.email}, password: {formState.password}
        </Text>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input id="language" name="language" onChange={handleChange} />
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
