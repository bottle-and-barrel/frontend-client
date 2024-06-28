"use client";

import { all } from "@/service/category";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import LoadingWrapper from "../util/loading-wrapper";
import ActionBar from "./action-bar";
import CategoryBar from "./category-bar";
import PageBottomNavigation from "./page-bottom-navigation";
import PageMenu from "./page-menu";

function CategoryBarSkeleton() {
  return (
    <div className="px-2 py-4 flex gap-4">
      <Skeleton className="h-4 w-[80px]" />
      <Skeleton className="h-4 w-[120px]" />
      <Skeleton className="h-4 w-[95px]" />
      <Skeleton className="h-4 w-[65px]" />
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
        skeleton={<CategoryBarSkeleton />}
      >
        <CategoryBar className="mt-2 hidden xs:block" categories={data || []} />
      </LoadingWrapper>
      <PageMenu open={menuOpened} onOpenChange={setMenuOpened}>
        This is a sample text
      </PageMenu>
      <PageBottomNavigation className="xs:hidden" />
    </header>
  );
}
