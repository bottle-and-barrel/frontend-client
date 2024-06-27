import { cn } from "@/lib/util";
import { LucideProps } from "lucide-react";
import { HTMLAttributes } from "react";
import { Button, ButtonProps } from "./button";

export interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {}
export interface NavigationBarButtonProps extends ButtonProps {
  active?: boolean;
  icon: React.FC<LucideProps>;
  label: string;
}

export function NavigationBar({ className, ...props }: NavigationBarProps) {
  return (
    <nav
      className={cn(
        "px-4 flex gap-2 border-t w-full bg-background fixed left-0 bottom-0 z-10",
        className
      )}
      {...props}
    />
  );
}

export function NavigationBarButton({
  icon: Icon,
  label,
  active,
  className,
  ...props
}: NavigationBarButtonProps) {
  return (
    <Button
      variant="text"
      className={cn(
        "flex-grow flex-col h-14 text-black/50 data-[active=true]:text-primary",
        className
      )}
      data-active={active}
      {...props}
    >
      <Icon strokeWidth={active ? 1.5 : 1} height={48} />
      <p className="text-xs font-light">{label}</p>
    </Button>
  );
}
