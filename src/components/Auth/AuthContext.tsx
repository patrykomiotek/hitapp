import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isUserLogged: boolean;
  logIn: () => void;
  logOut: () => void;
  toggle: () => void;
};

// const defaultValues: AuthContextType = {
//   isLoggedIn: false,
// };

const AuthContext = createContext<AuthContextType | null>(null);
// 16, 17, 18 -> AuthContext.Provider
// 19 -> AuthContext

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "Oh no! Component should be placed inside AuthContextProvider"
    );
  }

  return context;
};

// write a test for our useAuth
export const useAuth = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const logIn = () => setIsUserLogged(true);
  const logOut = () => setIsUserLogged(false);
  const toggle = () => setIsUserLogged((value) => !value);

  return { isUserLogged, logIn, logOut, toggle };
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 1 - create custom hook for logic
  // 2 - inside AuthContextProvider provide logic from pont 1

  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
