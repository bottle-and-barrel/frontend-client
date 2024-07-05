"use client";

import ActionBar from "../action-bar/action-bar";
import CategoryBar from "../category-bar/category-bar";
import PageBottomNavigation from "./page-bottom-navigation";

export default function PageHeader() {
  return (
    <header className="pb-2">
      <ActionBar />
      <CategoryBar className="mt-2 hidden xs:block" />
      <PageBottomNavigation className="xs:hidden" />
    </header>
  );
}
