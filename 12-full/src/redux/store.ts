import { configureStore } from "@reduxjs/toolkit";
import adoptedPetSlice from "./adoptedPetSlice";
import searchParams from "./searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet: adoptedPetSlice,
    searchParams,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
