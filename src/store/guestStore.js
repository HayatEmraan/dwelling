import { create } from "zustand";

const useGuestStore = create((set) => ({
  date: null,
  setDate: (newDate) => set({ date: newDate }),
  getDate: () => set((state) => ({ guest: state.date })),
}));

export default useGuestStore;
