import { configureStore } from "@reduxjs/toolkit";

import { movieApi } from "../features/movieApi";
import cardSlice from "features/cardSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  cardSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(movieApi.middleware),
});

// import { configureStore } from "@reduxjs/toolkit";
// import { movieApi } from "../features/movieApi";
// import cardSlice from "features/cardSlice";

// export default configureStore({
//   reducer: {
//     cardSlice,
//     [movieApi.reducerPath]: movieApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(movieApi.middleware),
// });
