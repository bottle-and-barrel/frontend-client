import { Button, ButtonProps } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/util";
import { Category } from "@/service/category";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface PageMenuCategoryProps extends ButtonProps {
  category: Category;
}
export interface PageMenuCategoriesProps
  extends HTMLAttributes<HTMLUListElement> {
  categories: Category[];
  onCategoryClick?: (category: Category) => void;
}

function PageMenuItem({
  category,
  className,
  ...props
}: PageMenuCategoryProps) {
  return (
    <Button
      variant="text"
      className={cn("py-6 w-full justify-start", className)}
      asChild
      {...props}
    >
      <Link href={category.link}>{category.name}</Link>
    </Button>
  );
}

export function PageMenuCategories({
  categories,
  className,
  onCategoryClick = () => {},
  ...props
}: PageMenuCategoriesProps) {
  return (
    <ul className={cn("py-4 h-full", className)} {...props}>
      <ScrollArea type="auto" className="h-full">
        <div className="mr-4 divide-y divide-border">
          {categories.map((c, i) => (
            <li key={i}>
              <PageMenuItem category={c} onClick={() => onCategoryClick(c)} />
            </li>
          ))}
        </div>
      </ScrollArea>
    </ul>
  );
}
