"use client";

import {
  NavigationBar,
  NavigationBarButton,
  NavigationBarProps,
} from "@/components/ui/navigation-bar";
import useAuth from "@/hooks/use-auth";
import useBoundStore from "@/hooks/use-bound-store";
import { toIndicator } from "@/lib/util";
import { Heart, Home, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface PageBottomNavigationProps extends NavigationBarProps {}

export default function PageBottomNavigation(props: PageBottomNavigationProps) {
  const pathname = usePathname();
  const favorites = useBoundStore((state) => state.favorites);

  const authData = useAuth();
  const isLoggedIn = useMemo(() => authData !== undefined, [authData]);

  return (
    <NavigationBar {...props}>
      <Link href="/">
        <NavigationBarButton
          icon={Home}
          label="Главная"
          active={pathname == "/"}
        />
      </Link>
      <Link href="/wishlist">
        <NavigationBarButton
          icon={Heart}
          label="Избранное"
          active={pathname == "/wishlist"}
          indicator={toIndicator(favorites)}
        />
      </Link>
      <Link href="/cart">
        <NavigationBarButton
          icon={ShoppingCart}
          label="Корзина"
          active={pathname == "/cart"}
        />
      </Link>
      <Link href={isLoggedIn ? "/cabinet" : "/sign-in"}>
        <NavigationBarButton
          icon={User}
          label={isLoggedIn ? "Личный кабинет" : "Вход"}
          active={pathname == (isLoggedIn ? "/cabinet" : "/sign-in")}
        />
      </Link>
    </NavigationBar>
  );
}
