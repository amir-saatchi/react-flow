import { StateCreator } from "zustand";
import { StoreType } from "./store";

type AppState = {
  theme: string;
  setTheme: (theme: string) => void;
};

export type AppSlice = AppState;

export const createAppSlice: StateCreator<
  StoreType,
  [["zustand/immer", never]],
  [],
  AppSlice
> = (set, get) => ({
  // initial states
  theme: "system",

  // functions
  setTheme: (theme) => {
    set((state) => {
      theme;
    });
  },
});
