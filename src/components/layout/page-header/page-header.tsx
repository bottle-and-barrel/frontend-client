"use client";

import { Skeleton } from "@/components/ui/skeleton";
import LoadingWrapper from "@/components/util/loading-wrapper";
import { cn } from "@/lib/util";
import { KEY, all } from "@/service/category";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";
import ActionBar from "../action-bar/action-bar";
import CategoryBar from "../category-bar/category-bar";
import PageBottomNavigation from "./page-bottom-navigation";

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

export default function PageHeader() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [KEY],
    queryFn: all,
  });

  return (
    <header className="pb-2">
      <ActionBar />
      <LoadingWrapper
        isLoading={isLoading}
        isError={isError}
        skeleton={<CategoryBarSkeleton className="hidden xs:flex" />}
      >
        <CategoryBar className="mt-2 hidden xs:block" categories={data || []} />
      </LoadingWrapper>
      <PageBottomNavigation className="xs:hidden" />
    </header>
  );
}
