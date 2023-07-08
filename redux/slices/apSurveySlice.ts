import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// state anxiety survey
// 1 - 7;
// 请选择最符合你实际情况的选项
const initialState: SurveyState = {
  allTasks: [
    { taskId: "1", name: "当任务接近最后期限时，我的表现也不会糟", score: 0 },
    { taskId: "2", name: "如果赶着完成一件事时，我也能做好", score: 0 },
    {
      taskId: "3",
      name: "即使任务拖到最后一刻才完成，我也会对结果满意",
      score: 0,
    },
    {
      taskId: "4",
      name: "在任务截止日期逼近的情况下工作，对我而言是件痛苦的事",
      score: 0,
    },
    {
      taskId: "5",
      name: "当被迫在压力下工作时，我感到心烦意乱又极不情愿",
      score: 0,
    },
    {
      taskId: "6",
      name: "当时间压力特别大时，我感觉紧张，很难集中精力工作",
      score: 0,
    },
    {
      taskId: "7",
      name: "当必须赶在最后期限前完成任务，我感觉很沮丧",
      score: 0,
    },
    { taskId: "8", name: "为了更高效地利用时间，我有意拖延一些任务", score: 0 },
    { taskId: "9", name: "为使我的动机最大化，我有意地推迟一些工作", score: 0 },
    {
      taskId: "10",
      name: "为了更好的利用时间，我有意地推迟一些任务",
      score: 0,
    },
    {
      taskId: "11",
      name: "对我而言某些考试（工作）没有太大价值，我总是将这些考试（工作）的任务延迟到最后才做",
      score: 0,
    },
    {
      taskId: "12",
      name: "我经常在最后一刻才开始工作，发现很难准时完成",
      score: 0,
    },
    { taskId: "13", name: "我经常无法完成自己设定的目标", score: 0 },
    {
      taskId: "14",
      name: "当任务完成时，我经常落在同学的后面",
      score: 0,
    },
    { taskId: "15", name: "一旦开始做某项任务，我总感到很难完成", score: 0 },
  ],
};

const activeProcrastinationSurveySlice = createSlice({
  name: "activeProcrastinationSurvey",
  initialState,
  reducers: {
    updateAPSScore: (
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
export const { updateAPSScore } = activeProcrastinationSurveySlice.actions;
export default activeProcrastinationSurveySlice.reducer;
