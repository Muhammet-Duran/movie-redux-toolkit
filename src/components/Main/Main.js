import Movies from "components/Movies/Movies";
import React from "react";

const Main = ({ isLoading, isFetching, error, data, movieSearchData }) => {
  console.log(movieSearchData);
  return (
    <>
      {isLoading || isFetching ? (
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
      )}
    </>
  );
};

export default Main;
