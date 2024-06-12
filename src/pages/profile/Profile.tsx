import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import { useColorMode, Button, Flex, Heading, Switch } from "@chakra-ui/react";

const Profile = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <PageContainer>
      <Header headerName="Profile" />
      <Flex align="center" justify="space-between">
        <Heading as="h5" size="sm">
          Dark Mode
        </Heading>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={(_) => toggleColorMode()}
        />
      </Flex>
    </PageContainer>
  );
};
export default Profile;
