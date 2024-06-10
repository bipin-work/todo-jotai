import React from "react";
import { Box } from "@chakra-ui/react";
import Task from "../../components/Task/Task";
import AddTask from "../../components/AddTask/AddTask";

const Home = () => {
  return (
    <>
      <Box className="px-2.5">
        <Task id="1" heading={"SOme Heading"} description="Some Description" />
        <Task id="2" heading={"SOme Heading"} description="Some Description" />
        <Task id="3" heading={"SOme Heading"} description="Some Description" />
        <AddTask />
      </Box>
    </>
  );
};
export default Home;
