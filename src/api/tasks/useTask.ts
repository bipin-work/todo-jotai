import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createTask,
  deleteTask,
  fetchTaskById,
  fetchTasks,
  updateTask,
} from "./task";
import { Task } from "../../components/Task/TaskItem";
import { useAtom } from "jotai";
import { taskNetworkStatusAtom, tasksAtom } from "../../store-jotai/store";
import { useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const { data, isLoading, error } = useQuery("tasks", fetchTasks);

  useEffect(() => {
    if (data && !isLoading && !error) {
      setTasks(data);
    }
  }, [data, isLoading, error]);

  return { tasks, isLoading, error };
};

export const useTaskById = (id: string) => {
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
