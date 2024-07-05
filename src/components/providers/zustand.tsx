"use client";

import { Store, createAppStore } from "@/store";
import { ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

export type StoreApi = ReturnType<typeof createAppStore>;

export const StoreContext = createContext<StoreApi | undefined>(undefined);

export interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<StoreApi>();
  if (!storeRef.current) {
    storeRef.current = createAppStore();
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: Store) => T): T => {
  const storeContext = useAppStoreContext();
  return useStore(storeContext, selector);
};

export const useAppStoreContext = () => {
  const storeContext = useContext(StoreContext);
  if (!storeContext) {
    throw new Error("useAppStore should be used inside StoreProvider");
  }
  return storeContext;
};
