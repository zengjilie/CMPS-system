import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskProgressState } from "../../types";

const initialState: TaskProgressState = {
  task_1: {
    taskName: "五一节买电影票",
    taskOptions: [
      {
        id: "1",
        name: "问题一",
        finished: false,
        current: false,
      },
      {
        id: "2",
        name: "问题二",
        finished: false,
        current: false,
      },
      {
        id: "3",
        name: "问题三",
        finished: false,
        current: false,
      },
      {
        id: "4",
        name: "问题四",
        finished: false,
        current: false,
      },
      {
        id: "5",
        name: "问题五",
        finished: false,
        current: false,
      },
      {
        id: "6",
        name: "问题六",
        finished: false,
        current: false,
      },
      {
        id: "exp",
        name: "问卷",
        finished: false,
        current: false,
      },
    ],
  },
  task_2: {
    taskName: "露营租用帐篷",
    taskOptions: [
      {
        id: "1",
        name: "问题一",
        finished: false,
        current: false,
      },
      {
        id: "2",
        name: "问题二",
        finished: false,
        current: false,
      },
      {
        id: "3",
        name: "问题三",
        finished: false,
        current: false,
      },
      {
        id: "4",
        name: "问题四",
        finished: false,
        current: false,
      },
      {
        id: "5",
        name: "问题五",
        finished: false,
        current: false,
      },
      {
        id: "6",
        name: "问题六",
        finished: false,
        current: false,
      },
      {
        id: "exp",
        name: "问卷",
        finished: false,
        current: false,
      },
    ],
  },
};

const taskSlice = createSlice({
  name: "taskProgress",
  initialState,
  reducers: {
    finishTask: (
      state: TaskProgressState,
      {
        payload,
      }: PayloadAction<{ taskSet: keyof TaskProgressState; taskId: string }>
    ) => {
      state[payload.taskSet].taskOptions[Number(payload.taskId) - 1].finished =
        true; // update task's finished state to true
    },
  },
});

export const { finishTask } = taskSlice.actions;
export default taskSlice.reducer;
