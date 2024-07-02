import { create } from "zustand";
import { syncTabs } from "zustand-sync-tabs";
import createFavoriteSlice, { FavoriteSlice } from "../store/favorite";

type StoreType = FavoriteSlice;

const useBoundStore = create<StoreType>()(
  syncTabs(
    (...a) => ({
      ...createFavoriteSlice(...a),
    }),
    {
      name: "app-storage",
    }
  )
);

export default useBoundStore;
