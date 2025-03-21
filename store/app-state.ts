import { StateCreator } from "zustand";
import { StoreType } from "./store";

type AppState = {
  theme: string;
  setTheme: (theme: string) => void;
  viewUrl: ViewUrl;
  setViewUrl: (url: ViewUrl) => void;
  viewContent: ViewContent;
  setViewContent: (content: ViewContent) => void;
};

export type ViewUrl = "MAIN" | "PROJECT";

export type ViewContent = "DASHBOARD" | "SCHEMATIC";

export type AppSlice = AppState;

export const createAppSlice: StateCreator<
  StoreType,
  [["zustand/immer", never]],
  [],
  AppSlice
> = (set, get) => ({
  // initial states
  theme: "system",
  viewUrl: "MAIN",
  viewContent: "DASHBOARD",

  // functions
  setTheme: (theme) => {
    set((state) => {
      state.theme = theme;
    });
  },
  setViewUrl: (url) => {
    set((state) => {
      state.viewUrl = url;
    });
  },
  setViewContent: (content) => {
    set((state) => {
      state.viewContent = content;
    });
  },
});
