import { ReactNode } from "react";

export default function WishlistLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Избранные товары</h1>
      {children}
    </div>
  );
}
