import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InfoState } from "../../types";

const initialState: InfoState = {
  allInfos: [
    { name: "天气预报", on: true },
    { name: "露营装备清单", on: false },
    { name: "露营地点介绍", on: false },
    { name: "搭建帐篷指南", on: false },
    { name: "帐篷介绍", on: false },
    { name: "露营活动策划书", on: false },
    { name: "露营人员报名统计表", on: false },
  ],
};

const tentInfoSlice = createSlice({
  name: "tentInfo",
  initialState,
  reducers: {
    setCurrentTentInfo: (
      state: InfoState,
      { payload }: PayloadAction<{ infoNum: number }>
    ) => {
      //Reset all current task
      for (const info of state.allInfos) {
        info.on = false;
      }

      //Only set current info to true
      const infoIndex: number = payload.infoNum;
      state.allInfos[infoIndex].on = true; // update current info state to true
    },
  },
});

export const { setCurrentTentInfo } = tentInfoSlice.actions;
export default tentInfoSlice.reducer;
