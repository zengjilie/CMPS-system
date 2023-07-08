import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

const initialState: SurveyState = {
  allTasks: [
    {
      taskId: "1",
      name: "如果有适当的条件，每个人都能在某个时候创造出伟大的东西",
      score: 0,
    },
    {
      taskId: "2",
      name: "任何人都可以将他或她的创造力提升到一定水平",
      score: 0,
    },
    {
      taskId: "3",
      name: "熟能生巧、坚持不懈和努力拼搏是提高个人的创造力的最佳途径",
      score: 0,
    },

    {
      taskId: "4",
      name: "罗马非一日建成——提高创造力需要努力拼搏，后天的努力远比天赋重要",
      score: 0,
    },
    {
      taskId: "5",
      name: "你表现出何种创造力水平并不重要，你总有机会取提高自己的创造力",
      score: 0,
    },
    {
      taskId: "6",
      name: "除非你天生就是一个很有创造力的人，否则通过后天努力很难提高创造力",
      score: 0,
    },
    {
      taskId: "7",
      name: "你必须天生就是一个很有创造力的人——如果没有天赋，你很难成为一个真正有创造力的人",
      score: 0,
    },
    {
      taskId: "8",
      name: "虽然创造力是可以提高的，但是真正有创造力的人大多是天生的",
      score: 0,
    },
    {
      taskId: "9",
      name: "有一些人很有创造力，另一些人即使努力也没有创造力",
      score: 0,
    },
    {
      taskId: "10",
      name: "在人的一生中，真正的创造力是天生的、固定不变的",
      score: 0,
    },
  ],
};

const ctSurveySlice = createSlice({
  name: "ct",
  initialState,
  reducers: {
    updateCTSScore: (
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
export const { updateCTSScore } = ctSurveySlice.actions;
export default ctSurveySlice.reducer;
