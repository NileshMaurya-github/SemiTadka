import { useState, useEffect, useCallback } from "react";

const FAVORITES_KEY = "vegrecipe-favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = useCallback((recipeId: string) => {
    setFavorites((prev) => {
      if (prev.includes(recipeId)) return prev;
      return [...prev, recipeId];
    });
  }, []);

  const removeFavorite = useCallback((recipeId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== recipeId));
  }, []);

  const toggleFavorite = useCallback((recipeId: string) => {
    setFavorites((prev) => {
      if (prev.includes(recipeId)) {
        return prev.filter((id) => id !== recipeId);
      }
      return [...prev, recipeId];
    });
  }, []);

  const isFavorite = useCallback(
    (recipeId: string) => favorites.includes(recipeId),
    [favorites]
  );

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    count: favorites.length,
  };
};
