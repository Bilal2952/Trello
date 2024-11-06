import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://d26f35ddc100b379.mokky.dev",
  timeout: 8000,
  headers: { Accept: "application/json" },
});
