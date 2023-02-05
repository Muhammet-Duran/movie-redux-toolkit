import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovies: [],
  query: "",
  category: "popular",
  skip: true,
  year: null,
  movieDetail: {},
  favoriMovieLength: 0,
};
console.log(initialState);
const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    movieQuery: (state, action) => {
      state.query = action.payload;
    },
    selectCategory: (state, action) => {
      state.category = action.payload.category;
    },
    selectYears: (state, action) => {
      state.year = action.payload.year;
      state.skip = action.payload.skip;
    },
    // favoriteMovieLength: (state, action) => {
    //   state.favoriMovieLength =
    //     state.favoriteMovies && state.favoriteMovies.length;
    // },
    addToFavorite: (state, action) => {
      if (state.favoriteMovies.find((item) => item.id === action.payload.id)) {
        const newList = state.favoriteMovies.filter(
          (item) => item.id !== action.payload.id
        );
        state.favoriteMovies = newList;
      } else {
        const newList = { ...state.favoriteMovies, ...action.payload };
        state.favoriteMovies.push(newList);
      }
      state.favoriMovieLength =
        state.favoriteMovies && state.favoriteMovies.length;
    },
    getMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
  },
});
export const {
  movieQuery,
  addToFavorite,
  getMovieDetail,
  selectCategory,
  selectYears,
  favoriteMovieLength,
} = cardSlice.actions;

export default cardSlice.reducer;
