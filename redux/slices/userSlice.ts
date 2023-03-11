import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  fullname: string;
}
const initialState: UserState = {
  fullname: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullname: (state: UserState, action: any) => {
      //set fullname
      state.fullname = action.payload.fullname;
    },
  },
});

export const { setFullname } = userSlice.actions;
export default userSlice.reducer;
