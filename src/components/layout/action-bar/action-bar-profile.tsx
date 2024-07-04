"use client";

import SignInDialog from "@/components/auth/sign-in-dialog";
import { User } from "lucide-react";
import { useState } from "react";
import ActionBarButton from "./action-bar-button";

export default function ActionBarProfile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SignInDialog open={open} onOpenChange={setOpen} />
      <ActionBarButton
        icon={User}
        label="Войти"
        onClick={(e) => setOpen(true)}
      />
    </>
  );
}
