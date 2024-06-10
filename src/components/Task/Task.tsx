import React from "react";
import {
  Flex,
  Checkbox,
  Box,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import AddTask from "../AddTask/AddTask";

interface TaskProps {
  id: string;
  heading: string;
  description: string;
  onChecked?: () => void;
}
const Task: React.FC<TaskProps> = ({ heading, description, onChecked }) => {
  return (
    <Flex className="relative p-2 shadow my-3" gap="4">
      <Checkbox onChange={(ev) => onChecked && onChecked()} />
      <Box>
        <Heading as="h6">Some heading</Heading>
        <Text fontSize="md">Some text</Text>
      </Box>
      <Box className="absolute top-2 right-2 z-10">
        <AddTask
          initialValue={{
            heading: "Some heading",
            description: "some description",
            id: "2",
          }}
          isEditMode
        />
      </Box>
    </Flex>
  );
};
export default Task;
