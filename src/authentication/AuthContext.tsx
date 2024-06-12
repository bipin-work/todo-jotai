import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }) => {
  const fromLocalStorage = localStorage.getItem("token") === "true" || false;
  const [isAuthenticated, setIsAuthenticated] = useState(fromLocalStorage);
  const navigate = useNavigate();

  const login = () => {
    console.log("loggin in");
    localStorage.setItem("token", "true");
    setIsAuthenticated(true);
    navigate("/home");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("token", "false");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
