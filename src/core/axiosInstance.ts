import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "X-App-Version": "1.0.0",
    // "X-App-Platform": "web",
    // "X-App-Language": "es",
    "X-App-Name": "app_blog",
  },
});

axiosIntance.interceptors.request.use(
  (config) => {
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);

axiosIntance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default axiosIntance;
