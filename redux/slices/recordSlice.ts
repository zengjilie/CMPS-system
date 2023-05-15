import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecordType } from "../../types";
import { API } from "../../lib/api";

const initialState: RecordType[] = [];

const LIMIT = 5;

export const addRecord = createAsyncThunk<any, any, { state: any }>(
  "records/addRecord",
  async (record: RecordType, { getState, dispatch }) => {
    let records: RecordType[] = getState()?.records as RecordType[];
    if (records.length >= LIMIT) {
      try {
        const response = await API.post({ path: "/records", data: records });
        console.log(response);
      } catch (error) {
        console.log("Add record to db error: ", error);
      }
    }
    return record;
  }
);

export const addLastRecord = createAsyncThunk<any, any, { state: any }>(
  "records/addLastRecord",
  async (record: RecordType, { getState }) => {
    let records: RecordType[] = getState()?.records as RecordType[];
    try {
      const response = await API.post({
        path: "/records",
        data: [...records, record],
      });
      console.log(response);
    } catch (error) {
      console.log("Add last record to db error: ", error);
    }
  }
);
export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        addRecord.fulfilled,
        (state, { payload }: PayloadAction<{ record: RecordType }>) => {
          if (state.length >= LIMIT) {
            return [payload.record];
          } else {
            console.log(payload);
            return [...state, payload.record];
          }
        }
      )
      .addCase(addLastRecord.fulfilled, () => {});
  },
});

export default recordSlice.reducer;
