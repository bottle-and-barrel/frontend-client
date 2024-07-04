import { cn } from "@/lib/util";
import { LucideProps } from "lucide-react";
import { HTMLAttributes } from "react";

export interface ActionBarButtonProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.FC<LucideProps>;
  label: string;
  indicator?: string;
}

export default function ActionBarButton({
  className,
  icon: Icon,
  label,
  indicator,
  ...props
}: ActionBarButtonProps) {
  const elementClass =
    "rounded-md px-3 flex flex-col justify-center items-center h-16 text-primary hover:text-accent";
  return (
    <div className={cn(elementClass, className)} {...props}>
      <div className="relative">
        <Icon strokeWidth={1} height={32} />
        {indicator && (
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-light text-white bg-accent border-2 border-white rounded-full -top-1 -end-2">
            {indicator}
          </div>
        )}
      </div>
      <p className="text-xs font-light hidden md:block">{label}</p>
    </div>
  );
}
