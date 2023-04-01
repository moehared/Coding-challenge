import React, { createContext, useState, useContext } from "react";
import { MovieDetail } from "../../models/MovieDetails";

interface FavoriteContextProps {
  favoriteMovies: MovieDetail[];
  addFavorite: (movie: MovieDetail) => void;
  removeFavorite: (imdbID: string) => void;
  isFavorite: (imdbID: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextProps | undefined>(
  undefined
);

interface FavoriteProviderProps {
  children: React.ReactNode;
}

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieDetail[]>([]);

  const addFavorite = (movie: MovieDetail): void => {
    setFavoriteMovies((prevState) => [...prevState, movie]);
  };

  const removeFavorite = (imdbID: string): void => {
    setFavoriteMovies((prevState) =>
      prevState.filter((movie) => movie.imdbID !== imdbID)
    );
  };

  const isFavorite = (imdbID: string): boolean => {
    return favoriteMovies.some((movie) => movie.imdbID === imdbID);
  };

  const value = {
    favoriteMovies,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = (): FavoriteContextProps => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};
