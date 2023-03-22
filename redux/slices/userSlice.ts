import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types";

const initialState: UserState = {
  // fullname: "",
  fullname: "曾及洌",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullname: (
      state: UserState,
      { payload }: PayloadAction<{ fullname: string }>
    ) => {
      //set fullname
      state.fullname = payload.fullname;
    },
  },
});

export const { setFullname } = userSlice.actions;
export default userSlice.reducer;
