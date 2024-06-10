import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = () => {
  return (
    <Center className="h-screen">
      <Box className="relative h-screen max-w-lg w-full">
        <Box className="h-full relative pb-12">
          <Outlet />
        </Box>
        <NavigationBar />
      </Box>
    </Center>
  );
};
export default Layout;
