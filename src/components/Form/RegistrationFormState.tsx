import { FormEventHandler, useState } from "react";
import { Button, Text } from "../../ui";

// RegistrationFormRefs
// RegistrationFormHooks

export const RegistrationFormState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ email, password, language });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Text>
          Email: {email}, password: {password}
        </Text>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(event) => setEmail(event?.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={(event) => setPassword(event?.target.value)}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          id="language"
          name="language"
          onChange={(event) => setLanguage(event?.target.value)}
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
