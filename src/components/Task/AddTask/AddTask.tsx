import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Button,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { taskDrawerAtom } from "../../../store-jotai/store";
import TaskForm from "../TaskForm";

interface AddTaskProps {}

const AddTask: React.FC<AddTaskProps> = () => {
  const [taskDrawerOpen, setTaskDrawerOpen] = useAtom(taskDrawerAtom);
  const saveBtnRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    setTaskDrawerOpen(false);
  };

  return (
    <Drawer isOpen={taskDrawerOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{"Add Task"}</DrawerHeader>

        <DrawerBody>
          <TaskForm saveBtnRef={saveBtnRef} onFinish={() => onClose()} />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => saveBtnRef.current && saveBtnRef.current.click()}
          >
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default AddTask;
