"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { me } from "@/service/auth";
import { useQuery } from "@tanstack/react-query";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export default function UserProfile() {
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => me(),
  });

  if (isLoading) return <Skeleton className="w-8 h-8 rounded-full" />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/images/placeholders/user.png" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{data!.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/cabinet">
            <User className="mr-2 h-4 w-4" />
            <span>Личный кабинет</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/sign-out"
            prefetch={false}
            onClick={(e) => window.location.reload()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Выход</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
