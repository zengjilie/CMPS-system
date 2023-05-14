import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RecordType } from "../../types";
import { API } from "../../lib/api";

const initialState: RecordType[] = [];

const limit = 1;

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    addRecord: (
      state: RecordType[],
      { payload }: PayloadAction<{ record: RecordType }>
    ) => {
      state.push(payload.record);

      //check whether record has reached limit
      if (state.length === limit) {
        API.post({ path: "/records", data: state });

        //empty array
        state = [];
      }
    },
  },
});

export const { addRecord } = recordSlice.actions;
export default recordSlice.reducer;
