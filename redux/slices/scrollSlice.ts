import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScrollHeaderType, ScrollRowType, ScrollState } from "../../types";

export const scrollHeader: ScrollHeaderType = [
  { name: "红星" },
  { name: "A1" },
  { name: "A2" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "总价" },
];

const initialState: ScrollState = {
  allScrolls: [],
  finalScroll: {
    scrollId: "task_2_6_2",
    allValues: {
      stared: false,
      type1: "0",
      type2: "0",
      type3: "0",
      type4: "0",
      type5: "0",
      totalprice: "",
    },
  },
};

const scrollSlice = createSlice({
  name: "scrolls",
  initialState,
  reducers: {
    addScroll: (
      state: ScrollState,
      { payload }: PayloadAction<{ scrollId: string }>
    ) => {
      if (state.allScrolls.length < 20) {
        state.allScrolls.push({
          scrollId: payload.scrollId,
          allValues: {
            stared: false,
            type1: "0",
            type2: "0",
            type3: "0",
            type4: "0",
            totalprice: "",
          },
        });
      }
    },

    removeScroll: (
      state: ScrollState,
      { payload }: PayloadAction<{ scrollId: string }>
    ) => {
      state.allScrolls = state.allScrolls.filter(
        (scroll) => scroll.scrollId !== payload.scrollId
      );
    },

    updateScroll: (
      state: ScrollState,
      {
        payload,
      }: PayloadAction<{
        scrollId: string;
        stared?: boolean;
        type1?: string;
        type2?: string;
        type3?: string;
        type4?: string;
        totalprice?: string;
      }>
    ) => {
      state.allScrolls.map((scroll: ScrollRowType) => {
        if (scroll.scrollId === payload.scrollId) {
          if (Object.keys(payload).includes("stared")) {
            scroll.allValues.stared = !payload.stared;
          } else if (Object.keys(payload).includes("type1") && payload.type1) {
            scroll.allValues.type1 = payload.type1;
          } else if (Object.keys(payload).includes("type2") && payload.type2) {
            scroll.allValues.type2 = payload.type2;
          } else if (Object.keys(payload).includes("type3") && payload.type3) {
            scroll.allValues.type3 = payload.type3;
          } else if (Object.keys(payload).includes("type4") && payload.type4) {
            scroll.allValues.type4 = payload.type4;
          } else if (Object.keys(payload).includes("totalprice")) {
            scroll.allValues.totalprice = payload.totalprice as string;
          }
        } else {
          return scroll;
        }
      });
    },

    updateFinalScroll: (
      state: ScrollState,
      {
        payload,
      }: PayloadAction<{
        scrollId: string;
        type1?: string;
        type2?: string;
        type3?: string;
        type4?: string;
        type5?: string;
        totalprice?: string;
      }>
    ) => {
      if (Object.keys(payload).includes("type1") && payload.type1) {
        state.finalScroll.allValues.type1 = payload.type1;
      } else if (Object.keys(payload).includes("type2") && payload.type2) {
        state.finalScroll.allValues.type2 = payload.type2;
      } else if (Object.keys(payload).includes("type3") && payload.type3) {
        state.finalScroll.allValues.type3 = payload.type3;
      } else if (Object.keys(payload).includes("type4") && payload.type4) {
        state.finalScroll.allValues.type4 = payload.type4;
      } else if (Object.keys(payload).includes("type5") && payload.type5) {
        state.finalScroll.allValues.type5 = payload.type5;
      } else if (Object.keys(payload).includes("totalprice")) {
        state.finalScroll.allValues.totalprice = payload.totalprice as string;
      }
    },
  },
});

export const { addScroll, removeScroll, updateScroll, updateFinalScroll } =
  scrollSlice.actions;
export default scrollSlice.reducer;
