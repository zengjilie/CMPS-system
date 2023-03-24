import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DropdownHeaderType,
  DropdownRowType,
  DropdownState,
} from "../../types";

export const dropdownHeader: DropdownHeaderType = {
  names: ["影片名称", "影片场次", "日期", "购票类型", "总价格"],
  movies: [
    "天气之子",
    "食肉动物",
    "爱丽丝梦游仙境2：镜中奇遇记",
    "谜",
    "饥饿游戏",
    "狮子王",
  ],
  schedules: [
    ["9:35pm", "2:00pm"],
    ["9:40am"],
    ["4:30pm", "7:55pm"],
    ["6:00am"],
    ["6:30pm"],
    ["2:35pm", "9:00pm"],
  ],
  dates: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  types: ["普通票", "打折票", "学生票", "团购票"],
};

const initialState: DropdownState = {
  allDropdowns: [],
};

const dropdownSlice = createSlice({
  name: "dropdowns",
  initialState,
  reducers: {
    addDropdown: (
      state: DropdownState,
      { payload }: PayloadAction<{ dropdownId: string }>
    ) => {
      state.allDropdowns.push({
        dropdownId: payload.dropdownId,
        allValues: {
          movie: dropdownHeader.movies[0],
          schedule: dropdownHeader.schedules[0][0],
          date: dropdownHeader.dates[0],
          type: dropdownHeader.types[0],
          totalprice: "",
        },
      });
    },

    removeDropdown: (
      state: DropdownState,
      { payload }: PayloadAction<{ dropdownId: string }>
    ) => {
      state.allDropdowns = state.allDropdowns.filter(
        (scroll) => scroll.dropdownId !== payload.dropdownId
      );
    },

    updateDropdown: (
      state: DropdownState,
      {
        payload,
      }: PayloadAction<{
        dropdownId: string;
        movie?: string;
        schedule?: string;
        date?: string;
        type?: string;
        totalprice?: string;
      }>
    ) => {
      state.allDropdowns.map((dropdown: DropdownRowType) => {
        if (dropdown.dropdownId === payload.dropdownId) {
          if (payload.movie) {
            dropdown.allValues.movie = payload.movie;
          }
          if (payload.schedule) {
            dropdown.allValues.schedule = payload.schedule;
          }
          if (payload.date) {
            dropdown.allValues.date = payload.date;
          }
          if (payload.type) {
            dropdown.allValues.type = payload.type;
          }
          if (payload.totalprice) {
            dropdown.allValues.totalprice = payload.totalprice;
          }
        } else {
          return scroll;
        }
      });
    },
  },
});

export const { addDropdown, removeDropdown, updateDropdown } =
  dropdownSlice.actions;

export default dropdownSlice.reducer;
