import React, { useState } from "react";
import Delete from "../Icon/Delete";
import styles from "./NoteCard.module.scss";
import { useDispatch } from "react-redux";
import { removeNote, updateNote } from "../../redux/slices/noteSlice";
import { useRefresh } from "../../lib/hooks/useRefresh";

type AppProps = {
  noteId: string;
  text: string;
};

function NoteCard({ noteId, text }: AppProps) {
  const dispatch = useDispatch();

  const inputHander = (e: any) => {
    dispatch(updateNote({ noteId, text: e.target.value }));
  };

  return (
    <div className={styles["note-card"]}>
      <input
        type="text"
        value={text}
        placeholder="请输入..."
        onChange={(e: any) => inputHander(e)}
      />
      <Delete
        width={20}
        height={20}
        onClick={() => dispatch(removeNote({ noteId }))}
      />
    </div>
  );
}

export default NoteCard;
