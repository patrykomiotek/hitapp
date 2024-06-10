import { useContext } from "react";

import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <p>Is user logged: {context.isLoggedIn ? "yes" : "no"}</p>
    </div>
  );
};
