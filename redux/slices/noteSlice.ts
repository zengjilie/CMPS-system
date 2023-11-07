import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NoteState, TaskSetType } from "../../types";

const initialState: NoteState = {
  task_1: {
    allNotes: [],
  },
  task_2: {
    allNotes: [],
  },
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (
      state: NoteState,
      { payload }: PayloadAction<{ taskSet: TaskSetType; noteId: string }>
    ) => {
      state[payload.taskSet].allNotes.push({
        noteId: payload.noteId,
        text: "",
      });
    },

    removeNote: (
      state: NoteState,
      { payload }: PayloadAction<{ taskSet: TaskSetType; noteId: string }>
    ) => {
      state[payload.taskSet].allNotes = state[payload.taskSet].allNotes.filter(
        (note) => note.noteId !== payload.noteId
      );
    },

    updateNote: (
      state: NoteState,
      {
        payload,
      }: PayloadAction<{
        taskSet: TaskSetType;
        noteId: string;
        text: string;
      }>
    ) => {
      state[payload.taskSet].allNotes.map((note) => {
        if (note.noteId === payload.noteId) {
          note.text = payload.text;
          return note;
        } else {
          return note;
        }
      });
    },
  },
});

export const { addNote, updateNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
