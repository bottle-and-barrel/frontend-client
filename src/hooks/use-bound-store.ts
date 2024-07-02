import { create } from "zustand";
import { persist } from "zustand/middleware";
import createFavoriteSlice, { FavoriteSlice } from "../store/favorite";

type StoreType = FavoriteSlice;

const useBoundStore = create<StoreType>()(
  persist(
    (...a) => ({
      ...createFavoriteSlice(...a),
    }),
    {
      name: "app-storage",
    }
  )
);

export default useBoundStore;
