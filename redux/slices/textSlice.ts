import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TextState {
  task_1_1_a: string;
  task_1_5_b: string;
  task_1_6_a: string;
  task_1_6_b: string;
  task_2_1_a: string;
  task_2_5_b: string;
  task_2_6_a: string;
  task_2_6_b: string;
}

const initialState: TextState = {
  task_1_1_a: "",
  task_1_5_b: "",
  task_1_6_a: "",
  task_1_6_b: "",
  task_2_1_a: "",
  task_2_5_b: "",
  task_2_6_a: "",
  task_2_6_b: "",
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
