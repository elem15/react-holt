import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchParams } from "../types/APIResponses";

const initialState = {
  value: {
    animal: "",
    location: "",
    breed: "",
  } as SearchParams,
};
const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<SearchParams>) => {
      state.value = action.payload;
    },
  },
});

export const { add } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
