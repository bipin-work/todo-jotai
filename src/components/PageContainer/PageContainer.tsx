import React from "react";
import { Box } from "@chakra-ui/react";

interface PageContainerProps {
  classes?: string;
}
const PageContainer: React.FC<React.PropsWithChildren<PageContainerProps>> = ({
  classes = "",
  children,
}) => {
  return (
    <Box className={`relative pt-12 px-2.5 h-full w-full ${classes}`}>
      {children}
    </Box>
  );
};
export default PageContainer;
