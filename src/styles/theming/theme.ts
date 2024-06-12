import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    bg: "#8687E7",
  },
};
const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
};

const theme = extendTheme({ config, breakpoints, fonts, colors });
export const bgTheme = { light: "gray.100", dark: "gray.700" };

export default theme;
