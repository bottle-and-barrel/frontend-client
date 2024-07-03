"use client";

import ProductCard from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import CardList from "@/components/ui/card-list";
import useBoundStore from "@/hooks/use-bound-store";
import { HeartCrack } from "lucide-react";
import Link from "next/link";

function WishlistNoItems() {
  return (
    <div className="py-4 flex flex-col items-center text-center gap-3">
      <HeartCrack className="text-primary" size={64} />
      <h1 className="text-lg">Кажется, тут пусто..</h1>
      <p className="text-black/60 font-light">
        Понравился товар? Сохраните его в избранные и он окажется здесь!
      </p>
      <Link href="/">
        <Button>Продолжить покупки</Button>
      </Link>
    </div>
  );
}

export default function WishlistPage() {
  const favorites = useBoundStore((state) => state.favorites);

  if (favorites.length === 0) return <WishlistNoItems />;
  return (
    <CardList
      items={favorites}
      itemBase={ProductCard}
      itemKey={(item) => item}
    />
  );
}
