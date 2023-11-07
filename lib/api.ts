import Axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.API_END_POINT || "";

interface RequestType {
  path: string;
  data: any;
  params?: any;
}

export const API = {
  post: async <T>({ path, data, params }: RequestType) => {
    const config: AxiosRequestConfig = {
      method: "post",
      url: `${BASE_URL}${path}`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
      params,
    };

    const response = await Axios.request<T>(config);
    return response;
  },

  patch: async <T>({ path, data, params }: RequestType) => {
    const config: AxiosRequestConfig = {
      method: "patch",
      url: `${BASE_URL}${path}`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
      params,
    };

    const response = await Axios.request<T>(config);
    return response.data;
  },
};
