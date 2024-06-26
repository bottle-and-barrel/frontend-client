import { RedirectType, redirect } from "next/navigation";
import useAuth from "./use-auth";
import { useUpdateEffect } from "./use-update-effect";

export default function useAuthRedirect(
  expectedAuthState: boolean,
  url: string,
  type?: RedirectType | undefined
): void | never {
  const authData = useAuth();
  useUpdateEffect(() => {
    const hasAuthData = authData !== undefined;
    if (hasAuthData === expectedAuthState) redirect(url, type);
  }, [authData]);
}
