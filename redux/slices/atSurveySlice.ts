import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// Achievement target survey

const initialState: SurveyState = {
  allTasks: [
    { taskId: "1", name: "对我来说，能表现比其他学生好是重要的", score: 0 },
    {
      taskId: "2",
      name: "我在数学课堂的目标是得到比大多数同学更好的成绩",
      score: 0,
    },
    {
      taskId: "3",
      name: "相对于其他人我努力在数学课堂中表现我的能力",
      score: 0,
    },
    { taskId: "4", name: "我的动机是超越了课堂上其他的人", score: 0 },
    {
      taskId: "5",
      name: "在数学课堂中与其他学生相比时我的表现较好是重要的",
      score: 0,
    },
    {
      taskId: "6",
      name: "我希望在数学课堂上能表现好，向我的家人、朋友、老师或其他人等展现我的能力",
      score: 0,
    },
    { taskId: "7", name: "我经常会设想，假使自己表现不好该怎么办？", score: 0 },
    {
      taskId: "8",
      name: "我会担心，在数学课堂上取得不好成绩的可能性",
      score: 0,
    },
    {
      taskId: "9",
      name: "我恐惧在数学课堂上表现不佳的事经常会刺激我",
      score: 0,
    },
    { taskId: "10", name: "我只想避免在数学课堂上表现不佳", score: 0 },
    {
      taskId: "11",
      name: "我害怕向助教或老师提问时，被认定是愚蠢的问题，让他们认为我不够聪明",
      score: 0,
    },
    { taskId: "12", name: "我在数学课堂的目标是避免表现不佳", score: 0 },
    { taskId: "13", name: "我希望在数学课堂上尽可能地多学习", score: 0 },
    {
      taskId: "14",
      name: "对我来说，重要的是彻底理解数学课程的内容",
      score: 0,
    },
    {
      taskId: "15",
      name: "当我完数学课时，我希望能够获得更广更深的知识",
      score: 0,
    },
    { taskId: "16", name: "我期望完全掌握数学课堂中教授的知识", score: 0 },
    {
      taskId: "17",
      name: "在数学课堂上，我更喜欢虽然很难但能引起我好奇心的知识",
      score: 0,
    },
    {
      taskId: "18",
      name: "在数学课堂上，我更喜欢能激发我挑战的知识",
      score: 0,
    },
  ],
};

const atSurveySlice = createSlice({
  name: "atSurvey",
  initialState,
  reducers: {
    updateATSScore: (
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
export const { updateATSScore } = atSurveySlice.actions;
export default atSurveySlice.reducer;
