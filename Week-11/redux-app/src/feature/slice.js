import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, reset } = counterSlice.actions;

export default counterSlice.reducer;
