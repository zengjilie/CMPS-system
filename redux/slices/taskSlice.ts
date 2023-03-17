import { createSlice } from "@reduxjs/toolkit";
import { TaskState } from "../../types";

const initialState: TaskState[] = [
  {
    taskname: "问题一",
    finished: false,
    current: false,
  },
  {
    taskname: "问题二",
    finished: false,
    current: false,
  },
  {
    taskname: "问题三",
    finished: false,
    current: false,
  },
  {
    taskname: "问题四",
    finished: false,
    current: false,
  },
  {
    taskname: "问题五",
    finished: false,
    current: false,
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    finishTask: (state: TaskState[], action: any) => {
      const taskIndex: number = action.payload.taskNum - 1; // If taskNum is 1, then taskIndex is 0
      state[taskIndex].finished = true; // update task's finished state to true
    },

    setCurrentTask: (state: TaskState[], action: any) => {
      //Reset all current task
      for (const task of state) {
        task.current = false;
      }

      //Only set current task to true
      const taskIndex: number = action.payload.taskNum - 1; // If taskNum is 1, then taskIndex is 0
      state[taskIndex].current = true; // update task's current state to true
    },
  },
});

export const { finishTask, setCurrentTask } = taskSlice.actions;
export default taskSlice.reducer;
