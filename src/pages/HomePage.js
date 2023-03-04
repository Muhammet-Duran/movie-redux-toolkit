import { useEffect } from "react";
import Filters from "components/Filters/Filters";
import {
  useGetMoviesQuery,
  useGetTvEpisodesQuery,
  useGetReleaseYearQuery,
} from "features/movieApi";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import Main from "components/Main/Main";
import { selectCategory } from "features/cardSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectCategory({ category: "popular", skip: true }));
  }, []);

  const { category, year, skip } = useSelector((state) => state.cardSlice);
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
  } else if (category === "episode") {
    filmData = episodesMovies;
    fetching = episodesFetching;
    error = episodesError;
  }
  return (
    <>
      <Filters />
      <Main error={error} isLoading={fetching} data={filmData} />
    </>
  );
};

export default HomePage;
