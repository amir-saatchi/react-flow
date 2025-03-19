import { createWithEqualityFn } from "zustand/traditional";
import { immer } from "zustand/middleware/immer";
import { shallow } from "zustand/shallow";
import { createFlowSlice, FlowSlice } from "./flow-state";
import { createDnDSlice, DnDSlice } from "./dnd-state";
import { AppSlice, createAppSlice } from "./app-state";

// Store Type
export type StoreType = FlowSlice & DnDSlice & AppSlice;

// Store Main State with createWithEqualityFn, immer, and shallow
export const useStore = createWithEqualityFn<StoreType>()(
  immer((set, get, store) => ({
    ...createAppSlice(set, get, store),
    ...createFlowSlice(set, get, store),
    ...createDnDSlice(set, get, store),
  }))
);