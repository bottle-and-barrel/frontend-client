import { Product } from "@/api/product";
import { cn } from "@/lib/util";
import { HTMLAttributes } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ImageWithFallback from "../util/image-with-fallback";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export default function ProductCard({
  product,
  className,
  ...props
}: ProductCardProps) {
  const priceWithoutDiscount = product.price * 1.4;

  return (
    <div
      className={cn(
        "p-4 flex flex-col items-center gap-2 transition hover:scale-105 hover:bg-secondary",
        className
      )}
      {...props}
    >
      <div className="relative w-full aspect-square">
        <ImageWithFallback
          className="object-contain"
          src={product.images?.[0]}
          fallbackSrc="/images/placeholders/product.png"
          alt={product.name}
          fill={true}
        />
      </div>
      <div className="text-center">
        <h1 className="">{product.name}</h1>
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
      <h2 className="text-xl font-semibold text-accent">{product.price} Р</h2>
      <Button>В корзину</Button>
    </div>
  );
}
