import { useState } from "react";
import { Button, Text } from "../../ui";

// RegistrationFormRefs
// RegistrationFormHooks

export const RegistrationFormState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <form>
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
          onChange={(event) => setEmail(event?.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event?.target.value)}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          id="language"
          onChange={(event) => setLanguage(event?.target.value)}
        />
      </div>
      <Button label="Send" />
    </form>
  );
};
