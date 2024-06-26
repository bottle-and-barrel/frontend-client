"use server";

import { AuthCredentials } from "@/api/auth";
import { authStorage } from "@/lib/storage";
import { signIn as doSignIn } from "@/service/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const data = Object.fromEntries(formData) as unknown as AuthCredentials;

  try {
    const authResult = await doSignIn(data);
    authStorage(cookies()).set(authResult);
  } catch {
    redirect("/sign-in?error=credentials");
  }

  redirect("/");
}
