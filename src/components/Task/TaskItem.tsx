import React from "react";
import {
  Card,
  Checkbox,
  Box,
  Heading,
  Text,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { DeleteIcon } from "@chakra-ui/icons";
import EditTask from "./EditTask/EditTask";
import { useDeleteTask, useUpdateTask } from "../../api/tasks/useTask";

export interface Task {
  id?: string;
  heading: string;
  description: string;
  completed: boolean;
}

interface TaskProps {
  task: Task;
}
const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const updateTaskMutation = useUpdateTask();
  const removeTaskById = useDeleteTask();

  const toggleUpdateTask = (task: Task) => {
    updateTaskMutation.mutate({ ...task, completed: !task.completed });
  };

  const deleteTask = (id: string) => {
    removeTaskById.mutate(id);
  };
  return (
    <Card direction="row" className="relative my-3 pl-4" gap="4">
      <Checkbox
        isChecked={task.completed}
        onChange={(_) => toggleUpdateTask(task)}
      />
      <CardBody>
        <Box>
          <Heading as="h6" size="md">
            {task.heading}
          </Heading>
          <Text fontSize="md">{task.description}</Text>
        </Box>
      </CardBody>
      <CardFooter>
        <Box>
          <EditTask initialValue={task} />
          <DeleteIcon onClick={() => deleteTask(task.id!)} />
        </Box>
      </CardFooter>
    </Card>
  );
};
export default TaskItem;
