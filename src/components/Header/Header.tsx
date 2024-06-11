import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

interface HeaderProps {
  headerName: string;
  firstComponent?: React.ReactNode;
  secondComponent?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({
  headerName,
  firstComponent: First = <></>,
  secondComponent: Second,
}) => {
  return (
    <Box className="absolute h-12 w-full top-0 left-0">
      <Flex className="w-full h-full" justify="center" align="center">
        <Box className="w-1/4 text-center">First</Box>
        <Heading className="w-1/2 text-center" as="h5" size="md">
          {headerName}
        </Heading>
        <Box className="w-1/4 text-center">Third</Box>
      </Flex>
    </Box>
  );
};
export default Header;
