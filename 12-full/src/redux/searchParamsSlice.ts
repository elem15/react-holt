import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type SearchParams = {
  animal: string;
  location: string;
  breed: string;
};
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
