import { HTMLAttributes } from "react";

import { cn } from "@/lib/util";

export interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn("px-8 py-4 size-full flex flex-col", className)}
      {...props}
    >
      {children}
    </div>
  );
}
