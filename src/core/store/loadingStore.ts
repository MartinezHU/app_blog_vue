// stores/loading.js
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    loading: false,
    loadingCount: 0, // Para manejar múltiples peticiones
  }),
  actions: {
    startLoading() {
      this.loadingCount++;
      this.loading = true;
    },
    stopLoading() {
      this.loadingCount--;
      if (this.loadingCount <= 0) {
        this.loading = false;
        this.loadingCount = 0; // Prevenir números negativos
      }
    },
  },
  getters: {
    isLoading: (state) => state.loading,
  },
});
