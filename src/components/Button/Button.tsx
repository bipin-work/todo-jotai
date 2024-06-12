import React from "react";
import { ButtonProps, Button as CButton } from "@chakra-ui/react";

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
}) => {
  return <CButton>{children}</CButton>;
};
export default Button;
