import { create } from "zustand";
import { syncTabs } from "zustand-sync-tabs";
import { persist } from "zustand/middleware";
import createFavoriteSlice, { FavoriteSlice } from "../store/favorite";

type StoreType = FavoriteSlice;

const useBoundStore = create<StoreType>()(
  persist(
    syncTabs(
      (...a) => ({
        ...createFavoriteSlice(...a),
      }),
      {
        name: "app-storage",
      }
    ),
    { name: "app-storage" }
  )
);

export default useBoundStore;
