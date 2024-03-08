import { CardData } from "../models/CardData";
import createAxiosInstance from "./apiClient";

export const popularApi = {
  getAll: async function (): Promise<CardData[]> {
    const axiosInstance = createAxiosInstance();

    const response = await axiosInstance.request({
      url: `/popular`,
      method: "GET",
    });
    return response.data;
  },
};
