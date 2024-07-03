"use client";

import { Product } from "@/api/product";
import useFavorite from "@/hooks/use-favorite";
import { cn } from "@/lib/util";
import { HeartIcon } from "lucide-react";
import { HTMLAttributes, MouseEvent, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ImageWithFallback from "../util/image-with-fallback";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  item: Product;
}

function ProductCardFavorite({ item }: { item: Product }) {
  const [isFavorite, setFavorite] = useFavorite(item.id);
  const [heartBeat, setHeartbeat] = useState(false);

  const elementClass =
    "text-primary/30 transition hover:text-primary/50 hover:scale-110";

  const clickHandler = (e: MouseEvent) => {
    setHeartbeat(true);
    setFavorite(!isFavorite);
  };

  return (
    <div className="absolute right-4 top-4 z-10">
      <Button
        variant="text"
        size="icon"
        title="Добавить в избранное"
        className={cn(
          elementClass,
          heartBeat && "animate-[heart-pulse_ease-in-out_0.5s]"
        )}
        onClick={clickHandler}
        onAnimationEnd={(e) => setHeartbeat(false)}
      >
        <HeartIcon fill={isFavorite ? "hsl(var(--accent))" : "transparent"} />
      </Button>
    </div>
  );
}

export default function ProductCard({
  item,
  className,
  ...props
}: ProductCardProps) {
  const priceWithoutDiscount = item.price * 1.4;

  return (
    <div
      className={cn(
        "relative p-4 flex flex-col items-center gap-2 transition hover:scale-105 hover:bg-secondary",
        className
      )}
      {...props}
    >
      <ProductCardFavorite item={item} />

      <div className="relative w-full aspect-square">
        <ImageWithFallback
          className="object-contain"
          src={item.images?.[0]}
          fallbackSrc="/images/placeholders/product.png"
          alt={item.name}
          fill={true}
        />
      </div>
      <div className="text-center">
        <h1>{item.name}</h1>
        <p className="text-sm font-light text-black/50">
          Италия, красное, сухое, 0.75л
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-sm line-through text-black/50">
          {priceWithoutDiscount} Р
        </p>
        <Badge>-40%</Badge>
      </div>
      <h2 className="text-xl font-semibold text-accent">{item.price} Р</h2>
      <Button>В корзину</Button>
    </div>
  );
}
