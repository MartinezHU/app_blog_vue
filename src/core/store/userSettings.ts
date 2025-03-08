import { defineStore } from "pinia";

export const useSettings = defineStore("settings", {
  state: () => ({
    theme: "light",
    sidebarVisible: true,
  }),
  actions: {
    toggleTheme(theme: string) {
      this.theme = theme;
    },
    toggleSidebarVisibility(visible: boolean) {
      this.sidebarVisible = visible;
    },
  },
});
