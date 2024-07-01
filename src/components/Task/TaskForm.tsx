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
  Textarea,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAtom } from "jotai";
import { Task } from "./TaskItem";
import { useCreateTask, useUpdateTask } from "../../api/tasks/useTask";

interface TaskFormProps {
  initialValue?: Task;
  saveBtnRef: React.RefObject<HTMLButtonElement>;
  onFinish?: () => void;
}

const TaskFormValue = {
  id: "",
  heading: "",
  description: "",
  completed: false,
};

const TaskFormSchema = Yup.object().shape({
  heading: Yup.string().required("Heading is a required field!"),
});

const TaskForm: React.FC<TaskFormProps> = ({
  saveBtnRef,
  initialValue = TaskFormValue,
  onFinish,
}) => {
  const createTaskMutation = useCreateTask();
  const updateTaskMutation = useUpdateTask();

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={TaskFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values", values);
        if (values.id) {
          updateTaskMutation.mutate({ ...values });
        } else {
          const { id, ...newTask } = values;
          createTaskMutation.mutate({ ...newTask });
        }
        setSubmitting(false);
        onFinish && onFinish();
      }}
    >
      {() => (
        <Form>
          <Field name="heading">
            {({ field, form }) => (
              <FormControl
                isInvalid={!!form.errors.heading && form.touched.heading}
              >
                <Input {...field} placeholder="Task Name" size="sm" />
                <FormErrorMessage>{form.errors.heading}</FormErrorMessage>
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
  );
};
export default TaskForm;
