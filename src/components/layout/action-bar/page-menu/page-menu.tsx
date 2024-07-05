import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { DialogProps } from "@radix-ui/react-dialog";

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
