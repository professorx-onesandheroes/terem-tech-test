import { CardData } from "../models/CardData";
import createAxiosInstance from "./apiClient";

export const featuredApi = {
  getAll: async function (): Promise<CardData[]> {
    const axiosInstance = createAxiosInstance();

    const response = await axiosInstance.request({
      url: `/featured`,
      method: "GET",
    });
    return response.data;
  },
};
