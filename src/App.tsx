import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ChakraProvider,
  ColorModeScript,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import theme from "./styles/theming/theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./authentication/AuthContext";
import Login from "./pages/login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/home/Home";
import SharedGroup from "./pages/sharedGroup/SharedGroup";
import Profile from "./pages/profile/Profile";
import { Provider as JotaiProvider } from "jotai";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/shared-group" element={<SharedGroup />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
createRoot(document.getElementById("app")).render(
  <>
    <Router>
      <ChakraProvider theme={theme}>
        <JotaiProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </JotaiProvider>
      </ChakraProvider>
    </Router>
  </>
);
