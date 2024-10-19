import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create a new instance of axios with a custom config for public endpoints
const api = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

// Create a new instance of axios with a custom config for protected endpoints
const authApi = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

// Add a request interceptor to attach the access token to the authApi instance
authApi.interceptors.request.use(
  async function (config) {
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export { api, authApi };
