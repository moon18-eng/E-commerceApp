import { create } from "zustand";
//a function to update the "theme" in local storage and in the zustand store(it's a Custom hook unlike "useState" which is a built-in hook)

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("preferred-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("preferred-theme", theme);
    set({ theme });
  },
}));