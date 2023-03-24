import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      animal: "",
      location: "",
      breed: "",
    },
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { add } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
