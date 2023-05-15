import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MSState } from "../../types";

//"task_1_2_1", means task1, question2, option1
//"task_1_3_1", means task1, question3, option1

const initialState: MSState = {
  allMSs: {
    ms1Task1: [
      { optionId: "task_1_1", name: "A 天气预报", selected: false },
      { optionId: "task_1_2", name: "B 五一劳动节放假通知", selected: false },
      { optionId: "task_1_3", name: "C 五一劳动节的发展历史", selected: false },
      { optionId: "task_1_4", name: "D 观影注意事项", selected: false },
      {
        optionId: "task_1_5",
        name: "E 天悦电影院的场次安排表",
        selected: false,
      },
      { optionId: "task_1_6", name: "F 影片简介", selected: false },
      {
        optionId: "task_1_7",
        name: "G 天悦电影院的购买优惠说明",
        selected: false,
      },
    ],
    ms2Task1: [
      {
        optionId: "task_1_2_1",
        name: "A  该影片是否适合初中生观看",
        selected: false,
      },
      { optionId: "task_1_2_2", name: "B 电影票的价格", selected: false },
      {
        optionId: "task_1_2_3",
        name: "C  该电影是否已有人看过",
        selected: false,
      },
      { optionId: "task_1_2_4", name: "D 影片的时间安排", selected: false },
      { optionId: "task_1_2_5", name: "E 每个人的假期安排", selected: false },
      { optionId: "task_1_2_6", name: "F 出行方式", selected: false },
      {
        optionId: "task_1_2_7",
        name: "G  该影片是否提供优惠票",
        selected: false,
      },
      { optionId: "task_1_2_8", name: "H 天气状况", selected: false },
    ],
    ms1Task2: [
      { optionId: "task_2_2_1", name: "A 天气预报", selected: false },
      { optionId: "task_2_2_2", name: "B 露营活动策划书", selected: false },
      { optionId: "task_2_2_3", name: "C 露营地点介绍", selected: false },
      { optionId: "task_2_2_4", name: "D 露营装备清单", selected: false },
      { optionId: "task_2_2_5", name: "E 露营人员报名统计表", selected: false },
      { optionId: "task_2_2_6", name: "F 帐篷介绍", selected: false },
      { optionId: "task_2_2_7", name: "G 搭建帐篷指南", selected: false },
    ],
    ms2Task2: [
      { optionId: "task_2_3_1", name: "A  天气状况", selected: false },
      {
        optionId: "task_2_3_2",
        name: "B  同一个帐篷中只能住同一性别的人",
        selected: false,
      },
      {
        optionId: "task_2_3_3",
        name: "C  每一个帐篷都至少有一名成人",
        selected: false,
      },
      { optionId: "task_2_3_4", name: "D  露营地点的选择", selected: false },
      { optionId: "task_2_3_5", name: "E  参加露营的人数", selected: false },
      { optionId: "task_2_3_6", name: "F  购买帐篷的预算", selected: false },
      {
        optionId: "task_2_3_7",
        name: "G  每种帐篷能容纳的最大人数",
        selected: false,
      },
      { optionId: "task_2_3_8", name: "H  每种帐篷的价格", selected: false },
      { optionId: "task_2_3_9", name: "I  每种帐篷的库存", selected: false },
    ],
  },
};

const msSlice = createSlice({
  name: "ms",
  initialState,
  reducers: {
    toggleOption: (
      state: MSState,
      {
        payload,
      }: PayloadAction<{
        taskId: "ms1Task1" | "ms2Task1" | "ms1Task2" | "ms2Task2";
        optionId: string;
      }>
    ) => {
      state.allMSs[payload.taskId] = state.allMSs[payload.taskId].map(
        (option) => {
          if (option.optionId === payload.optionId) {
            option.selected = !option.selected;

            if (option.selected) {
              //log action
            } else {
              //log action
            }
            return option;
          } else {
            return option;
          }
        }
      );
    },
  },
});

export const { toggleOption } = msSlice.actions;
export default msSlice.reducer;
