import { create } from "zustand";
import { createAuthSlice } from "./slices/AuthSlice";
import { createProcessSlice } from "./slices/ProcessSlice";
import { createLisitingsSlice } from "./slices/ListingsSlice";

export const useAppStore = create()((...a) => ({
  ...createLisitingsSlice(...a),
  ...createAuthSlice(...a),
  ...createProcessSlice(...a),
}));
