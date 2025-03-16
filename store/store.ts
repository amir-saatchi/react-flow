import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createFlowSlice, FlowSlice } from "./flow-state";
import { createDnDSlice, DnDSlice } from "./dnd-state";

// Store Type
export type StoreType = FlowSlice & DnDSlice;

// Store Main State
export const useStore = create<StoreType>()(
  immer((set, get, store) => ({
    ...createFlowSlice(set, get, store),
    ...createDnDSlice(set, get, store),
  }))
);