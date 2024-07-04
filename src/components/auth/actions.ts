"use server";

import { AuthCredentials } from "@/api/auth";
import { authStorage } from "@/lib/storage";
import { signIn as doSignIn } from "@/service/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface ActionData extends AuthCredentials {
  redirect?: boolean;
}

export async function signIn(formData: FormData) {
  const dataObject = Object.fromEntries(formData) as unknown as ActionData;
  const { redirect: shouldRedirect, ...credentials } = dataObject;

  try {
    const authResult = await doSignIn(credentials);
    authStorage(cookies()).set(authResult);
  } catch {
    if (shouldRedirect) redirect("/sign-in?error=credentials");
    return false;
  }

  if (shouldRedirect) redirect("/");
  return true;
}
