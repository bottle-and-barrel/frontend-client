import client, { refreshHeader, skipTokenHeader } from "@/lib/axios";
import { type User } from "./user";

const ENDPOINT = "/auth";

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthRefreshCredentials {
  refresh_token: AuthToken | string;
}

export interface AuthToken {
  token: string;
  expires: number;
}

export interface AuthResult {
  user_id: number;
  access_token: AuthToken;
  refresh_token: AuthToken;
}

export async function auth(credentials: AuthCredentials) {
  const { data } = await client.post(ENDPOINT, credentials);
  return data as AuthResult;
}

export async function refresh(credentials: AuthRefreshCredentials) {
  const possibleToken = credentials.refresh_token;
  const token =
    typeof possibleToken === "string" ? possibleToken : possibleToken.token;

  const headers = {
    Authorization: `Bearer ${token}`,
    [refreshHeader]: true,
    [skipTokenHeader]: true,
  };
  const { data } = await client.post(`${ENDPOINT}/refresh`, {}, { headers });
  return data as AuthResult;
}

export async function me() {
  const { data } = await client.get(`${ENDPOINT}/me`);
  return data as User;
}
