import { v4 as uuid } from "uuid";
import { atom } from "jotai";
import { Task } from "../components/Task/TaskItem";

export interface TaskNetworkStatus {
  isLoading: boolean;
  error: string | unknown;
}

const createPersistentAtom = <AtomType>(
  key: string,
  initialValue: AtomType
) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item) as AtomType;
    }
    return initialValue;
  };
  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
  return derivedAtom;
};

export const taskDrawerAtom = atom(false);

export const tasksAtom = createPersistentAtom<Task[]>("tasks", []);
export const taskNetworkStatusAtom = atom<TaskNetworkStatus | null>(null);

export const showCompeletedAtom = atom(false);
