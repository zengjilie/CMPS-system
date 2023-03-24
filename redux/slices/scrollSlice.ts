import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScrollHeaderType, ScrollRowType, ScrollState } from "../../types";

export const scrollHeader: ScrollHeaderType = [
  { name: "类型一", price: 1 },
  { name: "类型二", price: 1 },
  { name: "类型三", price: 1 },
  { name: "类型四", price: 1 },
  { name: "总价", price: 0 },
];

const initialState: ScrollState = {
  allScrolls: [],
};

const scrollSlice = createSlice({
  name: "scrolls",
  initialState,
  reducers: {
    addScroll: (
      state: ScrollState,
      { payload }: PayloadAction<{ scrollId: string }>
    ) => {
      state.allScrolls.push({
        scrollId: payload.scrollId,
        allValues: {
          type1: 0,
          type2: 0,
          type3: 0,
          type4: 0,
          totalprice: 0,
        },
      });
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
        typeIndex: 1 | 2 | 3 | 4;
        value: number;
      }>
    ) => {
      state.allScrolls.map((scroll: ScrollRowType) => {
        if (scroll.scrollId === payload.scrollId) {
          scroll.allValues[`type${payload.typeIndex}`] = payload.value;

          // Update total price
          scroll.allValues.totalprice =
            scroll.allValues.type1 * scrollHeader[0].price +
            scroll.allValues.type2 * scrollHeader[1].price +
            scroll.allValues.type3 * scrollHeader[2].price +
            scroll.allValues.type4 * scrollHeader[3].price;
        } else {
          return scroll;
        }
      });
    },
  },
});

export const { addScroll, removeScroll, updateScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
