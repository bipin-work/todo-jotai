import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components = {
  Button: {
    variants: {
      solid: {
        bg: "purple.500", // Default background color for solid variant
        color: "white", // Default text color for solid variant
        _hover: {
          bg: "purple.600", // Background color on hover for solid variant
        },
      },
    },
  },
  Checkbox: {
    baseStyle: {
      control: {
        _checked: {
          bg: "purple.500", // background color when checked
          borderColor: "pruple.500", // border color when checked
          color: "white", // checkmark color
          _hover: {
            bg: "purple.600", // background color when checked and hovered
            borderColor: "pruple.600", // border color when checked and hovered
          },
        },
      },
    },
  },
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

const theme = extendTheme({ config, breakpoints, fonts, colors, components });
export const bgTheme = { light: "gray.100", dark: "gray.700" };

export default theme;
