import axios, { InternalAxiosRequestConfig } from "axios";
import { redirect } from "next/navigation";
import { authStorage } from "./storage";

export const skipTokenHeader = "X-Skip-Token";
export const refreshHeader = "X-Token-Refresh";

const tokenInterceptor = async (request: InternalAxiosRequestConfig) => {
  if (request.headers[skipTokenHeader]) return request;
  const authData = authStorage().get();
  if (authData) {
    setAuthorization(authData.access_token.token, request);
  } else {
    resetAuthorization(request);
  }
  return request;
};

const authErrorInterceptor = async (error: any) => {
  if (error.response === undefined || error.response.status !== 401)
    return Promise.reject(error);
  if (error.config.headers[refreshHeader]) return Promise.reject(error);
  if (error.config._isRetry) redirect("/sign-in");

  const originalRequest = error.config;
  originalRequest._isRetry = true;

  const authData = authStorage().get();
  if (!authData) redirect("/sign-in");

  // TODO: Refresh token
  redirect("/sign-in");
};

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

client.interceptors.request.use(tokenInterceptor);
client.interceptors.response.use((config) => config, authErrorInterceptor);

export function setAuthorization(
  token: string,
  config?: InternalAxiosRequestConfig
) {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
  if (config !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
}

export function resetAuthorization(config?: InternalAxiosRequestConfig) {
  delete client.defaults.headers.common.Authorization;
  if (config !== undefined) {
    delete config.headers.Authorization;
  }
}

export default client;
