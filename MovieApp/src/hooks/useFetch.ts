import { useState, useEffect, useCallback } from "react";
import { Movie } from "../models/Movie";
import { MovieDetail } from "../models/MovieDetails";

export const baseUrl = "http://www.omdbapi.com/";

export type MovieFetchState = FetchState<Movie[]>;
export type MovieDetailFetchState = FetchState<MovieDetail>;
type LoadingState = "idle" | "loading" | "success" | "error";

type FetchState<T> = {
  status: LoadingState;
  error?: string;
  data: T;
  refetch?: () => void;
};

const INITIAL_STATE: FetchState<any> = {
  status: "idle",
  data: undefined,
};

export const useFetch = <T extends unknown>(url: string): FetchState<T> => {
  const [state, setFetchState] = useState<FetchState<T>>(INITIAL_STATE);

  const fetchData = useCallback(async () => {
    setFetchState({ ...state, status: "loading" });

    try {
      const response = await fetch(url);
      const movieDetailsData = await response.json();

      if (movieDetailsData.Response === "False" || !response.ok) {
        setStateWithError(movieDetailsData.Error || response.statusText);
        return;
      }

      const movieSearchData = movieDetailsData.Search;
      setFetchState({ ...state, status: "success", data: movieSearchData || movieDetailsData });
    } catch (error: any) {
      setStateWithError(error.message);
    }
  }, [url]);

  const setStateWithError = (error: string) => {
    setFetchState({ ...state, status: "error", error });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    setFetchState({ ...state, status: "idle" });
    fetchData();
  };

  return {
    ...state,
    refetch,
  };
};
