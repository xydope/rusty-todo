import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Todo = {
  id: string;
};

export const todoStore = create(
  persist(
    immer((set) => ({
      todos: [] as Todo[],
    })),
    { name: "todo=store" }
  )
);
