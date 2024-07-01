import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createTask,
  deleteTask,
  fetchTaskById,
  fetchTasks,
  updateTask,
} from "./task";
import { Task } from "../../components/Task/TaskItem";

export const useTasks = () => {
  return useQuery("tasks", fetchTasks);
};

export const useTaskById = (id: number) => {
  return useQuery({
    queryKey: ["tasks", id],
    queryFn: () => fetchTaskById(id),
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
};
