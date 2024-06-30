import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import AddTask from "../Task/AddTask/AddTask";

const Layout = () => {
  return (
    <Center className="h-screen">
      <Box className="relative h-screen max-w-lg w-full">
        <Box className="h-full relative" paddingBottom={"84px"}>
          <Outlet />
          <AddTask />
        </Box>
        <NavigationBar />
      </Box>
    </Center>
  );
};
export default Layout;
