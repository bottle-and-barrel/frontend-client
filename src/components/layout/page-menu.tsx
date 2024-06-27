import { DialogProps } from "@radix-ui/react-dialog";
import { Sheet, SheetContent } from "../ui/sheet";

export interface PageMenuProps extends DialogProps {}

export default function PageMenu({ children, ...props }: PageMenuProps) {
  return (
    <Sheet {...props}>
      <SheetContent className="pt-12" side="left">
        {children}
      </SheetContent>
    </Sheet>
  );
}
