import { create } from "zustand";

const useDateStore = create((set) => ({
  date: null,
  setDate: (newDate) => set({ date: newDate }),
  getDate: () => set((state) => ({ date: state.date })),
}));

export default useDateStore;
