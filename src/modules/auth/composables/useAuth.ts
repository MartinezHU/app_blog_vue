import axiosIntance from "../../../core/axiosInstance";
import type { LoginCredentials } from "../models/login_credential.model";
import { useAuthStore } from "../store/authStore";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import type { JWTTokens } from "../models/tokens.model";
const BASEURL: string = import.meta.env.VITE_API_URL;

export function useAuth() {
  const authStore = useAuthStore();

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await axiosIntance.post(BASEURL + "auth/token/", {
        email: credentials.email,
        password: credentials.password,
      });

      axiosIntance.defaults.headers.common[
        "Authorization"
      ] = ` Bearer ${response.data.access}`;

      const tokens: JWTTokens = {
        access_token: response.data.access,
        refresh_token: response.data.refresh,
      };

      authStore.login(tokens);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const signup = async (credentials: LoginCredentials) => {
    try {
      const response = await axiosIntance.post(BASEURL + "auth/signup/", {
        email: credentials.email,
        password: credentials.password,
      });

      axiosIntance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      const tokens: JWTTokens = {
        access_token: response.data.token,
        refresh_token: response.data.refresh_token,
      };

      authStore.login(tokens);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logout = () => {
    axiosIntance.defaults.headers.common["Authorization"] = "";
    authStore.logout();
  };

  const checkToken = async () => {
    try {
      const accessToken = Cookies.get("access");
      const refreshToken = Cookies.get("refresh");

      const tokens: JWTTokens = {
        access_token: accessToken!,
        refresh_token: refreshToken!,
      };

      if (tokens) {
        const decodedToken = jwtDecode(tokens.access_token);
        if (decodedToken.exp! * 1000 > Date.now()) {
          authStore.login(tokens);
        } else {
          logout();
        }
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return {
    login,
    signup,
    logout,
    checkToken,
  };
}
