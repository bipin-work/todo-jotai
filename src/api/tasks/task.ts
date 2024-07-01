import { Task } from "../../components/Task/TaskItem";
import { api } from "../index";

export const fetchTasks = async () => {
  const res = await api.get("/task");
  return res.data;
};

export const createTask = async (task: Task) => {
  const res = await api.post("/task", task);
  return res.data;
};

export const updateTask = async (task: Task) => {
  const res = await api.put(`/task/${task.id}`, task);
  return res.data;
};

export const fetchTaskById = async (id: number) => {
  const res = await api.get(`/task/${id}`);
  return res.data;
};

export const deleteTask = async (id: number) => {
  const res = await api.delete(`/task/${id}`);
  return res.data;
};
