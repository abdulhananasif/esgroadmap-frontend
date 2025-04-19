import axios from 'axios';
import {FailedRequest} from './type';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/`,
});

function handleLogout() {
  localStorage.clear();
  window.location.href = '/';
}

function checkTokenExpiration(token: string): boolean {
  const payload = JSON.parse(atob(token.split('.')[1]));
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
}

let isRefreshing = false;
let failedRequestsQueue: FailedRequest[] = [];

api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken) {
      const isExpired = checkTokenExpiration(accessToken);

      if (isExpired && refreshToken) {
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const response = await axios.post(
              `${API_BASE_URL}/api/v1/auth/renewToken`,
              {refreshToken}
            );
            const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
              response.data;

            localStorage.setItem('accessToken', newAccessToken);
            localStorage.setItem('refreshToken', newRefreshToken);

            failedRequestsQueue.forEach((req) => req.resolve(newAccessToken));
            failedRequestsQueue = [];
          } catch (error) {
            failedRequestsQueue.forEach((req) => req.reject(error));
            failedRequestsQueue = [];
            handleLogout();
            return Promise.reject(error);
          } finally {
            isRefreshing = false;
          }
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            resolve: (token) => {
              config.headers.Authorization = `Bearer ${token}`;
              resolve(config);
            },
            reject: (err) => reject(err),
          });
        });
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized: Please check your credentials.');
      handleLogout();
    }
    return Promise.reject(error);
  }
);

export default api;
