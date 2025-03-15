import axiosIntance from "../../../core/axiosInstance";
import type { LoginCredentials } from "../models/login_credential.model";
import { useAuthStore } from "../store/authStore";
import type { AuthResponse } from "../models/auth_response.model";
import type { SignUpData } from "../models/signup_data";
const BASEURL: string = import.meta.env.VITE_API_URL;

export function useAuth() {
  const authStore = useAuthStore();
  const checkAuth = async () => {
    try {
      const response = await axiosIntance.get<AuthResponse>(
        BASEURL + "auth/me/"
      );

      authStore.login(response.data.username, response.data.is_staff);

      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      debugger;
      const response = await axiosIntance.post(BASEURL + "auth/token/", {
        email: credentials.email,
        password: credentials.password,
      });

      authStore.login(response.data.username, response.data.is_staff);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const signup = async (signupData: SignUpData) => {
    try {
      debugger;
      const response = await axiosIntance.post(BASEURL + "auth/signup/", {
        email: signupData.email,
        password1: signupData.password1,
        password2: signupData.password2,
      });

      const loginCredential: LoginCredentials = {
        email: signupData.email,
        password: signupData.password1,
      };

      if (response.status === 200) {
        login(loginCredential);
      }

      authStore.login(response.data.username, response.data.is_staff);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    const response = await axiosIntance.post(BASEURL + "auth/logout/");
    authStore.logout();
    return response.data;
  };

  return {
    checkAuth,
    login,
    signup,
    logout,
  };
}
