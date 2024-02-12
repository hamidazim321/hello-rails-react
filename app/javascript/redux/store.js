import greetSlice from "./greetSlice/greetSlice";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    greet: greetSlice
  }
})

export default store