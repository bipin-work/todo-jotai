import React, { useEffect } from "react";
import {
  Box,
  Flex,
  VStack,
  Icon,
  As,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import {
  User,
  Users,
  CheckSquare,
  Plus,
  DotsThreeOutline,
} from "@phosphor-icons/react";
import { bgTheme } from "../../styles/theming/theme";
import { useAtom } from "jotai";
import { taskDrawerAtom } from "../../store-jotai/store";
interface NavigationItem {
  id: number;
  title: string;
  path: string;
  icon: As | undefined;
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
    id: 99,
    title: "",
    path: "",
    icon: undefined,
  },
  {
    id: 3,
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    id: 4,
    title: "More",
    path: "/more",
    icon: DotsThreeOutline,
  },
];

const NavigationBar = () => {
  const bg = useColorModeValue(bgTheme.light, bgTheme.dark);
  const [_, setTaskDrawerOpen] = useAtom(taskDrawerAtom);
  const location = useLocation();
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    console.log("location", location.pathname);
  }, [location.pathname]);
  return (
    <Box
      bg={bg}
      boxShadow="base"
      className="absolute w-full bottom-0 left-0 shadow-2xl pb-3"
    >
      <Flex
        className="relative h-full w-full"
        minWidth={"max-content"}
        justify="space-between"
        align={"center"}
      >
        <Box
          className="absolute z-10  -top-6 left-1/2 -translate-x-1/2 rounded-full cursor-pointer"
          padding={4}
          bg={"purple.500"}
          onClick={() => setTaskDrawerOpen(true)}
        >
          <Icon boxSize={8} as={Plus} color="white" />
        </Box>
        {NavigationItemsData.map((nav) => (
          <Box
            key={nav.id}
            className="relative cursor-pointer w-1/5"
            p="2"
            onClick={() => nav.id !== 99 && onNavigate(nav.path)}
          >
            {nav.id !== 99 && (
              <>
                {location.pathname.indexOf(nav.path) !== -1 && (
                  <Box
                    bg="purple.500"
                    h={1}
                    borderRadius={5}
                    className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1/2"
                  ></Box>
                )}
                <VStack spacing={2} align="center">
                  <Icon boxSize={6} as={nav.icon} />
                  <Text size="md">{nav.title}</Text>
                </VStack>
              </>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default NavigationBar;
