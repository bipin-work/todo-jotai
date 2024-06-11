import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import AddTask from "../../components/AddTask/AddTask";
import { useAtom } from "jotai";
import { tasksAtom } from "../../store-jotai/store";
import TaskList from "../../components/Task/TaskList";
import PageContainer from "../../components/PageContainer/PageContainer";
import Header from "../../components/Header/Header";

const Home = () => {
  const [tasks, _] = useAtom(tasksAtom);
  return (
    <>
      <PageContainer>
        <Header headerName="Index" />
        {tasks.length > 0 ? (
          <>
            <TaskList tasks={tasks} />
            <AddTask />
          </>
        ) : (
          <Flex
            className="w-full h-full"
            direction="column"
            justify={"center"}
            align="center"
          >
            <Heading className="mb-2" as="h5" size="md">
              There are no tasks. Please create a task!
            </Heading>
            <AddTask />
          </Flex>
        )}
      </PageContainer>
    </>
  );
};
export default Home;
