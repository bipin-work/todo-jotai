import React from "react";
import {
  Box,
  Flex,
  VStack,
  Icon,
  As,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import { User, Users, CheckSquare } from "@phosphor-icons/react";
import { bgTheme } from "../../styles/theming/theme";
interface NavigationItem {
  id: number;
  title: string;
  path: string;
  icon: As;
}
const NavigationItemsData: NavigationItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    icon: CheckSquare,
  },
  {
    id: 2,
    title: "Group",
    path: "/shared-group",
    icon: Users,
  },
  {
    id: 3,
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    id: 4,
    title: "Some",
    path: "/some",
    icon: User,
  },
];

const NavigationBar = () => {
  const bg = useColorModeValue(bgTheme.light, bgTheme.dark);
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <Box
      bg={bg}
      boxShadow="base"
      className="absolute w-full bottom-0 left-0 shadow-2xl"
    >
      <Flex
        className="h-full w-full"
        minWidth={"max-content"}
        justify="space-between"
        align={"center"}
      >
        {NavigationItemsData.map((nav) => (
          <Box
            key={nav.id}
            className="cursor-pointer w-1/4"
            p="2"
            onClick={() => onNavigate(nav.path)}
          >
            <VStack spacing={2} align="center">
              <Icon boxSize={6} as={nav.icon} />
              <Text size="md">{nav.title}</Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default NavigationBar;
