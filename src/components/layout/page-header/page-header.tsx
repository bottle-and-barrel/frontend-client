"use client";

import { Skeleton } from "@/components/ui/skeleton";
import LoadingWrapper from "@/components/util/loading-wrapper";
import { cn } from "@/lib/util";
import { all } from "@/service/category";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes, useState } from "react";
import ActionBar from "../action-bar/action-bar";
import CategoryBar from "../category-bar/category-bar";
import PageBottomNavigation from "./page-bottom-navigation";
import PageMenu from "./page-menu";
import { PageMenuCategories } from "./page-menu-categories";

function CategoryBarSkeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-2 py-4 flex gap-4", className)} {...props}>
      <Skeleton className="h-4 w-[80px]" />
      <Skeleton className="h-4 w-[120px]" />
      <Skeleton className="h-4 w-[95px]" />
      <Skeleton className="h-4 w-[65px]" />
    </div>
  );
}

function MenuSkeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
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

export default function PageHeader() {
  const [menuOpened, setMenuOpened] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: all,
  });

  return (
    <header>
      <ActionBar setMenuOpened={setMenuOpened} />
      <LoadingWrapper
        isLoading={isLoading}
        isError={isError}
        skeleton={<CategoryBarSkeleton className="hidden xs:flex" />}
      >
        <CategoryBar className="mt-2 hidden xs:block" categories={data || []} />
      </LoadingWrapper>
      <PageMenu open={menuOpened} onOpenChange={setMenuOpened}>
        <LoadingWrapper
          isLoading={isLoading}
          isError={isError}
          skeleton={<MenuSkeleton />}
        >
          <PageMenuCategories categories={data || []} />
        </LoadingWrapper>
      </PageMenu>
      <PageBottomNavigation className="xs:hidden" />
    </header>
  );
}
