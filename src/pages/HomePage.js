import { useEffect, useState } from "react";

import Filters from "components/Filters/Filters";
import Movies from "components/Movies/Movies";
import {
  useGetMoviesQuery,
  useGetTvEpisodesQuery,
  useGetReleaseYearQuery,
  useGetSearchQuery,
} from "features/movieApi";
import { useDispatch, useSelector } from "react-redux";
import Main from "components/Main/Main";
// import { movieQuery } from "features/cardSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.cardSlice);
  // const [movieSearch, setMovieSearch] = useState(query);

  const { data, error, isLoading } = useGetMoviesQuery();
  const { data: movieSearchData, isFetching } = useGetSearchQuery(query);
  // const { data: moviesEpisodes } = useGetTvEpisodesQuery();
  console.log(movieSearchData, "src");
  // console.log(data, "datasss");

  // console.log(query);
  // useEffect(() => {
  //   m
  // }, [query]);
  // // console.log(query, "onSubmit");
  // // console.log(movieSearch, "arama");

  return (
    <>
      <Filters />
      <Main
        error={error}
        isLoading={isLoading}
        data={movieSearchData || data}
        isFetching={isFetching}
      />
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <Movies
            movies={
              movieSearchData?.results?.length > 0
                ? movieSearchData?.results
                : data?.results
            }
          />
        </>
      )} */}
    </>
  );
};

export default HomePage;
