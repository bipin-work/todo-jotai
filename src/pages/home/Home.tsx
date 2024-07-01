import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { tasksAtom } from "../../store-jotai/store";
import TaskList from "../../components/Task/TaskList";
import PageContainer from "../../components/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import { useTasks } from "../../api/tasks/useTask";

const Home = () => {
  const [tasks, _] = useAtom(tasksAtom);
  const { data: apiTasks, isLoading, error } = useTasks();

  if (isLoading) return <h2>Loading</h2>;
  if (error) return <p>error</p>;

  return (
    <>
      <PageContainer>
        <Header headerName="Index" />
        {tasks.length > 0 ? (
          <>
            <TaskList tasks={apiTasks} />
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
          </Flex>
        )}
      </PageContainer>
    </>
  );
};
export default Home;
