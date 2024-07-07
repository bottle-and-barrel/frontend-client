"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button, LinkButton } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useAuthRedirect from "@/hooks/use-auth-redirect";
import Image from "next/image";
import ProfileInfo from "./components/ProfileInfo";
import { RecentOrdersTable } from "./components/RecentOrdersTable";

export default function CabinetPage() {
  useAuthRedirect(false, "/");

  return (
    <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr_300px]">
      <section className="px-2 flex flex-col gap-2 order-2 lg:px-5 md:order-none">
        <Image
          src="/images/placeholders/user.png"
          alt="Avatar"
          width={260}
          height={400}
          className="hidden rounded w-[184px] h-auto md:block lg:w-[260px]"
        />
        <Button variant="secondary">Редактировать</Button>
        <LinkButton
          href="/sign-out"
          prefetch={false}
          variant="secondary"
          onClick={(e) => window.location.reload()}
        >
          Выход
        </LinkButton>
      </section>
      <section className="flex flex-col gap-4">
        <Tabs defaultValue="orders" className="w-full">
          <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0">
            <div className="flex items-center gap-2">
              <Avatar className="inline-flex md:hidden">
                <AvatarImage src="/images/placeholders/user.png" />
              </Avatar>
              <h1 className="inline font-semibold text-2xl">
                Привет, StarPanda!
              </h1>
            </div>
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="orders">Заказы</TabsTrigger>
              <TabsTrigger value="info">Обо мне</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="orders" className="py-2">
            <div className="space-y-2">
              <h2 className="text-sm text-black/60">
                Вот твои недавние заказы:
              </h2>
              <RecentOrdersTable />
            </div>
          </TabsContent>
          <TabsContent value="info" className="py-2">
            <ProfileInfo />
          </TabsContent>
        </Tabs>
      </section>
      <div></div>
    </div>
  );
}
