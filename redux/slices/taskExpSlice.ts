import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface TaskOption {
  taskNum: number;
  taskName: string;
  score: number;
}
export interface TaskExpType {
  taskOptions: TaskOption[];
}

export interface TaskExpState {
  task_1_1: TaskExpType;
  task_1_2: TaskExpType;
  task_1_3: TaskExpType;
  task_1_4: TaskExpType;
  task_1_5: TaskExpType;
  task_1_6: TaskExpType;
  task_2_1: TaskExpType;
  task_2_2: TaskExpType;
  task_2_3: TaskExpType;
  task_2_4: TaskExpType;
  task_2_5: TaskExpType;
  task_2_6: TaskExpType;
}

const initialState: TaskExpState = {
  task_1_1: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_1_2: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_1_3: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_1_4: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_1_5: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_1_6: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_2_1: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_2_2: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_2_3: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_2_4: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_2_5: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
  task_2_6: {
    taskOptions: [
      {
        taskNum: 1,
        taskName: "我对此测试系统的整体使用体验很满意",
        score: 0,
      },
      {
        taskNum: 2,
        taskName: "我认为此测试系统的界面设计很美观",
        score: 0,
      },
      {
        taskNum: 3,
        taskName: "我能理解演示环节的指导语",
        score: 0,
      },
      {
        taskNum: 4,
        taskName: "我能理解演示环节的操作",
        score: 0,
      },
      {
        taskNum: 5,
        taskName: "我能理解题目中的问题情境",
        score: 0,
      },
      {
        taskNum: 6,
        taskName: "题目中的问题情境能引起我的兴趣",
        score: 0,
      },
      {
        taskNum: 7,
        taskName: "我能理解信息中心展示的内容",
        score: 0,
      },
      {
        taskNum: 8,
        taskName: "我喜欢“记录”这个功能",
        score: 0,
      },
      {
        taskNum: 9,
        taskName: "完成这些问题让我很有成就感",
        score: 0,
      },
      {
        taskNum: 10,
        taskName: "我之后想再次使用此测试系统",
        score: 0,
      },
    ],
  },
};
