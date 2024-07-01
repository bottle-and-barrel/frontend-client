import { Product } from "@/api/product";
import { cn } from "@/lib/util";
import { HTMLAttributes } from "react";
import ProductCard from "./product-card";

export interface ProductListProps extends HTMLAttributes<HTMLUListElement> {
  products: Product[];
}

export default function ProductList({
  products,
  className,
  ...props
}: ProductListProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 justify-center xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
        className
      )}
      {...props}
    >
      {products.map((p) => (
        <li key={p.id}>
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  );
}
