import { DialogProps } from "@radix-ui/react-dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

export interface PageMenuProps extends DialogProps {
  title?: string;
}

export default function PageMenu({
  children,
  title = "Каталог",
  ...props
}: PageMenuProps) {
  return (
    <Sheet {...props}>
      <SheetContent className="pt-6" side="left">
        <SheetHeader>
          <SheetTitle className="text-left">{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
