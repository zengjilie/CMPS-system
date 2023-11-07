import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isFinishTaskModalOpen: boolean;
  isChangeAnswerModalOpen: boolean;
}

const initialState: ModalState = {
  isFinishTaskModalOpen: false,
  isChangeAnswerModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleFTModal: (state: ModalState) => {
      state.isFinishTaskModalOpen = !state.isFinishTaskModalOpen;
      console.log(state.isFinishTaskModalOpen);
    },
    toggleCAModal: (state: ModalState) => {
      state.isChangeAnswerModalOpen = !state.isChangeAnswerModalOpen;
    },
  },
});

export const { toggleCAModal, toggleFTModal } = modalSlice.actions;
export default modalSlice.reducer;
