import { StateCreator } from "zustand";
import { StoreType } from "./store";

type DnDState = {
  nodeType: string | null;
  setNodeType: (type: string | null) => void;
};

export type DnDSlice = DnDState;

export const createDnDSlice: StateCreator<
  StoreType,
  [["zustand/immer", never]], // Use immer middleware
  [],
  DnDSlice
> = (set, get) => ({
  // State
  nodeType: null,

  // Actions
  setNodeType: (type) => set({ nodeType: type }),
});