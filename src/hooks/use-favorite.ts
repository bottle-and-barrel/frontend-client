import { useEffect, useRef, useState } from "react";
import useBoundStore from "./use-bound-store";

export default function useFavorite(
  id: number
): [boolean, (state: boolean) => void] {
  const favorites = useRef(useBoundStore.getState().favorites);
  const [toggleFavorite, isFavorite] = useBoundStore((state) => [
    state.toggleFavorite,
    state.isFavorite,
  ]);
  const [isProductFavorite, setProductFavorite] = useState(false);

  useEffect(() => {
    setProductFavorite(isFavorite(id));

    return useBoundStore.subscribe((state) => {
      favorites.current = state.favorites;
      setProductFavorite(state.isFavorite(id));
    });
  }, [id, isFavorite]);

  const toggleProductFavorite = (state: boolean) => toggleFavorite(id, state);
  return [isProductFavorite, toggleProductFavorite];
}
