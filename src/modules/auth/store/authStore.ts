import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loading: false, // Loading state flag
    showModal: false, // Show login modal flag
    isLogin: true, // Default to login form
    isAuthenticated: !!Cookies.get("access"), // Check if user is authenticated
    isStaff: false, // Check if user is staff
    username: "", // User's username
  }),
  actions: {
    // Toggle login modal visibility
    toggleModal() {
      this.showModal = !this.showModal;
    },
    // Switch to login form
    switchToLogin() {
      this.isLogin = true;
    },
    // Switch to signup form
    switchToSignUp() {
      this.isLogin = false;
    },
    // Login user with provided credentials
    login(username: string, isStaff: boolean) {
      this.isAuthenticated = true;
      this.username = username;
      this.isStaff = isStaff;
    },
    // Logout user
    logout() {
      this.isAuthenticated = false;
      this.isStaff = false;
      // Remove any other cookies you may have set
    },
  },
});
