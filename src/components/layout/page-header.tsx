"use client";

import { useState } from "react";
import ActionBar from "./action-bar";
import CategoryBar from "./category-bar";
import PageBottomNavigation from "./page-bottom-navigation";
import PageMenu from "./page-menu";

export default function PageHeader() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header>
      <ActionBar setMenuOpened={setMenuOpened} />
      <CategoryBar />
      <PageMenu open={menuOpened} onOpenChange={setMenuOpened}>
        This is a sample text
      </PageMenu>
      <PageBottomNavigation className="sm:hidden" />
    </header>
  );
}
