import axios from "axios";

const createAxiosInstance = (token: string | null = null) => {
  let axiosConfig = {
    baseURL: "", // TODO: A base url should be stored and read from config/env file
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "",
    },
    timeout: 30 * 1000,
  };

  if (token) {
    axiosConfig = {
      ...axiosConfig,
      headers: { ...axiosConfig.headers, Authorization: `Bearer ${token}` },
    };
  }

  const axiosInstance = axios.create(axiosConfig);

  return axiosInstance;
};

export default createAxiosInstance;
