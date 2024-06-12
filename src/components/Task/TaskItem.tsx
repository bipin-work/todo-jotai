import React from "react";
import {
  Flex,
  Card,
  Checkbox,
  Box,
  Heading,
  Text,
  Container,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import AddTask from "../AddTask/AddTask";
import { Task, removeTaskAtom, toggleTaskAtom } from "../../store-jotai/store";
import { useAtom } from "jotai";
import { DeleteIcon } from "@chakra-ui/icons";

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
          <AddTask initialValue={task} isEditMode />
          <DeleteIcon onClick={() => removeTask(task.id)} />
        </Box>
      </CardFooter>
    </Card>
  );
};
export default TaskItem;
