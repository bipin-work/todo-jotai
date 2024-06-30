import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import * as Icons from "@phosphor-icons/react";
import { As, Box } from "@chakra-ui/react";
import Category from "../../components/Category/Category";
import { Outlet, useNavigate } from "react-router-dom";

const SettingsList = [
  {
    id: 1,
    name: "Category Settings",
    path: "/more/category",
  },
  {
    id: 2,
    name: "Task Settings",
    path: "/more/tasks",
  },
];

interface MoreProps {}
const More: React.FC<MoreProps> = () => {
  const navigate = useNavigate();

  const onNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <PageContainer>
      <Header headerName="More" />
      {SettingsList.map((setting) => (
        <Box
          key={setting.id}
          className="w-full"
          onClick={() => onNavigate(setting.path)}
        >
          {setting.name}
        </Box>
      ))}
    </PageContainer>
  );
};
export default More;
