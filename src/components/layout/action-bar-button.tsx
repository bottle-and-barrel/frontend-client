import { cn } from "@/lib/util";
import { LucideProps } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

export interface ActionBarButtonProps extends ButtonProps {
  icon: React.FC<LucideProps>;
  label: string;
}

export default function ActionBarButton({
  className,
  icon: Icon,
  label,
  ...props
}: ActionBarButtonProps) {
  return (
    <Button
      variant="text"
      size="sm"
      className={cn("flex-col h-16", className)}
      {...props}
    >
      <Icon strokeWidth={1} height={32} />
      <p className="text-xs font-light">{label}</p>
    </Button>
  );
}
