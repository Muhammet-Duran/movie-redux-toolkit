import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// https://api.themoviedb.org/3/movie/popular?api_key=852b574574b8faf66be90e238215bb51&language=en-US&page=1

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    // genre/tv/list?api_key=${API_KEY}&with_network=123&language=en-US`,
    getTvEpisodes: builder.query({
      query: () =>
        `discover/tv?api_key=${API_KEY}&with_network=123&language=en-US`,
    }),
    getReleaseYear: builder.query({
      query: (year) =>
        `discover/movie?api_key=${API_KEY}&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`,
    }),
    getSearch: builder.query({
      query: (query) =>
        `/search/movie?query=${query}&api_key=${API_KEY}&page=1`,
    }),
    getDetail: builder.query({
      query: (queryId) => `movie/${queryId}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetTvEpisodesQuery,
  useGetReleaseYearQuery,
  useGetSearchQuery,
  useGetDetailQuery,
} = movieApi;
