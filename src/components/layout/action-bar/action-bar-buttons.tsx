"use client";

import useBoundStore from "@/hooks/use-bound-store";
import { cn, toIndicator } from "@/lib/util";
import { Heart, ShoppingCart } from "lucide-react";
import { HTMLAttributes } from "react";
import ActionBarButton from "./action-bar-button";
import ActionBarProfile from "./action-bar-profile";

export interface ActionBarButtonsProps
  extends HTMLAttributes<HTMLUListElement> {}

export default function ActionBarButtons({
  className,
  ...props
}: ActionBarButtonsProps) {
  const favorites = useBoundStore((state) => state.favorites);

  return (
    <ul className={cn("flex md:gap-1", className)}>
      <li>
        <ActionBarButton
          icon={Heart}
          label="Избранное"
          indicator={toIndicator(favorites)}
        />
      </li>
      <li>
        <ActionBarButton icon={ShoppingCart} label="Корзина" />
      </li>
      <li>
        <ActionBarProfile />
      </li>
    </ul>
  );
}
