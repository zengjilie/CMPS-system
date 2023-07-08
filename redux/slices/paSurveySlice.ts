import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// state anxiety survey
// 1 - 4;
// 请选择最合适描述你平时感觉（经常有的感觉）的选项。
const initialState: SurveyState = {
  allTasks: [
    { taskId: "1", name: "我感到困难一一堆集起来，因此无法克服", score: 0 },
    { taskId: "2", name: "我过分忧虑一些事，实际这些事无关紧要", score: 0 },
    { taskId: "3", name: "一些不重要的思想总缠绕着我，并打扰我", score: 0 },
    {
      taskId: "4",
      name: "我产生的沮丧是如此强烈，以致我不能从我的思想中排除它们",
      score: 0,
    },
    {
      taskId: "5",
      name: "当我考虑我目前的事情和利益时，我就陷人紧张状态",
      score: 0,
    },
  ],
};

const paSurveySlice = createSlice({
  name: "paSurvey",
  initialState,
  reducers: {
    updatePASScore: (
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
export const { updatePASScore } = paSurveySlice.actions;
export default paSurveySlice.reducer;
