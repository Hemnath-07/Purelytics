import { create } from "zustand";

export const useStore = create((set) => ({
  data: [],
  setData: (data: any) => set({ data }),

  setTheme: (theme: string) => {
    document.body.className = theme;
  },
}));
