"use client";

import { useAppStore } from "@/components/providers/zustand";
import { cn, toIndicator } from "@/lib/util";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes } from "react";
import ActionBarButton from "./action-bar-button";
import ActionBarProfile from "./action-bar-profile";

export interface ActionBarButtonsProps
  extends HTMLAttributes<HTMLUListElement> {}

export default function ActionBarButtons({
  className,
  ...props
}: ActionBarButtonsProps) {
  const favorites = useAppStore((state) => state.favorites);

  return (
    <ul
      className={cn("flex md:gap-1 justify-center items-center", className)}
      {...props}
    >
      <li>
        <Link href="/wishlist">
          <ActionBarButton
            icon={Heart}
            label="Избранное"
            indicator={toIndicator(favorites)}
          />
        </Link>
      </li>
      <li>
        <ActionBarButton icon={ShoppingCart} label="Корзина" />
      </li>
      <li className="px-2 flex justify-center items-center">
        <ActionBarProfile />
      </li>
    </ul>
  );
}
