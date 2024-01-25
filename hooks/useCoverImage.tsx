import { create } from "zustand";

type CoverImageStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log("Cover Image Modal Opened");
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));
