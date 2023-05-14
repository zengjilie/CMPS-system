import Axios, { AxiosRequestConfig } from "axios";
import { UserType } from "../types";

const BASE_URL =
  "https://xqvgyy0ll7.execute-api.ap-northeast-1.amazonaws.com/prod";

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
    console.log("response", response);
    return response.data;
  },
};
