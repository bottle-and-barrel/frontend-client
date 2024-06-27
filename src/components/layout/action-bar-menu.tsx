import { Menu } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

export interface ActionBarMenuProps extends ButtonProps {}

export default function ActionBarMenu({ ...props }: ActionBarMenuProps) {
  return (
    <Button variant="text" size="icon" {...props}>
      <Menu />
    </Button>
  );
}
