import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// Creative Atmosphere Survey
// 1 - 5;
//请根据你的实际感受，选择最符合你实际情况的选项。
const initialState: SurveyState = {
  allTasks: [
    { taskId: "1", name: "我的老师鼓励我展示创造力", score: 0 },
    { taskId: "2", name: "我的同学们支持尝试新的学习方式", score: 0 },
    { taskId: "3", name: "学校鼓励我在学习中发挥创造力", score: 0 },
    { taskId: "4", name: "我有足够的资源来进行创造性学习", score: 0 },
    { taskId: "5", name: "我的学习任务具有挑战性", score: 0 },
    { taskId: "6", name: "我在学习中可以自主选择如何完成任务", score: 0 },
    { taskId: "7", name: "学校的规定限制了学习过程中的创造性发挥", score: 0 },
    { taskId: "8", name: "学校政策对于学习过程中的自发性产生了阻碍", score: 0 },
    { taskId: "9", name: "在有限的学习时间内，很难展示创造性", score: 0 },
  ],
};

const catoSurveySlice = createSlice({
  name: "catoSurvey",
  initialState,
  reducers: {
    updateCATOSScore: (
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
export const { updateCATOSScore } = catoSurveySlice.actions;
export default catoSurveySlice.reducer;
