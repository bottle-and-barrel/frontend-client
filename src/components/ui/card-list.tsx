import { cn } from "@/lib/util";
import { ComponentType, HTMLAttributes } from "react";

type WithOptionalItem<T> = T extends { item: infer U } ? { item: U } : T;

export interface CardListProps<T> extends HTMLAttributes<HTMLUListElement> {
  items: T[];
  itemBase: ComponentType<WithOptionalItem<{ item: T }>>;
}

export default function CardList<T>({
  items,
  itemBase: ItemBase,
  className,
  ...props
}: CardListProps<T>) {
  const elementClass =
    "grid grid-cols-1 justify-center xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

  return (
    <ul className={cn(elementClass, className)} {...props}>
      {items.map((item, i) => (
        <li key={i}>
          <ItemBase item={item} />
        </li>
      ))}
    </ul>
  );
}
