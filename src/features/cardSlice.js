import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovies: [],
  query: "",
};

const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    movieQuery: (state, action) => {
      state.query = action.payload;
    },
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
    },
  },
});
export const { movieQuery, addToFavorite } = cardSlice.actions;

export default cardSlice.reducer;
