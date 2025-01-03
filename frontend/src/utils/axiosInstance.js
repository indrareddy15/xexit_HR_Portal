import axios from "axios";
const REACT_APP_API_BASE_URL = "https://xexit-hr-portal.onrender.com/api";
const axiosInstance = axios.create({
  baseURL: REACT_APP_API_BASE_URL, // Use the base URL from .env
});

export default axiosInstance;
