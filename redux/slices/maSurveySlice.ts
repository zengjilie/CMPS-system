import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// state anxiety survey
// 1 - 5;
// 请选择当面对以下情况时最符合你实际情况的选项
const initialState: SurveyState = {
  allTasks: [
    { taskId: "1", name: "必须自己完成一份工作表", score: 0 },
    { taskId: "2", name: "在考试前一天想着数学考试", score: 0 },
    { taskId: "3", name: "看着老师在黑板上解一道数学题", score: 0 },
    { taskId: "4", name: "参加数学考试", score: 0 },
    { taskId: "5", name: "第二天要交的数学作业有很多难题", score: 0 },
    { taskId: "6", name: "长时间听老师讲数学", score: 0 },
    { taskId: "7", name: "听班上的另一个孩子解释一道数学题", score: 0 },
    {
      taskId: "8",
      name: "当你开始上数学课的时候，发现你会有一个惊喜的数学测验",
      score: 0,
    },
    { taskId: "9", name: "开始一个新的数学话题", score: 0 },
  ],
};

const maSurveySlice = createSlice({
  name: "maSurvey",
  initialState,
  reducers: {
    updateMASScore: (
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
export const { updateMASScore } = maSurveySlice.actions;
export default maSurveySlice.reducer;
