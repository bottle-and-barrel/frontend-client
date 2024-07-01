import { cn } from "@/lib/util";
import { HTMLAttributes, useMemo } from "react";
import ProductCardSkeleton from "./product-card-skeleton";

export interface ProductListProps extends HTMLAttributes<HTMLUListElement> {
  total?: number;
}

export default function ProductListSkeleton({
  total = 8,
  className,
  ...props
}: ProductListProps) {
  const products = useMemo(() => [...Array(total)], [total]);

  return (
    <ul
      className={cn(
        "grid grid-cols-1 justify-center xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
        className
      )}
      {...props}
    >
      {products.map((v) => (
        <li key={v}>
          <ProductCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
