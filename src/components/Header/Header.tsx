import React from "react";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { bgTheme } from "../../styles/theming/theme";

interface HeaderProps {
  headerName: string;
  firstComponent?: React.ReactNode;
  secondComponent?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({
  headerName,
  firstComponent,
  secondComponent,
}) => {
  const bg = useColorModeValue(bgTheme.light, bgTheme.dark);
  return (
    <Box
      bg={bg}
      boxShadow={"base"}
      className="absolute h-12 w-full top-0 left-0"
    >
      <Flex className="w-full h-full" justify="center" align="center">
        <Box className="w-1/4 text-center">{firstComponent}</Box>
        <Heading className="w-1/2 text-center" as="h5" size="md">
          {headerName}
        </Heading>
        <Box className="w-1/4 text-center">{secondComponent}</Box>
      </Flex>
    </Box>
  );
};
export default Header;
