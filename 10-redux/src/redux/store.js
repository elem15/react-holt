import { configureStore } from '@reduxjs/toolkit';
import adoptedPetSlice from './adoptedPetSlice';

const store = configureStore({
  reducer: {
    adoptedPet: adoptedPetSlice
  }
});

export default store;