import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${API_KEY}&language=tr-TR&page=1`,
    }),

    // genre/tv/list?api_key=${API_KEY}&with_network=123&language=tr-TR`,
    getTvEpisodes: builder.query({
      query: () =>
        `discover/tv?api_key=${API_KEY}&with_network=123&language=tr-TR`,
    }),
    getReleaseYear: builder.query({
      query: (year) =>
        `discover/movie?api_key=${API_KEY}&language=tr-TR&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`,
    }),
    getSearch: builder.query({
      query: (query) =>
        `/search/movie?query=${query}&language=tr-TR&api_key=${API_KEY}&page=1`,
    }),
    getDetail: builder.query({
      query: (queryId) => `movie/${queryId}?api_key=${API_KEY}&language=tr-TR`,
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
