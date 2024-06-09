import React from "react";
import { useAuth } from "../../authentication/AuthContext";
import { Button } from "@chakra-ui/react";

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login Page</h2>
      <Button variant="solid" onClick={login}>
        Login
      </Button>
    </div>
  );
};
export default Login;
