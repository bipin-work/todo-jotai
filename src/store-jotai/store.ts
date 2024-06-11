import { v4 as uuid } from "uuid";
import { atom } from "jotai";

export interface Task {
  id: string;
  heading: string;
  description: string;
  completed: boolean;
}

const newTask = {
  id: "",
  heading: "",
  description: "",
  completed: false,
};

export const updateTask = (tasks: Task[], updatedTask: Task): Task[] =>
  tasks.map((task) => ({
    ...task,
    heading: task.id === updatedTask.id ? updatedTask.heading : task.heading,
    description:
      task.id === updatedTask.id ? updatedTask.description : task.description,
  }));

export const toggleTask = (tasks: Task[], id: string): Task[] =>
  tasks.map((task) => ({
    ...task,
    completed: task.id === id ? !task.completed : task.completed,
  }));

export const removeTask = (tasks: Task[], id: string): Task[] =>
  tasks.filter((task) => task.id !== id);

export const addTask = (
  tasks: Task[],
  { heading, description }: Task
): Task[] => [
  ...tasks,
  {
    id: uuid(),
    heading,
    description,
    completed: false,
  },
];

export const newTaskAtom = atom<Task>({ ...newTask });
export const tasksAtom = atom<Task[]>([]);
export const addTaskAtom = atom(
  () => "",
  (get, set) => {
    console.log("setting tasks atom", tasksAtom);
    set(tasksAtom, addTask(get(tasksAtom), get(newTaskAtom)));
    console.log("setting tasks atom", tasksAtom);
    set(newTaskAtom, { ...newTask });
  }
);
export const updateTaskAtom = atom(
  () => "",
  (get, set, task: Task) => {
    set(tasksAtom, updateTask(get(tasksAtom), task));
  }
);
export const toggleTaskAtom = atom(
  () => "",
  (get, set, id: string) => {
    set(tasksAtom, toggleTask(get(tasksAtom), id));
  }
);

export const removeTaskAtom = atom(null, (get, set, id: string) => {
  set(tasksAtom, removeTask(get(tasksAtom), id));
});

export const showCompeletedAtom = atom(false);
