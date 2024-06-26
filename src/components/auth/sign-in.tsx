"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { signIn } from "./actions";

export default function SignInForm() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("123123");

  const params = useSearchParams();
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
      {params.get("error") && <p>Invalid login and/or password</p>}
    </form>
  );
}
