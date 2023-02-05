import { useEffect, useState } from "react";

import Filters from "components/Filters/Filters";
import Movies from "components/Movies/Movies";
import {
  useGetMoviesQuery,
  useGetTvEpisodesQuery,
  useGetReleaseYearQuery,
} from "features/movieApi";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import Main from "components/Main/Main";
// import { movieQuery } from "features/cardSlice";

const HomePage = () => {
  // const dispatch = useDispatch();
  // const { query } = useSelector((state) => state.cardSlice);
  // const [movieSearch, setMovieSearch] = useState(query);

  // const { data:popularMovies, error, isLoading } = useGetMoviesQuery();
  const { year, skip } = useSelector((state) => state.cardSlice);
  const { category } = useSelector((state) => state.cardSlice);
  // const [skip, setSkip] = useState(true);
  console.log(category, "seçilen kategori");

  const [debouncedSearchQuery] = useDebounce(year, 500);

  const {
    data: popularMovies,
    error: popularError,
    isFetching: popularFetching,
    isSuccess: popularSuccess,
  } = useGetMoviesQuery();
  const {
    data: episodesMovies,
    error: episodesError,
    isFetching: episodesFetching,
    isSuccess: episodesSuccess,
    isLoading: episodesLoading,
  } = useGetTvEpisodesQuery();
  const {
    data: byYearsMovies,
    error: byYearsError,
    isFetching: byYearsFetching,
    isLoading: byYearsLoading,
    isSuccess: byYearsSuccess,
  } = useGetReleaseYearQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery === "",
  });
  let filmData = popularMovies;
  let fetching = popularFetching;
  let error = popularError;
  if (year?.length === 4) {
    filmData = byYearsMovies;
    fetching = byYearsFetching;
    error = byYearsError;
  }
  if (category === "episode") {
    filmData = episodesMovies;
    fetching = episodesFetching;
    error = episodesError;
  }

  // console.log(
  //   "byYearsMovies-->",
  //   byYearsMovies,
  //   "error-->",
  //   byYearsError,
  //   "isFetching-->",
  //   byYearsFetching,
  //   "isLoading-->",
  //   byYearsLoading,
  //   "isSuccess-->",
  //   byYearsSuccess,
  //   filmData
  // );
  console.log(
    "byYearsMovies-->",
    episodesMovies,
    "error-->",
    episodesError,
    "isFetching-->",
    episodesFetching,
    "isLoading-->",
    episodesLoading,
    // "isSuccess-->",
    // episodesSuccess,
    filmData
  );
  return (
    <>
      <Filters />
      {/* {year?.length === 4 && (
        <Main
          error={popularError}
          isLoading={byYearsLoading}
          data={byYearsMovies}
        />
      )}
      {popularSuccess && (
        <Main
          error={popularError}
          isLoading={popularLoading}
          data={popularMovies}
        />
      )} */}
      <Main error={error} isLoading={fetching} data={filmData} />
    </>
  );
};

export default HomePage;
