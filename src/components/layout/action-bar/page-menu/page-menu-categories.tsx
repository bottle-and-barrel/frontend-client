import { Button, ButtonProps } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/util";
import { Category, KEY, all } from "@/service/category";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface PageMenuCategoryProps extends ButtonProps {
  category: Category;
}
export interface PageMenuCategoriesProps
  extends HTMLAttributes<HTMLUListElement> {
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

function PageMenuSkeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("py-6 flex flex-col gap-6", className)} {...props}>
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
}

export function PageMenuCategories({
  className,
  onCategoryClick = () => {},
  ...props
}: PageMenuCategoriesProps) {
  const { data, isLoading } = useQuery({ queryKey: [KEY], queryFn: all });

  if (isLoading) return <PageMenuSkeleton />;
  return (
    <ul className={cn("py-4 h-full", className)} {...props}>
      <ScrollArea type="auto" className="h-full">
        <div className="mr-4 divide-y divide-border">
          {data!.map((c, i) => (
            <li key={i}>
              <PageMenuItem category={c} onClick={() => onCategoryClick(c)} />
            </li>
          ))}
        </div>
      </ScrollArea>
    </ul>
  );
}
