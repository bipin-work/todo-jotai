import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Input,
  Button,
  useDisclosure,
  Textarea,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { EditIcon } from "@chakra-ui/icons";

interface AddTaskProps {
  initialValue?: typeof TaskForm & { id: string };
  isEditMode?: boolean;
}

const TaskFormSchema = Yup.object().shape({
  heading: Yup.string().required("Heading is a required field!"),
});

const TaskForm = {
  heading: "",
  description: "",
};

const AddTask: React.FC<AddTaskProps> = ({
  initialValue = TaskForm,
  isEditMode = false,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstFieldRef = useRef(null);
  const saveBtnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      {!isEditMode ? (
        <Button onClick={onOpen}>Add Task</Button>
      ) : (
        <EditIcon boxSize={4} onClick={onOpen} className="cursor-pointer" />
      )}
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        initialFocusRef={firstFieldRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{isEditMode ? "Edit Task" : "Add Task"}</DrawerHeader>

          <DrawerBody>
            <Formik
              initialValues={isEditMode ? initialValue : TaskForm}
              validationSchema={TaskFormSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("values", values);
                setSubmitting(false);
                onClose();
              }}
            >
              {() => (
                <Form>
                  <Field name="heading">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          !!form.errors.heading && form.touched.heading
                        }
                      >
                        <Input
                          {...field}
                          ref={firstFieldRef}
                          placeholder="Task Name"
                          size="sm"
                        />
                        <FormErrorMessage>
                          {form.errors.heading}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="description">
                    {({ field }) => (
                      <FormControl>
                        <Textarea
                          {...field}
                          size="sm"
                          placeholder="Description"
                          className="mt-2"
                        />
                      </FormControl>
                    )}
                  </Field>

                  <Button type="submit" hidden ref={saveBtnRef}></Button>
                </Form>
              )}
            </Formik>
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
    </>
  );
};
export default AddTask;
