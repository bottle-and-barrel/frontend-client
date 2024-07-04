"use client";

import SignInForm from "@/components/auth/sign-in-form";
import { useToast } from "@/components/ui/use-toast";
import useAuthRedirect from "@/hooks/use-auth-redirect";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  useAuthRedirect(true, "/");

  const router = useRouter();
  const { toast } = useToast();

  const successHandler = () => {
    toast({ title: "Добро пожаловать!" });
    router.replace("/");
  };

  return (
    <div className="py-10 flex flex-col items-center gap-4">
      <Image src="/images/flat/1.jpg" alt="" width={256} height={256} />
      <h1 className="text-xl font-bold">Вход в личный кабинет</h1>
      <SignInForm onSuccess={successHandler} />
    </div>
  );
}
