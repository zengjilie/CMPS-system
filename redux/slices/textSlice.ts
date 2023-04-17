import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TextState {
  task_1_1_1: string;
  task_1_5_1_b: string;
  task_1_6_1_a: string;
  task_1_6_1_b: string;
  task_2_1_1: string;
  task_2_5_1_b: string;
  task_2_6_1_a: string;
  task_2_6_1_b: string;
}

const initialState: TextState = {
  task_1_1_1: "",
  task_1_5_1_b: "",
  task_1_6_1_a: "",
  task_1_6_1_b: "",
  task_2_1_1: "",
  task_2_5_1_b: "",
  task_2_6_1_a: "",
  task_2_6_1_b: "",
};

const textState = createSlice({
  name: "text",
  initialState,
  reducers: {
    updateText: (
      state: TextState,
      { payload }: PayloadAction<{ textId: keyof TextState; text: string }>
    ) => {
      state[payload.textId] = payload.text;
    },
  },
});

export const { updateText } = textState.actions;
export default textState.reducer;
