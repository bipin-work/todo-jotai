import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <Box
      className="absolute w-full bottom-0 left-0 shadow-2xl"
      sx={{
        boxShadow: "0 0 15px -10px",
      }}
    >
      <Flex
        className="h-full w-full"
        minWidth={"max-content"}
        justify="space-between"
        align={"center"}
      >
        <Box
          className="cursor-pointer"
          w="33.33"
          p="4"
          onClick={() => onNavigate("/home")}
        >
          Home
        </Box>
        <Box
          className="cursor-pointer"
          w="33.33"
          p="4"
          onClick={() => onNavigate("/Group")}
        >
          Group
        </Box>
        <Box
          className="cursor-pointer"
          w="33.33"
          p="4"
          onClick={() => onNavigate("/Profile")}
        >
          Profile
        </Box>
        <Box
          className="cursor-pointer"
          w="33.33"
          p="4"
          onClick={() => onNavigate("/Some")}
        >
          Some
        </Box>
      </Flex>
    </Box>
  );
};
export default NavigationBar;
