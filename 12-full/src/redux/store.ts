import { configureStore } from "@reduxjs/toolkit";
import adoptedPetSlice from "./adoptedPetSlice";
import { petApi } from "./petApiService";
import searchParams from "./searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet: adoptedPetSlice,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
