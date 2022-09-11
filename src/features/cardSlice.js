import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  query: "",
};

const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    movieQuery: (state, action) => {
      //   state.data = action.payload?.data || false;
      state.query = action.payload;
    },
  },
});
export const { movieQuery } = cardSlice.actions;

export default cardSlice.reducer;
