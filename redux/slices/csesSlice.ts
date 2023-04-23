import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { csesState } from "../../types";

const initialState: csesState = {
  allTasks: [
    {
      taskId: "1",
      name: "我相信我可以高效地解决复杂的问题。",
      score: 0,
    },
    {
      taskId: "2",
      name: "我相信我的创造能力。",
      score: 0,
    },
    {
      taskId: "3",
      name: "与我的朋友们相比，我的想象力和创造力很强。",
      score: 0,
    },
    {
      taskId: "4",
      name: "我已经多次证明我能应付困难的情况",
      score: 0,
    },
    {
      taskId: "5",
      name: "我相信我可以处理需要创造性思维的问题",
      score: 0,
    },
    {
      taskId: "6",
      name: "我善于提出新颖的解决问题的方案",
      score: 0,
    },
    {
      taskId: "7",
      name: "我相信我可以处理需要创造性思维的问题",
      score: 0,
    },
    {
      taskId: "8",
      name: "我认为我是一个有创造力的人",
      score: 0,
    },
    {
      taskId: "9",
      name: "创造力对我来说很重要",
      score: 0,
    },
    {
      taskId: "10",
      name: "成为一个有创造力的人对我来说很重要",
      score: 0,
    },
    {
      taskId: "11",
      name: "创造力是我的重要的一部分",
      score: 0,
    },
    {
      taskId: "12",
      name: "对我来说，独创性是一个很重要的特点",
      score: 0,
    },
  ],
};

const csesSlice = createSlice({
  name: "cses",
  initialState,
  reducers: {
    updateCSESScore: (
      state: csesState,
      { payload }: PayloadAction<{ taskId: string; score: number }>
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

export const { updateCSESScore } = csesSlice.actions;
export default csesSlice.reducer;
