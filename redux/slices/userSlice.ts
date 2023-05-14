import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types";
import { API } from "../../lib/api";

const initialState: UserState = {
  userInfo: {
    userclass: "",
    fullname: "",
    grade: "",
    school: "",
    studentid: "",
    sex: "",
  },
  userid: "",
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
        userclass?: string;
        fullname?: string;
        grade?: string;
        school?: string;
        studentid?: string;
        sex?: string;
        userid?: string;
      }>
    ) => {
      if (Object.keys(payload).includes("userclass") && payload.userclass) {
        state.userInfo.userclass = payload.userclass;
      }
      if (Object.keys(payload).includes("fullname") && payload.fullname) {
        state.userInfo.fullname = payload.fullname;
      }
      if (Object.keys(payload).includes("grade") && payload.grade) {
        state.userInfo.grade = payload.grade;
      }
      if (Object.keys(payload).includes("school") && payload.school) {
        state.userInfo.school = payload.school;
      }
      if (Object.keys(payload).includes("studentid") && payload.studentid) {
        state.userInfo.studentid = payload.studentid;
      }
      if (Object.keys(payload).includes("sex") && payload.sex) {
        state.userInfo.sex = payload.sex;
      }
      if (Object.keys(payload).includes("userid") && payload.userid) {
        state.userid = payload.userid;
      }
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
