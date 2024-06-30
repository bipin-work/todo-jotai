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
import { removeTaskAtom, toggleTaskAtom } from "../../store-jotai/store";
import { useAtom } from "jotai";
import { DeleteIcon } from "@chakra-ui/icons";
import EditTask from "./EditTask/EditTask";

export interface Task {
  id: string;
  heading: string;
  description: string;
  completed: boolean;
}

interface TaskProps {
  task: Task;
}
const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const [_, removeTask] = useAtom(removeTaskAtom);
  const [__, toggleTask] = useAtom(toggleTaskAtom);
  return (
    <Card direction="row" className="relative my-3 pl-4" gap="4">
      <Checkbox
        isChecked={task.completed}
        onChange={(_) => toggleTask(task.id)}
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
          <DeleteIcon onClick={() => removeTask(task.id)} />
        </Box>
      </CardFooter>
    </Card>
  );
};
export default TaskItem;
