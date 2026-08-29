import { create } from "zustand";

const useUIStore = create((set) => ({
  isMenuOpen: false,
  activeModal: null,

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
}));

export default useUIStore;
