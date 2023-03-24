import { configureStore } from "@reduxjs/toolkit";
import adoptedPetSlice from "./adoptedPetSlice";
import { petApi } from "./petApiService";
import searchParamsSlice from "./searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet: adoptedPetSlice,
    searchParams: searchParamsSlice,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
