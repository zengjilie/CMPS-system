import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { noteState, NoteType } from "../../types";

const initialState: noteState = {
  allNotes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (
      state: noteState,
      { payload }: PayloadAction<{ noteId: string }>
    ) => {
      state.allNotes.push({ noteId: payload.noteId, text: "" });
    },

    removeNote: (
      state: noteState,
      { payload }: PayloadAction<{ noteId: string }>
    ) => {
      state.allNotes = state.allNotes.filter(
        (note) => note.noteId !== payload.noteId
      );
    },

    updateNote: (
      state: noteState,
      { payload }: PayloadAction<{ noteId: string; text: string }>
    ) => {
      state.allNotes.map((note) => {
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
