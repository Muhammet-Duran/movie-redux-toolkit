import { configureStore } from "@reduxjs/toolkit";

import { movieApi } from "../features/movieApi";
import cardSlice from "features/cardSlice";

export default configureStore({
  reducer: {
    cardSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
