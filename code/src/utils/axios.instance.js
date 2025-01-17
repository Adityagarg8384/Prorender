import axios from "axios";
const BACKEND_URL = process.env.BACKEND_URL;

const axiosInstance = axios.create({
  // baseURL: `${BACKEND_URL}api/`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
