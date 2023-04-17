import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DropdownHeaderType,
  DropdownRowType,
  DropdownState,
} from "../../types";

export const dropdownHeader: DropdownHeaderType = {
  names: ["红星", "影片名称", "影片场次", "日期", "购票类型", "总价格"],
  movies: [
    "",
    "天气之子",
    "食肉动物",
    "爱丽丝梦游仙境2：镜中奇遇记",
    "谜",
    "饥饿游戏",
    "狮子王",
  ],
  schedules: [
    [""],
    ["9:35pm", "2:00pm"],
    ["9:40am"],
    ["4:30pm", "7:55pm"],
    ["6:00am"],
    ["6:30pm"],
    ["2:35pm", "9:00pm"],
  ],
  dates: ["", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  types: ["", "普通票", "打折票", "学生票", "团购票"],
};

const initialState: DropdownState = {
  allDropdowns: [],
  finalDropdown: {
    dropdownId: "task_1_6_2",
    allValues: {
      stared: false,
      movie: dropdownHeader.movies[0],
      schedule: dropdownHeader.schedules[0][0],
      date: dropdownHeader.dates[0],
      type: dropdownHeader.types[0],
      totalprice: "",
    },
  },
};

const dropdownSlice = createSlice({
  name: "dropdowns",
  initialState,
  reducers: {
    addDropdown: (
      state: DropdownState,
      { payload }: PayloadAction<{ dropdownId: string }>
    ) => {
      if (state.allDropdowns.length < 20) {
        state.allDropdowns.push({
          dropdownId: payload.dropdownId,
          allValues: {
            stared: false,
            movie: dropdownHeader.movies[0],
            schedule: dropdownHeader.schedules[0][0],
            date: dropdownHeader.dates[0],
            type: dropdownHeader.types[0],
            totalprice: "",
          },
        });
      }
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
        stared?: boolean;
        movie?: string;
        schedule?: string;
        date?: string;
        type?: string;
        totalprice?: string;
      }>
    ) => {
      state.allDropdowns.map((dropdown: DropdownRowType) => {
        if (dropdown.dropdownId === payload.dropdownId) {
          if (Object.keys(payload).includes("stared")) {
            dropdown.allValues.stared = !payload.stared;
          } else if (Object.keys(payload).includes("movie") && payload.movie) {
            dropdown.allValues.movie = payload.movie;
          } else if (
            Object.keys(payload).includes("schedule") &&
            payload.schedule
          ) {
            dropdown.allValues.schedule = payload.schedule;
          } else if (Object.keys(payload).includes("date") && payload.date) {
            dropdown.allValues.date = payload.date;
          } else if (Object.keys(payload).includes("type") && payload.type) {
            dropdown.allValues.type = payload.type;
          } else if (Object.keys(payload).includes("totalprice")) {
            dropdown.allValues.totalprice = payload.totalprice as string;
          }
        } else {
          return scroll;
        }
      });
    },
    //only use in task6
    updateFinalDropdown: (
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
      if (Object.keys(payload).includes("movie") && payload.movie) {
        state.finalDropdown.allValues.movie = payload.movie;
      } else if (
        Object.keys(payload).includes("schedule") &&
        payload.schedule
      ) {
        state.finalDropdown.allValues.schedule = payload.schedule;
      } else if (Object.keys(payload).includes("date") && payload.date) {
        state.finalDropdown.allValues.date = payload.date;
      } else if (Object.keys(payload).includes("type") && payload.type) {
        state.finalDropdown.allValues.type = payload.type;
      } else if (Object.keys(payload).includes("totalprice")) {
        state.finalDropdown.allValues.totalprice = payload.totalprice as string;
      }
    },
  },
});

export const {
  addDropdown,
  removeDropdown,
  updateDropdown,
  updateFinalDropdown,
} = dropdownSlice.actions;

export default dropdownSlice.reducer;
