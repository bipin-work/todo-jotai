import React from "react";
import { createRoot } from "react-dom/client";
import {
  ChakraProvider,
  ColorModeScript,
  useColorMode,
} from "@chakra-ui/react";
import theme from "./styles/theming/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./authentication/AuthContext";

import { Provider as JotaiProvider } from "jotai";
import RoutesList from "./routes/RoutesList";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AuthProvider>
      <RoutesList />
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
