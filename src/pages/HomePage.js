import { useState } from "react";
import Filters from "components/Filters/Filters";
import Movies from "components/Movies/Movies";
import {
  useGetMoviesQuery,
  useGetTvEpisodesQuery,
  useGetReleaseYearQuery,
  useGetSearchQuery,
} from "features/movieApi";
import { useDispatch, useSelector } from "react-redux";
import { movieQuery } from "features/cardSlice";

const HomePage = () => {
  const { data: popular, error, isLoading } = useGetMoviesQuery();
  // const { data: movieSearch } = useGetSearchQuery(movieQuery);
  // const { query } = useSelector((state) => state.cardSlice);
  // console.log(query, "onSubmit");
  // console.log(movieSearch, "arama");

  // const [movies, setMovies] = useState(popular);

  return (
    <>
      <Filters />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <Movies movies={popular} />
        </>
      )}
    </>
  );
};

export default HomePage;
