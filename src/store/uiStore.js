import { create } from "zustand";

const useUIStore = create((set) => ({
  isMenuOpen: false,
  activeModal: null,
  selectedMemberRange: null,

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
  setSelectedMemberRange: (range) => set({ selectedMemberRange: range }),
  clearSelectedMemberRange: () => set({ selectedMemberRange: null }),
}));

export default useUIStore;
