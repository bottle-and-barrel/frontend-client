"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button, ButtonProps } from "../../ui/button";
import { PageMenuCategories } from "../categories/page-menu-categories";
import PageMenu from "./page-menu/page-menu";

export interface ActionBarMenuProps extends ButtonProps {}

export default function ActionBarMenu({ ...props }: ActionBarMenuProps) {
  const [open, setMenuOpen] = useState(false);

  return (
    <>
      <Button
        variant="text"
        size="icon"
        {...props}
        onClick={(e) => setMenuOpen(true)}
      >
        <Menu />
      </Button>
      <PageMenu open={open} onOpenChange={setMenuOpen}>
        <PageMenuCategories
          onCategoryClick={(category) => setMenuOpen(false)}
        />
      </PageMenu>
    </>
  );
}
