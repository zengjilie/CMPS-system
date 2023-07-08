import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// stufy focus survey
// 1 - 5;
//请根据你对数学课的实际感受，选择最符合你实际情况的选项。
const initialState: SurveyState = {
  allTasks: [
    { taskId: "1", name: "我在学校里学习数学很刻苦", score: 0 },
    { taskId: "2", name: "在数学课上，我努力学习", score: 0 },
    { taskId: "3", name: "上数学课时，我积极参加课堂讨论", score: 0 },
    { taskId: "4", name: "上数学课时，我注意力集中", score: 0 },
    { taskId: "5", name: "上数学课时，我认真听讲", score: 0 },
    { taskId: "6", name: "在数学课上，我感觉很好", score: 0 },
    { taskId: "7", name: "学习数学时，我感到兴致勃勃", score: 0 },
    { taskId: "8", name: "上数学课很有意思", score: 0 },
    { taskId: "9", name: "我喜欢在数学课上学习新知识", score: 0 },
    { taskId: "10", name: "在数学课上学习时，我很投入", score: 0 },
    {
      taskId: "11",
      name: "在学习数学时，我会思考这些知识在现实生活中的用途",
      score: 0,
    },
    {
      taskId: "12",
      name: "在学习数学时，我会将新知识与自己的经验关联起来",
      score: 0,
    },
    {
      taskId: "13",
      name: "在学习数学时，我会尝试把新知识与其他科目的相关知识联系起来",
      score: 0,
    },
    {
      taskId: "14",
      name: "在学习数学时，我会尝试将学到的新知识与我已有的知识结合起来",
      score: 0,
    },
    {
      taskId: "15",
      name: "我会对数学学习材料进行深入思考，而不只是读一遍材料",
      score: 0,
    },
    {
      taskId: "16",
      name: "当我学习数学时，我会尝试用新方法整合课程里的各种内容",
      score: 0,
    },
  ],
};

const sfSurveySlice = createSlice({
  name: "sfSurvey",
  initialState,
  reducers: {
    updateSFSScore: (
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
export const { updateSFSScore } = sfSurveySlice.actions;
export default sfSurveySlice.reducer;
