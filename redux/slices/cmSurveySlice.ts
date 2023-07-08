import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// Creative motivation survey

const initialState: SurveyState = {
  allTasks: [
    {
      taskId: "1",
      name: "我喜欢保持好奇心，并试图理解各种各样的事情",
      score: 0,
    },
    {
      taskId: "2",
      name: "当我发现以前从未见过的新事物时，我会感到快乐",
      score: 0,
    },
    {
      taskId: "3",
      name: "我需要学习新东西，因为它可能对我以后的生活有用",
      score: 0,
    },
    { taskId: "4", name: "以我自己独创的方式做事很重要", score: 0 },
    { taskId: "5", name: "当我完全沉浸于创造新事物时，我感觉很好", score: 0 },
    { taskId: "6", name: "如果我想进步，我必须做一些新的事情", score: 0 },
    { taskId: "7", name: "我觉得我创造的东西是有价值的", score: 0 },
    { taskId: "8", name: "当我想出新想法时，我感到满足和快乐", score: 0 },
    { taskId: "9", name: "如果我想有所成就，我需要创造一些新的东西", score: 0 },
  ],
};

const cmSurveySlice = createSlice({
  name: "cmSurvey",
  initialState,
  reducers: {
    updateCMSScore: (
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
export const { updateCMSScore } = cmSurveySlice.actions;
export default cmSurveySlice.reducer;
