import { createSlice } from "@reduxjs/toolkit";

export interface EquationState {
  on: boolean;
}

const initialState: EquationState = {
  on: false,
};

const equationSlice = createSlice({
  name: "equation",
  initialState,
  reducers: {
    showEqua: (state: EquationState) => {
      state.on = true;
    },
    hideEqua: (state: EquationState) => {
      state.on = false;
    },
  },
});

export const { showEqua, hideEqua } = equationSlice.actions;
export default equationSlice.reducer;
