import { createSlice } from "@reduxjs/toolkit";
import { InfoState } from "../../types";

const initialState: InfoState[] = [
  { name: "天气预报", on: false },
  { name: "五一劳动节放假通知", on: false },
  { name: "五一劳动节的发展历史", on: false },
  { name: "电影院观影注意事项", on: false },
  { name: "天悦电影院的场次安排表", on: false },
  { name: "五一劳动节期间上映影片简介", on: false },
];

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setCurrentInfo: (state: InfoState[], action: any) => {
      //Reset all current task
      for (const info of state) {
        info.on = false;
      }

      //Only set current info to true
      const infoIndex: number = action.payload.infoNum;
      state[infoIndex].on = true; // update current info state to true
    },
  },
});

export const { setCurrentInfo } = infoSlice.actions;
export default infoSlice.reducer;
