import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InfoState } from "../../types";

const initialState: InfoState = {
  allInfos: [
    { name: "天气预报", on: true },
    { name: "五一劳动节放假通知", on: false },
    { name: "五一劳动节的发展历史", on: false },
    { name: "电影院观影注意事项", on: false },
    { name: "天悦电影院的场次安排表", on: false },
    { name: "五一劳动节期间上映影片简介", on: false },
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
