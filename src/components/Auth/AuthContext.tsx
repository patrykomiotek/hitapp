import { createContext } from "react";
import { AuthCredentials } from "./AuthCredentials";

type AuthContextType = {
  isLoggedIn: boolean;
};

const defaultValues: AuthContextType = {
  isLoggedIn: false,
};

export const AuthContext = createContext<AuthContextType>(defaultValues);
// 16, 17, 18 -> AuthContext.Provider
// 19 -> AuthContext
