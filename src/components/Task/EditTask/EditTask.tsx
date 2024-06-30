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
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Task } from "../TaskItem";
import TaskForm from "../TaskForm";

interface EditTaskProps {
  initialValue: Task;
}

const EditTask: React.FC<EditTaskProps> = ({ initialValue }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const saveBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <EditIcon boxSize={4} onClick={onOpen} className="cursor-pointer" />
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{"Edit Task"}</DrawerHeader>

          <DrawerBody>
            <TaskForm
              initialValue={initialValue}
              saveBtnRef={saveBtnRef}
              onFinish={() => onClose()}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => saveBtnRef.current && saveBtnRef.current.click()}
            >
              Update
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default EditTask;
