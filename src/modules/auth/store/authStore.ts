import { defineStore } from "pinia";
import Cookies from "js-cookie";
import type { JWTTokens } from "../models/tokens.model";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loading: false, // Loading state flag
    showModal: false, // Show login modal flag
    isLogin: true, // Default to login form
    isAuthenticated: !!Cookies.get("access"), // Check if user is authenticated
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
    login(token: JWTTokens) {
      this.isAuthenticated = true;
      Cookies.set("access", token.access_token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("refresh", token.refresh_token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
    },
    // Logout user
    logout() {
      this.isAuthenticated = false;
      Cookies.remove("access");
      Cookies.remove("refresh");
    },
  },
});
