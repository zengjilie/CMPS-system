import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// Emotional adjustment survey
// 1 - 7;
const initialState: SurveyState = {
  allTasks: [
    {
      taskId: "1",
      name: "当我想感受一些积极情绪（如快乐或高兴）时，我会改变自己思考问题的角度",
      score: 0,
    },
    { taskId: "2", name: "我不会表露自己的情绪", score: 0 },
    {
      taskId: "3",
      name: "当我想少感受一些消极情绪（如悲伤或愤怒）时，我会改变自己思考问题的角度",
      score: 0,
    },
    {
      taskId: "4",
      name: "当感受到积极情绪时，我会让自己平静下来考虑它",
      score: 0,
    },
    { taskId: "5", name: "我控制自己情绪的方式是不表达它们", score: 0 },
    {
      taskId: "6",
      name: "当我想多感受一些积极情绪时，我会改变自己对情境的考虑方式",
      score: 0,
    },
    {
      taskId: "7",
      name: "我会通过改变对情境的思考方式来控制情绪",
      score: 0,
    },
    { taskId: "8", name: "当感受到消极的情绪时，我确定不会表露它们", score: 0 },
    {
      taskId: "9",
      name: "当我想少感受一些消极情绪时，我会改变自己对情境的考虑方式",
      score: 0,
    },
    { taskId: "10", name: "对我来说，用语言或文字来表达情感并不难", score: 0 },
    { taskId: "11", name: "我常常难以从他人的角度看问题", score: 0 },
    { taskId: "12", name: "总的来说，我是一个很有上进心的人", score: 0 },
    { taskId: "13", name: "我经常觉得很难调节自己的情绪", score: 0 },
    { taskId: "14", name: "我经常并不觉得生活是令人愉快的", score: 0 },
    { taskId: "15", name: "在与别人打交道时，我很有效率", score: 0 },
    { taskId: "16", name: "我经常改变想法", score: 0 },
    { taskId: "17", name: "很多时候，我不了解自己的情绪", score: 0 },
    { taskId: "18", name: "我认为我有很多优点", score: 0 },
    { taskId: "19", name: "我常常很难维护自己的权力", score: 0 },
    { taskId: "20", name: "我常常能影响别人的感受", score: 0 },
    { taskId: "21", name: "总的来说，我对大多数事情都持悲观态度", score: 0 },
    { taskId: "22", name: "我身边的人经常抱怨我没有善待他们", score: 0 },
    { taskId: "23", name: "我经常发现很难根据环境来调整我的生活", score: 0 },
    { taskId: "24", name: "总的来说，我能应付压力", score: 0 },
    { taskId: "25", name: "我经常觉得很难向亲近的人表达我的感情", score: 0 },
    { taskId: "26", name: "我通常能设身处地地体会别人的情绪", score: 0 },
    { taskId: "27", name: "我通常很难保持自己的动力", score: 0 },
    {
      taskId: "28",
      name: "当我想控制情绪的时候，我通常都能找到控制情绪的方法",
      score: 0,
    },
    { taskId: "29", name: "总的来说，我对我的生活很满意", score: 0 },
    { taskId: "30", name: "我认为自己是一个很好的谈判者", score: 0 },
    { taskId: "31", name: "我往往会卷入一些后来自己想摆脱的事情", score: 0 },
    { taskId: "32", name: "我经常停下来思考我的感受", score: 0 },
    { taskId: "33", name: "我相信自己有很多优势", score: 0 },
    { taskId: "34", name: "即使知道自己是对的，我也倾向于做出让步", score: 0 },
    { taskId: "35", name: "我似乎没有任何能力左右别人的感受", score: 0 },
    { taskId: "36", name: "我常常相信我的生活会一帆风顺", score: 0 },
    {
      taskId: "37",
      name: "我发现很难和那些亲近的人建立亲密的人际关系",
      score: 0,
    },
    { taskId: "38", name: "通常情况下，我能适应新环境", score: 0 },
    { taskId: "39", name: "别人钦佩我能够放松自己", score: 0 },
  ],
};

const emoSurveySlice = createSlice({
  name: "emoSurvey",
  initialState,
  reducers: {
    updateEMOSScore: (
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
export const { updateEMOSScore } = emoSurveySlice.actions;
export default emoSurveySlice.reducer;
