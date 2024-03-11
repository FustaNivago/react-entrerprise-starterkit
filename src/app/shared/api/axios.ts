import axios, { AxiosInstance } from 'axios';

const getApiUrl = (controllerName: string) => `${import.meta.env.VITE_API_BASE_URL}/${controllerName}`;

enum ApiControllers {
  Users = 'users',
}

const apiUrl: Record<ApiControllers, string> = {
  [ApiControllers.Users]: getApiUrl('users'),
};

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    withCredentials: true,
  });
};

const api = createAxiosInstance();
const apiSilent = createAxiosInstance();

export interface RequestConfig<T> {
  onSuccess?: (data: T) => void;
  onError?: () => void;
  onComplete?: () => void;
  silent?: boolean;
}

const apiGet = async <T>(endpoint: string, data: any, config?: RequestConfig<T>) => {
  try {
    const aixios = config?.silent ? apiSilent : api;
    const response = await aixios.get<T>(endpoint, {
      params: {
        ...data,
      },
    });
    if (response.data) {
      config?.onSuccess?.(response.data);
    } else {
      config?.onError?.();
    }
  } catch {
    config?.onError?.();
  } finally {
    config?.onComplete?.();
  }
};

export { api, apiGet, apiUrl };
