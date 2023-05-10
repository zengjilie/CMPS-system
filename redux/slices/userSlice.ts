import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types";

const initialState: UserState = {
  class: "",
  fullname: "",
  grade: "",
  school: "",
  schoolId: "",
  sex: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (
      state: UserState,
      {
        payload,
      }: PayloadAction<{
        class: string;
        fullname: string;
        grade: string;
        school: string;
        schoolId: string;
        sex: string;
      }>
    ) => {
      //set fullname
      state.class = payload.class;
      state.fullname = payload.fullname;
      state.grade = payload.grade;
      state.school = payload.school;
      state.schoolId = payload.schoolId;
      state.sex = payload.sex;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
