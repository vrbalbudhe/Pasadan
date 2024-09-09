import { create } from "zustand";

const useVisibilityStore = create((set) => ({
  isVisible: false,
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
}));

export default useVisibilityStore;
