import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const [user, setUser] = useState(sessionStorage.getItem("user"));
  const singin = (newUser) => {
    setUser(newUser);
  };

  const singout = () => {
    setUser(null);
  };

  const value = { user, singin, singout };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
