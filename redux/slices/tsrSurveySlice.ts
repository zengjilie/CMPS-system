import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SurveyState } from "../../types";

// Teacher Student Relationship Survey
// 1 - 5;
//请根据你对数学老师的实际感受，选择最符合你实际情况的选项。
const initialState: SurveyState = {
  allTasks: [
    { taskId: "1", name: "我与数学老师之间的关系是亲密而温暖的", score: 0 },
    { taskId: "2", name: "我和数学老师似乎总是在对着干", score: 0 },
    { taskId: "3", name: "当学习有进步时，数学老师就会表扬我", score: 0 },
    { taskId: "4", name: "课下，我能和数学老师畅所欲言", score: 0 },
    { taskId: "5", name: "当我有困难的时候，会想到找数学老师帮助我", score: 0 },
    { taskId: "6", name: "我觉得数学老师对我不公平", score: 0 },
    { taskId: "7", name: "我和数学老师经常看法不一致，有时还会争吵", score: 0 },
    { taskId: "8", name: "目前我和数学老师的关系正是我所希望的", score: 0 },
    { taskId: "9", name: "我对数学老师的惩罚感到愤怒，有时也会反抗", score: 0 },
    { taskId: "10", name: "我总想和数学老师呆在一块儿，不想分开", score: 0 },
    { taskId: "11", name: "当我学习有困难时，数学老师会及时帮助我", score: 0 },
    {
      taskId: "12",
      name: "即使在我难受或委屈的时候，数学老师也很少关心我",
      score: 0,
    },
    { taskId: "13", name: "我会自然地把自己的事情告诉数学老师", score: 0 },
    { taskId: "14", name: "当我犯错时，数学老师会惩罚或批评我", score: 0 },
    {
      taskId: "15",
      name: "在学习上遇到难题时，数学老师会耐心地给我讲解",
      score: 0,
    },
    { taskId: "16", name: "我希望和数学老师的关系更友好", score: 0 },
    { taskId: "17", name: "与数学老师相处使我感到很费劲", score: 0 },
    { taskId: "18", name: "我愿意和数学老师分享学习的经历及感受", score: 0 },
    { taskId: "19", name: "我为自己和数学老师的关系不好而发愁", score: 0 },
    {
      taskId: "20",
      name: "当我没有信心、回答问题紧张时，数学老师常常鼓励我",
      score: 0,
    },
    { taskId: "21", name: "在学习上，数学老师的鼓励让我更有自信", score: 0 },
    { taskId: "22", name: "总的来说，我很满意自己和数学老师的关系", score: 0 },
    { taskId: "23", name: "我特别愿意和数学老师一起做事情", score: 0 },
  ],
};

const tsrSurveySlice = createSlice({
  name: "tsrSurvey",
  initialState,
  reducers: {
    updateTSRSScore: (
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
export const { updateTSRSScore } = tsrSurveySlice.actions;
export default tsrSurveySlice.reducer;
