import axios from "axios";

const axiosSetup = axios.create({
  withCredentials: true,
  baseURL: "https://dev.switch-tech.ru/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
  },
});

axiosSetup.interceptors.request.use(function (config) {
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${refreshToken}`,
    };
  }

  return config;
});

export default axiosSetup;
