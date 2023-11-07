import { createSlice } from "@reduxjs/toolkit";

export interface CalculatorState {
  on: boolean;
}

const initialState: CalculatorState = {
  on: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    showCalc: (state: CalculatorState) => {
      state.on = true;
    },
    hideCalc: (state: CalculatorState) => {
      state.on = false;
    },
  },
});

export const { showCalc, hideCalc } = calculatorSlice.actions;
export default calculatorSlice.reducer;
