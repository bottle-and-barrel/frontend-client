import { cn } from "@/lib/util";
import { HTMLAttributes } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export interface ActionBarSearchProps extends HTMLAttributes<HTMLFormElement> {}

export default function ActionBarSearch({
  className,
  ...props
}: ActionBarSearchProps) {
  return (
    <form className={cn("relative", className)} {...props}>
      <Input type="text" className="h-12" autoComplete="off" />
      <Button
        type="submit"
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        size="sm"
      >
        Поиск
      </Button>
    </form>
  );
}
