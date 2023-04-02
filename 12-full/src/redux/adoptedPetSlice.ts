import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../types/APIResponses";

const initialState = { value: null as Pet | null };

const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState,
  reducers: {
    adopt: (state, action: PayloadAction<Pet>) => {
      state.value = action.payload || null;
    },
    unAdopt: (state) => {
      state.value = null;
    },
  },
});

export const { adopt, unAdopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
