import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskExpState, TaskSetType } from "../../types";

const initialState: TaskExpState = {
  task_1: {
    taskName: "五一节买电影票",
    taskOptions: [
      {
        name: "我能理解题目1的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目2的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目3的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目4的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目5的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目6的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我认为题目整体很难",
        score: 0,
      },
    ],
  },
  task_2: {
    taskName: "露营租用帐篷",
    taskOptions: [
      {
        name: "我能理解题目1的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目2的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目3的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目4的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目5的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我能理解题目6的文字信息、图片信息和题目要求",
        score: 0,
      },
      {
        name: "我认为题目整体很难",
        score: 0,
      },
    ],
  },
  task_all: {
    taskName: "测试系统",
    taskOptions: [
      {
        name: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        name: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        name: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        name: "我能理解演示环节的操作",
        score: 0,
      },
      {
        name: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        name: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        name: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        name: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        name: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        name: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
};

const taskExpSlice = createSlice({
  name: "taskExp",
  initialState,
  reducers: {
    updateTaskExpScore: (
      state: TaskExpState,
      {
        payload,
      }: PayloadAction<{
        taskSet: keyof TaskExpState;
        taskNum: number;
        score: number;
      }>
    ) => {
      state[payload.taskSet].taskOptions[payload.taskNum].score = payload.score;
    },
  },
});

export const { updateTaskExpScore } = taskExpSlice.actions;
export default taskExpSlice.reducer;
