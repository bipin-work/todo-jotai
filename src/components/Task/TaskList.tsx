import React from "react";
import { showCompeletedAtom } from "../../store-jotai/store";
import { Task } from "./TaskItem";
import TaskItem from "./TaskItem";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface TaskListProps {
  tasks: Task[];
}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [completedShow, setCompletedShow] = useAtom(showCompeletedAtom);
  const toggleCompletedShow = () => {
    setCompletedShow((cs) => !cs);
  };
  return (
    <Box className="relative">
      <Flex justify={"space-between"} align={"center"}>
        <Heading as="h5" size="md">
          Tasks Remaining:
        </Heading>
        <Box onClick={toggleCompletedShow}>
          {completedShow ? <ViewIcon /> : <ViewOffIcon />}
        </Box>
      </Flex>
      <Box className="uncompleted-task pb-4">
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
      </Box>
      {completedShow && (
        <Box>
          <Heading as="h5" size="md">
            Completed Tasks:
          </Heading>
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
        </Box>
      )}
    </Box>
  );
};
export default TaskList;
