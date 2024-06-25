"use server";

import { AuthCredentials } from "@/api/auth";
import { authStorage } from "@/lib/storage";
import { signIn as doSignIn } from "@/service/auth";
import { cookies } from "next/headers";

export async function signIn(formData: FormData) {
  const data = Object.fromEntries(formData) as unknown as AuthCredentials;
  const authResult = await doSignIn(data);
  authStorage(cookies()).set(authResult);
}
