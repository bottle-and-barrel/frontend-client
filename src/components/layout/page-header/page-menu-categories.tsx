import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/util";
import { Category } from "@/service/category";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface PageMenuCategoryProps extends HTMLAttributes<HTMLLIElement> {
  category: Category;
}
export interface PageMenuCategoriesProps
  extends HTMLAttributes<HTMLUListElement> {
  categories: Category[];
}

function PageMenuItem({
  category,
  className,
  ...props
}: PageMenuCategoryProps) {
  return (
    <li className={cn("", className)} {...props}>
      <Button variant="text" className="py-6 w-full justify-start" asChild>
        <Link href={category.link}>{category.name}</Link>
      </Button>
    </li>
  );
}

export function PageMenuCategories({
  categories,
  className,
  ...props
}: PageMenuCategoriesProps) {
  return (
    <ul className={cn("py-4 h-full", className)} {...props}>
      <ScrollArea type="auto" className="h-full">
        <div className="mr-4 divide-y divide-border">
          {categories.map((c, i) => (
            <PageMenuItem key={i} category={c} />
          ))}
        </div>
      </ScrollArea>
    </ul>
  );
}
