import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { mpsasState } from "../../types";

const initialState: mpsasState = {
  allTasks: [
    { taskId: "1", name: "在我试着理解问题时，会问许多相关问题", score: 0 },
    { taskId: "2", name: "我会从不同的角度来理解问题", score: 0 },
    { taskId: "3", name: "我注意到我理解问题的方式与我朋友不同", score: 0 },
    { taskId: "4", name: "当情况很复杂时，我会弄清楚问题是什么", score: 0 },
    { taskId: "5", name: "我会想很多不同的情况下可能发生的问题。", score: 0 },
    {
      taskId: "6",
      name: "我会从不同角度思考问题，从而得到很多不同的解决方案",
      score: 0,
    },
    { taskId: "7", name: "我对解决某个问题的方案与我大多数朋友不同", score: 0 },
    { taskId: "8", name: "我会想出不止一个方案来解决问题", score: 0 },
    { taskId: "9", name: "我会用几种不同的方法来解决问题", score: 0 },
    { taskId: "10", name: "我会有多个可以选择的计划来解决问题", score: 0 },
    { taskId: "11", name: "我会想出很多方案来判断我的计划是否正确", score: 0 },
    { taskId: "12", name: "我会搜索许多资源来支持我的计划", score: 0 },
    { taskId: "13", name: "当我遇到问题时，我能理解这些问题是什么", score: 0 },
    { taskId: "14", name: "我会努力理解导致问题的原因", score: 0 },
    { taskId: "15", name: "我会寻找对理解问题来说最重要的信息", score: 0 },
    { taskId: "16", name: "我会弄清解决这个问题的目的", score: 0 },
    { taskId: "17", name: "我会弄清解决这个问题的主要任务", score: 0 },
    { taskId: "18", name: "我会搜索符合问题情境要求的解决方案", score: 0 },
    { taskId: "19", name: "我在解决问题时会检查错误", score: 0 },
    { taskId: "20", name: "我会反思我的工作并改正错误", score: 0 },
    { taskId: "21", name: "我会判断解决问题的计划是否成功", score: 0 },
    { taskId: "22", name: "我会减少可以解决问题的方案的数量", score: 0 },
    {
      taskId: "23",
      name: "我会在我想到的几个方案中选择最佳解决方案",
      score: 0,
    },
    { taskId: "24", name: "我会为解决问题设计一个具体的实施计划", score: 0 },
    { taskId: "25", name: "我对发现问题很感兴趣", score: 0 },
    {
      taskId: "26",
      name: "如果我不理解某些东西，我会尝试自己找出答案",
      score: 0,
    },
    {
      taskId: "27",
      name: "当我遇到问题时，我很想知道怎么能解决这个问题",
      score: 0,
    },
    { taskId: "28", name: "当我尝试新想法时,我感觉很好", score: 0 },
    { taskId: "29", name: "我喜欢以自己的方式解决问题", score: 0 },
    { taskId: "30", name: "我尝试用新方式来解决常见的问题", score: 0 },
    {
      taskId: "31",
      name: "我会继续工作到我对自己解决问题的方案感到满意",
      score: 0,
    },
    {
      taskId: "32",
      name: "如果我不会解决某个问题，我会花很多时间来找解决方案",
      score: 0,
    },
    { taskId: "33", name: "我会努力工作，直至自己解决了很难的问题", score: 0 },
    {
      taskId: "34",
      name: "当我遇到问题时，我的父母会等到我想出很多解决方案",
      score: 0,
    },
    {
      taskId: "35",
      name: "当我想出新的解决问题的方案时,我的父母很高兴。",
      score: 0,
    },
    { taskId: "36", name: "我的父母会鼓励我思考解决问题的不同方法", score: 0 },
    { taskId: "37", name: "我的父母会鼓励我自己检查并改正错误", score: 0 },
    { taskId: "38", name: "我的父母会问很多问题来帮助我更好地思考", score: 0 },
    {
      taskId: "39",
      name: "当我努力工作直到解决问题时，我的父母很高兴",
      score: 0,
    },
    {
      taskId: "40",
      name: "当我为了理解问题而问了许多相关问题时，我的父母很高兴",
      score: 0,
    },
    {
      taskId: "41",
      name: "当我敢于尝试不同的解决问题的方法时，我的父母很高兴",
      score: 0,
    },
    { taskId: "42", name: "我的父母会带我去图书馆、博物馆和书店", score: 0 },
    { taskId: "43", name: "我的父母会鼓励我读很多书", score: 0 },
    {
      taskId: "44",
      name: "我的父母会要求我练习，直到我可以做得很好",
      score: 0,
    },
    {
      taskId: "45",
      name: "当我的朋友遇到难题时，他们会要我帮助他们",
      score: 0,
    },
    { taskId: "46", name: "我解决问题比我的朋友更快", score: 0 },
    { taskId: "47", name: "家庭作业或考试中的问题对我来说很简单", score: 0 },
    { taskId: "48", name: "当老师问问题时，我知道这些问题的答案", score: 0 },
    { taskId: "49", name: "我的成绩比我的朋友更好", score: 0 },
  ],
};

const mpsasSlice = createSlice({
  name: "mpsas",
  initialState,
  reducers: {
    updateMPSASScore: (
      state: mpsasState,
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

export const { updateMPSASScore } = mpsasSlice.actions;
export default mpsasSlice.reducer;
