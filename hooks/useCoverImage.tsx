import { url } from "inspector";
import { create } from "zustand";

type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => {
    console.log("yooo");
    set({ isOpen: true, url: undefined });
  },
  onClose: () => {
    console.log("yaaa")
    set({ isOpen: false, url: undefined });
  },
  onReplace: (url: string) => set({ isOpen: true, url }),
}));
