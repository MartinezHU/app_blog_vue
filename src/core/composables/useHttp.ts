import { ref, type Ref } from "vue";
import axios, { type AxiosRequestConfig } from "axios";

const BASEURL: string = import.meta.env.VITE_API_URL;

export function useApi<T>(endpoint: string) {
  const data: Ref<T | null> = ref(null);
  const error: Ref<string | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);

  /**
   * Method to fetch data from API endpoint
   * @param config
   * @returns Promise<T | null>
   */
  const getAll = async (config?: AxiosRequestConfig) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get<T>(BASEURL + endpoint, config);
      data.value = response.data;
      return response.data;
    } catch (error: any) {
      error.value = error.message || "Error al cargar datos";
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  const getById = async (id: number, config?: AxiosRequestConfig) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get<T>(
        BASEURL + endpoint + "/" + id,
        config
      );
      data.value = response.data;
      return response.data;
    } catch (error: any) {
      error.value = error.message || "Error al cargar datos";
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  const create = async (payload: Partial<T>, config?: AxiosRequestConfig) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await axios.post<T>(BASEURL + endpoint, payload, config);
      data.value = response.data;
      return response.data;
    } catch (error: any) {
      error.value = error.message || "Error al crear el registro";
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  const update = async (
    id: number,
    payload: Partial<T>,
    config?: AxiosRequestConfig
  ) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await axios.put<T>(
        BASEURL + endpoint + "/" + id,
        payload,
        config
      );
      data.value = response.data;
      return response.data;
    } catch (error: any) {
      error.value = error.message || "Error al actualizar el registro";
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  const patch = async (
    id: number,
    payload: Partial<T>,
    config?: AxiosRequestConfig
  ) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await axios.patch<T>(
        BASEURL + endpoint + "/" + id,
        payload,
        config
      );
      data.value = response.data;
      return response.data;
    } catch (error: any) {
      error.value = error.message || "Error al actualizar el registro";
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  const remove = async (id: number, config?: AxiosRequestConfig) => {
    isLoading.value = true;
    error.value = null;
    try {
      await axios.delete<T>(BASEURL + endpoint + "/" + id, config);
      data.value = null;
      return true;
    } catch (error: any) {
      error.value = error.message || "Error al eliminar el registro";
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    error,
    isLoading,
    getAll,
    getById,
    create,
    update,
    patch,
    remove,
  };
}
