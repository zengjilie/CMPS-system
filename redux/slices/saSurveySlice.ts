import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// state anxiety survey
// 1 - 4;
// 请选择最合适描述你此时此刻感觉的选项
const initialState: SurveyState = {
  allTasks: [
    { taskId: "1", name: "我感到紧张束缚", score: 0 },
    { taskId: "2", name: "我感到害怕", score: 0 },
    { taskId: "3", name: "我感到不安", score: 0 },
    { taskId: "4", name: "我是紧张的", score: 0 },
    { taskId: "5", name: "我感到烦乱", score: 0 },
  ],
};

const saSurveySlice = createSlice({
  name: "saSurvey",
  initialState,
  reducers: {
    updateSASScore: (
      state: SurveyState,
      {
        payload,
      }: PayloadAction<{
        taskId: string;
        score: number;
      }>
    ) => {
      state.allTasks.map((task) => {
        if (task.taskId === payload.taskId) {
          task.score = payload.score;
          return task;
        } else {
          return task;
        }
      });
    },
  },
});
export const { updateSASScore } = saSurveySlice.actions;
export default saSurveySlice.reducer;
