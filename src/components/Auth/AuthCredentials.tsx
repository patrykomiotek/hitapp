import { Button } from "../../ui";
import { useAuthContext } from "./AuthContext";

// import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <div>
      <Button label="Toggle" onClick={context.toggle} />
      <p>Is user logged: {context.isUserLogged ? "yes" : "no"}</p>
    </div>
  );
};
