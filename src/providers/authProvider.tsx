import { createContext, useState } from "react";
import { IUser } from "../interfaces/User";

export const AuthContext = createContext<IAuthorProviderValue>({
  setAuth: () => console.log("setAuth not implemented"),
  user: null,
});

interface IAuthorProviderValue {
  user: IUser | null;
  setAuth: (user: IUser) => void;
}

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<IUser | null>(null);

  const setAuth = (user: IUser) => {
    setUser(user);
  };

  const value: IAuthorProviderValue = {
    user,
    setAuth,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

