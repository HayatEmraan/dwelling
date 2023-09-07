import { create } from "zustand";

const useDateStore = create((set) => ({
  date: null, // Initialize with null or a default date
  setDate: (newDate) => set({ date: newDate }),
  getDate: () => set((state) => ({ date: state.date })),
}));

export default useDateStore;