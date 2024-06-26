"use client";

import useAuthRedirect from "@/hooks/use-auth-redirect";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { signIn } from "./actions";

function SignInErrorMessage() {
  const params = useSearchParams();
  const isError = !!params.get("error");
  if (!isError) return null;

  return <p>Invalid login and/or password</p>;
}

export default function SignInForm() {
  useAuthRedirect(true, "/");

  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("123123");

  return (
    <form action={signIn} className="flex flex-col gap-2">
      <input
        className="border"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="border">
        Send!
      </button>
      <Suspense>
        <SignInErrorMessage />
      </Suspense>
    </form>
  );
}
